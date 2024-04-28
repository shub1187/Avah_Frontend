import React, { useState } from 'react'
import AddCustomerVehicleDialog from 'pages/Customer/Vehicle/Components/AddCustomerVehicleDialog'
import { Box } from '@mui/material'
import CustomMaterialTable from 'components/common/Table/MaterialTable'
import { adminServiceProviderRejectedColumn } from './Components/rejectedColumn'
import URL from 'url/apiURL'

const {getAllRejectedSp} = URL.ADMIN.USER.SERVICEPROVIDER

const AdminServiceProviderRejectedPage = () => {
    return (
        <Box backgroundColor='red' mt={2}>
                <CustomMaterialTable
                 columnss={adminServiceProviderRejectedColumn} 
                 URL={getAllRejectedSp}/>
        </Box>
      )
}

export default AdminServiceProviderRejectedPage