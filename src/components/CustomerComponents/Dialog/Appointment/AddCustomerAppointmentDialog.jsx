import React,{useEffect, useState} from 'react'
import { Alert, Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, MenuItem, Select, Snackbar, TextField, ThemeProvider, Tooltip, Typography, createTheme } from '@mui/material';
import CreateTextFields from 'components/common/Textfield';
import { useCustomerFetchFunction, useFetch, useFetchFunction } from 'hooks/useFetch';
import ControlledRadioButtonsGroup from 'components/spComponents/Radio';
import CreateDateFields from 'components/common/Textfield/DateTextfield';
import { DatePicker } from '@mui/x-date-pickers';
import SkeletonLoading from 'components/common/Skeleton';
import { useMobileResponsive } from 'hooks/useMobileResponsive';
import CreateAutoCompleteTextfield from 'components/common/Textfield/AutoCompleteTextfield';
import { useCity } from 'hooks/useCustomContext';
import {getHours,format} from 'date-fns'
const AddCustomerAppointmentDialog = ({height,width,color,minHeight,maxWidth,img,borderRadius,my}) => {
    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = useState({});
    const [spList,setSpList] = useState([])
    const { city, setCity } = useCity();
    const [selectedServiceProvider, setSelectedServiceProvider] = useState("");
    const [selectedSpAddress, setSelectedSpAddress] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const {fetchCustomerData,snackbar,loadingIndicator} = useCustomerFetchFunction()
    const {isMobile} = useMobileResponsive()
    let {data:citiesSpData} = useFetch('http://localhost:3008/api/customer/getSpDetailsPerCity')
    let {data:customerVehicleList} = useFetch(`http://localhost:3008/api/customer/getCustomerVehicleNumbers?customer_id=${localStorage.getItem('customer_id')}`)

    useEffect(()=>{
      const matchingSP = spList.find((sp) => sp.address === formData.address);
      if (matchingSP) {
        setFormData({
          ...formData,
          address: matchingSP.address,
        });
      } else {
        setFormData({
          ...formData,
          address: "",
        });
      }
    },[formData.select_service_provider])

  const cityArray = Object.keys(citiesSpData?.data || {}).map((cityName) => ({
    label: cityName
  }));
  const handleSelectCity = (selectedValue) => {
    // if(city){
    // const selectedCityData = citiesSpData?.data?.[city] || [];
    // setSpList(selectedCityData);
    // }
    // else{
      setCity(selectedValue);
      const selectedCityData = citiesSpData?.data?.[selectedValue] || [];
      setSpList(selectedCityData);
    // }

  };
  console.log(formData,"RAEES")

  const timeSlot = ()=> {

  const time = [
    { label: "9 AM", value: "9 AM" },
    { label: "10 AM", value: "10 AM" },
    { label: "11 AM", value: "11 AM" },
    { label: "12 PM", value: "12 PM" },
    { label: "1 PM", value: "1 PM" },
    { label: "2 PM", value: "2 PM" },
    { label: "3 PM", value: "3 PM" },
    { label: "4 PM", value: "4 PM" },
    { label: "5 PM", value: "5 PM" },
    { label: "6 PM", value: "6 PM" },
    { label: "7 PM", value: "7 PM" },
    { label: "8 PM", value: "8 PM" }

  ];
  const currentHour = getHours(new Date()); // Get the current hour

  // Filter the time slots based on the current hour
  const filteredTime = time.filter((slot) => {
    const slotHour = Number(slot.label.split(' ')[0]);
    const slotZone = slot.label.split(' ')[1]
    if(currentHour >=12){ //indicacting its pm
      if(slotZone ==='PM'){
        return slotHour > currentHour -12 && slotHour <= 8;
      }
    }
    if(currentHour <=12){
      if(slotZone ==='AM'){
        return slotHour > currentHour && slotHour < 12;
    }
   }
    // return slotHour >= currentHour && slotHour <= 8;
  });
  // console.log(filteredTime,currentHour12Hour)
  return filteredTime;
  }
  
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
        setIsSubmitted(true); // Set the form as submitted

        const requiredFields = appointmentList.filter((field) => field.required);
        const emptyRequiredFields = requiredFields.filter((field) => !formData[field.name]);
    
        if (emptyRequiredFields.length > 0) {
          return;
        }
        const obj = {
          payload:formData.select_vehicle,
          method:"GET",
          url:`http://localhost:3008/api/customer/vehicleSearch?VehicleNumber=${formData.select_vehicle}`
        }

        const {isSuccess,data,error} = await fetchCustomerData(obj)
        if(error && !isSuccess){
            throw new Error(error)
        }
        if(data && isSuccess){
        setFormData((prev)=>({...prev,...data?.result[0]}))
        }
        setIsSubmitted(false); // Set the form as submitted
    };

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleServiceProviderChange = (event) => {
      const selectedIndex = event.target.value;
      setSelectedServiceProvider(selectedIndex);
      console.log(selectedIndex)
      // Find the selected service provider's address
      const selectedSp = spList.find((sp) => sp.sp_id === selectedIndex);
      console.log("ln 168", selectedSp)
      if (selectedSp) {
        // setSelectedSpAddress(selectedSp.address);
        setFormData((prev)=>({...prev,address:selectedSp.address,sp_mobile:selectedSp.sp_mobile, sp_id : selectedSp.sp_id, business_name : selectedSp.value,}))
      } else {
        // setSelectedSpAddress("");
      }
    };

    const handleSubmit = async()=>{
        try{
                const obj = {
                payload:formData,
                method:"POST",
                url:"http://localhost:3008/api/customer/createAppointment"
            }
  
            // const {isSuccess,data,error} = 
            await fetchCustomerData(obj)
            // if(error && !isSuccess){
            //     throw new Error(error)
            // }
            // if(data && isSuccess){
            // }
            // console.log(formData);
            setFormData({})
        }
        catch(error){
            setFormData({})
        }
    }
    const appointmentList = [
        {
          label: 'Select City',
          name: "select_city",
          type: 'text',
          fullWidth: true,
          select: true,
          selectArray: []
        },
        {
          label: 'Select Service Provider',
          name: "select_service_provider",
          type: 'text',
          fullWidth: true,
          select: true,
          selectArray: spList
        },
        {
          label: 'Address',
          name: "address",
          type: 'text',
          fullWidth: true,
          disabled:true,
          row: 2,

        },
        {
          label: 'Service Provider Mobile Number',
          name: "sp_mobile",
          type: 'text',
          fullWidth: true,
          disabled:true,
          row: 1,
        },
        {
            label: 'Select Vehicle',
            name: "select_vehicle",
            type: 'text',
            fullWidth: true,
            select:true,
            selectArray:customerVehicleList?.data,
            rightIcon:true,
            required: true, // Add the required property
            errormessage: 'Select Your Vehicle', // Add the error message
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
            disabled:true
        },
        {
            label: 'Model',
            name: "model",
            type: 'text',
            fullWidth: true,
            disabled:true,

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
            name: "mobile_number",
            type: 'number',
            fullWidth: true,
            disabled:true


        },
        {
          label: 'Fuel Type',
          name: "fuel_type",
          type: 'text',
          fullWidth: true,
          disabled:true

        },
        {
          label: 'Engine Customization',
          name: "customization",
          type: 'text',
          fullWidth: true,
          disabled:true

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
          selectArray : timeSlot()
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
            label: 'Pickup Address',
            name: "pickup_address",
            type: 'text',
            fullWidth: true,
            row: 2,
      },
    ]
  return (
    <div>
      <Button sx={{height:height,width:width,fontWeight:"bold",minHeight:minHeight,borderRadius:borderRadius,maxWidth:maxWidth}} variant="contained" color={color || 'success'} onClick={handleClickOpen}>
        <Grid container><Grid my={my} xs={12} item>{img && <img  src={img} alt="Card Image" />}</Grid><Grid fontSize={isMobile && 8} xs={12} item>CREATE APPOINTMENT</Grid></Grid>
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth='lg'>

        <DialogTitle >  CREATE APPOINTMENT</DialogTitle>
        <DialogContent  sx={{pt:2,pb:0}}>
            <Grid container xs={12} mt={3}>
              <Grid item xs={12} sm={3.6} mr={!isMobile && 4}>  
                  <Box mb={1} fontSize={18}>Select City</Box>   
                  <CreateAutoCompleteTextfield fullWidth whiteColor height options = {cityArray} onSelect={handleSelectCity}/>
                  <Box mt={1} fontSize={18}>Select Service Provider</Box>   
                  <Select
                  size='small'
                  sx={{my:1}}
                  fullWidth
                    value={selectedServiceProvider}
                    onChange={handleServiceProviderChange}
                  >
                    {spList.map((sp) => (
                      <MenuItem key={sp.sp_id} value={sp.sp_id}>
                        {sp.label}
                      </MenuItem>
                    ))}
                  </Select>
                  <CreateTextFields  fields={appointmentList.slice(2,3)} onChange={handleFieldChange}  formField={formData}/>
                  <CreateTextFields  fields={appointmentList.slice(3,4)} onChange={handleFieldChange}  formField={formData}/>
                  <CreateTextFields  onSearchIconClick={handleSearchIconClick} fields={appointmentList.slice(4,5)} onChange={handleFieldChange}  formField={formData} isSubmitted={isSubmitted}/>
              </Grid>
              <Grid item xs={12} sm={3.6} mr={!isMobile && 4}>
                <Grid container xs={12} >
                <Grid  xs={12} item><CreateTextFields  fields={appointmentList.slice(5,6)} onChange={handleFieldChange}  formField={formData}/></Grid>
                  <Grid  xs={12} item><CreateTextFields fields={appointmentList.slice(6,10)} onChange={handleFieldChange} formField={formData}/></Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={3.6} >
                <Grid container xs={12}>
                <Grid  xs={12} item><CreateTextFields fields={appointmentList.slice(10,11)} onChange={handleFieldChange} formField={formData}/></Grid>
                <Grid  xs={12} item><CreateTextFields fields={appointmentList.slice(11,12)} onChange={handleFieldChange} formField={formData}/></Grid>
                  <Grid  xs={12} item><CreateDateFields fields={appointmentList.slice(12,13)} onChange={handleFieldChange} formField={formData}/></Grid>
                  <Grid  xs={12} item><CreateTextFields fields={appointmentList.slice(13,15)} onChange={handleFieldChange} formField={formData}/></Grid>
                  {formData.pickup_drop=='Company Executive' &&
                    <Grid  xs={12} item><CreateTextFields fields={appointmentList.slice(15,16)} onChange={handleFieldChange} formField={formData}/></Grid>
                  }
                  {/* {formData.pickup_drop=='Company Executive' &&
                    <Grid  xs={12} item><CreateTextFields fields={appointmentList.slice(16,17)} onChange={handleFieldChange} formField={formData}/></Grid>
                  } */}
                </Grid>
              </Grid>
            </Grid>
        </DialogContent>
        <DialogActions sx={{pt:0}}>
          <Button color='options' onClick={handleClose}>Cancel</Button>
          <Button variant={'contained'} color='options' onClick={handleSubmit}>SUBMIT</Button>
        </DialogActions>
      </Dialog>
      {snackbar}
      {loadingIndicator}
    </div>  )
}
export default AddCustomerAppointmentDialog