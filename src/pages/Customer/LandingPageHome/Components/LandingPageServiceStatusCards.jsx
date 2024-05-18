import { Avatar, Button, Card, CardContent, Grid, Typography } from '@mui/material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import React from 'react'
import { LandingPageCardsServiceIcon } from 'assets/img/landingPage/icon';

const LandingPageServiceStatusCards = ({empty, data}) => {
    return (
        <Card sx={{ minWidth: 250,maxWidth:250, backgroundColor: 'rgb(226,232,240)', borderRadius: '16px', textAlign: 'center' }}>
            <Grid mt={1} container justifyContent={'center'} alignItems={'center'}><Avatar sx={{ height: '80px', width: '80px', fontSize: 25 }}><LandingPageCardsServiceIcon/></Avatar></Grid>
            <CardContent>
                <Grid container flexDirection={'column'} alignItems={'center'}>
                    <Grid item>
                        <Typography fontSize={25} fontWeight={'bold'} gutterBottom>
                            Welcome
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography fontSize={20} fontWeight={'bold'} color='#ad4970' gutterBottom>
                            {empty ? 'BOOK AN APPOINTMENT' :  data?.sp_name || "N/sA"}
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Typography fontWeight={'bold'}fontSize={16} >Vehicle Number :<Typography fontWeight={'bold'}  fontSize={16}color={'#858585'} >{!empty && data?.vehicle_number || 'N/A'}</Typography></Typography>
                        <Typography fontWeight={'bold'}fontSize={16} >Appointment Status :<Typography fontWeight={'bold'}  fontSize={16} color={'#858585'}>{!empty && data?.appointment_status || 'N/A'}</Typography></Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
  )
}

export default LandingPageServiceStatusCards