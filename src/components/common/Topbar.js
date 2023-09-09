import { AppBar, Box, Toolbar, Typography,IconButton, useMediaQuery, Grid } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import { imageCongis } from "../../configs/imageConfigs";
import { LogoutAction } from "../../pages/login/LoginAction";
import { TopBarHomeNotificationIcon, TopBarSettingsIcon, TopBarUserIcon } from "assets/img/TopBar/icons";
import MenuIcon from '@mui/icons-material/Menu';




const Topbar = ({isMobile,handleDrawerToggle,customer}) => {
  const { appState } = useSelector((state) => state.appState);
  const dispatch=useDispatch()
 console.log(customer)
  let appbar = appState.appState == "home" ? "app-bar2" : "app-bar1"
  return (
    <AppBar
      sx={{
        width:(isMobile || customer) ? "100%":`calc(100% - ${sizeConfigs.sidebar.width})`,

      }}
    >


      <div className={appbar}>
        <Grid height={'100%'} alignItems={'center'} container justifyContent={'space-between'}>
          <Grid  ml={2} item>
          {(isMobile || customer) && (
                // <Box component={'span'}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ display: { sm: 'block', md: customer ?'block':'none' } }}  // Show only on mobile
                >
                  <MenuIcon />
                </IconButton>
                // </Box>
              )}
          </Grid>
          <Grid item>
            <Grid container spacing={2}>
              <Grid item><TopBarSettingsIcon/></Grid>
              <Grid item><TopBarHomeNotificationIcon/></Grid>
              <Grid item><TopBarUserIcon logout={()=>dispatch(LogoutAction())}/></Grid>
              <Grid item mr={2}>raees</Grid>
            </Grid>
          </Grid>

        </Grid>
      </div>
      {/* </Toolbar> */}
    </AppBar>
  );
};

export default Topbar;