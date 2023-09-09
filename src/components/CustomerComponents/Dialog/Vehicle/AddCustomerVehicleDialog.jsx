

import React,{useState} from 'react'
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField, ThemeProvider, Typography, createTheme, useMediaQuery } from '@mui/material';
import CreateTextFields from 'components/common/Textfield';
import { useFetch } from 'hooks/useFetch';
import ControlledRadioButtonsGroup from 'components/spComponents/Radio';
import FileInputTextField from 'components/common/Textfield/FileTextfield';

const AddCustomerVehicleDialog = ({height,width,color}) => {
    const [open, setOpen] = React.useState(false);
    const [toggle,setToggle] = useState('individual')

    const [formData, setFormData] = useState({});
  console.log(formData,"RAEES")
    const handleFieldChange = (fieldName, value) => {
      setFormData((prevData) => ({ ...prevData, [fieldName]: value }));
    };

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const handleSubmit = ()=>{
    console.log(formData);
    setFormData({})
    }

    const isMobileResolution = useMediaQuery((theme) =>
    theme.breakpoints.down('sm')
    );
    // const theme = createTheme({
      // palette:{
      //   mainy:{
      //     main:'#ad4970',
      //     contrastText:"#ffffff"
      //   }
      // }
    // })
    const customerTextfield = [
        {
            label:'Email',
            name:"email",
            type:'email',
            fullWidth:true

        },
        {
            label: 'Vehicle Number',
            name: "vehicle_number",
            type: 'number',
            fullWidth:true

        },
        {
            label: 'Vehicle Brand',
            name: "vehicle_type",
            type: 'text',
            fullWidth:true

        },
        {
            label: 'Brand',
            name: "brand",
            type: 'text',
            fullWidth:true

        },
        {
            label: 'Model',
            name: "model",
            type: 'text',
            fullWidth:true,
        },
        {
            label: 'Fuel Type',
            name: "fuel_type",
            type: 'text'
        },
        {
            label: 'Registration Number',
            name: "registration_number",
            type: 'text'
        }
    ]

  return (
    <div>
      <Button sx={{height:isMobileResolution?'50px':height,width:width,fontSize:isMobileResolution?"0.6rem":'0.875rem'}} variant="contained" color={color || 'success'} onClick={handleClickOpen}>
        Add New Vehicle
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth='lg'>
      <div style={{width: 1200}}>

        <DialogTitle >Add New Vehicle</DialogTitle>
        <DialogContent>
            <Grid container xs={12} mt={3}>
              <Grid item xs={5.5} mr={4}>
                  <CreateTextFields  fields={customerTextfield.slice(0,5)} onChange={handleFieldChange}  formField={formData}/>
                  {/* <TextField values={formData[]}/> */}
              </Grid>
              <Grid item xs={6} >
                <Grid container xs={12}>
                  <Grid  xs={12} item><CreateTextFields fields={customerTextfield.slice(5,6)} onChange={handleFieldChange} formField={formData}/></Grid>
                  <Grid  xs={5.7} item mr={2}><CreateTextFields fields={customerTextfield.slice(6,7)} onChange={handleFieldChange}  formField={formData}/></Grid>
                  <Grid  xs={5.7} item><CreateTextFields fields={customerTextfield.slice(7,8)} onChange={handleFieldChange}  formField={formData}/></Grid>
                  <Grid  xs={5.7} item mr={2}><CreateTextFields fields={customerTextfield.slice(8,9)} onChange={handleFieldChange}  formField={formData}/></Grid>
                  <Grid  xs={5.7} item><CreateTextFields fields={customerTextfield.slice(9,10)} onChange={handleFieldChange}  formField={formData}/></Grid>
                </Grid>
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
        </div>
      </Dialog>
    </div>
  )
}

export default AddCustomerVehicleDialog