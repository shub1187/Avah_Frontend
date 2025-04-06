import { Box, Button, DialogActions, DialogContent, Grid } from "@mui/material"
import { useDialogWrapperContext } from "components/common/Dialog/DialogWrapper";
import { useCustomerFetchFunction } from "hooks/useFetch";
import URL from "url/apiURL";
import './index.scss'
const {rateServiceProvider} = URL.CUSTOMER.REVIEW

const AddCustomerReview = () => {
    const { handleClose, isMobile, isSubmitted, setIsSubmitted, formData, setFormData } = useDialogWrapperContext()
    const { fetchCustomerData, snackbar, loadingIndicator } = useCustomerFetchFunction()

    const handleSubmit = async () => {
        setIsSubmitted(true); // Set the form as submitted
        // const requiredFields = customerTextfield.filter((field) => field.required);
        // const emptyRequiredFields = requiredFields.filter((field) => !formData[field.name]);
        // if(isRequired) {
        //     setTimeout(() => {
        //         setIsSubmitted(false)
        //     }, [2000]);
        //     return
        // }

        const obj = {
            payload: formData,
            method: "POST",
            url: rateServiceProvider
        }

        const {isSuccess} = await fetchCustomerData(obj)
        // setFormData({})
        setIsSubmitted(false)
        setTimeout(()=>handleClose(),2000)
    }
    return (
        <>
        <DialogContent>
                <Box>

                </Box>
                <Box>

                </Box>
        </DialogContent>
        <DialogActions>
            <Button color='options' onClick={handleClose}>Cancel</Button>
            <Button variant={'contained'} color='options' onClick={handleSubmit}>SUBMIT</Button>
        </DialogActions>
        {snackbar}
        {loadingIndicator}
    </>
    )
}

export default AddCustomerReview