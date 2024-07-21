import { Box, Chip } from '@mui/material'
import ActionDialog from 'components/common/Dialog/ActionDialog'
import MoreActionDialog from 'components/common/Dialog/MoreActionDialog'

export const adminServiceProviderRejectedColumn =[
    { title: "Id", field: "register_sp_id" },
    { title: "Name", field: "name" },
    { title: "Business", field: "business_name" },
    { title: "Email", field: "email" },
    { title: "Mobile Number", field: "business_contact" },
    { title: "Status", field: "sp_status", render:(rowData)=>
        <Chip label={`${rowData?.sp_status==='Active'?'Active':'Inactive'}`} color={`${rowData?.sp_status==='Active'?'success':'error'}`}/>
    },
    {
        title: 'Action', render: (rowData) =>
            <Box display='flex'>
                <MoreActionDialog
                    rowData={rowData}
                />
                 <ActionDialog
                    key="documentViewer"
                    // url={`${getSpecificPendingSpDocument}?register_sp_id=${rowData?.register_sp_id}`}
                    documentViewer
                    rowData={rowData}
                    type={'rejected'}
                />
            </Box>
    }
]