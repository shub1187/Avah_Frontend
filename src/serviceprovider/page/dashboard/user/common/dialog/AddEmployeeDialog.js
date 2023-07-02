import { Dialog } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { SPCreateUser } from '../../../../../pagination_layout/pagination/SpUserAction';

function AddEmployeeDialog() {
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch()


    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobileNumber] = useState("")
    const [address, setAddress] = useState("")
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [pincode, setPinCode] = useState("")

    const [panCard, setPanCard] = useState("")
    const [password, setpassword] = useState("")
    const [rePassword, setRepassword] = useState("")

    const [active, setActive] = useState("")


    const [error, setErrorMessage] = useState("")

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


    }, [open]);

    const setAlertDialog = (props) => {
        setOpen(true);
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
                            width: "95%",
                            height: '100%',
                            backgroundColor: 'white'

                        }
                    }}

                    maxWidth='xxl'
                    open={open}
                    onClose={handleClose}
                >


                    <div className='px-4 py-3'>

                        <h2 className='d-title text-center'>ADD Employee</h2>


                        <div class="row mb-3 gx-3 ">
                            <div class=" col-md-4 themed-grid-col">
                                <div className="row gx-4 gy-4 mt-4">
                                    {/* ----------------------------- */}
                                    <div className="col-12 ">
                                        <label htmlFor="inputName" className="d-label-name">FULL NAME</label>
                                        <input type="text" className="inputfield" id="inputName" placeholder=""

                                            value={firstname} onChange={(e) => {
                                                setFirstName(e.target.value)
                                            }}
                                        />
                                    </div>
                                    {/* -------------------------------- */}
                                    <div className="col-12">
                                        <label htmlFor="inputName" className="d-label-name">LAST NAME </label>
                                        <input type="text" className="inputfield" id="inputName" placeholder=""
                                            value={lastname} onChange={(e) => {
                                                setLastName(e.target.value)
                                            }}
                                        />
                                    </div>
                                    {/* ----------------------------------- */}
                                    <div className="col-12">
                                        <label htmlFor="inputEmail4" className="d-label-name">EMAIL</label>
                                        <input type="email" className="inputfield" id="inputEmail4" placeholder=""

                                            value={email} onChange={(e) => {
                                                setEmail(e.target.value)
                                            }}
                                        />
                                    </div>
                                    {/* ------------------------------------------------ */}
                                    <div className="col-12">
                                        <label className="d-label-name" htmlFor="phone">Mobile no.</label>
                                        <input type="tel" className="inputfield" id="phone" placeholder="" name="phone"
                                            // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" 

                                            value={mobile} onChange={(e) => {
                                                setMobileNumber(e.target.value)
                                            }}
                                        />
                                    </div>
                                    {/* --------------------------------------------------- */}

                                    <div className="col-12 ">
                                        <label htmlFor="inputName" className="d-label-name">Gender</label>
                                        <input type="text" className="inputfield" id="inputName" placeholder=""

                                            // value={country} onChange={(e) => {
                                            //     setCountry(e.target.value)
                                            // }}
                                        />
                                    </div>

                                </div>

                            </div>

                            <div class=" col-md-4 themed-grid-col">
                                <div className="row gx-4 gy-4 mt-4">

                                    
                                <div className="col-12 ">
                                        <label htmlFor="inputName" className="d-label-name">Roles</label>
                                        <input type="text" className="inputfield" id="inputName" placeholder=""

                                            // value={country} onChange={(e) => {
                                            //     setCountry(e.target.value)
                                            // }}
                                        />
                                    </div>


                                    <div className="col-12">
                                        <label htmlFor="inputAddress2" className="d-label-name">ADDRESS</label>
                                        <textarea className="textarea" placeholder="" id="exampleFormControlTextarea1"
                                            rows="4" value={address} onChange={(e) => {
                                                setAddress(e.target.value)
                                            }}></textarea>
                                    </div>

                                    <div className="col-lg-6 ">
                                        <label htmlFor="inputName" className="d-label-name">Country</label>
                                        <input type="text" className="inputfield" id="inputName" placeholder=""

                                            value={country} onChange={(e) => {
                                                setCountry(e.target.value)
                                            }}
                                        />
                                    </div>

                                    <div className="col-lg-6 ">
                                        <label htmlFor="inputName" className="d-label-name">State</label>
                                        <input type="text" className="inputfield" id="inputName" placeholder=""

                                            value={state} onChange={(e) => {
                                                setState(e.target.value)
                                            }}
                                        />
                                    </div>

                                    <div className="col-lg-6 ">
                                        <label htmlFor="inputName" className="d-label-name">City</label>
                                        <input type="text" className="inputfield" id="inputName" placeholder=""

                                            value={city} onChange={(e) => {
                                                setCity(e.target.value)
                                            }}
                                        />
                                    </div>

                                    <div className="col-lg-6 ">
                                        <label htmlFor="inputName" className="d-label-name">Pin Code</label>
                                        <input type="text" className="inputfield" id="inputName" placeholder=""

                                            value={pincode} onChange={(e) => {
                                                setPinCode(e.target.value)
                                            }}
                                        />
                                    </div>

                                </div>


                            </div>
                            <div class=" col-md-4 themed-grid-col">

                                <div className="row gx-4 gy-4 mt-4">
                                    {/* ----------------------------- */}
                                    <div className="col-12 ">
                                        <label htmlFor="inputName" className="d-label-name">PAN Number</label>
                                        <input type="text" className="inputfield" id="inputName" placeholder=""

                                            value={panCard} onChange={(e) => {
                                                setPanCard(e.target.value)
                                            }}
                                        />
                                    </div>
                                    {/* -------------------------------- */}
                                    <div className="col-12">
                                        <label htmlFor="inputName" className="d-label-name">Password</label>
                                        <input type="text" className="inputfield" id="inputName" placeholder=""
                                            value={password} onChange={(e) => {
                                                setpassword(e.target.value)
                                            }}
                                        />
                                    </div>
                                    {/* ----------------------------------- */}
                                    <div className="col-12">
                                        <label htmlFor="inputEmail4" className="d-label-name">Re-enter Password</label>
                                        <input type="email" className="inputfield" id="inputEmail4" placeholder=""

                                            value={rePassword} onChange={(e) => {
                                                setRepassword(e.target.value)
                                            }}
                                        />
                                    </div>
                                </div>

                            </div>


                        </div>


                        <p className="inactivestatus my-2 " style={{ 'textAlign': 'center' }}> {error} </p>


                        <div className='column' style={{ 'textAlign': "center" }}>

                            <button className="button custombutton common-bg mx-2 mt-4" onClick={() => {


                                if (firstname.length <= 0) {
                                    setErrorMessage("Enter First Name")
                                }
                                else if (lastname.length <= 0) {
                                    setErrorMessage("Enter Last Name")
                                }
                               
                                else if (email.length <= 0) {
                                    setErrorMessage("Enter Email Id")
                                }
                                else if (mobile.length <= 0) {
                                    setErrorMessage("Enter Mobile Number")
                                }
                                else if ( address.length <= 0) {
                                    setErrorMessage("Enter Address")
                                }
                                else if ( password.length <= 0) {
                                    setErrorMessage("Enter Password")
                                }
                                else if ( rePassword.length <= 0) {
                                    setErrorMessage("Re-Password is missing")
                                }
                                else if ( password!=rePassword) {
                                    setErrorMessage("Password Mismatch")
                                }
                                else {
                                    setErrorMessage("")
                                    var body = {};

                                    if (menuName == "SpCustomersPage") {
                                        body = {
                                            "first_name": firstname,
                                            "last_name": lastname,
                                            "email": email,
                                            "mobile": mobile,
                                            "password": ""
                                        }
                                      
                                    } else {
                                        body = {
                                            "first_name": firstname,
                                            "last_name": lastname,
                                            "email": email,
                                            "mobile": mobile,
                                            "password": password
                                        }
                                      
                                    }
                                    dispatch(SPCreateUser(body, menuName))
                                }




                            }} >ADD</button>
                            <button className="custombutton common-bg mx-2" style={{ 'background': 'black' }} onClick={() => { handleClose() }} >Cancel</button>

                        </div>




                    </div>


                </Dialog>
            </div>
        );
    }

    return [setAlertDialog, bindAlertDialog, handleClose]
}

export default AddEmployeeDialog
