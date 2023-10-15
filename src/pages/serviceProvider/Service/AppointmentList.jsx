import ServiceProvidertable from 'components/spComponents/Table/ServiceProviderTable'
import React, { useState } from 'react'
import CreateAppointmentDialog from 'components/spComponents/Dialog/Service/CreateAppointmentDialog'
import { createAppointmentColumn } from 'components/spComponents/Table/Columns/Service/CreateAppointmentColumn'
const AppointmentList = () => {
  
  const [tableCalled,setTableCalled] = useState(false)
  const reLoadTable = ()=>setTableCalled((prev)=>!prev)
  return (
    <div><ServiceProvidertable DialogButton={CreateAppointmentDialog} columnss={createAppointmentColumn(reLoadTable)} URL={`http://localhost:3008/api/serviceprovider/getAllPendingAppointment`}/></div>
  )
}

export default AppointmentList