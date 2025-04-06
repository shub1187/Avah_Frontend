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
import { AccountsIcon, BillingsIcon, HomeIcon, LaboursIcon, PackageIcon, ReviewsIcon, RolesIcon, ServiceIcon, ServiceTypeIcon, SettingsIcon, SparesIcon, UserIcon, ReviewIcon } from 'assets/img/sidebar/Icons';
import './SidebarForSp.scss';
import { useState } from 'react';
import { Badge, Box, Chip } from '@mui/material';
import { useFetch } from 'hooks/useFetch';
import URL from 'url/apiURL';
import { useCustomerContext } from 'hooks/useCustomContext';


const {getNotificationNumbers}= URL.SERVICE_PROVIDER.NOTIFICATION

export const SpSideBarList = [
  {
    id:1,
    link:'serviceProvider/home',
    icon:HomeIcon,
    name:"Home",
  },
  {
    id:2,
    link:'serviceProvider/user/employees',
    icon:UserIcon,
    name:"Users",
    role:'Users',
    subList:[
      {
        id:21,
        link:'serviceProvider/user/employees',
        name:"Employee",
      },
    ]
  },
  {
    id:3,
    link:'/serviceProvider/roles',
    icon:RolesIcon,
    name:"Roles",
    role:"Roles"
  },
  {
    id:4,
    link:'/serviceProvider/spares',
    icon:SparesIcon,
    name:"Spares",
    role:'Spares',
  },
  {
    id:5,
    link:'/serviceProvider/labour',
    icon:LaboursIcon,
    name:"Labour",
    role:'Labour',
  },
  {
    id:6,
    link:'/serviceProvider/service/estimatesList',
    icon:ServiceIcon,
    name:"Service",
    role:'Service',
    subList:[
      {
        id:71,
        link:'serviceProvider/service/estimatesList',
        name:"Estimates List"
      },
      {
        id:72,
        link:'serviceProvider/service/appointmentList',
        name:"Appointment List"
      },
            {
        id:73,
        link:'serviceProvider/service/jobCardsList',
        name:"Job Cards List"
      },
    ]
  },
  {
    id:8,
    link:'/serviceProvider/billing/pendingPayments',
    icon:BillingsIcon,
    name:"Billing",
    role: "Billing",
    subList:[
      {
        id:81,
        link:'serviceProvider/billing/pendingPayments',
        name:"Pending Payments"
      },
      {
        id:82,
        link:'serviceProvider/billing/invoiceList',
        name:"Paid Invoices"
      }
    ]
  },
  {
    id:9,
    link:'/serviceProvider/review',
    icon:ReviewIcon,
    name:"Review",
    role:'Review',
  },
]



const ServiderProviderSidebar = ({})=>{

    //FOR SIDEBAR - MENU AND SUBMENU
    const {open,subListopen,onChange,subItemOnChange} = useCustomerContext()
    const {data:{data:notifications}} = useFetch(`${getNotificationNumbers}?sp_id=${localStorage.getItem('sp_id')}`)

    return (
      <>
      <List>
          {SpSideBarList.map((list,listIndex)=>{
              let permission = localStorage.getItem('permission_granted')
              if (!list.role || permission?.includes(list?.role) ||  permission?.includes('All')){
              return (
                  <Link to={list.link} className='link-text' key={listIndex}>
                  <Box className='sidebar-button'>
                  <ListItemButton className={open[listIndex] && 'selected'} onClick={()=>onChange(listIndex)}>
                  {list.icon && <ListItemIcon><list.icon isSelected={open[listIndex]}/></ListItemIcon>}
                  <ListItemText>{list.name}</ListItemText>
                  {list.subList && (Object.keys(open).find(openKey=>openKey==SpSideBarList[listIndex].id-1 && open[listIndex]) ? <ExpandLess/>: <ExpandMore/>)}
                  </ListItemButton>
                  {list.subList && (
                      <Collapse in={open[listIndex]} unmountOnExit>
                              <List className='pt-0 pb-1'>
                              {list.subList.map((subList, subListIndex)=>(
                                  <Link to={subList.link} className='link-text'  key={subListIndex}>
                                  <Box className='sub-item-sidebar'>
                                  <ListItemButton className={`${subListopen[subListIndex] && 'sub-selected'} pl-8 ml-1 mr-1`} onClick={()=>subItemOnChange(subListIndex)} >
                                      {subList.icon && <ListItemIcon><subList.icon/></ListItemIcon>}
                                      {/* NOTIFICATION ON SIDEBAR COMMNETED */}
                                      {/* {(subList.name ==='Estimates List' || subList.name ==='Appointment List') ? (
                                        <ListItemText><Badge sx={{fontSize:17}} badgeContent={(subList.name ==='Estimates List' && notifications?.estimate_list) || (subList.name ==='Appointment List' && notifications?.appointment_list) || 0 } color='options'>{subList.name}&nbsp;&nbsp;</Badge></ListItemText>
                                        )
                                        : */}
                                        <ListItemText>{subList.name}</ListItemText>
                                      {/* } */}
                                        {/* <ListItemText>{subList.name}</ListItemText> */}
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
    return (
        <>
        <List>
            {SpSideBarList.map((list,listIndex)=>{
                let permission = localStorage.getItem('permission_granted')
                if (!list.role || permission?.includes(list?.role) ||  permission?.includes('All')){
                return (
                    <Link to={list.link} className='link-text' key={listIndex}>
                    <Box className='sidebar-button'>
                    <ListItemButton className={open[listIndex] && 'selected'} onClick={()=>onChange(listIndex)}>
                    {list.icon && <ListItemIcon><list.icon isSelected={open[listIndex]}/></ListItemIcon>}
                    <ListItemText>{list.name}</ListItemText>
                    {list.subList && (Object.keys(open).find(openKey=>openKey==SpSideBarList[listIndex].id-1 && open[listIndex]) ? <ExpandLess/>: <ExpandMore/>)}
                    </ListItemButton>
                    {list.subList && (
                        <Collapse in={open[listIndex]} unmountOnExit>
                                <List className='pt-0 pb-1'>
                                {list.subList.map((subList, subListIndex)=>(
                                    <Link to={subList.link} className='link-text'  key={subListIndex}>
                                    <Box className='sub-item-sidebar'>
                                    <ListItemButton className={`${subListopen[subListIndex] && 'sub-selected'} pl-8 ml-1 mr-1`} onClick={()=>subItemOnChange(subListIndex)} >
                                        {subList.icon && <ListItemIcon><subList.icon/></ListItemIcon>}
                                        {/* <ListItemText>{subList.name}</ListItemText> */}
                                        {(subList.name ==='Estimates List' || subList.name ==='Appointment List') ? (
                                          <ListItemText><Badge sx={{fontSize:17}} badgeContent={(subList.name ==='Estimates List' && notifications?.estimate_list) || (subList.name ==='Appointment List' && notifications?.appointment_list) || 0 } color='options'>{subList.name}&nbsp;&nbsp;</Badge></ListItemText>
                                          )
                                          :
                                          <ListItemText>{subList.name}</ListItemText>
                                        }
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
    )
}

export {ServiderProviderSidebar}