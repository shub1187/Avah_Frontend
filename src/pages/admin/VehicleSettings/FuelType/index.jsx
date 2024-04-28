import { Box } from '@mui/material'
import CustomMaterialTable from 'components/common/Table/MaterialTable'
import AddCustomerVehicleColumn from 'pages/Customer/Vehicle/Components/AddCustomerVehicleColumn'
import AddCustomerVehicleDialog from 'pages/Customer/Vehicle/Components/AddCustomerVehicleDialog'

const AdminVehicleFuelPage = () => {
    return (
        <Box backgroundColor='red' mt={2}>
                <CustomMaterialTable
                 dialogTitle={'ADD VEHICLE'}
                 dialogButtonName={'ADD NEW VEHICLE'}
                 DialogButton={AddCustomerVehicleDialog} 
                 columnss={AddCustomerVehicleColumn} 
                 URL={"http://localhost:3008/api/customer/getCustomerVehicle"}/>
        </Box>
      )
  }
  
  export default AdminVehicleFuelPage