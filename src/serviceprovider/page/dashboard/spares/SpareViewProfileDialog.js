
import React, { useState, useRef, useEffect } from 'react'
import Dialog from '@mui/material/Dialog';
import { imageCongis } from '../../../../configs/imageConfigs';
import { useDispatch, useSelector } from 'react-redux';
import { USER_RESET } from '../../../../network/ApiConstant';
import AlertDialog from '../../../../pages/dashboard/user/common/dialog/AlertDialog';
import { SpDeleteUserDetailAction, SpResetValueAction, SpSetUserStatusAction, SpUpdateUserDetailAction, sp_UserGetDetailsAction } from '../../../pagination_layout/pagination/SpUserAction';
import SearchDropDown from '../common/SearchDropDown';
import { Table } from 'react-bootstrap';
import { format } from 'date-fns'

function SpareViewProfileDialog() {

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
    const [hsnSac, setHsnSac] = useState("")
    const [partNumber, setPartNumber] = useState("")
    const [fuelType, setFuelType] = useState("")
    const [thershold, setThershold] = useState("")
    const [unit, setUnit] = useState()
    const [purchasePrice, setPurchasePrice] = useState()
    const [sellingPrice, setSellingPrice] = useState()
    const [manufature, setManufature] = useState("")

    const [location, setLocation] = useState("")
    const [expire, setExpire] = useState("")
    const [sgst, setSgst] = useState()
    const [cgst, setCgst] = useState()

    const descriptionElementRef = React.useRef(null);
    const [error, setErrorMessage] = useState("")



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
            dispatch(SpResetValueAction(USER_RESET))
        }
        if (open || viewProfile || editProfile || deleteProfile) {
            dispatch(sp_UserGetDetailsAction(userID, menuName))
        }

    }, [open, userState.reloadUserDetails]);


    useEffect(() => {
        if (viewProfile || editProfile || deleteProfile) {
            if (userState.userPayload != null && userState.userPayload.name!=undefined) {
                console.log(userState.userPayload.name + "----" + type)

                // setName(userState.userPayload.name)
                // setEditName(userState.userPayload.name)
                //setTitle("Spare Name ")
                setName(userState.userPayload.name)
                setHsnSac(userState.userPayload.hsn_sac)
                setPartNumber(userState.userPayload.part_number)
                setThershold(userState.userPayload.threshold)
                setFuelType(userState.userPayload.fuel_type_id)
                setUnit(userState.userPayload.units)
                setPurchasePrice(userState.userPayload.purchase_price)
                setSellingPrice(userState.userPayload.selling_price)
                setManufature("")
                setLocation("")
                setExpire( format(new Date(userState.userPayload.expiry_date), 'dd-MM-yy'))
                setSgst("")
                setCgst(userState.userPayload.tax_price)
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

        setErrorMessage("")
        setName("")
        setHsnSac("")
        setPartNumber("")
        setThershold("")
        setFuelType("")
        setUnit("")
        setPurchasePrice("")
        setSellingPrice("")
        setManufature("")
        setLocation("")
        setExpire("")
        setSgst("")
        setCgst("")

    }
    //const [fullList, setFullList] = useState([])
    const setRoleProfileDialog = (userID, type, pageName) => {

        setUserId(userID)
        console.log(userID)
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

        let top = "5%"
        top = "5%"


        return (<div style={{ 'position': 'absolute', 'top': top, 'left': '20% ', 'right': '2%', 'textAlign': 'center' }}>
            <div>
                {/* <h2 className='profile-title mt-4 '>{title}</h2>
                <h2 className='profile-subname'> {name}</h2> */}

                <div className='p-0'>
                    <Table striped bordered hover size='sm'>
                        <tbody >
                            <tr>
                                <td className='th-table-name px-3' >Name</td>
                                <td className='th-table-value px-3'>{userState.userPayload.name}</td>
                            </tr>
                            <tr>
                                <td className='th-table-name px-3' >HSN/SAC</td>
                                <td className='th-table-value px-3'>{userState.userPayload.hsn_sac}</td>
                            </tr>
                            <tr>
                                <td className='th-table-name px-3' >Part Number</td>
                                <td className='th-table-value px-3'>{userState.userPayload.part_number}</td>
                            </tr>
                            <tr>
                                <td className='th-table-name px-3' >Fuel Type</td>
                                <td className='th-table-value px-3'>{userState.userPayload.fuel_type_id}</td>
                            </tr>
                            <tr>
                                <td className='th-table-name px-3' >Threshold</td>
                                <td className='th-table-value px-3'>{userState.userPayload.threshold}</td>
                            </tr>
                            <tr>
                                <td className='th-table-name px-3' >Units</td>
                                <td className='th-table-value px-3'>{userState.userPayload.units}</td>
                            </tr>

                            <tr>
                                <td className='th-table-name px-3' >Purchase Price</td>
                                <td className='th-table-value px-3'>{userState.userPayload.purchase_price}</td>
                            </tr>

                            <tr>
                                <td className='th-table-name px-3' >Selling Price</td>
                                <td className='th-table-value px-3'>{userState.userPayload.selling_price}</td>
                            </tr>

                            <tr>
                                <td className='th-table-name px-3' >Expiry</td>
                                <td className='th-table-value px-3'>{userState.userPayload.expiry_date}</td>
                            </tr>
                            {/* <tr>
                                <td className='th-table-name px-3' >SGST</td>
                                <td  className='th-table-value px-3'>{userState.userPayload.name}</td>
                            </tr>
                            <tr>
                                <td className='th-table-name px-3' >CGST</td>
                                <td  className='th-table-value px-3'>{userState.userPayload.name}</td>
                            </tr> */}


                        </tbody>
                    </Table>
                </div>

            </div>

            <h2 className={statusColor}>Current Status is {userState.userPayload.is_active == 0 ? "Inactive" : "Active"}</h2>
            <h2 className={setstatusColor} onClick={() => {
                let status = userState.userPayload.is_active == 1 ? 0 : 1
                dispatch(SpSetUserStatusAction(userID, status, menuName))
            }} >Set {userState.userPayload.is_active == 0 ? "Active" : "Inactive"}</h2>

        </div>)
    }
    function handleSelect(data) {
        console.log('argument from Child: ', data);
       // setBrandId(data.id)
    }

    const EditProfile = (fullList) => {
        console.log("dfandfklandflkandf--->" + fullList)
        return <div
            className='profile-email'
            style={{ 'position': 'absolute', 'top': '5%', 'left': '20% ', right: '2%' }}>


            <div className='px-4 py-3'>

                <div class="row mb-3 gx-3 ">
                    <div class=" col-md-4 themed-grid-col">
                        <div className="row gx-4 gy-4 mt-4">
                            {/* ----------------------------- */}
                            <div className="col-12 ">
                                <label htmlFor="inputName" className="d-label-name">Name</label>
                                <input type="text" className="inputfield" id="inputName" placeholder=""

                                    value={name} onChange={(e) => {
                                        setName(e.target.value)
                                    }}
                                />
                            </div>
                            {/* -------------------------------- */}
                            <div className="col-12">
                                <label htmlFor="inputName" className="d-label-name">HSN/SAC </label>
                                <input type="text" className="inputfield" id="inputName" placeholder=""
                                    value={hsnSac} onChange={(e) => {
                                        setHsnSac(e.target.value)
                                    }}
                                />
                            </div>
                            {/* ----------------------------------- */}
                            <div className="col-12">
                                <label htmlFor="inputName" className="d-label-name">Part Number</label>
                                <input type="tel" className="inputfield" id="inputName" placeholder=""

                                    value={partNumber} onChange={(e) => {
                                        setPartNumber(e.target.value)
                                    }}
                                />
                            </div>
                            {/* ------------------------------------------------ */}
                            <div className="col-12">
                                <label className="d-label-name" htmlFor="inputName">Fuel Type</label>
                                <input type="tel" className="inputfield" id="inputName" placeholder=""
                                    // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" 

                                    value={fuelType} onChange={(e) => {
                                        setFuelType(e.target.value)
                                    }}
                                />
                            </div>
                            {/* --------------------------------------------------- */}

                            <div className="col-12 ">
                                <label htmlFor="inputName" className="d-label-name">Threshold</label>
                                <input type="text" className="inputfield" id="inputName" placeholder=""

                                    value={thershold} onChange={(e) => {
                                        setThershold(e.target.value)
                                    }}
                                />
                            </div>

                        </div>

                    </div>

                    <div class=" col-md-4 themed-grid-col">
                        <div className="row gx-4 gy-4 mt-4">


                            <div className="col-12 ">
                                <label htmlFor="inputName" className="d-label-name">Units</label>
                                <input type="text" className="inputfield" id="inputName" placeholder=""

                                    value={unit} onChange={(e) => {
                                        setUnit(e.target.value)
                                    }}
                                />
                            </div>


                            <div className="col-12">
                                <label htmlFor="inputName" className="d-label-name">Purchase Price</label>
                                <input type="text" className="inputfield" placeholder="" id="exampleFormControlTextarea1"
                                    value={purchasePrice} onChange={(e) => {
                                        setPurchasePrice(e.target.value)
                                    }}></input>
                            </div>

                            <div className="col-12 ">
                                <label htmlFor="inputName" className="d-label-name">Selling Price</label>
                                <input type="text" className="inputfield" id="inputName" placeholder=""

                                    value={sellingPrice} onChange={(e) => {
                                        setSellingPrice(e.target.value)
                                    }}
                                />
                            </div>

                            <div className="col-12 ">
                                <label htmlFor="inputName" className="d-label-name">Manufacturer</label>
                                <input type="text" className="inputfield" id="inputName" placeholder=""

                                    value={manufature} onChange={(e) => {
                                        setManufature(e.target.value)
                                    }}
                                />
                            </div>

                            <div className="col-12 ">
                                <label htmlFor="inputName" className="d-label-name">Location</label>
                                <input type="text" className="inputfield" id="inputName" placeholder=""

                                    value={location} onChange={(e) => {
                                        setLocation(e.target.value)
                                    }}
                                />
                            </div>



                        </div>


                    </div>
                    <div class=" col-md-4 themed-grid-col">

                        <div className="row gx-4 gy-4 mt-4">
                            {/* ----------------------------- */}
                            <div className="col-12 ">
                                <label htmlFor="inputName" className="d-label-name">Expiry</label>
                                <input type="text" className="inputfield" id="inputName" placeholder=""

                                    value={expire} onChange={(e) => {
                                        setExpire(e.target.value)
                                    }}
                                />
                            </div>
                            {/* -------------------------------- */}
                            <div className="col-12">
                                <label htmlFor="inputName" className="d-label-name">SGST</label>
                                <input type="tel" className="inputfield" id="inputName" placeholder=""
                                    value={sgst} onChange={(e) => {
                                        setSgst(e.target.value)
                                    }}
                                />
                            </div>
                            {/* ----------------------------------- */}
                            <div className="col-12">
                                <label htmlFor="inputEmail4" className="d-label-name">CGST</label>
                                <input type="tel" className="inputfield" id="inputEmail4" placeholder=""

                                    value={cgst} onChange={(e) => {
                                        setCgst(e.target.value)
                                    }}
                                />
                            </div>
                        </div>

                    </div>


                </div>


                <p className="inactivestatus my-2 " style={{ 'textAlign': 'center' }}> {error} </p>


                <div className='column' style={{ 'textAlign': "center" }}>

                    <button className="button custombutton common-bg mx-2 mt-4" onClick={() => {


                        if (name.length <= 0) {
                            setErrorMessage("Enter  Name")
                        }
                        else if (hsnSac.length <= 0) {
                            setErrorMessage("Enter HSN/SAC")
                        }

                        else if (partNumber.length <= 0) {
                            setErrorMessage("Enter part number")
                        }
                        else if (fuelType.length <= 0) {
                            setErrorMessage("Chooose fuelType")
                        }
                        else if (thershold.length <= 0) {
                            setErrorMessage("Enter thershold")
                        }
                        else if (unit.length <= 0) {
                            setErrorMessage("Enter Units")
                        }
                        else if (purchasePrice.length <= 0) {
                            setErrorMessage("Enter Purchase Price")
                        }
                        else if (sellingPrice.length <= 0) {
                            setErrorMessage("Enter Selling Price")
                        }
                        else if (manufature.length < 0) {
                            setErrorMessage("Enter Manufacture")
                        }
                        else if (location.length <= 0) {
                            setErrorMessage("Enter Location")
                        }
                        else if (expire.length <= 0) {
                            setErrorMessage("Enter Expire")
                        }
                        else if (sgst.length <= 0) {
                            setErrorMessage("Enter SGST")
                        }
                        else if (cgst.length <= 0) {
                            setErrorMessage("Enter CGST")
                        }

                        else {
                            setErrorMessage("")
                            var body = {};

                            body = {
                                'id':userState.userPayload.id,
                                "name": name,
                                "hsn_sac": hsnSac,
                                "part_number": partNumber,
                                "fuel_type_id": fuelType,
                                "threshold": thershold,
                                "purchase_price": purchasePrice,
                                "selling_price": sellingPrice,
                                "tax_price": cgst,
                                "units": unit,
                                "expiry_date": expire,
                            }


                            dispatch(SpUpdateUserDetailAction(body, menuName))
                        }




                    }} >ADD</button>
                    <button className="custombutton common-bg mx-2" style={{ 'background': 'black' }} onClick={() => { handleClose() }} >Cancel</button>

                </div>




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
                        dispatch(SpDeleteUserDetailAction(userID, menuName))
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

export default SpareViewProfileDialog

