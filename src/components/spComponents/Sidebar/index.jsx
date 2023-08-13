import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { Link } from 'react-router-dom';
import { HomeIcon, UserIcon } from 'assets/img/sidebar/Icons';
import './index.scss';
import { useState } from 'react';
import { Box, ThemeProvider, createTheme } from '@mui/material';
const SideBarList = [
  {
    id:1,
    link:'/dashboard/home',
    icon:HomeIcon,
    name:"Home",

  },
  {
    id:2,
    link:'/dashboard/user/customer',
    icon:UserIcon,
    name:"User",
    subList:[
      {
        id:21,
        link:'/dashboard/user/customer',
        name:"Customer"
      },
      {
        id:22,
        link:'/dashboard/user/employees',
        name:"Employee"
      },
    ]
  }
]

export default function NestedList({items}) {
  const [open, setOpen] = useState({});
  const [activeItem, setActiveItem] = useState(null);
  console.log(activeItem,"RAEES")
  const handleClick = (id) => {
    setOpen((prevState)=>({...prevState,[id]:!prevState[id]}));
    // setActiveItem(id);
    setActiveItem(id === activeItem ? null : id); // Toggle active item or set to null

  };

  return (
    <List
      disablePadding
      className='someList'
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {items.map((list)=>{
        return(
          <>
            <Link to={list.link} style={{ textDecoration: 'none', color: 'inherit' }}>
            <ListItemButton   sx={{...(!list.subList? {backgroundColor:'rgb(244,248,249)'}: {'&.Mui-selected': {background: 'linear-gradient(to bottom, rgb(233, 56, 72), rgb(119, 53, 98))',color: 'white'}})}}
             onClick={()=>handleClick(list.id)} selected={list.subList && activeItem===list.id ?true:false} >
              {list?.icon &&(
                <ListItemIcon>
                  {list?.icon()}
                </ListItemIcon>
              )}

              <ListItemText sx={{...(!list.subList?{ml:4}:'')}} primary={list.name}/>
              {list.subList && (open[list.id] ? <ExpandLess /> : <ExpandMore />)}
              </ListItemButton>

            </Link>

            {list.subList && (
            <Collapse in={open[list.id]} timeout={'auto'} unmountOnExit>
              <Box sx={{backgroundColor:"rgb(237,244,251)",color:'black'}}>
                <NestedList items={list.subList}/>
              </Box>
            </Collapse>
            )}
          </>
        )
      })}
    </List>
  );
}