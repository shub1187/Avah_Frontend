import ServiceProvidertable from 'components/spComponents/Table/ServiceProviderTable'
import React from 'react'
import CreateAppointmentDialog from 'components/spComponents/Dialog/Service/CreateAppointmentDialog'
import { createAppointmentColumn } from 'components/spComponents/Table/Columns/Service/CreateAppointmentColumn'
const AppointmentList = () => {
  return (
    <div><ServiceProvidertable DialogButton={CreateAppointmentDialog} columnss={createAppointmentColumn} URL={'http://localhost:3008/api/serviceprovider/getAllAppointment'}/></div>
  )
}

export default AppointmentList