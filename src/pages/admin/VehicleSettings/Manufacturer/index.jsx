import { Box } from '@mui/material'
import CustomMaterialTable from 'components/common/Table/MaterialTable'
import AddManufacturerDialog from './Components/DialogAddManufacturer'
import { addManufacturerAdminColumn } from './Components/ColumnAddManufacturerAdmin'
import URL from 'url/apiURL'

const {getAllBrands} = URL.ADMIN.VEHICLESETTINGS.MANUFACTURER
const AdminVehicleManufacturerPage = () => {
    return (
        <Box backgroundColor='red' mt={2}>
                <CustomMaterialTable
                 dialogTitle={'ADD MANUFACTURER'}
                 dialogButtonName={'ADD MANUFACTURER'}
                 DialogButton={AddManufacturerDialog} 
                 columnss={addManufacturerAdminColumn} 
                 URL={getAllBrands}/>
        </Box>
      )
  }
  
  export default AdminVehicleManufacturerPage