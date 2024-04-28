import { Autocomplete, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import UnderLine from 'components/common/Underline'
import React,{useState,useMemo} from 'react'

const PaymentPopup = ({callApi,closepopup, loading,state,setState, options}) => {


    
  return (
    <Dialog open={true} fullWidth maxWidth={'xs'}>
        <DialogTitle>Confirm Payment<UnderLine/></DialogTitle>
        <DialogContent>
            <Autocomplete
                color="options"
                multiple
                id="tags-standard"
                value={state.options}
                options={options}
                getOptionLabel={(option) => option.label}
                onChange={(event,value)=>setState((prev)=>({...prev,options:value}))}
                getOptionDisabled={(options)=>state?.options.length?true:false}
                renderInput={(params) => (
                <TextField
                    {...params}
                    size='small'
                />
                )}
            />
        </DialogContent>
        <DialogActions>
            <Button disabled={loading} variant='outlined' color='options' onClick={closepopup}>Close</Button>
            <Button disabled={loading} variant='contained' color='options' onClick={callApi}>{loading && <CircularProgress size='1rem' sx={{mr:1}}/>} Confirm{loading && 'ing...'}</Button>
        </DialogActions>
    </Dialog>
  )
}

export default PaymentPopup