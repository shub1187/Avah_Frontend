import CreateCustomerDialog from 'pages/serviceProvider/Users/Customers/Components/createCustomerDialog'
import { createCustomerColumn } from 'pages/serviceProvider/Users/Customers/Components/CreateCustomerColumn'
import ServiceProvidertable from 'components/spComponents/Table/ServiceProviderTable'

const SpCustomerPage = () => {
  return (
    <div>
      <ServiceProvidertable
        title={'ADD CUSTOMER'} 
        DialogButton={CreateCustomerDialog} 
        columnss={createCustomerColumn}
      />
    </div>
  )
}
 
export default SpCustomerPage