import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Paper, ThemeProvider } from '@mui/material';
import SpContinueToPaymentButtonTheme from 'components/Button/SpContinueToPaymentButtonTheme';
import SpQuickPaymentCard1 from "assets/img/serviceProviderDashboard/QuickPaymentIcon/spQuickPaymentMasterCard1.png"
import SpQuickPaymentCard2 from "assets/img/serviceProviderDashboard/QuickPaymentIcon/spQuickPaymentMasterCard2.png"
import SpQuickPaymentCancelSubscription from './SpQuickPaymentCancelSubscription';
import SpQuickPaymentUpgrade from './SpQuickPaymentUpgrade';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function SpQuickPayment({text}) {
  return (
      <Card sx={{backgroundColor:"#F4F8F9",display:"flex",maxWidth: "408px",minHeight:"397px" ,borderRadius:"16px"}}>
        <CardContent>
          {/* <Box sx={{display:"flex",flexDirection:"column",marginRight:4}}> */}
            {/* <Typography  fontWeight={"700"} fontSize={"14px"} component="div">
              INR ₹
            </Typography>
            <Typography fontWeight={"700"} fontSize={"14px"} component="div">
              Today
            </Typography>
          </Box>
          <Box>
          <Typography fontWeight={"700"} fontSize={"45.55px"} component="div">
            26,250
          </Typography> */}
          {/* </Box> */}
          <Box m={1}>
          <Typography variant='h5'>QUICK PAYMENT</Typography>
          <Grid spacing={0.5} container>
            <Grid md={12} lg={6} xl ={6} item><SpQuickPaymentCancelSubscription/></Grid>
            <Grid md={12} lg={6} xl ={6} item><SpQuickPaymentUpgrade/></Grid>
          </Grid>
          <Typography mt={1} fontWeight={"700"} variant='h6'>PAYMENT METHOD</Typography>
          <Grid spacing={1} container>
            <Grid md={12} lg={6} xl ={6} item width={"100%"}><img style={{maxWidth:"100%"}} src={SpQuickPaymentCard1} alt="Card Image" /></Grid>
            <Grid md={12} lg={5.9} xl={6} item width={"100%"}><img  style={{maxWidth:"100%"}} src={SpQuickPaymentCard2} alt="Card Image" /></Grid>
          </Grid>
          <Box mt={1} mb={1} display={"flex"} justifyContent={"center"}>
            <Typography fontSize={"20px"} fontWeight={"700"} color={"rgb(173,73,112)"}>$2000 TOTAL</Typography>
          </Box>
          <Box sx={{maxWidth:"100%"}}>
            <ThemeProvider theme ={SpContinueToPaymentButtonTheme}>
                <Button sx={{maxWidth:"100%"}}>CONTINUE FOR PAYMENT</Button>
            </ThemeProvider>
          </Box>
        </Box>
        </CardContent>

      </Card>

  );
}