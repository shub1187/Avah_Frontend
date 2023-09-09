import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CreateAppointmentDialog from 'components/spComponents/Dialog/Service/CreateAppointmentDialog';
import { ThemeProvider, createTheme } from '@mui/material';
import { useMobileResponsive } from 'hooks/useMobileResponsive';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function ServiceProviderDashboardIconCards({text, img, DialogButton,maxWidth,minHeight}) {
  const {isMobile} = useMobileResponsive()

  return (
    <Card xs sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",maxWidth: maxWidth,minHeight:minHeight ,borderRadius:"16px"}}>
      <Box sx={{marginTop:4}} >
        {img && <img src={img} alt="Card Image" />}
      </Box>
      <CardContent sx={{display:"flex", justifyContent:"center",alignItems:'center',textAlign:'center'}}>
        <Typography fontWeight={"700"} fontSize={isMobile?8:"14px"} component="div">
            {text}
        </Typography>
    <>
        {DialogButton && <DialogButton color='whiteBackground' width='198px' height="137px"/>}   
        </>     
       </CardContent>

     </Card>
  );
}