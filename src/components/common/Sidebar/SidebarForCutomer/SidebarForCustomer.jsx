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
import { AccountsIcon, AppointmentIcon, BillingsIcon, DashBoardIcons, HomeIcon, LaboursIcon, PackageIcon, ReviewIcon, ReviewsIcon, ServiceIcon, ServiceTypeIcon, SettingsIcon, SparesIcon, UserIcon } from 'assets/img/sidebar/Icons';
import './SidebarForCustomer.scss';
import { useState } from 'react';
import { Box } from '@mui/material';
import { useCustomerContext } from 'hooks/useCustomContext';
export const CustomerSidebarList = [
    {
      id:1,
      link:'/',
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
    {
      id:6,
      link:'customer/review',
      icon:ReviewIcon,
      name:"Review",
    },
  ]

export default function CustomerSideBar() {
  const {open,subListopen,onChange,subItemOnChange} = useCustomerContext()
  

  return (
    <>
    <List>
        {CustomerSidebarList.map((list,listIndex)=>{
            let permission = localStorage.getItem('permission_granted')
            if (!list.role || permission?.includes(list?.role) ||  permission?.includes('All')){
            return (
                <Link to={list.link} className='link-text' key={listIndex}>
                <Box className='sidebar-button'>
                <ListItemButton className={open[listIndex] && 'selected'} onClick={()=>onChange(listIndex)}>
                {list.icon && <ListItemIcon><list.icon isSelected={open[listIndex]}/></ListItemIcon>}
                <ListItemText>{list.name}</ListItemText>
                {list.subList && (Object.keys(open).find(openKey=>openKey==CustomerSidebarList[listIndex].id-1 && open[listIndex]) ? <ExpandLess/>: <ExpandMore/>)}
                </ListItemButton>
                {list.subList && (
                    <Collapse in={open[listIndex]} unmountOnExit>
                            <List className='pt-0 pb-1'>
                            {list.subList.map((subList, subListIndex)=>(
                                <Link to={subList.link} className='link-text'  key={subListIndex}>
                                <Box className='sub-item-sidebar'>
                                <ListItemButton className={`${subListopen[subListIndex] && 'sub-selected'} pl-8 ml-1 mr-1`} onClick={()=>subItemOnChange(subListIndex)} >
                                    {subList.icon && <ListItemIcon><subList.icon/></ListItemIcon>}
                                      <ListItemText>{subList.name}</ListItemText>
                                </ListItemButton>
                                </Box>
                                </Link>
                            ))}
                            </List>
                    </Collapse>
                )}
                </Box>
                </Link>
            )}
        })}
    </List>
    </>
  );
}

