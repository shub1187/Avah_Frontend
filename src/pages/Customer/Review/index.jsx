import CustomMaterialTable from "components/common/Table/MaterialTable"
import URL from 'url/apiURL'
import AddCustomerVehicleColumn from "../Vehicle/Components/AddCustomerVehicleColumn"
import AddCustomerReview from "./Components/AddReviewPopup"
import { Box } from "@mui/material"
import CustomerReviewColumn from "./Components/Column"

const {getPaidServices} = URL.CUSTOMER.REVIEW

const ReviewCustomer = ()=>{
    return(
    <Box backgroundColor='red' mt={2}>
        <CustomMaterialTable
        DialogButton={AddCustomerReview} 
        columnss={CustomerReviewColumn} 
        URL={getPaidServices}/>
    </Box>
    )
}

export default ReviewCustomer