import { Button, DialogActions, DialogContent } from "@mui/material"
import { useDialogWrapperContext } from "components/common/Dialog/DialogWrapper"
import CreateTextFields from "components/common/Textfield"
import { useFetchFunction } from "hooks/useFetch"
import { capitalizeFirstLetter, requiredTextfield } from "utils/customFunctions"
import URL from "url/apiURL"

const {createBrand} = URL.ADMIN.VEHICLESETTINGS.MANUFACTURER
const AddManufacturerDialog = () => {
  const { handleClose, handleOpen, setIsSubmitted, isSubmitted ,formData,setFormData,tableRef} = useDialogWrapperContext()
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
          payload:{brand_name : capitalizeFirstLetter(formData?.brand_name)},
          method:"POST",
          url:createBrand
    }

    await fetchData(obj)
    tableRef?.current?.onQueryChange()
    setFormData({})
    setIsSubmitted(false)
    setTimeout(()=>handleClose(),2000)
  }

  const handleFieldChange = (fieldName, value) => setFormData((prevData) => ({ ...prevData, [fieldName]: value }))

  const manufactureList = [
    {
      label: 'Brand Name*',
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

export default AddManufacturerDialog