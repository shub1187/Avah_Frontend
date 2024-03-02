// import { useCustomerFetchFunction, useFetchFunction } from 'hooks/useFetch'
// import React, { useEffect, useState } from 'react'
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { Grid, InputAdornment, TextField } from '@mui/material';
// import ActionDialog from '../Dialog/ActionDialog';
// import MoreActionDialog from '../Dialog/MoreActionDialog';
// import UnderLine from '../Underline';
// import SearchIcon from '@mui/icons-material/Search';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import FullyEditableAndDeletableTable from 'components/common/Table/FullyEditableAndDeletableTable'
// import Print from '../Print';
// import PDF from '../PDFDownload';
// import CloseIcon from '@mui/icons-material/Close';

// const TableCustomerMobileDetails = ({URL}) => {
//     const mock = {
//         "results": [
//           {
//             "appointment_id": 10,
//             "name": "shadab shaikh",
//             "vehicle_number": "GJ85UU9988",
//             "vehicle_type": "Commercial",
//             "brand": "Maruti Suzuki",
//             // "model": "Swift",
//             // "customization": "Showroom Fitted",
//             // "fuel_type": "Electric",
//             // "email": "shadab@gmail.com",
//             // "mobile_number": "000025418",
//             // "pickup_drop": "Self Drive",
//             // "pickup_address": null,
//             // "appointment_date": "2023-10-23T18:30:00.000Z",
//             // "appointment_time": "11am",
//             // "appointment_status": "approved",
//             // "estimate_status": "pending"
//           },
//           {
//             "appointment_id": 3,
//             "name": "Sakshi Patil",
//             "vehicle_number": "MH43AB3133",
//             "vehicle_type": "personal",
//             "brand": "Maruti Suzuki",
//             "model": "Swift",
//             "customization": "Showroom Fitted",
//             "fuel_type": "Diesel",
//             "email": "sakshi@gmailcom",
//             "mobile_number": "7755663322",
//             "pickup_drop": "Company Executive",
//             "pickup_address": "Flat No.-02 Sawan Mansion Plot no-27 Kopar Khairane Navi Mumbai",
//             "appointment_date": "2023-08-19T18:30:00.000Z",
//             "appointment_time": "11am",
//             "appointment_status": "pending",
//             "estimate_status": "pending"
//           },
//           // Add more objects here to reach a total of 10
//           {
//             "appointment_id": 4,
//             "name": "John Doe",
//             "vehicle_number": "XYZ123",
//             "vehicle_type": "Personal",
//             "brand": "Ford",
//             "model": "Focus",
//             "customization": "Aftermarket",
//             "fuel_type": "Gasoline",
//             "email": "john.doe@example.com",
//             "mobile_number": "1234567890",
//             "pickup_drop": "Self Drive",
//             "pickup_address": "123 Main St, City",
//             "appointment_date": "2023-10-25T14:00:00.000Z",
//             "appointment_time": "2pm",
//             "appointment_status": "approved",
//             "estimate_status": "completed"
//           },
//           {
//             "appointment_id": 5,
//             "name": "Alice Johnson",
//             "vehicle_number": "AB567CD",
//             "vehicle_type": "Commercial",
//             "brand": "Toyota",
//             "model": "Camry",
//             "customization": "Showroom Fitted",
//             "fuel_type": "Hybrid",
//             "email": "alice.johnson@example.com",
//             "mobile_number": "9876543210",
//             "pickup_drop": "Company Executive",
//             "pickup_address": "456 Elm St, Town",
//             "appointment_date": "2023-11-01T10:30:00.000Z",
//             "appointment_time": "10:30am",
//             "appointment_status": "pending",
//             "estimate_status": "pending"
//           },
//           {
//             "appointment_id": 6,
//             "name": "David Smith",
//             "vehicle_number": "PQR789",
//             "vehicle_type": "Personal",
//             "brand": "Honda",
//             "model": "Civic",
//             "customization": "Aftermarket",
//             "fuel_type": "Gasoline",
//             "email": "david.smith@example.com",
//             "mobile_number": "5551234567",
//             "pickup_drop": "Self Drive",
//             "pickup_address": "789 Oak St, Village",
//             "appointment_date": "2023-09-15T16:00:00.000Z",
//             "appointment_time": "4pm",
//             "appointment_status": "approved",
//             "estimate_status": "completed"
//           },
//           {
//             "appointment_id": 7,
//             "name": "Emily Wilson",
//             "vehicle_number": "LMN456",
//             "vehicle_type": "Commercial",
//             "brand": "Chevrolet",
//             "model": "Malibu",
//             "customization": "Showroom Fitted",
//             "fuel_type": "Gasoline",
//             "email": "emily.wilson@example.com",
//             "mobile_number": "7778889999",
//             "pickup_drop": "Company Executive",
//             "pickup_address": "111 Pine St, Suburb",
//             "appointment_date": "2023-10-29T13:15:00.000Z",
//             "appointment_time": "1:15pm",
//             "appointment_status": "approved",
//             "estimate_status": "completed"
//           },
//           {
//             "appointment_id": 8,
//             "name": "Michael Brown",
//             "vehicle_number": "JKL012",
//             "vehicle_type": "Personal",
//             "brand": "Nissan",
//             "model": "Altima",
//             "customization": "Aftermarket",
//             "fuel_type": "Gasoline",
//             "email": "michael.brown@example.com",
//             "mobile_number": "3334445555",
//             "pickup_drop": "Self Drive",
//             "pickup_address": "222 Maple St, County",
//             "appointment_date": "2023-11-10T12:45:00.000Z",
//             "appointment_time": "12:45pm",
//             "appointment_status": "pending",
//             "estimate_status": "pending"
//           },
//           {
//             "appointment_id": 9,
//             "name": "Olivia Davis",
//             "vehicle_number": "UVW345",
//             "vehicle_type": "Commercial",
//             "brand": "Subaru",
//             "model": "Outback",
//             "customization": "Showroom Fitted",
//             "fuel_type": "Hybrid",
//             "email": "olivia.davis@example.com",
//             "mobile_number": "8889990000",
//             "pickup_drop": "Company Executive",
//             "pickup_address": "333 Cedar St, Rural",
//             "appointment_date": "2023-09-05T15:30:00.000Z",
//             "appointment_time": "3:30pm",
//             "appointment_status": "pending",
//             "estimate_status": "pending"
//           },
//         ],
//       };
//     const {fetchCustomerData} = useCustomerFetchFunction()
//     const [data,setData]= useState([])
//     const [searchTerm, setSearchTerm] = useState('');
//     const [page, setPage] = useState('table')

