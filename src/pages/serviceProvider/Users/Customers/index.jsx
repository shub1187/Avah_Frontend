import CreateCustomerDialog from 'pages/serviceProvider/Users/Customers/Components/createCustomerDialog'
import { createCustomerColumn } from 'pages/serviceProvider/Users/Customers/Components/CreateCustomerColumn'
import CustomMaterialTable from 'components/common/Table/MaterialTable'

const SpCustomerPage = () => {
  return (
    <div>
      <CustomMaterialTable
        title={'ADD CUSTOMER'} 
        DialogButton={CreateCustomerDialog} 
        columnss={createCustomerColumn}
      />
    </div>
  )
}
 
export default SpCustomerPage