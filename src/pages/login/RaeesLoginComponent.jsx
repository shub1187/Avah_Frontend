import { Box, Button, Checkbox, Chip, Grid, InputLabel, Paper, TextField, ThemeProvider, ToggleButton, ToggleButtonGroup, Typography, createTheme } from '@mui/material'
import React, { useState } from 'react'
import LogoImage from "assets/img/logo.png"
import AvahTransparent from 'assets/img/avah_tranparent .png'
import { getYear } from 'date-fns'
import './index.scss'
import { useMobileResponsive } from 'hooks/useMobileResponsive'
import CreateTextFields from 'components/common/Textfield'
import URL from 'url/apiURL'
import { useFetchFunction } from 'hooks/useFetch'
import { requiredTextfield } from 'utils/customFunctions'
import { useLocation, useNavigate } from 'react-router-dom'

const RaeesLoginComponent = () => {
    const [formData, setFormData] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const {snackbar,loadingIndicator,fetchData} = useFetchFunction()
    const [login,setLogin] = useState(true)
    const [activeButton, setActiveButton] = useState('customer');
    const currentYear = getYear(new Date());
    const {isMobile} = useMobileResponsive()
    const location = useLocation();
    const navigate = useNavigate()
    const isAdminPage = location.pathname.includes('/admin');

    const handleButtonClick = (buttonText) => {
        setFormData({})
        setActiveButton(buttonText);
      };

    const handleFieldChange = (fieldName, value) => {
        setFormData((prevData) => ({ ...prevData, [fieldName]: value }));
    };

    const loginFunction = async()=>{
        let payload ={...formData,role:activeButton}
        if(isAdminPage){
            payload = {...formData,role:"admin"}
        }
        setIsSubmitted(true)
        let isRequired = requiredTextfield(loginTextfield.slice(1,3),formData)
        if(isRequired) {
            setTimeout(() => {
                setIsSubmitted(false)
            }, [2000]);
            return
        }

        let url = ''
        if(payload.role ==='admin') url = URL.LOGIN_REGISTER.login_admin
        if(payload.role ==='service provider') url = URL.LOGIN_REGISTER.login_service_provider
        if(payload.role ==='customer') url = URL.LOGIN_REGISTER.login_customer
        let {data:loginDetails} = await fetchData({url,method:"POST",payload})

        if(loginDetails){
            // if(true){
            if(payload.role==='admin'){
                setTimeout(() => {
                    navigate('/admin/dashboard');
                }, 0);
                localStorage.setItem('TYPE_OF_USER', "1");
                localStorage.setItem('role', "Administrator");
                localStorage.setItem('access_token', loginDetails.token);
                localStorage.setItem('isLoggedIn', "true");  
            }
            else if (payload.role=='service provider'){
                setTimeout(() => {
                    navigate('/dashboard/home');
                }, 0);
                localStorage.setItem('TYPE_OF_USER', "2");
                localStorage.setItem('role', "Service Provider");
                localStorage.setItem('access_tokenSP', loginDetails.token);
                localStorage.setItem('isLoggedInSP', "true");
                localStorage.setItem('sp_id', loginDetails.sp_id);  
                localStorage.setItem('profile_name', loginDetails.profile_name);
            }
            else if(payload.role==='customer'){
                setTimeout(() => {
                    navigate('/customer/home');
                }, 0);
                localStorage.setItem('TYPE_OF_USER', "3");
                localStorage.setItem('role', "Customer");
                localStorage.setItem('customer_id', loginDetails.customer_id);
                localStorage.setItem('customer_email', loginDetails.customer_email);
                localStorage.setItem('access_tokenSP', loginDetails.token);
                localStorage.setItem('isLoggedInSP', "true"); 
                localStorage.setItem('profile_name', loginDetails.profile_name); 
            }
        }
        setIsSubmitted(false)
        setFormData({})
    }

    const registerFunction = ()=>{
        let payload ={...formData,role:activeButton,approval_status:false,sp_status:"inactive"}

        setIsSubmitted(true)
        let isRequired = requiredTextfield(registerTextfield,formData)
        if(isRequired) {
            setTimeout(() => {
                setIsSubmitted(false)
            }, [2000]);
            return
        } 

        let url = ''
        if(payload.role ==='customer') url = URL.LOGIN_REGISTER.register_customer
        if(payload.role === 'service provider')url = URL.LOGIN_REGISTER.register_service_provider

        let {data:regesterDetails} = fetchData({url,method:"POST",payload})
        if(regesterDetails){
            setLogin(!login)
            // if(payload.role==='customer'){

            // }
            // if(payload.role==='service provider'){

            // }
        }
        setIsSubmitted(false)
        setFormData({})
    }
    let loginTextfield = [
        {
            label:"Name",
            name:"name",
            type:"text",
            fullWidth:true,
            required:true,
            errormessage:'Name is Required'

        },
        {
            label:"Email",
            name:"email",
            type:"text",
            fullWidth:true,
            required:true,
            errormessage:'Email is Required'

        },
        {
            label:"Password",
            name:"password",
            type:"password",
            fullWidth:true,
            required:true,
            errormessage:'Password is Required'
        },
        {
            label:"Confirm Password",
            name:"cnfPassword",
            type:"password",
            fullWidth:true,
            required:true,
            errormessage:'Confirm Password is Required'
        },
    ]

    const businessTypes = [
        {
            label:'Sole Proprietorship',
            value:'Sole Proprietorship'
        },
        {
            label:'Partnership',
            value:'Partnership'
        },
        {
            label:'Limited Liability Partnership',
            value:'Limited Liability Partnership'
        },
        {
            label:'Private Limited Companies',
            value:'Private Limited Companies'
        },
        {
            label:'Public Limited Companies',
            value:'Public Limited Companies'
        },
        {
            label:'One-Person Companies',
            value:'One-Person Companies'
        },        
        {
            label: 'Section 8 Company',
            value: 'Section 8 Company'
        },
        {
            label:'Joint-Venture Company',
            value:'Joint-Venture Company'
        }
      ];

    let registerTextfield = [
        {
            label:"Your Name",
            name:"name",
            type:"text",
            required:true,
            errormessage:'Name is Required'
        },
        {
            label:"Email ID",
            name:"email",
            type:"email",
            required:true,
            errormessage:'Email is Required'
        },
        {
            label:"Business Type",
            name:"business_type",
            type:"text",
            select:true,
            selectArray:businessTypes,
            required:true,
            errormessage:'Select Business Type'
        },
        {
            label:"Business Name",
            name:"business_name",
            type:"text",
            required:true,
            errormessage:'Business Name is Required'
        },
        {
            label:"Business Contact Number",
            name:"business_contact",
            type:"number",
            required:true,
            errormessage:'Business Contact is Required'
        },
        {
            label:"Business Address",
            name:"business_address",
            type:"text",
            row:3,
            required:true,
            errormessage:'Address is Required'
        }, 
        {
            label: 'State',
            name: "state",
            type: 'text',
            fullWidth: true,
            select:true,
            // selectArray:selectArray,
            size:true,
            required:true,
            errormessage:'Select State'
        },
        {
            label: 'City',
            name: "city",
            type: 'text',
            fullWidth: true,
            select:true,
            // selectArray:selectModel,
            size:true,
            required:true,
            errormessage:'Select City'
        },   
        {
            label:"Pincode",
            name:"pin_code",
            type:"number",
            required:true,
            errormessage:'Please Enter Your Pincode'
        },      
        {
            label:"Password",
            name:"password",
            type:"password",
            required:true,
            errormessage:'Password is Required'
        },        
        {
            label:"Confirm Password",
            name:"cnfPassword",
            type:"password",
            required:true,
            errormessage:'Please Reconfirm Your Password'
        }
    ]


  return (
    <>  
    {/* This is a floating Navbar */}
    {isAdminPage ?
        // IF YOURE IN ADMIN PAGE
        isMobile?
            // FOR MOBILE PUT THE LOGO IN CENTER
            <Box><img src={LogoImage} alt="logo Img" /></Box>
            :
            //FOR LAPTOP PUT IT IN A DIFFERENT PLACE
            <Box className='floating-navbar-container'>
                <Grid className='thick-container'></Grid>
                <Grid className='navbar-floating-img-container'>
                    <img src={LogoImage} alt="logo Img" />
                </Grid>
            </Box>
        :
        //IF YOURE  IN REGULAR PAGE IE=> NOT ADMIN AND ONLY IF NOT IN MOBILE THEN SHOW
        !isMobile && (
            <Box className='floating-navbar-container'>
                <Grid className='thick-container'></Grid>
                <Grid className='navbar-floating-img-container'>
                    <img src={LogoImage} alt="logo Img" />
                </Grid>
                <Grid className='navbar-floating-content-container' >
                    <Box className="navbar-flex">
                        <Box>Home</Box>
                        <Box>How We Work</Box>
                        <Box>Services</Box>
                        <Box>Providers</Box>
                        <Box>Blogs</Box>
                        <Box><button onClick={()=>{setLogin(!login);setFormData({})}}>{login?'SIGN UP':"LOGIN"}</button></Box>
                    </Box>
                </Grid>
            </Box>
        )
    }
    <Grid container className='login'>
        <Grid item className="left-side-container">
            {
                // THIS IS LOGIN FOR CUSTOMER, DEALER, SERVICE PROVIDER, ADMIN AND REGISTER FOR CUSTOMER
                login || (!login && activeButton =='customer')
                    ?
                        <Box className='form-container'>
                       <Grid container className='login-form'>

                            {/* ONLY SHOW IF ITS IN MOBILE VIEW FOR LOGO AND BUTTON AND DONT SHOW IF ITS IN ADMIN*/}
                            {isMobile && (
                            <Box className='mobile-logo-sign-up'>
                                <Box>{isAdminPage ? <></>:<img src={LogoImage} alt="logo Img" ></img>}</Box>
                                <Box>{isAdminPage ? <></>: <button onClick={()=>{setLogin(!login);setFormData({})}} className='black-button'>{login?'SIGN UP':"LOGIN"}</button>}</Box>
                            </Box>
                            )}

                            {/* ONLY SHOW IF LOGIN */}
                            {isAdminPage ? <></> : login  && (
                            <Box className='three-buttons'>
                                <button className={activeButton==='customer'?'active':'inactive'} onClick={()=>handleButtonClick('customer') }>Customer</button>
                                <button className={activeButton==='service provider'?'active':'inactive'} onClick={()=>handleButtonClick('service provider')}>Service Provider</button>
                                <button  className={activeButton==='dealers'?'active':'inactive'}onClick={()=>handleButtonClick('dealers')}>Dealer</button>
                            </Box>
                            )}

                            <Box className='welcome'>{login?'Welcome back':'Welcome'}</Box>
                            <Box className='enter-details'>{login? 'Enter you email and password to sign in':'Enter you credentials to register'}</Box>
                            <Box className='textfields'>
                                <Box className='smaller-container'>
                                    <CreateTextFields fields={login?loginTextfield.slice(1,3):loginTextfield} formField={formData} onChange={handleFieldChange} isSubmitted={isSubmitted}/>
                                    {/* ONLY SHOW IF LOGIN AND DONT SHOW IF IN ADMIN*/}
                                    {isAdminPage ? <></>: login  && (<Box className='remember-me-container'>
                                        <Box className='checkbox-container'>
                                            <Box><Checkbox/></Box>
                                            <Box>Remember Me</Box>
                                        </Box>
                                        <Box>Forgot password ?</Box>
                                    </Box>)}
                                    <Box className='signup-register-button'><Button onClick={loginFunction}>{login ?'LOGIN':'REGISTER'}</Button></Box>
                                </Box>
                            </Box>

                       </Grid>
                       </Box>
                    :
                    // YOURE IN REGISTER, THIS IS FOR DEALER OR SERVICE PROVIDER ,SINCE ADMIN DONT HAVE AND CUSTOMER COVERED INSIDE THE LOGIN
                        
                        <Box className='register-container'>
                            {isMobile && (
                            <Box className='mobile-logo-sign-up'>
                                <Box>{isAdminPage ? <></>:<img src={LogoImage} alt="logo Img" ></img>}</Box>
                                <Box>{isAdminPage ? <></>: <button onClick={()=>{setLogin(!login);setFormData({})}} className='black-button'>{login?'SIGN UP':"LOGIN"}</button>}</Box>
                            </Box>
                            )}
                            <Box className='welcome'>Welcome {activeButton==='service provider'?'Service Provider':activeButton==='dealers'?'Dealer':''}</Box>
                            <Box className='first-row'>
                                <CreateTextFields fields={registerTextfield.slice(0,1)} formField={formData} onChange={handleFieldChange} isSubmitted={isSubmitted}/>
                            </Box>
                            <Box className='second-row'>
                                <CreateTextFields fields={registerTextfield.slice(1,3)} formField={formData} onChange={handleFieldChange} isSubmitted={isSubmitted}/>
                            </Box>
                            <Box className='third-row'>
                                <CreateTextFields fields={registerTextfield.slice(3,5)} formField={formData} onChange={handleFieldChange} isSubmitted={isSubmitted}/>
                            </Box>
                            <Box className='fourth-row'>
                                <CreateTextFields fields={registerTextfield.slice(5,6)} formField={formData} onChange={handleFieldChange} isSubmitted={isSubmitted}/>
                            </Box>
                            <Box className='fifth-row'>
                                <CreateTextFields fields={registerTextfield.slice(6,8)} formField={formData} onChange={handleFieldChange} isSubmitted={isSubmitted}/>
                            </Box>
                            <Box className='sixth-row'>
                                <CreateTextFields fields={registerTextfield.slice(8,9)} formField={formData} onChange={handleFieldChange} isSubmitted={isSubmitted}/>
                            </Box>
                            <Box className='seventh-row'>
                                <CreateTextFields fields={registerTextfield.slice(9,11)} formField={formData} onChange={handleFieldChange} isSubmitted={isSubmitted}/>
                            </Box>
                            <Box className='eigth-row'>
                                <Button onClick={registerFunction}>REGISTER</Button>
                            </Box>
                        </Box>
                        

            }

            {/* THIS EXIST FOR ALL */}
            <Box className='login-footer'>
                <Box className="left-footer">© {currentYear} Made with Love By <Box component={'span'} className='purple'>AVAH Services</Box></Box>
                {/* ONLY SHOW IF NOT IN MOBILE VIEW */}
                {!isMobile && (
                <Box className="right-footer">
                    <Box mr={2}>About Us</Box>
                    <Box mr={2}>Terms & Conditions</Box>
                    <Box mr={2}>FAQ's</Box>
                    <Box mr={2}>Privacy Policy</Box>
                    <Box mr={2}>Contact Us</Box>
                </Box>)}
            </Box>
        </Grid>
        {/* THIS IS RIGHT SIDE CONTAINER */}
        <Grid item className="right-side-container">
            <img src={AvahTransparent} alt="" />
        </Grid>
    </Grid>
    {snackbar}
    {loadingIndicator}
    </>

  )
}

export default RaeesLoginComponent