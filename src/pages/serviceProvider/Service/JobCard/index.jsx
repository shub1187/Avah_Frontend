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
import DetailsCardWithTitle from "components/common/Cards/DetailsCardWithTitle"
import { formatTimestampToDate } from "utils/customFunctions"
import CustomMaterialTable from "components/common/Table/MaterialTable"

const {getJobcardDetails, updateJobcard, getAllAdminAdvisorEmployee, getAllTechnicianEmployee,getAllCreatedJobcardList,getAllLabourListForAutoFill,getAllSpareListForAutoFill,getSpecificLabourDetailsForEstimate,getSpecificSpareDetailsForEstimate, generateInvoice} =URL.SERVICE_PROVIDER.SERVICE.JOBCARD
const JobCard = () => {

    const [page, setPage] = useState('table')
    const [sparePayload, setSparePayload] = useState([])
    const [labourPayload, setLabourSparePayload] = useState([])
    const [eyeIconValue,setEyeIconValue] = useState([])
    const {fetchData,snackbar,loadingIndicator} = useFetchFunction()
    const[disabledUpdate,setDisabledUpdate] = useState(true)
    const [techAdvList,setTechAdvList] = useState({technicians:[],advisors:[]})
    const [techAdvPayload,setTechAdvPayload] = useState({technicians:[],advisor:'',showAutoComplete:true})

    const vehicleDetails = {names:['Vehicle Number','Model', 'Manufacturer', 'Fuel Type','Km Driven','Complaints'],values:[eyeIconValue?.vehicle_number, eyeIconValue?.model, eyeIconValue?.brand, eyeIconValue?.fuel_type, eyeIconValue?.kilometers_driven,eyeIconValue?.complaints]}
    const customerDetails = {names:["Name", "Pickup Address", "Mobile", "Email"],values:[eyeIconValue?.name, eyeIconValue?.pickup_address, eyeIconValue?.mobile_number, eyeIconValue?.email]}
    const estimateJobcardDetails = {names:['Estimate Created By','Estimate Created On','Estimtate Number','Jobcard Created By','Jobcard Number','Jobcard Opened On','Advisor Name','Technicians Name',],values:[eyeIconValue?.estimate_created_by,formatTimestampToDate(eyeIconValue?.estimate_created_on),eyeIconValue?.estimate_number, eyeIconValue?.jobcard_created_by, eyeIconValue?.jobcard_number, formatTimestampToDate(eyeIconValue?.jobcard_opened_on), eyeIconValue?.advisor_name, eyeIconValue?.technician_name?.map((name) => name + ", ")]}
    const appointmentDetails = {names:['Appointment Status','Appointment Time','Appointment Date','Appointment Id'],values:[eyeIconValue?.appointment_status,eyeIconValue?.appointment_time,eyeIconValue?.appointment_date,eyeIconValue?.appointment_id]}
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
            url:`${getAllAdminAdvisorEmployee}?sp_id=${localStorage.getItem('sp_id')}`,
            noLoading : true,
            noSnackbar : true

        }
        const technician = {
            method:'GET',
            url:`${getAllTechnicianEmployee}?sp_id=${localStorage.getItem('sp_id')}`,
            noLoading : true,
            noSnackbar : true

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
        setTechAdvList((prev)=>({...prev,advisors:advisorData?.data, technicians:technicianData?.data}))
    }

  
    const updateJobcardCall = async()=>{
        const obj = {
            payload:{
                appointment_id:eyeIconValue?.appointment_id,
                sp_id:localStorage.getItem('sp_id'),
                jobcard_number : eyeIconValue?.jobcard_number,
                jobcard_created_by:localStorage.getItem('profile_name'),
                sparePayload,
                labourPayload,
                technician_name: techAdvPayload?.technicians,
                advisor_name: eyeIconValue?.advisor_name || techAdvPayload?.advisor,
            },
            method:"POST",
            url:updateJobcard
        }
        if((sparePayload && sparePayload.length) || (labourPayload && labourPayload.length) ){
            setTechAdvPayload((prev)=>({...prev,showAutoComplete:false}))
            await fetchData(obj)
        }
    }

    const generateInvoiceCall = async()=>{
        await updateJobcardCall();
        const obj = {
            payload:{
                appointment_id:eyeIconValue?.appointment_id,
                sp_id:localStorage.getItem('sp_id'),
                jobcard_number : eyeIconValue?.jobcard_number,
                estimate_number : eyeIconValue?.estimate_number,
                invoice_amount : calculateTotalAmount(sparePayload,labourPayload),
                vehicle_number :  eyeIconValue?.vehicle_number,
                invoice_created_by:localStorage.getItem('profile_name')
            },
            method:"POST",
            url:generateInvoice   
        }
        if((sparePayload && sparePayload.length) || (labourPayload && labourPayload.length) ){
            setTechAdvPayload((prev)=>({...prev,showAutoComplete:false}))
            await fetchData(obj)
        }
    }
    if(page ==='eye-icon'){
        // getEstimateDetailsApi()
        return (
            <>
                <div>
                    <Box className='flex jc-space-between mb-3'>
                        <Button className='small-button' onClick={() =>{ setPage('table');setDisabledUpdate(true); setTechAdvPayload((prev)=>({...prev,showAutoComplete:true}))}} variant='outlined' color='options'>Back <ArrowBackIcon /></Button>
                    </Box>
                    <Box className='flex mb-4'>
                        <Box className='width-half'>
                                <DetailsCardWithTitle data={vehicleDetails} underline title={'Vehicle Detail'}/>
                        </Box>
                        <Box className='width-half'>
                                <DetailsCardWithTitle data={customerDetails} underline title={'Customer Details'}/>
                        </Box>
                    </Box>
                    <Box className='flex mb-4'>
                        <Box className='width-half'>
                                <DetailsCardWithTitle data={estimateJobcardDetails} underline title={'Estimate/Jobcard Detail'}/>
                        </Box>
                        <Box className='width-half'>
                                <DetailsCardWithTitle data={appointmentDetails} underline title={'Appointment Detail'}/>
                        </Box>
                    </Box>
                    {eyeIconValue?.advisor_assigned=='Yes'?<></>:techAdvPayload?.showAutoComplete && (
                        <Grid container className='flex mt-1'>
                            <Grid xs={6} item className='border mr-2'>
                                <Typography className="mb-1" fontWeight={'bold'}>Assign Advisor<UnderLine/></Typography>
                                <Grid item xs={12} mb={2}>
                                <Autocomplete
                                    color="options"
                                    multiple
                                    id="tags-standard"
                                    options={ techAdvList?.advisors || []}
                                    getOptionLabel={(option) => option.label}
                                    onChange={(event,value)=>{
                                    setTechAdvPayload((prev)=>({...prev,advisor:value.reduce((acc,obj)=>acc = obj.value,'')}));
                                    setDisabledUpdate(false)
                                            }}
                                    getOptionDisabled={(options)=>techAdvPayload?.advisor?.length?true:false}
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
                                    value={techAdvPayload.technicians}
                                    options={techAdvList?.technicians?.map(val=>val.value) || []}
                                    getOptionLabel={(option) => option}
                                    onChange={(event,value)=>setTechAdvPayload((prev)=>({...prev,technicians:value}))}
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
                    )}

                    <Box maxHeight={'400px'} overflow={'auto'} className='mb-3'>
                        <FullyEditableAndDeletableTable
                            title={'SPARES'} 
                            buttonName={'Add Spares'} 
                            data={sparePayload} 
                            column={spJobCardSpareColumn} 
                            setPayload = {setSparePayload} 
                            autoCompleteFieldName={'name'}
                            getAllItemListForAutoFillDebounceOnInputChange={getAllSpareListForAutoFill}
                            getApiUrlOnAutocompleteItemSelect={getSpecificSpareDetailsForEstimate}
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
                            getAllItemListForAutoFillDebounceOnInputChange={getAllLabourListForAutoFill}
                            getApiUrlOnAutocompleteItemSelect={getSpecificLabourDetailsForEstimate}
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
                        <Button sx={{mr:2}} disabled={disabledUpdate} className='small-button' color='options' variant='contained' onClick={updateJobcardCall}>Update JobCard</Button>
                        <Button disabled={disabledUpdate} className='small-button' color='options' variant='contained' onClick={generateInvoiceCall}>Generate Invoice</Button>

                    </Box>
                </div>
                {snackbar}
                {loadingIndicator}
            </>
        )
    }
  return (
    <div>
            <CustomMaterialTable
                URL={getAllCreatedJobcardList}
                columnss={jobCardColumn(()=>setPage('eye-icon'),setEyeIconValue)}
                // clickButton= {()=>setPage('create-job-card')}
                // buttonName={'CREATE JOB CARD'}
            />
    </div>
  )
}

export default JobCard