import React, { useState } from 'react'
import AddCustomerVehicleDialog from 'pages/Customer/Vehicle/Components/AddCustomerVehicleDialog'
import { Box } from '@mui/material'
import CustomMaterialTable from 'components/common/Table/MaterialTable'
import { adminServiceProviderColumn } from './Components/adminServiceProviderColumn'

const AdminServiceProviderPage = () => {
    const [page, setPage] = useState('table')
    const [eyeIconValue,setEyeIconValue] = useState([])
    return (
        <Box backgroundColor='red' mt={2}>
                <CustomMaterialTable
                 dialogTitle={'ADD VEHICLE'}
                 dialogButtonName={'ADD NEW VEHICLE'}
                 DialogButton={AddCustomerVehicleDialog} 
                 columnss={adminServiceProviderColumn} 
                 URL={"http://localhost:3008/api/customer/getCustomerVehicle"}/>
        </Box>
      )
}

export default AdminServiceProviderPage