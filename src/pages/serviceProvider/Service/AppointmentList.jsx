import ServiceProvidertable from 'components/spComponents/Table/ServiceProviderTable'
import React from 'react'
import CreateAppointmentDialog from 'components/spComponents/Dialog/Service/CreateAppointmentDialog'
import { createAppointmentColumn } from 'components/spComponents/Table/Columns/Service/CreateAppointmentColumn'
const AppointmentList = () => {
  return (
    <div><ServiceProvidertable DialogButton={CreateAppointmentDialog} columnss={createAppointmentColumn} /></div>
  )
}

export default AppointmentList