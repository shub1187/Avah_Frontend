import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { LandingPageServiceProviderProfileIcon } from 'assets/img/landingPage/icon';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const LandingPageServiceCards = ({data}) => {
  return (
    <Card sx={{ minWidth: 400,backgroundColor:'rgb(226,232,240)',borderRadius:'16px' ,textAlign:'center'}}>
        <Grid mt={1} container justifyContent={'center'} alignItems={'center'}><AccountCircleIcon className='profile-image'/></Grid>
      <CardContent>
        <Grid container flexDirection={'column'} alignItems={'center'}>
            <Grid item>
                <Typography fontSize={16} fontWeight={'bold'} gutterBottom>
                    {data?.business_name}
                    {/* Andheri west 10124 */}
                </Typography>                
            </Grid>
            <Grid item >
                <Typography fontSize={12}>Contact : <Typography fontSize={12} component={'span'}>{data?.business_name || 'N/A'}</Typography></Typography>
                <Typography fontSize={12}>Email : <Typography fontSize={12} component={'span'}>{data?.email || 'N/A'}</Typography></Typography>
                <Typography fontSize={12}>State : <Typography fontSize={12} component={'span'}>{data?.state || 'N/A'}</Typography></Typography>
                <Typography fontSize={12}>City : <Typography fontSize={12} component={'span'}>{data?.city || 'N/A'}</Typography></Typography>
            </Grid>
            {/* <Grid item><Typography fontWeight={'bold'}>$150</Typography></Grid> */}
            {/* <Grid item ><Button dis color='options'>View More <ArrowRightAltIcon/></Button></Grid> */}

        </Grid>
      </CardContent>
    </Card>  )
}

export default LandingPageServiceCards