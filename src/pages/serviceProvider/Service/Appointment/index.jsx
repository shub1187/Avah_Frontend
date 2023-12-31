import ServiceProvidertable from 'components/spComponents/Table/ServiceProviderTable'
import React, { useEffect, useState } from 'react'
import CreateAppointmentDialog from 'pages/serviceProvider/Service/Appointment/Components/SpCreateAppointmentDialog'
import { spCreateAppointmentColumn } from 'pages/serviceProvider/Service/Appointment/Components/SpCreateAppointmentColumn'
import { Box, Button, TextField, Typography } from '@mui/material'
import CreateCustomerDialog from 'pages/serviceProvider/Users/Customers/Components/createCustomerDialog'
import { createCustomerColumn } from 'pages/serviceProvider/Users/Customers/Components/CreateCustomerColumn'
import CustomerTable from 'components/common/Table/CustomerTable'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CreateAutoCompleteTextfield from 'components/common/Textfield/AutoCompleteTextfield'
import FullyEditableAndDeletableTable from 'components/common/Table/FullyEditableAndDeletableTable'
import { spLabourColumns } from 'pages/serviceProvider/Labour/Components/SpLabourColumn'
import URL from 'url/apiURL'
import { useFetch, useFetchFunction } from 'hooks/useFetch'
import { SpCreateSpareEstimateColumn } from 'pages/serviceProvider/Service/Estimate/Components/SpareEstimateColumn'
import { SpCreateLabourEstimateColumn } from 'pages/serviceProvider/Service/Estimate/Components/LabourEstimateColumn'
import './index.scss'
import { SpCreateSpareAppointmentColumn } from './Components/SparesAppointmentColumn'
import { SpCreateLabourAppointmentColumn } from './Components/LabourAppointmentColumn'
const {addEstimate, getAllLabourListForAutoFill, getAllSpareListForAutoFill, getSpecificLabourDetailsForEstimate, getSpecificSpareDetailsForEstimate} = URL.SERVICE_PROVIDER.SERVICE.APPOINTMENT

const AppointmentList = () => {
  
  const [toggle,setToggle] = useState('appointment')
  const [sparePayload, setSparePayload] = useState([])
  const [labourPayload, setLabourSparePayload] = useState([])
  const [page,setPage] = useState('table')
  const [eyeIconValue,setEyeIconValue] = useState([])
  const {fetchData,snackbar,loadingIndicator} = useFetchFunction()


  const handleSubmit = async()=>{
    const obj = {
      payload:{
          appointment_id:eyeIconValue?.appointment_id,
          sp_id:localStorage.getItem('sp_id'),
          sparePayload,
          labourPayload
      },
      method:"POST",
      url:addEstimate
    }
    if((sparePayload && sparePayload.length) || (labourPayload && labourPayload.length) ){
        await fetchData(obj)
    }  
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

  if (page === 'estimate') {
    return (
        <>
            <div>
                <Box className='flex jc-flex-end mb-3'>
                    {/* <CreateAutoCompleteTextfield options={[]} whiteColor label={'Vehicle No'}/> */}
                    
                </Box>
                <Box className='flex mb-3 jc-space-between'>
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
                    <Box>
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
                          <Box >: {eyeIconValue?.address}</Box>  
                          <Box >: {eyeIconValue?.mobile_number}</Box>  
                          <Box >: {eyeIconValue?.email}</Box>  
                        </Box>
                      </Box>
                    </Box>
                    </Box>
                    <Box><Button className='small-button' onClick={() => setPage('table')} variant='outlined' color='options'>Back <ArrowBackIcon /></Button></Box>

                </Box>
                <Box maxHeight={'400px'} overflow={'auto'} className='mb-3'>
                    <FullyEditableAndDeletableTable 
                      title={'SPARES'} 
                      buttonName={'Spares'} 
                      data={sparePayload} 
                      column={SpCreateSpareAppointmentColumn} 
                      setPayload={setSparePayload} 
                      autoCompleteFieldName={'name'}
                      getAllItemListForAutoFillDebounceOnInputChange={getAllSpareListForAutoFill}
                      getApiUrlOnAutocompleteItemSelect={getSpecificSpareDetailsForEstimate}
                      getApiUrlOnAutocompleteItemSelectParams={'spare_name'}
                      />
                </Box>
                <Box maxHeight={'400px'} overflow={'auto'} className='mb-3' >
                    <FullyEditableAndDeletableTable 
                      title={'LABOURS'} 
                      buttonName={'Labours'} 
                      data={labourPayload} 
                      column={SpCreateLabourAppointmentColumn} 
                      setPayload={setLabourSparePayload} 
                      autoCompleteFieldName={'name'}
                      getAllItemListForAutoFillDebounceOnInputChange={getAllLabourListForAutoFill}
                      getApiUrlOnAutocompleteItemSelect={getSpecificLabourDetailsForEstimate}
                      getApiUrlOnAutocompleteItemSelectParams={'labour_name'}
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
                                value={calculateTotalAmount(sparePayload,labourPayload)}
                                />
                            </Box>
                        </Box>
                        <Button className='small-button' color='options' variant='contained' onClick={handleSubmit}>SUBMIT</Button>
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
          <ServiceProvidertable
            key={'appointment'}
            DialogButton={CreateAppointmentDialog} 
            columnss={spCreateAppointmentColumn(()=>setPage('estimate'),setEyeIconValue)} 
            URL={`http://localhost:3008/api/serviceprovider/getAllPendingAppointment`}
            dialogButtonName={'CREATE APPOINTMENT'}
            dialogTitle={'CREATE APPOINTMENT'}
          />
       :
       <ServiceProvidertable key={'rejected'} columnss={spCreateAppointmentColumn()} URL={`http://localhost:3008/api/serviceprovider/getAllRejectedAndCancelledAppointment`}/>
        }

    </>
  )
}

export default AppointmentList