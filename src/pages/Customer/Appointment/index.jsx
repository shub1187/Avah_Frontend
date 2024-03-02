import  { useEffect, useState } from 'react'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@mui/material'
// import CustomerTable from 'components/CustomerComponents/Table/CustomerTable'
import { useMobileResponsive } from 'hooks/useMobileResponsive'
import TableCustomerMobileDetails from 'components/common/Mobile/TableCustomerMobileDetails'
import AddCustomerAppointmentColumn from 'pages/Customer/Appointment/Components/AddCustomerAppointmentColymn'
import CustomerTable from 'components/common/Table/CustomerTable'
import AddCustomerAppointmentDialog from './Components/AddCustomerAppointmentDialog'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { SpCreateLabourEstimateColumn } from 'pages/serviceProvider/Service/Estimate/Components/LabourEstimateColumn'
import { SpCreateSpareEstimateColumn } from 'pages/serviceProvider/Service/Estimate/Components/SpareEstimateColumn'
import FullyEditableAndDeletableTable from 'components/common/Table/FullyEditableAndDeletableTable'
import { useFetchFunction } from 'hooks/useFetch'
import URL from 'url/apiURL'
import { CustomerSpareEstimateColum } from './Components/CustomerSpareEstimateColumn'
import { CustomerLabourEstimateColumn } from './Components/CustomerLabourEstimateColumn'
import UnderLine from 'components/common/Underline'
import CreateTextFields from 'components/common/Textfield'
import { requiredTextfield } from 'utils/customFunctions'

