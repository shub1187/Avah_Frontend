import React, { useState, useRef, useEffect } from 'react'
import Dialog from '@mui/material/Dialog';
import { useAsyncDebounce } from 'react-table';
import { imageCongis } from '../../../../configs/imageConfigs';
import { useDispatch } from 'react-redux';
import { CreateUser } from '../../user/common/UserAction';
import SearchDropDown from '../../common/SearchDropDown';
import { da } from 'date-fns/locale';
import { Box } from '@mui/material';
import MultipleSelect from 'components/Select/Admin/MultiSelect';

function AddRoleDialog() {

    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');
    const [type, setType] = React.useState('');
    const [fuelTypeSelect ,setFuelTypeSelect] = React.useState([])
    console.log(fuelTypeSelect)
    const fuelTypeSet = (val)=>{
        setFuelTypeSelect(val)
    }
    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    // const onDialogDismiss = useAsyncDebounce(value => {
    //     handleClose()
    // }, 3000)

    const handleClose = () => {
        if (open) {
            setOpen(false)
            setErrorMessage("")
        }

    }

    const setAddRoleDialog = (props) => {

        if (!open) {
            setType(props)
            setOpen(!open)
            // onDialogDismiss()
        }
    }

    const dispatch = useDispatch()


    const [brandName, setBrandName] = useState("")
    const [brandId, setBrandId] = useState("")
    console.log("check ln 54",brandId)
    const [error, setErrorMessage] = useState("")
    const [bindSelectDropDown] = SearchDropDown()

    const AddBrandName = (fullList) => {
        let idName=""
        let title = ""
        let name = ""
        let errorMsg = ""
        let modelFuelSelect = false
        if (type == "ManufacturersPage") {
            title = "ADD Manufacturer"
            name = "Brand NAME"
            errorMsg = "Enter Brand Name"
        }
        else if (type == "ModelsPage") {
            title = "ADD Models"
            name = "Model NAME "
            errorMsg = "Enter Model  Name"
            idName="Brand Id"
            modelFuelSelect=true
        }

        else if (type == "FuelTypePage") {
            title = "ADD Fuel Type"
            name = "Fuel Type"
            errorMsg = "Enter Fuel Type Name"
        }
        else if (type == "CategoryPage") {
            title = "ADD Category"
            name = "Category Name"
            errorMsg = "Enter Category Name"
        }
        else if (type == "SubCategoryPage") {
            title = "ADD SubCategory"
            name = "Sub Category Name"
            errorMsg = "Enter Sub Category Name"
            idName="Category Id"
        }


        function handleSelect(data) {
            console.log('argument from Child: ', data);
            setBrandId(data.brand_name)
        }


        return (<div className='p-5'>

            <h2 className='d-title text-center'>{title}</h2>
            <div className="row gx-5 gy-4 mt-4">
                {
                    type == "ModelsPage" || type=="SubCategoryPage" ?

                        <div className="col-md-12">
                            <label htmlFor="inputName" className="d-label-name"> {idName} </label>
                            {bindSelectDropDown({ handleSelect }, fullList,type)}
                        </div>

                        : null
                }

                <div className="col-md-12">
                    <label htmlFor="inputName" className="d-label-name">{name}</label>
                    <input type="text" className="inputfield" id="inputName" placeholder=""

                        value={brandName} onChange={(e) => {
                            setBrandName(e.target.value)
                        }}
                    />
                </div>
                { modelFuelSelect?
                    <Box width={'100%'}>
                        <MultipleSelect fuelTypeSet={fuelTypeSet}/>
                    </Box>
                    :""
                }

                {/* <div className="col-md-6">
               <label htmlFor="inputEmail4" className="d-label-name">Business EMAIL</label>
               <input type="email" className="inputfield" id="inputEmail4" placeholder=""

                   value={email} onChange={(e) => {
                       setEmail(e.target.value)
                   }}
               />
           </div>
           <div className="col-md-6">
               <label className="d-label-name" htmlFor="phone">Business Mobile no.</label>
               <input type="tel" className="inputfield" id="phone" placeholder="" name="phone"
                   // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" 

                   value={mobile} onChange={(e) => {
                       setMobileNumber(e.target.value)
                   }}
               />
           </div>


           <div className="col-12">
               <label htmlFor="inputAddress2" className="d-label-name">Business ADDRESS</label>
               <textarea className="textarea" placeholder="" id="exampleFormControlTextarea1"
                   rows="3" value={address} onChange={(e) => {
                       setAddress(e.target.value)
                   }}></textarea>
           </div> */}

                <p className="inactivestatus my-2 " style={{ 'textAlign': 'center' }}> {error} </p>


                <div className='column' style={{ 'textAlign': "center" }}>

                    <button className="button custombutton common-bg mx-2 mt-4" onClick={() => {




                        //    else if (email.length <= 0) {
                        //        setErrorMessage("Enter Email Id")
                        //    }
                        //    else if (mobile.length <= 0) {
                        //        setErrorMessage("Enter Mobile Number")
                        //    }
                        //    else if (address.length <= 0) {
                        //        setErrorMessage("Enter Address")
                        //    } 

                        if (type == "ModelsPage" && brandId?.length <= 0) {
                            setErrorMessage("Choose brand id")
                        }
                        else if (brandName.length <= 0) {
                            setErrorMessage(errorMsg)
                        }
                        else {
                            setErrorMessage("")
                            var body = {};

                            if (type == "ManufacturersPage") {
                                body = {
                                    "brand_image": brandName,
                                    "brand_code": "", "brand_name": brandName
                                }
                            }
                            else if (type == "FuelTypePage") {
                                body = {
                                    "fuel_name": brandName
                                }
                            }
                            else if (type == "ModelsPage") {
                                body = {
                                    "brand_name": brandId,
                                  "model_name": brandName,
                                  "fuel_type": fuelTypeSelect
                                }
                            }
                            else if (type == "CategoryPage") {
                                body = {
                                   "category_name": brandName
                                }
                            }
                            else if (type == "SubCategoryPage") {
                                body = {
                                    "category_id": brandId,
                                   "sub_category_name": brandName
                                }
                            }



                            else {
                                setErrorMessage("Something went wrong")
                            }
                            dispatch(CreateUser(body, type))

                        }




                    }} >ADD</button>
                    <button className="custombutton common-bg mx-2" style={{ 'background': 'black' }} onClick={() => { handleClose() }} >Cancel</button>

                </div>



            </div>
        </div>)
    }

    function bindAddRoleDialog(props) {

        return (

            <div style={{ 'height': '100%' }}>
                <Dialog
                    PaperProps={{
                        sx: {
                            width: "80%",
                            height: '100%',
                            backgroundColor: 'white'

                        }
                    }}

                    maxWidth='lg'
                    open={open}
                    onClose={handleClose}
                >
                    {AddBrandName(props)}
                </Dialog>
            </div>);

    }

    return [setAddRoleDialog, bindAddRoleDialog, handleClose]


}

export default AddRoleDialog

