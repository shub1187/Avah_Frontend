import { Box } from '@mui/material'
import ActionDialog from 'components/common/Dialog/ActionDialog'
import MoreActionDialog from 'components/common/Dialog/MoreActionDialog'
import React from 'react'

const AddCustomerAppointmentColumn = [
    { title: "Name", field: "name" },
    { title: "Vehicle Number", field: "vehicle_number" },
    { title: "Appointment Date", field: "appointment_date"},
    { title: "Appointment Time", field: "appointment_time"},
    { title: "Appointment Status", field: "appointment_status"},
    {title:'Action',render:(rowData)=>
        <Box display='flex'>
            <MoreActionDialog 
                rowData={rowData} 
            />
        </Box>
    }
]
export default AddCustomerAppointmentColumn