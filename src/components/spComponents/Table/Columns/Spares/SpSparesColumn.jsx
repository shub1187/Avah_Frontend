import { Box } from "@mui/material"
import ActionDialog from "components/common/Dialog/ActionDialog"
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
            <ActionDialog
                deleteSpare
                url='http://localhost:3008/api/serviceprovider/deleteSpare'
                payload={{'labour_id':rowData?.spare_id}} 
                rowData={ rowData}
                />
        </Box>
    }
]
