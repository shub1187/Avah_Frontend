import { Box, Button, Checkbox, Chip, Grid, InputLabel, TextField, ThemeProvider, ToggleButton, ToggleButtonGroup, Typography, createTheme } from '@mui/material'
import React, { useState } from 'react'
import LogoImage from "assets/img/logo.png"
import LoginButtonTheme from 'components/Button/LoginButtonTheme'
import AppleLogo from 'assets/img/loginComponent/appleLogo.png'
import FacebookLogo from 'assets/img/loginComponent/facebookLogo.png'
import GoogleLogo from 'assets/img/loginComponent/googleLogo.png'
import AvahTransparent from 'assets/img/avah_tranparent .png'
import { getYear } from 'date-fns'
import './index.scss'

const RaeesLoginComponent = () => {
    const [formField,setFormField] = useState({})
    const [login,setLogin] = useState(true)
    const [activeButton, setActiveButton] = useState('customer');
    const currentDate = new Date();
    const currentYear = getYear(currentDate);

    console.log(activeButton,"RAEES")
    const handleButtonClick = (buttonText) => {
        setFormField({})
        setActiveButton(buttonText);
      };
    console.log(formField,"RAEES")
    let loginTextfield = [
        {
            label:"RAees",
            name:"RAEESZ",
            type:"text",
            fullWidth:true
        },
        {
            label:"assad",
            name:"rsrwsed",
            type:"text",
            fullWidth:true
        }, 
    ]

    let customerLoginTextfield = [
        {
            label:"RAees",
            name:"RAEESZ",
            type:"text",
        },
        {
            label:"assad",
            name:"rsrwsed",
            type:"text",
        },
        {
            label:"RAees",
            name:"RAEES",
            type:"password",
        }
    ]

    let spLoginTextfield = [
        {
            label:"RAees",
            name:"RAEESZ",
            type:"text",
        },
        {
            label:"assad",
            name:"rsrwsed",
            type:"text",
        },
        {
            label:"RAees",
            name:"RAEES",
            type:"password",
        }
    ]

    let dealersLoginTextfield = [
        {
            label:"RAees",
            name:"RAEESZ",
            type:"text",
        },
        {
            label:"assad",
            name:"rsrwsed",
            type:"text",
        },
        {
            label:"RAees",
            name:"RAEES",
            type:"password",
        }
    ]
    const handleChange = (name,value)=>{
        setFormField((prev)=>
        ({...prev,[name]:value}))
    }

    const createTextfield = (arr)=>
        <>
        {arr.map((field)=>{

        if(!formField.hasOwnProperty(field.name)){
        setFormField((prev)=>({...prev,[field.name]:""}))
        }
        return(
            <Box mb={2}>
            <InputLabel sx={{color:"black",marginBottom:1}}>{field.label}</InputLabel>
            <TextField
            size='small'
            key={field.name}
            fullWidth={field.fullWidth}
            // label={field.label}
            value={formField[field.name] || ""}
            onChange={(e)=>handleChange(field.name,e.target.value)}
            />
            </Box>
        )})}
    </>


  return (
    <>  
    <Grid className='navbar-floating' >
        <Box className="navbar-flex">
            <Box>Home</Box>
            <Box>How We Work</Box>
            <Box>Services</Box>
            <Box>Providers</Box>
            <Box>Blogs</Box>
            <Box><button>SIGN UP</button></Box>
        </Box>
    </Grid>
    <Box  sx={{ display: 'flex', flexDirection: 'column',minHeight:"100vh" }}>
        <Grid flexGrow={1} container >
            <Grid xs={6.5} sx={{backgroundColor:"white"}} item>
                {/* <Grid m={5} ml={12}> */}
                <Grid container height={"100%"} flexDirection={"column"} justifyContent={"space-between"}>
                    <Grid item width={"100%"}>
                        <Grid xs={9.5} m={5} ml={12}   container>
                            <Grid xs={12} item><img src={LogoImage} alt="logo Img" /></Grid>
                            <Grid xs={12} ml={5} mt={5} item>
                                {
                                    login?
                                        <>
                                            <Grid mb={4} spacing={0.5} justifyContent={"center"} container>
                                                <Grid item><button onClick={() => handleButtonClick('customer')} className={activeButton==='customer'?'button Active':"button Inactive"}>Customer</button></Grid>
                                                <Grid item><button onClick={() => handleButtonClick('service provider')} className={activeButton==='service provider'?'button Active':"button Inactive"}>Service Provider</button></Grid>
                                                <Grid item><button onClick={() => handleButtonClick('dealers')} className={activeButton==='dealers'?'button Active':"button Inactive"}>Dealers</button></Grid>
                                            </Grid>
                                            <Grid flexDirection={"column"} alignItems={"center"} container>
                                                <Grid mb={1}  item><Typography color={"rgb(173,73,112)"} fontWeight={"bold"} variant='h4'>Welcome Back</Typography></Grid>
                                                <Grid mb={1} item><Typography fontWeight={"bold"}>Sign In Via</Typography></Grid>
                                                <Grid mb={1} spacing={2} justifyContent={"center"} container>
                                                    <Grid item><Box height={"4rem"} width={"4rem"} borderRadius={"10px"} border={"1px solid rgb(236,241,246)"} display={"flex"} alignItems={"center"} justifyContent={"center"}><img src={FacebookLogo} alt="" /></Box></Grid>
                                                    <Grid item><Box height={"4rem"} width={"4rem"} borderRadius={"10px"} border={"1px solid rgb(236,241,246)"} display={"flex"} alignItems={"center"} justifyContent={"center"}><img src={AppleLogo} alt="" /></Box></Grid>
                                                    <Grid item><Box height={"4rem"} width={"4rem"} borderRadius={"10px"} border={"1px solid rgb(236,241,246)"} display={"flex"} alignItems={"center"} justifyContent={"center"}><img src={GoogleLogo} alt="" /></Box></Grid>
                                                </Grid>
                                                <Grid mb={1}><Typography fontWeight={"bold"}>Or</Typography></Grid>
                                                <Grid mb={1}><Typography color={"rgb(172,184,200)"}>Enter your email and password to sign in</Typography></Grid>
                                                <Grid>
                                                    <Box sx={{minWidth:300}}>
                                                        {createTextfield(loginTextfield)}
                                                    </Box>
                                                    <Grid mb={1} container justifyContent={"space-between"} alignItems={"center"}>
                                                        <Grid item>
                                                            <Grid container alignItems={"center"}>
                                                                <Grid item mr={1}><Checkbox sx={{padding:0}}></Checkbox></Grid>
                                                                <Grid item><Typography>Remember Me</Typography></Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item>
                                                            <Grid container>
                                                                <Grid item><Typography>Forgot Password?</Typography></Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid ><ThemeProvider theme={LoginButtonTheme("43px","300px")}><Button>Login</Button></ThemeProvider></Grid>
                                                </Grid>
                                            </Grid>
                                        </>
                                        :
                                        <>
                                        </>
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item width={"100%"}>
                        <Box display={"flex"} alignSelf={"flex-end"} justifyContent={"space-between"} sx={{minHeight: '50px',}}>
                            <Box ml={1}>
                                <Typography>© {currentYear} Made with Love by <Typography component={"span"} color={"rgb(173,73,112)"}>AVAH Services</Typography> </Typography>
                            </Box>
                            <Box display={"flex"} justifyContent={"space-between"}>
                                <Box mr={2}>About Us</Box>
                                <Box mr={2}>Terms & Conditions</Box>
                                <Box mr={2}>FAQ's</Box>
                                <Box mr={2}>Privacy Policy</Box>
                                <Box mr={2}>Contact Us</Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                {/* </Grid> */}

            </Grid>
            <Grid className='background-img' xs={5.5} item><Box height={'100%'} display={"flex"} justifyContent={"center"} alignItems={"center"}><img src={AvahTransparent} alt="" /></Box></Grid>
        </Grid>

    </Box>

    </>

  )
}



export default RaeesLoginComponent

