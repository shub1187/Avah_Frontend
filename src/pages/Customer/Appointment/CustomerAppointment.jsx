import { Box } from '@mui/material'
import AddCustomerAppointmentDialog from 'components/CustomerComponents/Dialog/Appointment/AddCustomerAppointmentDialog'
import TableCustomerMobileDetails from 'components/CustomerComponents/MobileView/TableCustomerMobileDetails'
import AddCustomerAppointmentColumn from 'components/CustomerComponents/Table/Columns/Appointment/AddCustomerAppointmentColymn'
import CustomerTable from 'components/CustomerComponents/Table/CustomerTable'
import { useMobileResponsive } from 'hooks/useMobileResponsive'
import React from 'react'

const CustomerAppointment = () => {
  const {isMobile} = useMobileResponsive()
  return (
    <div>
      {isMobile?
      <TableCustomerMobileDetails URL={'http://localhost:3008/api/customer/getAllRejectedCancelledAppointment'}/>
      :
          <CustomerTable DialogButton={AddCustomerAppointmentDialog} columnss={AddCustomerAppointmentColumn}  URL={'http://localhost:3008/api/customer/getAllRejectedCancelledAppointment'}/>
      }
    </div>
  )
}


export default CustomerAppointment