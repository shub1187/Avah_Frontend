import { Box } from "@mui/material";
import ActionDialog from "components/common/Dialog/ActionDialog";
import MoreActionDialog from "components/common/Dialog/MoreActionDialog";
import URL from "url/apiURL"

const {deleteEmployeeRole,editEmployeeRole} = URL.SERVICE_PROVIDER.ROLE

export const SpRolesColumn = [
    { title: "Role Id ", field: "role_id" },
    { title: "Role ", field: "role_name" },
    { title: "Permission", field: "permission_granted", render : (rowData)=> rowData?.permission_granted?.join(', ')},
    { title: "Action", render: (rowData)=>
        (<Box>
            <MoreActionDialog rowData={rowData}/>
            <ActionDialog
                editRole
                url={editEmployeeRole}
                payload={{'role_id':rowData?.role_id}} 
                rowData={ rowData}
            />
            <ActionDialog
                deleteRole
                url={deleteEmployeeRole}
                payload={{'role_id':rowData?.role_id}} 
                rowData={ rowData}
            />

        </Box>)
    }]
