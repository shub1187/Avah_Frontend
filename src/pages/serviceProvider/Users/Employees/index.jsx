import CreateEmployeeDialog from 'pages/serviceProvider/Users/Employees/Components/createEmployeeDialog'
import { createEmployeeColumn } from 'pages/serviceProvider/Users/Employees/Components/CreateEmployeeColumn'
import URL from 'url/apiURL'
import CustomMaterialTable from 'components/common/Table/MaterialTable'

const {getAllEmployee} = URL.SERVICE_PROVIDER.USERS.EMPLOYEES
const SpEmployeesPage = () => {
  return (
    <div>
      <CustomMaterialTable 
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