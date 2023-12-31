import  { useState } from 'react'
import { Box, Button } from '@mui/material'
// import CustomerTable from 'components/CustomerComponents/Table/CustomerTable'
import { useMobileResponsive } from 'hooks/useMobileResponsive'
import TableCustomerMobileDetails from 'components/common/Mobile/TableCustomerMobileDetails'
import AddCustomerAppointmentColumn from 'pages/Customer/Appointment/Components/AddCustomerAppointmentColymn'
import CustomerTable from 'components/common/Table/CustomerTable'
import AddCustomerAppointmentDialog from './Components/AddCustomerAppointmentDialog'
const CustomerAppointment = () => {
  
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
          
          <CustomerTable
            key={'appointment'}
            DialogButton={AddCustomerAppointmentDialog}
            columnss={AddCustomerAppointmentColumn} 
            URL={`http://localhost:3008/api/customer/getAllPendingApprovedAppointment`}
            dialogButtonName={'CREATE APPOINTMENT'}
            dialogTitle={'CREATE APPOINTMENT'}
            />
       :
      <CustomerTable
        key={'rejected'}
        columnss={AddCustomerAppointmentColumn} 
        URL={`http://localhost:3008/api/customer/getAllRejectedCancelledAppointment`}
        dialogButtonName={'CREATE APPOINTMENT'}
        dialogTitle={'CREATE APPOINTMENT'}        />

        }

    </>
  )
}

export default CustomerAppointment