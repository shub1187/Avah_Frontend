import ActionDialog from "components/common/Dialog/ActionDialog"

export const spLabourColumns =  [
    { title: "Labour Description", field: "labour_name" },
    { title: "HSN/SAC", field: "hsn_sac" },
    { title: "Price", field: "price" },
    { title: "Tax %", field: "tax" },
    { title: 'Action', render: (rowData) => 
            <ActionDialog
                deleteLabour
                url='http://localhost:3008/api/serviceprovider/deleteLabour'
                payload={{'labour_id':rowData?.labour_id}} 
                rowData={ rowData}
               
                />
        
    }
]