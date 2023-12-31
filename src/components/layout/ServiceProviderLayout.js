import { Outlet, useLocation } from "react-router-dom";
import { Box, Toolbar, useMediaQuery } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import Sidebar from "../common/Sidebar/SidebarLayout";
import Topbar from "../common/Topbar";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useMobileResponsive } from "hooks/useMobileResponsive";
// import { RootState } from "../../redux/store";

const ServiceProviderLayout = () => {

  const [open, setOpen] = useState(false);
  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  const {isMobile}=useMobileResponsive()
  const location = useLocation()
    return (
    <Box sx={{ display: "flex" }}>
      
      {isMobile && <Topbar isMobile={isMobile} handleDrawerToggle={handleDrawerToggle}/>}
      
      <Box
        component="nav"
        sx={{
          // width: sizeConfigs.sidebar.width,
          flexShrink: 0
        }}
      >
        <Sidebar open={open} handleDrawerToggle={handleDrawerToggle} isMobile={isMobile}/>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p:location.pathname==='/dashboard/home' || location.pathname==='/admin/dashboard/home'?0:3 ,
          width: `calc(100% - ${sizeConfigs.sidebar.width})`,
          minHeight: "100vh",
          backgroundColor: colorConfigs.mainBg
        }}
      >
        {!isMobile && <Topbar isMobileResolution={isMobile} handleDrawerToggle={handleDrawerToggle}/>}
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default ServiceProviderLayout;