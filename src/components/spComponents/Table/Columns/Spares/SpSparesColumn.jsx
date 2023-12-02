import { Box } from "@mui/material"
import ActionDialog from "components/common/Dialog/ActionDialog"
import MoreActionDialog from "components/common/Dialog/MoreActionDialog"
import URL from "url/apiURL"

const {deleteSpare} = URL.SERVICE_PROVIDER.SPARES

export const SpcreateSparesColumn = [
    { title: "Spare Name", field: "spare_name" },
    { title: "HSN/SAC", field: "hsn_sac" },
    { title: "Part Number", field: "part_number" },
    { title:'Selling Price', field : 'selling_price'},
    { title: "Tax %", field: "tax" },
    { title :'Action', render : (rowData)=>
        <Box display='flex'>
            <MoreActionDialog rowData={rowData}/>
            <ActionDialog
                deleteSpare
                url={deleteSpare}
                payload={{'spare_id':rowData?.spare_id}} 
                rowData={ rowData}
                />
        </Box>
    }
]
