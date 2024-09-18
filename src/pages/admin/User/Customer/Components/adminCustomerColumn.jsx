import { Box } from '@mui/material'
import ActionDialog from 'components/common/Dialog/ActionDialog'
import MoreActionDialog from 'components/common/Dialog/MoreActionDialog'

export const adminCustomerColumn = [
    { title: "Id", field: "customer_id" },
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Mobile Number", field: "mobile_number" },
    // { title: "Appointment Time", field: "appointment_time" },
    // { title: "Appointment Status", field: "appointment_status" },
    {
        title: 'Action', render: (rowData) =>
            <Box display='flex'>
                <MoreActionDialog
                    rowData={rowData}
                />
                {/* <ActionDialog
                    key='edit Estimate'
                    editEmployee
                    rowData={rowData}
                />
                <ActionDialog
                    key='edit Estimate'
                    deleteEmployee
                    rowData={rowData}
                /> */}
            </Box>
    }
]