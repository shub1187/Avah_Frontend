

import React,{useState} from 'react'
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField, ThemeProvider, Typography, createTheme, useMediaQuery } from '@mui/material';
import CreateTextFields from 'components/common/Textfield';
import { useCustomerFetchFunction, useFetch } from 'hooks/useFetch';
import ControlledRadioButtonsGroup from 'components/spComponents/Radio';
import FileInputTextField from 'components/common/Textfield/FileTextfield';
import { useMobileResponsive } from 'hooks/useMobileResponsive';

const AddCustomerVehicleDialog = ({height,width,color}) => {
    const [open, setOpen] = React.useState(false);
    const [toggle,setToggle] = useState('individual')
    let {data} = useFetch('http://localhost:3008/api/serviceprovider/getAllModelPerBrand')
    let {data:fuelType} = useFetch('http://localhost:3008/api/admin/getAllFuelTypes')
    const [isSubmitted, setIsSubmitted] = useState(false);

    // const fuelNamesArray = fuelType?.data?.results?.map(fuel => ({ fuel_name: fuel.fuel_name }));
    const fuelNamesArray = fuelType?.data?.results?.map(item => ({
      label: item.fuel_name,
      value: item.fuel_name
    }));
    const {isMobile} = useMobileResponsive()
    console.log("ln 15",fuelNamesArray)
    const {fetchCustomerData,snackbar,loadingIndicator} = useCustomerFetchFunction()
    const [status,setStatus] = useState({
      isVisible:false,
      message:"",
      loading:false,
      error:'',
      responseStatus:''
  })
    
    let brandData = data?.data?.results || []
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
    const handleSubmit = async()=>{
      try{
        setIsSubmitted(true); // Set the form as submitted
        // setStatus({loading:true,message:'',isVisible:true})
  
        const requiredFields = customerTextfield.filter((field) => field.required);
        const emptyRequiredFields = requiredFields.filter((field) => !formData[field.name]);
    
        if (emptyRequiredFields.length > 0) {
          // setStatus({ error: 'Please fill in all required fields.', message: '', loading: false });
          return;
        }
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
      }
      catch(error){
        setStatus({error:error?.message,message:'',loading:false})
        setFormData({})
      }
      setIsSubmitted(false)
      handleClose()

    }
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
            label: 'Vehicle Number',
            name: "vehicle_number",
            type: 'number',
            fullWidth:true,
            required: true, // Add the required property
            errormessage: 'Vehicle Number Required', // Add the error message

        },
        {
            label: 'Vehicle Type',
            name: "vehicle_type",
            type: 'text',
            required: true, // Add the required property
            errormessage: 'Vehicle Type Required', // Add the error message
            fullWidth:true,
            select:true,
            selectArray:[{ label: "Personal", value: "Personal" }, { label: "Commercial", value: "Commercial" }]
        },
        {
          label: 'Brand',
          name: "brand",
          type: 'text',
          fullWidth: true,
          required: true, // Add the required property
          errormessage: 'Brand Required', // Add the error message
          select:true,
          selectArray:selectArray
      },
      {
        label: 'Model',
        name: "model",
        type: 'text',
        fullWidth: true,
        select: true,
        required: true, // Add the required property
        errormessage: 'Model Required', // Add the error message
        selectArray: selectModel
      },
      {
        label: 'Engine Customization',
        name: "customization",
        type: 'text',
        fullWidth: true,
        required: true, // Add the required property
        errormessage: 'Engine Customization Required', // Add the error message
        select: true,
        selectArray: [{ label: "Showroom Fitted", value: "Showroom Fitted" }, { label: "Externally Modified", value: "Externally Modified" }],
        tooltip:true,
        tooltipMessage:'Showroom fitted means Engine varient provided by manufacturer And Externally modified means if you have customized original engine. Eample: Added outfitted CNG Kit to Petrol Engine'
      },

      {
        label: 'Chassis Number',
        name: "chassis_number",
        type: 'text',
        fullWidth: true,
        required: true, // Add the required property
        errormessage: 'Chassis Number Required', // Add the error message

      },
      {
        label: 'Fuel Type',
        name: "fuel_type",
        type: 'text',
        fullWidth: true,
        select: true,
        selectArray: fuelNamesArray,
        required: true, // Add the required property
        errormessage: 'Select Fuel Type', // Add the error message
      },
    ]

  return (
    <div>
      <Button sx={{height:isMobileResolution?'50px':height,width:width,fontSize:isMobileResolution?"0.6rem":'0.875rem'}} variant="contained" color={color || 'success'} onClick={handleClickOpen}>
        Add New Vehicle
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth='md'>
        <DialogTitle >Add New Vehicle</DialogTitle>
        <DialogContent>
            <Grid container xs={12} mt={3}>
              <Grid item xs={12} sm={5.5} mr={!isMobile && 4}>
                  <CreateTextFields  fields={customerTextfield.slice(0,1)} onChange={handleFieldChange}  formField={formData} isSubmitted={isSubmitted}/>
                  <Box mb={1} color={'#ad4970'}>No Hiphen required Eg:MH14TT3066</Box>
                  <CreateTextFields  fields={customerTextfield.slice(1,2)} onChange={handleFieldChange}  formField={formData} isSubmitted={isSubmitted}/>
                  <CreateTextFields  fields={customerTextfield.slice(2,3)} onChange={handleFieldChange}  formField={formData} isSubmitted={isSubmitted}/>
                  <CreateTextFields  fields={customerTextfield.slice(3,4)} onChange={handleFieldChange}  formField={formData} isSubmitted={isSubmitted}/>
              </Grid>
              <Grid item xs={12}  sm={5.5}>
                <Grid container xs={12}>
                <Grid  xs={12} item><CreateTextFields  fields={customerTextfield.slice(4,5)} onChange={handleFieldChange}  formField={formData} isSubmitted={isSubmitted}/></Grid>
                  <Grid  xs={12} item><CreateTextFields fields={customerTextfield.slice(5,6)} onChange={handleFieldChange} formField={formData} isSubmitted={isSubmitted}/></Grid>
                  <Grid  xs={12} item ><CreateTextFields fields={customerTextfield.slice(6,7)} onChange={handleFieldChange}  formField={formData} isSubmitted={isSubmitted}/></Grid>
                  {/* <Grid  xs={5.7} item><CreateTextFields fields={customerTextfield.slice(7,8)} onChange={handleFieldChange}  formField={formData}/></Grid>
                  <Grid  xs={5.7} item mr={2}><CreateTextFields fields={customerTextfield.slice(8,9)} onChange={handleFieldChange}  formField={formData}/></Grid> */}
                  {/* <Grid  xs={5.7} item><CreateTextFields fields={customerTextfield.slice(9,10)} onChange={handleFieldChange}  formField={formData}/></Grid> */}
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
      </Dialog>
      {snackbar}
      {loadingIndicator}
    </div>
  )
}

export default AddCustomerVehicleDialog