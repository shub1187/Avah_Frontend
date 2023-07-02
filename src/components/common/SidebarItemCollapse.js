import { Avatar, Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import colorConfigs from "../../configs/colorConfigs";
import { RouteType } from "../../routes/config";
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import SidebarItem from "./SidebarItem";
import { useSelector } from "react-redux";
// import { RootState } from "../../redux/store";
import { Margin } from "@mui/icons-material";
import { Link } from "react-router-dom";
import assets from "../../assets";

// type Props = {
//   item: RouteType;
// };

const SidebarItemCollapse = ({ item }) => {
  const [open, setOpen] = useState(false);

  const { appState } = useSelector((state) => state.appState.appState);

  // console.log(appState +"--"+item.state)

  useEffect(() => {

    if ( open && appState.includes(item.state)) {
      setOpen(true);
    }else{
      setOpen(false); 
    } 
    // console.log(" useEffect " + open)


  }, [appState, item]);

  var appStateTitle = appState.split(".");  
  appStateTitle.pop();       
  var appParentName = appStateTitle.join("."); 

  var checkSideBar=appParentName == item.state ||appStateTitle== item.state||appState==item.state 

  // console.log(`-appParentName---${appParentName}---item.state----${item.state}-----appStateTitle---${appStateTitle}----appState-----${appState}--------`)
  return (
    item.sidebarProps && item.path ?
      (
        <>

          <ListItemButton
            component={Link}
            to={item.path}
            onClick={() => {
              setOpen(!open)

            }}

            sx={{
              "&: hover": {
                backgroundColor: colorConfigs.sidebar.hoverBg
              },
              paddingY: "10px",
              background:checkSideBar ? `linear-gradient(180deg, #E93848 0%, #773562 80.73%)` : `#FFFFFF`,
              paddingX: "24px",
              margin: '0px 0px 2px'
            }}
          >
            {/* <ListItemIcon sx={{
              color: (appState != item.state) ? colorConfigs.sidebar.iconColor : "#FFFFFF"
            }}>
              {item.sidebarProps.icon && item.sidebarProps.icon}
            </ListItemIcon> */}
        
          {checkSideBar ? (
            <img className="gfg" style={{ width: 20, height: 20, margin: 10 }}
              src={item.sidebarProps.icon } />
          ) : (
            <img style={{ width: 20, height: 20, margin: 10 }}
              src={item.sidebarProps.icon } />
          )}

          <div className="pe-4"/>
            <ListItemText
              disableTypography
              sx={{
                color: (!checkSideBar) ? colorConfigs.sidebar.textColor : "#FFFFFF"
              }}
              primary={
                <Typography >
                  {item.sidebarProps.displayText}
                </Typography>
              }
            />
            
            {open ? <ExpandLessOutlinedIcon sx={{
              color: (!checkSideBar) ? colorConfigs.sidebar.iconColor : "#FFFFFF"
            }} /> : <ExpandMoreOutlinedIcon sx={{
              color: (!checkSideBar) ? colorConfigs.sidebar.iconColor : "#FFFFFF"
            }} />}
          </ListItemButton>
          <Collapse  in={open} timeout="auto">
            <List disablePadding>
              {/* {item.child?.map((route, index) => (
              route.sidebarProps ? (
                route.child ? (
                  <SidebarItemCollapse item={route} key={index} />
                ) : (
                  <SidebarItem item={route} key={index} />
                )
              ) : null
            ))} */}
              {
                item.child?.map((route, index) => (

                  route.sidebarProps ? (
                   
                    <SidebarItem item={route} key={index} />

                  ) : null))

              }
            </List>
          </Collapse>
        </>
      ) : null
  );
};

export default SidebarItemCollapse;