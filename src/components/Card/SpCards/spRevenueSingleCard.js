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

export default function SpRevenueSingleCard({text}) {
  return (
      <Card elevation={4} sx={{display:"flex",maxWidth: "331px",minHeight:"157px" ,borderRadius:"16px"}}>
        <CardContent sx={{display:"flex",alignItems:"center"}}>
          <Box sx={{display:"flex",flexDirection:"column",marginRight:4}}>
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
          </Box>

        </CardContent>

      </Card>

  );
}