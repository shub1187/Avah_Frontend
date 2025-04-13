import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Rating, TextareaAutosize } from "@mui/material"
import { useState } from "react"
import './index.scss'
import URL from "url/apiURL"
import { useCustomerFetchFunction } from "hooks/useFetch"

const {rateServiceProvider} = URL.CUSTOMER.REVIEW

const FeedbackPopup = ({ rowData }) => {

    const [open, setOpen] = useState(false)
    const [rateUs,setRateUs] = useState({open:false,value:'',rating:0})
    const { fetchCustomerData, snackbar, loadingIndicator } = useCustomerFetchFunction()

    console.log(rateUs?.rating)

    const submitFeedback = async()=>{
        const obj = {
            payload: {
                customer_id:rowData?.customer_id,
                appointment_id:rowData?.appointment_id,
                rating:rateUs?.rating,
                feedback:rateUs?.value,
                sp_id:rowData?.sp_id
            },
            method: "POST",
            url: rateServiceProvider
        }
        const {isSuccess} = await fetchCustomerData(obj)
        if(isSuccess){
            setRateUs((prev)=>({...prev,open:false}))
        }
    }
    return (
        <>
            <Box className='feedbackPopup'>
                {rowData?.rating_provided ?
                    <Box>
                        <Rating
                            name="simple-controlled"
                            value={rowData?.rating}
                            disabled
                        />
                        <Box className='purple' onClick={() => setOpen(true)} color={'options'}>Read Feedback...</Box>
                    </Box>
                    :
                    <Box>
                        <Box className='purple' onClick={() => setRateUs((prev)=>({...prev,open:true}))}>Rate Us</Box>
                    </Box>
                }

            </Box>
            {open && (<Dialog open={open}>
                <DialogTitle>Feedback</DialogTitle>
                <DialogContent>{rowData?.feedback}</DialogContent>
                <DialogActions>
                    <Button color="options" onClick={() => setOpen(false)}>Close</Button>
                </DialogActions>
            </Dialog>)}
            {rateUs?.open && (<Dialog open={rateUs?.open}>
                <DialogTitle>Rate us</DialogTitle>
                <DialogContent>
                    <Box sx={{minWidth:300}}>
                        <Rating
                        sx={{marginBottom:5}}
                            name="simple-controlled"
                            value={rateUs?.rating}
                            onChange={(event, newValue) => {
                                setRateUs((prev)=>({...prev,rating:newValue}));
                            }}
                        />
                        <Box className='purple' color={'options'}>
                            <TextareaAutosize value={rateUs?.value} placeholder="Add feedback" onChange={(e)=>setRateUs((prev)=>({...prev,value:e.target.value}))} style={{width:'100%'}} minRows={3}/>
                        </Box>
                    </Box>
                </DialogContent>
                <DialogActions sx={{marginRight:2,marginBottom:2}}>
                    <Button color="options" onClick={() => setRateUs((prev)=>({...prev,open:false}))}>Close</Button>
                    <Button variant="contained" color="options" onClick={submitFeedback} disabled={!rateUs?.rating}>Submit</Button>
                </DialogActions>
            </Dialog>)}
            {snackbar}
            {loadingIndicator}
        </>

    )
}

export default FeedbackPopup