import React, { useState, useRef, useEffect } from 'react'
import Dialog from '@mui/material/Dialog';
import { useDispatch, useSelector } from 'react-redux';
import { SpDeleteUserDetailAction, SpResetValueAction, SpSetUserStatusAction, SpUpdateUserDetailAction, SpUserPasswordUpdate, sp_UserGetDetailsAction } from '../../../../../pagination_layout/pagination/SpUserAction';
import AlertDialog from '../../../../../../pages/dashboard/user/common/dialog/AlertDialog';
import { imageCongis } from '../../../../../../configs/imageConfigs';
import { USER_RESET } from '../../../../../../network/ApiConstant';

function SpUserProfileDialog() {

    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');

    const [viewProfile, setViewProfile] = React.useState(false);
    const [editProfile, setEditProfile] = React.useState(false);
    const [resetPassword, setResetPassword] = React.useState(false);
    const [deleteProfile, setDeleteProdile] = React.useState(false);

    const dispatch = useDispatch()
    const userState = useSelector((state) => state.appState.user);
    const [userID, setUserId] = useState("")
    //edit
    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobileNumber] = useState("")
    //password
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [menuName, setMenuName] = useState("")


    const [setAlertDialog, bindAlertDialog, handleClose] = AlertDialog('')

    // fetch user details
    useEffect(() => {
        if (userState.reloadUserDetails && deleteProfile) {
            setAlertDialog("delete")
        }
        if (userState.reloadUserDetails && resetPassword) {
            setAlertDialog("reserpassword")
        }

        if (userState.reloadUserDetails && editProfile ||
            userState.reloadUserDetails && resetPassword ||
            userState.reloadUserDetails && deleteProfile) {
            closeProfileDialog()
        }
        if (userState.reloadUserDetails) {
            dispatch(SpResetValueAction(USER_RESET))
        }
        if (open) {
            dispatch(sp_UserGetDetailsAction(userID, menuName))
        }

    }, [open, viewProfile, userState.reloadUserDetails]);


    useEffect(() => {
        if (editProfile || resetPassword || deleteProfile) {
            if (userState.userPayload != null) {
                console.log(userState.userPayload)
                setFirstName(userState.userPayload.first_name)
                setLastName(userState.userPayload.last_name)
                setEmail(userState.userPayload.email)
                setMobileNumber(userState.userPayload.mobile)

            }
        }
    }, [userState.userPayload]);




    const closeProfileDialog = () => {
        if (open) {
            setOpen(false)
            resetAction()
            dispatch(SpResetValueAction(USER_RESET))
        }

    }

    const setProfileDialog = (props, type, menuName) => {
        setMenuName(menuName)
        console.log("menuNamemenuName   "+menuName)
        setUserId(props)
        console.log(userID)
        resetAction()
        if (type == "viewProfile") {
            setViewProfile(true)
        } else if (type == "editProfile") {
            setEditProfile(true)
        } else if (type == "resetPassword") {
            setResetPassword(true)
        } else if (type == "delete") {
            setDeleteProdile(true)
        }

        if (!open) {
            resetProfile()
            setOpen(!open)
        }
    }

    const resetAction = () => {
        setViewProfile(false)
        setResetPassword(false)
        setDeleteProdile(false)
        setEditProfile(false)
        setNewPassword("")
        setConfirmPassword("")
    }

    const resetProfile = () => {
        setFirstName("")
        setLastName("")
        setEmail("")
        setMobileNumber("")
    }


    var statusColor = userState.userPayload.is_active == 0 ? "profile-inactive" : "profile-status "
    var setstatusColor = userState.userPayload.is_active == 1 ? "profile-inactive" : "profile-status"

    statusColor = statusColor + " profile-title mt-4"
    setstatusColor = setstatusColor + " profile-title"

    const ViewProfile = () => {
        let top = "30%"
        if (menuName == "SpEmployeePage") {
            top = "30%"
        }

        return <div style={{ 'position': 'absolute', 'top': top, 'left': '30% ', 'right': '15%', 'textAlign': 'center' }}>

            <h2 className='profile_full-name'>{userState.userPayload.first_name} {userState.userPayload.last_name}</h2>
            <h2 className='profile-email'>{userState.userPayload.email}</h2>

            {
                menuName == "SpCustomersPage" ?
                    <div>
                        <h2 className='profile-title mt-4 '>Display Name :</h2>
                        <h2 className='profile-subname'>{userState.userPayload.first_name} </h2>

                    </div> : null
            }


            <h2 className='profile-title mt-4'>Phone Number :</h2>
            <h2 className='profile-subname'>{userState.userPayload.mobile}</h2>
            {
                menuName == "SpEmployeePage1" ?
                    <div>

                        <h2 className='profile-title mt-4 '>Business Name :</h2>
                        <h2 className='profile-subname'>{userState.userPayload.business_name} </h2>

                        <h2 className='profile-title mt-4 '>Business Type :</h2>
                        <h2 className='profile-subname'>{userState.userPayload.business_type} </h2>

                        <h2 className='profile-title mt-4 '>Business Address :</h2>
                        <h2 className='profile-subname'>{userState.userPayload.business_address} </h2>

                    </div> : null
            }
            <h2 className={statusColor}>Current Status is {userState.userPayload.is_active == 0 ? "Inactive" : "Active"}</h2>
            <h2 className={setstatusColor} onClick={() => {
                let status = userState.userPayload.is_active == 1 ? 0 : 1
                dispatch(SpSetUserStatusAction(userID, status, menuName))
            }} >Set {userState.userPayload.is_active == 0 ? "Active" : "Inactive"}</h2>

        </div>
    }

    const EditProfile = () => {

        return <div className='profile-email' style={{ 'position': 'absolute', 'top': '20%', 'left': '25% ', right: '5%' }}>

            <label htmlFor="fname">Full Name :</label>

            <input className='profile-editor' value={firstname} onChange={(e) => {
                setFirstName(e.target.value)
            }} type="text" />


            <label className='mt-3' htmlFor="lname">Display Name :</label>
            <input className='profile-editor' value={lastname} onChange={(e) => {
                setLastName(e.target.value)
            }} type="text" />

            <label className='mt-3' htmlFor="lname">Email :</label>
            <input className='profile-editor' value={email} onChange={(e) => {
                setEmail(e.target.value)
            }} type="text" />



            <label className='mt-3' htmlFor="lname">Phone Number :</label>
            <input className='profile-editor' value={mobile} onChange={(e) => {
                setMobileNumber(e.target.value)
            }} type="text" />

            <div className='column'>

                <button className="button custombutton common-bg mx-2 mt-4" onClick={() => {
                    var body = {
                        "user_id": userID, "first_name": firstname,
                        "last_name": lastname, "email": email, "mobile": mobile
                    };
                    dispatch(SpUpdateUserDetailAction(body, menuName))

                }} >Save</button>
                <button className="custombutton common-bg mx-2" style={{ 'background': 'black' }} onClick={() => closeProfileDialog()} >Cancel</button>

            </div>
        </div>
    }

    const SPEditProfile = () => {

        return <div className='profile-email' style={{ 'position': 'absolute', 'top': '5%', 'left': '25% ', right: '5%' }}>


            <label className='profile-title ' htmlFor="lname">Business Name </label>
            <p className='profile-subname mt-2' > {userState.userPayload.business_name} </p>

            <label className='profile-title mt-2' htmlFor="lname">Business Type</label>
            <p className='profile-subname mt-2' > {userState.userPayload.business_type} </p>

            <label className='profile-title mt-2' htmlFor="lname">Business Address</label>
            <p className='profile-subname mt-2' > {userState.userPayload.business_address} </p>

            <label className='profile-title mt-2' htmlFor="lname">Email</label>
            <p className='profile-subname mt-2' > {email} </p>

            <div className="row gx-5 gy-2 mt-2">
                <div className="col-md-6">
                    <label htmlFor="fname">Full Name :</label>
                    <input className='profile-editor' value={firstname} onChange={(e) => {
                        setFirstName(e.target.value)
                    }} type="text" />
                </div>
                <div className="col-md-6">

                    <label htmlFor="fname">Last Name :</label>
                    <input className='profile-editor' value={lastname} onChange={(e) => {
                        setLastName(e.target.value)
                    }} type="text" />
                </div>
            </div>


            <label className='mt-3' htmlFor="lname">Phone Number :</label>
            <input className='profile-editor' value={mobile} onChange={(e) => {
                setMobileNumber(e.target.value)
            }} type="text" />

            <div className='column'>

                <button className="button custombutton common-bg mx-2 mt-4" onClick={() => {
                    var body = {
                        "user_id": userID,
                        "business_name": userState.userPayload.business_name,
                        "business_type": userState.userPayload.business_type,
                        "business_address": userState.userPayload.business_address,
                        "email": email,
                        "first_name": firstname,
                        "last_name": lastname,
                        "mobile": mobile
                    };
                    dispatch(SpUpdateUserDetailAction(body, menuName))

                }} >Save</button>
                <button className="custombutton common-bg mx-2" style={{ 'background': 'black' }} onClick={() => closeProfileDialog()} >Cancel</button>

            </div>
        </div>
    }

    const ResetPassword = () => {

        return <div style={{ 'textAlign': 'center' }}>
            <div className='content-center'>

                <h2 className='profile_full-name'>{firstname} {lastname}</h2>
                <h2 className='profile-email'>{email}</h2>

                <label className='profile-email mt-3' htmlFor="fname">Enter Password:</label>
                <input className='profile-editor' style={{ 'textAlign': 'center', fontSize: "25px" }} value={newPassword}
                    onChange={(e) => {
                        setErrorMessage("")
                        setNewPassword(e.target.value)
                    }} type="password" id="fname" name="fname" />


                <label className='profile-email mt-3' htmlFor="lname">Re-enter Password:</label>
                <input className='profile-editor ' style={{ 'textAlign': 'center', fontSize: "25px" }} value={confirmPassword}
                    onChange={(e) => {
                        setErrorMessage("")
                        setConfirmPassword(e.target.value)
                    }} type="password" id="lname" name="lname" />

                <p className="inactivestatus my-2"> {errorMessage} </p>
                <div className='column'>

                    <button className="custombutton common-bg mx-2 mt-3" onClick={() => {

                        if (newPassword.length < 8 || confirmPassword.length < 8) {
                            setErrorMessage("Password must be more than 8 letters")
                        }
                        else if (newPassword == confirmPassword) {

                            var body = {
                                "id": userID, "password": newPassword,
                            };
                            dispatch(SpUserPasswordUpdate(body, menuName))
                        } else {
                            setErrorMessage("Password not matched")
                        }
                    }}

                    >Save</button>
                    <button className="custombutton common-bg mx-2" style={{ 'background': 'black' }} onClick={() => closeProfileDialog()} >Cancel</button>

                </div>

            </div>

        </div>
    }

    const DeleteProfile = () => {

        return <div className='' style={{ 'textAlign': 'center' }}>

            <div className='content-center'>
                <h2 className='profile_full-name'> {firstname} {lastname}</h2>
                <h2 className='profile-email'>{email}</h2>

                <h2 className='profile-title mt-4'>Are you sure  <br /> you want to delete this user ?</h2>

                <div className='column'>

                    <button className="custombutton common-bg mx-2 mt-4" onClick={() =>
                        dispatch(SpDeleteUserDetailAction(userID, menuName))
                    } >Yes</button>
                    <button className="custombutton common-bg mx-2" onClick={() => closeProfileDialog()} >No</button>

                </div>
            </div>
        </div>
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

    function bindProfileDialog() {

        return (<div>
            {bindAlertDialog()}
            <Dialog
                open={open}
                onClose={closeProfileDialog}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                maxWidth="740px"
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
                                <h2 className={`mt-2 ${viewProfile ? "tran-btn" : "inactive-tran-btn"}`} >View Profile</h2>
                            </div>
                        </div>
                        {/* ---------Edit profile btn----------- */}

                        <div className={`${editProfile ? "profile-button" : "inprofile-button"}`} onClick={() => {
                            resetAction()
                            setEditProfile(true)
                        }} >

                            <div>
                                <img className={`${editProfile ? "gfg" : ""}`} src={imageCongis.edit} />
                                <h2 className={`mt-2 ${editProfile ? "tran-btn" : "inactive-tran-btn"}`} >Edit Profile</h2>
                            </div>
                        </div>
                        {/* ---------Reset password btn----------- */}

                        <div className={`${resetPassword ? "profile-button" : "inprofile-button"}`} onClick={() => {
                            resetAction()
                            setResetPassword(true)
                        }} >

                            <div>
                                <img className={`${resetPassword ? "gfg" : ""}`} src={imageCongis.reset} />
                                <h2 className={`mt-2 ${resetPassword ? "tran-btn" : "inactive-tran-btn"}`} >Reset Password</h2>
                            </div>
                        </div>
                        {/* ---------Delete profile btn----------- */}


                        <div className={`${deleteProfile ? "profile-button" : "inprofile-button"}`} onClick={() => {
                            resetAction()
                            setDeleteProdile(true)
                        }} >
                            <div>
                                <img className={`${deleteProfile ? "gfg" : ""}`} src={imageCongis.delete} />
                                <h2 className={`mt-2 ${deleteProfile ? "tran-btn" : "inactive-tran-btn"}`} >Delete</h2>
                            </div>
                        </div>



                    </div>
                    {/* ------------------Add button--------------- */}
                    <div className="column g-0" style={{ width: '600px' }}>


                        {viewProfile ? <div> {ViewProfile()} </div> :

                            editProfile ?  <div>{EditProfile()} </div> : // menuName == "SpEmployeePage" ? <div> {SPEditProfile()} </div> : <div> {EditProfile()} </div> :

                                resetPassword ? <div> {ResetPassword()} </div> :

                                    deleteProfile ? <div> {DeleteProfile()} </div> : null

                        }

                    </div>



                </div>


            </Dialog>
        </div>);

    }

    return [setProfileDialog, bindProfileDialog, closeProfileDialog]


}

export default SpUserProfileDialog
