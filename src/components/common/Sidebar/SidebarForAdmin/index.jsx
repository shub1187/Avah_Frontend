import { Box, Collapse, ListItemButton,List, ListItemText, ListItemIcon} from '@mui/material'
import { HomeIcon, RequestIcon, UserIcon, VehicleIcon } from 'assets/img/sidebar/Icons'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.scss';

const AdminSidebarList = [
    {
        id:1,
        link:'admin/home',
        icon:HomeIcon,
        name:"Home",
    },
    {
        id:2,
        link:'admin/user/customer',
        icon:UserIcon,
        name:"User",
        subList:[
            {
              id:21,
              link:'admin/user/customer',
              name:"Customers"
            },
            {
                id:22,
                link:'admin/user/serviceProvider',
                name:"Service Provider"
              },
          ]
    },
    {
        id:3,
        link:'admin/vehicleSettings/manufacturers',
        icon:VehicleIcon,
        name:"Vehicle Settings",
        subList:[
            {
                id:31,
                link:'admin/vehicleSettings/manufacturers',
                name:"Manufacturers"
            },
            {
                id:32,
                link:'admin/vehicleSettings/models',
                name:"Models"
            },
            {
                id:33,
                link:'admin/vehicleSettings/fuelType',
                name:"Fuel Type"
            },
          ]
    },
    {
        id:4,
        link:'admin/requests/pendingRequests',
        icon:RequestIcon,
        name:"Requests",
        subList:[
            {
                id:41,
                link:'admin/requests/pendingRequests',
                name:"Pending Requests"
            },
            {
                id:42,
                link:'admin/requests/approvedRequests',
                name:"Approved Requests"
              },
              {
                id:43,
                link:'admin/requests/rejectedRequests',
                name:"Rejected Requests"
              },
          ]
    },

]
const SidebarForAdmin = () => {
    //FOR SIDEBAR - MENU AND SUBMENU
    const [open,setOpen] = useState({})
    const [subListopen,setSubListOpen] = useState({})

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
            {AdminSidebarList.map((list,listIndex)=>{
                let permission = localStorage.getItem('permission_granted')
                if (!list.role || permission?.includes(list?.role) ||  permission?.includes('All')){
                return (
                    <Link to={list.link} className='link-text' key={listIndex}>
                    <Box className='sidebar-button'>
                    <ListItemButton className={open[listIndex] && 'selected'} onClick={()=>onChange(listIndex)}>
                    {list.icon && <ListItemIcon><list.icon isSelected={open[listIndex]}/></ListItemIcon>}
                    <ListItemText>{list.name}</ListItemText>
                    {list.subList && (Object.keys(open).find(openKey=>openKey==AdminSidebarList[listIndex].id-1 && open[listIndex]) ? <ExpandLess/>: <ExpandMore/>)}
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
    )
}

export default SidebarForAdmin