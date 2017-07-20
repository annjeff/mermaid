"""
This is a test implementation to see if we can use pyTorch to solve
LDDMM-style registration problems via automatic differentiation.

Contributors:
  Marc Niethammer: mn@cs.unc.edu
"""

# first do the torch imports
from __future__ import print_function
import torch
from torch.autograd import Variable

import utils
import registration_networks as RN

from modules.stn_nd import STN_ND

import numpy as np

import visualize_registration_results as vizReg
import example_generation as eg

# select the desired dimension of the registration
dim = 2
sz = np.tile( 30, dim )         # size of the desired images: (sz)^dim

# create a default image size with two sample squares
cs = eg.CreateSquares(sz)
I0,I1 = cs.create_image_pair()

# spacing so that everything is in [0,1]^2 for now
spacing = 1./(sz-1)
print ('Spacing = ' + str( spacing ) )

# some debugging output to show image gradients
# compute gradients
vizReg.debugOutput( I0, I1, spacing )

# some settings for the registration energy
# Reg[\Phi,\alpha,\gamma] + 1/\sigma^2 Sim[I(1),I_1]
params = dict()

params['sigma']=0.1
params['gamma']=1.
params['alpha']=0.2

params['similarityMeasure'] = 'ssd'
params['regularizer'] = 'helmholtz'

params['numberOfTimeSteps'] = 10

model = RN.SVFNetMap(sz,spacing,params)    # instantiate a stationary velocity field model
print(model)

# create the source and target image as pyTorch variables
ISource = Variable( torch.from_numpy( I0.copy() ), requires_grad=False )
ITarget = Variable( torch.from_numpy( I1 ), requires_grad=False )

# create the identity map [-1,1]^d
id = utils.identityMap(sz)
identityMap = Variable( torch.from_numpy( id ), requires_grad=False )

criterion = RN.SVFLossMap(list(model.parameters())[0],sz,spacing,params) # stationaty velocity field with maps
# use LBFGS as optimizer; this is essential for convergence when not using the Hilbert gradient
optimizer = torch.optim.LBFGS(model.parameters(),lr=1)

stn = STN_ND( dim ) # spatial transformer so we can apply the map

# optimize for a few steps
for iter in range(100):

    def closure():
        optimizer.zero_grad()
        # Forward pass: Compute predicted y by passing x to the model
        phiWarped = model(identityMap)
        # Compute loss
        loss = criterion(phiWarped, ISource, ITarget)
        loss.backward()
        return loss

    optimizer.step(closure)
    phiWarped = model(identityMap)

    if iter%1==0:
        energy, similarityEnergy, regEnergy = criterion.getEnergy(phiWarped, ISource, ITarget)
        print('Iter {iter}: E={energy}, similarityE={similarityE}, regE={regE}'
              .format(iter=iter, energy=energy, similarityE=similarityEnergy, regE=regEnergy))

    if iter%10==0:
            I1Warped = utils.computeWarpedImage(ISource,phiWarped)
            vizReg.showCurrentImages(iter, ISource, ITarget, I1Warped)