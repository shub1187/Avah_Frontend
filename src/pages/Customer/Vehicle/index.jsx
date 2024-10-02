import { Box } from '@mui/material'
import AddCustomerVehicleDialog from 'pages/Customer/Vehicle/Components/AddCustomerVehicleDialog'
import AddCustomerVehicleColumn from 'pages/Customer/Vehicle/Components/AddCustomerVehicleColumn'
import React from 'react'
import CustomMaterialTable from 'components/common/Table/MaterialTable'
import URL from 'url/apiURL'

const {getCustomerVehicle} = URL.CUSTOMER.VEHICLE
const CustomerVehicle = () => {
  return (
    <Box backgroundColor='red' mt={2}>
            <CustomMaterialTable
             dialogTitle={'ADD VEHICLE'}
             dialogButtonName={'ADD NEW VEHICLE'}
             DialogButton={AddCustomerVehicleDialog} 
             columnss={AddCustomerVehicleColumn} 
             URL={getCustomerVehicle}/>
    </Box>
  )
}

export default CustomerVehicle