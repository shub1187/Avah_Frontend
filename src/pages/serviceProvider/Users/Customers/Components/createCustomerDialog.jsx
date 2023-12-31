import React,{useState} from 'react'
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField, ThemeProvider, Typography, createTheme, useMediaQuery } from '@mui/material';
import CreateTextFields from 'components/common/Textfield';
import { useFetch } from 'hooks/useFetch';
import ControlledRadioButtonsGroup from 'components/common/Radio';
import FileInputTextField from 'components/common/Textfield/FileTextfield';

const CreateCustomerDialog = ({height,width,color}) => {
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
            label:'Name',
            name:"name",
            type:'text',
            fullWidth:true
        },
        {
            label:'Email',
            name:"email",
            type:'email',
            fullWidth:true

        },
        {
            label: 'Mobile',
            name: "mobile",
            type: 'number',
            fullWidth:true

        },
        {
            label: 'Gender',
            name: "gender",
            type: 'text',
            fullWidth:true

        },
        {
            label: 'Tax Number',
            name: "taxNumber",
            type: 'number',
            fullWidth:true

        },
        {
            label: 'Address',
            name: "address",
            type: 'text',
            fullWidth:true,
            row:4
        },
        {
            label: 'Country',
            name: "country",
            type: 'text'
        },
        {
            label: 'State',
            name: "state",
            type: 'text'
        },
        {
            label: 'City',
            name: "city",
            type: 'text'
        },
        {
            label: 'Pincode',
            name: "pincode",
            type: 'number',
            fullWidth:true
        },
    ]

    const businessTextfield=[
      {
        label:'Business Name',
        name:"businessName",
        type:'text',
        fullWidth:true
    },
    {
        label:'Business Type',
        name:"businessType",
        type:'text',
        fullWidth:true

    },
    {
        label: 'Business Contact Number ',
        name: "businessContactNumber",
        type: 'number',
        fullWidth:true

    },
    {
        label: 'Concern Person Name',
        name: "gender",
        type: 'text',
        fullWidth:true

    },
    {
      label: 'Email',
      name: "email",
      type: 'email',
      fullWidth:true
    },
    {
      label: 'Mobile',
      name: "mobile",
      type: 'number',
      fullWidth:true

  },
  {
      label: 'Gender',
      name: "gender",
      type: 'text',
      fullWidth:true

  },
  {
    label: 'GST Number',
    name: "gstNumber",
    type: 'text',
    fullWidth:true
  },
  {
    label: 'Custom',
    name: "custom",
    type: 'text',
    fullWidth:true
  },
  {
    label: 'Address',
    name: "address",
    type: 'text',
    fullWidth:true,
    row:4
},
{
    label: 'Country',
    name: "country",
    type: 'text'
},
{
    label: 'State',
    name: "state",
    type: 'text'
},
{
    label: 'City',
    name: "city",
    type: 'text'
},
{
    label: 'Pincode',
    name: "pincode",
    type: 'number',
    fullWidth:true
},
]
  return (
    <div>
        <DialogContent>
          <Box display={'flex'} justifyContent={'center'}>
            <Button sx={{minHeight:'52px', minWidth:"235px"}} variant={toggle==='individual'?'contained':'outlined'} color='options' onClick={()=>setToggle('individual')}>INDIVIDUAL</Button>
            <Button sx={{minHeight:'52px', minWidth:"235px"}}  variant={toggle==='business'?'contained':'outlined'} color='options' onClick={()=>setToggle('business')}>BUSINESS</Button>
          </Box>
          {toggle==='individual' &&
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
                  <Grid xs={12}><ControlledRadioButtonsGroup onChange={handleFieldChange} title={'STATUS'} formField={formData} name={'status'}/></Grid>
                </Grid>
              </Grid>
            </Grid>
          }
          {toggle==='business' &&
            <Grid container xs={12} mt={3}>
              <Grid item xs={3.6} mr={4}>
                  <CreateTextFields  fields={businessTextfield.slice(0,5)} onChange={handleFieldChange}  formField={formData}/>
                  <FileInputTextField/>
              </Grid>
              <Grid item xs={3.6} mr={4}>
                  <CreateTextFields  fields={businessTextfield.slice(5,9)} onChange={handleFieldChange}  formField={formData}/>
                  <Grid xs={12}><ControlledRadioButtonsGroup onChange={handleFieldChange} title={'STATUS'} formField={formData} name={'status'}/></Grid>
              </Grid>
              <Grid item xs={3.6} mr={4}>
                <Grid container xs={12}>
                  <Grid  xs={12} item><CreateTextFields fields={businessTextfield.slice(8,9)} onChange={handleFieldChange} formField={formData}/></Grid>
                  <Grid  xs={5.7} item mr={2}><CreateTextFields fields={customerTextfield.slice(6,7)} onChange={handleFieldChange}  formField={formData}/></Grid>
                  <Grid  xs={5.7} item><CreateTextFields fields={customerTextfield.slice(7,8)} onChange={handleFieldChange}  formField={formData}/></Grid>
                  <Grid  xs={5.7} item mr={2}><CreateTextFields fields={customerTextfield.slice(8,9)} onChange={handleFieldChange}  formField={formData}/></Grid>
                  <Grid  xs={5.7} item><CreateTextFields fields={customerTextfield.slice(9,10)} onChange={handleFieldChange}  formField={formData}/></Grid>
                </Grid>
              </Grid>
            </Grid>
          }
        </DialogContent>
        <DialogActions>
          <Button color='options' onClick={handleClose}>Cancel</Button>
          <Button variant={'contained'} color='options' onClick={handleSubmit}>SUBMIT</Button>
        </DialogActions>
    </div>
  )
}

export default CreateCustomerDialog