import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';


const SpUserPageLayout = () => {

   const { appState } = useSelector((state) => state.appState.appState);

  // console.log("tabIndex---> " + "-------dd--------------------**-----------------------------------------" + appState)
  let value = "0"
  if (appState == "user.employees") {
    value = "1"
  } 
  return (

    <>
      <NavTabs a={value} />
      <Outlet />

    </>
  );
};



export default SpUserPageLayout;


function NavTabs(props) {

  return (

    <Box  sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }} >
      <Tabs
        value={props.a}
        aria-label="secondary tabs example"
      >
        <Tab value="0" label="Customers" href="/dashboard/user/customer" />
        <Tab value="1" label="Employees" href="/dashboard/user/employees" />
      
      </Tabs>
    </Box>
  );
}


