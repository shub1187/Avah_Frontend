import { Avatar, Drawer, IconButton, List, Stack, SwipeableDrawer, Toolbar , useMediaQuery} from "@mui/material";
import assets from "../../../assets";
import colorConfigs from "../../../configs/colorConfigs";
import sizeConfigs from "../../../configs/sizeConfigs";
import appRoutes from "../../../routes/appRoutes";
import SidebarItem from "../SidebarItem";
import SidebarItemCollapse from "../SidebarItemCollapse";
// import spAppRoutes from "../../../routes/spRoutes";
import ServiderProviderSidebar, { SpSideBarList } from "./SidebarForSp/SidebarForSp";
import AvahSideBarImage from 'assets/img/AvahSideBarImage.png'
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CustomerSideBar from "./SidebarForCutomer/SidebarForCustomer";


const Sidebar = ({isMobile,open,handleDrawerToggle,customer}) => {
  // const [checkRole,setCheckRole] = useState("");
  const getRole = localStorage.getItem("TYPE_OF_USER");
  // setCheckRole(getRole);
  // const [open, setOpen] = useState(false);

  // Use the useMediaQuery hook to detect mobile resolution
  // const isMobileResolution = useMediaQuery((theme) =>
  //   theme.breakpoints.down('sm')
  // );
  // const handleDrawerToggle = () => {
  //   setOpen(!open);
  // };
  return (
    <>
    {/* {isMobileResolution && (
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ display: { sm: 'block', md: 'none' } }}  // Show only on mobile
      >
        <MenuIcon />
      </IconButton>
    )} */}
    <SwipeableDrawer
      disableScrollLock={true}
      variant={(isMobile) ? 'temporary' : 'permanent'}  // Change variant based on resolution
      open={open}
      onClose={handleDrawerToggle}
      // variant="permanent"
      sx={{
        width: sizeConfigs.sidebar.width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sizeConfigs.sidebar.width,
          boxSizing: "border-box",
          borderRight: "0px",
          backgroundColor: colorConfigs.sidebar.bg,
          color: colorConfigs.sidebar.iconColor
        }
      }}
    >
      <List disablePadding>
        <Toolbar sx={{ marginBottom: "30px" ,marginTop:'20px'}}>
          <Stack
            sx={{ width: "100%" }}
            direction="row"
            justifyContent="center"
          >
            <Avatar  sx={{ width: "70%",
            borderRadius:"0",height:'65px'
          
          }} src={AvahSideBarImage} />
          </Stack>
        </Toolbar>
          <div className="mx-3">
            {   

            getRole == "1" ?  
               appRoutes.map((route, index) => (
                route.sidebarProps ? (
                  route.child ? (
                    <SidebarItemCollapse item={route} key={index} />
                  ) : (
                    <SidebarItem item={route}   key={index} />
                  )
                ) : null
              )) 
              :
              getRole == "2" ?
              // spAppRoutes.map((route, index) => (
              //   route.sidebarProps ? (
              //     route.child ? (
              //       <SidebarItemCollapse item={route} key={index} />
              //     ) : (
              //       <SidebarItem item={route}   key={index} />
              //     )
              //   ) : null
              // )) :
              // null
              <ServiderProviderSidebar/>:
              getRole=="3"?
              <CustomerSideBar/>
              :
              null
            }        

         




          </div>
      </List>
    </SwipeableDrawer>
    </>
  );
};

export default Sidebar;