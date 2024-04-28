import { Box } from '@mui/material'
import CustomMaterialTable from 'components/common/Table/MaterialTable'
import { columnAdminFuelType } from './Components/columnAdminFuelType'
import DialogFuelTypeAdmin from './Components/DialogFuelTypeAdmin'
import URL from 'url/apiURL'

const {getAllFuelTypes} = URL.ADMIN.VEHICLESETTINGS.FUELTYPE
const AdminVehicleFuelPage = () => {
    return (
        <Box backgroundColor='red' mt={2}>
                <CustomMaterialTable
                 dialogTitle={'ADD FUEL TYPE'}
                 dialogButtonName={'ADD FUEL TYPE'}
                 DialogButton={DialogFuelTypeAdmin} 
                 columnss={columnAdminFuelType} 
                 URL={getAllFuelTypes}/>
        </Box>
      )
  }
  
  export default AdminVehicleFuelPage