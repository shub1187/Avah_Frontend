import { Box } from '@mui/material'
import './index.scss'
import AvahImage from 'assets/img/avah_white.svg'
import { useMobileResponsive } from 'hooks/useMobileResponsive'
import { Link } from 'react-router-dom'
import AvahLogo from 'assets/img/avahlogo.svg'
import IntroLogo from 'assets/img/IntroLogo.svg'
import RoomPreferencesIcon from '@mui/icons-material/RoomPreferences';
import BookIcon from '@mui/icons-material/Book';
import MinorCrashIcon from '@mui/icons-material/MinorCrash';
import { StatsTable } from './table'
import { columns1, columns11, rows1, rows11 } from './column'
import Screen1 from 'assets/img/screen1.png'
import Screen2 from 'assets/img/screen2.png'
import PartiesCovered from 'assets/img/partiesCovered.png'
import benefit1 from 'assets/img/benefit1.png'
import benefit2 from 'assets/img/benefit2.png'
import benefit3 from 'assets/img/benefit3.png'
import benefit4 from 'assets/img/benefit4.png'
import benefit5 from 'assets/img/benefit5.png'
import Solution from 'assets/img/Solution.svg'

import { useState } from 'react'

export const WhatWeDo = ()=>{

    const [state, setState] = useState('source1')
    return (
        <Box className='whatwedoContainer'>
            <Box className='whatwedoContainer__header'>
                <Box className='whatwedoContainer__header__logo'><Link to={'/'}><img src={AvahLogo}/></Link></Box>
                <Box className='whatwedoContainer__header__floater'>
                    <Box className='sticky-navbar-container'>
                        {/* <Grid className='sticky-floating-content-container' > */}
                            <Box className="navbar-flex">
                                <Box><Link to={'/'}>Home</Link></Box>
                                {/* <Box><Link to={'/aboutUs'}>About Us</Link></Box> */}
                                <Box>
                                <Box>About Us</Box>
                                <Box >
                                Coined from a Sanskrit word "<span className="purple">A Vahan</span> ". The founder had a vision to open a garage out of passion for cars. <br/> He had experienced a lack of services for discontinued vehicles and found it very difficult to find the right service executive for the same. Though local mechanics were an option, how to identify and be assured that he is the right guy for your vehicle service? Every startup originates from a problem faced by the public but the solution to that problem lies in the answer of an entrepreneur and there came a vision which was to provide transparency and clarity and connect car owners to their right service provider.<br/> The unauthorized service market is very huge and that's where the founder saw the opportunity to set up a link between car owners and local mechanics. There are a lot of gray areas and no record when and where vehicles are maintained by the car owner through unauthorized local mechanics and there is no accountability for the same. Believing to just have trust in your mechanic and hand over your second home won't suffice this solution when it comes to driving that vehicle on a daily basis.<br/> We need a setup to look into the same and strengthen that trust into reality as this is the need of the current situation. This platform is the solution that caters to the problem rather than an obstacle which we face on our daily chores. Consider it as a medicine from a certified and recognized place which has no room for ambiguity.
                                </Box>
                                </Box>

                                <Box><Link to={'/whatWeDo'}>What we do</Link></Box>
                            </Box>
                        {/* </Grid> */}
                    </Box>
                </Box>

            </Box>

            <Box className='whatwedoContainer__title'>
                <Box className='whatwedoContainer__title__name'>
                    <Box className='bold'>What <br/> Does Avah Do ?</Box>
                    <Box className='text'>The market is expanding day by day and in order to maintain everything in line, ideas to keep them in line is a need of an hour. The automotive industry has grown so fast that there are certain sectors which have not been explored. These grey areas have led to a lot of chaos and confusion in the market. Since every customer has a right to know the status of its vehicle, it remains unaware for them.</Box>
                </Box>
                <Box className='whatwedoContainer__title__image'><img src={AvahImage}/></Box>
            </Box>
            <Box className='whatwedoContainer__scope'>
                <Box className='whatwedoContainer__scope__title'>Scope</Box>
                <Box className='whatwedoContainer__scope__content'>
                    <Box className='whatwedoContainer__scope__content__left'><img src={IntroLogo}/></Box>
                    <Box className='whatwedoContainer__scope__content__right'>
                    Machine plays a very vital role in order to run an enterprise or day to day activities in a smooth and timely manner. But in order to make them to full optimum utility, they need to be taken care of as well. Considering the factor that your vehicle is your 2nd home where you spent majority of the time at the time of travelling, it is in fact necessary that you should have an utmost confidence of what you drive.<br/><br/> Just by handling it carelessly is nothing but a gamble of life one should avoid. The owner should have a complete knowledge or whereabouts of what he drives which will give him an assurity of driving a safe car on daily basis.
                    </Box>
                </Box>
            </Box>
            <Box className='whatwedoContainer__need'>
                <Box className='whatwedoContainer__need__title'>What is the need or why the need?</Box>
                <Box className='whatwedoContainer__need__content'>
                    <Box className='whatwedoContainer__need__content__left'>
                        <Box className={`whatwedoContainer__need__content__left__iconAndText ${state==='source1'&&'selected'}`} onMouseOver ={()=>setState('source1')}>
                            <Box className='whatwedoContainer__need__content__left__iconAndText__image'><RoomPreferencesIcon/></Box>
                            <Box className='whatwedoContainer__need__content__left__iconAndText__text'>Source 1</Box>
                        </Box>
                        <Box className={`whatwedoContainer__need__content__left__iconAndText ${state==='source2'&&'selected'}`} onMouseOver ={()=>setState('source2')}>
                            <Box className='whatwedoContainer__need__content__left__iconAndText__image'><BookIcon/></Box>
                            <Box className='whatwedoContainer__need__content__left__iconAndText__text'>Source 2</Box>
                        </Box>
                        <Box className={`whatwedoContainer__need__content__left__iconAndText ${state==='source3'&&'selected'}`} onMouseOver ={()=>setState('source3')}>
                            <Box className='whatwedoContainer__need__content__left__iconAndText__image'><MinorCrashIcon/></Box>
                            <Box className='whatwedoContainer__need__content__left__iconAndText__text'>Source 3</Box>
                        </Box>
                    </Box>
                    <Box className='whatwedoContainer__need__content__right'>
                        <Box className='whatwedoContainer__need__content__right__table'>
                            {
                                state==='source1'? <StatsTable columns={columns11} rows={rows11}/>:
                                state==='source2'?<img src={Screen1}/>
                                :<img src={Screen2}/>
                            }
                           
                            
                            
                        </Box>
                    </Box>
                </Box>
                <Box className='whatwedoContainer__need__text'>
                    Talking about the accidents in India, as per the reports of Ministry of Roads and Transport, 2019, Clause 4.3 states about Accidents classified by Vehicular, where it states that Old vehicles are prone to breakdowns and are more prone to malfunction and lack of safety. Following is the table which has shown Accidents classified according to age of impacting vehicle during 2018 – 2019. 
                    <br/><br/>
                    It will be noted from the above that vehicles 10-15 yrs of age, accounted for 12.5% of accidents, vehicles over 15 years accounted for 11.0 per cent of total accidents and vehicles with age not known accounted for another 14.6% of the total accidents in 2019. Together these categories accounted for 38.1% of accidents. The last two categories i.e., vehicles more than 15 years and age not known also registered the largest increase in accidents in 2019 over 2018. Similarly, vehicles 10-15 yrs of age, accounted for 12.6% of accidents related deaths, vehicles of over 15 years accounted for 12.3 per cent of accidents related deaths and vehicles with age not known accounted for another 16.4% of the total accidents related deaths.<br/> <br/> Together these categories accounted for 41.3% of accidents related deaths. The category 15 years and above also registered the largest increase in deaths in 2019 over 2018. Keeping in view the above reference, we can say we don’t have a proper system to check the vehicle whether they are safe for roads or not and is highly dangerous for the driver, passengers and the other vehicles driving on roads as well.
                    <br/><br/>
                    Also, as per the reports of World Health Organisation (WHO), 1.3 million (Approx.) people die each year as a result of road traffic crashes where the cause of UNSAFE VEHICLES is one of the substantial factors in contributing to the road accidents. It is also said that Safe vehicles play a critical role in averting crashes and reducing the likelihood of serious injury.
                    <br/><br/>
                    Link Reference: <a target='_blank' href="https://morth.nic.in/sites/default/files/RA_Uploading.pdf">Source 1</a>
                    <br/><br/>
                    Link Reference: <a target='_blank' href="https://morth.nic.in/sites/default/files/RA_Uploading.pdf">Source 2</a>

                </Box>
            </Box>
            <Box className='whatwedoContainer__solution'>
                <Box className='whatwedoContainer__solution__left'>
                    <Box className='whatwedoContainer__solution__left__title'>Grey Areas</Box>
                    <Box className='whatwedoContainer__solution__left__content'>Since many owners of the vehicles don’t know the status of their own vehicles, it is indeed very risky to gamble a life on something you don’t know or aware about. Every owner should know and have adequate knowledge of what he/she is driving. Is it fair enough to drive something which you don’t know and consider to be an owner of it? There are many precedents where accidents happen without knowing the cause of it. Does it have to do away with the health of the vehicle? It, might be yes or no. But living in such a mentality will lead to nowhere but risking our lives in the hands of destiny and miracles. </Box>
                    <Box className='whatwedoContainer__solution__left__title'>Solution?</Box>
                    <Box className='whatwedoContainer__solution__left__content'>A platform where keeping up/maintaining the record of vehicles serviced by private workshops or local mechanics. The idea is to update all the service relating information which is needed to maintain a vehicle in an online platform which can be viewed only by the owner of the vehicle for current and future related service transactions. This platform will let the owner know each and every aspect of the vehicle. Help to keep you updated with all the related information of your vehicle in timely manner and remain a constant companion for eradicating a majority of the grey area specially in relation to the health and safety of your vehicle.</Box>

                </Box>
                <Box className='whatwedoContainer__solution__right'>
                    <img src={Solution}/>
                </Box>
            </Box>
            <Box className='whatwedoContainer__partiesCovered'>
                <Box className='whatwedoContainer__partiesCovered__title'>Parties Covered</Box>   
                <Box className='whatwedoContainer__partiesCovered__image'><img src={PartiesCovered}/></Box>   
            </Box>
            <Box className='whatwedoContainer__benefits'>
                <Box className='whatwedoContainer__benefits__title'>Benefits</Box>
                <Box className='whatwedoContainer__benefits__image'>
                    <Box className='whatwedoContainer__benefits__image__wrapper'>
                        <Box className='whatwedoContainer__benefits__image__wrapper__title'>1. Owner of vehicle</Box>
                        <img src={benefit1}/>
                    </Box>
                    <Box className='whatwedoContainer__benefits__image__wrapper'>
                        <Box className='whatwedoContainer__benefits__image__wrapper__title'>2. Authorized Service Center</Box>
                        <img src={benefit2}/>
                    </Box>
                    <Box className='whatwedoContainer__benefits__image__wrapper'>
                        <Box className='whatwedoContainer__benefits__image__wrapper__title'>3. Insurance Companies</Box>
                        <img src={benefit3}/>
                    </Box>
                    <Box className='whatwedoContainer__benefits__image__wrapper'>
                        <Box className='whatwedoContainer__benefits__image__wrapper__title'>4. Private Workshops or Local Mechanics</Box>
                        <img src={benefit4}/>
                    </Box>
                    <Box className='whatwedoContainer__benefits__image__wrapper'>
                        <Box className='whatwedoContainer__benefits__image__wrapper__title'>5. Used Car Market Dealers/ Prospective individual buyer in used Car Market</Box>
                        <img src={benefit5}/>
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}