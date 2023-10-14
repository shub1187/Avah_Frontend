import { Box, Button } from '@mui/material'
import ChangePasswordDialog from './ChangePasswordDialog'
import EditDialog from './EditDialog'
import StatusDialog from './StatusDialog'
import ViewDialog from './ViewDialog'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

import { useFetchFunction } from 'hooks/useFetch'

const ActionDialog = ({ changePassword, edit, status, view, approve, reject, payload, params, url, noLoading, noSnackbar}) => {
  const {fetchData,snackbar,loadingIndicator} = useFetchFunction()

  const StatusUpdate=async()=>{
    try{
        // const payload = {
        //     status:'Active '  // Active or Inactive
        // }
        const obj = {
            payload:payload,
            method:"POST",
            url:`${url}${params}`,
            noLoading:noLoading || false,
            noSnackbar:noSnackbar || false
        }
        await fetchData(obj)

    }
    catch(error){
        console.log(error)
    }
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
        {reject && <Button style={{minWidth:'10px'}} onClick={StatusUpdate}>
                      <CancelIcon style={{color:'rgb(219,9,9)',cursor:'pointer'}}/>
                     </Button>}
        {snackbar}
        {loadingIndicator}
    </>
  )
}

export default ActionDialog