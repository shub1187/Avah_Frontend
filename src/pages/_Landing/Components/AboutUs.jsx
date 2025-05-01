import { Box } from "@mui/material"
import { Link, useLocation } from "react-router-dom"
import Tick from '../../../../src/assets/landingPage/AboutUs/Tick.svg'
import Man from '../../../../src/assets/landingPage/AboutUs/man.svg'
import getStarted from '../../../../src/assets/landingPage/AboutUs/getStarted.png'
import half from '../../../../src/assets/landingPage/AboutUs/half.svg'
import group from '../../../../src/assets/landingPage/AboutUs/group.svg'
import Ninty from '../../../../src/assets/landingPage/AboutUs/90.svg'
import TwoX from '../../../../src/assets/landingPage/AboutUs/2x.svg'
import Main from '../../../../src/assets/landingPage/AboutUs/About Us.png'
import './index.scss'
const AboutUs = () => {
    const a = useLocation()

    return (
        <Box className='aboutUs'>
            <Box className='aboutUs__image'>
                <img src={Main}/>
                <Box className='aboutUs__image__text'>ABOUT <span className="red">AVAH</span></Box>
                <Box className='aboutUs__image__underline'></Box>
            </Box>
            <Box className='aboutUs__description'>
                <Box className='aboutUs__description__title'>Inspired by <span className="redColor">Passion,</span> Driven by <span className="redColor">Innovation</span></Box>
                <Box className='aboutUs__description__content'>
                The name AVAH is derived from the Sanskrit word "A Vahan", meaning "A Vehicle." Our journey started with a passion for automobiles and a vision to revolutionize car servicing.
                The founder, an automobile enthusiast, faced a common yet frustrating challenge—finding reliable service for discontinued vehicles. Local mechanics were an option, but how do you ensure they are skilled, trustworthy, and the right fit for your car? This lack of transparency in the unauthorized service market highlighted a huge gap—car owners needed a reliable way to connect with skilled mechanics.
                Every great startup is born from a real-world problem, and AVAH was created to bring clarity, trust, and seamless connectivity between car owners and service providers. Unlike traditional setups where records are lost, services are undocumented, and trust is based on assumptions, AVAH brings transparency and accountability into the servicing industry.
                </Box>
            </Box>
            <Box className='aboutUs__why'>
                <Box className='aboutUs__why__title'>
                    <Box className=''>Why choose <span className="redColor">AVAH</span></Box>
                </Box>
                <Box className='aboutUs__why__content'>We believe trust alone is not enough when it comes to maintaining your vehicle—a structured, accountable system is essential. AVAH provides a solution, not just a service—giving car owners confidence in their vehicle maintenance while empowering service providers with the tools they need to deliver exceptional service.</Box>
                <Box className='aboutUs__why__redBox'>Auto repair industry survey statistics
                    <Box className='aboutUs__why__redBox__blackBox1'>Half of people say they have experienced bad service in auto care
                        <Box className='aboutUs__why__redBox__blackBox1__circle'><img src={half}/></Box>
                    </Box>
                    <Box className='aboutUs__why__redBox__blackBox2'>2/3 of people say they have been mistreated, pushed and pressured
                        <Box className='aboutUs__why__redBox__blackBox2__circle'><img src={group}/></Box>
                    </Box>
                    <Box className='aboutUs__why__redBox__blackBox3'>90% of people believe they have been overcharged at least once
                        <Box className='aboutUs__why__redBox__blackBox3__circle'><img src={Ninty}/></Box>
                    </Box>
                    <Box className='aboutUs__why__redBox__blackBox4'>Women are 2x as likely to feel they are being taken advantage of
                        <Box className='aboutUs__why__redBox__blackBox4__circle'><img src={TwoX}/></Box>
                    </Box>

                </Box>
            </Box>
            <Box className='aboutUs__whyAvahTitle'>Why <span className="redColor">AVAH?</span></Box>
            <Box className='aboutUs__whyAvah'>
                <Box className='aboutUs__whyAvah__customer'>For Customers</Box>
                <Box className='aboutUs__whyAvah__service'>For Service Providers</Box>
                <Box className='aboutUs__whyAvah__man'><img src={Man} /></Box>

                <Box className='aboutUs__whyAvah__left'>
                    <Box className='aboutUs__whyAvah__left__container'>
                        <Box className='aboutUs__whyAvah__left__container__icon'>
                            <img src={Tick} />
                        </Box>
                        <Box className='aboutUs__whyAvah__left__container__content'>
                            <Box className='title'>Maintain Service Records</Box>
                            <Box className='content'>Keep a digital history of all your vehicle services.</Box>
                        </Box>
                    </Box>

                    <Box className='aboutUs__whyAvah__left__container'>
                        <Box className='aboutUs__whyAvah__left__container__icon'>
                            <img src={Tick} />
                        </Box>
                        <Box className='aboutUs__whyAvah__left__container__content'>
                            <Box className='title'>Easy Appointments & Status Tracking</Box>
                            <Box className='content'>Book services effortlessly and track real-time progress.</Box>
                        </Box>
                    </Box>

                    <Box className='aboutUs__whyAvah__left__container'>
                        <Box className='aboutUs__whyAvah__left__container__icon'>
                            <img src={Tick} />
                        </Box>
                        <Box className='aboutUs__whyAvah__left__container__content'>
                            <Box className='title'>Transfer Service Records When Selling Your Car</Box>
                            <Box className='content'>Increase resale value with complete service history.</Box>
                        </Box>
                    </Box>


                    <Box className='aboutUs__whyAvah__left__container'>
                        <Box className='aboutUs__whyAvah__left__container__icon'>
                            <img src={Tick} />
                        </Box>
                        <Box className='aboutUs__whyAvah__left__container__content'>
                            <Box className='title'>See Feedback & Choose from Listed Providers</Box>
                            <Box className='content'>Select the best mechanics based on customer ratings.</Box>
                        </Box>
                    </Box>
                </Box>
                <Box className='aboutUs__whyAvah__right'>
                    <Box className='aboutUs__whyAvah__right__container'>
                        <Box className='aboutUs__whyAvah__right__container__content'>
                            <Box className='title'>Easy Quote Sharing on Service Requests</Box>
                            <Box className='content'>Quickly respond to service inquiries with accurate quotes.</Box>
                        </Box>
                        <Box className='aboutUs__whyAvah__right__container__icon'>
                            <img src={Tick} />
                        </Box>
                    </Box>                    
                    <Box className='aboutUs__whyAvah__right__container'>
                        <Box className='aboutUs__whyAvah__right__container__content'>
                            <Box className='title'>Get Approval & Start Service</Box>
                            <Box className='content'>No delays start the job as soon as the customer approves.</Box>
                        </Box>
                        <Box className='aboutUs__whyAvah__right__container__icon'>
                            <img src={Tick} />
                        </Box>
                    </Box>                    
                    <Box className='aboutUs__whyAvah__right__container'>
                        <Box className='aboutUs__whyAvah__right__container__content'>
                            <Box className='title'>Simple Technician Assignment</Box>
                            <Box className='content'>Manage and assign jobs to your team effortlessly.</Box>
                        </Box>
                        <Box className='aboutUs__whyAvah__right__container__icon'>
                            <img src={Tick} />
                        </Box>
                    </Box>                    
                    <Box className='aboutUs__whyAvah__right__container'>
                        <Box className='aboutUs__whyAvah__right__container__content'>
                            <Box className='title'>Maintain Spare & Service Lists</Box>
                            <Box className='content'> Keep track of parts inventory and past services.</Box>
                        </Box>
                        <Box className='aboutUs__whyAvah__right__container__icon'>
                            <img src={Tick} />
                        </Box>
                    </Box>
                    <Box className='aboutUs__whyAvah__right__container'>
                        <Box className='aboutUs__whyAvah__right__container__content'>
                            <Box className='title'>Get Feedback & Ratings from Customers</Box>
                            <Box className='content'>Build credibility and attract more customers.</Box>
                        </Box>
                        <Box className='aboutUs__whyAvah__right__container__icon'>
                            <img src={Tick} />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className='aboutUs__getStarted'>
                <img src={getStarted}/>
                <Box className='aboutUs__getStarted__title'>A smarter way to service </Box>
                <Box className='aboutUs__getStarted__title1'>your vehicle is just a click away.</Box>

                <Box className='aboutUs__getStarted__content'>Your car deserves the best, and AVAH ensures it gets nothing less!</Box>
                <Box className='aboutUs__getStarted__button'><Link to='/login'><button>Get Started</button></Link></Box>
            </Box>
        </Box>
    )
}

export default AboutUs