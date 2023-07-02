import { Avatar, colors, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import colorConfigs from "../../configs/colorConfigs";

// type Props = {
//   item: RouteType;
// };

const SidebarItem = ({ item }) => {
  const { appState } = useSelector((state) => state.appState.appState);

  // var appStateTitle = appState.split(".");  
  //appStateTitle.pop();       
  // var appParentName = appStateTitle.join("."); 
  //  console.log("child---> " + `--(-${appParentName}--|-${item.state}--)-**---------------(---${appStateTitle}---${appState}-----)----- ---------------------------` )
  return (

    item.sidebarProps && item.path ?
      (

        <div style={{  "margin": item.sidebarProps.icon != "" ? "0px" : "0px 7px 0px" }  }  >

          <ListItemButton
            component={Link}
            to={item.path}
            sx={{
              "&: hover": {
                backgroundColor: colorConfigs.sidebar.hoverBg
              },
              background: (appState == item.state && item.childView==null) ? colorConfigs.sidebar.activeBg
               :item.sidebarProps.icon != "" ? "#FFFFFF" : "#E8E9EA",
              fontFamily:"Jost",
              paddingY: "10px",
              paddingX: "24px",
              margin: '0px 0px 2px'

            }}
          >

            {item.sidebarProps.icon != "" ?

              appState == item.state ?

                <img className="gfg" style={{ width: 20, height: 20, margin: 10 }}
                  src={item.sidebarProps.icon } />
                :

                <img style={{ width: 20, height: 20, margin: 10 }}
                  src={item.sidebarProps.icon } />

              : <div className="pe-4" />}




            <div className="pe-4" />
            <ListItemText sx={{
              color: (appState != item.state  ) ? colorConfigs.sidebar.textColor : (item.childView==true )? "#AD4970":"#FFFFFF",
              fontFamily:"Jost",

            }}>

              {item.sidebarProps.displayText}
            </ListItemText>

          </ListItemButton>

        </div>




      ) : null
  )
};

export default SidebarItem;