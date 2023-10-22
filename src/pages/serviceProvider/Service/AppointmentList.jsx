import ServiceProvidertable from 'components/spComponents/Table/ServiceProviderTable'
import React, { useEffect, useState } from 'react'
import CreateAppointmentDialog from 'components/spComponents/Dialog/Service/CreateAppointmentDialog'
import { createAppointmentColumn } from 'components/spComponents/Table/Columns/Service/CreateAppointmentColumn'
import { Box, Button } from '@mui/material'
import CreateCustomerDialog from 'components/spComponents/Dialog/Users/createCustomerDialog'
import { createCustomerColumn } from 'components/spComponents/Table/Columns/Users/CreateCustomerColumn'
import CustomerTable from 'components/CustomerComponents/Table/CustomerTable'
const AppointmentList = () => {
  
  const [tableCalled,setTableCalled] = useState(false)
  const [toggle,setToggle] = useState('appointment')

    // if(toggle==='appointment'){
    //   return (<>
    //   <Box pb={2} sx={{backgroundColor:'rgb(244,248,249)'}} display={'flex'} justifyContent={'center'} >
    //   <Button sx={{minHeight:'52px', minWidth:"235px"}} variant={toggle==='appointment'?'contained':'outlined'} color='options' onClick={()=>setToggle('appointment')}>APPOINTMENT</Button>
    //   <Button sx={{minHeight:'52px', minWidth:"235px"}}  variant={toggle==='rejected'?'contained':'outlined'} color='options' onClick={()=>setToggle('rejected')}>REJECTED</Button>
    
    // </Box>
    //   <ServiceProvidertable DialogButton={CreateAppointmentDialog} columnss={createCustomerColumn} URL={`http://localhost:3008/api/serviceprovider/getAllPendingAppointment`}/>
    //   </>)
    // }
    // if(toggle==='rejected'){
    //   return (<>
    //     <Box pb={2} sx={{ backgroundColor: 'rgb(244,248,249)' }} display={'flex'} justifyContent={'center'} >
    //       <Button sx={{ minHeight: '52px', minWidth: "235px" }} variant={toggle === 'appointment' ? 'contained' : 'outlined'} color='options' onClick={() => setToggle('appointment')}>APPOINTMENT</Button>
    //       <Button sx={{ minHeight: '52px', minWidth: "235px" }} variant={toggle === 'rejected' ? 'contained' : 'outlined'} color='options' onClick={() => setToggle('rejected')}>REJECTED</Button>

    //     </Box>
    //     <ServiceProvidertable columnss={createAppointmentColumn()} URL={`http://localhost:3008/api/serviceprovider/getAllRejectedAndCancelledAppointment`} />

    //   </>)

    // }


  const reLoadTable = ()=>setTableCalled((prev)=>!prev)
  return (
    <>
      <Box pb={2} sx={{backgroundColor:'rgb(244,248,249)'}} display={'flex'} justifyContent={'center'} >
        <Button sx={{minHeight:'52px', minWidth:"235px"}} variant={toggle==='appointment'?'contained':'outlined'} color='options' onClick={()=>setToggle('appointment')}>APPOINTMENT</Button>
        <Button sx={{minHeight:'52px', minWidth:"235px"}}  variant={toggle==='rejected'?'contained':'outlined'} color='options' onClick={()=>setToggle('rejected')}>REJECTED</Button>
      
      </Box>
      {toggle==='appointment'?
          <ServiceProvidertable key={'appointment'} DialogButton={CreateAppointmentDialog} columnss={createAppointmentColumn()} URL={`http://localhost:3008/api/serviceprovider/getAllPendingAppointment`}/>
       :
       <ServiceProvidertable key={'rejected'} columnss={createAppointmentColumn()} URL={`http://localhost:3008/api/serviceprovider/getAllRejectedAndCancelledAppointment`}/>
        }

    </>
  )
}

export default AppointmentList