//     useEffect(()=>{
//         const {data} =fetchCustomerData({url:URL,method:'GET'})
//         setData(data)
//     }
//     ,[])

//     if (page === 'eye-icon') {
//       // getEstimateDetailsApi()
//       return (
//           <>
//               <div>
//                   <Box className='flex jc-space-between mb-3'>
//                       <Button className='small-button' onClick={() => setPage('table')} variant='outlined' color='options'>Back <ArrowBackIcon /></Button>
//                   </Box>
//                   <Box className='flex mb-4'>
//                       <Box className='width-half'>
//                           <Typography mb={1} fontWeight={'bold'}>Vehicle Details<UnderLine/></Typography>
//                           <Box color={'#8F8F8E'} fontSize={'0.7rem'} className='flex'>
//                               <Box className='mr-3'>
//                                   <Box>Vehicle Number</Box>
//                                   <Box >Model</Box>
//                                   <Box >Manufacturer</Box>
//                                   <Box >Vehicle Type</Box>
//                                   <Box>KM Driven</Box>
//                               </Box>
//                               <Box>
//                                   <Box>: {eyeIconValue?.vehicle_number}</Box>
//                                   <Box >: {eyeIconValue?.model}</Box>
//                                   <Box >: {eyeIconValue?.brand}</Box>
//                                   <Box >: {eyeIconValue?.fuel_type}</Box>
//                                   <Box>: {eyeIconValue?.kilometers_driven}</Box>
//                               </Box>
//                           </Box>
//                       </Box>
//                       <Box className='width-half'>
//                           <Typography mb={1} fontWeight={'bold'}>Customer Details<UnderLine/></Typography>
//                           <Box color={'#8F8F8E'} fontSize={'0.7rem'} className='flex'>
//                               <Box className='mr-3'>
//                                   <Box>Name</Box>
//                                   <Box >Pickup Address</Box>
//                                   <Box >Mobile</Box>
//                                   <Box >Email</Box>
//                                   <Box >Payment Status</Box>
//                                   <Box >Payment Method</Box>
//                               </Box>
//                               <Box>
//                                   <Box>: {eyeIconValue?.name}</Box>
//                                   <Box >: {eyeIconValue?.pickup_address}</Box>
//                                   <Box >: {eyeIconValue?.mobile_number}</Box>
//                                   <Box >: {eyeIconValue?.email}</Box>
//                                   <Box >: {eyeIconValue?.payment_status}</Box>
//                                   <Box >: {eyeIconValue?.payment_method}</Box>
//                               </Box>
//                           </Box>
//                       </Box>
//                   </Box>
//                   <Box className='flex mb-4'>
//                       <Box className='width-half'>
//                           <Typography mb={1} fontWeight={'bold'}>Appointment Details<UnderLine/></Typography>
//                           <Box color={'#8F8F8E'} fontSize={'0.7rem'} className='flex'>
//                               <Box className='mr-3'>
//                                   <Box>Appointment Status</Box>
//                                   <Box >Appointment Time</Box>
//                                   <Box >Appointment Date</Box>
//                               </Box>
//                               <Box>
//                                   <Box>: {eyeIconValue?.appointment_status}</Box>
//                                   <Box >: {eyeIconValue?.appointment_time}</Box>
//                                   <Box >: {eyeIconValue?.appointment_date}</Box>
//                               </Box>
//                           </Box>
//                       </Box>
//                       {eyeIconValue?.advisor_name && (
//                           <Box className='width-half'>
//                               <Typography mb={1} fontWeight={'bold'}>Employees Details<UnderLine/></Typography>
//                               <Box color={'#8F8F8E'} fontSize={'0.7rem'} className='flex'>
//                                   <Box className='mr-3'>
//                                       <Box>Advisor</Box>
//                                       <Box >Technicians</Box>
//                                   </Box>
//                                   <Box>
//                                       <Box>: {eyeIconValue?.advisor_name}</Box>
//                                       <Box >: {eyeIconValue?.technician_name?.map((name) => name + ", ")}</Box>
//                                   </Box>
//                               </Box>
//                           </Box>
//                       )}
//                   </Box>
//                   <Box className='flex mb-3'>
//                       <Box className='width-half'>
//                           <Typography mb={1} fontWeight={'bold'}>Estimate/JobCard Details<UnderLine/></Typography>
//                           <Box color={'#8F8F8E'} fontSize={'0.7rem'} className='flex'>
//                               <Box className='mr-3'>
//                                   <Box>Estimate Date</Box>
//                                   <Box >Estimate Created By</Box>
//                                   <Box >Jobcard Created By</Box>
//                                   <Box >Jobcard Opened On</Box>
//                                   {eyeIconValue?.estimate_rejection_note && <Box >Estimate Rejection Note</Box>}
//                                   {eyeIconValue?.cust_cancellation_note && <Box >Customer Cancellation Note</Box>}
//                                   {eyeIconValue?.sp_cancellation_note && <Box >Service Provider Cancellation Note</Box>}
//                                   {eyeIconValue?.sp_rejection_note && <Box >Service Provider Rejection Note</Box>}
//                               </Box>
//                               <Box>
//                                   <Box>: {eyeIconValue?.estimate_approval_or_rejection_date}</Box>
//                                   <Box >: {eyeIconValue?.estimate_created_by}</Box>
//                                   <Box >: {eyeIconValue?.jobcard_created_by}</Box>
//                                   <Box >: {eyeIconValue?.jobcard_opened_on}</Box>
//                                   {eyeIconValue?.estimate_rejection_note && <Box >: {eyeIconValue?.estimate_rejection_note}</Box>}
//                                   {eyeIconValue?.cust_cancellation_note && <Box >: {eyeIconValue?.cust_cancellation_note}</Box>}
//                                   {eyeIconValue?.sp_cancellation_note && <Box >: {eyeIconValue?.sp_cancellation_note}</Box>}
//                                   {eyeIconValue?.sp_rejection_note && <Box >: {eyeIconValue?.sp_rejection_note}</Box>}
//                               </Box>
//                           </Box>
//                       </Box>
//                       <Box className='width-half'>
//                           <Typography mb={1} fontWeight={'bold'}>Invoice Details<UnderLine/></Typography>
//                           <Box color={'#8F8F8E'} fontSize={'0.7rem'} className='flex'>
//                               <Box className='mr-3'>
//                                   <Box>Invoice Amount</Box>
//                                   <Box>Invoice Collected By</Box>
//                                   <Box>Invoice Created By</Box>
//                                   <Box >Job Completed On</Box>
//                               </Box>
//                               <Box>
//                                   <Box>: {eyeIconValue?.invoice_amount}</Box>
//                                   <Box>: {eyeIconValue?.invoice_collected_by}</Box>
//                                   <Box>: {eyeIconValue?.invoice_created_by}</Box>
//                                   <Box>: {eyeIconValue?.service_completed_on}</Box>
//                               </Box>
//                           </Box>
//                       </Box>
//                   </Box>
//                   <Box maxHeight={'400px'} overflow={'auto'} className='mb-3'>
//                       <FullyEditableAndDeletableTable
//                           title={'SPARES'}
//                           buttonName={'Add Spares'}
//                           data={sparePayload}
//                           column={paidInvoiceSparesColumn}
//                           setPayload={setSparePayload}
//                           autoCompleteFieldName={'name'}
//                           getApiUrlOnAutocompleteItemSelectParams={'spare_name'}
//                           viewOnly
//                       />
//                   </Box>
//                   <Box maxHeight={'400px'} overflow={'auto'} className='mb-3' >
//                       <FullyEditableAndDeletableTable
//                           title={'LABOURS'}
//                           buttonName={'Add Labours'}
//                           data={labourPayload}
//                           column={paidInvoiceLabourColumn}
//                           setPayload={setLabourSparePayload}
//                           autoCompleteFieldName={'name'}
//                           getApiUrlOnAutocompleteItemSelectParams={'labour_name'}
//                           viewOnly
//                       />
//                   </Box>
//                   <Box className='flex jc-flex-end ai-center'>
//                       <Box className='flex jc-flex-end ai-center'>
//                           <Box className='bold' >Grand Total = </Box>
//                           <Box className='mr-1'> Total Amount of Spares + Total Amount of Labour</Box>
//                           <Box className='mr-4 textfield-grey-background'>
//                               <TextField
//                                   size='small'
//                                   disabled
//                                   value={
//                                       calculateTotalAmount(sparePayload, labourPayload)
//                                   }
//                               />
//                           </Box>
//                       </Box>
//                       <IconButton color='options' onClick={() => setPage('table')}>
//                           <Box className='flex ai-flex-start jc-center column'>
//                               <Typography fontSize={9}> Back</Typography>
//                               <CloseIcon style={{ cursor: 'pointer', marginRight: '5px' }} />
//                           </Box>
//                       </IconButton>
//                       <PDF rowData={eyeIconValue} spareData={sparePayload} labourData={labourPayload}/>
//                       <Print rowData={eyeIconValue} spareData={sparePayload} labourData={labourPayload}/>
//                   </Box>
//                   <Box>

