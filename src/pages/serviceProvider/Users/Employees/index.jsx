import CreateEmployeeDialog from 'pages/serviceProvider/Users/Employees/Components/createEmployeeDialog'
import { createEmployeeColumn } from 'pages/serviceProvider/Users/Employees/Components/CreateEmployeeColumn'
import ServiceProvidertable from 'components/spComponents/Table/ServiceProviderTable'
import URL from 'url/apiURL'

const {getAllEmployee} = URL.SERVICE_PROVIDER.USERS.EMPLOYEES
const SpEmployeesPage = () => {
  return (
    <div>
      <ServiceProvidertable 
        DialogButton={CreateEmployeeDialog} 
        key={'employees'} 
        columnss={createEmployeeColumn} 
        dialogButtonName={'ADD EMPLOYEES'}
        dialogTitle={'ADD EMPLOYEES'}
        URL={getAllEmployee}/>
      </div>
  )
}

export default SpEmployeesPage