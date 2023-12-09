import React,{useEffect, useRef, useState} from 'react'
import { Alert, Box, Button, Checkbox, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, InputLabel, Snackbar, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import CreateTextFields from 'components/common/Textfield';
import { useFetch, useFetchFunction } from 'hooks/useFetch';
import ControlledRadioButtonsGroup from 'components/spComponents/Radio';
import CreateDateFields from 'components/common/Textfield/DateTextfield';
import { DatePicker } from '@mui/x-date-pickers';
import SkeletonLoading from 'components/common/Skeleton';
import { useMobileResponsive } from 'hooks/useMobileResponsive';
import { useDialogWrapperContext } from 'components/common/Dialog/DialogWrapper';
import { requiredTextfield } from 'utils/customFunctions';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './SpCreateAppointmentDialog.scss'
import emailjs from '@emailjs/browser'

const generateRandom5Digit = ()=> {
  // Generate a random number between 10000 and 99999 (inclusive)
  const random5Digit = Math.floor(10000 + Math.random() * 90000);
  return random5Digit;
}
const SpCreateAppointmentDialog = ({height,width,color,minHeight,maxWidth,img,borderRadius,my}) => {
    // const [open, setOpen] = React.useState(false);
    const {handleClose, handleOpen, setIsSubmitted, isSubmitted} = useDialogWrapperContext()
    const [formData, setFormData] = useState({});
    const form = useRef()
    const [phone,setPhone] = useState({
      buttonName:'CONFIRM APPOINTMENT VIA OTP',
      buttonDisable:false,
      showOtpInput:false,
      inputErrorMessageToggler:false,
      inputErrorMessage:'Please Enter 10 Digit Mobile Number',
      errorColor:'#e93848',
      otpErrorMessageToggler:false,
      otpErrorMessage:'Otp is required',
      otpErrorColor:'#e93848',
      otp:generateRandom5Digit(),
      otpCalled:0
    })
    console.log(phone)
    const {fetchData,snackbar,loadingIndicator} = useFetchFunction()
    const {isMobile} = useMobileResponsive()
    let {data} = useFetch('http://localhost:3008/api/serviceprovider/getAllModelPerBrand')
    let brandData = data?.data?.results || []

    const selectArray = brandData.map((brandEntry) => {
        const brandName = Object.keys(brandEntry)[0]; // Get the brand name
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
                    selectModel.push({
                        label: label,
                        value: label
                    });
                });
            }
        });
    } 
    useEffect(()=>{
      if(phone.inputErrorMessage){
        const time = setTimeout(()=>setPhone((prev)=>({...prev,inputErrorMessage:false})),3000)
        return ()=>clearTimeout(time)
      }
    },[phone.inputErrorMessage])
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

    // const handleSubmit = ()=>{
    //       try{
            // setIsSubmitted(true)
          //   let isRequired = requiredTextfield(appointmentList,formData)
          //   if(isRequired) {
          //     //IF ERROR THEN CLOSE THE ERROR MESSAGES AFTER 2 SECOND
          //     setTimeout(() => {
          //         setIsSubmitted(false)
          //     }, [2000]);
          //     return
          // }

          
            // const obj = {
            //     payload:formData,
            //     method:"POST",
            //     url:"http://localhost:3008/api/serviceprovider/createAppointment"
            // }
            // if(formData.phone_number.length!==12){
            //   setPhone((prev)=>(
            //     {...prev,
            //       inputErrorMessageToggler:true,
            //       errorColor:'#e93848',
            //       inputErrorMessage:'Please Enter 10 Digit Mobile Number',
            //       showOtpInput:false
            //     }))
            //   return
            // }

            // setPhone((prev)=>({...prev,
            //   buttonName:'Sending OTP',
            //    buttonDisable:true,
            //    showOtpInput:true,
            //    inputErrorMessageToggler:false
            //   }))

            // await fetchData(obj)
            // setFormData({})
            // setTimeout(()=>setPhone((prev)=>({...prev,
            //   buttonName:'Validate OTP',
            //   buttonDisable:false,
            //   showOtpInput:true,
            //   inputErrorMessageToggler:true,
            //   errorColor:'#007232',
            //   inputErrorMessage:'OTP GENERATED SUCCESSFULLY !'
            // })),4000)
            // let result =  onSignUp()
            // console.log(result)
            // if(result==='success'){
            //   setPhone((prev)=>({...prev,
            //     buttonName:'Validate OTP',
            //     buttonDisable:false,
            //     showOtpInput:true,
            //     inputErrorMessageToggler:true,
            //     errorColor:'#007232',
            //     inputErrorMessage:'OTP GENERATED SUCCESSFULLY !'
            //   }))
            // }
          // }
          // catch(e){
          //   console.log(e)
          // }
            // setIsSubmitted(false)
    // }
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitted(true);
    
      try {
        let isRequired = requiredTextfield(appointmentList, formData);
        console.log(isRequired)
        if (isRequired) {
          // IF ERROR THEN CLOSE THE ERROR MESSAGES AFTER 2 SECONDS
          setTimeout(() => {
            setIsSubmitted(false);
          }, 2000);
          return;
        }

        //FIRST TIME OTP CALL
        if(phone.otpCalled===0){ 
          setPhone((prev)=>({...prev,
            buttonName:'Sending OTP',
              buttonDisable:true,
              // showOtpInput:true,
              inputErrorMessageToggler:false
          }))
          const result = await emailjs.sendForm(
            'service_g3zcdsq',
            'template_31iekfm',
            form.current,
            'DOdYs7DMCnx0zCOM7'
          );
          //IF OTP IS SENT SUCCESFULLY
          if(result.status===200){
            setPhone((prev)=>({...prev,
                buttonName:'Validate OTP',
                buttonDisable:false,
                showOtpInput:true,
                inputErrorMessageToggler:true,
                errorColor:'#007232',
                inputErrorMessage:'OTP GENERATED SUCCESSFULLY !',
                otpCalled:1

              }))
          }
        }
        //IF ALREADY CALLED MORE THAN ONE TIME
        else{
          //IF OTP FIELD EMPTY THROW EMPTY ERROR
          if(!formData.otp){
            setPhone((prev)=>({...prev,
              otpErrorColor:'#e93848',
              otpErrorMessageToggler:true,
              otpErrorMessage:'OTP is Required'
            }))
          }
          //IF OTP NOT CORRECT THROW INCORRECT OT ERROR
          else if(formData.otp!=phone.otp){
            setPhone((prev)=>({...prev,
  
              otpErrorColor:'#e93848',
              otpErrorMessageToggler:true,
              otpErrorMessage:'Incorrect Otp'
            }))
          }
          //IF OTP MATCHES
          else if(formData.otp==phone.otp){
            setPhone((prev)=>({...prev,
              buttonName:'Creating Appointment ...',
              buttonDisable:true,
              // showOtpInput:true,
              // inputErrorMessageToggler:true,
              otpErrorColor:'#007232',
              otpErrorMessageToggler:true,
              otpErrorMessage:'Otp Authenticated Successfully !'
            }))
            //MAKE API CALL AFTER 1 SEC FOR UI LOOK
            setTimeout(async()=>{
              const obj = {
                payload:formData,
                method:"POST",
                url:"http://localhost:3008/api/serviceprovider/createAppointment"
            }
              await fetchData(obj)
              setTimeout(()=>{
                handleClose()
              },2000)
            },1000)

          }
        }


        // console.log(result.text,result);
      } catch (error) {
        console.log(error.text);
      }
    };
    // const handleSubmit = (e) => {
    //   e.preventDefault()
      // setIsSubmitted(true)
      //   let isRequired = requiredTextfield(appointmentList,formData)
      //   if(isRequired) {
      //     //IF ERROR THEN CLOSE THE ERROR MESSAGES AFTER 2 SECOND
      //     setTimeout(() => {
      //         setIsSubmitted(false)
      //     }, [2000]);
      //     return
      //   }
    //   emailjs.sendForm('service_g3zcdsq',
    //   'template_31iekfm',form.current,
    //   'DOdYs7DMCnx0zCOM7')
    //   .then((result)=>{
    //     console.log(result.text)
    //   },
    //   (error)=>{
    //     console.log(error.text)
    //   }
    //   )
      
    // }
    
    
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
        // {
        //     label: 'Email',
        //     name: "email",
        //     type: 'email',
        //     fullWidth: true,
        //     size:true


        // },
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
        {
          label: 'Email',
          name: "email",
          type: 'text',
          fullWidth: true,
          size:true,
          required:true,
          errormessage:'Email required for OTP validation'

      },
      //   {
      //     label: 'Phone Number || Eg : 9522641252',
      //     name: "phone_number",
      //     type: 'number',
      //     fullWidth: true,
      //     required:true,
      //     errormessage:'PHone number requreid for OTP validation'
      // },
      {
        label: 'Otp',
        name: "otp",
        type: 'number',
        fullWidth: true,
        // required:true,
        // errormessage:'PHone number requreid for OTP validation'
    },
    ]
  
  return (
    <div>
        <form ref={form} onSubmit={handleSubmit}>
        <DialogContent sx={{pt:2,pb:0}}>

             <input type='hidden' value={phone.otp} name={'otp_number'}></input>

            <Grid container xs={12} >
              <Grid item xs={12} sm={3.6} mr={!isMobile && 4}>
                  <CreateTextFields  fields={appointmentList.slice(0,5)} onChange={handleFieldChange}  formField={formData}/>
              </Grid>
              <Grid item xs={12} sm={3.6} mr={!isMobile && 4}>
                <Grid container xs={12} >
                  <Grid  xs={12} item><CreateTextFields fields={appointmentList.slice(5,8)} onChange={handleFieldChange} formField={formData}/></Grid>
                  {/* <Grid  xs={12} item><CreateTextFields fields={appointmentList.slice(8,9)} onChange={handleFieldChange} formField={formData}/></Grid> */}
                </Grid>
              </Grid>
              <Grid item xs={12} sm={3.6} >
                <Grid container xs={12}>
                  <Grid  xs={12} item><CreateDateFields fields={appointmentList.slice(8,9)} onChange={handleFieldChange} formField={formData}/></Grid>
                  <Grid  xs={12} item><CreateDateFields fields={appointmentList.slice(9,10)} onChange={handleFieldChange} formField={formData}/></Grid>
                  <Grid  xs={12} item>
                    <CreateTextFields fields={appointmentList.slice(10,12)} onChange={handleFieldChange} formField={formData} isSubmitted={isSubmitted}/>
                    {phone.inputErrorMessageToggler && (<Box
                      color={phone.errorColor}
                      fontSize={13}
                      // className={`errorMessage ${phone.inputErrorMessage ? 'visible' : 'hidden'}`}
                      >
                        {phone.inputErrorMessage==='OTP GENERATED SUCCESSFULLY !' && <CheckCircleIcon style={{color:'rgb(5,131,30)',cursor:'pointer',marginRight:'5px'}}/>}
                        {phone.inputErrorMessage}</Box>)}
                  </Grid>
                  {phone.showOtpInput && (
                    <Grid xs={12} item>
                    <CreateTextFields fields={appointmentList.slice(12,13)} onChange={handleFieldChange} formField={formData} isSubmitted={isSubmitted}/>
                    {phone.otpErrorMessageToggler && <Box
                     color={phone.otpErrorColor}
                      fontSize={13}
                    >
                      {phone.otpErrorMessage}
                    </Box>}
                    {/* <InputLabel>OTP</InputLabel>
                    <TextField fullWidth size='small'/> */}
                    </Grid>
                  )}
                  {/* <Grid xs={12}>
                    <PhoneInput
                      placeholder='+91' 
                      country={'in'} 
                      value={phone}
                      onChange={phone => setPhone({ phone })}
                      defaultErrorMessage={"It doesn't works, why?"}
                      
                      isValid={()=>{return false}}
                      inputProps={{
                        name: 'phone',
                        required: true,
                       }}
                    />
                     </Grid>            */}
                </Grid>
              </Grid>
            </Grid>

        </DialogContent>
        <DialogActions>
          <Button color='options' onClick={handleClose}>Cancel</Button>
          {/* <button type='submit' >SignUp</button> */}
          <Button variant={'contained'} color='options' disabled={phone.buttonDisable}  type='submit'>
            {phone.buttonName} &nbsp; {phone.buttonName==='Sending OTP' && (<CircularProgress  color="inherit" thickness={2} size="1rem"/>)}
            </Button>
        </DialogActions>
        {snackbar}
        {loadingIndicator}
        </form>
    </div>  )
}

export default SpCreateAppointmentDialog