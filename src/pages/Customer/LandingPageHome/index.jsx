import { Box, Button, Grid } from '@mui/material'
import { LandingPageDealersIcon, LandingPageFirstImage, LandingPageLogo, LandingPageSecondBigIcon, LandingPageServiceProviderIcon, LandingPageTotaCustomersIcon, LandingPageTotalVehicleIcon } from 'assets/img/landingPage/icon'
import LandingPageLatestActivity from 'pages/Customer/LandingPageHome/Components/LandingPageLatestActivity'
import LandingPageServiceCards from 'pages/Customer/LandingPageHome/Components/LandingPageServiceCards'
import LandingPageServiceStatusCards from 'pages/Customer/LandingPageHome/Components/LandingPageServiceStatusCards'
import CreateAutoCompleteTextfield from 'components/common/Textfield/AutoCompleteTextfield'
import { useCity } from 'hooks/useCustomContext'
import { useFetch } from 'hooks/useFetch'
import React, { useState } from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import {Link} from 'react-router-dom'
import './index.scss'
import URL from 'url/apiURL'
import { useMobileResponsive } from 'hooks/useMobileResponsive'
import LogoImage from "assets/img/logo.png"
const {getRandomSp, getEstimateDetails,getGeneralStatistics} = URL.CUSTOMER.LANDINGPAGE

const CustomerHome = () => {   
    const { city, setCity } = useCity();
    const {data:randomsp} = useFetch(getRandomSp)
    const {data:generalstats} = useFetch(getGeneralStatistics)
    const {isMobile} = useMobileResponsive()
    const handleSelectCity = (selectedValue) => {
        setCity(selectedValue);
      };
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      }; 
  return (
    <Box className='landingPage'>
        <Grid alignItems={'center'} justifyContent={'space-between'} container >
            <Grid item><LandingPageLogo/></Grid>
            { !isMobile && (
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
            )}
            <Grid item>
                <Grid container spacing={2}>
                    {/* <Grid item mt={1}>Home</Grid>
                    <Grid item mt={1}>Services</Grid>
                    <Grid item mt={1}>Providers</Grid> */}
                    {/* <Grid item><Button sx={{fontSize:10,minHeight:35}} variant='contained' color='darkerpink'>My Location</Button></Grid> */}
                    {/* <Grid item><CreateAutoCompleteTextfield  options = {data?.result} label={'Select City'} onSelect={handleSelectCity}/></Grid> */}
                    {/* <Grid item><Button sx={{fontSize:10,minHeight:35}}variant='contained' color='darkerpink'>Select City</Button></Grid> */}
                    {!localStorage.getItem('TYPE_OF_USER')?
                      <Grid item mr={2}><Link to={'/login'}><Button sx={{fontSize:10,minHeight:35}} variant='contained' color="darkerpink">Login / Signup</Button></Link></Grid>
                      :
                      <Grid item mr={2}><Link to={'/customer/dashboard'}><Button sx={{fontSize:10,minHeight:35}} variant='contained' color="darkerpink">Dashboard</Button></Link></Grid>
                    } 
                    {/* <Grid item mr={2}><Link to={'/customer/dashboard'}><Button sx={{fontSize:10,minHeight:35}} variant='contained' color="darkerpink">Login</Button></Link></Grid> */}
                </Grid>
            </Grid>
        </Grid>
        <Grid container ><LandingPageFirstImage/></Grid>
        {/* <Grid sx={{position:'relative'}}>
            <Grid justifyContent={'center'} container spacing={0.5} style={{position:'absolute',bottom:'-20px',zIndex:'999'}}>
                <Grid item><Button size='large' variant='contained' color='greyButton'>Service Center/ Dealers</Button></Grid>
                <Grid item><Button size='large' variant='contained' color='greyButton'>Ratings</Button></Grid>
                <Grid item><Button size='large' variant='contained' color='greyButton'>Pricing</Button></Grid>
                <Grid item><Button size='large'variant='contained' color='greyButton'>Category</Button></Grid>
                <Grid item><Button size='large'variant='contained' color='greyButton'>Sub Category</Button></Grid>
                <Grid item><Button size='large' variant='contained' color='options'>Search</Button></Grid>
            </Grid>
        </Grid> */}

        <Grid container justifyContent={'center'} spacing={2} mt={2}>
          {randomsp?.result?.results?.map((card,index)=>{
            if(index >=3) return null
            return (<><Grid item><LandingPageServiceCards data={card}/></Grid></>)
          }
          )}
            
            {/* <Grid item><LandingPageServiceCards/></Grid>
            <Grid item><LandingPageServiceCards/></Grid> */}
        </Grid>
        {/* <Grid container justifyContent={'center'} my={3}>
           <Grid item fontSize={20} fontWeight={'bold'}>VIEW ALL</Grid>
        </Grid> */}
        <Grid mt={2} container sx={{backgroundColor:'#000000'}} >
            <Grid my={4} xs container flexDirection={'column'} alignItems={'center'} sx={{borderRight:'1px solid white'}}><Grid item><LandingPageDealersIcon/></Grid><Grid sx={{color:'white',fontSize:30,textAlign:'center'}} item>Total Vehicles</Grid><Grid sx={{color:'white',fontSize:30}} item>{generalstats?.result?.getAllVehiclesCount || '15000+' }</Grid></Grid>
            <Grid my={4} xs container flexDirection={'column'} alignItems={'center'} sx={{borderRight:'1px solid white'}}><Grid item><LandingPageTotaCustomersIcon/></Grid><Grid sx={{color:'white',fontSize:30,textAlign:'center'}} item>Total Customers</Grid><Grid sx={{color:'white',fontSize:30}} item>{generalstats?.result?.customerCount || '26250+'}</Grid></Grid>
            <Grid my={4} xs container flexDirection={'column'} alignItems={'center'} sx={{borderRight:'1px solid white'}}><Grid item><LandingPageServiceProviderIcon/></Grid><Grid sx={{color:'white',fontSize:30,textAlign:'center'}} item>Service Providers</Grid><Grid sx={{color:'white',fontSize:30}} item>{generalstats?.result?.approvedServiceProviderCount || '14132+'}</Grid></Grid>
            {/* <Grid my={4} xs container flexDirection={'column'} alignItems={'center'}><Grid item><LandingPageDealersIcon/></Grid><Grid sx={{color:'white',fontSize:30}} item>Dealers</Grid><Grid sx={{color:'white',fontSize:30,textAlign:'center'}} item>20132</Grid></Grid> */}
        </Grid>
        <Grid display={'flex'} flexDirection={'column'} width={'80%'} margin={'auto'} my={3}>
          {/* {estimateData?.data?.results?.length ? 
            <Carousel responsive={responsive}>
              {estimateData?.data?.results?.map((detail,index)=>(<LandingPageServiceStatusCards data={detail}/>))}
            </Carousel>

          :
            <Carousel responsive={responsive}>
              {estimateData?.data?.results?.map((detail,index)=>(<LandingPageServiceStatusCards empty/>))}
            </Carousel>          
          } */}
        </Grid>
        <Grid container><LandingPageSecondBigIcon/></Grid>
        {/* <Grid container my={2}><LandingPageLatestActivity/></Grid> */}
    </Box>
  )
}

export default CustomerHome