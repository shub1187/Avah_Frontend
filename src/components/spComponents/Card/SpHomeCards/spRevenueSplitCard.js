import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Paper } from '@mui/material';
import {Divider} from '@mui/material';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function SpRevenueSplitCard({text}) {
  return (
        <Card elevation={4} sx={{maxWidth: "701px",minHeight:"203.55px" ,borderRadius:"19px"}}>
        <CardContent>
            <Grid justifyContent={"space-between"} container m={2}>
                <Grid item xs={11} sm={11} md={11} lg={6} xl={6} >
                    <Grid item><Typography fontSize={"21.68px"} fontWeight={"700"} sx={{textDecoration:"underline"}}>RECENT SERVICE ORDERS</Typography></Grid>
                    <Grid item><Typography marginLeft={4} color={"rgb(173,73,112)"}  fontWeight={"700"} fontSize={"60.22px"}>20,132</Typography></Grid>
                </Grid>
                <Grid item borderRight={"1px solid grey"}  ></Grid>
                <Grid xs={11} sm={11} item md={11} lg={5} xl={5}>
                    <Typography  fontSize={"21.68px"} fontWeight={"700"} sx={{textDecoration:"underline"}}>PENDING QUERIES</Typography>
                    <Typography marginLeft={4} color={"rgb(173,73,112)"} fontWeight={"700"} fontSize={"60.22px"}>2124</Typography>
                </Grid>
            </Grid>
            {/* <Typography marginRight={"1px solid red"} fontWeight={"700"} fontSize={"14px"} component="div">
                    efefefefefef        
                    rioshaabbaaba
            </Typography>
            <Divider style={{width:'50%',height:"100%"}} />

            <Typography fontWeight={"700"} fontSize={"14px"} component="div">
                    efefefefefef        
                    sdsdsdsdsdsdsd
            </Typography> */}
        </CardContent>
        </Card>
  );
}