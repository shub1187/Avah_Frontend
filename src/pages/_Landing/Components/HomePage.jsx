import { Box, Button, Rating } from "@mui/material"
import './index.scss'
import Profile from '../../../../src/assets/landingPage/homePage/mercedes.svg'
import Customer from '../../../../src/assets/landingPage/homePage/customer.svg'
import Service from '../../../../src/assets/landingPage/homePage/service.svg'
import HowWeWork from '../../../../src/assets/landingPage/homePage/howWeWork.svg'
import Tick from '../../../../src/assets/landingPage/homePage/Tick.svg'
import ServiceImage1 from '../../../../src/assets/landingPage/homePage/ServiceImage1.png'
import ServiceImage2 from '../../../../src/assets/landingPage/homePage/ServiceImage2.png'
import ServiceImage3 from '../../../../src/assets/landingPage/homePage/ServiceImage3.jpeg'
import ServiceImage4 from '../../../../src/assets/landingPage/homePage/ServiceImage4.jpg'
import ServiceImage5 from '../../../../src/assets/landingPage/homePage/ServiceImage5.png'
import One from '../../../../src/assets/landingPage/homePage/One.svg'
import Two from '../../../../src/assets/landingPage/homePage/two.svg'
import Three from '../../../../src/assets/landingPage/homePage/three.svg'
import Home from '../../../../src/assets/landingPage/homePage/Home.png'
import HOWWEWORK from '../../../../src/assets/landingPage/homePage/Screenshot 2025-05-04 at 11.47.31 AM.png'

import Card1 from '../../../../src/assets/landingPage/Providers/Card1.png'
import Card2 from '../../../../src/assets/landingPage/Providers/Card2.png'
import Card3 from '../../../../src/assets/landingPage/Providers/Card3.png'
import Card4 from '../../../../src/assets/landingPage/Providers/Card4.png'
import Card5 from '../../../../src/assets/landingPage/Providers/Card5.png'
import Card6 from '../../../../src/assets/landingPage/Providers/Card6.png'
import Card7 from '../../../../src/assets/landingPage/Providers/Card7.png'
import Card8 from '../../../../src/assets/landingPage/Providers/Card8.png'
import Card9 from '../../../../src/assets/landingPage/Providers/Card9.png'
import { Link, useLocation } from "react-router-dom"
import URL from "url/apiURL"
import { useFetch } from "hooks/useFetch"
import { useState } from "react"
const {getRandomSp} = URL.CUSTOMER.LANDINGPAGE

