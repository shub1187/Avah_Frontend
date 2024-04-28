import { Box } from '@mui/material'
import CustomMaterialTable from 'components/common/Table/MaterialTable'
import AddManufacturerDialog from './Components/DialogAddManufacturer'
import { addManufacturerAdminColumn } from './Components/ColumnAddManufacturerAdmin'

const AdminVehicleManufacturerPage = () => {
    return (
        <Box backgroundColor='red' mt={2}>
                <CustomMaterialTable
                 dialogTitle={'ADD MANUFACTURER'}
                 dialogButtonName={'ADD MANUFACTURER'}
                 DialogButton={AddManufacturerDialog} 
                 columnss={addManufacturerAdminColumn} 
                 URL={"http://localhost:3008/api/customer/getCustomerVehicle"}/>
        </Box>
      )
  }
  
  export default AdminVehicleManufacturerPage