import { Dialog, DialogContent, DialogTitle } from "@mui/material"
import './index.scss'

export const SuccessLoader = ({ success})=>{
    return (
       <Dialog open={true} className="loginloader">
        <DialogTitle align="center">{success ? 'Registered Successfully':'Registration failed'}</DialogTitle>
        <DialogContent>
            {success?'You will be redirected to login.':'Please try again after sometime.'}
        </DialogContent>
       </Dialog>
    )
}