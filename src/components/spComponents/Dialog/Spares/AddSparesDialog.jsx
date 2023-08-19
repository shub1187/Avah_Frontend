import React,{useState} from 'react'
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import CreateTextFields from 'components/common/Textfield';
import { useFetch } from 'hooks/useFetch';
import ControlledRadioButtonsGroup from 'components/spComponents/Radio';

const CreateSpareDialog = ({height,width,color}) => {
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
    // const theme = createTheme({
      // palette:{
      //   mainy:{
      //     main:'#ad4970',
      //     contrastText:"#ffffff"
      //   }
      // }
    // })
    const addSpares = [
        {
            label:'Name',
            name:"name",
            type:'text',
            fullWidth:true
        },
        {
            label:'HSN/SAC',
            name:"hsn/sac",
            type:'email',
            fullWidth:true

        },
        {
            label: 'Part Number',
            name: "partNumber",
            type: 'number',
            fullWidth:true

        },
        {
            label: 'FuelType',
            name: "fuelType",
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
            name: "purchasePrice",
            type: 'text'
        },
        {
            label: 'Selling Price',
            name: "sellingPrice",
            type: 'text'
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
          name: "sgst",
          type: 'text',
          fullWidth:true
        },
        {
          label: 'CGST',
          name: "cgst",
          type: 'text',
          fullWidth:true
        }
    ]
  return (
    <div>
      <Button sx={{height:height,width:width}} variant="contained" color={color || 'success'} onClick={handleClickOpen}>
        ADD SPARES
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth='lg'>
      <div style={{width: 1200}}>

        <DialogTitle >ADD SPARES</DialogTitle>
        <DialogContent>
            <Grid container xs={12} mt={3}>
              <Grid item xs={3.6} mr={4}>
                  <CreateTextFields  fields={addSpares.slice(0,5)} onChange={handleFieldChange}  formField={formData}/>
                  {/* <TextField values={formData[]}/> */}
              </Grid>
              <Grid item xs={3.6} mr={4}>
                  <CreateTextFields  fields={addSpares.slice(5,10)} onChange={handleFieldChange}  formField={formData}/>
                  {/* <TextField values={formData[]}/> */}
              </Grid>
              <Grid item xs={3.6}>
                  <CreateTextFields  fields={addSpares.slice(10,13)} onChange={handleFieldChange}  formField={formData}/>
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
        </div>
      </Dialog>
    </div>
  )
}

export default CreateSpareDialog