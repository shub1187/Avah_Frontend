import React,{useState} from 'react'
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import CreateTextFields from 'components/common/Textfield';
import { useFetch, useFetchFunction } from 'hooks/useFetch';
import ControlledRadioButtonsGroup from 'components/spComponents/Radio';
import { useDialogWrapperContext } from 'components/common/Dialog/DialogWrapper';
import { requiredTextfield } from 'utils/customFunctions';
import URL from 'url/apiURL';


const {} = URL.SERVICE_PROVIDER.SPARES
const SpAddLabourDialog = ({height,width,color}) => {
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
        url : ''
      }

      await fetchData(obj)
      setIsSubmitted(false)
      setFormData({})
      setTimeout(()=>handleClose(),2000)
      tableRef.current.onQueryChange()
    }


    const LabourList = [
        {
            label:'Name',
            name:"labour_name",
            type:'text',
            fullWidth:true
        },
        {
            label:'HSN/SAC',
            name:"hsn_sac",
            type:'text',
            fullWidth:true
    
        },
        {
            label: 'Amount',
            name: "price",
            type: 'text',
            fullWidth:true
    
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
                  <CreateTextFields  fields={LabourList.slice(0,3)} onChange={handleFieldChange}  formField={formData}/>
              </Grid>
              <Grid item xs={5.5} >
                <Grid container xs={12}>
                  <Grid  xs={12} item><CreateTextFields fields={LabourList.slice(3,5)} onChange={handleFieldChange} formField={formData}/></Grid>

                  <Grid xs={12}><ControlledRadioButtonsGroup onChange={handleFieldChange} title={'STATUS'} formField={formData} name={'status'}/></Grid>
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