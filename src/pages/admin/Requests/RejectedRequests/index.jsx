import { Box } from '@mui/material'
import CustomMaterialTable from 'components/common/Table/MaterialTable'
import AddCustomerVehicleColumn from 'pages/Customer/Vehicle/Components/AddCustomerVehicleColumn'
import AddCustomerVehicleDialog from 'pages/Customer/Vehicle/Components/AddCustomerVehicleDialog'
import React from 'react'
import URL from 'url/apiURL'
import { adminRequestColumn } from './Components/adminRequestColumn'

const {getAllRejectedSp} = URL.ADMIN.REQUESTS.REJECTEDREQUESTS
const AdminRejectedRequestsPage = () => {
    return (
        <Box backgroundColor='red' mt={2}>
                <CustomMaterialTable
                //  dialogTitle={'ADD VEHICLE'}
                //  dialogButtonName={'ADD NEW VEHICLE'}
                //  DialogButton={AddCustomerVehicleDialog} 
                 columnss={adminRequestColumn} 
                 URL={getAllRejectedSp}/>
        </Box>
      )
}

export default AdminRejectedRequestsPage