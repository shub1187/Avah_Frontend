import React from 'react'
import { Outlet } from "react-router-dom";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useSelector } from 'react-redux';

export default function RolesPageLayout() {

  const { appState } = useSelector((state) => state.appState.appState);

  // console.log("tabIndex---> " + "---------------------------**-----------------------------------------" + appState)
  let value = "0"
  if (appState == "user.service_providers") {
    value = "1"
  } else if (appState == "user.dealers") {
    value = "2"
  }
  return (
    <div>
         <>
         <NavTabs a={value} />
         <Outlet />
         </>
 
    </div>
  )
}


function NavTabs(props) {

  return (

    <Box  sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }} >
      <Tabs
        value={props.a}
        aria-label="secondary tabs example"
      >
        <Tab value="0" label="Manufacturers" href="/dashboard/user/customer" />
        <Tab value="1" label="Models" href="/dashboard/user/service_providers" />
        <Tab value="2" label="Fuel Type" href="/dashboard/user/dealers"
        />
      </Tabs>
    </Box>
  );
}
