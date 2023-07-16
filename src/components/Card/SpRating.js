import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, Paper } from '@mui/material';
import spRatingMessage1 from 'assets/img/serviceProviderDashboard/RatingsIcon/spRatingMessage1.png'
import spRatingMessage2 from 'assets/img/serviceProviderDashboard/RatingsIcon/spRatingMessage2.png'
import spRatingStars from 'assets/img/serviceProviderDashboard/RatingsIcon/spRatingStars.png'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function SpRating({text}) {
  return (
    <Card elevation={4} sx={{maxWidth: "407px",minHeight:"120px" ,borderRadius:"19px"}}>
    <CardContent>
        <Grid container m={2}>
            <Grid item lg={5} >
                <Grid item><Typography fontSize={"8.83px"} fontWeight={"700"} sx={{textDecoration:"underline"}}>ALL TIME RATING</Typography></Grid>
                <Grid item  sx={{display:"flex",justifyContent:"space-between"}}>
                    <Typography  color={"rgb(173,73,112)"}  fontWeight={"700"} fontSize={"60.22px"}>
                        <img src={spRatingMessage1} alt="Card Image" />
                    </Typography>
                    <Box>
                        <img src={spRatingStars} alt="Card Image" />
                        <Typography fontWeight={"700"} fontSize={"25.8px"} color={"#AD4970"}>4.5 / 5</Typography>
                        <Typography fontWeight={"500"} fontSize={"9.97px"}>Good Rating</Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid item borderRight={"1px solid grey"} marginRight={4} marginLeft={1}></Grid>
            <Grid item lg={5}>
                <Grid item><Typography  fontSize={"8.83px"} fontWeight={"700"}sx={{textDecoration:"underline"}}>ALL TIME REVIEWS</Typography></Grid>
                <Grid item sx={{display:"flex",justifyContent:"space-between"}}>
                    <Typography color={"rgb(173,73,112)"} fontWeight={"700"} fontSize={"60.22px"}><img src={spRatingMessage2} alt="Card Image" /></Typography>
                    <Box>
                        <img src={spRatingStars} alt="Card Image" />
                        <Typography fontWeight={"700"} fontSize={"25.8px"} color={"#AD4970"}>2124</Typography>
                        <Typography fontWeight={"500"} fontSize={"9.97px"}>Total Reviews</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    </CardContent>
    </Card>

  );
}