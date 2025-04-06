import CustomMaterialTable from "components/common/Table/MaterialTable"
import URL from "url/apiURL"
import { reviewServiceColumn } from "./Components/column"
const {getServiceProviderFeedbackWithAvg} = URL.SERVICE_PROVIDER.REVIEW
const Review  = ()=>{
    return(
        <div>
        <CustomMaterialTable
        URL={getServiceProviderFeedbackWithAvg}
        columnss={reviewServiceColumn}
        />
    </div>
    )
}
export default Review