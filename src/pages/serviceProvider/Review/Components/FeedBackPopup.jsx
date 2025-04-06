import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Rating, TextareaAutosize } from "@mui/material"
import { useState } from "react"
import './index.scss'

const FeedbackPopup = ({ rowData }) => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <Box className='feedbackPopup'>
                    <Box>
                        <Rating
                            name="simple-controlled"
                            value={rowData?.rating}
                            disabled
                        />
                        <Box className='purple' onClick={() => setOpen(true)} color={'options'}>Read Feedback...</Box>
                    </Box>
            </Box>
            {open && (<Dialog open={open}>
                <DialogTitle>Feedback</DialogTitle>
                <DialogContent>{rowData?.feedback}</DialogContent>
                <DialogActions>
                    <Button color="options" onClick={() => setOpen(false)}>Close</Button>
                </DialogActions>
            </Dialog>)}
        </>

    )
}

export default FeedbackPopup