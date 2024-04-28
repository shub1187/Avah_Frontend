import { Button, DialogActions, DialogContent } from "@mui/material"
import { useDialogWrapperContext } from "components/common/Dialog/DialogWrapper"
import CreateTextFields from "components/common/Textfield"
import { useFetchFunction } from "hooks/useFetch"
import { requiredTextfield } from "utils/customFunctions"
import URL from "url/apiURL"

const {getAllModels} = URL.ADMIN.VEHICLESETTINGS.MODELS
const ModelAdminDialog = () => {
  const { handleClose, handleOpen, setIsSubmitted, isSubmitted ,formData,setFormData} = useDialogWrapperContext()
  const {fetchData,snackbar,loadingIndicator} = useFetchFunction()


  const handleSubmit = async()=>{
    setIsSubmitted(true); 
    let isRequired = requiredTextfield(manufactureList,formData)  
    if(isRequired) {
      setTimeout(() => {
          setIsSubmitted(false)
      }, [2000]);
      return
    } 

    const obj = {
          payload:formData,
          method:"POST",
          url:getAllModels
    }

    await fetchData(obj)
    setFormData({})
    setIsSubmitted(false)
    setTimeout(()=>handleClose(),2000)
  }

  const handleFieldChange = (fieldName, value) => setFormData((prevData) => ({ ...prevData, [fieldName]: value }))

  const manufactureList = [
    {
      label: 'Model Name',
      name: "brand_name",
      type: 'text',
      fullWidth: true,
      required: true,
      errormessage: 'Brand Name Required',
    },
  ]

  return (
    <>
      <DialogContent sx={{mt:2,mb:2}}>
          <CreateTextFields fields={manufactureList} onChange={handleFieldChange}  formField={formData} isSubmitted={isSubmitted} />
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