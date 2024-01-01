import { Box } from "@mui/material";
import ActionDialog from "components/common/Dialog/ActionDialog";
import MoreActionDialog from "components/common/Dialog/MoreActionDialog";
import URL from "url/apiURL"

const {deleteSpare} = URL.SERVICE_PROVIDER.SPARES
export const createEmployeeColumn = [
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Mobile", field: "mobile" },
    { title: "Gender", field: "gender" },
    { title: "Role", field: "role" },
    { title: "Status", field: "status" },
    { title: "Action", render: (rowData)=>
        (<Box>
            <MoreActionDialog rowData={rowData}/>
            <ActionDialog
                editEmployee
                url={deleteSpare}
                payload={{'spare_id':rowData?.spare_id}} 
                rowData={ rowData}
            />
            <ActionDialog
                deleteEmployee
                url={deleteSpare}
                payload={{'spare_id':rowData?.spare_id}} 
                rowData={ rowData}
            />

        </Box>)
    }
]