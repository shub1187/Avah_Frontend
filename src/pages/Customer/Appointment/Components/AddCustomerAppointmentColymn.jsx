import { Box } from '@mui/material'
import ActionDialog from 'components/common/Dialog/ActionDialog'
import MoreActionDialog from 'components/common/Dialog/MoreActionDialog'
import React from 'react'

const AddCustomerAppointmentColumn = (setPage,setEyeIconValue)=>([
    { title: "Service Provider", field: "sp_name" },
    { title: "Vehicle Number", field: "vehicle_number" },
    { title: "Appointment Date", field: "appointment_date"},
    { title: "Appointment Time", field: "appointment_time"},
    { title: "Appointment Status", field: "appointment_status"},
    {title:'Action',render:(rowData)=>
        <Box display='flex'>
            <MoreActionDialog 
                rowData={rowData} 
            />
            {rowData.estimate_status === 'Created' && (
            <ActionDialog
                viewEstimate
                rowData={rowData}
                setPage={setPage}
                setEyeIconValue={setEyeIconValue}
            />
            )}
            <ActionDialog
                downloadPdf
            />
            <ActionDialog
                print
            />
        </Box>
    }
])
export default AddCustomerAppointmentColumn