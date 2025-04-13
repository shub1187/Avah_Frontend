// import FeedbackPopup from "pages/Customer/Review/Components/FeedBackPopup";

import FeedbackPopup from "./FeedBackPopup";

export const reviewServiceColumn = [
    { title: "Customer Name", field: "customer_name" },
    { title: "Mobile Number", field: "customer_mobile" },
    { title: "Vehicle Number", field: "vehicle_number" },
    { title: "Completion Date", field: "service_completed_on" },
    { title: "Rating And Feedback", field: "rating" ,render:(rowData)=><FeedbackPopup rowData={rowData}/>},
]