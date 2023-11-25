

import React, { useEffect, useState } from 'react'
import { Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField, ThemeProvider, Typography, createTheme, useMediaQuery } from '@mui/material';
import CreateTextFields from 'components/common/Textfield';
import { useCustomerFetchFunction, useFetch } from 'hooks/useFetch';
import ControlledRadioButtonsGroup from 'components/spComponents/Radio';
import FileInputTextField from 'components/common/Textfield/FileTextfield';
import { useMobileResponsive } from 'hooks/useMobileResponsive';
import { useDialogWrapperContext } from 'components/common/Dialog/DialogWrapper';
import { getBrandData, getModelData, requiredTextfield } from 'utils/customFunctions';
import URL from 'url/apiURL';

const {getAllFuelTypes,getAllModelPerBrand,vehicleRegistration} = URL.CUSTOMER.VEHICLE

const AddCustomerVehicleDialog = ({ height, width, color }) => {
    const { handleClose, isMobile, isSubmitted, setIsSubmitted, formData, setFormData } = useDialogWrapperContext()
    const [vehicleNameAndBrand, setVehicleNameAndBrand] = useState({})
    const [fuelArray,setFuelArray] = useState([])
    let {data} = useFetch(getAllModelPerBrand)
    let { data: fuelType } = useFetch(getAllFuelTypes)
    const { fetchCustomerData, snackbar, loadingIndicator } = useCustomerFetchFunction()
    console.log("ln 23",data)
    useEffect(()=>{
        let fuelArray = []
        if(fuelType?.data?.results?.length){
            fuelArray = fuelType?.data?.results?.map(item => ({
                label: item.fuel_name,
                value: item.fuel_name
            }))
            setFuelArray(fuelArray)
        }
    },[fuelType])

    useEffect(() => {
        if(data?.data?.results?.length){
        let brandData = getBrandData(data?.data?.results)
        setVehicleNameAndBrand({ brandArray: brandData, modelArray: {} })
        }
    }, [data?.data?.results])


    useEffect(() => {
        const modelArray = getModelData(data?.data?.results, vehicleNameAndBrand?.brandArray, formData.brand)
        setVehicleNameAndBrand((prev) => ({ ...prev, modelArray }))
    }, [formData?.brand])

    const handleFieldChange = (fieldName, value) => {
        setFormData((prevData) => ({ ...prevData, [fieldName]: value }));
    };

    const handleSubmit = async () => {
        setIsSubmitted(true); // Set the form as submitted
        // const requiredFields = customerTextfield.filter((field) => field.required);
        // const emptyRequiredFields = requiredFields.filter((field) => !formData[field.name]);
        let isRequired = requiredTextfield(customerTextfield,formData)
        if(isRequired) {
            setTimeout(() => {
                setIsSubmitted(false)
            }, [2000]);
            return
        }

        const obj = {
            payload: formData,
            method: "POST",
            url: vehicleRegistration
        }

        await fetchCustomerData(obj)
        setFormData({})
        setIsSubmitted(false)
        setTimeout(()=>handleClose(),2000)
    }


    const customerTextfield = [

        {
            label: 'Vehicle Number',
            name: "vehicle_number",
            type: 'number',
            fullWidth: true,
            required: true, // Add the required property
            errormessage: 'Vehicle Number Required', // Add the error message

        },
        {
            label: 'Vehicle Type',
            name: "vehicle_type",
            type: 'text',
            required: true, // Add the required property
            errormessage: 'Vehicle Type Required', // Add the error message
            fullWidth: true,
            select: true,
            selectArray: [{ label: "Personal", value: "Personal" }, { label: "Commercial", value: "Commercial" }]
        },
        {
            label: 'Brand',
            name: "brand",
            type: 'text',
            fullWidth: true,
            required: true, // Add the required property
            errormessage: 'Brand Required', // Add the error message
            select: true,
            selectArray: vehicleNameAndBrand?.brandArray
        },
        {
            label: 'Model',
            name: "model",
            type: 'text',
            fullWidth: true,
            select: true,
            required: true, // Add the required property
            errormessage: 'Model Required', // Add the error message
            selectArray: vehicleNameAndBrand?.modelArray
        },
        {
            label: 'Engine Customization',
            name: "customization",
            type: 'text',
            fullWidth: true,
            required: true, // Add the required property
            errormessage: 'Engine Customization Required', // Add the error message
            select: true,
            selectArray: [{ label: "Showroom Fitted", value: "Showroom Fitted" }, { label: "Externally Modified", value: "Externally Modified" }],
            tooltip: true,
            tooltipMessage: 'Showroom fitted means Engine varient provided by manufacturer And Externally modified means if you have customized original engine. Eample: Added outfitted CNG Kit to Petrol Engine'
        },

        {
            label: 'Chassis Number',
            name: "chassis_number",
            type: 'text',
            fullWidth: true,
            required: true, // Add the required property
            errormessage: 'Chassis Number Required', // Add the error message

        },
        {
            label: 'Fuel Type',
            name: "fuel_type",
            type: 'text',
            fullWidth: true,
            select: true,
            selectArray: fuelArray,
            required: true, // Add the required property
            errormessage: 'Select Fuel Type', // Add the error message
        },
    ]

    return (
        <div>
            <DialogContent>
                <Grid container xs={12} mt={3}>
                    <Grid item xs={12} sm={5.5} mr={!isMobile && 4}>
                        <CreateTextFields fields={customerTextfield.slice(0, 1)} onChange={handleFieldChange} formField={formData} isSubmitted={isSubmitted} />
                        <Box mb={1} color={'#ad4970'}>No Hiphen required Eg:MH14TT3066</Box>
                        <CreateTextFields fields={customerTextfield.slice(1, 2)} onChange={handleFieldChange} formField={formData} isSubmitted={isSubmitted} />
                        <CreateTextFields fields={customerTextfield.slice(2, 3)} onChange={handleFieldChange} formField={formData} isSubmitted={isSubmitted} />
                        <CreateTextFields fields={customerTextfield.slice(3, 4)} onChange={handleFieldChange} formField={formData} isSubmitted={isSubmitted} />
                    </Grid>
                    <Grid item xs={12} sm={5.5}>
                        <Grid container xs={12}>
                            <Grid xs={12} item><CreateTextFields fields={customerTextfield.slice(4, 5)} onChange={handleFieldChange} formField={formData} isSubmitted={isSubmitted} /></Grid>
                            <Grid xs={12} item><CreateTextFields fields={customerTextfield.slice(5, 6)} onChange={handleFieldChange} formField={formData} isSubmitted={isSubmitted} /></Grid>
                            <Grid xs={12} item ><CreateTextFields fields={customerTextfield.slice(6, 7)} onChange={handleFieldChange} formField={formData} isSubmitted={isSubmitted} /></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button color='options' onClick={handleClose}>Cancel</Button>
                <Button variant={'contained'} color='options' onClick={handleSubmit}>SUBMIT</Button>
            </DialogActions>
            {snackbar}
            {loadingIndicator}
        </div>
    )
}

export default AddCustomerVehicleDialog