import { Avatar, Drawer, List, Stack, Toolbar } from "@mui/material";
import assets from "../../assets";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import appRoutes from "../../routes/appRoutes";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";
import spAppRoutes from "../../routes/spRoutes";
import { useEffect,useState } from "react";

const Sidebar = () => {
  // const [checkRole,setCheckRole] = useState("");
  const getRole = localStorage.getItem("TYPE_OF_USER");
  // setCheckRole(getRole);
  return (
    <Drawer
      variant="permanent"
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
            <Avatar  sx={{ width: "60%",
            borderRadius:"0",height:'60%'
          
          }} src={assets.images.logo} />
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
              spAppRoutes.map((route, index) => (
                route.sidebarProps ? (
                  route.child ? (
                    <SidebarItemCollapse item={route} key={index} />
                  ) : (
                    <SidebarItem item={route}   key={index} />
                  )
                ) : null
              )) :
              null
            }        

         




          </div>
      </List>
    </Drawer>
  );
};

export default Sidebar;