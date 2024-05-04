import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material"
import CreateTextFields from "components/common/Textfield"
import { useFetchFunction } from "hooks/useFetch";
import { useRef, useState } from "react";
import { generateRandom5Digit, requiredTextfield } from "utils/customFunctions";
import emailjs from '@emailjs/browser'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import URL from "url/apiURL";

const {customerResetPassword, serviceprovideResetPassword, adminResetPassword} = URL.LOGIN_REGISTER
const ForgotPassword = ({goBack, user}) => {
console.log("ln 12", user, adminResetPassword)
    const [formData, setFormData] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const {snackbar,loadingIndicator,fetchData} = useFetchFunction()
    const [matchingPasswordError,setMatchingPasswordError] = useState(false)
    const form = useRef()
    const [phone, setPhone] = useState({
        buttonName: 'Reset Password',
        buttonDisable: false,
        showOtpInput: false,
        inputErrorMessageToggler: false,
        inputErrorMessage: 'Please Enter 10 Digit Mobile Number',
        errorColor: '#e93848',
        otpErrorMessageToggler: false,
        otpErrorMessage: 'Otp is required',
        otpErrorColor: '#e93848',
        otp: generateRandom5Digit(),
        otpCalled: 0
      })

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitted(true);

        try {
            let isRequired = requiredTextfield(forgotPasswordTextfield, formData);
            console.log(isRequired)
            if (isRequired) {
            // IF ERROR THEN CLOSE THE ERROR MESSAGES AFTER 2 SECONDS
            setTimeout(() => {
                setIsSubmitted(false);
            }, 2000);
            return;
            }

            if(formData.password !=formData.cnfPassword){
                setMatchingPasswordError(true)
                setTimeout(() => {
                    setMatchingPasswordError(false)
                }, [2000]);
                return
            }

            //FIRST TIME OTP CALL
            if (phone.otpCalled === 0) {
            setPhone((prev) => ({
                ...prev,
                buttonName: 'Sending OTP',
                buttonDisable: true,
                // showOtpInput:true,
                inputErrorMessageToggler: false
            }))
            const result = await emailjs.sendForm(
                'service_g3zcdsq',
                'template_31iekfm',
                form.current,
                'DOdYs7DMCnx0zCOM7'
            );
            //IF OTP IS SENT SUCCESFULLY
            if (result.status === 200) {
                setPhone((prev) => ({
                ...prev,
                buttonName: 'Validate OTP',
                buttonDisable: false,
                showOtpInput: true,
                inputErrorMessageToggler: true,
                errorColor: '#007232',
                inputErrorMessage: 'OTP GENERATED SUCCESSFULLY !',
                otpCalled: 1

                }))
            }
            }
            //IF ALREADY CALLED MORE THAN ONE TIME
            else {
            //IF OTP FIELD EMPTY THROW EMPTY ERROR
            if (!formData.otp) {
                setPhone((prev) => ({
                ...prev,
                otpErrorColor: '#e93848',
                otpErrorMessageToggler: true,
                otpErrorMessage: 'OTP is Required'
                }))
            }
            //IF OTP NOT CORRECT THROW INCORRECT OT ERROR
            else if (formData.otp != phone.otp) {
                setPhone((prev) => ({
                ...prev,

                otpErrorColor: '#e93848',
                otpErrorMessageToggler: true,
                otpErrorMessage: 'Incorrect Otp'
                }))
            }
            //IF OTP MATCHES
            else if (formData.otp == phone.otp) {
                setPhone((prev) => ({
                ...prev,
                buttonName: 'Resetting Password ...',
                buttonDisable: true,
                // showOtpInput:true,
                // inputErrorMessageToggler:true,
                otpErrorColor: '#007232',
                otpErrorMessageToggler: true,
                otpErrorMessage: 'Otp Authenticated Successfully !'
                }))
                //MAKE API CALL AFTER 1 SEC FOR UI LOOK
                setTimeout(async () => {
                    const url = user==='serviceProvider'? serviceprovideResetPassword : user==='customer' ? customerResetPassword : 'admin'? adminResetPassword : ''
                const obj = {
                    payload: formData,
                    method: "POST",
                    url: url
                }
                const {isSuccess} = await fetchData(obj)
                setTimeout(() => {
                    goBack()
                }, 2000)
                if(!isSuccess){
                    setPhone((prev)=>({...prev,buttonName:'RESET PASSWORD',otpErrorMessageToggler: true,otpErrorMessage: 'Something Went Wrong',otpErrorColor: '#e93848',}))
                    setTimeout(() => {
                        goBack()
                    }, 2000)
                }
                }, 1000)

            }
            }
        } catch (error) {
            console.log(error.text);
        }
    };
    const handleFieldChange = (fieldName, value) => {
        setFormData((prevData) => ({ ...prevData, [fieldName]: value }));
    };

    const updatePasswordFunction = ()=>{

        setIsSubmitted(true)
        let isRequired = requiredTextfield(forgotPasswordTextfield,formData)
        if(isRequired) {
            setTimeout(() => {
                setIsSubmitted(false)
            }, [2000]);
            return
        } 
        if(formData.password !=formData.cnfPassword){
            setMatchingPasswordError(true)
            setTimeout(() => {
                setMatchingPasswordError(false)
            }, [2000]);
            return
        }
        // let url = ''
        // if(payload.role ==='customer') url = URL.LOGIN_REGISTER.register_customer
        // if(payload.role === 'service provider')url = URL.LOGIN_REGISTER.register_service_provider

        // let {data:regesterDetails} = fetchData({url,method:"POST",payload})
        // if(regesterDetails){
        //     setLogin(!login)
        // }
        setIsSubmitted(false)
        setFormData({})
    }

    let forgotPasswordTextfield = [
        {
            label:"Email",
            name:"email",
            type:"email",
            fullWidth:true,
            required:true,
            errormessage:'Email required for OTP validation'

        },
        {
            label:"Password",
            name:"password",
            type:"password",
            fullWidth:true,
            required:true,
            errormessage:'Password is Required'
        },
        {
            label:"Confirm Password",
            name:"cnfPassword",
            type:"password",
            fullWidth:true,
            required:true,
            errormessage:'Confirm Password is Required'
        },
        {
            label: 'Enter Otp',
            name: "otp",
            type: 'number',
            fullWidth: true,
          },
    ]
  return (
    <>
        <form ref={form} onSubmit={handleSubmit}>
            <input type='hidden' value={phone.otp} name={'otp_number'}></input>
            <input type='hidden' value={formData?.email} name={'email'}></input>
            <input type='hidden' value={formData?.name} name={'name'}></input>
        <Box className='textfields'>
            <Box className='smaller-container'>
                <CreateTextFields fields={forgotPasswordTextfield.slice(0,3)} formField={formData} onChange={handleFieldChange} isSubmitted={isSubmitted} />
                <Grid>
                {phone.inputErrorMessageToggler && (<Box
                    color={phone.errorColor}
                    fontSize={13}
                  >
                    {phone.inputErrorMessage === 'OTP GENERATED SUCCESSFULLY !' && <CheckCircleIcon style={{ color: 'rgb(5,131,30)', cursor: 'pointer', marginRight: '5px' }} />}
                    {phone.inputErrorMessage}</Box>)}
                </Grid>
                {phone.showOtpInput && (
                  <Grid xs={12} item>
                    <CreateTextFields fields={forgotPasswordTextfield.slice(3, 4)} onChange={handleFieldChange} formField={formData} isSubmitted={isSubmitted} />
                    {phone.otpErrorMessageToggler && <Box
                      color={phone.otpErrorColor}
                      fontSize={13}
                    >
                      {phone.otpErrorMessage}
                    </Box>}
                  </Grid>
                )}
                {matchingPasswordError && <Typography mb={1} color={'error'}>Password and confirm password must match</Typography>}
                <Box className='flex jc-flex-end'>
                    <Button variant={'contained'} color='options' disabled={phone.buttonDisable} type='submit'>
                        {phone.buttonName} &nbsp; {phone.buttonName === 'Sending OTP' && (<CircularProgress color="inherit" thickness={2} size="1rem" />)}
                    </Button>
                    {/* <Button sx={{mr:1}} color='options' variant='contained' onClick={updatePasswordFunction}>Update Password</Button> */}
                    <Button sx={{ml:1}} color='options' variant='contained' onClick={goBack}>Back</Button>
                </Box>
            </Box>
        </Box>
        {snackbar}
        {loadingIndicator}
        </form>
    </>
  )
}

export default ForgotPassword