import { Box, Button, Chip, Grid, TextField, ThemeProvider, Typography } from '@mui/material'
import React, { useState } from 'react'
import LogoImage from "assets/img/logo.png"
import LoginButtonTheme from 'components/Button/LoginButtonTheme'
import AppleLogo from 'assets/img/loginComponent/appleLogo.png'
import FacebookLogo from 'assets/img/loginComponent/facebookLogo.png'
import GoogleLogo from 'assets/img/loginComponent/googleLogo.png'

const RaeesLoginComponent = () => {
    const [formField,setFormField] = useState({})
    const [login,setLogin] = useState(true)
    console.log(formField,"RAEES")
    let loginTextfield = [
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
        <TextField
            key={field.name}
            label={field.label}
            value={formField[field.name] || ""}
            onChange={(e)=>handleChange(field.name,e.target.value)}
        />
        )})}
    </>


  return (
    <>  
    <Box  sx={{ display: 'flex', flexDirection: 'column',backgroundColor:"green",minHeight:"100vh" }}>
        <Grid flexGrow={1} container>
            <Grid xs={6.5} sx={{backgroundColor:"white"}} item>
                {/* <Grid m={5} ml={12}> */}
                    <Grid xs={9.5} m={5} ml={12}   container>
                        <Grid xs={12} item><img src={LogoImage} alt="logo Img" /></Grid>
                        <Grid xs={12} ml={5} mt={5} sx={{border:"1px solid red"}} item>
                            {
                                login?
                                    <>
                                        <Grid spacing={1} justifyContent={"center"} container>
                                            <ThemeProvider theme={LoginButtonTheme("43px","174px")}>
                                                <Grid item><Button>Customer</Button></Grid>
                                                <Grid item><Button>Service Provider</Button></Grid>
                                                <Grid item><Button>Dealers</Button></Grid>
                                            </ThemeProvider>
                                        </Grid>
                                        <Grid flexDirection={"column"} alignItems={"center"} container>
                                            <Grid  item><Typography>Welcome Back</Typography></Grid>
                                            <Grid item><Typography>Sign In Via</Typography></Grid>
                                            <Grid justifyContent={"center"} container>
                                                <Grid item><Box height={"4rem"} width={"4rem"} borderRadius={"10px"} border={"1px solid grey"} display={"flex"} alignItems={"center"} justifyContent={"center"}><img src={FacebookLogo} alt="" /></Box></Grid>
                                                <Grid item><Box height={"4rem"} width={"4rem"} borderRadius={"10px"} border={"1px solid grey"} display={"flex"} alignItems={"center"} justifyContent={"center"}><img src={AppleLogo} alt="" /></Box></Grid>
                                                <Grid item><Box height={"4rem"} width={"4rem"} borderRadius={"10px"} border={"1px solid grey"} display={"flex"} alignItems={"center"} justifyContent={"center"}><img src={GoogleLogo} alt="" /></Box></Grid>
                                            </Grid>


                                        </Grid>
                                    </>
                                    :
                                    <>
                                    </>
                            }
                        </Grid>

                    </Grid>
                {/* </Grid> */}

            </Grid>
            <Grid xs={5.5} sx={{backgroundColor:"red"}} item>bye</Grid>
        </Grid>
        <Box width={"50%"} display={"flex"} justifyContent={"space-between"} sx={{
        //   backgroundColor: 'red',
        //   flexShrink: 0,
          minHeight: '50px', // Set the minimum height of the sticky box to avoid overlapping
        }}>
            <Box>
                <Typography>@2021 Made with Love by AVAH Services</Typography>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
                <Box mr={2}>About Us</Box>
                <Box mr={2}>Terms & Conditions</Box>
                <Box mr={2}>FAQ's</Box>
                <Box mr={2}>Privacy Policy</Box>
                <Box >Contact Us</Box>
            </Box>
        </Box>
    </Box>

    </>

  )
}



export default RaeesLoginComponent

