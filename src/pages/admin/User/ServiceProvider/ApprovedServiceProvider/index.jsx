import  { useState } from 'react'
import AddCustomerVehicleDialog from 'pages/Customer/Vehicle/Components/AddCustomerVehicleDialog'
import { Box } from '@mui/material'
import CustomMaterialTable from 'components/common/Table/MaterialTable'
import { adminServiceProviderApprovedColumn } from './Components/adminServiceProviderColumn'
import URL from 'url/apiURL'

const {getAllApprovedSp} = URL.ADMIN.USER.SERVICEPROVIDER

const AdminServiceProviderApprovedPage = () => {
    return (
        <Box backgroundColor='red' mt={2}>
                <CustomMaterialTable
                 columnss={adminServiceProviderApprovedColumn} 
                 URL={getAllApprovedSp}/>
        </Box>
      )
}

export default AdminServiceProviderApprovedPage