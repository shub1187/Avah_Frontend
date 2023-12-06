import { Box, Button ,Dialog, DialogActions, DialogTitle, IconButton, InputLabel, MenuItem, Select, TextField, Typography} from '@mui/material'
import ChangePasswordDialog from '../../spComponents/Dialog/ChangePasswordDialog'
import EditDialog from '../../spComponents/Dialog/EditDialog'
import StatusDialog from '../../spComponents/Dialog/StatusDialog'
import ViewDialog from '../../spComponents/Dialog/ViewDialog'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import { useFetchFunction } from 'hooks/useFetch'
import { useRef, useState } from 'react'
import CreateTextFields from 'components/common/Textfield'

const ActionDialog = ({ changePassword, edit, status, view, approve, reject,createEstimate, deleteSpare, deleteLabour, payload, params, url , noLoading, noSnackbar ,setPage, setEyeIconValue, rowData}) => {
  const {fetchData,snackbar,loadingIndicator} = useFetchFunction()
  // const timerRef = useRef(null);

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
    name: "sp_rejection_note",
    type: 'text',
    fullWidth: true,
    required: true, // Add the required property
    errormessage: 'Rejection Message Required', // Add the error message
    },
    {
      label: 'Is Reschedule Available?',
      name: "is_reschedule_allowed",
      fullWidth: true,
      required: true, // Add the required property
      errormessage: 'Confirm Rescheduling', // Add the error message    
      select:true,
      selectArray:[{label:'Yes',value:true},{label:'No',value:false}]
 
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
            payload:{...payload,...formData},
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
      // if(timerRef.current){
      //   clearTimeout(timerRef.current);
      // }
      // else{
      //   timerRef.current = setTimeout(() => handleMainClose(), 2000);
      // }
  }
  setIsSubmitted(false)

}
  return (
    <>
        {changePassword && <ChangePasswordDialog/>}
        {edit && <EditDialog/>}
        {status && <StatusDialog/>}
        {view && <ViewDialog/>}
        {approve && <Button variant='outlined' color='success'  onClick={StatusUpdate}>
                      <CheckCircleIcon style={{color:'rgb(5,131,30)',cursor:'pointer',marginRight:'5px'}}/> Approve
                     </Button>}
                     
        {reject && 
        <>
          <Button variant='outlined' color='error'  onClick={handleClickOpen} >
            <CancelIcon style={{color:'rgb(204,16,16)',cursor:'pointer',marginRight:'5px'}}/> Reject
          </Button>
          <Dialog  fullWidth open={open} onClose={handleClose} maxWidth='xs'>
            <Box m={4}>
            <CreateTextFields  fields={RejectList} onChange={handleFieldChange}  formField={formData} isSubmitted={isSubmitted}/>
            </Box>
          <DialogActions sx={{mt:3}}>
          <Button color='options' onClick={handleClose}>CANCEL</Button>
          <Button variant={'contained'} color='options' onClick={StatusUpdate}>SUBMIT</Button>
          </DialogActions>
          </Dialog>
        </>
        }
        {createEstimate && 
          <>
          <Button variant='outlined' color='info'  onClick={()=>{setPage();setEyeIconValue(rowData)}} >
            <PlaylistAddIcon style={{color:'rgb(204,16,16)',cursor:'pointer',marginRight:'5px'}}/> Create Estimate
          </Button>
          </>
        }
        {deleteSpare && 
          <>
              <IconButton color='black' onClick={handleClickOpen}>
              <DeleteIcon  style={{cursor:'pointer',marginRight:'5px'}}/>
              </IconButton>
            <Dialog fullWidth open={open} onClose={handleClose} maxWidth='xs'>
              <DialogTitle>Spare <span style={{color:'#ad4970'}}>{rowData?.spare_name}</span> will be deleted. Please click on <span style={{color:'#ad4970'}}>Delete</span> to proceed </DialogTitle>
              <DialogActions sx={{mt:3}}>
                <Button color='options' onClick={handleClose}>CANCEL</Button>
                <Button variant={'contained'} color='options' onClick={StatusUpdate}>DELETE</Button>
              </DialogActions>

            </Dialog>
          </>

        }
        {deleteLabour && 
          <>
              <IconButton color='black' onClick={handleClickOpen}>
              <DeleteIcon  style={{cursor:'pointer',marginRight:'5px'}}/>
              </IconButton>
            <Dialog fullWidth open={open} onClose={handleClose} maxWidth='xs'>
              <DialogTitle>Labour <span style={{color:'#ad4970'}}>{rowData?.labour_name}</span> will be deleted. Please click on <span style={{color:'#ad4970'}}>Delete</span> to proceed </DialogTitle>
              <DialogActions sx={{mt:3}}>
                <Button color='options' onClick={handleClose}>CANCEL</Button>
                <Button variant={'contained'} color='options' onClick={StatusUpdate}>DELETE</Button>
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