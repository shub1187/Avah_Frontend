import React,{useState, useEffect} from 'react'
import { Alert, Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Snackbar, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import CreateTextFields from 'components/common/Textfield';
import { useFetch } from 'hooks/useFetch';
import ControlledRadioButtonsGroup from 'components/common/Radio';
import { useFetchFunction } from 'hooks/useFetch';
import SkeletonLoading from 'components/common/Skeleton';
const CreateEmployeeDialog = ({height,width,color}) => {
    const [open, setOpen] = React.useState(false);
    const {fetchData} = useFetchFunction()
    const [status,setStatus] = useState({
      isVisible:false,
      message:"",
      loading:false,
      error:'',
      responseStatus:''
  })
    const [snackbar,handleSnackBar] = useState(true)
    const [formData, setFormData] = useState({});
  console.log(formData,"RAEES")

    useEffect(()=>{
        if(!status.loading && status.error)handleSnackBar(true)
    },[status.error])
    const handleFieldChange = (fieldName, value) => {
      setFormData((prevData) => ({ ...prevData, [fieldName]: value }));
    };

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    // const handleSubmit = ()=>{

    // }
    
    const handleSnackBarFunction = ()=>{
      handleSnackBar(false)
  }
    const handleSubmit = async()=>{
      try{
        
          setStatus({loading:true,message:'',isVisible:true})
          // const payload = {
          //     status:'Active '  // Active or Inactive
          // }
          const obj = {
              payload:formData,
              method:"POST",
              url:"http://localhost:3008/api/serviceprovider/createEmployee"
          }

          const {isSuccess,data,error} = await fetchData(obj)
          if(error && !isSuccess){
              throw new Error(error)
          }
          if(data && isSuccess){
              setStatus({loading:false,responseStatus:data?.status})  //status has bee nactiveated or status has been inactivated
          }
          setFormData({})
      }
      catch(error){
          setStatus({error:error?.message,message:'',loading:false})
          setFormData({})
      }
  }
    // const theme = createTheme({
      // palette:{
      //   mainy:{
      //     main:'#ad4970',
      //     contrastText:"#ffffff"
      //   }
      // }
    // })
    const employeeTextField = [
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
            fullWidth:true,
            select:true,
            selectArray:[
              {
                label:'Male',
                value:"male"
              },
              {
                label:'Female',
                value:"female"
              },
            ]

        },
        {
            label: 'Role',
            name: "role",
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
            name: "pin_code",
            type: 'number',
            fullWidth:true
        },
        {
            label: 'PAN Number',
            name: "pan_number",
            type: 'number'
        },
        {
            label: 'Password',
            name: "password",
            type: 'password'
        },
        {
            label: 'Re-enter Password',
            name: "reEnterPassword",
            type: 'rePassword',
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
      <Button sx={{height:height,width:width}} variant="contained" color={color || 'success'} onClick={handleClickOpen}>
        ADD NEW EMPLOYEE
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth='lg'>
      <div style={{width: 1200}}>

        <DialogTitle >CREATE EMPLOYEE</DialogTitle>
        <DialogContent>
            <Grid container xs={12} mt={3}>
              <Grid item xs={3.6} mr={4}>
                  <CreateTextFields  fields={employeeTextField.slice(0,5)} onChange={handleFieldChange}  formField={formData}/>
              </Grid>
              <Grid item xs={3.6} mr={4}>
                <Grid container xs={12}>
                <Grid xs={12} item><CreateTextFields  fields={employeeTextField.slice(5,6)} onChange={handleFieldChange} formField={formData}/></Grid>
                  <Grid  xs={5.7} item mr={2}><CreateTextFields fields={employeeTextField.slice(6,7)} onChange={handleFieldChange}  formField={formData}/></Grid>
                  <Grid  xs={5.7} item><CreateTextFields fields={employeeTextField.slice(7,8)} onChange={handleFieldChange}  formField={formData}/></Grid>
                  <Grid  xs={5.7} item mr={2}><CreateTextFields fields={employeeTextField.slice(8,9)} onChange={handleFieldChange}  formField={formData}/></Grid>
                  <Grid  xs={5.7} item><CreateTextFields fields={employeeTextField.slice(9,10)} onChange={handleFieldChange}  formField={formData}/></Grid>
                </Grid>
              </Grid>
              <Grid item xs={3.6} mr={4}>
                <Grid container xs={12}>
                  <Grid  xs={12} item><CreateTextFields fields={employeeTextField.slice(10,13)} onChange={handleFieldChange} formField={formData}/></Grid>
                  <Grid xs={12}><ControlledRadioButtonsGroup onChange={handleFieldChange} title={'STATUS'} formField={formData} name={'status'}/></Grid>
                </Grid>
              </Grid>
            </Grid>
        </DialogContent>
        <DialogActions>
          <Button color='options' onClick={handleClose}>Cancel</Button>
          <Button variant={'contained'} color='options' onClick={handleSubmit}>SUBMIT</Button>
        </DialogActions>
        </div>
      </Dialog>
      {status.loading && <SkeletonLoading />}
            {(!status.loading && status.error ) &&<Snackbar open={snackbar} autoHideDuration={2000} onClose={handleSnackBarFunction}  color='error'><Alert severity='error'>{status.error}</Alert></Snackbar>}
    </div>
  )
}

export default CreateEmployeeDialog