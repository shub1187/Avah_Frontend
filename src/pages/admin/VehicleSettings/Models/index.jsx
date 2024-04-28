import { Box } from '@mui/material'
import CustomMaterialTable from 'components/common/Table/MaterialTable'
import AddCustomerVehicleColumn from 'pages/Customer/Vehicle/Components/AddCustomerVehicleColumn'
import AddCustomerVehicleDialog from 'pages/Customer/Vehicle/Components/AddCustomerVehicleDialog'
import { addModelsAdminColumn } from './Components/columnsModels'
import ModelAdminDialog from './Components/DialogModels'
import URL from 'url/apiURL'

const {getAllModels} = URL.ADMIN.VEHICLESETTINGS.MODELS

const AdminVehicleModelsPage = () => {
    return (
        <Box backgroundColor='red' mt={2}>
                <CustomMaterialTable
                 dialogTitle={'ADD MODELS'}
                 dialogButtonName={'ADD NEW MODEL'}
                 DialogButton={ModelAdminDialog} 
                 columnss={addModelsAdminColumn} 
                 URL={getAllModels}/>
        </Box>
      )
}

export default AdminVehicleModelsPage