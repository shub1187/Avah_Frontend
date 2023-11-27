import { Box } from "@mui/material"
import ActionDialog from "components/common/Dialog/ActionDialog"
import MoreActionDialog from "components/common/Dialog/MoreActionDialog"
export const spCreateAppointmentColumn =(setPage,setEyeIconValue)=>( [
    { title: "Name", field: "name" },
    { title: "Vehicle Number", field: "vehicle_number" },
    { title: "Appointment Date", field: "appointment_date"},
    { title: "Appointment Time", field: "appointment_time"},
    { title: "Appointment Status", field: "appointment_status"},
    {title:'Action',render:(rowData)=>
        <Box display='flex'>
            <MoreActionDialog rowData={rowData} ActionDialog={rowData.appointment_status =='Pending'?[
                                                                <ActionDialog
                                                                key="approve"
                                                                approve
                                                                url={'http://localhost:3008/api/serviceprovider/approveCustAppointment'}
                                                                payload={{ 'appointment_id': rowData.appointment_id,'appointment_status': 'Approved' }}

                                                                />
                                                                ,
                                                                <ActionDialog
                                                                key="reject"
                                                                reject
                                                                url={'http://localhost:3008/api/serviceprovider/approveCustAppointment'}
                                                                payload={{ 'appointment_id': rowData.appointment_id, 'appointment_status': 'Rejected By SP' }}

                                                                />
                                                            ]:rowData.appointment_status =='Approved'?[
                                                                <ActionDialog
                                                                key="createEstimate"
                                                                createEstimate
                                                                url={'http://localhost:3008/api/serviceprovider/createEstimate'}
                                                                setPage={setPage}
                                                                setEyeIconValue={setEyeIconValue}
                                                                rowData={rowData}
                                                                />
                                                            ]
                                                            :
                                                            []
                                                        }/>
        </Box> }
])

