import { Box } from '@mui/material'
import ActionDialog from 'components/common/Dialog/ActionDialog'
import MoreActionDialog from 'components/common/Dialog/MoreActionDialog'

export const adminServiceProviderApprovedColumn =[
    { title: "Id", field: "sp_id" },
    { title: "Name", field: "name" },
    { title: "Business", field: "business_name" },
    { title: "Email", field: "email" },
    { title: "Mobile Number", field: "business_contact" },
    { title: "Status", field: "sp_status" },
    {
        title: 'Action', render: (rowData) =>
            <Box display='flex'>
                <MoreActionDialog
                    rowData={rowData}
                />
            </Box>
    }
]