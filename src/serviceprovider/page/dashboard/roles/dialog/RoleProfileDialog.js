
import React, { useState, useRef, useEffect } from 'react'
import Dialog from '@mui/material/Dialog';
import { useAsyncDebounce } from 'react-table';
import { imageCongis } from '../../../../configs/imageConfigs';
import { useDispatch, useSelector } from 'react-redux';
import AlertDialog from '../../user/common/dialog/AlertDialog';
import { USER_RESET } from '../../../../network/ApiConstant';
import { DeleteUserDetailAction, ResetValueAction, SetUserStatusAction, UpdateUserDetailAction, UserGetDetailsAction } from '../../user/common/UserAction';
import SearchDropDown from '../../common/SearchDropDown';

function RoleProfileDialog() {

    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');
    const [type, setType] = React.useState('');
    const [menuName, setMenuName] = React.useState('');

    const [viewProfile, setViewProfile] = React.useState(false);
    const [editProfile, setEditProfile] = React.useState(false);
    const [deleteProfile, setDeleteProfile] = React.useState(false);

    const dispatch = useDispatch()
    const userState = useSelector((state) => state.appState.user);
    const [userID, setUserId] = useState("")
    const [setAlertDialog, bindAlertDialog, alertClose] = AlertDialog('')


    const [name, setName] = React.useState('');
    const [editName, setEditName] = React.useState('');
    const [title, setTitle] = React.useState('');
    const [errorMsg, setErrorMessage] = useState("")

    const [idName, setIdName] = React.useState('');
    const descriptionElementRef = React.useRef(null);
    const [error, setError] = useState("")
    const [brandId, setBrandId] = useState("")
    const [bindSelectDropDown] = SearchDropDown()


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

    // fetch user details
    useEffect(() => {
        if (userState.reloadUserDetails && deleteProfile) {
            setAlertDialog("delete")
        }

        if (userState.reloadUserDetails && editProfile ||
            userState.reloadUserDetails && deleteProfile) {

            handleClose()
        }
        if (userState.reloadUserDetails) {
            dispatch(ResetValueAction(USER_RESET))
        }
        if (open || viewProfile || editProfile || deleteProfile) {
            dispatch(UserGetDetailsAction(userID, menuName))
        }

    }, [open, userState.reloadUserDetails]);
   

    useEffect(() => {
        if (viewProfile || editProfile || deleteProfile) {
            if (userState.userPayload != null) {
                console.log(userState.userPayload.model_name + "----" + type)


                if (menuName == "ManufacturersPage") {
                    setName(userState.userPayload.brand_name)
                    setEditName(userState.userPayload.brand_name)
                    setTitle("Brand Name")
                    setError("Enter Brand Name")
                }
                else if (menuName == "ModelsPage") {

                    setName(userState.userPayload.model_name)
                    setEditName(userState.userPayload.model_name)
                    setTitle("Model Name")
                    setError("Enter Model Name")
                    setIdName("Brand Id")
                }

                else if (menuName == "FuelTypePage") {
                    setName(userState.userPayload.fuel_name)
                    setEditName(userState.userPayload.fuel_name)
                    setTitle("Fuel Type")
                    setError("Enter Fuel Name")

                }

                else if (menuName == "CategoryPage") {
                    setName(userState.userPayload.category_name)
                    setEditName(userState.userPayload.category_name)
                    setTitle("Category")
                    setError("Enter Category Name")

                }

                else if (menuName == "SubCategoryPage") {
                    setName(userState.userPayload.sub_category_name)
                    setEditName(userState.userPayload.sub_category_name)
                    setTitle("Sub Category")
                    setError("Enter Sub Category Name")
                    setIdName("Category Id")
                }


            }
        }
    }, [userState.userPayload]);
    const handleClose = () => {
        if (open) {
            setOpen(false)
            resetAction()
            resetValue()
        }

    }
    const resetAction = () => {
        setViewProfile(false)
        setDeleteProfile(false)
        setEditProfile(false)

    }
    const resetValue = () => {
        setName("")

    }
    //const [fullList, setFullList] = useState([])
    const setRoleProfileDialog = (userID, type, pageName) => {
       
        setUserId(userID)
        console.log("ln 146 from RoleProfileDialog.js",userID)
        resetAction()
        if (type == "viewProfile") {
            setViewProfile(true)
        } else if (type == "editProfile") {
            setEditProfile(true)
        } else if (type == "delete") {
            setDeleteProfile(true)
        }


        if (!open) {
            setMenuName(pageName)
            setType(type)
            setOpen(!open)
        }
    }

    var statusColor = userState.userPayload.is_active == 0 ? "profile-inactive" : "profile-status "
    var setstatusColor = userState.userPayload.is_active == 1 ? "profile-inactive" : "profile-status"

    statusColor = statusColor + " profile-title mt-4"
    setstatusColor = setstatusColor + " profile-title"
    const ViewProfile = () => {

        let top = "30%"
        top = "30%"


        return (<div style={{ 'position': 'absolute', 'top': top, 'left': '30% ', 'right': '15%', 'textAlign': 'center' }}>
            <div>
                <h2 className='profile-title mt-4 '>{title}</h2>
                <h2 className='profile-subname'> {name}</h2>

            </div>

            <h2 className={statusColor}>Current Status is {userState.userPayload.is_active == 0 ? "Inactive" : "Active"}</h2>
            <h2 className={setstatusColor} onClick={() => {
                let status = userState.userPayload.is_active == 1 ? 0 : 1
                dispatch(SetUserStatusAction(userID, status, menuName))
            }} >Set {userState.userPayload.is_active == 0 ? "Active" : "Inactive"}</h2>

        </div>)
    }
    function handleSelect(data) {
        console.log('argument from Child: ', data);
        setBrandId(data.id)
    }

    const EditProfile = (fullList) => {
        console.log("dfandfklandflkandf--->"+fullList)
        return <div className='profile-email' style={{ 'position': 'absolute', 'top': '5%', 'left': '25% ', right: '5%' }}>


            <div className="row gx-5 gy-2 mt-2">

                {
                    menuName == "ModelsPage" || menuName == "SubCategoryPage" ?

                        <div className="col-md-12">
                            <label htmlFor="inputName" className="d-label-name"> {idName} </label>
                            {bindSelectDropDown({ handleSelect }, fullList,menuName)}
                        </div>

                        : null
                }


                <div className="col-md-12">
                    <label htmlFor="fname">{title}</label>
                    <input className='profile-editor' value={editName} onChange={(e) => {
                        setEditName(e.target.value)
                    }} type="text" />
                </div>



            </div>

            <p className="inactivestatus my-5 " style={{ 'textAlign': 'center' }}> {errorMsg} </p>


            <div className='column mt-5'>

                <button className="button custombutton common-bg mx-2 mt-4" onClick={() => {

                    if (editName.length <= 0) {
                        setErrorMessage(error)
                    }
                    else {
                        setErrorMessage("")
                        var body = {};

                        if (menuName == "ManufacturersPage") {
                            body = {
                                "id": userID,
                                "brand_image": editName,
                                "brand_code": "", "brand_name": editName
                            }
                        }
                        else if (menuName == "ModelsPage") {
                            body = {
                                "id": userID,
                                "brand_id": brandId,
                                "model_code": "", "model_name": editName
                            }
                        }
                        else if (menuName == "FuelTypePage") {
                            body = {
                                "id": userID,
                                "fuel_name": editName
                            }
                        }
                        else if (menuName == "CategoryPage") {
                            body = {
                                "id": userID,
                                "category_name": editName
                            }
                        }
                        else if (menuName == "SubCategoryPage") {
                            body = {
                                "id": userID,
                                "category_name": editName,
                                "category_id": brandId
                            }
                        }

                        dispatch(UpdateUserDetailAction(body, menuName))

                    }


                }} >Save</button>
                <button className="custombutton common-bg mx-2" style={{ 'background': 'black' }} onClick={() => handleClose()} >Cancel</button>

            </div>

        </div>

    }


    const DeleteProfile = () => {

        return <div className='' style={{ 'textAlign': 'center' }}>

            <div className='content-center'>
                <h2 className='profile_full-name'> {name} </h2>

                <h2 className='profile-title mt-5'>Are you sure  <br /> you want to delete this user ?</h2>

                <div className='column'>

                    <button className="custombutton common-bg mx-2 mt-4" onClick={() =>
                        dispatch(DeleteUserDetailAction(userID, menuName))
                    } >Yes</button>
                    <button className="custombutton common-bg mx-2" onClick={() => handleClose()} >No</button>

                </div>
            </div>
        </div>
    }

    function bindRoleProfileDialog(fullList) {

        return (<div>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                maxWidth='700px'

            >
                <div className="row p-0 g-0" >

                    {/* ------------------Search view--------------- */}

                    <div className="row  g-0" style={{ width: '140px' }}>

                        {/* ---------view profile btn----------- */}
                        <div className={`${viewProfile ? "profile-button" : "inprofile-button"}`} onClick={() => {
                            resetAction()
                            setViewProfile(true)

                        }} >
                            <div>
                                <img className={`${viewProfile ? "gfg" : ""}`} src={imageCongis.userIcon} style={{ height: '30px' }} />
                                <h2 className={`mt-2 ${viewProfile ? "tran-btn" : "inactive-tran-btn"}`}>View Profile</h2></div>
                        </div>
                        {/* ---------Edit profile btn----------- */}

                        <div className={`${editProfile ? "profile-button" : "inprofile-button"}`} onClick={() => {
                            resetAction()
                            setEditProfile(true)
                        }} >

                            <div>
                                <img className={`${editProfile ? "gfg" : ""}`} src={imageCongis.edit} />
                                <h2 className={`mt-2 ${editProfile ? "tran-btn" : "inactive-tran-btn"}`}>Edit Profile</h2></div>

                        </div>

                        {/* ---------Delete profile btn----------- */}


                        <div className={`${deleteProfile ? "profile-button" : "inprofile-button"}`} onClick={() => {
                            resetAction()
                            setDeleteProfile(true)
                        }} >
                            <div>
                                <img className={`${deleteProfile ? "gfg" : ""}`} src={imageCongis.delete} />
                                <h2 className={`mt-2 ${deleteProfile ? "tran-btn" : "inactive-tran-btn"}`}>Delete</h2></div>

                        </div>



                    </div>
                    {/* ------------------Add button--------------- */}
                    <div className="column g-0" style={{ width: '600px' }}>


                        {viewProfile ? <div> {ViewProfile()} </div> :

                            editProfile ? <div> {EditProfile(fullList)} </div> :

                                deleteProfile ? <div> {DeleteProfile()} </div> : null

                        }

                    </div>



                </div>

            </Dialog>
        </div>);

    }

    return [setRoleProfileDialog, bindRoleProfileDialog, handleClose]


}

export default RoleProfileDialog
