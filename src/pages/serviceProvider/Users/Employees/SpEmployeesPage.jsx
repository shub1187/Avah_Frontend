import CreateEmployeeDialog from 'components/spComponents/Dialog/Users/createEmployeeDialog'
import { createEmployeeColumn } from 'components/spComponents/Table/Columns/Users/CreateEmployeeColumn'
import ServiceProvidertable from 'components/spComponents/Table/ServiceProviderTable'

const SpEmployeesPage = () => {
  return (
    <div><ServiceProvidertable DialogButton={CreateEmployeeDialog} columnss={createEmployeeColumn}/></div>
  )
}

export default SpEmployeesPage