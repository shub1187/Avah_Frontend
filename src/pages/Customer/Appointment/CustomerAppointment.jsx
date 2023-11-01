// import { Box } from '@mui/material'
// import AddCustomerAppointmentDialog from 'components/CustomerComponents/Dialog/Appointment/AddCustomerAppointmentDialog'
// import TableCustomerMobileDetails from 'components/CustomerComponents/MobileView/TableCustomerMobileDetails'
// import AddCustomerAppointmentColumn from 'components/CustomerComponents/Table/Columns/Appointment/AddCustomerAppointmentColymn'
// import CustomerTable from 'components/CustomerComponents/Table/CustomerTable'
// import { useMobileResponsive } from 'hooks/useMobileResponsive'
// import React from 'react'

// const CustomerAppointment = () => {
//   const {isMobile} = useMobileResponsive()
//   return (
//     <div>
//       {isMobile?
//       <TableCustomerMobileDetails URL={'http://localhost:3008/api/customer/getAllPendingApprovedAppointment'}/>
//       :
//           <CustomerTable DialogButton={AddCustomerAppointmentDialog} columnss={AddCustomerAppointmentColumn}  URL={'http://localhost:3008/api/customer/getAllPendingApprovedAppointment'}/>
//       }
//     </div>
//   )
// }


// export default CustomerAppointment

import ServiceProvidertable from 'components/spComponents/Table/ServiceProviderTable'
import React, { useEffect, useState } from 'react'
import CreateAppointmentDialog from 'components/spComponents/Dialog/Service/CreateAppointmentDialog'
import { createAppointmentColumn } from 'components/spComponents/Table/Columns/Service/CreateAppointmentColumn'
import { Box, Button } from '@mui/material'
import CreateCustomerDialog from 'components/spComponents/Dialog/Users/createCustomerDialog'
import { createCustomerColumn } from 'components/spComponents/Table/Columns/Users/CreateCustomerColumn'
import CustomerTable from 'components/CustomerComponents/Table/CustomerTable'
import AddCustomerAppointmentDialog from 'components/CustomerComponents/Dialog/Appointment/AddCustomerAppointmentDialog'
import { useMobileResponsive } from 'hooks/useMobileResponsive'
import TableCustomerMobileDetails from 'components/CustomerComponents/MobileView/TableCustomerMobileDetails'
import AddCustomerAppointmentColumn from 'components/CustomerComponents/Table/Columns/Appointment/AddCustomerAppointmentColymn'
const CustomerAppointment = () => {
  
  const [tableCalled,setTableCalled] = useState(false)
  const [toggle,setToggle] = useState('appointment')
  const {isMobile} = useMobileResponsive()
  return (
    <>
      <Box pb={2} sx={{backgroundColor:'rgb(244,248,249)'}} display={'flex'} justifyContent={'center'} >
        <Button sx={{minHeight:'52px', minWidth:"235px"}} variant={toggle==='appointment'?'contained':'outlined'} color='options' onClick={()=>setToggle('appointment')}>APPOINTMENT</Button>
        <Button sx={{minHeight:'52px', minWidth:"235px"}}  variant={toggle==='rejected'?'contained':'outlined'} color='options' onClick={()=>setToggle('rejected')}>REJECTED</Button>
      
      </Box>
      {toggle==='appointment'?
        isMobile?
          <TableCustomerMobileDetails/> 
        :
          <CustomerTable key={'appointment'} DialogButton={AddCustomerAppointmentDialog} columnss={AddCustomerAppointmentColumn} URL={`http://localhost:3008/api/customer/getAllPendingApprovedAppointment`}/>
       :
      <CustomerTable key={'rejected'} columnss={AddCustomerAppointmentColumn} URL={`http://localhost:3008/api/customer/getAllRejectedCancelledAppointment`}/>

        }

    </>
  )
}

export default CustomerAppointment