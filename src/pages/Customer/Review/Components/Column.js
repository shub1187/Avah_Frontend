import { formatTimestampToDate } from "utils/customFunctions"
import FeedbackPopup from "./FeedBackPopup"

const CustomerReviewColumn = [
    { title: "Business Name", field: "business_name" },
    { title: "Vehicle Number", field: "vehicle_number" },
    { title: "Invoice Amount", field: "invoice_amount" },
    { title: "Service Completed On", field: "invoice_collected_on" ,render:(rowData)=>formatTimestampToDate(rowData?.invoice_collected_on)},
    { title: "Rating And Feedback", field: "rating" ,render:(rowData)=><FeedbackPopup rowData={rowData}/>},
    // { title: "Feedback", field: "feedback" ,render:(rowData)=>{}
]


export default CustomerReviewColumn