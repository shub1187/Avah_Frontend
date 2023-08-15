import { Outlet, useLocation } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import Sidebar from "../common/Sidebar/SidebarLayout";
import Topbar from "../common/Topbar";
import { useSelector } from "react-redux";
// import { RootState } from "../../redux/store";

const ServiceProviderLayout = () => {
  const { appState } = useSelector((state) => state.appState);
  const location = useLocation()
  console.log(location,"RAEES")
    return (
    <Box sx={{ display: "flex" }}>
      
      <Topbar />
      
      <Box
        component="nav"
        sx={{
          width: sizeConfigs.sidebar.width,
          flexShrink: 0
        }}
      >
        <Sidebar />
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
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default ServiceProviderLayout;