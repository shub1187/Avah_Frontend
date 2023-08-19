import React,{useState} from 'react'
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import CreateTextFields from 'components/common/Textfield';
import { useFetch } from 'hooks/useFetch';
import ControlledRadioButtonsGroup from 'components/spComponents/Radio';
const CreateAppointmentDialog = ({height,width,color}) => {
    const [open, setOpen] = React.useState(false);

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
    
    const appointmentList = [
        {
            label: 'Name',
            name: "name",
            type: 'text',
            fullWidth: true
        },
        {
            label: 'Vehicle Number',
            name: "vehicle_number",
            type: 'text',
            fullWidth: true

        },
        {
            label: 'Brand',
            name: "brand",
            type: 'text',
            fullWidth: true

        },
        {
            label: 'Model',
            name: "model",
            type: 'text',
            fullWidth: true

        },
        {
            label: 'Address',
            name: "address",
            type: 'text',
            fullWidth: true,
            row: 4
        },
        {
            label: 'Email',
            name: "email",
            type: 'email',
            fullWidth: true

        },
        {
            label: 'Mobile',
            name: "mobile",
            type: 'number',
            fullWidth: true

        },
        {
            label: 'Pickup And Drop',
            name: "pickup_&_drop",
            type: 'text',
            fullWidth: true

        },

        {
            label: 'Service Date',
            name: "service_date",
            type: 'date',
            fullWidth: true

        },
        {
            label: 'Booking Date',
            name: "booking_date",
            type: 'date',
            fullWidth: true

        },
        {
            label: 'Vehicle Number',
            name: "vehicle_number",
            type: 'text',
            fullWidth: true

        },
        {
            label: 'Status',
            name: "status",
            type: 'text',
            fullWidth: true

        },
    ]
  return (
    <div>
      <Button sx={{height:height,width:width}} variant="contained" color={color || 'success'} onClick={handleClickOpen}>
        CREATE APPOINTMNET
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth='lg'>
      <div style={{width: 1200}}>

        <DialogTitle >  CREATE APPOINTMNET</DialogTitle>
        <DialogContent>
            <Grid container xs={12} mt={3}>
              <Grid item xs={3.6} mr={4}>
                  <CreateTextFields  fields={appointmentList.slice(0,4)} onChange={handleFieldChange}  formField={formData}/>
                  {/* <TextField values={formData[]}/> */}
              </Grid>
              <Grid item xs={3.6} mr={4}>
                <Grid container xs={12} >
                  <Grid  xs={12} item><CreateTextFields fields={appointmentList.slice(4,7)} onChange={handleFieldChange} formField={formData}/></Grid>
                </Grid>
              </Grid>
              <Grid item xs={3.6} >
                <Grid container xs={12}>
                  <Grid  xs={12} item><CreateTextFields fields={appointmentList.slice(7,13)} onChange={handleFieldChange} formField={formData}/></Grid>
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
    </div>  )
}

export default CreateAppointmentDialog