import React,{useEffect, useState} from 'react'
import { Alert, Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Snackbar, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import CreateTextFields from 'components/common/Textfield';
import { useCustomerFetchFunction, useFetch, useFetchFunction } from 'hooks/useFetch';
import ControlledRadioButtonsGroup from 'components/spComponents/Radio';
import CreateDateFields from 'components/common/Textfield/DateTextfield';
import { DatePicker } from '@mui/x-date-pickers';
import SkeletonLoading from 'components/common/Skeleton';
import { useMobileResponsive } from 'hooks/useMobileResponsive';
const AddCustomerAppointmentDialog = ({height,width,color,minHeight,maxWidth,img,borderRadius,my}) => {
    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = useState({});
    const [searchResults, setSearchResults] = useState([]); // Store search results here
    const {fetchCustomerData,snackbar,loadingIndicator} = useCustomerFetchFunction()
    const {isMobile} = useMobileResponsive()
    let {data} = useFetch('http://localhost:3008/api/serviceprovider/getAllModelPerBrand')
    let {data:fuelType} = useFetch('http://localhost:3008/api/admin/getAllFuelTypes')
    const fuelNamesArray = fuelType?.data?.results?.map(item => ({
      label: item.fuel_name,
      value: item.fuel_name
    }));
    let brandData = data?.data?.results || []
    const result= [
      {
          "Andaman and Nicobar Islands": [
              "Bamboo Flat",
              "Nicobar",
              "Port Blair",
              "South Andaman"
          ]
      },
      {
          "Andhra Pradesh": [
              "Addanki",
              "Adoni",
              "Akasahebpet",
              "Akividu",
              "Akkarampalle"
          ]
      }
  ]
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
    const selectArray = result.map((brandEntry) => {
        const brandName = Object.keys(brandEntry)[0]; // Get the brand name
        const formattedBrandValue = brandName.toLowerCase().replace(/ /g, '_'); // Format the value
      
        return {
          label: brandName,
          value: brandName
        };
      });
    let selectModel = []
    const selectedBrand = formData.select_city ? formData.select_city.toLowerCase().replace(/ /g, '_') : ''; // Format selected brand or null if not selected

    if (selectedBrand) {
      result.forEach((brandEntry) => {
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
    console.log(selectModel,selectArray)

    const [status,setStatus] = useState({
      isVisible:false,
      message:"",
      loading:false,
      error:'',
      responseStatus:''
  })
    // const [snackbar,handleSnackBar] = useState(true)
  console.log(formData,"RAEES")
    const handleFieldChange = (fieldName, value) => {
        if (fieldName === "select_city") {
            setFormData((prevData) => ({
              ...prevData,
              [fieldName]: value,
              select_service_provider: "" 
            }));
          } else {
            setFormData((prevData) => ({ ...prevData, [fieldName]: value }));
          }
    };
    const handleSearchIconClick = async(fieldName) => {
      // API call logic here
      // For example, you can use Axios for the API call
      // Update setSearchResults with the API response data
      // setSearchResults(apiResponseData);
  
      // You can also update the formData or other state as needed
      console.log(fieldName)
      const obj = {
        payload:formData,
        method:"POST",
        url:"http://localhost:3008/api/customer/vehicleRegistration"
      }

      const {isSuccess,data,error} = await fetchCustomerData(obj)
      if(error && !isSuccess){
          throw new Error(error)
      }
      if(data && isSuccess){
          setStatus({loading:false,responseStatus:data?.status})  //status has bee nactiveated or status has been inactivated
      }
      console.log(formData);
      setFormData({})
    };

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    // const handleSnackBarFunction = ()=>{
    //     handleSnackBar(false)
    // }

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
  
            const {isSuccess,data,error} = await fetchCustomerData(obj)
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
        // {
        //     label: 'Name',
        //     name: "name",
        //     type: 'text',
        //     fullWidth: true
        // },
        {
          label: 'Select City',
          name: "select_city",
          type: 'text',
          fullWidth: true,
          select: true,
          selectArray: selectArray
        },
        {
          label: 'Select Service Provider',
          name: "select_service_provider",
          type: 'text',
          fullWidth: true,
          select: true,
          selectArray: selectModel
        },
        {
            label: 'Select Vehicle',
            name: "select_vehicle",
            type: 'text',
            fullWidth: true,
            select:true,
            selectArray:[],
            rightIcon:true
        },
        {
          label: 'Vehicle Type',
          name: "vehicle_type",
          type: 'text',
          fullWidth: true,
          disabled:true,
      },
        {
            label: 'Brand',
            name: "brand",
            type: 'text',
            fullWidth: true,
            // select:true,
            // selectArray:selectArray,
            disabled:true
        },
        {
            label: 'Model',
            name: "model",
            type: 'text',
            fullWidth: true,
            // select:true,
            // selectArray:selectModel,
            disabled:true

        },
        {
            label: 'Address',
            name: "address",
            type: 'text',
            fullWidth: true,
            row: 4,
            disabled:true

        },
        {
            label: 'Email',
            name: "email",
            type: 'email',
            fullWidth: true,
            disabled:true

        },
        {
            label: 'Mobile',
            name: "mobile",
            type: 'number',
            fullWidth: true,
            disabled:true


        },

        {
          label: 'Engine Customization',
          name: "customization",
          type: 'text',
          fullWidth: true,
          select: true,
          selectArray: [{ label: "Showroom Fitted", value: "Showroom Fitted" }, { label: "Externally Modified", value: "Externally Modified" }]
        },
        {
            label: 'Appointment Date',
            name: "appointment_date",
            type: 'date',
            fullWidth: true,

        },
        {
          label: 'Appointment Time',
          name: "appointment_time",
          type: 'date',
          fullWidth: true,
          select:true,
          selectArray:[{ label: "9am", value: "9am" },{ label: "10am", value: "10am" },{ label: "11am", value: "11am" },{ label: "12pm", value: "12pm" },{ label: "1pm", value: "1pm" },{ label: "2pm", value: "2pm" },{ label: "3pm", value: "3pm" },{ label: "4pm", value: "4pm" },{ label: "5pm", value: "5pm" },{ label: "6pm", value: "6pm" }]

      },
        {
          label: 'Pickup And Drop',
          name: "pickup_drop",
          type: 'text',
          fullWidth: true,
          select:true,
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
          label: 'Fuel Type',
          name: "fuel_type",
          type: 'text',
          fullWidth: true,
          select: true,
          selectArray: fuelNamesArray
        },
    ]
  return (
    <div>
      <Button sx={{height:height,width:width,fontWeight:"bold",minHeight:minHeight,borderRadius:borderRadius,maxWidth:maxWidth}} variant="contained" color={color || 'success'} onClick={handleClickOpen}>
        <Grid container><Grid my={my} xs={12} item>{img && <img  src={img} alt="Card Image" />}</Grid><Grid fontSize={isMobile && 8} xs={12} item>CREATE APPOINTMENT</Grid></Grid>

      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth='lg'>
      <div style={{width: isMobile?'100%':1200}}>

        <DialogTitle >  CREATE APPOINTMENT</DialogTitle>
        <DialogContent>
            <Grid container xs={12} mt={3}>
              <Grid item xs={12} sm={3.6} mr={!isMobile && 4}>       
                  <CreateTextFields  fields={appointmentList.slice(0,2)} onChange={handleFieldChange}  formField={formData}/>
                  <CreateTextFields  onSearchIconClick={handleSearchIconClick} fields={appointmentList.slice(2,3)} onChange={handleFieldChange}  formField={formData}/>
                  <CreateTextFields  fields={appointmentList.slice(3,5)} onChange={handleFieldChange}  formField={formData}/>

                  {/* <TextField values={formData[]}/> */}
              </Grid>
              <Grid item xs={12} sm={3.6} mr={!isMobile && 4}>
                <Grid container xs={12} >
                
                    {/* <Grid  xs={12} item><CreateDateFields fields={appointmentList.slice(4,5)} onChange={handleFieldChange} formField={formData}/></Grid> */}
                    {/* <DatePicker/> */}
                  <Grid  xs={12} item><CreateTextFields fields={appointmentList.slice(5,9)} onChange={handleFieldChange} formField={formData}/></Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={3.6} >
                <Grid container xs={12}>
                {/* <Grid  xs={12} item><CreateTextFields fields={appointmentList.slice(8,9)} onChange={handleFieldChange} formField={formData}/></Grid> */}
                {/* <Grid  xs={12} item><CreateDateFields fields={appointmentList.slice(9,10)} onChange={handleFieldChange} formField={formData}/></Grid> */}
                <Grid  xs={12} item><CreateTextFields fields={appointmentList.slice(9,10)} onChange={handleFieldChange} formField={formData}/></Grid>
                  <Grid  xs={12} item><CreateDateFields fields={appointmentList.slice(10,11)} onChange={handleFieldChange} formField={formData}/></Grid>
                  <Grid  xs={12} item><CreateTextFields fields={appointmentList.slice(11,14)} onChange={handleFieldChange} formField={formData}/></Grid>
                

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
      {snackbar}
      {loadingIndicator}
      {/* {status.loading && <SkeletonLoading />}
            {(!status.loading && status.error ) &&<Snackbar open={snackbar} autoHideDuration={2000} onClose={handleSnackBarFunction}  color='error'><Alert severity='error'>{status.error}</Alert></Snackbar>} */}
    </div>  )
}

export default AddCustomerAppointmentDialog