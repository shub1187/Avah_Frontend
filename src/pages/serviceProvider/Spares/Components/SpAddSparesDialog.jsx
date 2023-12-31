import React,{useEffect, useState} from 'react'
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import CreateTextFields from 'components/common/Textfield';
import { useFetch, useFetchFunction } from 'hooks/useFetch';
import ControlledRadioButtonsGroup from 'components/common/Radio';
import { useDialogWrapperContext } from 'components/common/Dialog/DialogWrapper';
import { getFuelArray, requiredTextfield } from 'utils/customFunctions';
import URL from 'url/apiURL';

const {addspare,getAllFuelTypes} = URL.SERVICE_PROVIDER.SPARES

const SpCreateSpareDialog = () => {
   const {isSubmitted,isMobile,formData,setFormData,setIsSubmitted,handleOpen,handleClose, tableRef} = useDialogWrapperContext()
   const {fetchData, loadingIndicator, snackbar} = useFetchFunction()
   const [fuelArray,setFuelArray] = useState([])
   const {data} = useFetch(getAllFuelTypes)

   useEffect(()=>{
    if(data?.data?.results?.length){
      let fuelArray = getFuelArray(data?.data?.results)
      setFuelArray(fuelArray)
    }
   },[data])
    const handleFieldChange = (fieldName, value) => {
      setFormData((prevData) => ({ ...prevData, [fieldName]: value }));
    };

    const handleSubmit = async ()=>{
      setIsSubmitted(true)
      
      let isRequired = requiredTextfield(addSparesTextfield,formData)
      console.log(" ln 29", isRequired)
      
      if(isRequired) {
          //IF ERROR THEN CLOSE THE ERROR MESSAGES AFTER 2 SECOND
          setTimeout(() => {
              setIsSubmitted(false)
          }, [2000]);
          return
      }
      const obj = {
        payload : formData,
        method : "POST",
        url : addspare
      }
      await fetchData(obj)
      setIsSubmitted(false)
      setFormData({})
      setTimeout(()=>handleClose(),2000)
      tableRef?.current?.onQueryChange()

    }

    const addSparesTextfield = [
        {
            label:'Spare Name',
            name:"spare_name",
            type:'text',
            fullWidth:true,
            required:true,
            errormessage:'Spare Name is Required'
        },
        {
            label:'HSN/SAC',
            name:"hsn_sac",
            type:'text',
            fullWidth:true

        },
        {
            label: 'Part Number',
            name: "part_number",
            type: 'text',
            fullWidth:true

        },
        {
            label: 'FuelType',
            name: "fuel_type",
            type: 'text',
            fullWidth:true,
            select:true,
            selectArray:fuelArray

        },
        {
            label: 'Threshold',
            name: "threshold",
            type: 'number',
            fullWidth:true

        },
        {
            label: 'Units',
            name: "units",
            type: 'number',
            fullWidth:true,
        },
        {
            label: 'Purchase Price',
            name: "purchase_price",
            type: 'number',
        },
        {
            label: 'Selling Price',
            name: "selling_price",
            type: 'number',
            required:true,
            errormessage:'Please enter the Selling Price'
        },
        {
            label: 'Manufacturer',
            name: "manufacturer",
            type: 'text'
        },
        {
            label: 'Location',
            name: "location",
            type: 'text',
            fullWidth:true
        },
        {
          label: 'Expiry',
          name: "expiry",
          type: 'text',
          fullWidth:true
        },
        {
          label: 'SGST',
          name: "scgst",
          type: 'number',
          defaultValue:'0',
          fullWidth:true,
          rightIcon:'percentage'
        },
        {
          label: 'CGST',
          name: "cgst",
          type: 'number',
          fullWidth:true,
          defaultValue:'0',
          rightIcon:'percentage'
        }
    ]
  return (
    <div>
        <DialogContent sx={{pt:1}}>
            <Grid container xs={12}>
              <Grid item xs={3.6} mr={4}>
                  <CreateTextFields  fields={addSparesTextfield.slice(0,5)} onChange={handleFieldChange}  formField={formData} isSubmitted={isSubmitted}/>
              </Grid>
              <Grid item xs={3.6} mr={4}>
                  <CreateTextFields  fields={addSparesTextfield.slice(5,10)} onChange={handleFieldChange}  formField={formData} isSubmitted={isSubmitted}/>
              </Grid>
              <Grid item xs={3.6}>
                  <CreateTextFields  fields={addSparesTextfield.slice(10,13)} onChange={handleFieldChange}  formField={formData} isSubmitted={isSubmitted}/>
              </Grid>
            </Grid>
        </DialogContent>
        <DialogActions>
          <Button color='options' onClick={handleClose}>Cancel</Button>
          <Button variant={'contained'} color='options' onClick={handleSubmit}>SUBMIT</Button>
        </DialogActions>
        {snackbar}
        {loadingIndicator}
    </div>
  )
}

export default SpCreateSpareDialog