import { Box } from "@mui/material"
import ActionDialog from "components/spComponents/Dialog/ActionDialog"

export const createAppointmentColumn =(reLoadTable)=>( [
    // { title: "Appointment Id", field: "appointment_id" },
    { title: "Name", field: "name" },
    { title: "Vehicle Number", field: "vehicle_number" },
    { title: "Vehicle Brand", field: "vehicle_type" },
    { title: "Brand", field: "brand" },
    { title: "Model", field: "model" },
    { title: "Customization", field: "customization" },
    { title: "Email", field: "email" },
    { title: "Mobile", field: "mobile_number" },
    { title: "Pickup And Drop", field: "pickup_drop" },
    { title: "Pickup Address", field: "pickup_address" },
    { title: "Appointment Date", field: "appointment_date"},
    { title: "Appointment Time", field: "appointment_time"},
    { title: "Appointment Status", field: "appointment_status"},
    { title: "Estimate Status", field: "estimate_status" },
    {title:'Action',render:(rowData)=>
        <Box display='flex'>
            <ActionDialog approve url={'localhost'} reLoadTable={reLoadTable} params={rowData.appointment_id}/>
            <ActionDialog reject url={'localhostyy'} reLoadTable={reLoadTable}  params={rowData.appointment_id}/>
        </Box> }
])


// "appointment_id": 10,
// "name": "shadab shaikh",
// "vehicle_number": "GJ85UU9988",
// "vehicle_type": "Commercial",
// "brand": "Maruti Suzuki",
// "model": "Swift",
// "customization": "Showroom Fitted",
// "fuel_type": "Electric",
// "email": "shadab@gmail.com",
// "mobile_number": "000025418",
// "pickup_drop": "Self Drive",
// "pickup_address": null,
// "appointment_date": "2023-10-23T18:30:00.000Z",
// "appointment_time": "11am",
// "appointment_status": "approved",
// "estimate_status": "pending"