import { Box, Button, Grid } from '@mui/material'
import { LandingPageDealersIcon, LandingPageFirstImage, LandingPageLogo, LandingPageSecondBigIcon, LandingPageServiceProviderIcon, LandingPageTotaCustomersIcon, LandingPageTotalVehicleIcon } from 'assets/img/landingPage/icon'
import LandingPageLatestActivity from 'components/LandingPageComponents/Cards/LandingPageLatestActivity'
import LandingPageServiceCards from 'components/LandingPageComponents/Cards/LandingPageServiceCards'
import LandingPageServiceStatusCards from 'components/LandingPageComponents/Cards/LandingPageServiceStatusCards'
import CreateAutoCompleteTextfield from 'components/common/Textfield/AutoCompleteTextfield'
import { useCity } from 'hooks/useCustomContext'
import { useFetch } from 'hooks/useFetch'
import React, { useState } from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import {Link} from 'react-router-dom'

const CustomerHome = () => {   
    // const [city, setCity] = useState('');
    const { city, setCity } = useCity();
    const {data} = useFetch('http://localhost:3008/api/customer/getAllCities')
    data.map((data)=>({'label':data}))
    const handleSelectCity = (selectedValue) => {
        const selectedCity = selectedValue ? selectedValue.label : ""; // Extract the string value
        setCity(selectedCity);
      };
    console.log(city)
    console.log(data)
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
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
    <Box >
        <Grid alignItems={'center'} justifyContent={'space-between'} container >
            <Grid item><LandingPageLogo/></Grid>
            <Grid item>
                <Grid container spacing={2}>
                    {/* <Grid item mt={1}>Home</Grid>
                    <Grid item mt={1}>Services</Grid>
                    <Grid item mt={1}>Providers</Grid> */}
                    <Grid item><Button sx={{fontSize:10,minHeight:35}} variant='contained' color='darkerpink'>My Location</Button></Grid>
                    <Grid item><CreateAutoCompleteTextfield options = {data} label={'Select City'} onSelect={handleSelectCity}/></Grid>
                    {/* <Grid item><Button sx={{fontSize:10,minHeight:35}}variant='contained' color='darkerpink'>Select City</Button></Grid> */}
                    <Grid item mr={2}><Link to={'/customer/dashboard'}><Button sx={{fontSize:10,minHeight:35}} variant='contained' color="darkerpink">Dashboard</Button></Link></Grid>

                </Grid>
            </Grid>
        </Grid>
        <Grid container ><LandingPageFirstImage/></Grid>
        <Grid sx={{position:'relative'}}>
            <Grid justifyContent={'center'} container spacing={0.5} style={{position:'absolute',bottom:'-20px',zIndex:'999'}}>
                <Grid item><Button size='large' variant='contained' color='greyButton'>Service Center/ Dealers</Button></Grid>
                <Grid item><Button size='large' variant='contained' color='greyButton'>Ratings</Button></Grid>
                <Grid item><Button size='large' variant='contained' color='greyButton'>Pricing</Button></Grid>
                <Grid item><Button size='large'variant='contained' color='greyButton'>Category</Button></Grid>
                <Grid item><Button size='large'variant='contained' color='greyButton'>Sub Category</Button></Grid>
                <Grid item><Button size='large' variant='contained' color='options'>Search</Button></Grid>
            </Grid>
        </Grid>

        <Grid container justifyContent={'center'} spacing={2} mt={2}>
            <Grid item><LandingPageServiceCards/></Grid>
            <Grid item><LandingPageServiceCards/></Grid>
            <Grid item><LandingPageServiceCards/></Grid>
        </Grid>
        <Grid container justifyContent={'center'} my={3}>
           <Grid item fontSize={20} fontWeight={'bold'}>VIEW ALL</Grid>
        </Grid>
        <Grid container sx={{backgroundColor:'black'}} >
            <Grid my={4} xs container flexDirection={'column'} alignItems={'center'} sx={{borderRight:'1px solid white'}}><Grid item><LandingPageTotalVehicleIcon/></Grid><Grid sx={{color:'white',fontSize:30,textAlign:'center'}} item>Total Vehicles</Grid><Grid sx={{color:'white',fontSize:30}} item>15000</Grid></Grid>
            <Grid my={4} xs container flexDirection={'column'} alignItems={'center'} sx={{borderRight:'1px solid white'}}><Grid item><LandingPageTotaCustomersIcon/></Grid><Grid sx={{color:'white',fontSize:30,textAlign:'center'}} item>Total Customers</Grid><Grid sx={{color:'white',fontSize:30}} item>26250</Grid></Grid>
            <Grid my={4} xs container flexDirection={'column'} alignItems={'center'} sx={{borderRight:'1px solid white'}}><Grid item><LandingPageServiceProviderIcon/></Grid><Grid sx={{color:'white',fontSize:30,textAlign:'center'}} item>Service Providers</Grid><Grid sx={{color:'white',fontSize:30}} item>14132</Grid></Grid>
            <Grid my={4} xs container flexDirection={'column'} alignItems={'center'}><Grid item><LandingPageDealersIcon/></Grid><Grid sx={{color:'white',fontSize:30}} item>Dealers</Grid><Grid sx={{color:'white',fontSize:30,textAlign:'center'}} item>20132</Grid></Grid>
        </Grid>
        <Grid display={'flex'} flexDirection={'column'} width={'80%'} margin={'auto'} my={3}>
            <Carousel responsive={responsive}>
                {Array.from({length:5},(_,index)=>(
                    <LandingPageServiceStatusCards/>
                ))}
            </Carousel>
        </Grid>
        <Grid container><LandingPageSecondBigIcon/></Grid>
        {/* <Grid container my={2}><LandingPageLatestActivity/></Grid> */}
    </Box>
  )
}

export default CustomerHome