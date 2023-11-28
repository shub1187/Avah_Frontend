import { Box } from "@mui/material"
import MoreActionDialog from "components/common/Dialog/MoreActionDialog"

export const SpcreateSparesColumn = [
    { title: "Spare Name", field: "spare_name" },
    { title: "HSN/SAC", field: "hsn_sac" },
    { title: "Part Number", field: "part_number" },
    { title:'Selling Price', field : 'selling_price'},
    { title: "Tax %", field: "tax" },
    { title :'Action', render : (rowData)=>
        <Box display='flex'>
            <MoreActionDialog rowData={rowData}/>
        </Box>
    }
]
