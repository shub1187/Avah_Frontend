import React, { useEffect, useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Alert, Box, Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Snackbar, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import CreateTextFields from 'components/common/Textfield';
import { useFetch, useCustomerFetchFunction } from 'hooks/useFetch';
import { useMobileResponsive } from 'hooks/useMobileResponsive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getCities, getStates } from 'utils/customFunctions';
import URL from 'url/apiURL';
const {getAllCitiesPerState,getCustomerProfile,profileCompletion} = URL.CUSTOMER.UPDATEPROFILE

const UpdateCustomerProfile = () => {

    let customer_id = localStorage.getItem("customer_id")
    const [formData, setFormData] = useState({ "customer_id": customer_id });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [profileData, setProfileData] = React.useState([])
    const [citiesAndState, setCitiesAndState] = useState({ state: [], cities: [] })

    const { fetchCustomerData, snackbar, loadingIndicator } = useCustomerFetchFunction()
    const { isMobile } = useMobileResponsive()
    let { data: cityData } = useFetch(getAllCitiesPerState)

    //TO GET ALL THE STATES
    useEffect(() => {
        if (cityData?.result?.length) {
            let listOfStates = getStates(cityData?.result)
            setCitiesAndState({ state: listOfStates })
        }
    }, [cityData])

    //TO GET CITIES BASED ON SELECTED STATE
    useEffect(() => {
        if (formData.state) {
            let citiesList = getCities(formData.state, cityData?.result)
            setCitiesAndState((prev) => ({ ...prev, cities: citiesList }))
        }
    }, [formData.state])

    //TO GET THE PROFILE DATA OF USER
    useEffect(() => {
        //IIFE FUNCTION
        (async () => {
            const obj = {
                payload: formData,
                method: "POST",
                url: getCustomerProfile,
                noLoading: true,
                noSnackbar: true
            }
            const { data } = await fetchCustomerData(obj)
            setProfileData(data)
        })()
    }, [])

    const handleFieldChange = (fieldName, value) => {
        setFormData((prevData) => ({ ...prevData, [fieldName]: value }));
    };

    const handleSubmit = async () => {
        try {
            setIsSubmitted(true)
            const requiredFields = profileList.filter((field) => field.required);
            const emptyRequiredFields = requiredFields.filter((field) => !formData[field.name]);

            if (emptyRequiredFields.length > 0) {
                return;
            }
            const obj = {
                payload: formData,
                method: "POST",
                url:profileCompletion
            }
            await fetchCustomerData(obj)
        }
        catch (error) {
        }
        setFormData({})
        setIsSubmitted(false)

    }

    const profileList = [
        {
            label: 'Address',
            name: "address",
            type: 'text',
            fullWidth: true,
            required: true,
            errormessage: 'Please Fill in your Address',
        },
        {
            label: 'Mobile Number',
            name: "mobile_number",
            type: 'number',
            fullWidth: true,
            required: true,
            errormessage: 'Please Fill in your Mobile Number',
        },
        {
            label: 'State',
            name: "state",
            type: 'text',
            fullWidth: true,
            required: true,
            errormessage: 'State Required',
            select: true,
            selectArray: citiesAndState?.state
        },
        {
            label: 'City',
            name: "city",
            type: 'text',
            fullWidth: true,
            required: true,
            errormessage: 'City Required',
            select: true,
            selectArray: citiesAndState?.cities
        },
        {
            label: 'Pincode',
            name: "pin_code",
            type: 'number',
            fullWidth: true,
            required: true,
            errormessage: 'Pincode Required',
        },
    ]
    return (
        <div>
            <DialogTitle >  <Typography fontWeight={'bold'} fontSize={25} sx={{ textDecoration: 'underline' }}>PROFILE</Typography><Box component={'span'} ml={4}></Box></DialogTitle>
            <DialogContent>
                <Grid container xs={12} flexDirection={'column'}>
                    <Box display='flex'>
                        <Box>
                            <Typography my={1} fontWeight={'bold'} fontSize={20}>Name : <Typography fontSize={20} sx={{ color: 'rgb(173,73,112)' }} fontWeight={'bold'} component={'span'}>{profileData?.result?.name ?? ""}</Typography></Typography>
                            <Typography my={1} fontWeight={'bold'} fontSize={20}>Email : <Typography fontSize={20} sx={{ color: 'rgb(173,73,112)' }} fontWeight={'bold'} component={'span'}>{profileData?.result?.email ?? ""}</Typography></Typography>
                        </Box>
                        <Box mx={5}>
                            <Typography my={1} fontWeight={'bold'} fontSize={20}>Address : <Typography fontSize={20} sx={{ color: 'rgb(173,73,112)' }} fontWeight={'bold'} component={'span'}>{profileData?.result?.address ?? ""}</Typography></Typography>
                            <Typography my={1} fontWeight={'bold'} fontSize={20}>Mobile Number : <Typography fontSize={20} sx={{ color: 'rgb(173,73,112)' }} fontWeight={'bold'} component={'span'}>{profileData?.result?.mobile_number ?? ""}</Typography></Typography>
                        </Box>
                    </Box>
                    <Grid item xs={12} sm={12} mr={!isMobile && 4}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography fontSize={20} fontWeight={'bold'}>{profileData?.result?.button_name == "Complete your Profile" ? 'Complete your Profile' : 'Update Your Profile'}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <CreateTextFields fields={profileList} onChange={handleFieldChange} formField={formData} isSubmitted={isSubmitted} />
                                <Box>
                                    <Button variant={'contained'} color='options' onClick={handleSubmit}>{profileData?.result?.button_name == "Complete your Profile" ? 'Complete your Profile' : 'Update Your Profile'}</Button>
                                </Box>
                            </AccordionDetails>
                            {/* <TextField values={formData[]}/> */}
                        </Accordion>
                    </Grid>
                </Grid>

            </DialogContent>
            {snackbar}
            {loadingIndicator}
        </div>)
}

export default UpdateCustomerProfile