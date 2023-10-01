import AddCustomerAppointmentDialog from 'components/CustomerComponents/Dialog/Appointment/AddCustomerAppointmentDialog'
import AddCustomerAppointmentColumn from 'components/CustomerComponents/Table/Columns/Appointment/AddCustomerAppointmentColymn'
import CustomerTable from 'components/CustomerComponents/Table/CustomerTable'
import React from 'react'

const CustomerAppointment = () => {
  return (
    <div><CustomerTable DialogButton={AddCustomerAppointmentDialog} columnss={AddCustomerAppointmentColumn}  URL={''}/></div>
  )
}


export default CustomerAppointment