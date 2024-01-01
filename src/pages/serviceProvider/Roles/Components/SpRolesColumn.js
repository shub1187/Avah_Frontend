import { Box } from "@mui/material";
import ActionDialog from "components/common/Dialog/ActionDialog";
import MoreActionDialog from "components/common/Dialog/MoreActionDialog";
import URL from "url/apiURL"

const {deleteSpare} = URL.SERVICE_PROVIDER.SPARES

export const SpRolesColumn = [
    { title: "Role Id ", field: "role_id" },
    { title: "Role ", field: "role_name" },
    { title: "Permission", field: "permission_granted" },
    { title: "Action", render: (rowData)=>
        (<Box>
            <MoreActionDialog rowData={rowData}/>
            <ActionDialog
                editRole
                url={deleteSpare}
                payload={{'spare_id':rowData?.spare_id}} 
                rowData={ rowData}
            />
            <ActionDialog
                deleteRole
                url={deleteSpare}
                payload={{'spare_id':rowData?.spare_id}} 
                rowData={ rowData}
            />

        </Box>)
    }]
