import "./index.scss"
import URL from "url/apiURL"
import React, { useState ,useMemo,useEffect} from 'react'
import { pendingPaymentsColumns } from "./components/pendingPaymentsColumns"
import { Autocomplete, Box, Button, Chip, Grid, InputLabel, TextField, Typography } from "@mui/material"
import FullyEditableAndDeletableTable from "components/common/Table/FullyEditableAndDeletableTable"
import { useFetchFunction } from "hooks/useFetch"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import pendingPaymentLabourColumn from "./components/labourcolumn"
import pendingPaymentSparesColumn from "./components/sparescolumn"
import UnderLine from "components/common/Underline"
import PaymentPopup from "./components/PaymentPopup"
import {useNavigate} from 'react-router-dom'
import DetailsCardWithTitle from "components/common/Cards/DetailsCardWithTitle"
import { formatTimestampToDate } from "utils/customFunctions"
import CustomMaterialTable from "components/common/Table/MaterialTable"

const {getAllPendingPaymentInvoices,getJobcardDetails,recievePayment} = URL.SERVICE_PROVIDER.BILLING.PENDINGPAYMENTS

const PendingPayments = () => {

    const paymentList = useMemo(()=>[
        {label:"UPI",value:'UPI'},
        {label:"CASH",value:'Cash'},
        {label:"PHONE PE",value:'Phone Pay'},
        {label:"GOOGLE Pay",value:'Google Pay'},
        {label:"PAYTM",value:'Paytm'},
        {label:"CREDIT CARD",value:'Credit Card'},
        {label:"DEBIT CARD",value:'Debit Card'}
    ],[])
    const [page, setPage] = useState('table')
    const [eyeIconValue,setEyeIconValue] = useState([])
    const [sparePayload, setSparePayload] = useState([])
    const [labourPayload, setLabourSparePayload] = useState([])
    const {fetchData,snackbar,loadingIndicator} = useFetchFunction()
    const [paymentOption,setPaymentOptions] = useState({popup:false,options:[paymentList[0]],loading:false})
    const navigate = useNavigate();
    const vehicleDetails = {names:['Vehicle Number','Model', 'Manufacturer', 'Fuel Type','Km Driven','Complaints'],values:[eyeIconValue?.vehicle_number, eyeIconValue?.model, eyeIconValue?.brand, eyeIconValue?.fuel_type, eyeIconValue?.kilometers_driven,eyeIconValue?.complaints]}
    const customerDetails = {names:["Name", "Pickup Address", "Mobile", "Email", "Payment Status", "Payment Method"],values:[eyeIconValue?.name, eyeIconValue?.pickup_address, eyeIconValue?.mobile_number, eyeIconValue?.email, eyeIconValue?.payment_status, eyeIconValue?.payment_method]}
    const estimateJobcardDetails = {names:['Estimate Created By','Estimate Created On','Jobcard Created By','Jobcard Number','Jobcard Opened On','Advisor Name','Technicians Name',],values:[eyeIconValue?.estimate_created_by,formatTimestampToDate(eyeIconValue?.estimate_created_on), eyeIconValue?.jobcard_created_by, eyeIconValue?.jobcard_number, formatTimestampToDate(eyeIconValue?.jobcard_opened_on), eyeIconValue?.advisor_name, eyeIconValue?.technician_name?.map((name) => name + ", ")]}
    const appointmentDetails = {names:['Appointment Status','Appointment Time','Appointment Date','Appointment Id'],values:[eyeIconValue?.appointment_status,eyeIconValue?.appointment_time,eyeIconValue?.appointment_date,eyeIconValue?.appointment_id]}
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
          obj.amount = (isNaN(parseFloat(obj.selling_price)) ? 0 : parseFloat(obj.tax/100) * parseFloat(obj.selling_price) + parseFloat(obj.selling_price)) *  parseFloat(obj?.quantity)
          obj.tax_amount = !obj.tax ? 0 : obj.tax===0 ? 0 : parseFloat(obj.tax/100) * parseFloat(obj.selling_price) *  parseFloat(obj?.quantity)
          obj.backendDisabled = true
      })

      labourData.forEach((obj)=>{
          obj.amount = (isNaN(parseFloat(obj.selling_price)) ? 0 : parseFloat(obj.tax/100) * parseFloat(obj.selling_price) + parseFloat(obj.selling_price)) *  parseFloat(obj?.quantity)
          obj.tax_amount = !obj.tax ? 0 : obj.tax===0 ? 0 : parseFloat(obj.tax/100) * parseFloat(obj.selling_price)  *  parseFloat(obj?.quantity)
          obj.backendDisabled = true
      })
      setSparePayload(data?.data?.spares)
      setLabourSparePayload(data?.data?.labours)
  }

    const confirmPayment = async()=>{
     
        const obj ={   
            payload:{      
                "invoice_number": eyeIconValue?.invoice_number, 
                "sp_id":localStorage.getItem('sp_id'), 
                "appointment_id":eyeIconValue?.appointment_id, 
                "invoice_collected_by":localStorage.getItem('profile_name'),
                "payment_method": paymentOption?.options[0]?.value
            },
            method:"POST",  
            url:recievePayment              
        }
        await fetchData(obj)
        setTimeout(()=>navigate('/serviceProvider/billing/invoiceList'),1000);
    }



    if(page ==='eye-icon'){
        // getEstimateDetailsApi()
        return (
            <>
                <div>
                    <Box className='flex jc-space-between mb-3'>
                        <Button className='small-button' onClick={() =>setPage('table')} variant='outlined' color='options'>Back <ArrowBackIcon /></Button>
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
                <CustomMaterialTable
                    URL={getAllPendingPaymentInvoices}
                    columnss={pendingPaymentsColumns(()=>setPage('eye-icon'),setEyeIconValue)}
                    // clickButton= {()=>setPage('create-job-card')}
                    // buttonName={'CREATE JOB CARD'}
                />
        </div>
      )
}

export default PendingPayments