import ActionDialog from "components/spComponents/Dialog/ActionDialog"

export const createCustomerColumn = [
    { title: "Type", field: "type" },
    { title: "Name", field: "Email" },
    { title: "Email", field: "email" },
    { title: "Number of Vehicles", field: "year" ,render:(rowData)=><Box display={'flex'}><Button variant="outlined" color="success">Enter</Button><Button variant="outlined" color="error">Reject</Button></Box>},
    { title: "Status", field: 'status' ,render:(rowData)=>{return rowData.status=="Active" ?<div style={{color:'green'}}>{rowData.status}</div>:<div style={{color:'red'}}>{rowData.status}</div> }},
    { title :"Action", field:'action',render:(rowData)=><ActionDialog status/>}

]