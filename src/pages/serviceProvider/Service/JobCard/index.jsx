import ServiceProvidertable from "components/spComponents/Table/ServiceProviderTable"
import { jobCardColumn } from "./Components/jobcardColumn"
import { useEffect, useState } from "react"
import { Autocomplete, Box, Button, Chip, Grid, InputLabel, TextField, Typography } from "@mui/material"
import FullyEditableAndDeletableTable from "components/common/Table/FullyEditableAndDeletableTable"
import { useFetchFunction } from "hooks/useFetch"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { spJobcardLabourColumn, spLabourColumn } from "./Components/labourColumn"
import { spJobCardSpareColumn } from "./Components/sparecolumn"
import URL from "url/apiURL"
import UnderLine from "components/common/Underline"
import './index.scss'
import { set } from "date-fns"

const {getJobcardDetails, updateJobcard, getAllAdminAdvisorEmployee, getAllTechnicianEmployee,getAllCreatedJobcardList} =URL.SERVICE_PROVIDER.SERVICE.JOBCARD
const JobCard = () => {

    const [page, setPage] = useState('table')
    console.log("ln 19", page)
    const [sparePayload, setSparePayload] = useState([])
    const [labourPayload, setLabourSparePayload] = useState([])
    const [eyeIconValue,setEyeIconValue] = useState([])
    const {fetchData,snackbar,loadingIndicator} = useFetchFunction()
    const[disabledUpdate,setDisabledUpdate] = useState(true)
    const [formData,setFormData] = useState([])
    const [techAdvList,setTechAdvList] = useState({technicians:[],advisors:[]})
    console.log("ln 27", techAdvList)
    const data ={
        "error": false,
        "message": "success",
        "data": [
            {
                "title": "Akshay Jadhav (Admin)",
                "label": "Akshay Jadhav",
                "value": "Akshay Jadhav"
            },
            {
                "title": "Vaibhav Dhumal (Advisor)",
                "label": "Vaibhav Dhumal",
                "value": "Vaibhav Dhumal"
            },
            {
                "title": "Niki Wadkar (Advisor)",
                "label": "Niki Wadkar",
                "value": "Niki Wadkar"
            }
        ]
    }
    const datar = {
        "error": false,
        "message": "Admin & Advisor's  List fetched successfully",
        "data": [
            {
                "title": "Akash Devkate (Advisor)",
                "label": "Akash Devkate (Advisor)",
                "value": "Akash Devkate (Advisor)"
            },
            {
                "label": "Aditya Ingale (Advisor)",
                "value": "Aditya Ingale (Advisor)"
            },
            {
                "label": "naved Wadkar (Advisor)",
                "value": "naved Wadkar (Advisor)"
            },
            {
                "label": "Jaydeep Borse (Advisor)",
                "value": "Jaydeep Borse (Advisor)"
            },
            {
                "label": "Pranish Poojary (Service Provider Admin)",
                "value": "Pranish Poojary (Service Provider Admin)"
            }
        ]
    }
    
    
    const calculateTotalAmount = (sparePayload,labourPayload)=>{

        let TotalAmount = 0

        const addAmount = (payload)=>{
            payload.forEach((obj)=>{
                if(obj.amount){
                    TotalAmount+=parseFloat(obj.amount)
                }
            })
        }
        addAmount(sparePayload)
        addAmount(labourPayload)

        return TotalAmount
    }

    useEffect(() => {
        if (page === 'eye-icon') {
            getJobcardDetailsApi();
        }
      }, [page]);

    const getJobcardDetailsApi = async()=>{
        
        const obj = {
            method:"GET",
            url:`${getJobcardDetails}?sp_id=${localStorage.getItem('sp_id')}&jobcard_number=${eyeIconValue?.jobcard_number}`
        }
        const advisor = {
            method:'GET',
            url:`${getAllAdminAdvisorEmployee}?sp_id=${localStorage.getItem('sp_id')}`

        }
        const technician = {
            method:'GET',
            url:`${getAllTechnicianEmployee}?sp_id=${localStorage.getItem('sp_id')}`

        }
        const {data} = await fetchData(obj)
        const {data:advisorData} = await fetchData(advisor)
        const {data:technicianData} = await fetchData(technician)
        
        let spareData = data?.data.spares
        let labourData = data?.data.labours

        spareData.forEach((obj)=>{
            obj.amount = isNaN(parseFloat(obj.selling_price)) ? 0 : parseFloat(obj.tax/100) * parseFloat(obj.selling_price) + parseFloat(obj.selling_price)
            obj.tax_amount = !obj.tax ? 0 : obj.tax===0 ? 0 : parseFloat(obj.tax/100) * parseFloat(obj.selling_price)
            obj.backendDisabled = true
        })

        labourData.forEach((obj)=>{
            obj.amount = isNaN(parseFloat(obj.selling_price)) ? 0 : parseFloat(obj.tax/100) * parseFloat(obj.selling_price) + parseFloat(obj.selling_price)
            obj.tax_amount = !obj.tax ? 0 : obj.tax===0 ? 0 : parseFloat(obj.tax/100) * parseFloat(obj.selling_price)
            obj.backendDisabled = true
        })
        setSparePayload(data?.data?.spares)
        setLabourSparePayload(data?.data?.labours)
        console.log("ln 137", advisorData , technicianData)
        setTechAdvList((prev)=>({...prev,advisors:advisorData?.data, technicians:technicianData?.data}))
    }

  
    const updateEstimate = async()=>{
        const obj = {
            payload:{
                appointment_id:eyeIconValue?.appointment_id,
                sp_id:localStorage.getItem('sp_id'),
                estimate_number : eyeIconValue?.estimate_number,
                sparePayload,
                labourPayload
            },
            method:"POST",
            url:updateJobcard
        }
        if((sparePayload && sparePayload.length) || (labourPayload && labourPayload.length) ){
            await fetchData(obj)
        }
    }
    console.log("ln 158 ", techAdvList.technicians)
    if(page ==='eye-icon'){
        // getEstimateDetailsApi()
        return (
            <>
                <div>
                    <Box className='flex jc-space-between mb-3'>
                        <Button className='small-button' onClick={() =>{ setPage('table');setDisabledUpdate(true)}} variant='outlined' color='options'>Back <ArrowBackIcon /></Button>
                    </Box>
                    <Box className='flex'>
                    <Box className='mr-10'>
                      <Typography fontWeight={'bold'}>Vehicle Details</Typography>
                      <Box color={'#8F8F8E'} fontSize={'0.7rem'} className='flex jc-space-between'>
                        <Box>
                          <Box>Vehicle Number</Box>
                          <Box >Model</Box>  
                          <Box >Manufacturer</Box>  
                          <Box >Vehicle Type</Box>  
                        </Box>
                        <Box>
                          <Box>: {eyeIconValue?.vehicle_number}</Box>
                          <Box >: {eyeIconValue?.model}</Box>  
                          <Box >: {eyeIconValue?.brand}</Box>  
                          <Box >: {eyeIconValue?.fuel_type}</Box>  
                        </Box>
                      </Box>
                    </Box>
                    <Box className='mr-10'>
                      <Typography fontWeight={'bold'}>Customer Details</Typography>
                      <Box color={'#8F8F8E'} fontSize={'0.7rem'} className='flex jc-space-between'>
                        <Box>
                          <Box>Name</Box>
                          <Box >Pickup Address</Box>  
                          <Box >Mobile</Box>  
                          <Box >Email</Box>  
                        </Box>
                        <Box>
                          <Box>: {eyeIconValue?.name}</Box>
                          <Box >: {eyeIconValue?.pickup_address}</Box>  
                          <Box >: {eyeIconValue?.mobile_number}</Box>  
                          <Box >: {eyeIconValue?.email}</Box>  
                        </Box>
                      </Box>
                    </Box>
                    <Box>
                      <Typography fontWeight={'bold'}>Appointment Details</Typography>
                      <Box color={'#8F8F8E'} fontSize={'0.7rem'} className='flex jc-space-between'>
                        <Box>
                          <Box>Appointment Status</Box>
                          <Box >Appointment Time</Box>  
                          <Box >Appointment Date</Box>  
                          <Box >Appointment Id</Box>  
                          <Box >Estimate Number</Box>  
                        </Box>
                        <Box>
                          <Box>: {eyeIconValue?.appointment_status}</Box>
                          <Box >: {eyeIconValue?.appointment_time}</Box>  
                          <Box >: {eyeIconValue?.appointment_date}</Box>  
                          <Box >: {eyeIconValue?.appointment_id}</Box>  
                          <Box >: {eyeIconValue?.estimate_number}</Box>  
                        </Box>
                      </Box>
                    </Box>
                    </Box>
                    <Grid container className='flex mt-1'>
                        <Grid xs={6} item className='border mr-2'>
                            <Typography className="mb-1" fontWeight={'bold'}>Assign Advisor<UnderLine/></Typography>
                            <Grid item xs={12} mb={2}>
                            <Autocomplete
                                color="options"
                                multiple
                                id="tags-standard"
                                options={techAdvList?.advisors|| []}
                                getOptionLabel={(option) => option.label}
                                // defaultValue={defaultValues}
                                // onChange={(event,value)=>setFormData({permission_granted : value.map((val)=>val.title)})}
                                renderInput={(params) => (
                                <TextField
                                    {...params}
                                    size='small'
                                />
                                )}
                            />
                            </Grid>
                        </Grid>
                        <Grid xs={5.8} item className='border'>
                            <Typography className="mb-1" fontWeight={'bold'}>Assign Technician<UnderLine/></Typography>
                            <Grid item xs={12} mb={2}>
                            <Autocomplete
                                multiple
                                id="tags-standard"
                                options={techAdvList?.technicians || []}
                                getOptionLabel={(option) => option.label}
                                // defaultValue={defaultValues}
                                // onChange={(event,value)=>setFormData({permission_granted : value.map((val)=>val.title)})}
                                renderInput={(params) => (
                                <TextField
                                    {...params}
                                    size='small'
                                />
                                )}
                            />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Box maxHeight={'400px'} overflow={'auto'} className='mb-3'>
                        <FullyEditableAndDeletableTable
                            title={'SPARES'} 
                            buttonName={'Add Spares'} 
                            data={sparePayload} 
                            column={spJobCardSpareColumn} 
                            setPayload = {setSparePayload} 
                            autoCompleteFieldName={'name'}
                            // getAllItemListForAutoFillDebounceOnInputChange={getAllSpareListForAutoFill}
                            // getApiUrlOnAutocompleteItemSelect={getSpecificSpareDetailsForEstimate}
                            getApiUrlOnAutocompleteItemSelectParams={'spare_name'}
                            setDisabledUpdate={setDisabledUpdate}
                        />
                    </Box>
                    <Box maxHeight={'400px'} overflow={'auto'} className='mb-3' >
                        <FullyEditableAndDeletableTable 
                            title={'LABOURS'} 
                            buttonName={'Add Labours'} 
                            data={labourPayload} 
                            column={spJobcardLabourColumn} 
                            setPayload = {setLabourSparePayload} 
                            autoCompleteFieldName={'name'}
                            // getAllItemListForAutoFillDebounceOnInputChange={getAllLabourListForAutoFill}
                            // getApiUrlOnAutocompleteItemSelect={getSpecificLabourDetailsForEstimate}
                            getApiUrlOnAutocompleteItemSelectParams={'labour_name'}
                            setDisabledUpdate={setDisabledUpdate}
                        />
                    </Box>
                    <Box className='flex jc-flex-end ai-center'>
                        <Box className='flex jc-flex-end ai-center'>
                            <Box className='bold' >Grand Total = </Box>
                            <Box className='mr-1'> Total Amount of Spares + Total Amount of Labour</Box>
                            <Box className='mr-4 textfield-grey-background'>
                                <TextField 
                                size='small' 
                                disabled 
                                value={
                                    calculateTotalAmount(sparePayload,labourPayload)
                                }
                                />
                            </Box>
                        </Box>
                        {/* <Button className={'small-button mr-2'} color='options' variant='contained' onClick={()=>setOpenDeleteEstimateConfirmation(true)}>DELETE</Button> */}
                        <Button disabled={disabledUpdate} className='small-button' color='options' variant='contained' onClick={updateEstimate}>UPDATE</Button>
                    </Box>
                </div>
                {snackbar}
                {loadingIndicator}
            </>
        )
    }
  return (
    <div>
            <ServiceProvidertable
                URL={getAllCreatedJobcardList}
                columnss={jobCardColumn(()=>setPage('eye-icon'),setEyeIconValue)}
                // clickButton= {()=>setPage('create-job-card')}
                // buttonName={'CREATE JOB CARD'}
            />
    </div>
  )
}

export default JobCard