import React, { useState, useRef, useEffect } from 'react'
import Dialog from '@mui/material/Dialog';
import { useDispatch } from 'react-redux';
import { CreateUser } from '../../user/common/UserAction';
import SearchDropDown from '../../common/SearchDropDown';

function AddServiceCategoryDialog() {

    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');
    const [type, setType] = React.useState('');

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

    const setAddDialog = (props) => {

        if (!open) {
            setType(props)
            setOpen(!open)
            // onDialogDismiss()
        }

    }

    const dispatch = useDispatch()


    const [cateName, setName] = useState("")
    const [categoryId, setCategoryId] = useState("")
    const [subcategoryId, subCategoryId] = useState("")

    const [error, setErrorMessage] = useState("")
    const [bindSelectDropDown] = SearchDropDown()

    const AddCategory = (categoryList, SubCategoryList) => {


        let title = "Add Service Category"
        let name = "NAME"
        let errorMsg = "Enter service category"




        function handleCategory(data) {
            console.log('argument from Child: ', data);
            setCategoryId(data.id)
        }

        function handleSubCategory(data) {
            console.log('argument from Child: ', data);
            setCategoryId(data.id)
        }

        return (<div className='p-5'>

            <h2 className='d-title text-center'>{title}</h2>
            <div className="row gx-5 gy-4 mt-4">

                <div className="col-md-12">
                    <label htmlFor="inputName" className="d-label-name"> Category Id </label>
                    {bindSelectDropDown( { handleSelect:(data) => {  setCategoryId(data.id) }}, categoryList, "cate")}
                </div>


                <div className="col-md-12">
                    <label htmlFor="inputName" className="d-label-name"> SubCategory ID </label>
                    {bindSelectDropDown({ handleSelect :(data) => {  subCategoryId(data.id)  }}, SubCategoryList, "sub")}
                </div>

                
                <div className="col-md-12">
                    <label htmlFor="inputName" className="d-label-name">{name}</label>
                    <input type="text" className="inputfield" id="inputName" placeholder=""

                        value={cateName} onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                </div>


                <p className="inactivestatus my-2 " style={{ 'textAlign': 'center' }}> {error} </p>


                <div className='column' style={{ 'textAlign': "center" }}>

                    <button className="button custombutton common-bg mx-2 mt-4" onClick={() => {

                        if (categoryId.length <= 0) {
                            setErrorMessage("Choose category id")
                        }
                        else if (subcategoryId.length <= 0) {
                            setErrorMessage("Choose subcategory id")
                        }
                        else if (cateName.length <= 0) {
                            setErrorMessage(errorMsg)
                        }
                        else {
                            setErrorMessage("")
                            var body = {};
                            body = {
                                "category_id": categoryId,
                                "sub_category_id": subcategoryId,
                                "service_category_name": cateName
                            }
                            dispatch(CreateUser(body, type))

                        }

                    }} >ADD</button>
                    <button className="custombutton common-bg mx-2" style={{ 'background': 'black' }} onClick={() => { handleClose() }} >Cancel</button>

                </div>



            </div>
        </div>)
    }

    function bindAddDialog(categoryList,subCategoryList) {
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
                    {AddCategory(categoryList,subCategoryList)}
                </Dialog>
            </div>);

    }

    return [setAddDialog, bindAddDialog, handleClose]


}

export default AddServiceCategoryDialog

