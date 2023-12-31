import React,{useState, useEffect} from 'react'
import { Alert, Autocomplete, Box, Button, Checkbox, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, InputLabel, Snackbar, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import CreateTextFields from 'components/common/Textfield';
import { useFetch } from 'hooks/useFetch';
import ControlledRadioButtonsGroup from 'components/common/Radio';
import { useFetchFunction } from 'hooks/useFetch';
import SkeletonLoading from 'components/common/Skeleton';
import URL from 'url/apiURL'
import CreateAutoCompleteTextfield from 'components/common/Textfield/AutoCompleteTextfield';
import { useDialogWrapperContext } from 'components/common/Dialog/DialogWrapper';

const {createEmployee} = URL.SERVICE_PROVIDER.USERS.EMPLOYEES//ADD URL

const CreateEmployeeDialog = ({height,width,color}) => {
    const {handleClose,isMobile,isSubmitted,setIsSubmitted,formData,setFormData} = useDialogWrapperContext()
    const {fetchData,snackbar,loadingIndicator} = useFetchFunction()
    const {data:rolesList} = useFetch()//PUT THE URL //AFTER THAT REPLACE LINE 148
    
    const handleFieldChange = (fieldName, value) => setFormData((prevData) => ({ ...prevData, [fieldName]: value }));
    const handleRoleSelect = (value)=> setFormData((prev)=>({ ...prev, 'role': value.label ,'permissions':value.permissions}))

    const results = [
      {label:'Hello',value:'Hello',permissions:['Spare','Labour','Setting']},
      {label:'Hell',value:'Hell',permissions:['Role','User','Setting']},
      {label:'Bye',value:'Bye',permissions:['Service','Labour','Setting']},
      {label:'Dell',value:'HEllo',permissions:['Spare','Service','Setting']}
    ]

    const handleSubmit = async()=>{
          const obj = {
              payload:formData,
              method:"POST",
              url:createEmployee
          }
          await fetchData(obj)
          setFormData({})
  }

    const employeeTextField = [
        {
            label:'Name',
            name:"name",
            type:'text',
            fullWidth:true
        },
        {
            label:'Email',
            name:"email",
            type:'email',
            fullWidth:true

        },
        {
            label: 'Mobile',
            name: "mobile",
            type: 'number',
            fullWidth:true

        },
        {
            label: 'Gender',
            name: "gender",
            type: 'text',
            fullWidth:true,
            select:true,
            selectArray:[
              {
                label:'Male',
                value:"male"
              },
              {
                label:'Female',
                value:"female"
              },
            ]

        },
        {
          label: 'Address',
          name: "address",
          type: 'text',
          fullWidth:true,
          row:4
      },
        {
            label: 'Role',
            name: "role",
            type: 'text',
            fullWidth:true

        },
        {
          label: 'Permission',
          name: "permission_granted",
          type: 'text',
          fullWidth:true

      },

        {
            label: 'Country',
            name: "country",
            type: 'text'
        },
        {
            label: 'State',
            name: "state",
            type: 'text'
        },
        {
            label: 'City',
            name: "city",
            type: 'text'
        },
        {
            label: 'Pincode',
            name: "pin_code",
            type: 'number',
            fullWidth:true
        },
        {
            label: 'PAN Number',
            name: "pan_number",
            type: 'number'
        },
        {
            label: 'Password',
            name: "password",
            type: 'password'
        },
        {
            label: 'Re-enter Password',
            name: "reEnterPassword",
            type: 'rePassword',
            fullWidth:true
        },
    ]

  return (
    <div>
        <DialogContent>
            <Grid container xs={12} mt={3}>
              <Grid item xs={3.6} mr={4}>
                  <CreateTextFields fields={employeeTextField.slice(0,5)} onChange={handleFieldChange}  formField={formData}/>
              </Grid>
              <Grid item xs={3.6} mr={4}>
                <Grid container xs={12}>
                <Grid item xs={12}><CreateAutoCompleteTextfield options={results}  whiteColor fullWidth  fields={employeeTextField.slice(5,6)} onSelect={handleRoleSelect}  formField={formData}/></Grid>
                <Grid item xs={12} mb={2}>
                  <InputLabel sx={{mb:1}}>Permissions</InputLabel>
                  <Autocomplete
                    freeSolo
                    disabled
                      multiple
                      id="fixed-tags-demo"
                      value={formData.permissions || '' }
                      options={[]}
                      getOptionLabel={''}
                      renderTags={(tagValue, getTagProps) =>
                        tagValue.map((option, index) => (
                          <Chip
                            label={formData.permissions[index] }
                            {...getTagProps({ index })}
                            disabled={formData.permissions[index] }
                          />
                        ))
                      }
                      renderInput={(params) => (
                        <TextField {...params} size='small'/>
                      )}
                    />
                </Grid>
                {/* <Grid xs={12} item><CreateTextFields  fields={employeeTextField.slice(6,7)} onChange={handleFieldChange} formField={formData}/></Grid> */}
                  <Grid  xs={5.7} item mr={1}><CreateTextFields fields={employeeTextField.slice(7,8)} onChange={handleFieldChange}  formField={formData}/></Grid>
                  <Grid  xs={5.7} item><CreateTextFields fields={employeeTextField.slice(8,9)} onChange={handleFieldChange}  formField={formData}/></Grid>
                  <Grid  xs={5.7} item mr={1}><CreateTextFields fields={employeeTextField.slice(9,10)} onChange={handleFieldChange}  formField={formData}/></Grid>
                  <Grid  xs={5.7} item><CreateTextFields fields={employeeTextField.slice(10,11)} onChange={handleFieldChange}  formField={formData}/></Grid>
                </Grid>
              </Grid>
              <Grid item xs={3.6} >
                <Grid container xs={12}>
                  <Grid  xs={12} item><CreateTextFields fields={employeeTextField.slice(11,14)} onChange={handleFieldChange} formField={formData}/></Grid>
                  <Grid xs={12}><ControlledRadioButtonsGroup onChange={handleFieldChange} title={'STATUS'} formField={formData} name={'status'}/></Grid>
                </Grid>
              </Grid>
            </Grid>
        </DialogContent>
        <DialogActions>
          <Button color='options' onClick={handleClose}>Cancel</Button>
          <Button variant={'contained'} color='options' onClick={handleSubmit}>SUBMIT</Button>
        </DialogActions>
    </div>
  )
}

export default CreateEmployeeDialog