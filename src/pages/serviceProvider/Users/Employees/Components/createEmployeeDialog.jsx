import React, { useState, useEffect } from 'react'
import { Alert, Autocomplete, Box, Button, Checkbox, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, InputLabel, Snackbar, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import CreateTextFields from 'components/common/Textfield';
import { useFetch } from 'hooks/useFetch';
import ControlledRadioButtonsGroup from 'components/common/Radio';
import { useFetchFunction } from 'hooks/useFetch';
import SkeletonLoading from 'components/common/Skeleton';
import URL from 'url/apiURL'
import CreateAutoCompleteTextfield from 'components/common/Textfield/AutoCompleteTextfield';
import { useDialogWrapperContext } from 'components/common/Dialog/DialogWrapper';
import { requiredTextfield } from 'utils/customFunctions';

const { createEmployee, getAllPermissionPerRoles } = URL.SERVICE_PROVIDER.USERS.EMPLOYEES

const CreateEmployeeDialog = ({ height, width, color }) => {
  const { handleClose, isMobile, isSubmitted, setIsSubmitted, formData, setFormData } = useDialogWrapperContext()
  const { fetchData, snackbar, loadingIndicator } = useFetchFunction()
  const { data: { data: rolesList } } = useFetch(`${getAllPermissionPerRoles}?sp_id=${localStorage.getItem('sp_id')}`)

  const handleFieldChange = (fieldName, value) => setFormData((prevData) => ({ ...prevData, [fieldName]: value }));
  const handleRoleSelect = (value) => setFormData((prev) => ({ ...prev, 'role': value.label, 'permission_granted': value.permissions }))

  const handleSubmit = async () => {

    setIsSubmitted(true)
    if(requiredTextfield(employeeTextField,formData)){
      setTimeout(()=>setIsSubmitted(false),2000)
      return
    }
    if(formData.password !==formData.reEnterPassword){
      
    }
    const obj = {
      payload: formData,
      method: "POST",
      url: createEmployee
    }
    await fetchData(obj)
    setFormData({})
    setIsSubmitted(false)

  }

  const employeeTextField = [
    {
      label: 'Name',
      name: "name",
      type: 'text',
      fullWidth: true,
      required:true,
      errormessage:'Name is Required'
        },
    {
      label: 'Email',
      name: "email",
      type: 'email',
      fullWidth: true,
      required:true,
      errormessage:'Email is Required'
    },
    {
      label: 'Mobile',
      name: "mobile",
      type: 'number',
      fullWidth: true,
      required:true,
      errormessage:'Mobile Number is Required'
    },
    {
      label: 'Gender',
      name: "gender",
      type: 'text',
      fullWidth: true,
      select: true,
      required:true,
      errormessage:'Pick the Gender',
      selectArray: [
        {
          label: 'Male',
          value: "Male"
        },
        {
          label: 'Female',
          value: "Female"
        },
      ]

    },
    {
      label: 'Address',
      name: "address",
      type: 'text',
      fullWidth: true,
      row: 4,
      required:true,
      errormessage:'Address is Required'
    },
    {
      label: 'Role',
      name: "role",
      type: 'text',
      fullWidth: true,
      required:true,
      errormessage:'Role is Required'

    },
    {
      label: 'Permission Granted',
      name: "permission_granted",
      type: 'text',
      fullWidth: true

    },

    {
      label: 'Country',
      name: "country",
      type: 'text',
      required:true,
      errormessage:'Country is Required'
    },
    {
      label: 'State',
      name: "state",
      type: 'text',
      required:true,
      errormessage:'State is Required'
    },
    {
      label: 'City',
      name: "city",
      type: 'text',
      required:true,
      errormessage:'City is Required'
    },
    {
      label: 'Pincode',
      name: "pin_code",
      type: 'number',
      fullWidth: true,
      required:true,
      errormessage:'Pincode Required'
    },
    {
      label: 'PAN Number',
      name: "pan_number",
      type: 'text',
      required:true,
      errormessage:'PAN Number is Required'
    },
    {
      label: 'Password',
      name: "password",
      type: 'password',
      required:true,
      errormessage:'Password is Required'
    },
    {
      label: 'Re-enter Password',
      name: "reEnterPassword",
      type: 'rePassword',
      fullWidth: true,
      required:true,
      errormessage:'Please re-enter your password'
    },
  ]

  return (
    <div>
      <DialogContent>
        <Grid container xs={12} mt={3}>
          <Grid item xs={3.6} mr={4}>
            <CreateTextFields fields={employeeTextField.slice(0, 5)} onChange={handleFieldChange} formField={formData} isSubmitted={isSubmitted} />
          </Grid>
          <Grid item xs={3.6} mr={4}>
            <Grid container xs={12}>
              <Grid item xs={12}><CreateAutoCompleteTextfield options={rolesList} whiteColor fullWidth fields={employeeTextField.slice(5, 6)} onSelect={handleRoleSelect} formField={formData} isSubmitted={isSubmitted} /></Grid>
              <Grid item xs={12} mb={2}>
                <InputLabel sx={{ mb: 1 }}>Permissions</InputLabel>
                <Autocomplete
                  freeSolo
                  disabled
                  multiple
                  id="fixed-tags-demo"
                  value={formData.permission_granted || ''}
                  options={[]}
                  getOptionLabel={''}
                  renderTags={(tagValue, getTagProps) =>
                    tagValue.map((option, index) => (
                      <Chip
                        label={formData.permission_granted[index]}
                        // {...getTagProps({ index })}
                        disabled={formData.permission_granted[index]}

                      />
                    ))
                  }
                  renderInput={(params) => (
                    <TextField {...params} size='small' />
                  )}
                />
              </Grid>
              {/* <Grid xs={12} item><CreateTextFields  fields={employeeTextField.slice(6,7)} onChange={handleFieldChange} formField={formData}/></Grid> */}
              <Grid xs={5.7} item mr={1}><CreateTextFields fields={employeeTextField.slice(7, 8)} onChange={handleFieldChange} formField={formData} isSubmitted={isSubmitted} /></Grid>
              <Grid xs={5.7} item><CreateTextFields fields={employeeTextField.slice(8, 9)} onChange={handleFieldChange} formField={formData} isSubmitted={isSubmitted} /></Grid>
              <Grid xs={5.7} item mr={1}><CreateTextFields fields={employeeTextField.slice(9, 10)} onChange={handleFieldChange} formField={formData} isSubmitted={isSubmitted} /></Grid>
              <Grid xs={5.7} item><CreateTextFields fields={employeeTextField.slice(10, 11)} onChange={handleFieldChange} formField={formData} isSubmitted={isSubmitted} /></Grid>
            </Grid>
          </Grid>
          <Grid item xs={3.6} >
            <Grid container xs={12}>
              <Grid xs={12} item><CreateTextFields fields={employeeTextField.slice(11, 14)} onChange={handleFieldChange} formField={formData} isSubmitted={isSubmitted} /></Grid>
              <Grid xs={12}><ControlledRadioButtonsGroup onChange={handleFieldChange} title={'STATUS'} formField={formData} name={'status'} /></Grid>
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button color='options' onClick={handleClose}>Cancel</Button>
        <Button variant={'contained'} color='options' onClick={handleSubmit}>SUBMIT</Button>
      </DialogActions>
      {snackbar}
      {loadingIndicator}
    </div>
  )
}

export default CreateEmployeeDialog