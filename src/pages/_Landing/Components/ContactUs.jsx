import { Alert, Box, CircularProgress, Dialog, DialogContent, Radio, Snackbar } from '@mui/material'
import Contact from '../../../../src/assets/landingPage/ContactUs/Contact AVAH.png'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import GetStarted from '../../../../src/assets/landingPage/AboutUs/getStarted.png'
import { Link } from 'react-router-dom'

const ContactUs = ()=>{

    const [state,setState] = useState({
        firstName:'',firstNameError:'',lastName:'',lastNameError:'',email:'',emailError:'',number:'',numberError:'',
        city:'',state:'',pincode:'',country:'India',dayPhone:'',eveningPhone:'',reason:'',reasonError:'',comments:'',commentsError:'',
        success:false,error:false,loading:false
    })
    console.log(state)
    const form = useRef()
    
    const Change = (e,value)=>{
        setState((prev)=>({...prev,[value]:e.target.value}))
    }

    const submit = async(e)=>{
        e.preventDefault();

        try{
            if(!state?.firstName){
                setState((prev)=>({...prev,firstNameError:true}))
            }
            if(!state?.lastName){
                setState((prev)=>({...prev,lastNameError:true}))
            }
            if(!state?.email){
                setState((prev)=>({...prev,emailError:true}))
            }
            if(!state?.number){
                setState((prev)=>({...prev,numberError:true}))
            }
            if(!state?.comments){
                setState((prev)=>({...prev,commentsError:true}))
            }
            if(!state?.reason){
                setState((prev)=>({...prev,reasonError:true}))
            }
            setTimeout(()=>{
                setState((prev)=>({...prev,reasonError:false,numberError:false,commentsError:false,emailError:false,firstNameError:false,lastNameError:false}))
    
            },2000)
            if(!state?.comments || !state?.firstName || !state?.lastName || !state?.email || !state?.number || !state?.reason) return
            setState((prev)=>({...prev,loading:true}))
            const result = await emailjs.sendForm(
                'service_g3zcdsq',
                'template_zs5r709',
                form.current,
                'DOdYs7DMCnx0zCOM7'
            );
            if(result?.status===200){
                setState((prev)=>({...prev,success:true,
                    firstName:'',firstNameError:'',lastName:'',lastNameError:'',email:'',emailError:'',number:'',numberError:'',
                    city:'',state:'',pincode:'',country:'India',dayPhone:'',eveningPhone:'',reason:'',reasonError:'',comments:'',commentsError:'',
                    loading:false

                }))
                setTimeout(()=>{
                    setState((prev)=>({...prev,success:false,loading:false}))
                },3000)
    
            }
            else{
                setState((prev)=>({...prev,error:true,loading:false}))
                setTimeout(()=>{
                    setState((prev)=>({...prev,error:false,loading:false}))
                },3000)
            }
        }
        catch(e){
            setState((prev)=>({...prev,error:true ,loading:false}))
            setTimeout(()=>{
                setState((prev)=>({...prev,error:false ,loading:false}))
            },3000)
        }


    }
    return (
        <Box className='contactUs'>
            <Box className='contactUs__image'>
                <Box className='contactUs__image__overlay'></Box>
                <img src={Contact}/>
                <Box className='contactUs__image__text'>CONTACT <span className="red">AVAH</span></Box>
                <Box className='contactUs__image__underline'></Box>
            </Box>
            <Box className='contactUs__title'>Contact Information</Box>
            <form ref={form} onSubmit={submit}>

            <Box className='contactUs__first'>
                <Box className='contactUs__first__left'>
                    <div className='heading'>First Name *</div>
                    <input name='firstName' value={state?.firstName} onChange={(e)=>Change(e,'firstName')}/>
                    {state?.firstNameError&&  <div className='error'>Required</div>}
                </Box>
                <Box className='contactUs__first__right'>
                    <div className='heading'>Last Name *</div>
                    <input name='lastName' value={state?.lastName} onChange={(e)=>Change(e,'lastName')}/>
                    {state?.lastNameError&&  <div className='error'>Required</div>}
                </Box>
            </Box>
            <Box className='contactUs__second'>
                <Box className='contactUs__second__left'>
                    <div className='heading'>Email *</div>
                    <input name='emaila' value={state?.email} onChange={(e)=>Change(e,'email')}/>
                    {state?.emailError&&  <div className='error'>Required</div>}
                </Box>
                <Box className='contactUs__second__right'>
                    <div className='heading'>Mobile No. *</div>
                    <input name='number' type='number' value={state?.number} onChange={(e)=>Change(e,'number')}/>
                    {state?.numberError&&  <div className='error'>Required</div>}
                </Box>
            </Box>
            <Box className='contactUs__third'>
                <Box className='contactUs__third__left'>
                    <div className='heading' >City</div>
                    <input name='city' value={state?.city} onChange={(e)=>Change(e,'city')}/>
                </Box>
                <Box className='contactUs__third__right'>
                    <div className='heading'>State / Province</div>
                    <input name='state' value={state?.state} onChange={(e)=>Change(e,'state')}/>
                </Box>
            </Box>
            <Box className='contactUs__fourth'>
                <Box className='contactUs__fourth__left'>
                    <div className='heading'>Zip / Postal Code</div>
                    <input name='pincode' type='number' value={state?.pincode} onChange={(e)=>Change(e,'pincode')}/>
                </Box>
                <Box className='contactUs__fourth__right'>
                    <div className='heading'>Country</div>
                    <input name='country' value={state?.country} onChange={(e)=>Change(e,'country')}/>
                </Box>
            </Box>
            <Box className='contactUs__fifth'>
                <Box className='contactUs__fifth__left'>
                    <div className='heading'>Day Phone</div>
                    <input name='dayPhone'  type='number' value={state?.dayPhone} onChange={(e)=>Change(e,'dayPhone')}/>
                </Box>
                <Box className='contactUs__fifth__right'>
                    <div className='heading'>Evening Phone</div>
                    <input name='eveningPhone'type='number' value={state?.eveningPhone} onChange={(e)=>Change(e,'eveningPhone')}/>
                </Box>
            </Box>
            <Box className='contactUs__sixth'>
                <div className='heading'>Reason For Contact*</div>
                {state?.reasonError&&  <div className='error'>Required</div>}

                <Box className='contactUs__sixth__bigWrap'>
                    <Box className='contactUs__sixth__bigWrap__wrap'>
                        <input name='reason' type='radio' value={'Store Experience'} onClick={(e)=>setState((prev)=>({...prev,reason:e.target.value}))} checked={state?.reason==='Store Experience'}></input>
                        <div className='heading1'>Store Experience</div>
                    </Box>

                    <Box className='contactUs__sixth__bigWrap__wrap'>
                        <input name='reason' type='radio' value={'General Comment / Inquiry'} onClick={(e)=>setState((prev)=>({...prev,reason:e.target.value}))} checked={state?.reason==='General Comment / Inquiry'}></input>
                        <div className='heading1'>General Comment / Inquiry</div>
                    </Box>
                </Box>
            </Box>
            <Box className='contactUs__seventh'>
                <Box className='heading'>Questions / Comments*</Box>
                {state?.commentsError &&  <div className='error'>Required</div>}

                <input name='comment' value={state?.comments} onChange={(e)=>Change(e,'comments')}></input>
            </Box>
            <Box className='contactUs__button'><button type="submit">Submit</button></Box>
            </form>
            {(state?.success ||state?.error )&& 
                (
                <Snackbar anchorOrigin={{"vertical":'top',"horizontal":'center'}} autoHideDuration={3000} open={state?.success || state?.error}>
                    <Alert severity={state?.success?'success':'error'}>{state?.success?'Submitted Successfully':'Unable to submit due to server error'}</Alert>
                </Snackbar>
            )}

            <Box className='contactUs__join'>
                <Box className='contactUs__join__image'>
                    <img src={GetStarted}/>
                    <Box className='howWeDo__join__image__title1'>Drive Worry-Free </Box>
                    <Box className='howWeDo__join__image__title2'>The Right Service, The Right Provider, The Right Way!</Box>
                    <Box className='howWeDo__join__image__underline'></Box>
                    <Box className='howWeDo__join__image__text'>Whether you're a car owner looking for hassle-free servicing or a service provider
                    wanting to expand your business, AVAH is the platform for you!</Box>
                    <Box className='howWeDo__join__image__button'><Link to={localStorage.getItem('customer_id')?'/customer/dashboard':'/login'}><button>Get Registered Now</button></Link></Box>

                </Box>
            </Box>
            {state?.loading && (<Dialog open={state?.loading}><DialogContent><CircularProgress/></DialogContent></Dialog>)}
        </Box>
    )
}

export default ContactUs