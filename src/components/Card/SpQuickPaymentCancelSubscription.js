import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function SpQuickPaymentCancelSubscription({text}) {
  return (
      <Card elevation={4} sx={{display:"flex",maxWidth: "170.12px",minHeight:"73px" ,borderRadius:"16px"}}>
        <CardContent sx={{width:"100%"}}>
            <Box sx={{justifyContent:"flex-end"}} display={"flex"}>
                <Typography mb={1}  fontSize={"10px"} fontWeight={"600"}>$10/Month</Typography>
            </Box>
            <Button sx={{fontSize:"7px",backgroundImage:"linear-gradient(to bottom, rgb(233,56,72) , rgb(119,53,98))",color:"white",fontWeight:"600"}}>Cancel Subscription</Button>
        </CardContent>

      </Card>

  );
}