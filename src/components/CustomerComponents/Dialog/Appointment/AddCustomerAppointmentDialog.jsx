import React,{useEffect, useState} from 'react'
import { Alert, Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, MenuItem, Select, Snackbar, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import CreateTextFields from 'components/common/Textfield';
import { useCustomerFetchFunction, useFetch, useFetchFunction } from 'hooks/useFetch';
import ControlledRadioButtonsGroup from 'components/spComponents/Radio';
import CreateDateFields from 'components/common/Textfield/DateTextfield';
import { DatePicker } from '@mui/x-date-pickers';
import SkeletonLoading from 'components/common/Skeleton';
import { useMobileResponsive } from 'hooks/useMobileResponsive';
import CreateAutoCompleteTextfield from 'components/common/Textfield/AutoCompleteTextfield';
import { useCity } from 'hooks/useCustomContext';
const AddCustomerAppointmentDialog = ({height,width,color,minHeight,maxWidth,img,borderRadius,my}) => {
    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = useState({});
    const [spList,setSpList] = useState([])
    const { city, setCity } = useCity();
    const [selectedServiceProvider, setSelectedServiceProvider] = useState("");
    const [selectedSpAddress, setSelectedSpAddress] = useState("");
    console.log(selectedSpAddress)
    console.log(spList)
    const {fetchCustomerData,snackbar,loadingIndicator} = useCustomerFetchFunction()
    const {isMobile} = useMobileResponsive()
    let {data} = useFetch('http://localhost:3008/api/serviceprovider/getAllModelPerBrand')
    // let {data:fuelType} = useFetch('http://localhost:3008/api/admin/getAllFuelTypes')
    // const fuelNamesArray = fuelType?.data?.results?.map(item => ({
    //   label: item.fuel_name,
    //   value: item.fuel_name
    // }));
    useEffect(()=>{
      const matchingSP = spList.find((sp) => sp.address === formData.address);

      if (matchingSP) {
        // Set the address in formData.select_service_provider
        setFormData({
          ...formData,
          address: matchingSP.address,
        });
      } else {
        // If no exact match is found, set an empty string or handle the error as needed
        setFormData({
          ...formData,
          address: "",
        });
      }
    },[formData.select_service_provider])
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
  const datarrrrrr = {
    "Navi Mumbai (Maharashtra)": [
      {
         id:1,
          label: "Balaji Auto services",
          value: "Balaji Auto services",
          address: "Sector-05, shop no.-885 Brahma chowk Sanpada"
      },
      {
        id:2,
          label: "Balaji Auto services",
          value: "Balaji Auto services",
          address: "Sector-22, Sai Chowk Ghansoli"
      }
    ],
    "Islampur (Bihar)": [
      {
        id:3,
          label: "suyog auto services",
          value: "suyog auto services",
          address: "sector-25, near blue diamond"
      }
    ]
  };
  const cityArray = Object.keys(datarrrrrr).map((cityName) => ({
    label: cityName
  }));
  const handleSelectCity = (selectedValue) => {
    if(city){
    const selectedCityData = datarrrrrr[city] || [];
    setSpList(selectedCityData);
    }
    else{
      setCity(selectedValue);
      const selectedCityData = datarrrrrr[selectedValue] || [];
      setSpList(selectedCityData);
    }

  };
  let vehicleedata= [
    {
        "vehicle_id": 37,
        "customer_id": "23",
        "vehicle_number": "BH87YU1241",
        "vehicle_type": "Personal",
        "brand": "Hyundai",
        "model": "i20",
        "customization": "Externally Modified",
        "fuel_type": "Hydrogen Gas",
        "registration_number": "TRYUHS45125POIOMBC",
        "name": "Sharavni Dhambe",
        "email": "shravani@gmail.com",
        "full_address": "Thane Manpada",
        "mobile_number": "7788994455"
    }
]
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
      setFormData((prev)=>({...prev,...vehicleedata[0]}))

      // You can also update the formData or other state as needed
      // console.log(fieldName)
      // const obj = {
      //   payload:formData,
      //   method:"POST",
      //   url:"http://localhost:3008/api/customer/vehicleRegistration"
      // }

      // const {isSuccess,data,error} = await fetchCustomerData(obj)
      // if(error && !isSuccess){
      //     throw new Error(error)
      // }
      // if(data && isSuccess){
      //   setFormData({...prev,...vehicleedata[0]})
      //     setStatus({loading:false,responseStatus:data?.status})  //status has bee nactiveated or status has been inactivated
      // }
      // console.log(formData);
      // setFormData({})
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
    const handleServiceProviderChange = (event) => {
      const selectedIndex = event.target.value;
      setSelectedServiceProvider(selectedIndex);
      console.log(selectedIndex)
      // Find the selected service provider's address
      const selectedSp = spList.find((sp) => sp.id === selectedIndex);
      if (selectedSp) {
        setSelectedSpAddress(selectedSp.address);
        setFormData((prev)=>({...prev,address:selectedSp.address}))

      } else {
        setSelectedSpAddress("");
      }
    };
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
    // console.log(selectOptionsState,selectArray)
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
            disabled:true,

        },
        // {
        //     label: 'Address',
        //     name: "address",
        //     type: 'text',
        //     fullWidth: true,
        //     row: 3,
        //     disabled:true

        // },
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
          // select: true,
          // selectArray: fuelNamesArray,
          disabled:true

        },
        {
          label: 'Engine Customization',
          name: "customization",
          type: 'text',
          fullWidth: true,
          // select: true,
          // selectArray: [{ label: "Showroom Fitted", value: "Showroom Fitted" }, { label: "Externally Modified", value: "Externally Modified" }],
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
            label: 'Pickup Address',
            name: "pickup_address",
            type: 'text',
            fullWidth: true,
            row: 3,
      },
    ]
  return (
    <div>
      <Button sx={{height:height,width:width,fontWeight:"bold",minHeight:minHeight,borderRadius:borderRadius,maxWidth:maxWidth}} variant="contained" color={color || 'success'} onClick={handleClickOpen}>
        <Grid container><Grid my={my} xs={12} item>{img && <img  src={img} alt="Card Image" />}</Grid><Grid fontSize={isMobile && 8} xs={12} item>CREATE APPOINTMENT</Grid></Grid>
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth='md'>
      <div style={{width: isMobile?'100%':''}}>

        <DialogTitle >  CREATE APPOINTMENT</DialogTitle>
        <DialogContent>
            <Grid container xs={12} mt={3}>
              <Grid item xs={12} sm={3.6} mr={!isMobile && 4}>  
                  <Box mb={1} fontSize={18}>Select City</Box>   
                  <CreateAutoCompleteTextfield whiteColor height options = {cityArray} onSelect={handleSelectCity}/>
                  <Box mt={1} fontSize={18}>Select Service Provider</Box>   
                  <Select
                  sx={{my:1}}
                  fullWidth
                    value={selectedServiceProvider}
                    onChange={handleServiceProviderChange}
                  >
                    {spList.map((sp) => (
                      <MenuItem key={sp.id} value={sp.id}>
                        {sp.label}
                      </MenuItem>
                    ))}
                  </Select>
                  <CreateTextFields  fields={appointmentList.slice(2,3)} onChange={handleFieldChange}  formField={formData}/>
                  <CreateTextFields  onSearchIconClick={handleSearchIconClick} fields={appointmentList.slice(3,4)} onChange={handleFieldChange}  formField={formData}/>
                  <CreateTextFields  fields={appointmentList.slice(4,5)} onChange={handleFieldChange}  formField={formData}/>
              </Grid>
              <Grid item xs={12} sm={3.6} mr={!isMobile && 4}>
                <Grid container xs={12} >
                

                  <Grid  xs={12} item><CreateTextFields fields={appointmentList.slice(5,10)} onChange={handleFieldChange} formField={formData}/></Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={3.6} >
                <Grid container xs={12}>
                {/* <Grid  xs={12} item><CreateDateFields fields={appointmentList.slice(9,10)} onChange={handleFieldChange} formField={formData}/></Grid> */}
                <Grid  xs={12} item><CreateTextFields fields={appointmentList.slice(10,11)} onChange={handleFieldChange} formField={formData}/></Grid>
                  <Grid  xs={12} item><CreateDateFields fields={appointmentList.slice(11,12)} onChange={handleFieldChange} formField={formData}/></Grid>
                  <Grid  xs={12} item><CreateTextFields fields={appointmentList.slice(12,14)} onChange={handleFieldChange} formField={formData}/></Grid>
                  {formData.pickup_drop=='Company Executive' &&
                    <Grid  xs={12} item><CreateTextFields fields={appointmentList.slice(14,15)} onChange={handleFieldChange} formField={formData}/></Grid>
                  }

                

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
      {snackbar}
      {loadingIndicator}
    </div>  )
}

export default AddCustomerAppointmentDialog


// const data = [
//   {
//     label: "Navi Mumbai (Maharashtra)",
//   value:"Navi Mumbai (Maharashtra)",
//     ListofServiceProviders: [
//       {
//         spDetails: {
//           name:{key:"Balaji Auto services",value:"Balaji Auto services"} ,
//           address:{key: "Sector-05, shop no.-885 Brahma chowk Sanpada",value:"Sector-05, shop no.-885 Brahma chowk Sanpada"} ,
//         },
//       },
//       {
//         spDetails: {
//           name:{key:"Balaji Auto services",value:"Balaji Auto services"} ,
//           address:{key:  "Sector-22, Sai Chowk Ghansoli",value: "Sector-22, Sai Chowk Ghansoli"} ,
//           name: "Balaji Auto services",
//           address:
//         },
//       },
//     ],
//   },
//   {
//     label: "Islampur (Bihar)",
//   value:"Islampur (Bihar))",
//     ListofServiceProviders: [
//       {
//         spDetails: {
//           name:{key:"suyog auto services",value:"suyog auto services"} ,
//           address:{key: "sector-25, near blue diamond",value: "sector-25, near blue diamond"} ,
//         },
//       },
//     ],
//   },
// ];