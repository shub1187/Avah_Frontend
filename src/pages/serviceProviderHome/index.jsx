import { Box, Card, Grid, Paper, ThemeProvider, Typography } from '@mui/material';
import ServiceProviderDashboardIconCards from 'components/Card/ServiceProviderDashboardIconCards';
import React from 'react';
import createAppointmentIcon from 'assets/img/serviceProviderDashboard/createAppointmentIcon.png'
import createJobCardIcon from 'assets/img/serviceProviderDashboard/createJobCardIcon.png'
import workInprogressIcon from 'assets/img/serviceProviderDashboard/workInprogressIcon.png'
import createInvoiceIcon from 'assets/img/serviceProviderDashboard/createInvoiceIcon.png'
import serviceDueIcon from 'assets/img/serviceProviderDashboard/serviceDueIcon.png'
import pendingServicesIcon from 'assets/img/serviceProviderDashboard/pendingServicesIcon.png'
import totalCustomersIcon from 'assets/img/serviceProviderDashboard/totalCustomersIcon.png'
import serviceProviderTheme from './theme';
import SpRevenueSingleCard from 'components/Card/spRevenueSingleCard';
import SpRevenueSplitCard from 'components/Card/spRevenueSplitCard';
import SpLatestActivityCard from 'components/Card/SpLatestActivityCard';
import SpQuickPayment from 'components/Card/SpQuickPayment';
import SpRating from 'components/Card/SpRating';
import ApexCharts from './charts';
const ServiceProviderHome = (props) => {
  return (
    <>
      <ThemeProvider theme={serviceProviderTheme}>
      <Box sx={{backgroundImage:"linear-gradient(to bottom, rgb(233,56,72) , rgb(119,53,98))"  }} className='total-usage'>
        <Box sx={{display:"flex",justifyContent:"center",color:"white",fontWeight:"700"}}>
          <Typography fontSize={"57.05px"}>WELCOME TO AVAH CAR SERVICE</Typography>
        </Box>
        <Grid  container spacing={2}>
          <Grid item xs>
          <ServiceProviderDashboardIconCards img={createAppointmentIcon} text={"CREATE APPOINTMENT"}/>
          </Grid>
          <Grid item xs>
          <ServiceProviderDashboardIconCards  img={createJobCardIcon} text={"CREATE JOB CARD"}/>
          </Grid>
          <Grid item xs>
          <ServiceProviderDashboardIconCards img={workInprogressIcon} text={"WORK IN PROGRESS"}/>
          </Grid>
          <Grid item xs>
          <ServiceProviderDashboardIconCards img={createInvoiceIcon} text={"CREATE INVOICE"}/>
          </Grid>
          <Grid item xs>
          <ServiceProviderDashboardIconCards img={serviceDueIcon} text={"SERVICE DUE"}/>
          </Grid>
          <Grid item xs>
          <ServiceProviderDashboardIconCards img={pendingServicesIcon} text={"PENDING SERVICES"}/>
          </Grid>
          <Grid item xs>
          <ServiceProviderDashboardIconCards img={totalCustomersIcon} text={"TOTAL CUSTOMERS"}/>
          </Grid>
        </Grid>
      </Box>
      <Box m={3}>
        <Typography variant='h5'>REVENUE</Typography>
        <Grid container spacing={4}>
          <Grid item xs={8}>
                <Grid spacing={2} container>
                  <Grid xl={4} md={6} item><SpRevenueSingleCard/></Grid>
                  <Grid xl={4} md={6} item><SpRevenueSingleCard/></Grid>
                  <Grid xl={4} md={6} item><SpRevenueSingleCard/></Grid>
                </Grid>
                <Grid justifyContent={"center"} marginTop={2} spacing={4} container>
                  <Grid xl={8} md={12} item><SpRevenueSplitCard/></Grid>
                </Grid>
                <Card sx={{marginTop:"100px"}} elevation={4} >
                  <ApexCharts/>
                </Card>
          </Grid>
          <Grid item xs={4}>
            <Grid spacing={2} direction={"row"} container>
              <Grid xs={12} item><SpLatestActivityCard/></Grid>
              <Grid xs={12} item><SpQuickPayment/></Grid>
              <Grid xs item><SpRating/></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>


      </ThemeProvider>

    </>

  );
};

export default ServiceProviderHome;