import "./index.scss"
import URL from "url/apiURL"
import React, { useState ,useMemo,useEffect} from 'react'
import { pendingPaymentsColumns } from "./components/pendingPaymentsColumns"
import ServiceProvidertable from "components/spComponents/Table/ServiceProviderTable"
import { Autocomplete, Box, Button, Chip, Grid, InputLabel, TextField, Typography } from "@mui/material"
import FullyEditableAndDeletableTable from "components/common/Table/FullyEditableAndDeletableTable"
import { useFetchFunction } from "hooks/useFetch"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import pendingPaymentLabourColumn from "./components/labourcolumn"
import pendingPaymentSparesColumn from "./components/sparescolumn"
import UnderLine from "components/common/Underline"
import PaymentPopup from "./components/PaymentPopup"
const {getAllPendingPaymentInvoices,getJobcardDetails} = URL.SERVICE_PROVIDER.BILLING.PENDINGPAYMENTS

const PendingPayments = () => {

    const paymentList = useMemo(()=>[
        {label:"UPI",value:'upi'},
        {label:"CASH",value:'cash'},
        {label:"PHONE PE",value:'phone_pe'},
        {label:"GOOGLE Pay",value:'google_pay'},
    ],[])
    const [page, setPage] = useState('table')
    const [eyeIconValue,setEyeIconValue] = useState([])
    const [sparePayload, setSparePayload] = useState([])
    const [labourPayload, setLabourSparePayload] = useState([])
    const {fetchData,snackbar,loadingIndicator} = useFetchFunction()
    const [paymentOption,setPaymentOptions] = useState({popup:false,options:[paymentList[0]],loading:false})

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
      const {data} = await fetchData(obj)
      
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
  }

    const confirmPayment = async()=>{
        const obj ={
            method:'POST',
            url:'something',
            payload:{

            }
        }
        await fetch(obj)
    }



    if(page ==='eye-icon'){
        // getEstimateDetailsApi()
        return (
            <>
                <div>
                    <Box className='flex jc-space-between mb-3'>
                        <Button className='small-button' onClick={() =>setPage('table')} variant='outlined' color='options'>Back <ArrowBackIcon /></Button>
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
                    <Box className='mr-10'>
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
                    {eyeIconValue?.advisor_name && (
                         <Box>
                         <Typography fontWeight={'bold'}>Advisor Details</Typography>
                         <Box color={'#8F8F8E'} fontSize={'0.7rem'} className='flex jc-space-between'>
                           <Box>
                             <Box>Advisor</Box>
                             <Box >Technicians</Box>   
                           </Box>
                           <Box>
                             <Box>: {eyeIconValue?.advisor_name}</Box>
                             <Box >: {eyeIconValue?.technician_name?.map((name)=>name+", ")}</Box>  
                           </Box>
                         </Box>
                       </Box>
                    )}
                    </Box>

                    <Box maxHeight={'400px'} overflow={'auto'} className='mb-3'>
                        <FullyEditableAndDeletableTable
                            title={'SPARES'} 
                            buttonName={'Add Spares'} 
                            data={sparePayload} 
                            column={pendingPaymentSparesColumn} 
                            setPayload = {setSparePayload} 
                            autoCompleteFieldName={'name'}
                            // getAllItemListForAutoFillDebounceOnInputChange={getAllSpareListForAutoFill}
                            // getApiUrlOnAutocompleteItemSelect={getSpecificSpareDetailsForEstimate}
                            getApiUrlOnAutocompleteItemSelectParams={'spare_name'}
                            viewOnly
                        />
                    </Box>
                    <Box maxHeight={'400px'} overflow={'auto'} className='mb-3' >
                        <FullyEditableAndDeletableTable 
                            title={'LABOURS'} 
                            buttonName={'Add Labours'} 
                            data={labourPayload} 
                            column={pendingPaymentLabourColumn} 
                            setPayload = {setLabourSparePayload} 
                            autoCompleteFieldName={'name'}
                            // getAllItemListForAutoFillDebounceOnInputChange={getAllLabourListForAutoFill}
                            // getApiUrlOnAutocompleteItemSelect={getSpecificLabourDetailsForEstimate}
                            getApiUrlOnAutocompleteItemSelectParams={'labour_name'}
                            viewOnly
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
                        <Button className={'small-button mr-2'} color='options' variant='contained' onClick={()=>setPaymentOptions((prev)=>({...prev,popup:true}))}>Confirm Payment</Button>
                    </Box>
                </div>
                {paymentOption.popup && (<PaymentPopup state={paymentOption} setState={setPaymentOptions} closepopup={()=>setPaymentOptions((prev)=>({...prev,popup:false}))} callApi={confirmPayment} loading={paymentOption.loading} options={paymentList}/>)}
                {snackbar}
                {loadingIndicator}
            </>
        )
    }
    return (
        <div>
                <ServiceProvidertable
                    URL={getAllPendingPaymentInvoices}
                    columnss={pendingPaymentsColumns(()=>setPage('eye-icon'),setEyeIconValue)}
                    // clickButton= {()=>setPage('create-job-card')}
                    // buttonName={'CREATE JOB CARD'}
                />
        </div>
      )
}

export default PendingPayments