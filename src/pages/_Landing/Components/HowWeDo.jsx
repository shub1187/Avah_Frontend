import { Box } from "@mui/material"
import How from '../../../../src/assets/landingPage//HowWeDo/How AVAH Work.png'
import Service from '../../../../src/assets/landingPage//HowWeDo/Service.png'
import Customer from '../../../../src/assets/landingPage//HowWeDo/Customers.png'
import { Link } from "react-router-dom"
import GetStarted from '../../../../src/assets/landingPage/AboutUs/getStarted.png'


const HowWeDo = ()=>{
    return (
        <Box className='howWeDo'>
            <Box className='howWeDo__image'>
                <img src={How}/>
                <Box className='howWeDo__image__overlay'></Box>
                <Box className='howWeDo__image__text'>HOW <span className="red">AVAH WORK</span></Box>
                <Box className='howWeDo__image__underline'></Box>
            </Box>
            <Box className='howWeDo__customer'>
                <Box className='howWeDo__customer__title'>For Customers</Box>
                <Box className='howWeDo__customer__subTitle'>Hassle-Free Car Service in Just a Few Steps</Box>

                <Box className='howWeDo__customer__left'>
                    <Box className='howWeDo__customer__left__box'>
                        <Box className='howWeDo__customer__left__box__circleAndArrow'>
                            <Box className='howWeDo__customer__left__box__circleAndArrow__circle'><Box>1</Box><Box className='howWeDo__customer__left__box__circleAndArrow__circle__circle1'></Box></Box>
                            <Box className='howWeDo__customer__left__box__circleAndArrow__arrow'>
                                <Box className='howWeDo__customer__left__box__circleAndArrow__arrow__line'></Box>
                                <Box className='howWeDo__customer__left__box__circleAndArrow__arrow__pointer'></Box>

                            </Box>

                        </Box>
                        <Box className='howWeDo__customer__left__box__text'>
                            <Box className='howWeDo__customer__left__box__text__title'>Book a Service Request</Box>
                            <Box className='howWeDo__customer__left__box__text__subTitle'>Easily create a service request by selecting your vehicle, describing the issue, and choosing the type of service you need.</Box>
                        </Box>
                    </Box>
                    <Box className='howWeDo__customer__left__box'>
                        <Box className='howWeDo__customer__left__box__circleAndArrow'>
                            <Box className='howWeDo__customer__left__box__circleAndArrow__circle'><Box>2</Box><Box className='howWeDo__customer__left__box__circleAndArrow__circle__circle1'></Box></Box>
                            <Box className='howWeDo__customer__left__box__circleAndArrow__arrow'>
                                <Box className='howWeDo__customer__left__box__circleAndArrow__arrow__line'></Box>
                                <Box className='howWeDo__customer__left__box__circleAndArrow__arrow__pointer'></Box>

                            </Box>

                        </Box>
                        <Box className='howWeDo__customer__left__box__text'>
                            <Box className='howWeDo__customer__left__box__text__title'>Get Quotes from Verified Providers</Box>
                            <Box className='howWeDo__customer__left__box__text__subTitle'>Receive competitive quotes from trusted service providers in your area. Compare pricing, ratings, and feedback before making a decision.</Box>
                        </Box>
                    </Box>
                    <Box className='howWeDo__customer__left__box'>
                        <Box className='howWeDo__customer__left__box__circleAndArrow'>
                            <Box className='howWeDo__customer__left__box__circleAndArrow__circle'><Box>3</Box><Box className='howWeDo__customer__left__box__circleAndArrow__circle__circle1'></Box></Box>
                            <Box className='howWeDo__customer__left__box__circleAndArrow__arrow'>
                                <Box className='howWeDo__customer__left__box__circleAndArrow__arrow__line'></Box>
                                <Box className='howWeDo__customer__left__box__circleAndArrow__arrow__pointer'></Box>

                            </Box>

                        </Box>
                        <Box className='howWeDo__customer__left__box__text'>
                            <Box className='howWeDo__customer__left__box__text__title'>Approve & Start Service</Box>
                            <Box className='howWeDo__customer__left__box__text__subTitle'>Once you select a provider, approve the service, and they’ll get started immediately—no delays, no hidden charges!</Box>
                        </Box>
                    </Box>
                    <Box className='howWeDo__customer__left__box'>
                        <Box className='howWeDo__customer__left__box__circleAndArrow'>
                            <Box className='howWeDo__customer__left__box__circleAndArrow__circle'><Box>4</Box><Box className='howWeDo__customer__left__box__circleAndArrow__circle__circle1'></Box></Box>
                            <Box className='howWeDo__customer__left__box__circleAndArrow__arrow'>
                                <Box className='howWeDo__customer__left__box__circleAndArrow__arrow__line'></Box>
                                <Box className='howWeDo__customer__left__box__circleAndArrow__arrow__pointer'></Box>

                            </Box>

                        </Box>
                        <Box className='howWeDo__customer__left__box__text'>
                            <Box className='howWeDo__customer__left__box__text__title'>Track Service Progress</Box>
                            <Box className='howWeDo__customer__left__box__text__subTitle'>Stay updated with real-time status tracking and notifications on your service progress.</Box>
                        </Box>
                    </Box>
                    <Box className='howWeDo__customer__left__box'>
                        <Box className='howWeDo__customer__left__box__circleAndArrow'>
                            <Box className='howWeDo__customer__left__box__circleAndArrow__circle'><Box>5</Box><Box className='howWeDo__customer__left__box__circleAndArrow__circle__circle1'></Box></Box>

                        </Box>
                        <Box className='howWeDo__customer__left__box__text'>
                            <Box className='howWeDo__customer__left__box__text__title'>Rate & Review Your Experience</Box>
                            <Box className='howWeDo__customer__left__box__text__subTitle'>After the service is completed, share your feedback to help others choose the best providers.</Box>
                        </Box>
                    </Box>
                </Box>
                <Box className='howWeDo__customer__right'><img src={Customer}/></Box>
            </Box>
            <Box className='howWeDo__service'>

                <Box className='howWeDo__service__leftRight'>
                    <Box className='howWeDo__service__leftRight__left'><img src={Service}/></Box>
                    <Box className='howWeDo__service__leftRight__right'>
                        <Box className='howWeDo__service__leftRight__right__title'>For Service Providers</Box>
                        <Box className='howWeDo__service__leftRight__right__subTitle'>Simplified Workflow, Better Business</Box>
                        <Box className='howWeDo__service__leftRight__right__box'>
                            <Box className='howWeDo__service__leftRight__right__box__circleAndArrow'>
                                <Box className='howWeDo__service__leftRight__right__box__circleAndArrow__circle'><Box>1</Box><Box className='howWeDo__service__leftRight__right__box__circleAndArrow__circle__circle1'></Box></Box>
                                <Box className='howWeDo__service__leftRight__right__box__circleAndArrow__arrow'>
                                    <Box className='howWeDo__service__leftRight__right__box__circleAndArrow__arrow__line'></Box>
                                    <Box className='howWeDo__service__leftRight__right__box__circleAndArrow__arrow__pointer'></Box>

                                </Box>

                            </Box>
                            <Box className='howWeDo__service__leftRight__right__box__text'>
                                <Box className='howWeDo__service__leftRight__right__box__text__title'>Receive Service Requestst</Box>
                                <Box className='howWeDo__service__leftRight__right__box__text__subTitle'>Get notified when customers request a service in your area.</Box>
                            </Box>
                        </Box>
                        <Box className='howWeDo__service__leftRight__right__box'>
                            <Box className='howWeDo__service__leftRight__right__box__circleAndArrow'>
                                <Box className='howWeDo__service__leftRight__right__box__circleAndArrow__circle'><Box>2</Box><Box className='howWeDo__service__leftRight__right__box__circleAndArrow__circle__circle1'></Box></Box>
                                <Box className='howWeDo__service__leftRight__right__box__circleAndArrow__arrow'>
                                    <Box className='howWeDo__service__leftRight__right__box__circleAndArrow__arrow__line'></Box>
                                    <Box className='howWeDo__service__leftRight__right__box__circleAndArrow__arrow__pointer'></Box>

                                </Box>

                            </Box>
                            <Box className='howWeDo__service__leftRight__right__box__text'>
                                <Box className='howWeDo__service__leftRight__right__box__text__title'>Get Approval & Begin Service</Box>
                                <Box className='howWeDo__service__leftRight__right__box__text__subTitle'>Once the customer approves your quote, start the service with confidence.</Box>
                            </Box>
                        </Box>
                        <Box className='howWeDo__service__leftRight__right__box'>
                            <Box className='howWeDo__service__leftRight__right__box__circleAndArrow'>
                                <Box className='howWeDo__service__leftRight__right__box__circleAndArrow__circle'><Box>3</Box><Box className='howWeDo__service__leftRight__right__box__circleAndArrow__circle__circle1'></Box></Box>
                                <Box className='howWeDo__service__leftRight__right__box__circleAndArrow__arrow'>
                                    <Box className='howWeDo__service__leftRight__right__box__circleAndArrow__arrow__line'></Box>
                                    <Box className='howWeDo__service__leftRight__right__box__circleAndArrow__arrow__pointer'></Box>

                                </Box>

                            </Box>
                            <Box className='howWeDo__service__leftRight__right__box__text'>
                                <Box className='howWeDo__service__leftRight__right__box__text__title'>Assign Technicians & Manage Jobs</Box>
                                <Box className='howWeDo__service__leftRight__right__box__text__subTitle'>Easily allocate tasks to your technicians and track service progress.</Box>
                            </Box>
                        </Box>
                        <Box className='howWeDo__service__leftRight__right__box'>
                            <Box className='howWeDo__service__leftRight__right__box__circleAndArrow'>
                                <Box className='howWeDo__service__leftRight__right__box__circleAndArrow__circle'><Box>4</Box><Box className='howWeDo__service__leftRight__right__box__circleAndArrow__circle__circle1'></Box></Box>
                                <Box className='howWeDo__service__leftRight__right__box__circleAndArrow__arrow'>
                                    <Box className='howWeDo__service__leftRight__right__box__circleAndArrow__arrow__line'></Box>
                                    <Box className='howWeDo__service__leftRight__right__box__circleAndArrow__arrow__pointer'></Box>

                                </Box>

                            </Box>
                            <Box className='howWeDo__service__leftRight__right__box__text'>
                                <Box className='howWeDo__service__leftRight__right__box__text__title'>Receive Service Requestst</Box>
                                <Box className='howWeDo__service__leftRight__right__box__text__subTitle'>Get notified when customers request a service in your area.</Box>
                            </Box>
                        </Box>
                        <Box className='howWeDo__service__leftRight__right__box'>
                            <Box className='howWeDo__service__leftRight__right__box__circleAndArrow'>
                                <Box className='howWeDo__service__leftRight__right__box__circleAndArrow__circle'><Box>5</Box><Box className='howWeDo__service__leftRight__right__box__circleAndArrow__circle__circle1'></Box></Box>
                                <Box className='howWeDo__service__leftRight__right__box__circleAndArrow__arrow'>
                                    <Box className='howWeDo__service__leftRight__right__box__circleAndArrow__arrow__line'></Box>
                                    <Box className='howWeDo__service__leftRight__right__box__circleAndArrow__arrow__pointer'></Box>

                                </Box>

                            </Box>
                            <Box className='howWeDo__service__leftRight__right__box__text'>
                                <Box className='howWeDo__service__leftRight__right__box__text__title'>Get Customer Ratings & Grow Business</Box>
                                <Box className='howWeDo__service__leftRight__right__box__text__subTitle'>Happy customers mean better ratings and more business. Deliver great service and build your reputation!</Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>

            </Box>
            <Box className='howWeDo__join'>
                <Box className='howWeDo__join__image'>
                    <img src={GetStarted}/>
                    <Box className='howWeDo__join__image__title1'>Drive Worry-Free </Box>
                    <Box className='howWeDo__join__image__title2'>The Right Service, The Right Provider, The Right Way!</Box>
                    <Box className='howWeDo__join__image__underline'></Box>
                    <Box className='howWeDo__join__image__text'>Whether you're a car owner looking for hassle-free servicing or a service provider
                    wanting to expand your business, AVAH is the platform for you!</Box>
                    <Box className='howWeDo__join__image__button'><Link to={localStorage.getItem('customer_id')?'/customer/dashboard':'/login'}><button>Get Registered Now</button></Link></Box>

                </Box>
            </Box>
        </Box>
    )
}

export default HowWeDo