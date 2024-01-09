import  { useEffect, useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
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

const {getEstimateDetails} = URL.CUSTOMER.APPOINTMENT
const CustomerAppointment = () => {
  
  const [toggle,setToggle] = useState('appointment')
  const {isMobile} = useMobileResponsive()
  const [page, setPage] = useState('table')
  const [eyeIconValue,setEyeIconValue] = useState([])
  const {fetchData,snackbar,loadingIndicator} = useFetchFunction()
  const [sparePayload, setSparePayload] = useState([])
  const [labourPayload, setLabourSparePayload] = useState([])


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
                  <Typography fontWeight={'bold'}>VEHICLE DETAILS</Typography>
                  <Box color={'#8F8F8E'} fontSize={'0.7rem'} className='flex jc-space-between'>
                    <Box>
                      <Box>VEHICLE NUMBER</Box>
                      <Box >MODEL</Box>  
                      <Box >MANUFACTURER</Box>  
                      <Box >VEHICLE TYPE</Box>  
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
                  <Typography fontWeight={'bold'}>CUSTOMER DETAILS</Typography>
                  <Box color={'#8F8F8E'} fontSize={'0.7rem'} className='flex jc-space-between'>
                    <Box>
                      <Box>NAME</Box>
                      <Box >PICKUP ADDRESS</Box>  
                      <Box >MOBILE</Box>  
                      <Box >EMAIL</Box>  
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

                <Box maxHeight={'400px'} overflow={'auto'} className='mb-3'>
                    <FullyEditableAndDeletableTable
                        title={'SPARES'} 
                        buttonName={'Add Spares'} 
                        data={sparePayload} 
                        column={SpCreateSpareEstimateColumn}
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
                        column={SpCreateLabourEstimateColumn} 
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
                    {/* <Button className={'small-button mr-2'} color='options' variant='contained' onClick={()=>setOpenDeleteEstimateConfirmation(true)}>DELETE</Button>
                    <Button disabled={disabledUpdate} className='small-button' color='options' variant='contained' onClick={updateEstimate}>UPDATE</Button> */}
                </Box>
            </div>
            {snackbar}
            {loadingIndicator}
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
        isMobile?
          <TableCustomerMobileDetails/> 
        :
          
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