const {getEstimateDetails, estimateApproval, estimateRejection} = URL.CUSTOMER.APPOINTMENT
const CustomerAppointment = () => {
  
  const [toggle,setToggle] = useState('appointment')
  const {isMobile} = useMobileResponsive()
  const [page, setPage] = useState('table')
  const [eyeIconValue,setEyeIconValue] = useState([])
  const {fetchData,snackbar,loadingIndicator} = useFetchFunction()
  const [sparePayload, setSparePayload] = useState([])
  const [labourPayload, setLabourSparePayload] = useState([])
  const [openReject,setOpenReject] = useState({toggle:false,estimate_rejection_note:''})
  const [isSubmitted,setIsSubmitted] = useState(false)

  // data.map((arr)=> arr.amount = parseFloat(arr?.amount)*parseFloat(arr?.quantity))
  // sparePayload.map((arr)=> arr.amount = parseFloat(arr?.amount)*parseFloat(arr?.quantity))
  // labourPayload.map((arr)=> arr.amount = parseFloat(arr?.amount)*parseFloat(arr?.quantity))

  const calculateTotalAmount = (sparePayload,labourPayload)=>{
    let TotalAmount = 0
  
    const addAmount = (payload)=>{
        payload?.forEach((obj)=>{
            if(obj.amount){
                TotalAmount+=parseFloat(obj.amount)
            }
        })
    }
    addAmount(sparePayload)
    addAmount(labourPayload)
  
    return TotalAmount
  }

  const rejectTextfield = [
    {
      label: 'Rejection Note*',
      name: "estimate_rejection_note",
      type: 'text',
      fullWidth: true,
      required: true, 
      errormessage: 'Please enter the reason for rejection', 
    },
  ]

  const handleFieldChange = (fieldName, value) => {
    console.log("ln 62", fieldName, value)
    setOpenReject((prevData) => ({ ...prevData, [fieldName]: value }));
  }
  const approveEstimate = async()=>{
    const obj={
      method:"POST",
      url:estimateApproval,
      payload:{'appointment_id':eyeIconValue?.appointment_id,'estimate_number':eyeIconValue?.estimate_number}
    }
    await fetchData(obj)
    setTimeout(()=>setPage('table'),2000)
  }

  const rejectEstimate = async()=>{
    setIsSubmitted(true); 
    let isRequired = requiredTextfield(rejectTextfield,openReject)  
    if(isRequired) {
      setTimeout(() => {
          setIsSubmitted(false)
      }, [2000]);
      return
    } 
    const obj={
      method:"POST",
      url:estimateRejection,
      payload:{'appointment_id':eyeIconValue?.appointment_id,'estimate_number':eyeIconValue?.estimate_number,'estimate_rejection_note':openReject?.estimate_rejection_note}
    }
    await fetchData(obj)
    setIsSubmitted(false)
    // setTimeout(()=>setOpenReject(({toggle:false})),2000)
    
    setTimeout(()=>setPage('table'),2000)
    setOpenReject({toggle:false})
  }

  useEffect(() => {
    // if (page === 'eye-icon') {
      getEstimateDetailsApi();
    // }
  }, [page]);
  
  const getEstimateDetailsApi = async()=>{
    
    const obj = {
        method:"GET",
        url:`${getEstimateDetails}?sp_id=${eyeIconValue?.sp_id}&estimate_number=${eyeIconValue?.estimate_number}`
    }
  
    const {data} = await fetchData(obj)
  
    let spareData = data?.data.spares
    let labourData = data?.data.labours
  
    spareData?.forEach((obj)=>{
        obj.amount = isNaN(parseFloat(obj.selling_price)) ? 0 : parseFloat(obj.tax/100) * parseFloat(obj.selling_price) + parseFloat(obj.selling_price)
        obj.tax_amount = !obj.tax ? 0 : obj.tax===0 ? 0 : parseFloat(obj.tax/100) * parseFloat(obj.selling_price)
        obj.backendDisabled = true
    })
  
    labourData?.forEach((obj)=>{
        obj.amount = isNaN(parseFloat(obj.selling_price)) ? 0 : parseFloat(obj.tax/100) * parseFloat(obj.selling_price) + parseFloat(obj.selling_price)
        obj.tax_amount = !obj.tax ? 0 : obj.tax===0 ? 0 : parseFloat(obj.tax/100) * parseFloat(obj.selling_price)
        obj.backendDisabled = true
    })
    setSparePayload(data?.data?.spares)
    setLabourSparePayload(data?.data?.labours)
  }
  if(page ==='eye-icon'){
    // getEstimateDetailsApi()
    return (
        <>
            <div>
                <Box className='flex jc-space-between mb-3'>
                    <Button className='small-button' onClick={() =>{ setPage('table')}} variant='outlined' color='options'>Back <ArrowBackIcon /></Button>
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
                  <Typography fontWeight={'bold'}>Service Provider Details</Typography>
                  <Box color={'#8F8F8E'} fontSize={'0.7rem'} className='flex jc-space-between'>
                    <Box>
                      <Box>Name</Box>
                      <Box >Email</Box>  
                      <Box >Mobile</Box>  
                      <Box >Address</Box>  
                    </Box>
                    <Box>
                      <Box>: {eyeIconValue?.sp_name}</Box>
                      <Box >: {eyeIconValue?.sp_email}</Box>  
                      <Box >: {eyeIconValue?.sp_contact}</Box>  
                      <Box >: {eyeIconValue?.sp_address}</Box>  
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

                <Box maxHeight={'400px'} overflow={'auto'} className='mb-3'>
                    <FullyEditableAndDeletableTable
                        title={'SPARES'} 
                        buttonName={'Add Spares'} 
                        data={sparePayload} 
                        column={CustomerSpareEstimateColum}
                        viewOnly 
                        // setPayload = {setSparePayload} 
                        // autoCompleteFieldName={'name'}
                        // getAllItemListForAutoFillDebounceOnInputChange={getAllSpareListForAutoFill}
                        // getApiUrlOnAutocompleteItemSelect={getSpecificSpareDetailsForEstimate}
                        // getApiUrlOnAutocompleteItemSelectParams={'spare_name'}
                        // setDisabledUpdate={setDisabledUpdate}
                    />
                </Box>
                <Box maxHeight={'400px'} overflow={'auto'} className='mb-3' >
                    <FullyEditableAndDeletableTable 
                        title={'LABOURS'} 
                        buttonName={'Add Labours'} 
                        data={labourPayload} 
                        column={CustomerLabourEstimateColumn} 
                        viewOnly
                        // setPayload = {setLabourSparePayload} 
                        // autoCompleteFieldName={'name'}
                        // getAllItemListForAutoFillDebounceOnInputChange={getAllLabourListForAutoFill}
                        // getApiUrlOnAutocompleteItemSelect={getSpecificLabourDetailsForEstimate}
                        // getApiUrlOnAutocompleteItemSelectParams={'labour_name'}
                        // setDisabledUpdate={setDisabledUpdate}
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
                    <Button onClick={()=>setOpenReject((prev)=>({...prev,toggle:true}))} className={'small-button mr-2'} color='options' variant='contained'>Reject</Button>
                    <Button onClick={approveEstimate}  className='small-button' color='options' variant='contained' >Approve</Button>
                </Box>
            </div>
            {snackbar}
            {loadingIndicator}
            {openReject.toggle && (
                              <Dialog open={true}>
                                <DialogTitle>Are you sure you want to Reject Estimate<UnderLine/></DialogTitle>
                                <DialogContent>
                                <CreateTextFields  fields={rejectTextfield} onChange={handleFieldChange}  formField={openReject} isSubmitted={isSubmitted} />
                                  {/* <TextField size='small' value={openReject.rejectionNote||''} onChange={(e)=>setOpenReject((prev)=>({...prev,rejectionNote:e.target.value}))}/> */}
                                </DialogContent>
                                <DialogActions><Button color='options' variant='outlined' onClick={()=>setOpenReject((prev)=>({...prev,toggle:false}))}>Cancel</Button><Button onClick={rejectEstimate} variant='contained' color='options'>Confirm</Button></DialogActions>
                              </Dialog>
            )}
        </>
    )
}





  return (
    <>
      <Box pb={2} sx={{backgroundColor:'rgb(244,248,249)'}} display={'flex'} justifyContent={'center'} >
        <Button sx={{minHeight:'52px', minWidth:"235px"}} variant={toggle==='appointment'?'contained':'outlined'} color='options' onClick={()=>setToggle('appointment')}>APPOINTMENT</Button>
        <Button sx={{minHeight:'52px', minWidth:"235px"}}  variant={toggle==='rejected'?'contained':'outlined'} color='options' onClick={()=>setToggle('rejected')}>REJECTED</Button>
      
      </Box>
      {toggle==='appointment'?
        // isMobile?
        //   <TableCustomerMobileDetails/> 
        // :
          
          <CustomerTable
            key={'appointment'}
            DialogButton={AddCustomerAppointmentDialog}
            columnss={AddCustomerAppointmentColumn(()=>setPage('eye-icon'),setEyeIconValue)} 
            URL={`http://localhost:3008/api/customer/getAllPendingApprovedAppointment`}
            dialogButtonName={'CREATE APPOINTMENT'}
            dialogTitle={'CREATE APPOINTMENT'}
            />
       :
      <CustomerTable
        key={'rejected'}
        columnss={AddCustomerAppointmentColumn()} 
        URL={`http://localhost:3008/api/customer/getAllRejectedCancelledAppointment`}
        dialogButtonName={'CREATE APPOINTMENT'}
        dialogTitle={'CREATE APPOINTMENT'}        />

        }

    </>
  )
}

export default CustomerAppointment