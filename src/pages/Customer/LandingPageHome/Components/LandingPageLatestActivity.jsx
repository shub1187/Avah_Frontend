import { Avatar, Box, Grid, Typography } from '@mui/material'
import { LandingPageCardsServiceIcon } from 'assets/img/landingPage/icon'
import React from 'react'

const LandingPageLatestActivity = () => {
  return (
    // <Box ml={6} xs>
    <>
        <Typography color={'#ad4970'} fontSize={40} ml={4} fontWeight={'bold'}>Latest Activity</Typography>
        <Grid container spacing={3} my={1} justifyContent={'space-between'} mr={4} ml={4}>
            <Grid item><Avatar sx={{height:'80px',width:'80px',fontSize:25}}><LandingPageCardsServiceIcon/></Avatar></Grid>
            <Grid item><Grid container flexDirection={'column'}><Grid item fontSize={30} fontWeight={'500'}>Jain Car Service</Grid><Grid item color={'#a0a0a0'}>Avenue road 75th street</Grid></Grid></Grid>
            <Grid item><Grid container flexDirection={'column'}><Grid item fontSize={30} fontWeight={'500'}>Vehicle</Grid><Grid item color={'#a0a0a0'}>Category</Grid></Grid></Grid>
            <Grid item><Grid container flexDirection={'column'}><Grid item fontSize={30} fontWeight={'500'}>Public</Grid><Grid item color={'#a0a0a0'}>Sub Category</Grid></Grid></Grid>
            <Grid item><Grid container flexDirection={'column'}><Grid item fontSize={30} fontWeight={'500'}>250</Grid><Grid item color={'#a0a0a0'}>Order</Grid></Grid></Grid>
            <Grid item><Grid container flexDirection={'column'}><Grid item fontSize={30} fontWeight={'500'}>07-02-2023</Grid><Grid item color={'#a0a0a0'}>Last Updated</Grid></Grid></Grid>
        </Grid>
        <Grid container spacing={3} my={1} justifyContent={'space-between'} mr={4} ml={4}>
            <Grid item><Avatar sx={{height:'80px',width:'80px',fontSize:25}}><LandingPageCardsServiceIcon/></Avatar></Grid>
            <Grid item><Grid container flexDirection={'column'}><Grid item fontSize={30} fontWeight={'500'}>Jain Car Service</Grid><Grid item color={'#a0a0a0'}>Avenue road 75th street</Grid></Grid></Grid>
            <Grid item><Grid container flexDirection={'column'}><Grid item fontSize={30} fontWeight={'500'}>Vehicle</Grid><Grid item color={'#a0a0a0'}>Category</Grid></Grid></Grid>
            <Grid item><Grid container flexDirection={'column'}><Grid item fontSize={30} fontWeight={'500'}>Public</Grid><Grid item color={'#a0a0a0'}>Sub Category</Grid></Grid></Grid>
            <Grid item><Grid container flexDirection={'column'}><Grid item fontSize={30} fontWeight={'500'}>250</Grid><Grid item color={'#a0a0a0'}>Order</Grid></Grid></Grid>
            <Grid item><Grid container flexDirection={'column'}><Grid item fontSize={30} fontWeight={'500'}>07-02-2023</Grid><Grid item color={'#a0a0a0'}>Last Updated</Grid></Grid></Grid>
        </Grid>
        <Grid container justifyContent={'center'}><Typography color={'#ad4970'} fontSize={25} fontWeight={'bold'}>View All</Typography><Grid item></Grid></Grid>
    </>
    // </Box>
  )
}

export default LandingPageLatestActivity