import { Box } from '@mui/material'
import CustomMaterialTable from 'components/common/Table/MaterialTable'
import AddCustomerVehicleColumn from 'pages/Customer/Vehicle/Components/AddCustomerVehicleColumn'
import AddCustomerVehicleDialog from 'pages/Customer/Vehicle/Components/AddCustomerVehicleDialog'
import React from 'react'
import { adminPendingRequestsColumn } from './Components/adminPendingRequestsColumn'
import URL from 'url/apiURL'

const {spRequest} = URL.ADMIN.REQUESTS.PENDINGREQUESTS
const AdminPendingRequestsPage = () => {
    return (
        <Box backgroundColor='red' mt={2}>
                <CustomMaterialTable
                //  dialogTitle={'ADD VEHICLE'}
                //  dialogButtonName={'ADD NEW VEHICLE'}
                //  DialogButton={AddCustomerVehicleDialog} 
                 columnss={adminPendingRequestsColumn} 
                 URL={spRequest}/>
        </Box>
      )
}

export default AdminPendingRequestsPage