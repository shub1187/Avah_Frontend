import React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import { AccountsIcon, AppointmentIcon, BillingsIcon, DashBoardIcons, HomeIcon, LaboursIcon, PackageIcon, ReviewsIcon, ServiceIcon, ServiceTypeIcon, SettingsIcon, SparesIcon, UserIcon } from 'assets/img/sidebar/Icons';
import './SidebarForCustomer.scss';
import { useState } from 'react';
import { Box } from '@mui/material';
import { useCustomerContext } from 'hooks/useCustomContext';
import axios from 'axios'
import { category_get_full_page_api } from 'network/ApiConstant';
export const CustomerSidebarList =(customerStatus)=>{
  return (
    [
    {
      id:1,
      link:'customer/home',
      icon:HomeIcon,
      name:"Home",
    },
    {
      id:2,
      link:'customer/dashboard',
      icon:DashBoardIcons,
      name:"Dashboard",
    },
    {
      id:3,
      link:'customer/profile',
      icon:UserIcon,
      name:"Profile",//coming from custom context
    },
    {
      id:4,
      link:'customer/vehicle',
      icon:ServiceTypeIcon,
      name:"Vehicle",
    },
    {
      id:5,
      link:'customer/appointment/approvedAppointment',
      icon:AppointmentIcon,
      name:"Appointment",
      subList:[
        {
          id:51,
          link:'customer/appointment/approvedAppointment',
          name:"Appointment List"
        },
      ]
    },
  ]
  )
} 
export default function CustomerSideBar() {
  const [openSublistId, setOpenSublistId] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const [activeSubitem, setActiveSubitem] = useState(null);
  const {customerStatus,updateCustomerStatus} = useCustomerContext() 

  // const callApi=async()=>{
  //   let a = await axios.get('http://localhost:3008/api/customer/getCustomerProfile')
  // }
  //   callApi()
  // updateCustomerStatus('Complete Your Profile');
  
  const handleClick = (id) => {
    if (id === openSublistId) {
      setOpenSublistId(null); // Close the clicked sublist
    } else {
      setOpenSublistId(id); // Open the clicked sublist
    }

    setActiveItem(id === activeItem ? null : id);
  };

  const handleSubItemClick = (id) => {
    setActiveSubitem(id === activeSubitem ? null : id);
  };

  return (
    <List
      disablePadding
      className='someList'
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {CustomerSidebarList(customerStatus).map((list) => (
        <React.Fragment key={list.id}>
          <Link to={list.link} style={{ textDecoration: 'none', color: 'black' }}>
            <ListItemButton
              sx={{
                ...(!list.subList && list.id > 11
                  ? { backgroundColor: 'rgb(244, 248, 249)' }
                  : openSublistId === list.id
                    ? { background: 'linear-gradient(to bottom, rgb(233, 56, 72), rgb(119, 53, 98))', color: 'white' }
                    : {}),borderBottom:2,borderColor:'rgb(237, 244, 251)',height:"50px"
              }}
              onClick={() => handleClick(list.id)}
              // selected={activeItem === list.id}
            >
              {list?.icon && <ListItemIcon><list.icon isSelected={activeItem === list.id} /></ListItemIcon>}

              <ListItemText
                sx={{
                  ...(!list.subList && list.id > 11 ? { ml: 7 } : ''),
                }}
                primary={list.name}
              />
              {list.subList && (openSublistId === list.id ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>
          </Link>
          {list.subList && (
            <Collapse in={openSublistId === list.id} timeout='auto' unmountOnExit>
              <Box sx={{ backgroundColor: 'rgb(237, 244, 251)', color: 'black' }}>
                {list.subList.map((subItem) => (
                  <Link to={subItem.link} style={{ textDecoration: 'none', color: 'black' }} key={subItem.id}>
                    <ListItemButton
                      onClick={() => handleSubItemClick(subItem.id)}
                      selected={activeSubitem === subItem.id}
                    >
                      <ListItemText
                        sx={{
                          color: activeSubitem === subItem.id ? 'rgb(173,73,112)' : 'inherit',ml:7
                        }}
                        primary={subItem.name}
                      />
                    </ListItemButton>
                  </Link>
                ))}
              </Box>
            </Collapse>
          )}
        </React.Fragment>
      ))}
    </List>
  );
}

