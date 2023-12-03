import ServiceProvidertable from 'components/spComponents/Table/ServiceProviderTable'
import React, { useEffect, useState } from 'react'
import CreateAppointmentDialog from 'components/spComponents/Dialog/Service/CreateAppointmentDialog'
import { spCreateAppointmentColumn } from 'components/spComponents/Table/Columns/Service/SpCreateAppointmentColumn'
import { Box, Button, Typography } from '@mui/material'
import CreateCustomerDialog from 'components/spComponents/Dialog/Users/createCustomerDialog'
import { createCustomerColumn } from 'components/spComponents/Table/Columns/Users/CreateCustomerColumn'
import CustomerTable from 'components/CustomerComponents/Table/CustomerTable'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CreateAutoCompleteTextfield from 'components/common/Textfield/AutoCompleteTextfield'
import FullyEditableAndDeletableTable from 'components/common/Table/FullyEditableAndDeletableTable'
import { spLabourColumns } from 'components/spComponents/Table/Columns/Labours/SpLabourColumn'
const AppointmentList = () => {
  
  const [tableCalled,setTableCalled] = useState(false)
  const [toggle,setToggle] = useState('appointment')
  const [sparePayload, setSparePayload] = useState([])
  const [labourPayload, setLabourSparePayload] = useState([])
  const [page,setPage] = useState('table')
  const [eyeIconValue,setEyeIconValue] = useState([])

  console.log(eyeIconValue)
  const handleSubmit = ()=>{
    console.log(sparePayload,labourPayload)
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
                          <Box >ADDRESS</Box>  
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
                    <FullyEditableAndDeletableTable title={'SPARES'} buttonName={'Spares'} data={sparePayload} column={spLabourColumns} setPayload={setSparePayload}/>
                </Box>
                <Box maxHeight={'400px'} overflow={'auto'} className='mb-3' >
                    <FullyEditableAndDeletableTable title={'LABOURS'} buttonName={'Labours'} data={labourPayload} column={spLabourColumns} setPayload={setLabourSparePayload}/>
                </Box>
                <Box className='flex jc-flex-end'>
                    <Button className='small-button' color='options' variant='contained' onClick={handleSubmit}>SUBMIT</Button>
                </Box>
            </div>
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
          <ServiceProvidertable key={'appointment'} DialogButton={CreateAppointmentDialog} columnss={spCreateAppointmentColumn(()=>setPage('estimate'),setEyeIconValue)} URL={`http://localhost:3008/api/serviceprovider/getAllPendingAppointment`}/>
       :
       <ServiceProvidertable key={'rejected'} columnss={spCreateAppointmentColumn()} URL={`http://localhost:3008/api/serviceprovider/getAllRejectedAndCancelledAppointment`}/>
        }

    </>
  )
}

export default AppointmentList