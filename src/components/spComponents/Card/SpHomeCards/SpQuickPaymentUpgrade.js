import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import { useMobileResponsive } from 'hooks/useMobileResponsive';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function SpQuickPaymentUpgrade({text}) {
  const {isMobile} = useMobileResponsive()

  return (
    <Card elevation={4} sx={{display:"flex",maxWidth: isMobile?"100%":"170.12px",minHeight:"73px" ,borderRadius:"16px"}}>
    <CardContent >
        <Box mb={1} sx={{justifyContent:"space-between"}} display={"flex"}>
            <Typography sx={{marginRight:"8px"}} color={"rgb(119,53,98)"} fontWeight={"600"} fontSize={"10px"}>Professional</Typography>
            <Typography fontSize={"10px"} fontWeight={"600"}>$48/Month</Typography>
        </Box>
        <Button sx={{fontSize:"7px",backgroundImage:"linear-gradient(to bottom, rgb(233,56,72) , rgb(119,53,98))",color:"white",fontWeight:"600",marginRight:"8px"}}>UPGRADE</Button><Box sx={{fontColor:"grey",fontSize:"7px"}} component={"span"}>Learn More</Box>
    </CardContent>

  </Card>

  );
}