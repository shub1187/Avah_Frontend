import { Box, Button ,Dialog, DialogActions, InputLabel, MenuItem, Select, TextField} from '@mui/material'
import ChangePasswordDialog from './ChangePasswordDialog'
import EditDialog from './EditDialog'
import StatusDialog from './StatusDialog'
import ViewDialog from './ViewDialog'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

import { useFetchFunction } from 'hooks/useFetch'
import { useState } from 'react'
import CreateTextFields from 'components/common/Textfield'

const ActionDialog = ({ changePassword, edit, status, view, approve, reject, payload, params, url ,reLoadTable, noLoading, noSnackbar}) => {
  const {fetchData,snackbar,loadingIndicator} = useFetchFunction()

  //Dialog Popups
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {setOpen(true)};
  const handleClose = () => {setOpen(false)};

  //Formdata Related And Required Checks
  const [formData, setFormData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleFieldChange = (fieldName, value) => {setFormData((prevData) => ({ ...prevData, [fieldName]: value }))}

  const RejectList = [
    {
    label: 'Reason Of Rejection',
    name: "reason_of_rejection",
    type: 'text',
    fullWidth: true,
    required: true, // Add the required property
    errormessage: 'Rejection Message Required', // Add the error message
    },
    {
      label: 'Is Reschedule Available?',
      name: "is_reschedule_available",
      fullWidth: true,
      required: true, // Add the required property
      errormessage: 'Confirm Rescheduling', // Add the error message    
      select:true,
      selectArray:[{label:'Yes',value:'yes'},{label:'No',value:'no'}]
 
    }
  ]
  const StatusUpdate=async()=>{
    try{
        setIsSubmitted(true); // Set the form as submitted
        if(reject){
          const requiredFields = RejectList.filter((field) => field.required);
          const emptyRequiredFields = requiredFields.filter((field) => !formData[field.name]);
          if (emptyRequiredFields.length > 0) { return }
        }


        const obj = {
            payload:payload,
            method:"POST",
            url:`${url}${params || ''}`,
            noLoading:noLoading || false,
            noSnackbar:noSnackbar || false
        }
        if(url){
          await fetchData(obj)
        }
        setFormData({})
        setOpen(false)

    }
    catch(error){
        console.log(error)
        setFormData({})

    }finally{
      if(reLoadTable){
        reLoadTable()
      }
  }
  setIsSubmitted(false)

}
  return (
    <>
        {changePassword && <ChangePasswordDialog/>}
        {edit && <EditDialog/>}
        {status && <StatusDialog/>}
        {view && <ViewDialog/>}
        {approve && <Button style={{minWidth:'10px'}} onClick={StatusUpdate}>
                      <CheckCircleIcon style={{color:'rgb(5,131,30)',cursor:'pointer'}}/>
                     </Button>}
        {reject && 
        <>
          <Button style={{minWidth:'10px'}} onClick={handleClickOpen} >
            <CancelIcon style={{color:'rgb(219,9,9)',cursor:'pointer'}}/>
          </Button>
          <Dialog  fullWidth open={open} onClose={handleClose} maxWidth='xs'>
            <Box m={4}>
            <CreateTextFields  fields={RejectList} onChange={handleFieldChange}  formField={formData} isSubmitted={isSubmitted}/>
            </Box>
          <DialogActions sx={{mt:3}}>
          <Button color='options' onClick={handleClose}>Cancel</Button>
          <Button variant={'contained'} color='options' onClick={StatusUpdate}>SUBMIT</Button>
          </DialogActions>
          </Dialog>
        </>
        }
        {snackbar}
        {loadingIndicator}
    </>
  )
}

export default ActionDialog