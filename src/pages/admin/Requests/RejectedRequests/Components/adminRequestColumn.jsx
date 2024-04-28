import { Box } from '@mui/material'
import ActionDialog from 'components/common/Dialog/ActionDialog'
import MoreActionDialog from 'components/common/Dialog/MoreActionDialog'

export const adminRequestColumn = [
    { title: "Id", field: "register_sp_id" },
    { title: "Name", field: "name" },
    { title: "Business name", field: "business_name" },
    { title: "Email", field: "email" },
    { title: "Mobile Number", field: "business_contact" },
    // { title: "Appointment Time", field: "appointment_time" },
    // { title: "Appointment Status", field: "appointment_status" },
    {
        title: 'Action', render: (rowData) =>
            <Box display='flex'>
                <MoreActionDialog
                    rowData={rowData}
                />
            </Box>
    }
]