//                   </Box>
//               </div>
//               {snackbar}
//               {loadingIndicator}
//           </>
//       )
//   }
//   return (
//     <>
//         <TextField
//         color='options'
//         label="Search"
//         variant="outlined"
//         fullWidth
//         size='small'
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         sx={{ mb: 1,mt:1,fontSize:11 }}
//         InputProps={{startAdornment:(<InputAdornment position='start'><SearchIcon/></InputAdornment>)}}
//         />
//         <Box className='flex column'>
//         {mock.results
//                 .filter((object) => {
//                     // Filter based on search term
//                     return Object.values(object).some((value) =>
//                       value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
//                     );
//                   })
        
//                 .map((filteredObject)=>(
//                 <Card sx={{my:2,maxHeight:350}}>
//                 <CardContent >
//                     <Box sx={{borderBottom:'1px solid #ad4970',borderRadius:1,py:1,mb:2}} fontWeight={'bold'} fontSize={16}>{filteredObject.name.replace(/\b\w/g,(letter)=>letter?.toUpperCase())}<UnderLine/></Box>
//                     <Box sx={{overflow:'scroll',maxHeight:250}}>
//                     {Object.keys(filteredObject).map((key)=>(
//                         <Grid xs={12} container display={'flex'} justifyContent={'space-between'} >
//                             <Grid item xs={6}><Typography component={'span'} fontWeight={'bold'} fontSize={13}>{key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} : </Typography></Grid>
//                             <Grid item xs={6}><Typography  component={'span'} fontSize={11}>{filteredObject[key]}</Typography></Grid>
//                         </Grid>
//                     ))}
//                     </Box>
//                 </CardContent>
//                 <CardActions>
//                 <ActionDialog viewPaidInvoice rowData={filteredObject} setPage={()=>setPage('eye-icon')}/>
//                 <ActionDialog downloadPdf/>
//                 <ActionDialog print/>
//                 </CardActions>
//                 </Card>  )
//             )
//         }
//         </Box>
//     </>
//     )
// }
// export default TableCustomerMobileDetails
export {}