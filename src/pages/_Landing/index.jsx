import { Box, Button, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import { useState } from "react"
import HomePage from "./Components/HomePage"
import AvahLogo from '../../../src/assets/landingPage/avahLogo.svg'
import avahSmallLogo from '../../../src/assets/landingPage/avahSmallLogo.svg'
import Gmail from '../../../src/assets/landingPage/gmail.png'
import Phone from '../../../src/assets/landingPage/phone.png'
import Profile from '../../../src/assets/landingPage/profile.png'
import facebook from '../../../src/assets/landingPage/facebook.svg'
import instagram from '../../../src/assets/landingPage/instagram.svg'
import linkedin from '../../../src/assets/landingPage/linkedin.svg'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import './index.scss'
import AboutUs from "./Components/AboutUs"
import { Link, useLocation } from "react-router-dom"
import WhatWeDo from "./Components/WhatWeDo"
import HowWeDo from "./Components/HowWeDo"
import ContactUs from "./Components/ContactUs"
import Providers from "./Components/Providers"
import MenuIcon from '@mui/icons-material/Menu';
import { useMobileResponsive } from "hooks/useMobileResponsive"

const LandingPage = ()=>{
    const location = useLocation()
    const {isMobile} = useMobileResponsive()
    const [open,setOpen] = useState(false)
    return(
        <Box className='landingPageContainer'>
            <Box className='landingPageContainer__redBar'>
                <Box className='landingPageContainer__redBar__left'>
                    <img src={Gmail}/>info@avahservices.com
                </Box>
                <Box className='landingPageContainer__redBar__right'>
                    {/* <Box className='landingPageContainer__redBar__right__number'>
                        <img src={Phone}/>1234567890
                    </Box> */}
                    <Box className='landingPageContainer__redBar__right__signIn'>
                        {localStorage.getItem('profile_name') ? <Link to={'/customer/dashboard'}><Button style={{textTransform:'none'}} endIcon={<ArrowRightAltIcon/>} variant="contained" color="redder">Dashboard</Button></Link>:<Link to='/login'><img src={Profile}/>Sign In /Register</Link>}
                    </Box>
                </Box>
            </Box>
            <Box className='landingPageContainer__navbar'>
                <Box className='landingPageContainer__navbar__logo'><img src={AvahLogo}/></Box>
                {isMobile ?
                 <>
                    <Box>
                        <IconButton onClick={()=>setOpen(true)}><MenuIcon/></IconButton>
                    </Box>
                    <Drawer variant="temporary" onClose={()=>setOpen(false)} open={open} anchor="right">
                    <List sx={{width:250}}>
                        <ListItem>
                            <ListItemButton onClick={()=>setOpen(false)}>
                            <Link style={{color:location.pathname==='/'?'#D6384C':'black',textDecoration:'none'}} to={'/'}>Home</Link>
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton onClick={()=>setOpen(false)}>
                            <Link style={{color:location.pathname?.includes('aboutUs')?'#D6384C':'black',textDecoration:'none'}} to={'/aboutUs'}>About Us</Link>
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton onClick={()=>setOpen(false)}>
                            <Link style={{color:location.pathname?.includes('whatWeDo')?'#D6384C':'black',textDecoration:'none'}} to={'/whatWeDo'}>What We Do</Link>
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton onClick={()=>setOpen(false)}>
                            <Link style={{color:location.pathname?.includes('howWeDo')?'#D6384C':'black',textDecoration:'none'}} to={'/howWeDo'}>How We Do</Link>
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton onClick={()=>setOpen(false)}>
                            <Link style={{color:location.pathname?.includes('providers')?'#D6384C':'black',textDecoration:'none'}} to={'/providers'}>Providers</Link>
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton onClick={()=>setOpen(false)}>
                            <Link style={{color:location.pathname?.includes('contactUs')?'#D6384C':'black',textDecoration:'none'}} to={'/contactUs'}>Contact Us</Link>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Drawer>
                </>:

                    <Box className='landingPageContainer__navbar__links'>
                        <Box><Link to={'/'}><button style={{color:location.pathname==='/'?'#D6384C':'black'}}>Home</button></Link></Box>
                        <Box><Link to={'/aboutUs'}><button style={{color:location.pathname?.includes('aboutUs')?'#D6384C':'black'}}>About Us</button></Link></Box>
                        <Box><Link to={'/whatWeDo'}><button style={{color:location.pathname?.includes('whatWeDo')?'#D6384C':'black'}}>What We Do</button></Link></Box>
                        <Box><Link to={'/howWeDo'}><button style={{color:location.pathname?.includes('howWeDo')?'#D6384C':'black'}}>How We Do</button></Link></Box>
                        <Box><Link to={'/providers'}><button style={{color:location.pathname?.includes('providers')?'#D6384C':'black'}}>Providers</button></Link></Box>
                        <Box><Link to={'/contactUs'}><button style={{color:location.pathname?.includes('contactUs')?'#D6384C':'black'}}>Contact Us</button></Link></Box>
                    </Box>
                }

            </Box>
            <Box className='landingPageContainer__content'>
                {location.pathname?.includes('aboutUs') &&  <AboutUs/>}
                {location.pathname?.includes('whatWeDo') && <WhatWeDo/>}
                {location.pathname?.includes('howWeDo') && <HowWeDo/>}
                {location.pathname?.includes('contactUs') && <ContactUs/>}
                {location.pathname?.includes('providers') && <Providers/>}
                {location.pathname==='/' && <HomePage/>}

            </Box>
            <Box className='landingPageContainer__footer'>
                <Box className='landingPageContainer__footer__logo'><img src={avahSmallLogo}/></Box>
                <Box className='landingPageContainer__footer__links'>
                    <Link to={'/'}><button>Home</button></Link>
                    <Box className='line'></Box>
                    <Link to={'/aboutUs'}><button>About Us</button></Link>
                    <Box className='line'></Box>
                    <Link to={'/contactUs'}><button>Contact Us</button></Link>
                </Box>
                <Box className='landingPageContainer__footer__tradeMark'>
                    <Box className='landingPageContainer__footer__tradeMark__left'>© 2025 Made with Love By AVAH Services</Box>
                    <Box className='landingPageContainer__footer__tradeMark__right'>
                        <img src={facebook}/><img src={instagram}/><img src={linkedin}/>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default LandingPage