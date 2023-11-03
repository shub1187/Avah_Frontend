import React,{useState} from 'react'
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import CreateTextFields from 'components/common/Textfield';
import { useFetch } from 'hooks/useFetch';
import ControlledRadioButtonsGroup from 'components/spComponents/Radio';
const AddLabourDialog = ({height,width,color}) => {
    const [open, setOpen] = React.useState(false);

    const [formData, setFormData] = useState({});
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
    const LabourList = [
        {
            label:'Name',
            name:"name",
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
            label: 'Category',
            name: "category",
            type: 'text',
            fullWidth:true
    
        },
        {
            label: 'Amount',
            name: "amount",
            type: 'number',
            fullWidth:true
    
        },
    ]
  return (
    <div>
      <Button sx={{height:height,width:width}} variant="contained" color={color || 'success'} onClick={handleClickOpen}>
        ADD LABOUR
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth='lg'>
      <div style={{width: 1200}}>

        <DialogTitle > ADD LABOUR</DialogTitle>
        <DialogContent>
            <Grid container xs={12} mt={3}>
              <Grid item xs={5.5} mr={4}>
                  <CreateTextFields  fields={LabourList.slice(0,3)} onChange={handleFieldChange}  formField={formData}/>
                  {/* <TextField values={formData[]}/> */}
              </Grid>
              <Grid item xs={6} >
                <Grid container xs={12}>
                  <Grid  xs={12} item><CreateTextFields fields={LabourList.slice(3,4)} onChange={handleFieldChange} formField={formData}/></Grid>

                  <Grid xs={12}><ControlledRadioButtonsGroup onChange={handleFieldChange} title={'STATUS'} formField={formData} name={'status'}/></Grid>
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

export default AddLabourDialog