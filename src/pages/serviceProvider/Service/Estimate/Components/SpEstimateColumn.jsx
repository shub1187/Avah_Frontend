import { Box } from "@mui/material";
import ActionDialog from "components/common/Dialog/ActionDialog";
import URL from "url/apiURL"; 

const {approveCustAppointment} = URL.SERVICE_PROVIDER.SERVICE.ESTIMATE

export const SpEstimateListColumn =(setPage,setEyeIconValue)=>( [
    {title:'Estimate Number',field:'estimate_number'},
    {title:'Name',field:'name'},
    {title:'Vehicle No',field:'vehicle_number'},
    {title:'Estimate Status',field:'estimate_status'},
    {title:'Jobcard Status',field:'jobcard_status'},
    {title:'Action',render:(rowData)=>
        <Box>
            <ActionDialog
                key='edit Estimate'
                editEstimate
                url={approveCustAppointment}
                rowData={rowData}
                setPage={setPage}
                setEyeIconValue={setEyeIconValue}
            />
        </Box>
    }

])