import { Box } from "@mui/material";
import ActionDialog from "components/common/Dialog/ActionDialog";

export const jobCardColumn =(setPage,setEyeIconValue)=> [
    {title:'JobCard Number',field:'estimate_number'},
    {title:'Name',field:'name'},
    {title:'Vehicle No',field:'vehicle_number'},
    {title:'Estimate Status',field:'estimate_status'},
    {title:'Jobcard Status',field:'jobcard_status'},
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