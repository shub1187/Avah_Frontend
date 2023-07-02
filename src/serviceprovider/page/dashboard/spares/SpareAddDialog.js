import { Dialog } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { SPCreateUser } from '../../../pagination_layout/pagination/SpUserAction';

function SpareAddDialog() {
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch()


    const [name, setName] = useState("")
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

    const [error, setErrorMessage] = useState("")

    const reset = () => {

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

                        <h2 className='d-title text-center'>ADD Spare</h2>


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
                                        <label htmlFor="inputEmail4" className="d-label-name">SGST</label>
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
                                else if ( thershold.length <= 0) {
                                    setErrorMessage("Enter thershold")
                                }
                                else if ( unit.length <= 0) {
                                    setErrorMessage("Enter Units")
                                }
                                else if ( purchasePrice.length <= 0) {
                                    setErrorMessage("Enter Purchase Price")
                                }
                                else if ( sellingPrice.length<=0) {
                                    setErrorMessage("Enter Selling Price")
                                }
                                else if ( manufature.length<0) {
                                    setErrorMessage("Enter Manufacture")
                                }
                                else if ( location.length<=0) {
                                    setErrorMessage("Enter Location")
                                }
                                else if ( expire.length<=0) {
                                    setErrorMessage("Enter Expire")
                                }
                                else if ( sgst.length<=0) {
                                    setErrorMessage("Enter SGST")
                                }
                                else if ( cgst.length<=0) {
                                    setErrorMessage("Enter CGST")
                                }
                              
                                else {
                                    setErrorMessage("")
                                    var body = {};

                                        body = {
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

export default SpareAddDialog
