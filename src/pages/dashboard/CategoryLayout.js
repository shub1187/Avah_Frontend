import React from 'react'
import { Outlet } from "react-router-dom";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useSelector } from 'react-redux';

export default function CategoryLayout() {

  const { appState } = useSelector((state) => state.appState.appState);

  // console.log("tabIndex---> " + "---------------------------**-----------------------------------------" + appState)
 
  return (  <div>  <> <Outlet /> </> </div> )
}


function NavTabs(props) {

  return (

    <Box  sx={{ borderBottom: 1, borderColor: 'divider', width: '100%' }} >
      <Tabs
        value={props.a}
        aria-label="secondary tabs example"
      >
        <Tab value="0" label="Manufacturers" href="/admin/dashboard/vehicle_settings/manufacturers" />
        <Tab value="1" label="Models" href="/admin/dashboard/vehicle_settings/models" />
        <Tab value="2" label="Fuel Type" href="/admin/dashboard/vehicle_settings/fuel_type"
        />
      </Tabs>
    </Box>
  );
}
