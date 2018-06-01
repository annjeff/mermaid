Search.setIndex({docnames:["config_parser","custom_optimizers","custom_pytorch_extensions","data_wrapper","example_generation","fileio","finite_differences","forward_models","image_manipulations","image_sampling","index","load_default_settings","model_factory","module_parameters","multiscale_optimizer","notes/howto_own_registration","notes/installation","notes/parameters","notes/simple_example","notes/todos","registration_networks","regularizer_factory","rungekutta_integrators","similarity_measure_factory","smoother_factory","stn","utils","viewers","visualize_registration_results"],envversion:52,filenames:["config_parser.rst","custom_optimizers.rst","custom_pytorch_extensions.rst","data_wrapper.rst","example_generation.rst","fileio.rst","finite_differences.rst","forward_models.rst","image_manipulations.rst","image_sampling.rst","index.rst","load_default_settings.rst","model_factory.rst","module_parameters.rst","multiscale_optimizer.rst","notes/howto_own_registration.rst","notes/installation.rst","notes/parameters.rst","notes/simple_example.rst","notes/todos.rst","registration_networks.rst","regularizer_factory.rst","rungekutta_integrators.rst","similarity_measure_factory.rst","smoother_factory.rst","stn.rst","utils.rst","viewers.rst","visualize_registration_results.rst"],objects:{"":{config_parser:[0,0,0,"-"],custom_optimizers:[1,0,0,"-"],data_wrapper:[3,0,0,"-"],finite_differences:[6,0,0,"-"],image_manipulations:[8,0,0,"-"],load_default_settings:[11,0,0,"-"],module_parameters:[13,0,0,"-"],regularizer_factory:[21,0,0,"-"]},"custom_optimizers.LBFGS_LS":{last_step_size_taken:[1,3,1,""],step:[1,3,1,""]},"finite_differences.FD":{bcNeumannZero:[6,4,1,""],create_zero_array:[6,3,1,""],dXb:[6,3,1,""],dXc:[6,3,1,""],dXf:[6,3,1,""],dYb:[6,3,1,""],dYc:[6,3,1,""],dYf:[6,3,1,""],dZb:[6,3,1,""],dZc:[6,3,1,""],dZf:[6,3,1,""],ddXc:[6,3,1,""],ddYc:[6,3,1,""],ddZc:[6,3,1,""],dim:[6,4,1,""],get_size_of_array:[6,3,1,""],getdimension:[6,3,1,""],lap:[6,3,1,""],spacing:[6,4,1,""],xm:[6,3,1,""],xp:[6,3,1,""],ym:[6,3,1,""],yp:[6,3,1,""],zm:[6,3,1,""],zp:[6,3,1,""]},"finite_differences.FD_np":{create_zero_array:[6,3,1,""],get_size_of_array:[6,3,1,""],getdimension:[6,3,1,""]},"finite_differences.FD_torch":{create_zero_array:[6,3,1,""],get_size_of_array:[6,3,1,""],getdimension:[6,3,1,""]},"image_manipulations.IntensityNormalizeImage":{defaultIntensityNormalization:[8,3,1,""],default_normalization_mode:[8,4,1,""],percentile_normalization:[8,3,1,""]},"module_parameters.ParameterDict":{get_print_settings:[13,3,1,""],load_JSON:[13,3,1,""],print_settings_off:[13,3,1,""],print_settings_on:[13,3,1,""],write_JSON:[13,3,1,""],write_JSON_and_JSON_comments:[13,3,1,""],write_JSON_comments:[13,3,1,""]},"regularizer_factory.HelmholtzRegularizer":{alpha:[21,4,1,""],gamma:[21,4,1,""],get_alpha:[21,3,1,""],get_gamma:[21,3,1,""],set_alpha:[21,3,1,""],set_gamma:[21,3,1,""]},"regularizer_factory.Regularizer":{compute_regularizer_multiN:[21,3,1,""],dim:[21,4,1,""],fdt:[21,4,1,""],params:[21,4,1,""],spacing:[21,4,1,""],volumeElement:[21,4,1,""]},"regularizer_factory.RegularizerFactory":{create_regularizer:[21,3,1,""],create_regularizer_by_name:[21,3,1,""],default_regularizer_type:[21,4,1,""],dim:[21,4,1,""],set_default_regularizer_type_to_curvature:[21,3,1,""],set_default_regularizer_type_to_diffusion:[21,3,1,""],set_default_regularizer_type_to_helmholtz:[21,3,1,""],set_default_regularizer_type_to_total_variation:[21,3,1,""],spacing:[21,4,1,""]},"regularizer_factory.TotalVariationRegularizer":{get_pnorm:[21,3,1,""],set_pnorm:[21,3,1,""]},config_parser:{get_algconf_settings:[0,1,1,""],get_baseconf_settings:[0,1,1,""],get_datapro_settings:[0,1,1,""],get_default_algconf_settings_filenames:[0,1,1,""],get_default_baseconf_settings_filenames:[0,1,1,""],get_default_compute_settings_filenames:[0,1,1,""],get_default_datapro_settings_filenames:[0,1,1,""],get_default_democonf_settings_filenames:[0,1,1,""],get_default_respro_settings_filenames:[0,1,1,""],get_democonf_settings:[0,1,1,""],get_respro_settings:[0,1,1,""]},custom_optimizers:{LBFGS_LS:[1,2,1,""]},data_wrapper:{AdaptVal:[3,1,1,""],FFTVal:[3,1,1,""],STNVal:[3,1,1,""]},finite_differences:{FD:[6,2,1,""],FD_np:[6,2,1,""],FD_torch:[6,2,1,""]},image_manipulations:{IntensityNormalizeImage:[8,2,1,""]},module_parameters:{ParameterDict:[13,2,1,""],test_parameter_dict:[13,1,1,""]},regularizer_factory:{CurvatureRegularizer:[21,2,1,""],DiffusionRegularizer:[21,2,1,""],HelmholtzRegularizer:[21,2,1,""],Regularizer:[21,2,1,""],RegularizerFactory:[21,2,1,""],TotalVariationRegularizer:[21,2,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:attribute"},terms:{"abstract":[6,15,21],"byte":1,"case":[17,21],"class":[1,6,8,13,15,17,21],"default":[1,8,10,13,15,17,18,21],"export":16,"float":[1,3],"function":[1,15,17,18,21],"import":[1,6,15,16,17,18],"int":1,"new":17,"return":[1,6,8,13,15,21],"super":15,"true":[6,13,15,18],"try":1,"while":15,And:[15,17],But:15,FOR:6,For:[15,17],THE:6,That:18,The:[6,13,15,16,17,19],Then:16,There:[16,18],These:[15,16,18],__init__:15,abl:[15,18],about:17,abov:15,access:15,acronym:10,activ:16,actual:[6,13,17],adam:15,adapt:[3,16],adaptv:3,add:[1,6,19],add_model:15,add_similarity_measur:15,added:15,adding:15,addit:[1,16],advanc:18,advect:[15,18],advectimag:15,advis:15,again:15,algconf_settings_filenam:0,algorithm:1,all:[1,6,15,17],allow:15,alpha:21,alreadi:[17,18],also:[15,16,17,18],altern:16,ani:[13,15,21],annot:17,appropri:16,around:18,arrai:[6,18],ask:17,assign:17,assum:[15,16],autograd:[15,16,18],avail:[1,15,16,18],backtrack:1,backward:6,base:[15,16,21],baseconf_settings_filenam:0,batch:[6,18],bcneumannzero:6,bcxyz:18,becaus:21,been:[6,13],befor:15,being:15,below:16,bfg:1,bottleneck:16,bound:1,boundari:6,brew:16,brief:13,briefli:16,bug:16,build:16,call:15,can:[1,6,15,16,17,18,21],cannot:17,care:17,categori:[17,21],central:6,cffi:16,chang:1,channel:18,check:16,choic:21,choos:[15,18],clang:16,clone:16,close:18,closur:1,cmake_prefix_path:16,code:6,com:16,come:18,command:17,comment:[13,17],commment:13,commput:21,commun:18,compat:16,compon:21,compos:17,compromis:15,comput:[6,21],compute_regularization_energi:15,compute_regularizer_multin:[15,21],compute_similar:15,conda:16,condit:6,config:10,config_pars:0,configur:[13,17],contain:[13,18],contradictori:15,conveni:[13,15,18,21],converg:15,convert:[3,13],coordin:[15,18],copi:18,correspond:13,could:15,cours:[17,18],cparam:15,cpu:[3,16],creat:[6,15,17,18,21],create_image_pair:18,create_integr:15,create_nd_vector_field_parameter_multin:15,create_registration_paramet:15,create_regular:[15,21],create_regularizer_by_nam:21,create_zero_arrai:6,createsquar:18,cuda80:16,cuda:[3,16],current:[1,13,16],curvatur:21,curvatureregular:21,custom:[10,15,16,17],custom_optim:[1,19],cxx:16,data:[10,15,18],data_wrapp:3,datapro_settings_filenam:0,ddxc:6,ddyc:6,ddzc:6,deal:[13,15],decrement:6,def:15,default_normalization_mod:8,default_regularizer_typ:21,defaultintensitynorm:8,defin:15,definit:[6,15],defnit:6,demo:18,democonf_settings_filenam:0,demonstr:18,depend:15,deri:6,deriv:[6,15,21],describ:16,descript:[13,17],desir:[8,15,17,18],desiredsz:15,detail:18,develop:16,devic:1,dicitionari:17,dict:15,dictionari:17,differ:[1,10,15],differenc:21,diffus:21,diffusionregular:21,dim:[6,18,21],dimens:[6,18,21],direcori:16,direct:6,directli:[15,18],directori:[16,18],disabl:13,doc:16,docstr:19,document:[13,17],doe:[15,17],doesn:1,doing:16,done:[16,17],dxb:6,dxc:6,dxf:6,dyb:6,dyc:6,dyf:6,dzb:6,dzc:6,dzf:6,each:18,easi:[15,18],easier:[16,18],easiest:15,easili:6,effici:6,element:21,elementwis:1,empti:[17,18],enabl:13,energi:21,entri:[13,19],equat:18,especi:15,euclidean:21,evalu:1,even:[16,18],everyth:[16,17,18],exampl:[10,15,16,17],example_gener:18,exectut:16,execut:16,exist:[15,17],expect:21,explain:[15,17],extens:[6,10],extrapol:6,factori:10,fals:[13,18],fd_np:6,fd_torch:6,fdt:21,few:[15,18],fft:16,fftval:3,field:[15,21],figur:18,file:[13,16,17],fileio:10,filenam:13,filenamecom:13,find:16,finit:[10,21],finite_differ:6,first:[1,3,6,13,15,16,18],fit:1,fix:16,float32:3,follow:[6,15,16,17,18],follw:16,forg:16,format:18,former:17,formul:15,forward:[6,10,15],forward_model:15,found:17,free:21,from:[15,16,18],from_numpi:18,futur:1,gamma:21,gcc:16,gener:[10,17,18,21],gest:21,get:[8,16,21],get_algconf_set:0,get_alpha:21,get_baseconf_set:0,get_datapro_set:0,get_default_algconf_settings_filenam:0,get_default_baseconf_settings_filenam:0,get_default_compute_settings_filenam:0,get_default_datapro_settings_filenam:0,get_default_democonf_settings_filenam:0,get_default_respro_settings_filenam:0,get_democonf_set:0,get_dimens:6,get_gamma:21,get_pnorm:21,get_print_set:13,get_registration_paramet:15,get_respro_set:0,get_size_of_arrai:6,getdimens:6,git:[1,16],github:16,give:16,given:[6,17],goal:[13,15],goldstein:1,gpu:[3,16],gradient:21,graphviz:16,group:[1,17,19],had:16,half:17,handl:17,happen:15,have:[1,6,13,15,16],heavi:15,helmholtz:21,helmholtzregular:21,henc:[15,17],here:[15,16],hierarch:17,histori:1,history_s:1,hold:18,how:[10,13,16,18],howev:[15,16,17],html:16,http:16,i0_sourc:15,iamg:6,ideal:17,ignor:18,imag:[1,6,15,16,18],image_manipul:8,image_sampl:15,implement:[1,6,13,15,21],improv:1,includ:[1,6,15,16,18],increment:6,index:[6,10],indic:[15,17],inform:18,ini:3,initdict:13,input:[3,6,8,21],insid:16,instal:10,instanc:[17,21],instanti:21,instantli:15,instead:[13,18],instruct:[15,16],intead:18,integr:[10,15],intens:[1,8],intensitynormalizeimag:8,interfac:15,intruct:16,isourc:[15,18],itarget:[15,18],iter:[1,17,18],itk:16,its:[6,15],itself:16,json:[13,17],juli:1,just:[10,15,17],keep:[13,17,18],kei:17,kutta:10,lap:6,laplacian:[6,21],larger:6,last_step_size_taken:1,lastli:[15,17],latter:[6,17],layer:18,lbfg:[1,15],lbfgs_l:1,lddmm_shooting_map:18,learn:1,least:16,left:6,let:[15,18],level:[15,17],librari:16,like:[10,15,17],line:[1,19],line_search_fn:1,linear:6,linearli:8,list:1,load:[10,13,18],load_json:[13,17],locat:19,look:[15,16,17],loss:[1,15],lowerbound:1,machineri:15,macosx_deployment_target:16,magic:15,magnitud:21,mai:[15,16,21],main:6,mak:16,make:[15,16,18],make_cpu:16,make_gpu:16,manipul:10,manual:[15,18],map:[8,15,18],maplowresfactor:[15,18],matter:16,max_ev:1,max_it:1,maxim:1,maximum:18,measur:[10,17],memori:1,mermaid:[18,19],method:[1,6,8,15],model:[1,10,17,18,21],modelnam:[15,18],modul:[10,15,18],module_paramet:[13,17,18],more:16,most:6,much:16,multi:[15,16],multipl:[1,19],multiscal:10,multiscale_optim:[15,18],multiscaleregistrationoptim:15,mymodelnam:15,myssd:15,mysvf:15,mysvfimageloss:15,mysvfnet:15,name:21,necessari:16,need:[15,16],network:[10,15,16],neumann:6,new_categori:17,next:[15,18],no_cuda:16,none:[0,1,6,8,13,21],norm:21,normal:8,note:[10,13,15,16],now:[1,15,16,18],nrofimag:15,nrofiter:[17,18],number:[1,17,18],numpi:[6,18],nvida:16,object:15,obvious:15,occupi:15,off:[13,18],offici:16,ofprovid:13,onc:[15,16],one:[1,6,15,16,21],onli:[1,15,17,18],openmp:16,oper:16,optim:[10,15,18],option:1,order:[1,6],origin:19,osx:16,otherwis:6,our:15,out:[16,17,18],output:[3,13,15,18],overal:15,own:[10,18],packag:[1,6,10,13,15,17,21],par:18,param:[1,6,8,15,18,21],param_byt:1,paramet:[1,6,10,15,18,19,21],parameterdict:[13,15,17,18,21],parser:10,part:16,particular:[1,17,21],path:[16,18],penalti:21,per:1,perc:8,percentil:8,percentile_norm:8,perform:1,permiss:16,pick:[16,18],pip:16,pixel:[15,21],plai:18,playpen:19,pnorm:21,possibl:[15,16],possilb:17,practic:16,pretti:18,principl:15,print:[13,17],print_settings_off:13,print_settings_on:13,printset:13,problem:15,propag:15,provid:[13,15],purpos:[17,21],py27:16,py36:16,pynrrd:16,pyreg:[15,16,18,19],python3:16,python:[16,17],pytorch:[6,10,15,18],rate:1,rather:15,read:[13,17],readi:[16,18],realiti:18,reason:15,recip:16,recommend:3,recreat:15,reduc:1,reevalu:1,refer:10,regist:18,registr:[1,13,16,17],registration_model:[15,17],registration_network:15,registrationimageloss:15,registrationmaploss:15,registrationnet:15,regular:[10,15],regularizer_factori:[15,21],regularizerfactori:[15,21],regularizertyp:21,rel:15,releas:[1,16],repositori:[1,16],repres:6,requir:[1,6,15,18,21],requirements_python2_osx:16,requirements_python3_osx:16,requirements_pytorch_fft:16,requires_grad:18,resampleimag:15,respect:1,respro_settings_filenam:0,result:10,retriev:17,rewrit:15,right:[1,6,16],rk4:15,run:13,rung:10,rungekutta_integr:15,same:6,sampl:[10,18],sampler:15,scale:[15,18],screen:13,script:[13,16],search:1,second:[6,13,21],section:16,see:[13,16,18],select:15,self:[13,15],sens:16,set:[10,13,15,16,17,18,21],set_alpha:21,set_default_regularizer_type_to_curvatur:21,set_default_regularizer_type_to_diffus:21,set_default_regularizer_type_to_helmholtz:21,set_default_regularizer_type_to_total_vari:21,set_gamma:21,set_model:[15,18],set_number_of_iter:18,set_number_of_iterations_per_scal:15,set_optim:15,set_optimizer_param:15,set_pnorm:21,set_pyreg_path:[16,18],set_registration_paramet:15,set_registration_paramt:15,set_scale_factor:15,set_source_imag:[15,18],set_target_imag:[15,18],set_visu:15,set_visualize_step:15,setup:16,shaeger:19,shape:[6,18],shoot:15,should:[6,15,16,18,21],show:16,sigma:15,similar:[10,17],similarity_measur:[15,17],similaritymeasur:15,similarli:17,simpl:[10,13,15],simplemultiscaleregistr:18,simpler:16,simplesinglescaleregistr:18,simplest:[15,16],simpli:[15,16,17,18],simplic:15,sinc:[15,16],singl:[1,15,18],singlescaleregistrationoptim:18,size:[1,6,18],smaller:6,smoother:10,solut:[15,18],solv:[15,18],solver:[15,18],some:[15,16,18],somewhat:15,sophist:15,soumith:16,sourc:[0,1,3,6,8,13,15,16,18,21],space:[6,15,18,21],spatial:[6,10,15,16,21],specici:16,specifi:[6,17,18],sphinx:16,squar:[15,18,21],ssd:[15,17],stabl:3,stai:8,standard:1,start:[15,16,18],stationari:15,step:[1,15,16],still:[15,16],stn:[3,16],stnval:3,str:1,structur:18,stuctur:15,sum:[15,21],support:[1,6,15,16,18,19,21],sure:16,svf:15,system:[15,16],szex:18,take:17,target:18,tell:15,tensor:[1,6],termin:1,test:[6,13],test_par:17,test_parameter_dict:13,test_pars_com:17,testminimalregistr:18,testminimalsimpleregistr:18,testminimalsimpleregistrationmultiscal:18,testregistrationgener:16,testregistrationgenericmultiscal:16,tfrom:15,thei:[13,16],them:15,thi:[1,6,13,15,16,17,18,21],though:6,thread:16,through:15,tile:18,time:[15,16],todo:10,toler:1,tolerance_chang:1,tolerance_grad:1,top:16,torch:[1,6,15,18],torchvis:16,total:21,totalvari:21,totalvariationregular:21,track:[13,17,18],transform:[10,16],tto:15,tupe:17,tupl:[1,13],turn:15,two:[16,18],txt:16,type:[1,3,15,17,21],typic:17,uncbiag:16,unfortun:16,updat:1,upperbound:1,upsampl:15,upsample_image_to_s:15,upsample_registration_paramet:15,upsampled_spac:15,use:[1,3,13,15,16,17,18],used:[6,13,15,16,17,18,21],usemap:[15,18],user:16,uses:[17,18],using:[6,8,18],util:[10,15],valu:[1,6,13,17],variabl:[18,21],variat:21,varieti:16,variou:8,vector:[6,21],veloc:15,veri:[1,18],version:[3,6,16],via:[15,16,17,18],viewer:10,visual:[10,15,18],volum:[15,21],volumeel:[15,21],voxel:[15,21],vupsampl:15,wai:[6,13,16],want:[15,16,17],warn:1,warp:[15,18],weak_wolf:1,were:[16,17],what:[16,17],when:15,where:[15,21],which:[1,6,15,16,18,21],without:[15,16],work:[15,16],would:[3,18],wrapper:10,write:[3,10,13,16,17],write_json:[13,17,18],write_json_and_json_com:13,write_json_com:[13,17],written:18,yaml:16,yet:[1,6,16,17],you:[15,16,17,18],your:[10,16,18],yourself:18,zero:6},titles:["Config parser","Custom optimizers","Custom pyTorch extensions","Data wrapper","Example generation","fileio","Finite differences","Forward models","Image manipulations","Image sampling","mermaid: iMagE Registration via autoMAtIc Differentiation ","Load default settings","Model factory","Parameter module","Multiscale optimizer","How to write your own registration model","Installation","Parameters","Simple example","TODOs","Registration networks","Regularizer factory","Runge-Kutta integrators","Similarity measure factory","Smoother factory","Spatial transforms","Utilities","Viewers","Visualize registration results"],titleterms:{"default":11,"new":15,all:16,anaconda:16,automat:10,code:16,compil:16,config:0,creat:16,custom:[1,2],data:3,differ:6,differenti:10,document:16,download:16,environ:16,exampl:[4,18],experiment:16,extens:2,factori:[12,21,23,24],fileio:5,finit:6,forward:7,gener:4,how:15,imag:[8,9,10],indic:10,instal:16,integr:22,kutta:22,load:11,manipul:8,measur:[15,23],mermaid:[10,16],model:[7,12,15],modul:13,multiscal:14,network:20,optim:[1,14],option:16,own:15,packag:16,paramet:[13,17],parser:0,pytorch:[2,16],registr:[10,15,20,28],regular:21,requir:16,result:28,run:16,rung:22,sampl:9,set:11,similar:[15,23],simpl:18,smoother:24,spatial:25,tabl:10,todo:[1,19],transform:25,util:26,via:10,viewer:27,virtual:16,visual:28,wrapper:3,write:15,your:15}})