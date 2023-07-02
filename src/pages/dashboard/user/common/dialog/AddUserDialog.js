import React, { useEffect, useState } from 'react'

import Dialog from '@mui/material/Dialog';
import { CreateUser } from '../UserAction';
import { useDispatch } from 'react-redux';
import { Email } from '@mui/icons-material';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default function AddUserDialog() {
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch()


    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobileNumber] = useState("")
    const [address, setAddress] = useState("")
    const [error, setErrorMessage] = useState("")
    const [selectedRole, setSelectedRole] = useState('');

    //service provider
    const [businessName, setBusinessName] = useState("")
    const [businessType, setBusinessType] = useState("")
    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    // fetch user details
    useEffect(() => {
     console.log("Hii shubham")       
    console.log("role selected", selectedRole)
    }, [open]);

    const setAlertDialog = (props) => {
        setOpen(true);
    };

    const handleRole = (e) => {
        console.log("ln 47",e.target.value)
        setSelectedRole(e.target.value)
    };


    const handleClose = () => {
        if (open) {
            setOpen(false);
            reset()
        }

    };

    const reset = () => {
        setErrorMessage("")
        setFirstName("")
        setLastName("")
        setEmail("")
        setMobileNumber("")
        setAddress("")
    }


    function bindAlertDialog(menuName) {

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


                    <div className='p-5'>

                        <h2 className='d-title text-center'>ADD USER</h2>

                        {/* // Selecting Role // */}

                    <div className="col-md-6">
                    <FormControl className="inputfield" style={{ width: '100%' }}>
                        <InputLabel id="role-select-label">Role</InputLabel>
                        <Select
                        labelId="role-select-label"
                        id="role-select"
                        value={selectedRole}
                        // onChange={(e) => setSelectedRole(e.target.value)}
                        onChange={(e)=>handleRole(e)}
                        >
                        <MenuItem value="Customer">Customer</MenuItem>
                        <MenuItem value="Dealer">Dealer</MenuItem>
                        <MenuItem value="ServiceProviderPage">Service Provider</MenuItem>
                        </Select>
                    </FormControl>
                    </div>
                       
                        <div className="row gx-5 gy-4 mt-4">

                            <div className="col-md-6">
                                <label htmlFor="inputName" className="d-label-name">FULL NAME</label>
                                <input type="text" className="inputfield" id="inputName" placeholder=""

                                    value={firstname} onChange={(e) => {
                                        setFirstName(e.target.value)
                                    }}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputName" className="d-label-name">LAST NAME </label>
                                <input type="text" className="inputfield" id="inputName" placeholder=""
                                    value={lastname} onChange={(e) => {
                                        setLastName(e.target.value)
                                    }}
                                />
                            </div>
                            {
                                // menuName == "ServiceProviderPage" ?
                                    selectedRole == "ServiceProviderPage" ?

                                    <div className="col-md-6">
                                        <label htmlFor="inputName" className="d-label-name">Business Name</label>
                                        <input type="text" className="inputfield" id="inputName" placeholder=""

                                            value={businessName} onChange={(e) => {
                                                setBusinessName(e.target.value)
                                            }}
                                        />
                                    </div>

                                    : null
                            }

                            {
                                menuName == "ServiceProviderPage" ?

                                    <div className="col-md-6">
                                        <label htmlFor="inputName" className="d-label-name">Business Type</label>
                                        <input type="text" className="inputfield" id="inputName" placeholder=""
                                            value={businessType} onChange={(e) => {
                                                setBusinessType(e.target.value)
                                            }}
                                        />
                                    </div>


                                    : null
                            }


                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="d-label-name">EMAIL</label>
                                <input type="email" className="inputfield" id="inputEmail4" placeholder=""

                                    value={email} onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="d-label-name" htmlFor="phone">Mobile no.</label>
                                <input type="tel" className="inputfield" id="phone" placeholder="" name="phone"
                                    // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" 

                                    value={mobile} onChange={(e) => {
                                        setMobileNumber(e.target.value)
                                    }}
                                />
                            </div>


                            <div className="col-12">
                                <label htmlFor="inputAddress2" className="d-label-name">ADDRESS</label>
                                <textarea className="textarea" placeholder="" id="exampleFormControlTextarea1"
                                    rows="3" value={address} onChange={(e) => {
                                        setAddress(e.target.value)
                                    }}></textarea>
                            </div>

                            <p className="inactivestatus my-2 " style={{'textAlign':'center'}}> {error} </p>


                            <div className='column' style={{ 'textAlign': "center" }}>

                                <button className="button custombutton common-bg mx-2 mt-4" onClick={() => {


                                    if (firstname.length <= 0) {
                                        setErrorMessage("Enter First Name")
                                    }
                                    else if (lastname.length <= 0) {
                                        setErrorMessage("Enter Last Name")
                                    }
                                    else if (menuName == "ServiceProviderPage" && businessName.length <= 0) {
                                        setErrorMessage("Enter Business Name")
                                    }
                                    else if (menuName == "ServiceProviderPage" && businessType.length <= 0) {
                                        setErrorMessage("Enter BusinessType")
                                    }
                                    else if (email.length <= 0) {
                                        setErrorMessage("Enter Email Id")
                                    }
                                    else if (mobile.length <= 0) {
                                        setErrorMessage("Enter Mobile Number")
                                    }
                                    else if (menuName == "ServiceProviderPage" && address.length <= 0) {
                                        setErrorMessage("Enter Address")
                                    } else {
                                        setErrorMessage("")
                                        var body = {};

                                        if (menuName == "CustomersPage") {
                                            body = {
                                                "first_name": firstname,
                                                "last_name": lastname, "email": email, "mobile": mobile, "password": ""
                                            }
                                            dispatch(CreateUser(body, menuName))
                                        } else {
                                            body = {
                                                "business_name": businessName,
                                                "business_type": businessType,
                                                "business_address": address,
                                                "first_name": firstname,
                                                "last_name": lastname, "email": email, "mobile": mobile, "password": ""
                                            }
                                            dispatch(CreateUser(body, menuName))
                                        }
                                    }




                                }} >ADD</button>
                                <button className="custombutton common-bg mx-2" style={{ 'background': 'black' }} onClick={() => { handleClose() }} >Cancel</button>

                            </div>



                        </div>
                    </div>


                </Dialog>
            </div>
        );
    }

    return [setAlertDialog, bindAlertDialog, handleClose]


}