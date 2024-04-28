import { Box } from '@mui/material'
import CustomMaterialTable from 'components/common/Table/MaterialTable'
import AddCustomerVehicleDialog from 'pages/Customer/Vehicle/Components/AddCustomerVehicleDialog'
import React, { useState } from 'react'
import { adminCustomerColumn } from './Components/adminCustomerColumn'
import URL from 'url/apiURL'

const {getAllCustomers} = URL.ADMIN.USER.CUSTOMER
const AdminCustomerPage = () => {

    const [page, setPage] = useState('table')
    const [eyeIconValue,setEyeIconValue] = useState([])
    return (
        <Box backgroundColor='red' mt={2}>
                <CustomMaterialTable
                //  dialogTitle={'ADD VEHICLE'}
                //  dialogButtonName={'ADD NEW VEHICLE'}
                //  DialogButton={AddCustomerVehicleDialog} 
                 columnss={adminCustomerColumn} 
                 URL={getAllCustomers}/>
        </Box>
      )
}

export default AdminCustomerPage