import { Box } from '@mui/material'
import ActionDialog from 'components/common/Dialog/ActionDialog'
import MoreActionDialog from 'components/common/Dialog/MoreActionDialog'

export const adminServiceProviderColumn =[
    { title: "Service Provider", field: "sp_name" },
    { title: "Vehicle Number", field: "vehicle_number" },
    { title: "Appointment Date", field: "appointment_date" },
    { title: "Appointment Time", field: "appointment_time" },
    { title: "Appointment Status", field: "appointment_status" },
    {
        title: 'Action', render: (rowData) =>
            <Box display='flex'>
                <MoreActionDialog
                    rowData={rowData}
                />
                <ActionDialog
                    key='edit Estimate'
                    editEmployee
                    rowData={rowData}

                />
                <ActionDialog
                    key='edit Estimate'
                    deleteEmployee
                    rowData={rowData}

                />
            </Box>
    }
]