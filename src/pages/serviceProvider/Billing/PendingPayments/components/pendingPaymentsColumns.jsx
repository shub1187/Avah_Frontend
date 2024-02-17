import { Box } from "@mui/material";
import ActionDialog from "components/common/Dialog/ActionDialog";

export const pendingPaymentsColumns =(setPage,setEyeIconValue)=> [
    {title:'Invoice Number',field:'invoice_number'},
    // {title:'Jobcard Number',field:'jobcard_number'},
    {title:'Customer Name',field:'name'}, 
    {title:'Customer Mobile',field:'mobile_number'}, 
    {title:'Vehicle No',field:'vehicle_number'},
    {title:'Invoice Amount',field:'invoice_amount'},
    {title:'Payment Status',field:'payment_status'},
    {title:'Action',render:(rowData)=>
        <Box>
            <ActionDialog
                key='edit Estimate'
                viewJobCard
                url={'http://localhost:3008/api/serviceprovider/approveCustAppointment'}
                rowData={rowData}
                setPage={setPage}
                setEyeIconValue={setEyeIconValue}
            />
        </Box>
    }
]