import CreateCustomerDialog from 'components/spComponents/Dialog/Users/createCustomerDialog'
import { createCustomerColumn } from 'components/spComponents/Table/Columns/Users/CreateCustomerColumn'
import ServiceProvidertable from 'components/spComponents/Table/ServiceProviderTable'

const SpCustomerPage = () => {
  return (
    <div><ServiceProvidertable DialogButton={CreateCustomerDialog} columnss={createCustomerColumn}/></div>
  )
}

export default SpCustomerPage