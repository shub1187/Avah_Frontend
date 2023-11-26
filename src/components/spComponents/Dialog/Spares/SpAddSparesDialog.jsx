import React,{useState} from 'react'
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import CreateTextFields from 'components/common/Textfield';
import { useFetch, useFetchFunction } from 'hooks/useFetch';
import ControlledRadioButtonsGroup from 'components/spComponents/Radio';
import { useDialogWrapperContext } from 'components/common/Dialog/DialogWrapper';
import { requiredTextfield } from 'utils/customFunctions';
import URL from 'url/apiURL';

const {addspare} = URL.SERVICE_PROVIDER.SPARES

const SpCreateSpareDialog = ({height,width,color}) => {
   const {isSubmitted,isMobile,formData,setFormData,setIsSubmitted,handleOpen,handleClose} = useDialogWrapperContext()
   const {fetchData} = useFetchFunction()

    const handleFieldChange = (fieldName, value) => {
      setFormData((prevData) => ({ ...prevData, [fieldName]: value }));
    };

    // const handleClickOpen = () => {
    //   setOpen(true);
    // };
  
    // const handleClose = () => {
    //   setOpen(false);
    // };
    const handleSubmit = async ()=>{
      setIsSubmitted(true)
      
      let isRequired = requiredTextfield(addSparesTextfield,formData)
      console.log(" ln 29", isRequired)
      
        if(isRequired) {
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
    setFormData({})
    }
    console.log(formData)
    // const theme = createTheme({
      // palette:{
      //   mainy:{
      //     main:'#ad4970',
      //     contrastText:"#ffffff"
      //   }
      // }
    // })
    const addSparesTextfield = [
        {
            label:'Spare Name',
            name:"name",
            type:'text',
            fullWidth:true,
            required:true,
            errormessage:'Spare Name is Required'
        },
        {
            label:'HSN/SAC',
            name:"hsn/sac",
            type:'text',
            fullWidth:true

        },
        {
            label: 'Part Number',
            name: "part_number",
            type: 'number',
            fullWidth:true

        },
        {
            label: 'FuelType',
            name: "fuel_type",
            type: 'text',
            fullWidth:true

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
            type: 'text',
            fullWidth:true,
        },
        {
            label: 'Purchase Price',
            name: "purchase_price",
            type: 'text'
        },
        {
            label: 'Selling Price',
            name: "selling_price",
            type: 'text',
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
      {/* <Button sx={{height:height,width:width}} variant="contained" color={color || 'success'} onClick={handleClickOpen}>
        ADD SPARES
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth='lg'>
      <div style={{width: 1200}}> */}

        {/* <DialogTitle >ADD SPARES</DialogTitle> */}
        <DialogContent>
            <Grid container xs={12} mt={3}>
              <Grid item xs={3.6} mr={4}>
                  <CreateTextFields  fields={addSparesTextfield.slice(0,5)} onChange={handleFieldChange}  formField={formData} isSubmitted={isSubmitted}/>
                  {/* <TextField values={formData[]}/> */}
              </Grid>
              <Grid item xs={3.6} mr={4}>
                  <CreateTextFields  fields={addSparesTextfield.slice(5,10)} onChange={handleFieldChange}  formField={formData} isSubmitted={isSubmitted}/>
                  {/* <TextField values={formData[]}/> */}
              </Grid>
              <Grid item xs={3.6}>
                  <CreateTextFields  fields={addSparesTextfield.slice(10,13)} onChange={handleFieldChange}  formField={formData} isSubmitted={isSubmitted}/>
                  {/* <TextField values={formData[]}/> */}
              </Grid>
            </Grid>

          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
          {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          /> */}
        </DialogContent>
        <DialogActions>
          <Button color='options' onClick={handleClose}>Cancel</Button>
          <Button variant={'contained'} color='options' onClick={handleSubmit}>SUBMIT</Button>
        </DialogActions>
        {/* </div> */}
      {/* </Dialog> */}
    </div>
  )
}

export default SpCreateSpareDialog