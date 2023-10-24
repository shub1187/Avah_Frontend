import { Box } from "@mui/material"
import ActionDialog from "components/common/Dialog/ActionDialog"
import MoreActionDialog from "components/common/Dialog/MoreActionDialog"
export const createAppointmentColumn =(reLoadTable)=>( [
    { title: "Name", field: "name" },
    { title: "Vehicle Number", field: "vehicle_number" },
    { title: "Appointment Date", field: "appointment_date"},
    { title: "Appointment Time", field: "appointment_time"},
    { title: "Appointment Status", field: "appointment_status"},
    {title:'Action',render:(rowData)=>
        <Box display='flex'>
            <MoreActionDialog rowData={rowData} ActionDialog={rowData.appointment_status =='pending'?[
                                                                <ActionDialog
                                                                key="approve"
                                                                approve
                                                                url={'http://localhost:3008/api/serviceprovider/approveCustAppointment'}
                                                                reLoadTable={reLoadTable}
                                                                payload={{ 'appointment_id': rowData.appointment_id,'appointment_status': 'approved' }}

                                                                />
                                                                ,
                                                                <ActionDialog
                                                                key="reject"
                                                                reject
                                                                url={'http://localhost:3008/api/serviceprovider/approveCustAppointment'}
                                                                reLoadTable={reLoadTable}
                                                                payload={{ 'appointment_id': rowData.appointment_id, 'appointment_status': 'rejected by sp' }}

                                                                />
                                                            ]:rowData.appointment_status =='approved'?[
                                                                <ActionDialog
                                                                key="createEstimate"
                                                                createEstimate
                                                                url={'http://localhost:3008/api/serviceprovider/createEstimate'}
                                                                reLoadTable={reLoadTable}
                                                                />
                                                            ]
                                                            :
                                                            []
                                                        }/>
        </Box> }
])

