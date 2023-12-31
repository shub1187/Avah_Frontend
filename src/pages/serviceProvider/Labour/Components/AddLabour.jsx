import React,{useState} from 'react'
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import CreateTextFields from 'components/common/Textfield';
import { useFetch, useFetchFunction } from 'hooks/useFetch';
import ControlledRadioButtonsGroup from 'components/common/Radio';
import { useDialogWrapperContext } from 'components/common/Dialog/DialogWrapper';
import { requiredTextfield } from 'utils/customFunctions';
import URL from 'url/apiURL';

const {addlabour} = URL.SERVICE_PROVIDER.LABOURS

const SpAddLabourDialog = () => {
  const {handleClose,handleFieldChange,handleOpen,formData,setFormData,setIsSubmitted,isMobile,isSubmitted, tableRef} = useDialogWrapperContext()
  const {fetchData,snackbar,loadingIndicator} = useFetchFunction()

  const handleSubmit = async()=>{
      setIsSubmitted(true)
      let isRequired = requiredTextfield(LabourList,formData)
      if(isRequired) {
          setTimeout(() => {
              setIsSubmitted(false)
          }, [2000]);
          return
      }

      const obj = {
        payload : formData,
        method : "POST",
        url : addlabour
      }

      await fetchData(obj)
      setIsSubmitted(false)
      setFormData({})
      tableRef?.current?.onQueryChange()
      setTimeout(()=>handleClose(),2000)
    }


    const LabourList = [
        {
            label:'Name',
            name:"labour_name",
            type:'text',
            fullWidth:true,
            required:true,
            errormessage:'Labour Name is Required'
        },
        {
            label:'HSN/SAC',
            name:"hsn_sac",
            type:'text',
            fullWidth:true
    
        },
        {
            label: 'Amount',
            name: "selling_price",
            type: 'text',
            fullWidth:true,
            required:true,
            errormessage:'Labour price is Required'
    
        },
        {
            label: 'SCGST',
            name: "scgst",
            type: 'number',
            fullWidth:true,
            rightIcon:'percentage',
            defaultValue:'0'
    
        },
                {
            label: 'CGST',
            name: "cgst",
            type: 'number',
            fullWidth:true,
            rightIcon:'percentage',
            defaultValue:'0'

        },
    ]
  return (
    <div>
        <DialogContent>
            <Grid container xs={12} mt={3}>
              <Grid item xs={5.5} mr={4}>
                  <CreateTextFields  fields={LabourList.slice(0,3)} onChange={handleFieldChange}  formField={formData} isSubmitted={isSubmitted}/>
              </Grid>
              <Grid item xs={5.5} >
                <Grid container xs={12}>
                  <Grid  xs={12} item><CreateTextFields fields={LabourList.slice(3,5)} onChange={handleFieldChange} formField={formData} isSubmitted={isSubmitted}/></Grid>
                </Grid>
              </Grid>
            </Grid>
        </DialogContent>
        <DialogActions>
          <Button color='options' onClick={handleClose}>Cancel</Button>
          <Button variant={'contained'} color='options' onClick={handleSubmit}>SUBMIT</Button>
        </DialogActions>
        {snackbar}
        {loadingIndicator}
    </div>  )
}

export default SpAddLabourDialog