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

const {getRandomSp, getEstimateDetails,getGeneralStatistics} = URL.CUSTOMER.LANDINGPAGE

const CustomerHome = () => {   
    const { city, setCity } = useCity();
    // console.log(city)
    // const {data} = useFetch('http://localhost:3008/api/customer/getAllApprovedSpCities')
    const {data:randomsp} = useFetch(getRandomSp)
    const {data:generalstats} = useFetch(getGeneralStatistics)
    // const {data:estimateData} = useFetch(getEstimateDetails)

  //   const randomsp = {
  //     "error": false,
  //     "result": {
  //         "results": [
  //             {
  //                 "business_name": "Anil Auto services",
  //                 "email": "anil@gmail.com",
  //                 "state": "Maharashtra",
  //                 "city": "Neral"
  //             },
  //             {
  //                 "business_name": "Balaji Auto services",
  //                 "email": "dhanaji@gmail.com",
  //                 "state": "Maharashtra",
  //                 "city": "Navi Mumbai"
  //             },
  //             {
  //                 "business_name": "Vivaan Auto Services",
  //                 "email": "vivaan@gmail.com",
  //                 "state": "Maharashtra",
  //                 "city": "Alandi"
  //             },
  //             {
  //                 "business_name": "Ketan Auto Mobiles",
  //                 "email": "ketan@gmail.com",
  //                 "state": "Maharashtra",
  //                 "city": "Pune"
  //             }
  //         ]
  //     }
  // }
  
    const estimateData = {
      "error": false,
      "data": {
          "results": [
              {
                  "name": "Sakshi patil",
                  "business_name": "Pranish Auto services",
                  "vehicle_number": "WB14GH1187",
                  "vehicle_type": "Personal",
                  "brand": "Opel",
                  "model": "Corsa",
                  "fuel_type": "Diesel",
                  "email": "raeesmohamed66@gmail.com",
                  "mobile_number": "77884455112",
                  "pickup_drop": "Self Drive",
                  "pickup_address": null,
                  "appointment_time": "10 AM",
                  "appointment_status": "Pending",
                  "has_customer_cancelled": false,
                  "has_sp_rejected": false,
                  "jobcard_status": "Pending",
                  "cust_cancellation_note": null,
                  "sp_rejection_note": null,
                  "is_reschedule_allowed": false,
                  "customization": "Showroom Fitted",
                  "has_sp_cancelled": false,
                  "sp_cancellation_note": null,
                  "estimate_status": "Pending",
                  "estimate_number": null,
                  "updated_at": "2024-03-17T08:46:08.846Z",
                  "appointment_date": "2024-03-20",
                  "advisor_assigned": "No",
                  "estimate_approval_or_rejection_date": null,
                  "estimate_rejection_note": null,
                  "estimate_created_by": null,
                  "jobcard_number": null,
                  "jobcard_created_by": null,
                  "jobcard_opened_on": null,
                  "complaints": "",
                  "kilometers_driven": "1",
                  "estimate_created_on": null,
                  "advisor_name": null,
                  "technician_name": null,
                  "invoice_number": null,
                  "payment_status": null,
                  "payment_method": null,
                  "service_completed_on": null,
                  "invoice_amount": null,
                  "invoice_collected_by": null,
                  "invoice_created_by": null,
                  "invoice_collected_on": null,
                  "sp_name": "Pranish Auto services",
                  "sp_address": "Sector-77, Daruj",
                  "sp_email": "pranish@gmail.com",
                  "sp_contact": "7788994455"
              },
              {
                "sp_name": "Tejas Auto services",
                "vehicle_number": "SDGFE33GWS",
                "appointment_status": "created",
              },
              {
                "sp_name": "Pravin Auto services",
                "vehicle_number": "TSFH32434",
                "appointment_status": "Pending",
              },
              {
                "sp_name": "Prssavin Auto services",
                "vehicle_number": "25374SFSD",
                "appointment_status": "Completed",
              },
              {
                "sp_name": "Vela Auto services",
                "vehicle_number": "FDSAF6",
                "appointment_status": "Created",
              },
              {
                "sp_name": "Baba Auto services",
                "vehicle_number": "AFAZGFG",
                "appointment_status": "Created",
              },
              {
                "sp_name": "Yoga Auto services",
                "vehicle_number": "XFDSFD",
                "appointment_status": "Created",
              },
              {
                "sp_name": "Yu Hao Auto services",
                "vehicle_number": "LFDSAF23",
                "appointment_status": "Created",
              }
          ]
        }
      }
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
    <Box >
        <Grid alignItems={'center'} justifyContent={'space-between'} container >
            <Grid item><LandingPageLogo/></Grid>
            <Grid item>
                <Grid container spacing={2}>
                    {/* <Grid item mt={1}>Home</Grid>
                    <Grid item mt={1}>Services</Grid>
                    <Grid item mt={1}>Providers</Grid> */}
                    {/* <Grid item><Button sx={{fontSize:10,minHeight:35}} variant='contained' color='darkerpink'>My Location</Button></Grid> */}
                    {/* <Grid item><CreateAutoCompleteTextfield  options = {data?.result} label={'Select City'} onSelect={handleSelectCity}/></Grid> */}
                    {/* <Grid item><Button sx={{fontSize:10,minHeight:35}}variant='contained' color='darkerpink'>Select City</Button></Grid> */}
                    {!localStorage.getItem('TYPE_OF_USER')?
                      <Grid item mr={2}><Link to={'/login'}><Button sx={{fontSize:10,minHeight:35}} variant='contained' color="darkerpink">Login</Button></Link></Grid>
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