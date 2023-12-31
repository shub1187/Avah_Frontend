import { AppBar, Box, Toolbar, Typography,IconButton, useMediaQuery, Grid, Button } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import { imageCongis } from "../../configs/imageConfigs";
import { LogoutAction } from "../../pages/login/LoginAction";
import { TopBarHomeNotificationIcon, TopBarSettingsIcon, TopBarSpIcon, TopBarUserIcon } from "assets/img/TopBar/icons";
import MenuIcon from '@mui/icons-material/Menu';
import { useMobileResponsive } from "hooks/useMobileResponsive";
import { logout } from "utils/customFunctions";




const Topbar = ({isMobile,handleDrawerToggle,customer}) => {
  const { appState } = useSelector((state) => state.appState);

  let appbar = appState.appState == "home" ? "app-bar2" : "app-bar1"
  return (
    <AppBar
      sx={{
        width:(isMobile ) ? "100%":`calc(100% - ${sizeConfigs.sidebar.width})`,

      }}
    >
      <div className={appbar}>
        <Grid height={'100%'} alignItems={'center'} container justifyContent={'space-between'}>
          <Grid  ml={2} item>
          {(isMobile ) && (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ display: { sm: 'block', md: customer ?'block':'none' } }}  // Show only on mobile
                >
                  <MenuIcon />
                </IconButton>
              )}
          </Grid>
          <Grid item >
              <TopBarSpIcon/>
              <Box component={'span'} className='ml-3'>{localStorage.getItem('business_name') ?? 'Pranish Poojary Service'}</Box>
          </Grid>
          <Grid item>
            <Grid container spacing={2} alignItems={'center'}>
              <Grid item><TopBarSettingsIcon /></Grid>
              <Grid item><TopBarHomeNotificationIcon /></Grid>
              <Grid item><TopBarUserIcon logout={logout} /></Grid>
              <Grid item mr={2}>
                <Grid container flexDirection={'column'}>
                  <Grid ml={0.3} mt={1} item mr={2}>{localStorage.getItem('profile_name')}</Grid>
                  <Grid item mr={2} fontSize={12}>({localStorage.getItem('role')})</Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </AppBar>
  );
};

export default Topbar;