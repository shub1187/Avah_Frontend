import { Box } from '@mui/material'
import ActionDialog from 'components/common/Dialog/ActionDialog'
import MoreActionDialog from 'components/common/Dialog/MoreActionDialog'
import URL from 'url/apiURL'

const {approveServiceProvider,getSpecificPendingSpDocument} = URL.ADMIN.REQUESTS.PENDINGREQUESTS


export const adminPendingRequestsColumn =[
    { title: "Id", field: "register_sp_id" },
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
                <ActionDialog
                    key="approveServiceProvider"
                    approveSp
                    url={approveServiceProvider}
                    payload={{ sp_status:'active',approval_status:true,email:rowData.email}}
                    rowData={rowData}
                />
                <ActionDialog
                    key="rejectServiceProvider"
                    rejectSp
                    url={approveServiceProvider}
                    payload={{ sp_status:'inactive',approval_status:false,email:rowData.email}}
                    rowData={rowData}
                />
                <ActionDialog
                    key="documentViewer"
                    // url={`${getSpecificPendingSpDocument}?register_sp_id=${rowData?.register_sp_id}`}
                    documentViewer
                    rowData={rowData}
                    type={'pending'}
                />
            </Box>
    }
]