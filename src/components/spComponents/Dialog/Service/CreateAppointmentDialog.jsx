import React,{useEffect, useState} from 'react'
import { Alert, Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Snackbar, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import CreateTextFields from 'components/common/Textfield';
import { useFetch, useFetchFunction } from 'hooks/useFetch';
import ControlledRadioButtonsGroup from 'components/spComponents/Radio';
import CreateDateFields from 'components/common/Textfield/DateTextfield';
import { DatePicker } from '@mui/x-date-pickers';
import SkeletonLoading from 'components/common/Skeleton';
import { useMobileResponsive } from 'hooks/useMobileResponsive';
const CreateAppointmentDialog = ({height,width,color,minHeight,maxWidth,img,borderRadius,my}) => {
    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = useState({});
    const {fetchData} = useFetchFunction()
    const {isMobile} = useMobileResponsive()
    let {data} = useFetch('http://localhost:3008/api/serviceprovider/getAllModelPerBrand')
    let brandData = data?.data?.results || []
    // console.log("ln 15 shub",data?.data?.results)
    // const brandData = [  // This is dummy data for future refernce
    //     {
    //         "Maruti Suzuki": [
    //             "Swift",
    //             "Ertiga"
    //         ]
    //     },
    //     {
    //         "Morris Garage": [
    //             "HECTOR",
    //             "Rickshaw"
    //         ]
    //     },
    //     {
    //         "Hyundai": [
    //             "i20"
    //         ]
    //     },
    //     {
    //         "Opel": [
    //             "Corsa"
    //         ]
    //     }
    // ]
    const selectArray = brandData.map((brandEntry) => {
        const brandName = Object.keys(brandEntry)[0]; // Get the brand name
        const formattedBrandValue = brandName.toLowerCase().replace(/ /g, '_'); // Format the value
      
        return {
          label: brandName,
          value: brandName
        };
      });
    let selectModel = []
    const selectedBrand = formData.brand ? formData.brand.toLowerCase().replace(/ /g, '_') : ''; // Format selected brand or null if not selected

    if (selectedBrand) {
        brandData.forEach((brandEntry) => {
            const brandName = Object.keys(brandEntry)[0];
            const formattedBrandValue = brandName.toLowerCase().replace(/ /g, '_');
    
            if (selectedBrand === formattedBrandValue) { // Check for selected brand
                brandEntry[brandName].forEach((ent) => {
                    const label = ent;
                    const formatValue = ent.toLowerCase().replace(/ /g, '_'); // Format model value
                    selectModel.push({
                        label: label,
                        value: label
                    });
                });
            }
        });
    } 

    const [status,setStatus] = useState({
      isVisible:false,
      message:"",
      loading:false,
      error:'',
      responseStatus:''
  })
    const [snackbar,handleSnackBar] = useState(true)
  console.log(formData,"RAEES")
    const handleFieldChange = (fieldName, value) => {
        if (fieldName === "brand") {
            setFormData((prevData) => ({
              ...prevData,
              [fieldName]: value,
              model: "" 
            }));
          } else {
            setFormData((prevData) => ({ ...prevData, [fieldName]: value }));
          }
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
                url:"http://localhost:3008/api/serviceprovider/createAppointment"
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
            fullWidth: true,
            size:true
        },
        {
            label: 'Vehicle Number',
            name: "vehicle_number",
            type: 'text',
            fullWidth: true,
            size:true

        },
        {
          label: 'Vehicle Type',
          name: "vehicle_type",
          type: 'text',
          fullWidth: true,
          select:true,
          size:true,

          selectArray:[
              {
                label:'Personal',
                value:"personal"
              },
              {
                  label:'Commercial',
                  value:"commercial"
              }
            ]
      },
        {
            label: 'Brand',
            name: "brand",
            type: 'text',
            fullWidth: true,
            select:true,
            selectArray:selectArray,
            size:true

        },
        {
            label: 'Model',
            name: "model",
            type: 'text',
            fullWidth: true,
            select:true,
            selectArray:selectModel,
            size:true

        },
        {
            label: 'Address',
            name: "address",
            type: 'text',
            fullWidth: true,
            row: 4,
            size:true

        },
        {
            label: 'Email',
            name: "email",
            type: 'email',
            fullWidth: true,
            size:true


        },
        {
            label: 'Mobile',
            name: "mobile",
            type: 'number',
            fullWidth: true,
            size:true


        },
        {
            label: 'Pickup And Drop',
            name: "pickup_drop",
            type: 'text',
            fullWidth: true,
            select:true,
            size:true,
            selectArray:[
                {
                  label:'Company Executive',
                  value:"Company Executive"
                },
                {
                    label:'Self Drive',
                    value:"Self Drive"
                }
              ]
        },

        {
            label: 'Service Date',
            name: "service_date",
            type: 'date',
            fullWidth: true,
            size:true

        },
        {
            label: 'Booking Date',
            name: "booking_date",
            type: 'date',
            fullWidth: true,
            size:true


        },
        {
            label: 'Status',
            name: "status",
            type: 'text',
            fullWidth: true,
            select:true,
            size:true,
            selectArray:[
                {
                  label:'To Start',
                  value:"To Start"
                }
              ]

        },
    ]
  return (
    <div>
      <Button sx={{height:height,width:width,fontWeight:"bold",minHeight:minHeight,borderRadius:borderRadius,maxWidth:maxWidth}} variant="contained" color={color || 'success'} onClick={handleClickOpen}>
        <Grid container><Grid my={my} xs={12} item>{img && <img  src={img} alt="Card Image" />}</Grid><Grid fontSize={isMobile && 8} xs={12} item>CREATE APPOINTMENT</Grid></Grid>

      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth='md'>
      {/* <div style={{width: isMobile?'100%':1200}}> */}
        <DialogTitle>CREATE APPOINTMENT</DialogTitle>
        <DialogContent sx={{pt:2,pb:0}}>
            <Grid container xs={12} mt={3}>
              <Grid item xs={12} sm={3.6} mr={!isMobile && 4}>
                  <CreateTextFields  fields={appointmentList.slice(0,5)} onChange={handleFieldChange}  formField={formData}/>
                  {/* <TextField values={formData[]}/> */}
              </Grid>
              <Grid item xs={12} sm={3.6} mr={!isMobile && 4}>
                <Grid container xs={12} >
                
                    {/* <Grid  xs={12} item><CreateDateFields fields={appointmentList.slice(4,5)} onChange={handleFieldChange} formField={formData}/></Grid> */}
                    {/* <DatePicker/> */}
                  <Grid  xs={12} item><CreateTextFields fields={appointmentList.slice(5,8)} onChange={handleFieldChange} formField={formData}/></Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={3.6} >
                <Grid container xs={12}>
                <Grid  xs={12} item><CreateTextFields fields={appointmentList.slice(8,9)} onChange={handleFieldChange} formField={formData}/></Grid>
                <Grid  xs={12} item><CreateDateFields fields={appointmentList.slice(9,10)} onChange={handleFieldChange} formField={formData}/></Grid>
                  <Grid  xs={12} item><CreateDateFields fields={appointmentList.slice(10,11)} onChange={handleFieldChange} formField={formData}/></Grid>
                  <Grid  xs={12} item><CreateTextFields fields={appointmentList.slice(11,13)} onChange={handleFieldChange} formField={formData}/></Grid>
                

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
        {/* </div> */}
      </Dialog>
      {status.loading && <SkeletonLoading />}
            {(!status.loading && status.error ) &&<Snackbar open={snackbar} autoHideDuration={2000} onClose={handleSnackBarFunction}  color='error'><Alert severity='error'>{status.error}</Alert></Snackbar>}
    </div>  )
}

export default CreateAppointmentDialog