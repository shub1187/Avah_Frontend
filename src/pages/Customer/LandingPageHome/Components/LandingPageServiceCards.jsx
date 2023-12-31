import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { LandingPageServiceProviderProfileIcon } from 'assets/img/landingPage/icon';
const LandingPageServiceCards = () => {
  return (
    <Card sx={{ minWidth: 400,backgroundColor:'rgb(226,232,240)',borderRadius:'16px' ,textAlign:'center'}}>
        <Grid mt={1} container justifyContent={'center'} alignItems={'center'}><Avatar sx={{height:'80px',width:'80px',fontSize:25}}><LandingPageServiceProviderProfileIcon/></Avatar></Grid>
      <CardContent>
        <Grid container flexDirection={'column'} alignItems={'center'}>
            <Grid item>
                <Typography fontSize={16} fontWeight={'bold'} gutterBottom>
                    Jain Car Services 
                </Typography>
            </Grid>
            <Grid item>
                <Typography fontSize={16} fontWeight={'bold'} gutterBottom>
                    Andheri west 10124
                </Typography>                
            </Grid>
            <Grid item >
                <Typography fontSize={12}>Business Type :<Typography fontSize={12} component={'span'}>Service Provider</Typography></Typography>
                <Typography fontSize={12}>Category :<Typography fontSize={12} component={'span'}>Vehicles</Typography></Typography>
                <Typography fontSize={12}>Sub Category :<Typography fontSize={12} component={'span'}>Public</Typography></Typography>

            </Grid>
            <Grid item><Typography fontWeight={'bold'}>$150</Typography></Grid>
            <Grid item ><Button color='options'>View More <ArrowRightAltIcon/></Button></Grid>

        </Grid>
      </CardContent>
    </Card>  )
}

export default LandingPageServiceCards