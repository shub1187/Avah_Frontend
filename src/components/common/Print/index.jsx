import { Box,Avatar, Button, IconButton, TextField, Typography } from '@mui/material';
import React, { useRef } from 'react'
import { ReactToPrint } from 'react-to-print'
import PrintIcon from '@mui/icons-material/Print';
import { labour_column } from './components/labour_column';
import { spare_column } from './components/spare_column';
import LabourEstimateTable from './components/labour_estimate_table';
import { mock } from './components/mock';
import AvahSideBarImage from 'assets/img/AvahSideBarImage.png'
import UnderLine from '../Underline';
const Print = ({ spareData, labourData, rowData }) => {
  const ref = useRef();
  // let labourData = mock?.data?.labours
  // let spareData = mock?.data?.spares

  const calculateTotalAmount = (sparePayload, labourPayload) => {

    let TotalAmount = 0

    const addAmount = (payload) => {
      payload?.forEach((obj) => {
        if (obj.amount) {
          TotalAmount += parseFloat(obj.amount)
        }
      })
    }
    addAmount(sparePayload)
    addAmount(labourPayload)

    return TotalAmount
  }
  return (
    <>
      <div className="hide-pdf-component">
        <div ref={ref}>
          <div id='pdf-print'>
          <Box className='flex jc-space-between'>
              <Box width={'50%'}><Avatar sx={{height:'50px',width:'150px'}}  src={AvahSideBarImage} /></Box>
              <Box width={'50%'} fontSize={25} color={'options'}>INVOICE<UnderLine/><Box fontSize={15} component={'span'}>{localStorage.getItem('business_name') ?? ''}</Box></Box>
            </Box>
            <Box className='flex mb-4'>
              <Box className='width-half'>
                <Typography mb={1} fontWeight={'bold'}>Vehicle Details<UnderLine /></Typography>
                <Box color={'#8F8F8E'} fontSize={'0.7rem'} className='flex'>
                  <Box className='mr-3'>
                    <Box>Vehicle Number</Box>
                    <Box >Model</Box>
                    <Box >Manufacturer</Box>
                    <Box >Vehicle Type</Box>
                    <Box>KM Driven</Box>
                  </Box>
                  <Box>
                    <Box>: {rowData?.vehicle_number}</Box>
                    <Box >: {rowData?.model}</Box>
                    <Box >: {rowData?.brand}</Box>
                    <Box >: {rowData?.fuel_type}</Box>
                    <Box>: {rowData?.kilometers_driven}</Box>
                  </Box>
                </Box>
              </Box>
              <Box className='width-half'>
                <Typography mb={1} fontWeight={'bold'}>Customer Details<UnderLine /></Typography>
                <Box color={'#8F8F8E'} fontSize={'0.7rem'} className='flex'>
                  <Box className='mr-3'>
                    <Box>Name</Box>
                    <Box >Pickup Address</Box>
                    <Box >Mobile</Box>
                    <Box >Email</Box>
                    <Box >Payment Status</Box>
                    <Box >Payment Method</Box>
                  </Box>
                  <Box>
                    <Box>: {rowData?.name}</Box>
                    <Box >: {rowData?.pickup_address}</Box>
                    <Box >: {rowData?.mobile_number}</Box>
                    <Box >: {rowData?.email}</Box>
                    <Box >: {rowData?.payment_status}</Box>
                    <Box >: {rowData?.payment_method}</Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className='flex mb-4'>
              <Box className='width-half'>
                <Typography mb={1} fontWeight={'bold'}>Appointment Details<UnderLine /></Typography>
                <Box color={'#8F8F8E'} fontSize={'0.7rem'} className='flex'>
                  <Box className='mr-3'>
                    <Box>Appointment Status</Box>
                    <Box >Appointment Time</Box>
                    <Box >Appointment Date</Box>
                  </Box>
                  <Box>
                    <Box>: {rowData?.appointment_status}</Box>
                    <Box >: {rowData?.appointment_time}</Box>
                    <Box >: {rowData?.appointment_date}</Box>
                  </Box>
                </Box>
              </Box>
              {rowData?.advisor_name && (
                <Box className='width-half'>
                  <Typography mb={1} fontWeight={'bold'}>Employees Details<UnderLine /></Typography>
                  <Box color={'#8F8F8E'} fontSize={'0.7rem'} className='flex'>
                    <Box className='mr-3'>
                      <Box>Advisor</Box>
                      <Box >Technicians</Box>
                    </Box>
                    <Box>
                      <Box>: {rowData?.advisor_name}</Box>
                      <Box >: {rowData?.technician_name?.map((name) => name + ", ")}</Box>
                    </Box>
                  </Box>
                </Box>
              )}
            </Box>
            <Box className='flex mb-3'>
              <Box className='width-half'>
                <Typography mb={1} fontWeight={'bold'}>Estimate/JobCard Details<UnderLine /></Typography>
                <Box color={'#8F8F8E'} fontSize={'0.7rem'} className='flex'>
                  <Box className='mr-3'>
                    <Box>Estimate Date</Box>
                    <Box >Estimate Created By</Box>
                    <Box >Jobcard Created By</Box>
                    <Box >Jobcard Opened On</Box>
                    {rowData?.estimate_rejection_note && <Box >Estimate Rejection Note</Box>}
                    {rowData?.cust_cancellation_note && <Box >Customer Cancellation Note</Box>}
                    {rowData?.sp_cancellation_note && <Box >Service Provider Cancellation Note</Box>}
                    {rowData?.sp_rejection_note && <Box >Service Provider Rejection Note</Box>}
                  </Box>
                  <Box>
                    <Box>: {rowData?.estimate_approval_or_rejection_date}</Box>
                    <Box >: {rowData?.estimate_created_by}</Box>
                    <Box >: {rowData?.jobcard_created_by}</Box>
                    <Box >: {rowData?.jobcard_opened_on}</Box>
                    {rowData?.estimate_rejection_note && <Box >: {rowData?.estimate_rejection_note}</Box>}
                    {rowData?.cust_cancellation_note && <Box >: {rowData?.cust_cancellation_note}</Box>}
                    {rowData?.sp_cancellation_note && <Box >: {rowData?.sp_cancellation_note}</Box>}
                    {rowData?.sp_rejection_note && <Box >: {rowData?.sp_rejection_note}</Box>}
                  </Box>
                </Box>
              </Box>
              <Box className='width-half'>
                <Typography mb={1} fontWeight={'bold'}>Invoice Details<UnderLine /></Typography>
                <Box color={'#8F8F8E'} fontSize={'0.7rem'} className='flex'>
                  <Box className='mr-3'>
                    <Box>Invoice Amount</Box>
                    <Box>Invoice Collected By</Box>
                    <Box>Invoice Created By</Box>
                    <Box >Job Completed On</Box>
                  </Box>
                  <Box>
                    <Box>: {rowData?.invoice_amount}</Box>
                    <Box>: {rowData?.invoice_collected_by}</Box>
                    <Box>: {rowData?.invoice_created_by}</Box>
                    <Box>: {rowData?.service_completed_on}</Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <LabourEstimateTable data={spareData} column={spare_column} title={'Spares'} />
            <LabourEstimateTable data={labourData} column={labour_column} title={'Labour'} />
            <Box className='flex jc-flex-end ai-center'>
              <Box className='flex jc-flex-end ai-center'>
                <Box className='bold' >Grand Total = </Box>
                <Box className='mr-1'> Total Amount of Spares + Total Amount of Labour</Box>
                <Box className='mr-4 textfield-grey-background'>
                  <TextField
                    size='small'
                    disabled
                    value={
                      calculateTotalAmount(spareData, labourData)
                    }
                  />
                </Box>
              </Box>
            </Box>
          </div>
        </div>
      </div>
      <ReactToPrint
        bodyClass="print-agreement"
        content={() => ref.current}
        trigger={() => (
          <IconButton color='options' >
            <Box className='flex ai-flex-start jc-center column'>
              <Typography fontSize={9}> Print</Typography>
              <PrintIcon style={{ cursor: 'pointer', marginRight: '5px' }} />
            </Box>
          </IconButton>
        )}
      />
    </>

  )
}

export default Print