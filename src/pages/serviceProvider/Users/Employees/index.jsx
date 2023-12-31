import CreateEmployeeDialog from 'pages/serviceProvider/Users/Employees/Components/createEmployeeDialog'
import { createEmployeeColumn } from 'pages/serviceProvider/Users/Employees/Components/CreateEmployeeColumn'
import ServiceProvidertable from 'components/spComponents/Table/ServiceProviderTable'

const SpEmployeesPage = () => {
  return (
    <div><ServiceProvidertable DialogButton={CreateEmployeeDialog} columnss={createEmployeeColumn}/></div>
  )
}

export default SpEmployeesPage