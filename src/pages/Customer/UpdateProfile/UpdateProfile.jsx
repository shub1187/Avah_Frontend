import React,{useEffect, useState} from 'react'
import { Alert, Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Snackbar, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import CreateTextFields from 'components/common/Textfield';
import { useFetch, useFetchFunction } from 'hooks/useFetch';
import ControlledRadioButtonsGroup from 'components/spComponents/Radio';
import CreateDateFields from 'components/common/Textfield/DateTextfield';
import { DatePicker } from '@mui/x-date-pickers';
import SkeletonLoading from 'components/common/Skeleton';
import { useMobileResponsive } from 'hooks/useMobileResponsive';
const UpdateCustomerProfile = ({height,width,color,minHeight,maxWidth,img,borderRadius,my}) => {
    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = useState({});
    const {fetchData} = useFetchFunction()
    const {isMobile} = useMobileResponsive()
    let {data} = useFetch('http://localhost:3008/api/customer/getCustomerProfile')
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
    console.log(selectModel,selectArray)

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
    
    const profileList = [
        {
            label: 'Name',
            name: "name",
            type: 'text',
            fullWidth: true,
            disabled:true
        },
        {
            label: 'Address',
            name: "address",
            type: 'text',
            fullWidth: true
        },
        {
            label: 'Email',
            name: "email",
            type: 'email',
            fullWidth: true,
            disabled:true
        },
        {
            label: 'Mobile Number',
            name: "mobile_number",
            type: 'number',
            fullWidth: true
        },
    ]
  return (
    <div>
      {/* <Dialog open={open} onClose={handleClose} maxWidth='lg'> */}
      <div style={{width: isMobile?'100%':1200}}>

        <DialogTitle >  PROFILE<Box component={'span'} ml={4}></Box></DialogTitle>
        <DialogContent>
            <Grid container xs={12} mt={3}>
              <Grid item xs={12} sm={5} mr={!isMobile && 4}>
                  <CreateTextFields  fields={profileList.slice(0,2)} onChange={handleFieldChange}  formField={formData}/>
                  {/* <TextField values={formData[]}/> */}
              </Grid>
              <Grid item xs={12} sm={5} mr={!isMobile && 4}>
                  <CreateTextFields  fields={profileList.slice(2,4)} onChange={handleFieldChange}  formField={formData}/>
                  {/* <TextField values={formData[]}/> */}
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
        {/* <DialogActions> */}
        <Box ml={3}>
          <Button color='options' onClick={handleClose}>Cancel</Button>
          <Button variant={'contained'} color='options' onClick={handleSubmit}>{data.button_name=="Complete your Profile"?'Complete your Profile':'Update Your Profile'}</Button>
        </Box>
        {/* </DialogActions> */}
        </div>
      {/* </Dialog> */}
      {status.loading && <SkeletonLoading />}
            {(!status.loading && status.error ) &&<Snackbar open={snackbar} autoHideDuration={2000} onClose={handleSnackBarFunction}  color='error'><Alert severity='error'>{status.error}</Alert></Snackbar>}
    </div>  )
}

export default UpdateCustomerProfile