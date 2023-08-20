import React,{useEffect, useState} from 'react'
import { Alert, Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Snackbar, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import CreateTextFields from 'components/common/Textfield';
import { useFetch, useFetchFunction } from 'hooks/useFetch';
import ControlledRadioButtonsGroup from 'components/spComponents/Radio';
import CreateDateFields from 'components/common/Textfield/DateTextfield';
import { DatePicker } from '@mui/x-date-pickers';
import SkeletonLoading from 'components/common/Skeleton';
const CreateAppointmentDialog = ({height,width,color}) => {
    const [open, setOpen] = React.useState(false);
    const {fetchData} = useFetchFunction()
    let {data:brandData} = useFetch('http://localhost:3008/api/serviceprovider/getAllModelPerBrand')
    console.log(brandData,"RAEES")
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
    const handleFieldChange = (fieldName, value) => {
      setFormData((prevData) => ({ ...prevData, [fieldName]: value }));
    };

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
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
            console.log(formData);
            setFormData({})
        }
        catch(error){
            setStatus({error:error?.message,message:'',loading:false})
            setFormData({})
        }
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
            fullWidth: true,
            select:true,
            selectArray:[
                {
                  label:'Company Executive',
                  value:"company_executive"
                },
                {
                    label:'Self Drive',
                    value:"self_drive"
                }
              ]
        },

        {
            label: 'Service Date',
            name: "service_date",
            type: 'date',
            fullWidth: true,

        },
        {
            label: 'Booking Date',
            name: "booking_date",
            type: 'date',
            fullWidth: true

        },
        {
            label: 'Status',
            name: "status",
            type: 'text',
            fullWidth: true,
            select:true,
            selectArray:[
                {
                  label:'To Start',
                  value:"to_start"
                }
              ]

        },
    ]
  return (
    <div>
      <Button sx={{height:height,width:width}} variant="contained" color={color || 'success'} onClick={handleClickOpen}>
        CREATE APPOINTMENT
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth='lg'>
      <div style={{width: 1200}}>

        <DialogTitle >  CREATE APPOINTMENT</DialogTitle>
        <DialogContent>
            <Grid container xs={12} mt={3}>
              <Grid item xs={3.6} mr={4}>
                  <CreateTextFields  fields={appointmentList.slice(0,4)} onChange={handleFieldChange}  formField={formData}/>
                  {/* <TextField values={formData[]}/> */}
              </Grid>
              <Grid item xs={3.6} mr={4}>
                <Grid container xs={12} >
                
                    {/* <Grid  xs={12} item><CreateDateFields fields={appointmentList.slice(4,5)} onChange={handleFieldChange} formField={formData}/></Grid> */}
                    {/* <DatePicker/> */}
                  <Grid  xs={12} item><CreateTextFields fields={appointmentList.slice(4,7)} onChange={handleFieldChange} formField={formData}/></Grid>
                </Grid>
              </Grid>
              <Grid item xs={3.6} >
                <Grid container xs={12}>
                  <Grid  xs={12} item><CreateTextFields fields={appointmentList.slice(7,8)} onChange={handleFieldChange} formField={formData}/></Grid>
                    <Grid  xs={12} item><CreateDateFields fields={appointmentList.slice(8,9)} onChange={handleFieldChange} formField={formData}/></Grid>
                  <Grid  xs={12} item><CreateDateFields fields={appointmentList.slice(9,10)} onChange={handleFieldChange} formField={formData}/></Grid>
                  <Grid  xs={12} item><CreateTextFields fields={appointmentList.slice(10,12)} onChange={handleFieldChange} formField={formData}/></Grid>


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
      {status.loading && <SkeletonLoading />}
            {(!status.loading && status.error ) &&<Snackbar open={snackbar} autoHideDuration={2000} onClose={handleSnackBarFunction}  color='error'><Alert severity='error'>{status.error}</Alert></Snackbar>}
    </div>  )
}

export default CreateAppointmentDialog