import { Box, Card, Grid, Paper, ThemeProvider, Typography, useMediaQuery } from '@mui/material';
import ServiceProviderDashboardIconCards from 'components/spComponents/Card/SpHomeCards/ServiceProviderDashboardIconCards';
import React from 'react';
import createAppointmentIcon from 'assets/img/serviceProviderDashboard/createAppointmentIcon.png'
import createJobCardIcon from 'assets/img/serviceProviderDashboard/createJobCardIcon.png'
import workInprogressIcon from 'assets/img/serviceProviderDashboard/workInprogressIcon.png'
import createInvoiceIcon from 'assets/img/serviceProviderDashboard/createInvoiceIcon.png'
import serviceDueIcon from 'assets/img/serviceProviderDashboard/serviceDueIcon.png'
import pendingServicesIcon from 'assets/img/serviceProviderDashboard/pendingServicesIcon.png'
import totalCustomersIcon from 'assets/img/serviceProviderDashboard/totalCustomersIcon.png'
import serviceProviderHomeTheme from './theme';
import SpRevenueSingleCard from 'components/spComponents/Card/SpHomeCards/spRevenueSingleCard';
import SpRevenueSplitCard from 'components/spComponents/Card/SpHomeCards/spRevenueSplitCard';
import SpLatestActivityCard from 'components/spComponents/Card/SpHomeCards/SpLatestActivityCard';
import SpQuickPayment from 'components/spComponents/Card/SpHomeCards/SpQuickPayment';
import SpRating from 'components/spComponents/Card/SpHomeCards/SpRating';
import ApexCharts from './charts';
import {useFetch,useFetchFunction} from 'hooks/useFetch';
import CreateAppointmentDialog from 'components/spComponents/Dialog/Service/CreateAppointmentDialog';
import axios from 'axios';
import { useMobileResponsive } from 'hooks/useMobileResponsive';
const ServiceProviderHome = (props) => {
  const {data} = useFetch('https://jsonplaceholder.typicode.com/todos/1')
  const {isMobile} = useMobileResponsive()
  return (
    <>
      <ThemeProvider theme={serviceProviderHomeTheme}>
      <Box sx={{backgroundImage:"linear-gradient(to bottom, rgb(233,56,72) , rgb(119,53,98))"  }} className='total-usage'>
        {!isMobile && 
          <Box sx={{display:"flex",justifyContent:"center",color:"white",fontWeight:"700"}}>
          <Typography fontSize={"57.05px"}>WELCOME TO AVAH CAR SERVICE</Typography>
          </Box>        
        }

        <Grid  container spacing={2}>
          <Grid item xs>
          {/* <ServiceProviderDashboardIconCards img={createAppointmentIcon} DialogButton={CreateAppointmentDialog}/> */}
          <CreateAppointmentDialog color={'whiteBackground'} maxWidth={isMobile?'100px':'198px'} minHeight={isMobile?'100px':"137px"} img={createAppointmentIcon} borderRadius={'16px'} my={1.2}/>
          </Grid>
          <Grid item xs>
          {/* <CreateAppointmentDialog color={'whiteBackground'} maxWidth={isMobile?'100px':'198px'} minHeight={isMobile?'100px':"137px"} img={createAppointmentIcon} borderRadius={'16px'} my={1.2}/> */}

          <ServiceProviderDashboardIconCards maxWidth={isMobile?'100px':'198px'} minHeight={isMobile?'100px':"137px"}  img={createJobCardIcon} text={"CREATE JOB CARD"}/>
          </Grid>
          <Grid item xs>
          {/* <CreateAppointmentDialog color={'whiteBackground'} maxWidth={isMobile?'100px':'198px'} minHeight={isMobile?'100px':"137px"} img={createAppointmentIcon} borderRadius={'16px'} my={1.2}/> */}

          <ServiceProviderDashboardIconCards maxWidth={isMobile?'100px':'198px'} minHeight={isMobile?'100px':"137px"} img={workInprogressIcon} text={"WORK IN PROGRESS"}/>
          </Grid>
          <Grid item xs>
          <ServiceProviderDashboardIconCards maxWidth={isMobile?'100px':'198px'} minHeight={isMobile?'100px':"137px"} img={createInvoiceIcon} text={"CREATE INVOICE"}/>
          </Grid>
          <Grid item xs>
          <ServiceProviderDashboardIconCards maxWidth={isMobile?'100px':'198px'} minHeight={isMobile?'100px':"137px"} img={serviceDueIcon} text={"SERVICE DUE"}/>
          </Grid>
          <Grid item xs>
          <ServiceProviderDashboardIconCards maxWidth={isMobile?'100px':'198px'} minHeight={isMobile?'100px':"137px"} img={pendingServicesIcon} text={"PENDING SERVICES"}/>
          </Grid>
          <Grid item xs>
          <ServiceProviderDashboardIconCards minHeight={isMobile?'100px':"137px"} img={totalCustomersIcon} text={"TOTAL CUSTOMERS"}/>
          </Grid>
        </Grid>
      </Box>
      <Box m={3}>
        <Typography variant='h5'>REVENUE</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={8}>
                <Grid spacing={2} container>
                  <Grid xs={12} sm={12} md={6} xl={4} item><SpRevenueSingleCard/></Grid>
                  <Grid xs={12} sm={12} md={6} xl={4} item><SpRevenueSingleCard/></Grid>
                  <Grid xs={12} sm={12} md={6} xl={4} item><SpRevenueSingleCard/></Grid>
                </Grid>
                <Grid justifyContent={"center"} marginTop={2} spacing={4} container>
                  <Grid xl={8} md={12} item><SpRevenueSplitCard/></Grid>
                </Grid>
                <Card sx={{marginTop:"100px"}} ele vation={4} >
                  <ApexCharts/>
                </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Grid xs spacing={2} direction={"row"} container>
              <Grid sm={12} item><SpLatestActivityCard/></Grid>
              <Grid sm={12} item><SpQuickPayment/></Grid>
              <Grid sm={12} item><SpRating/></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>


      </ThemeProvider>

    </>

  );
};

export default ServiceProviderHome;