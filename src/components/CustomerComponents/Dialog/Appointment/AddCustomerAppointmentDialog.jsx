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
import {getHours,format,isToday, parse} from 'date-fns'
import { useDialogWrapperContext } from 'components/common/Dialog/DialogWrapper';
import { requiredTextfield } from 'utils/customFunctions';
const AddCustomerAppointmentDialog = ({height,width,color,minHeight,maxWidth,img,borderRadius,my}) => {

    const {handleClose,isMobile,isSubmitted,setIsSubmitted,formData,setFormData} = useDialogWrapperContext()
    const [spList,setSpList] = useState([])
    const { city, setCity } = useCity();
    const {fetchCustomerData,snackbar,loadingIndicator} = useCustomerFetchFunction()
 
    let {data:citiesSpData} = useFetch('http://localhost:3008/api/customer/getSpDetailsPerCity')
    let {data:customerVehicleList} = useFetch(`http://localhost:3008/api/customer/getCustomerVehicleNumbers?customer_id=${localStorage.getItem('customer_id')}`)
  
    useEffect(()=>{
      const matchingSP = spList.find((sp) => sp.address === formData.address);
      if (matchingSP) {
        setFormData((prev)=>({
          ...prev,
          address: matchingSP.address,
          sp_mobile:matchingSP.sp_mobile
        }));
      } else {
        setFormData((prev)=>({
          ...prev,
          address: "",
          sp_mobile:""
        }));
      }
    },[formData.select_service_provider])

  const cityArray = Object.keys(citiesSpData?.data || {}).map((cityName) => ({
    label: cityName
  }));

  const handleSelectCity = (selectedValue) => {
      const selectedCityData = citiesSpData?.data?.[selectedValue.label] || [];
      setSpList(selectedCityData);
      setFormData((prev)=>({...prev,address:'',sp_mobile:'',select_city:selectedValue.label}))
  };

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
    ];

    const appointmentDate = parse(formData.appointment_date, "yyyy-MM-dd", new Date());
    const isAppointmentDateToday = isToday(appointmentDate);
    if (isAppointmentDateToday || !formData.appointment_date) {
      const currentHour = getHours(new Date()); // Get the current hour
      const filteredTime = time.filter((slot) => {
        const slotHour = Number(slot.label.split(' ')[0]);
        const slotZone = slot.label.split(' ')[1]
        if (currentHour >= 12) { //indicacting its pm
          if (slotZone === 'PM') {
            return slotHour > currentHour - 12 && slotHour <= 6;
          }
        }
        if (currentHour <= 12) {
          if (slotZone === 'AM') {
            return slotHour > currentHour && slotHour < 12;
          }
        }
      });
      return filteredTime;
    }
    else{
      return time
    }
  }
  
    const handleFieldChange = (fieldName, value) => {
        if (fieldName === "select_city") {
            setFormData((prevData) => ({
              ...prevData,
              [fieldName]: value,
              select_service_provider: "" 
            }));
          } 
          else if (fieldName=="appointment_date"){
            setFormData((prevData) => ({
              ...prevData,
              [fieldName]: value,
              appointment_time: "" 
            }));
          }
          else {
            setFormData((prevData) => ({ ...prevData, [fieldName]: value }));
          }
    };
    const handleSearchIconClick = async(fieldName) => {
         if(!fieldName) return
        const obj = {
          payload:fieldName.label,
          method:"GET",
          url:`http://localhost:3008/api/customer/vehicleSearch?VehicleNumber=${fieldName.label}`
        }
        const {isSuccess,data,error} = await fetchCustomerData(obj)
        if(error && !isSuccess){
            throw new Error(error)
        }
        if(data && isSuccess){
        setFormData((prev)=>({...prev,...data?.result[0]}))
        }
        setIsSubmitted(false); 
    };


    const handleServiceProviderChange = (obj) => {
      setFormData(p=>({...p,address:'',sp_mobile:''}))
      const selectedSp = spList.find((sp) => sp.sp_id === obj.sp_id);
      if (selectedSp) {
        setFormData((prev)=>({...prev,address:selectedSp.address,sp_mobile:selectedSp.sp_mobile, sp_id : selectedSp.sp_id, business_name : selectedSp.value,select_service_provider :obj.label }))
      }
    };

    const handleSubmit = async()=>{
        setIsSubmitted(true); 
        let isRequired = requiredTextfield(appointmentList,formData)  
        if(isRequired) {
          setTimeout(() => {
              setIsSubmitted(false)
          }, [2000]);
          return
        } 
    
        const obj = {
              payload:formData,
              method:"POST",
              url:"http://localhost:3008/api/customer/createAppointment"
        }

        await fetchCustomerData(obj)
        setFormData({})
        setIsSubmitted(false)
        setTimeout(()=>handleClose(),2000)
      }

    const appointmentList = [
        {
          label: 'Select City',
          name: "select_city",
          type: 'text',
          fullWidth: true,
          required: true, 
          errormessage: 'Select desired City', 
        },
        {
          label: 'Select Service Provider',
          name: "select_service_provider",
          type: 'text',
          fullWidth: true,
          required: true, 
          errormessage: 'Select Service Provider', 
        },
        {
          label: 'Address',
          name: "address",
          type: 'text',
          fullWidth: true,
          disabled:true,
          row: 2,
          multiline : true
        },
        {
          label: 'Service Provider Mobile Number',
          name: "sp_mobile",
          type: 'text',
          fullWidth: true,
          disabled:true,
        },
        {
            label: 'Select Vehicle',
            name: "vehicle_number",
            type: 'text',
            fullWidth: true,
            select:true,
            selectArray:customerVehicleList?.data,
            required: true, 
            errormessage: 'Select Your Vehicle', 
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
            required: true, 
            errormessage: 'Select Appointment Date', 

        },
        {
          label: 'Appointment Time',
          name: "appointment_time",
          type: 'date',
          fullWidth: true,
          select:true,
          selectArray : timeSlot(),
          required: true,
          errormessage: 'Select Appointment Time', 
      },
        {
          label: 'Pickup And Drop',
          name: "pickup_drop",
          type: 'text',
          fullWidth: true,
          select:true,
          required: true,
          errormessage: 'Select the pickup type', 
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
            required: true, 
            errormessage: 'Enter the Pickup Address', 
      },
    ]
  return (
    <div>
        <DialogContent  sx={{pt:2,pb:0}}>
            <Grid container xs={12} mt={3}>
              <Grid item xs={12} sm={3.6} mr={!isMobile && 4}>  
                  <CreateAutoCompleteTextfield fullWidth whiteColor height options={cityArray} fields={appointmentList.slice(0,1)} onChange={handleFieldChange} onSelect={handleSelectCity}  formField={formData} isSubmitted={isSubmitted}/>
                  <CreateAutoCompleteTextfield  fullWidth whiteColor height options={spList} fields={appointmentList.slice(1,2)} onChange={handleFieldChange} onSelect={handleServiceProviderChange}  formField={formData} isSubmitted={isSubmitted}/>
                  <CreateTextFields  fields={appointmentList.slice(2,3)} onChange={handleFieldChange}  formField={formData} />
                  <CreateTextFields  fields={appointmentList.slice(3,4)} onChange={handleFieldChange}  formField={formData} />
                  <CreateAutoCompleteTextfield fullWidth whiteColor height options={customerVehicleList?.data} fields={appointmentList.slice(4,5)} onChange={handleFieldChange} onSelect={handleSearchIconClick} formField={formData} isSubmitted={isSubmitted} />
              </Grid>
              <Grid item xs={12} sm={3.6} mr={!isMobile && 4}>
                <Grid container xs={12} >
                <Grid  xs={12} item><CreateTextFields  fields={appointmentList.slice(5,6)} onChange={handleFieldChange}  formField={formData} /></Grid>
                  <Grid  xs={12} item><CreateTextFields fields={appointmentList.slice(6,10)} onChange={handleFieldChange} formField={formData} /></Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={3.6} >
                <Grid container xs={12}>
                <Grid  xs={12} item><CreateTextFields fields={appointmentList.slice(10,11)} onChange={handleFieldChange} formField={formData} /></Grid>
                <Grid  xs={12} item><CreateTextFields fields={appointmentList.slice(11,12)} onChange={handleFieldChange} formField={formData}/></Grid>
                  <Grid  xs={12} item><CreateDateFields fields={appointmentList.slice(12,13)} onChange={handleFieldChange} formField={formData} isSubmitted={isSubmitted}/></Grid>
                  <Grid  xs={12} item><CreateTextFields fields={appointmentList.slice(13,15)} onChange={handleFieldChange} formField={formData} isSubmitted={isSubmitted}/></Grid>
                  {formData.pickup_drop=='Company Executive' &&
                    <Grid  xs={12} item><CreateTextFields fields={appointmentList.slice(15,16)} onChange={handleFieldChange} formField={formData} isSubmitted={isSubmitted}/></Grid>
                  }
                </Grid>
              </Grid>
            </Grid>
        </DialogContent>
        <DialogActions sx={{pt:0}}>
          <Button color='options' onClick={handleClose}>Cancel</Button>
          <Button variant={'contained'} color='options' onClick={handleSubmit}>SUBMIT</Button>
        </DialogActions>
      {snackbar}
      {loadingIndicator}
    </div>  )
}
export default AddCustomerAppointmentDialog