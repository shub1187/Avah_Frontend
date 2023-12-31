import ActionDialog from "components/common/Dialog/ActionDialog"
import URL from "url/apiURL"

const {deleteLabour} = URL.SERVICE_PROVIDER.LABOURS

export const spLabourColumns =  [
    { title: "Labour Description", field: "labour_name" },
    { title: "HSN/SAC", field: "hsn_sac" },
    { title: "Price", field: "selling_price" },
    { title: "Tax %", field: "tax" },
    { title: 'Action', render: (rowData) => 
            <ActionDialog
                deleteLabour
                url={deleteLabour}
                payload={{'labour_id':rowData?.labour_id}} 
                rowData={ rowData}
                />
        
    }
]