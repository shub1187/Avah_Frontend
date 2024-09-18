import { Autocomplete, Button, Chip, DialogActions, DialogContent, InputLabel, TextField } from "@mui/material"
import { useDialogWrapperContext } from "components/common/Dialog/DialogWrapper"
import CreateTextFields from "components/common/Textfield"
import { useFetch, useFetchFunction } from "hooks/useFetch"
import { requiredTextfield } from "utils/customFunctions"
import URL from "url/apiURL"
import { useState } from "react"

const {createModel, getAllBrandsAutoFill, getAllFuelTypeAutoFill} = URL.ADMIN.VEHICLESETTINGS.MODELS
const ModelAdminDialog = () => {
  const { handleClose, handleOpen, setIsSubmitted, isSubmitted ,formData,setFormData,tableRef} = useDialogWrapperContext()
  const [isError,setIsError] = useState({fuel:false,brand:false})
  const {fetchData,snackbar,loadingIndicator} = useFetchFunction()
  let {data:brandData} = useFetch(getAllBrandsAutoFill)
  let {data:fuelData} = useFetch(getAllFuelTypeAutoFill)

  let mappedFuelData = fuelData?.data?.map((val)=>val?.value)
  let mappedBrandData = brandData?.data?.map((val)=>val?.value)

  const handleSubmit = async()=>{
    setIsSubmitted(true); 
    if(formData?.brand_name?.length===0 || !formData?.brand_name){
      setIsError((prev)=>({...prev,brand:true}))
      setTimeout(() => {
        setIsError((prev)=>({...prev,brand:false}))
      }, [2000])
      return
    }
    let isRequired = requiredTextfield(manufactureList,formData)  
    if(isRequired) {
      setTimeout(() => {
          setIsSubmitted(false)
      }, [2000]);
      return
    }
    if(formData?.fuel_type?.length===0 || !formData?.fuel_type){
      setIsError((prev)=>({...prev,fuel:true}))
      setTimeout(() => {
        setIsError((prev)=>({...prev,fuel:false}))
      }, [2000])
      return
    }
    const obj = {
          payload:formData,
          method:"POST",
          url:createModel
    }

    await fetchData(obj)
    tableRef?.current?.onQueryChange()
    setFormData({fuel_type : []})
    setIsSubmitted(false)
    setTimeout(()=>handleClose(),2000)
  }

  const handleFieldChange = (fieldName, value) => setFormData((prevData) => ({ ...prevData, [fieldName]: value }))

  const manufactureList = [
    {
      label: 'Model Name*',
      name: "model_name",
      type: 'text',
      fullWidth: true,
      required: true,
      errormessage: 'Model Name Required',
    },
  ]

  return (
    <>
      <DialogContent sx={{mt:2,mb:2}}>
      <InputLabel sx={{ mb: 1 }}>Brand Name*</InputLabel>
          <Autocomplete
            freeSolo
            // disabled
            // multiple
            id="fixed-tags-demo"
            value={ formData?.brand_name}
            options={mappedBrandData || []}
            onChange={(event, value) => handleFieldChange('brand_name',value)} 
            getOptionLabel={(option)=>option}
            renderTags={(tagValue, getTagProps) =>
              tagValue.map((option, index) => (
                <Chip
                  label={option|| ''}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField 
                {...params} 
                size='small'                                 
                error={isError?.brand}
                helperText={isError?.brand ? 'Please Select the brand' : ''}/>
            )}
          />
          <CreateTextFields fields={manufactureList} onChange={handleFieldChange}  formField={formData} isSubmitted={isSubmitted} />
          <InputLabel sx={{ mb: 1 }}>Fuel Type*</InputLabel>
                <Autocomplete
                  freeSolo
                  // disabled
                  multiple
                  id="fixed-tags-demo"
                  value={ formData?.fuel_type || []}
                  options={mappedFuelData || []}
                  onChange={(event, value) => handleFieldChange('fuel_type',value)} 
                  getOptionLabel={(option)=>option}
                  renderTags={(tagValue, getTagProps) =>
                    tagValue.map((option, index) => (
                      <Chip
                        label={option|| ''}
                        {...getTagProps({ index })}
                      />
                    ))
                  }
                  renderInput={(params) => (
                    <TextField 
                      {...params} 
                      size='small'                                 
                      error={isError?.fuel}
                      helperText={isError?.fuel ? 'Must Select One Fuel Type Atleast' : ''}/>
                  )}
                />
      </DialogContent>
      <DialogActions>
          <Button color='options' onClick={handleClose}>Cancel</Button>
          {/* <button type='submit' >SignUp</button> */}
          <Button variant={'contained'} color='options' onClick={handleSubmit}>
            SUBMIT
          </Button>
        </DialogActions>
        {snackbar}
        {loadingIndicator}
    </>
  )
}

export default ModelAdminDialog