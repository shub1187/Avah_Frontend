import { Box } from "@mui/material"
import Home from '../../../../src/assets/landingPage//WhatWeDo/WHAT DOES AVAH DO.png'
import Scope1 from '../../../../src/assets/landingPage//WhatWeDo/ScopeImage1.png'
import Scope2 from '../../../../src/assets/landingPage//WhatWeDo/ScopeImage2.png'
import Scope3 from '../../../../src/assets/landingPage//WhatWeDo/ScopeImage3.png'
// import Why1 from '../../../../src/assets/landingPage//WhatWeDo/WhyImage1.png'
import Why2 from '../../../../src/assets/landingPage//WhatWeDo/WhyImage2.png'
import Why3 from '../../../../src/assets/landingPage//WhatWeDo/WhyImage3.png'
import Why1 from '../../../../src/assets/landingPage//WhatWeDo/Mask group-2.png'

import Tick from '../../../../src/assets/landingPage/AboutUs/Tick.svg'
import Ellipse from '../../../../src/assets/landingPage//WhatWeDo/Screenshot 2025-05-10 at 12.13.14 AM.png'
import GetStarted from '../../../../src/assets/landingPage/AboutUs/getStarted.png'
import { Link } from "react-router-dom"


const WhatWeDo = ()=>{
    return(
        <Box className='whatWeDo'>
            <Box className='whatWeDo__image'>
                <img src={Home}/>
                <Box className='whatWeDo__image__overlay'></Box>
                <Box className='whatWeDo__image__text'>WHAT DOES <span className="red">AVAH DO</span></Box>
                <Box className='whatWeDo__image__underline'></Box>
            </Box>
            <Box className='whatWeDo__textBox'>
                <Box className='whatWeDo__textBox__title1'>Revolutionizing Car Servicing</Box>
                <Box className='whatWeDo__textBox__title2'>Connecting Car Owners with Trusted Providers</Box>
                <Box className='whatWeDo__textBox__text'>The automotive industry is evolving rapidly, yet unexplored grey areas create chaos and confusion for both car owners and service providers. Customers often remain unaware of their vehicle’s service status, lacking transparency and accountability.<br/>
                AVAH bridges this gap by offering a smart automotive service platform that ensures trust, efficiency, and ease in vehicle maintenance. From regular servicing to emergency repairs and spare parts, AVAH connects you with verified providers at the right price, ensuring a seamless and reliable service experience.</Box>

            </Box>
            <Box className='whatWeDo__scope'>
                <Box className='whatWeDo__scope__title1'>Scope of <span className="redText">AVAH</span></Box>
                <Box className='whatWeDo__scope__title2'>A Comprehensive Digital Solution for Car Servicing</Box>
                <Box className='whatWeDo__scope__text'>Machines are essential for both business operations and daily life, ensuring smooth and efficient functioning. However, to maintain their optimal performance, regular care and servicing are crucial.
                    Your vehicle is your second home—a place where you spend significant time while traveling. Having complete confidence in what you drive is not just a luxury but a necessity. Careless handling is a risk to both safety and reliability, making regular maintenance and service tracking vital.
                    AVAH ensures that every car owner has full knowledge and control over their vehicle's condition, providing a safe, transparent, and seamless driving experience every day.</Box>
                <Box className='whatWeDo__scope__images'>
                    <img src={Scope1}/>
                    <img src={Scope2}/>
                    <img src={Scope3}/>
                </Box>

            </Box>
            <Box className='whatWeDo__why'>
                <Box className='whatWeDo__why__title1'>Why is <span className="redText">AVAH Needed?</span></Box>
                <Box className='whatWeDo__why__title2'> The Problem We Solve</Box>
                <Box className='whatWeDo__why__text'>The automotive servicing industry is highly unorganized, with many challenges for both customers and service providers.</Box>
                <Box className='whatWeDo__why__box'>
                    <Box className='whatWeDo__why__box__list1'>
                        <li>Lack of trust in unauthorized mechanics</li>
                        <li>No record-keeping for services done</li>
                        <li>Difficulty in finding specialists for discontinued models</li>
                        <li>Uncertain pricing and hidden charges</li>
                    </Box>
                    <Box className='whatWeDo__why__box__list2'>
                        <li>Limited visibility to potential customers</li>
                        <li>No structured way to receive and manage requests</li>
                        <li>Difficulty in getting feedback and building credibility</li>

                    </Box>
                    <Box className='whatWeDo__why__box__blackBox1'>Challenges for Car Owners</Box>
                    <Box className='whatWeDo__why__box__blackBox2'>Challenges for Service Providers</Box>
                    <Box className='whatWeDo__why__box__whiteBox'>
                        <Box className='whatWeDo__why__box__whiteBox__title'>Vehicle owners rely on unorganized garages</Box>
                        <Box  className='line'>
                            <Box className='percent80'>
                                <Box></Box>
                                <Box></Box>
                            </Box>
                            <Box>80%</Box>
                        </Box>
                        <Box className='whatWeDo__why__box__whiteBox__title'>Car owners have no digital service history</Box>
                        <Box className='line'>
                            <Box className='percent60'>
                                <Box></Box>
                                <Box></Box>
                            </Box>
                            <Box>60%</Box>
                        </Box>
                        <Box className='whatWeDo__why__box__whiteBox__title'>Customers report overcharging issues</Box>
                        <Box className='line'>
                            <Box className='percent40'>
                                <Box></Box>
                                <Box></Box>
                            </Box>
                            <Box>40%</Box>
                        </Box>
                        <Box className='whatWeDo__why__box__whiteBox__title'>Mechanics have no digital presence</Box>
                        <Box className='line'>
                            <Box className='percent70'>
                                <Box></Box>
                                <Box></Box>
                            </Box>
                            <Box>70%</Box>
                        </Box>
                    </Box>
                    <Box className='whatWeDo__why__box__img1'><img src={Why1}/></Box>
                    <Box className='whatWeDo__why__box__img2'><img src={Why2}/></Box>
                    <Box className='whatWeDo__why__box__img3'><img src={Why3}/></Box>
                </Box>

            </Box>
            <Box className='whatWeDo__greyArea'>
                <Box className='whatWeDo__greyArea__title1'>The Grey Area & <span className="redText">AVAH’s Solution</span></Box>
                <Box className='whatWeDo__greyArea__title2'>The Problem</Box>
                <Box className='whatWeDo__greyArea__underline'></Box>

                <Box className='whatWeDo__greyArea__text'>Since many owners of the vehicles don’t know the status of their own vehicles, it is indeed very risky to gamble a life on something you don’t know or are aware about. Every owner should know and have adequate knowledge of what he/she is driving. Is it fair enough to drive something which you don’t know and consider to be an owner of it? There are many precedents where accidents happen without knowing the cause of it. Does it have to do away with the health of the vehicle? It, might be yes or no. But living in such a mentality will lead to nowhere but risking our lives in the hands of destiny and miracles.</Box>
                <Box className='whatWeDo__greyArea__box'>
                    <Box className='whatWeDo__greyArea__box__title'>The AVAH Solution</Box>
                    <Box className='whatWeDo__greyArea__box__leftRight'>
                        <Box className='whatWeDo__greyArea__box__leftRight__left'>
                            <Box><img src={Tick}/><Box>A centralized platform where car owners can find verified service providers</Box></Box>
                            <Box><img src={Tick}/><Box>Digital service records to track history and enhance resale value</Box></Box>

                        </Box>
                        <Box className='whatWeDo__greyArea__box__leftRight__right'>
                            <Box><img src={Tick}/><Box>Transparent pricing & service approvals before work starts</Box></Box>
                            <Box><img src={Tick}/><Box>Customer reviews & ratings to ensure service quality</Box></Box>
                    </Box>
                    </Box>




                </Box>

            </Box>
            <Box className='whatWeDo__who'>
                <Box className='whatWeDo__who__title'>Who Benefits from <span className='redText'>AVAH?</span></Box>
                <Box className='whatWeDo__who__ellipse'>
                    <Box className='whatWeDo__who__ellipse__image'><img src={Ellipse}/></Box>


                    {/* <Box className='whatWeDo__who__ellipse__one'>Authorised Service Centre </Box>
                    <Box className='whatWeDo__who__ellipse__two'>Motor Oil Companies & Spare Part Vendors for Surveys and R&D Related Purposes </Box>
                    <Box className='whatWeDo__who__ellipse__three'>Insurance Companies </Box>
                    <Box className='whatWeDo__who__ellipse__four'>Prospective Buyers in Case of Sale Purchase </Box>
                    <Box className='whatWeDo__who__ellipse__five'>Used Car Market Dealers </Box>
                    <Box className='whatWeDo__who__ellipse__six'>Private Workshops/ Local Mechanics </Box> */}

                </Box>
            </Box>
            <Box className='whatWeDo__join'>
                <Box className='whatWeDo__join__image'>
                    <img src={GetStarted}/>
                    <Box className='whatWeDo__join__image__title1'>Your Car Deserves the Best </Box>
                    <Box className='whatWeDo__join__image__title2'>Get Reliable Service with AVAH!</Box>
                    <Box className='whatWeDo__join__image__button'><Link to={localStorage.getItem('customer_id')?'/customer/dashboard':'/login'}><button>Join Now</button></Link></Box>

                </Box>
            </Box>
        </Box>
    )
}

export default WhatWeDo