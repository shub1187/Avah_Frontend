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
import { AccountsIcon, BillingsIcon, HomeIcon, LaboursIcon, PackageIcon, ReviewsIcon, ServiceIcon, ServiceTypeIcon, SettingsIcon, SparesIcon, UserIcon } from 'assets/img/sidebar/Icons';
import './SidebarForSp.scss';
import { useState } from 'react';
import { Box } from '@mui/material';

export const SpSideBarList = [
  {
    id:1,
    link:'dashboard/home',
    icon:HomeIcon,
    name:"Home",
  },
  {
    id:2,
    link:'dashboard/user/customer',
    icon:UserIcon,
    name:"Users",
    subList:[
      {
        id:21,
        link:'dashboard/user/customer',
        name:"Customer",
      },
      {
        id:22,
        link:'dashboard/user/employees',
        name:"Employee",
      },
    ]
  },
  {
    id:3,
    link:'/dashboard/spares',
    icon:SparesIcon,
    name:"Spares",
  },
  {
    id:4,
    link:'/dashboard/labour',
    icon:LaboursIcon,
    name:"Labour",
  },
  {
    id:5,
    link:'/dashboard/serviceType',
    icon:ServiceTypeIcon,
    name:"Service Type",

  },
  {
    id:6,
    link:'/dashboard/service/estimatesList',
    icon:ServiceIcon,
    name:"Service",
    subList:[
      {
        id:61,
        link:'dashboard/service/estimatesList',
        name:"Estimates List"
      },
      {
        id:62,
        link:'dashboard/service/appointmentList',
        name:"Appointment List"
      },
            {
        id:63,
        link:'dashboard/service/jobCardsList',
        name:"Job Cards List"
      },
      {
        id:64,
        link:'dashboard/service/rejectedAppointment',
        name:"Rejected Appointments"
      },
    ]
  },
  {
    id:7,
    link:'/dashboard/billing/invoiceList',
    icon:BillingsIcon,
    name:"Billing",
    subList:[
      {
        id:71,
        link:'dashboard/billing/invoiceList',
        name:"Invoice List"
      },
      {
        id:72,
        link:'dashboard/billing/pendingPayments',
        name:"Pending Payments"
      },
    ]
  },
  {
    id:8,
    link:'/dashboard/accounts/account',
    icon:AccountsIcon,
    name:"Accounts",
    subList:[
      {
        id:81,
        link:'dashboard/accounts/account',
        name:"Account"
      },
      {
        id:82,
        link:'dashboard/accounts/ledger',
        name:"Ledger"
      },
    ]
  },
  {
    id:9,
    link:'/dashboard/packages',
    icon:PackageIcon,
    name:"Packages",
  },
  {
    id:10,
    link:'/dashboard/reviews',
    icon:ReviewsIcon,
    name:"Reviews",

  },
  {
    id:11,
    link:'/dashboard/settings',
    icon:SettingsIcon,
    name:"SETTINGS",

  },
]

export default function ServiderProviderSidebar() {
  const [openSublistId, setOpenSublistId] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const [activeSubitem, setActiveSubitem] = useState(null);

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
      {SpSideBarList.map((list) => (
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

