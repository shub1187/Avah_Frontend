import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, Chip, Grid, Paper } from '@mui/material';
import happyIcon from 'assets/img/serviceProviderDashboard/ActivityIcons/happyIcon.png'
import messageIcon from 'assets/img/serviceProviderDashboard/ActivityIcons/messageIcon.png'
import calenderIcon from 'assets/img/serviceProviderDashboard/ActivityIcons/calenderIcon.png'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function SpLatestActivityCard({text}) {
  return (
      <Card sx={{backgroundColor:"#F4F8F9",display:"flex",maxWidth: "408px",minHeight:"308px" ,borderRadius:"16px"}}>
        <CardContent >
          {/* <Box sx={{display:"flex",flexDirection:"column",marginRight:4}}>
            <Typography  fontWeight={"700"} fontSize={"14px"} component="div">
              INR ₹
            </Typography>
            <Typography fontWeight={"700"} fontSize={"14px"} component="div">
              Today
            </Typography>
          </Box>
          <Box>
          <Typography fontWeight={"700"} fontSize={"45.55px"} component="div">
            26,250
          </Typography>
          </Box> */}
        <Box m={2}>
          <Typography variant='h5'>LATEST ACTIVITY</Typography>
            <Grid m={1} spacing={1} direction={"column"} container>
                <Grid display={"flex"} item>
                    <Chip   sx={{backgroundColor:'rgb(252,170,106)',marginRight:1}} avatar={<Avatar alt='Chip Avatar' src={happyIcon} />}/>
                    <Box>
                        <Typography>Amit Sharma created new order</Typography>
                        <Typography color="rgb(171,172,172)">10 min ago</Typography>
                    </Box>
                </Grid> 
                <Grid display={"flex"} item>
                    <Chip sx={{backgroundColor:'rgb(184,81,102)',marginRight:1}} avatar={<Avatar alt='Chip Avatar' src={messageIcon} />}/>
                    <Box>
                        <Typography>Responded to need <Typography component={"span"} color={"rgb(186,106,137)"}>“Kind Opportunity“</Typography></Typography>
                        <Typography color="rgb(171,172,172)">10 min ago</Typography>
                    </Box>
                </Grid> 
                <Grid display={"flex"} item>
                    <Chip sx={{backgroundColor:'rgb(134,137,116)',marginRight:1}} avatar={<Avatar alt='Chip Avatar' src={calenderIcon} />}/>
                    <Box>
                        <Typography>Attending the event <Typography component={"span"} color={"rgb(186,106,137)"}>“Exhibition Events“</Typography></Typography>
                        <Typography color={"rgb(171,172,172)"}>10 min ago</Typography>
                    </Box>
                </Grid> 

            </Grid>
        </Box>
        </CardContent>

      </Card>

  );
}