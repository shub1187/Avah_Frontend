import { Box } from '@mui/material'
import AddCustomerVehicleDialog from 'pages/Customer/Vehicle/Components/AddCustomerVehicleDialog'
import AddCustomerVehicleColumn from 'pages/Customer/Vehicle/Components/AddCustomerVehicleColumn'
import React from 'react'
import CustomerTable from 'components/common/Table/CustomerTable'

const CustomerVehicle = () => {
  return (
    <Box backgroundColor='red' mt={2}>
            <CustomerTable
             dialogTitle={'ADD VEHICLE'}
             dialogButtonName={'ADD NEW VEHICLE'}
             DialogButton={AddCustomerVehicleDialog} 
             columnss={AddCustomerVehicleColumn} 
             URL={"http://localhost:3008/api/customer/getCustomerVehicle"}/>
    </Box>
  )
}

export default CustomerVehicle