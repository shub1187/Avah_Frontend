import { Box, Chip, createMuiTheme, createTheme, Switch, ThemeProvider } from '@mui/material'
import ActionDialog from 'components/common/Dialog/ActionDialog'
import MoreActionDialog from 'components/common/Dialog/MoreActionDialog'
import { CustomSwitch } from './CustomSwitch'

export const adminServiceProviderApprovedColumn =[
    { title: "Id", field: "sp_id" },
    { title: "Name", field: "name" },
    { title: "Business", field: "business_name" },
    { title: "Email", field: "email" },
    { title: "Mobile Number", field: "business_contact" },
    { title: "Status", field: "sp_status", render:(rowData)=>
        <>
            <CustomSwitch rowData={rowData}/>
            <Chip label={`${rowData?.sp_status==='Active'?'Active':'Inactive'}`} color={`${rowData?.sp_status==='Active'?'success':'error'}`}/>
        </>
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
                    type={'approved'}
                />
            </Box>
    }
]