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
import { AccountsIcon, BillingsIcon, HomeIcon, LaboursIcon, PackageIcon, ReviewsIcon, RolesIcon, ServiceIcon, ServiceTypeIcon, SettingsIcon, SparesIcon, UserIcon } from 'assets/img/sidebar/Icons';
import './SidebarForSp.scss';
import { useState } from 'react';
import { Box } from '@mui/material';
import { useFetch } from 'hooks/useFetch';
import URL from 'url/apiURL';

const {getNotificationNumbers}= URL.SERVICE_PROVIDER.NOTIFICATION

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
    role:'Users',
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
    link:'/dashboard/roles',
    icon:RolesIcon,
    name:"Roles",
    role:"Roles"
  },
  {
    id:4,
    link:'/dashboard/spares',
    icon:SparesIcon,
    name:"Spares",
    role:'Spares',
  },
  {
    id:5,
    link:'/dashboard/labour',
    icon:LaboursIcon,
    name:"Labour",
    role:'Labour',
  },
  {
    id:6,
    link:'/dashboard/serviceType',
    icon:ServiceTypeIcon,
    name:"Service Type",

  },
  {
    id:7,
    link:'/dashboard/service/estimatesList',
    icon:ServiceIcon,
    name:"Service",
    role:'Service',
    subList:[
      {
        id:71,
        link:'dashboard/service/estimatesList',
        name:"Estimates List"
      },
      {
        id:72,
        link:'dashboard/service/appointmentList',
        name:"Appointment List"
      },
            {
        id:73,
        link:'dashboard/service/jobCardsList',
        name:"Job Cards List"
      },
    ]
  },
  {
    id:8,
    link:'/dashboard/billing/invoiceList',
    icon:BillingsIcon,
    name:"Billing",
    role: "Billing",
    subList:[
      {
        id:81,
        link:'dashboard/billing/invoiceList',
        name:"Invoice List"
      },
      {
        id:82,
        link:'dashboard/billing/pendingPayments',
        name:"Pending Payments"
      },
    ]
  },
  {
    id:9,
    link:'/dashboard/accounts/account',
    icon:AccountsIcon,
    name:"Accounts",
    role: "Accounts",
    subList:[
      {
        id:91,
        link:'dashboard/accounts/account',
        name:"Account"
      },
      {
        id:92,
        link:'dashboard/accounts/ledger',
        name:"Ledger"
      },
    ]
  },
  {
    id:10,
    link:'/dashboard/packages',
    icon:PackageIcon,
    name:"Packages",
    role:"Packages"
  },
  {
    id:11,
    link:'/dashboard/reviews',
    icon:ReviewsIcon,
    name:"Reviews",
    role:"Reviews"

  },
  {
    id:12,
    link:'/dashboard/settings',
    icon:SettingsIcon,
    name:"Settings",
    role:"Settings"

  },
]

// export  function SpTest({employee}) {
//   const [openSublistId, setOpenSublistId] = useState(null);
//   const [activeItem, setActiveItem] = useState(null);
//   const [activeSubitem, setActiveSubitem] = useState(null);

//   const handleClick = (id) => {
//     if (id === openSublistId) {
//       setOpenSublistId(null); // Close the clicked sublist
//     } else {
//       setOpenSublistId(id); // Open the clicked sublist
//     }

//     setActiveItem(id === activeItem ? null : id);
//   };

//   const handleSubItemClick = (id) => {
//     setActiveSubitem(id === activeSubitem ? null : id);
//   };

//   return (
//     <List
//       disablePadding
//       className='someList'
//       component="nav"
//       aria-labelledby="nested-list-subheader"
//     >
//       {SpSideBarList.map((list) => {
//         // let permission = localStorage.getItem('permission_granted')
//         // if(employee){
//         // let permission =  [
//         //   "Users",
//         //   "Spares",
//         //   "Labour",
//         //   "Service Type",
//         //   "Service"
//         // ]
//         // let authorizedRoute =!list.role || permission?.includes(list?.role)
//         // console.log(authorizedRoute)
//         // if (authorizedRoute){
//         return <React.Fragment key={list.id}>
//           <Link to={list.link} className='link-text' >
//             <ListItemButton
//               sx={{
//                 ...(!list.subList && list.id > 11
//                   ? { backgroundColor: 'rgb(244, 248, 249)' }
//                   : openSublistId === list.id
//                     ? { background: 'linear-gradient(to bottom, rgb(233, 56, 72), rgb(119, 53, 98))', color: 'white' }
//                     : {}),borderBottom:2,borderColor:'rgb(237, 244, 251)',height:"50px"
//               }}
//               onClick={() => handleClick(list.id)}
//             >
//               {list?.icon && <ListItemIcon><list.icon isSelected={activeItem === list.id} /></ListItemIcon>}

//               <ListItemText
//                 sx={{
//                   ...(!list.subList && list.id > 11 ? { ml: 7 } : ''),
//                 }}
//                 primary={list.name}
//               />
//               {list.subList && (openSublistId === list.id ? <ExpandLess /> : <ExpandMore />)}
//             </ListItemButton>
//           </Link>
//           {list.subList && (
//             <Collapse in={openSublistId === list.id} timeout='auto' unmountOnExit>
//               <Box sx={{ backgroundColor: 'rgb(237, 244, 251)', color: 'black' }}>
//                 {list.subList.map((subItem) => (
//                   <Link to={subItem.link} style={{ textDecoration: 'none', color: 'black' }} key={subItem.id}>
//                     <ListItemButton
//                       onClick={() => handleSubItemClick(subItem.id)}
//                       selected={activeSubitem === subItem.id}
//                     >
//                       <ListItemText
//                         sx={{
//                           color: activeSubitem === subItem.id ? 'rgb(173,73,112)' : 'inherit',ml:7
//                         }}
//                         primary={subItem.name}
//                       />
//                     </ListItemButton>
//                   </Link>
//                 ))}
//               </Box>
//             </Collapse>
//           )}
//         </React.Fragment>
//         // }}
//       })}
//     </List>
//   );
// }


const ServiderProviderSidebar = ({})=>{

    //FOR SIDEBAR - MENU AND SUBMENU
    const [open,setOpen] = useState({})
    const [subListopen,setSubListOpen] = useState({})
    const {data:{data:notifications}} = useFetch(`${getNotificationNumbers}?sp_id=${localStorage.getItem('sp_id')}`)

    //HANDLE MENU
    const onChange = (listIndex)=>setOpen((prev)=>{
        setSubListOpen({})
        const updatedOpen = {}
        updatedOpen[listIndex] = !prev[listIndex] //TOGGLE CLICKED BUTTON

        Object.keys(prev).forEach((key)=>{
            if(Number(key)!==listIndex) updatedOpen[key] = false
        })
        return updatedOpen
    })

    //HANDLE SUBMENU
    const subItemOnChange = (subListIndex)=>setSubListOpen((prev)=>{
        const updatedOpen = {}
        updatedOpen[subListIndex] = !prev[subListIndex] //TOGGLE CLICKED BUTTON

        Object.keys(prev).forEach((key)=>{
            if(Number(key)!==subListIndex) updatedOpen[key] = false
        })
        return updatedOpen

    })
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
                                        <ListItemText>{subList.name}</ListItemText>
                                        {(subList.name ==='Estimates List' || subList.name ==='Appointment List') && (
                                          <Box className='flex jc-flex-end'>
                                          <ListItemText>{(subList.name ==='Estimates List' && notifications.estimate_list) || (subList.name ==='Appointment List' && notifications.appointment_list) }</ListItemText>
                                          </Box>
                                        )}
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