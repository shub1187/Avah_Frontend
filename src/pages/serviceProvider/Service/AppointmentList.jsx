import ServiceProvidertable from 'components/spComponents/Table/ServiceProviderTable'
import React, { useState } from 'react'
import CreateAppointmentDialog from 'components/spComponents/Dialog/Service/CreateAppointmentDialog'
import { createAppointmentColumn } from 'components/spComponents/Table/Columns/Service/CreateAppointmentColumn'
import { Box, Button } from '@mui/material'
import CreateCustomerDialog from 'components/spComponents/Dialog/Users/createCustomerDialog'
import { createCustomerColumn } from 'components/spComponents/Table/Columns/Users/CreateCustomerColumn'
const AppointmentList = () => {
  
  const [tableCalled,setTableCalled] = useState(false)
  const [toggle,setToggle] = useState('appointment')

  const reLoadTable = ()=>setTableCalled((prev)=>!prev)
  return (
    <>
      <Box pb={2} sx={{backgroundColor:'rgb(244,248,249)'}} display={'flex'} justifyContent={'center'} >
        <Button sx={{minHeight:'52px', minWidth:"235px"}} variant={toggle==='appointment'?'contained':'outlined'} color='options' onClick={()=>setToggle('appointment')}>APPOINTMENT</Button>
        <Button sx={{minHeight:'52px', minWidth:"235px"}}  variant={toggle==='rejected'?'contained':'outlined'} color='options' onClick={()=>setToggle('rejected')}>REJECTED</Button>
      
      </Box>
      {toggle==='appointment'?
          <ServiceProvidertable DialogButton={CreateAppointmentDialog} columnss={createAppointmentColumn(reLoadTable)} URL={`http://localhost:3008/api/serviceprovider/getAllPendingAppointment`}/>
       :
       <ServiceProvidertable  columnss={createCustomerColumn} URL={`http://localhost:3008/api/serviceprovider/getAllPendingAppointment`}/>
       }

    </>
  )
}

export default AppointmentList