const HomePage = ()=>{
    const a = useLocation()
    const data = useFetch(getRandomSp);
    const randomsp = data?.data?.result?.results;

    const cardImages = [Card1, Card2, Card3, Card4, Card5, Card6, Card7, Card8, Card9];

    return(
        <Box className='homePage'>
            <Box className='homePage__getStartedImage'><img src={Home}/>
                <Box className='homePage__getStartedImage__text'>Effortless Car Servicing with Avah Services</Box>
                <Box className='homePage__getStartedImage__button'><Link to='/login'><button>Get Started</button></Link></Box>
            </Box>
            <Box className='homePage__about'>
                <Box className='homePage__about__left'>
                    <Box className='homePage__about__left__title'>About <span className="redColor">Avah</span></Box>
                    <Box className='homePage__about__left__content'>
                    The name AVAH is derived from the Sanskrit word "A Vahan", meaning "A Vehicle." Our journey started with a passion for automobiles and a vision to revolutionize car servicing.<br/>
                    The founder, an automobile enthusiast, faced a common yet frustrating challenge—finding reliable service for discontinued vehicles. Local mechanics were an option, but how do you ensure they are skilled, trustworthy, and the right fit for your car? 
                    </Box>
                    <Box className='homePage__about__left__button'><Link to='/aboutUs'><button>Read More</button></Link></Box>
                </Box>
                <Box className='homePage__about__right'>
                    <img src={Profile}/>
                </Box>
            </Box>
            <Box className='homePage__greyContainer'>
                <Box className='homePage__greyContainer__firstRow'>
                    <Box className='homePage__greyContainer__firstRow__left'>
                        <img src={Customer}/>
                    </Box>
                    <Box className='homePage__greyContainer__firstRow__right'>
                        <Box className='homePage__greyContainer__firstRow__right__button'><button>For Customers</button></Box>
                        <Box className='homePage__greyContainer__firstRow__right__content'>
                            <img src={Tick}/>Maintain Service Records<br/>
                            <img src={Tick}/>Easy Appointments & Status Tracking<br/>
                            <img src={Tick}/>Transfer Service Records When Selling Your Car<br/>
                            <img src={Tick}/>See Feedback & Choose from Listed Providers
                        </Box>
                    </Box>
                </Box>
                <Box className='homePage__greyContainer__secondRow'>
                    <Box className='homePage__greyContainer__secondRow__left'>
                        <Box className='homePage__greyContainer__secondRow__left__button'><button>For Service Providers</button></Box>
                        <Box className='homePage__greyContainer__secondRow__left__content'>
                            <img src={Tick}/>Easy Quote Sharing on Service Requests<br/>
                            <img src={Tick}/>Get Approval & Start Service<br/>
                            <img src={Tick}/>Simple Technician Assignment<br/>
                            <img src={Tick}/>Maintain Spare & Service Lists<br/>
                            <img src={Tick}/>Get Feedback & Ratings from Customers<br/>

                        </Box>
                        
                    </Box>
                    <Box className='homePage__greyContainer__secondRow__right'>
                        <img src={Service}/>
                    </Box>
                </Box>
            </Box>
            <Box className='homePage__serviceProviders'>
                <Box className='homePage__serviceProviders__title'>Our <span className="redColor">Service Providers</span></Box>
                <Box className='homePage__serviceProviders__card'>
                    {
                        randomsp?.map((obj, ind) => {
                            const imageIndex = ind % cardImages.length; // Cycle through cardImages
                            return (
                                <Box className='cardContainer' key={ind}>
                                    <Box>
                                        <img src={cardImages[imageIndex]} alt={obj?.name} />
                                    </Box>
                                    <Box className='redText'>{obj?.business_name}</Box>
                                    <Box className='desc'>{obj?.business_contact}</Box>
                                    <Box className='desc'>{obj?.email}</Box>
                                    <Box className='location'>{obj?.state} {obj?.city}</Box>
                                    <Box className='underline'></Box>
                                    <Box>
                                        <Rating
                                            sx={{ marginBottom: 5 }}
                                            name="simple-controlled"
                                            value={obj?.average_rating}
                                            disabled
                                        />
                                    </Box>
                                </Box>
                            );
                        })
                    }
                </Box>
                <Box className='homePage__serviceProviders__viewAllButton'>
                <Link to='/providers'><button>View all {'> >'}</button></Link>
                </Box>
            </Box>
            <Box className='homePage__howWeWorkImage'>
                <img src={HOWWEWORK}/>
                {/* <img src={HowWeWork}/>
                <Box className='homePage__howWeWorkImage__title'>How We Work</Box>
                <Box className='homePage__howWeWorkImage__1'>
                    <Box className='bigTitle'>01.</Box>
                    <Box className='smallContent'>Book a Service Request</Box>
                </Box>
                <Box className='homePage__howWeWorkImage__2'><img src={One}/></Box>
                <Box className='homePage__howWeWorkImage__3'>
                    <Box className='bigTitle'>02.</Box>
                    <Box className='smallContent'>Get Quotes from Service Providers</Box>
                </Box>
                <Box className='homePage__howWeWorkImage__4'><img src={Two}/></Box>
                <Box className='homePage__howWeWorkImage__5'>
                    <Box className='bigTitle'>03.</Box>
                    <Box className='smallContent'>Approve & Start Service</Box>
                </Box>
                <Box className='homePage__howWeWorkImage__6'><img src={Two}/></Box>
                <Box className='homePage__howWeWorkImage__7'>
                    <Box className='bigTitle'>04.</Box>
                    <Box className='smallContent'>Track Status & Get Notified</Box>
                </Box>
                <Box className='homePage__howWeWorkImage__8'><img src={Three}/></Box>
                <Box className='homePage__howWeWorkImage__9'>
                    <Box className='bigTitle'>05.</Box>
                    <Box className='smallContent'>Provide Feedback</Box>
                </Box> */}
                <Box className='homePage__howWeWorkImage__10'>
                <Link to='/login'><button>Get Started</button></Link>
                </Box>

            </Box>

        </Box>
    )
}

export default HomePage