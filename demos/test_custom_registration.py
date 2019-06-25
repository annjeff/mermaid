"""
This is a test implementation to see how we can use mermaid to implement a custom registration model and a custom
similarity measure.

Contributors:
  Marc Niethammer: mn@cs.unc.edu
"""

# Note: all images have to be in the format BxCxXxYxZ (BxCxX in 1D and BxCxXxY in 2D)
# I.e., in 1D, 2D, 3D we are dealing with 3D, 4D, 5D tensors. B is the batchsize, and C are the channels
# (for example to support color-images or general multi-modal registration scenarios)

from __future__ import print_function
from builtins import str

# first do the torch imports
import torch
import numpy as np

import mermaid.example_generation as eg
import mermaid.module_parameters as pars
import mermaid.smoother_factory as SF
from mermaid.data_wrapper import AdaptVal
import mermaid.multiscale_optimizer as MO

import mermaid.load_default_settings as ds

# general parameters
model_name = 'mySVFNet'

params = pars.ParameterDict(ds.par_algconf)

if ds.load_settings_from_file:
    settingFile = 'test_custom_registration_' + model_name + '_settings.json'
    params.load_JSON(settingFile)

if ds.use_real_images:
    I0,I1,spacing = eg.CreateRealExampleImages(ds.dim).create_image_pair()

else:
    szEx = np.tile( 50, ds.dim )         # size of the desired images: (sz)^dim

    params['square_example_images']=({},'Settings for example image generation')
    params['square_example_images']['len_s'] = int(szEx.min()//6)
    params['square_example_images']['len_l'] = int(szEx.max()//4)

    # create a default image size with two sample squares
    I0,I1,spacing= eg.CreateSquares(ds.dim).create_image_pair(szEx,params)

sz = np.array(I0.shape)

assert( len(sz)==ds.dim+2 )

print ('Spacing = ' + str( spacing ) )

# create the source and target image as pyTorch variables
ISource = AdaptVal(torch.from_numpy( I0.copy() ))
ITarget = AdaptVal(torch.from_numpy( I1 ))

if ds.smooth_images:
    # smooth both a little bit
    params['image_smoothing'] = ds.par_algconf['image_smoothing']
    cparams = params['image_smoothing']
    s = SF.SmootherFactory(sz[2::], spacing).create_smoother(cparams)
    ISource = s.smooth(ISource)
    ITarget = s.smooth(ITarget)

use_map = False # this custom registration algorithm does not use a map, so force it to False
map_low_res_factor = None
mo = MO.MultiScaleRegistrationOptimizer(sz,spacing,use_map,map_low_res_factor,params)

# now customize everything

params['registration_model']['similarity_measure']['type'] = 'mySSD'

import mermaid.similarity_measure_factory as SM

class MySSD(SM.SimilarityMeasure):
    def compute_similarity(self,I0,I1, I0Source=None, phi=None):
        print('Computing my SSD')
        return ((I0 - I1) ** 2).sum() / (0.1**2) * self.volumeElement

mo.add_similarity_measure('mySSD', MySSD)

import mermaid.registration_networks as RN
import mermaid.utils as utils
import mermaid.image_sampling as IS
import mermaid.rungekutta_integrators as RK
import mermaid.forward_models as FM
import mermaid.regularizer_factory as RF

class MySVFNet(RN.RegistrationNetTimeIntegration):
    def __init__(self,sz,spacing,params):
        super(MySVFNet, self).__init__(sz,spacing,params)
        self.v = self.create_registration_parameters()
        self.integrator = self.create_integrator()

    def create_registration_parameters(self):
        return utils.create_ND_vector_field_parameter_multiN(self.sz[2::], self.nrOfImages)

    def get_registration_parameters(self):
        return self.v

    def set_registration_parameters(self, p, sz, spacing):
        self.v.data = p.data
        self.sz = sz
        self.spacing = spacing

    def create_integrator(self):
        cparams = self.params[('forward_model',{},'settings for the forward model')]
        advection = FM.AdvectImage(self.sz, self.spacing)
        pars_to_pass = utils.combine_dict({'v': self.v}, self._get_default_dictionary_to_pass_to_integrator())
        return RK.RK4(advection.f, advection.u, pars_to_pass, cparams)

    def forward(self, I, variables_from_optimizer=None):
        I1 = self.integrator.solve([I], self.tFrom, self.tTo)
        return I1[0]

    def upsample_registration_parameters(self, desiredSz):
        sampler = IS.ResampleImage()
        vUpsampled,upsampled_spacing=sampler.upsample_image_to_size(self.v,self.spacing,desiredSz,spline_order=1)
        return vUpsampled,upsampled_spacing

    def downsample_registration_parameters(self, desiredSz):
        sampler = IS.ResampleImage()
        vDownsampled,downsampled_spacing=sampler.downsample_image_to_size(self.v,self.spacing,desiredSz,spline_order=1)
        return vDownsampled,downsampled_spacing

class MySVFImageLoss(RN.RegistrationImageLoss):
    def __init__(self,v,sz_sim,spacing_sim,sz_model,spacing_model,params):
        super(MySVFImageLoss, self).__init__(sz_sim,spacing_sim,sz_model,spacing_model,params)
        self.v = v
        cparams = params[('loss',{},'settings for the loss function')]
        self.regularizer = (RF.RegularizerFactory(self.spacing_sim).
                            create_regularizer(cparams))

    def compute_regularization_energy(self, I0_source, variables_from_forward_model=None, variables_from_optimizer=False):
        return self.regularizer.compute_regularizer_multiN(self.v)

mo.add_model(model_name,MySVFNet,MySVFImageLoss,use_map=False)
mo.set_model(model_name)

mo.set_visualization( ds.visualize )
mo.set_visualize_step( ds.visualize_step )

mo.set_source_image(ISource)
mo.set_target_image(ITarget)

mo.set_scale_factors( ds.multi_scale_scale_factors )
mo.set_number_of_iterations_per_scale( ds.multi_scale_iterations_per_scale )

# now we also pick a custom optimizer
mo.set_optimizer(torch.optim.Adam)
mo.set_optimizer_params(dict(lr=0.01))

# and now do the optimization
mo.set_light_analysis_on(True)

mo.optimize()

if ds.save_settings_to_file:
    params.write_JSON( 'test_custom_registration_' + model_name + '_settings_clean.json')
    params.write_JSON_comments( 'test_custom_registration_' + model_name + '_settings_comments.json')