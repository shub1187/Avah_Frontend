import { Box } from '@mui/material'
import AddCustomerVehicleDialog from 'components/CustomerComponents/Dialog/Vehicle/AddCustomerVehicleDialog'
import AddCustomerVehicleColumn from 'components/CustomerComponents/Table/Columns/Vehicle/AddCustomerVehicleColumn'
import CustomerTable from 'components/CustomerComponents/Table/CustomerTable'
import React from 'react'

const CustomerVehicle = () => {
  return (
    <Box backgroundColor='red' mt={2}>
            <CustomerTable DialogButton={AddCustomerVehicleDialog} columnss={AddCustomerVehicleColumn}/>
    </Box>
  )
}

export default CustomerVehicle