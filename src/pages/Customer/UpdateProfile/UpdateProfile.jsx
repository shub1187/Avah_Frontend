import React,{useEffect, useState} from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Alert, Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Snackbar, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import CreateTextFields from 'components/common/Textfield';
import { useFetch, useFetchFunction,useCustomerFetchFunction } from 'hooks/useFetch';
import ControlledRadioButtonsGroup from 'components/spComponents/Radio';
import CreateDateFields from 'components/common/Textfield/DateTextfield';
import { DatePicker } from '@mui/x-date-pickers';
import SkeletonLoading from 'components/common/Skeleton';
import { useMobileResponsive } from 'hooks/useMobileResponsive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const UpdateCustomerProfile = ({height,width,color,minHeight,maxWidth,img,borderRadius,my}) => {
    const [open, setOpen] = React.useState(false);
    let customer_id = localStorage.getItem("customer_id")
    const [formData, setFormData] = useState({"customer_id":customer_id});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const {fetchData} = useFetchFunction()
    const {fetchCustomerData,snackbar,loadingIndicator} = useCustomerFetchFunction()
    const {isMobile} = useMobileResponsive()
    let {data:profileData} = useFetch('http://localhost:3008/api/customer/getAllCitiesPerState')
    const [data,setData] = React.useState([]) 
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
  const selectArray = profileData?.result.map((brandEntry) => {
    const brandName = Object.keys(brandEntry)[0]; // Get the brand name
    const formattedBrandValue = brandName.toLowerCase().replace(/ /g, '_'); // Format the value
  
    return {
      label: brandName,
      value: brandName
    };
  });
let selectModel = []
const selectedBrand = formData.state ? formData.state.toLowerCase().replace(/ /g, '_') : ''; // Format selected brand or null if not selected
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
    useEffect(()=>{
      const func = async()=>{
      const obj = {
        payload:formData,
        method:"POST",
        url:"http://localhost:3008/api/customer/getCustomerProfile"
         }
         const {isSuccess,data,error} = await fetchCustomerData(obj)
         setData(data)
        }
        func()
      },[])
      console.log("ln 30 UpdateProfile.jsx data: ", data)

      // let profileData = data?.result

    const [status,setStatus] = useState({
      isVisible:false,
      message:"",
      loading:false,
      error:'',
      responseStatus:''
  })
  console.log(formData,"RAEES")
    const handleFieldChange = (fieldName, value) => {
            setFormData((prevData) => ({ ...prevData, [fieldName]: value }));
    };

    const handleSubmit = async()=>{
        try{
            setIsSubmitted(true); // Set the form as submitted
            setStatus({loading:true,message:'',isVisible:true})

            const requiredFields = profileList.filter((field) => field.required);
            const emptyRequiredFields = requiredFields.filter((field) => !formData[field.name]);
        
            if (emptyRequiredFields.length > 0) {
              // setStatus({ error: 'Please fill in all required fields.', message: '', loading: false });
              return;
            }
            const obj = {
                payload:formData,
                method:"POST",
                url:"http://localhost:3008/api/customer/profileCompletion"
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

    }
    
    const profileList = [
        {
            label: 'Address',
            name: "address",
            type: 'text',
            fullWidth: true,
            required: true, // Add the required property
            errormessage: 'Please Fill in your Address', // Add the error message
        },
        {
            label: 'Mobile Number',
            name: "mobile_number",
            type: 'number',
            fullWidth: true,
            required: true, // Add the required property
            errormessage: 'Please Fill in your Mobile Number', // Add the error message
        },
        {
          label: 'State',
          name: "state",
          type: 'text',
          fullWidth: true,
          required: true, // Add the required property
          errormessage: 'State Required', // Add the error message
          select:true,
          selectArray:selectArray
      },
      {
        label: 'City',
        name: "city",
        type: 'text',
        fullWidth: true,
        required: true, // Add the required property
        errormessage: 'City Required', // Add the error message
        select:true,
        selectArray:selectModel
    },
    {
      label: 'Pincode',
      name: "pincode",
      type: 'number',
      fullWidth: true,
      required: true, // Add the required property
      errormessage: 'Pincode Required', // Add the error message
  },
    ]
  return (
    <div>
      <div style={{width: isMobile?'100%':1200}}>
        <DialogTitle >  <Typography fontWeight={'bold'} fontSize={25} sx={{textDecoration:'underline'}}>PROFILE</Typography><Box component={'span'} ml={4}></Box></DialogTitle>
        <DialogContent>
            <Grid container xs={12} flexDirection={'column'}>
            <Box display='flex'>
              <Box>
                <Typography  my={1} fontWeight={'bold'} fontSize={20}>Name : <Typography fontSize={20} sx={{color:'rgb(173,73,112)'}} fontWeight={'bold'}  component={'span'}>{profileData?.name??""}</Typography></Typography>
                <Typography my={1} fontWeight={'bold'} fontSize={20}>Email : <Typography fontSize={20} sx={{color:'rgb(173,73,112)'}} fontWeight={'bold'} component={'span'}>{profileData?.email??""}</Typography></Typography>
              </Box>
              <Box mx={5}>
                <Typography  my={1} fontWeight={'bold'} fontSize={20}>Full Address : <Typography fontSize={20} sx={{color:'rgb(173,73,112)'}} fontWeight={'bold'}  component={'span'}>{profileData?.address??""}</Typography></Typography>
                <Typography my={1} fontWeight={'bold'} fontSize={20}>Mobile Number : <Typography fontSize={20} sx={{color:'rgb(173,73,112)'}} fontWeight={'bold'} component={'span'}>{profileData?.mobile_number??""}</Typography></Typography>
              </Box>
            </Box>
              <Grid item xs={12} sm={12} mr={!isMobile && 4}>
              <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography fontSize={20} fontWeight={'bold'}>{profileData?.button_name=="Complete your Profile"?'Complete your Profile':'Update Your Profile'}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <CreateTextFields  fields={profileList} onChange={handleFieldChange}  formField={formData} isSubmitted={isSubmitted}/>
                    <Box>
                        <Button variant={'contained'} color='options' onClick={handleSubmit}>{profileData?.button_name=="Complete your Profile"?'Complete your Profile':'Update Your Profile'}</Button>
                    </Box>
                </AccordionDetails>
                  {/* <TextField values={formData[]}/> */}
                  </Accordion>
              </Grid>
            </Grid>

        </DialogContent>
        </div>
      {snackbar}
      {loadingIndicator}
    </div>  )
}

export default UpdateCustomerProfile