import { Avatar, Drawer, IconButton, List, Stack, SwipeableDrawer, Toolbar , useMediaQuery} from "@mui/material";
import colorConfigs from "../../../configs/colorConfigs";
import sizeConfigs from "../../../configs/sizeConfigs";
import  { ServiderProviderSidebar } from "./SidebarForSp/SidebarForSp";
import AvahSideBarImage from 'assets/img/AvahSideBarImage.png'
import CustomerSideBar from "./SidebarForCutomer/SidebarForCustomer";
import SidebarForAdmin from "./SidebarForAdmin";


const Sidebar = ({isMobile,open,handleDrawerToggle,customer}) => {
  const getRole = localStorage.getItem("TYPE_OF_USER");
  return (
    <>
    <SwipeableDrawer
      disableScrollLock={true}
      variant={(isMobile || customer) ? 'temporary' : 'permanent'}  // Change variant based on resolution
      open={open}
      onClose={handleDrawerToggle}
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
            getRole == "1" ?  <SidebarForAdmin/>              
            :
            getRole == "2"?<ServiderProviderSidebar/>
            :
            getRole=="3" ? <CustomerSideBar/>
            :
            getRole =='5' ? <ServiderProviderSidebar/>
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