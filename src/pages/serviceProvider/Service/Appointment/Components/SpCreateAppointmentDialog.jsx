import React, { useEffect, useRef, useState } from 'react'
import { Alert, Autocomplete, Box, Button, Checkbox, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, InputLabel, Snackbar, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import CreateTextFields from 'components/common/Textfield';
import { useFetch, useFetchFunction } from 'hooks/useFetch';
import ControlledRadioButtonsGroup from 'components/common/Radio';
import CreateDateFields from 'components/common/Textfield/DateTextfield';
import { DatePicker } from '@mui/x-date-pickers';
import SkeletonLoading from 'components/common/Skeleton';
import { useMobileResponsive } from 'hooks/useMobileResponsive';
import { useDialogWrapperContext } from 'components/common/Dialog/DialogWrapper';
import { requiredTextfield } from 'utils/customFunctions';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './SpCreateAppointmentDialog.scss'
import emailjs from '@emailjs/browser'
import { parse, isToday, getHours } from 'date-fns';
import { debounce } from '@mui/material/utils'
import URL from 'url/apiURL';

const { getAllVehicleList, getSpecificVehicleDetailsForSpAppt, createAppointment } = URL.SERVICE_PROVIDER.SERVICE.APPOINTMENT

const generateRandom5Digit = () => {
  // Generate a random number between 10000 and 99999 (inclusive)
  const random5Digit = Math.floor(10000 + Math.random() * 90000);
  return random5Digit;
}
const SpCreateAppointmentDialog = ({ height, width, color, minHeight, maxWidth, img, borderRadius, my }) => {
  // const [open, setOpen] = React.useState(false);
  const { handleClose, handleOpen, setIsSubmitted, isSubmitted } = useDialogWrapperContext()
  const [formData, setFormData] = useState({});
  const [autoCompleteData, setAutocompleteData] = useState({ selectOptions: [], selectedOptionData: {} })
  const form = useRef()
  const [phone, setPhone] = useState({
    buttonName: 'CONFIRM APPOINTMENT VIA OTP',
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

  const { fetchData, snackbar, loadingIndicator } = useFetchFunction()
  const { isMobile } = useMobileResponsive()
  let { data } = useFetch('http://localhost:3008/api/serviceprovider/getAllModelPerBrand')
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
  useEffect(() => {
    if (phone.inputErrorMessage) {
      const time = setTimeout(() => setPhone((prev) => ({ ...prev, inputErrorMessage: false })), 3000)
      return () => clearTimeout(time)
    }
  }, [phone.inputErrorMessage])

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
            buttonName: 'Creating Appointment ...',
            buttonDisable: true,
            // showOtpInput:true,
            // inputErrorMessageToggler:true,
            otpErrorColor: '#007232',
            otpErrorMessageToggler: true,
            otpErrorMessage: 'Otp Authenticated Successfully !'
          }))
          //MAKE API CALL AFTER 1 SEC FOR UI LOOK
          setTimeout(async () => {
            const obj = {
              payload: formData,
              method: "POST",
              url: createAppointment
            }
            await fetchData(obj)
            setTimeout(() => {
              handleClose()
            }, 2000)
          }, 1000)

        }
      }
    } catch (error) {
      console.log(error.text);
    }
  };

  const debouncedApiCallOnInputChange = debounce(async (e) => {
    const obj = {
      method: "GET",
      url: `${getAllVehicleList}?q=${e.target.value}`,
      noLoading: true,
      noSnackbar: true
    }

    if (e.target.value != 0 || e.target.value) {
      let { data: autoCompleteData } = await fetchData(obj)
      setAutocompleteData((prev) => ({ ...prev, selectOptions: autoCompleteData }))
    }
  }, 1000)

  const autoCompleteOnSelect = async (e, value) => {
    if (e.target.innerHTML) {
      const obj = {
        method: "GET",
        url: `${getSpecificVehicleDetailsForSpAppt}?vehicle_number=${e.target.innerHTML}`,
        noLoading: true,
        noSnackbar: true
      }
      let { data: apiData } = await fetchData(obj)
      if (apiData) setAutocompleteData((prev) => ({ ...prev, selectedOptionData: apiData }))
    }
  }

  const timeSlot = () => {

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

    const appointmentDate = parse(formData?.appointment_date, "yyyy-MM-dd", new Date());
    const isAppointmentDateToday = isToday(appointmentDate);
    if (isAppointmentDateToday || !formData?.appointment_date) {
      const currentHour = getHours(new Date()); // Get the current hour
      const filteredTime = time?.filter((slot) => {
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
      console.log(filteredTime, 'raees')
      return filteredTime
    }
    else {
      return time
    }
  }

  const appointmentList = [
    {
      label: 'Vehicle Type',
      name: "vehicle_type",
      type: 'text',
      fullWidth: true,
      disabled: true,
    },
    {
      label: 'Brand',
      name: "brand",
      type: 'text',
      fullWidth: true,
      disabled: true
    },
    {
      label: 'Model',
      name: "model",
      type: 'text',
      fullWidth: true,
      disabled: true,

    },
    {
      label: 'Mobile',
      name: "mobile_number",
      type: 'number',
      fullWidth: true,
      disabled: true
    },
    {
      label: 'Fuel Type',
      name: "fuel_type",
      type: 'text',
      fullWidth: true,
      disabled: true

    },
    {
      label: 'Engine Customization',
      name: "customization",
      type: 'text',
      fullWidth: true,
      disabled: true

    },
    {
      label: 'Complaints Details',
      name: "complaints",
      type: 'text',
      fullWidth: true,
      row: 2,
      multiline: true,

    },
    {
      label: 'KM Driven',
      name: "kilometers_driven",
      type: 'number',
      fullWidth: true,
      required: true,
      errormessage: 'Enter the km driven',
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
      select: true,
      selectArray: timeSlot() || [],
      required: true,
      errormessage: 'Select Appointment Time',
    },
    {
      label: 'Pickup And Drop',
      name: "pickup_drop",
      type: 'text',
      fullWidth: true,
      select: true,
      required: true,
      errormessage: 'Select the pickup type',
      selectArray: [
        {
          label: 'Company Executive',
          value: "Company Executive"
        },
        {
          label: 'Self Drive',
          value: "Self Drive"
        }
      ]
    },
    {
      label: 'Pickup Address',
      name: "pickup_address",
      type: 'text',
      fullWidth: true,
      row: 2,
      multiline: true,
      required: true,
      errormessage: 'Enter the Pickup Address',
    },
    {
      label: 'Email',
      name: "email",
      type: 'text',
      fullWidth: true,
      size: true,
      required: true,
      errormessage: 'Email required for OTP validation',
      disabled: true

    },
    {
      label: 'Otp',
      name: "otp",
      type: 'number',
      fullWidth: true,
    },
  ]


  return (
    <div>
      <form ref={form} onSubmit={handleSubmit}>
        <DialogContent sx={{ pt: 2, pb: 0 }}>
          <input type='hidden' value={phone.otp} name={'otp_number'}></input>
          <Grid container xs={12} >
            <Grid item xs={12} sm={3.6} mr={!isMobile && 4}>
              <InputLabel sx={{ color: "black", marginBottom: 1 }}>Select Vehicle</InputLabel>
              <Autocomplete
                noOptionsText={'Search Here'}
                options={autoCompleteData?.selectOptions || []}
                renderInput={(params) => <TextField {...params} size='small' />}
                onChange={(e, value) => autoCompleteOnSelect(e, value)}
                onInputChange={(e) => debouncedApiCallOnInputChange(e)}
              />
              <CreateTextFields fields={appointmentList.slice(0, 4)} onChange={handleFieldChange} formField={formData} isSubmitted={isSubmitted} />
            </Grid>
            <Grid item xs={12} sm={3.6} mr={!isMobile && 4}>
              <Grid container xs={12} >
                <Grid xs={12} item><CreateTextFields fields={appointmentList.slice(4, 8)} onChange={handleFieldChange} formField={formData} isSubmitted={isSubmitted} /></Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={3.6} >
              <Grid container xs={12}>
                <Grid xs={12} item><CreateDateFields fields={appointmentList.slice(8, 9)} onChange={handleFieldChange} formField={formData} isSubmitted={isSubmitted} /></Grid>
                <Grid xs={12} item><CreateTextFields fields={appointmentList.slice(9, 11)} onChange={handleFieldChange} formField={formData} isSubmitted={isSubmitted} /></Grid>
                {formData.pickup_drop == 'Company Executive' &&
                  <Grid xs={12} item><CreateTextFields fields={appointmentList.slice(11, 12)} onChange={handleFieldChange} formField={formData} isSubmitted={isSubmitted} /></Grid>
                }
                <Grid xs={12} item>
                  <CreateTextFields fields={appointmentList.slice(12, 13)} onChange={handleFieldChange} formField={formData} isSubmitted={isSubmitted} />
                  {phone.inputErrorMessageToggler && (<Box
                    color={phone.errorColor}
                    fontSize={13}
                  >
                    {phone.inputErrorMessage === 'OTP GENERATED SUCCESSFULLY !' && <CheckCircleIcon style={{ color: 'rgb(5,131,30)', cursor: 'pointer', marginRight: '5px' }} />}
                    {phone.inputErrorMessage}</Box>)}
                </Grid>
                {phone.showOtpInput && (
                  <Grid xs={12} item>
                    <CreateTextFields fields={appointmentList.slice(13, 14)} onChange={handleFieldChange} formField={formData} isSubmitted={isSubmitted} />
                    {phone.otpErrorMessageToggler && <Box
                      color={phone.otpErrorColor}
                      fontSize={13}
                    >
                      {phone.otpErrorMessage}
                    </Box>}
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>

        </DialogContent>
        <DialogActions>
          <Button color='options' onClick={handleClose}>Cancel</Button>
          {/* <button type='submit' >SignUp</button> */}
          <Button variant={'contained'} color='options' disabled={phone.buttonDisable} type='submit'>
            {phone.buttonName} &nbsp; {phone.buttonName === 'Sending OTP' && (<CircularProgress color="inherit" thickness={2} size="1rem" />)}
          </Button>
        </DialogActions>
        {snackbar}
        {loadingIndicator}
      </form>
    </div>)
}

export default SpCreateAppointmentDialog