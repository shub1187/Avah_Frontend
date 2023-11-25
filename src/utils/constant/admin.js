 {/* This is main left Side and Right Side Container */}
 <Box  sx={{ display: 'flex', flexDirection: 'column',minHeight:"100vh" }}>
 <Grid className='flex' flexGrow={1} container >
     {/* Left Side Container */}
     <Grid xs={isMobile? 12 : 6.5} sx={{backgroundColor:"white"}} item>
         <Grid container height={"100%"} flexDirection={"column"} justifyContent={"space-between"}>
             <Grid item width={"100%"}>
                 <Grid xs={!isMobile && 9.5} m={!isMobile&& 5} ml={!isMobile && 12}   container>
                     { isMobile && (<Grid  sx={{margin:'auto',marginBottom:'5px'}}  item><img src={LogoImage} alt="logo Img" /></Grid>)}
                     <Grid xs={!isMobile && 12} ml={!isMobile &&  5} mt={!isMobile && 9} item>
                         {!isAdminPage && (
                         <Grid mb={4} spacing={0.5} justifyContent={"center"} container>
                             <Grid ml={0.5} item><button onClick={() => handleButtonClick('customer')} className={activeButton==='customer'?'button Active':"button Inactive"}>Customer</button></Grid>
                             <Grid item><button onClick={() => handleButtonClick('service provider')} className={activeButton==='service provider'?'button Active':"button Inactive"}>Service Provider</button></Grid>
                             <Grid item><button onClick={() => handleButtonClick('dealers')} className={activeButton==='dealers'?'button Active':"button Inactive"}>Dealers</button></Grid>
                         </Grid>
                         )}

                         {
                             login?
                                 <>
                                     <Grid flexDirection={"column"} alignItems={"center"} container>
                                         <Grid mb={1} mt={2} item><Typography color={"rgb(173,73,112)"} fontWeight={"bold"} variant='h4'>Welcome Back {isAdminPage && 'Admin'}</Typography></Grid>
                                         {/* <Grid mb={1} item><Typography fontWeight={"bold"}>Sign In Via</Typography></Grid>
                                         <Grid mb={1} spacing={2} justifyContent={"center"} container>
                                             <Grid item><Box height={"4rem"} width={"4rem"} borderRadius={"10px"} border={"1px solid rgb(236,241,246)"} display={"flex"} alignItems={"center"} justifyContent={"center"}><img src={FacebookLogo} alt="" /></Box></Grid>
                                             <Grid item><Box height={"4rem"} width={"4rem"} borderRadius={"10px"} border={"1px solid rgb(236,241,246)"} display={"flex"} alignItems={"center"} justifyContent={"center"}><img src={AppleLogo} alt="" /></Box></Grid>
                                             <Grid item><Box height={"4rem"} width={"4rem"} borderRadius={"10px"} border={"1px solid rgb(236,241,246)"} display={"flex"} alignItems={"center"} justifyContent={"center"}><img src={GoogleLogo} alt="" /></Box></Grid>
                                         </Grid>
                                         <Grid mb={1}><Typography fontWeight={"bold"}>Or</Typography></Grid> */}
                                         <Grid mb={1}><Typography color={"rgb(172,184,200)"}>Enter your email and password to sign in</Typography></Grid>
                                         <Grid>
                                             <Box  sx={{minWidth:300}}>
                                                 {/* {createTextfield(loginTextfield)} */}
                                                 <CreateTextFields fields={loginTextfield} formField={formData} onChange={handleFieldChange} isSubmitted={isSubmitted}/>
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
                                             <Grid><ThemeProvider theme={LoginButtonTheme("43px","300px")}><Button onClick={()=>loginFunction({...formData,role:activeButton})}>Login</Button></ThemeProvider></Grid>
                                         </Grid>
                                     </Grid>
                                     <div className='m-4_3'>hello</div>

                                 </>
                                 :
                                 <>
                                     {activeButton === 'customer' && (
                                         <>
                                         </>
                                     )}
                                     {activeButton === 'service provider' && (
                                         <></>
                                     )}
                                     {activeButton === 'dealers' && (
                                         <></>
                                     )}
                                 </>
                         }
                     </Grid>
                 </Grid>
             </Grid>
             <Grid item width={"100%"}>
                 <Box className='mobile-about-us-font' display={"flex"} alignSelf={"flex-end"} justifyContent={"space-between"} sx={{minHeight: '50px',}}>
                     <Box mt={isMobile && 2} ml={isMobile ?5:1}  >
                         <Typography>© {currentYear} Made with Love by <Typography component={"span"} color={"rgb(173,73,112)"}>AVAH Services</Typography> </Typography>
                     </Box>
                     {!isMobile && (
                     <Box display={"flex"} justifyContent={"space-between"}>
                         <Box mr={2}>About Us</Box>
                         <Box mr={2}>Terms & Conditions</Box>
                         <Box mr={2}>FAQ's</Box>
                         <Box mr={2}>Privacy Policy</Box>
                         <Box mr={2}>Contact Us</Box>
                     </Box>
                     )}

                 </Box>
             </Grid>
         </Grid>
     </Grid>
     {/* Right Side Container */}
     {!isMobile && (
     <Grid className='background-img' xs={5.5} item><Box height={'100%'} display={"flex"} justifyContent={"center"} alignItems={"center"}><img style={{height:'150px'}} src={AvahTransparent} alt="" /></Box></Grid>
     )}
 </Grid>

</Box>