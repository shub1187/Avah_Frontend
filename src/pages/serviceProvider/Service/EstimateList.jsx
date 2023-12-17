import React, { useEffect, useMemo, useState } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Autocomplete, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Select, TextField, Typography } from '@mui/material';
import { spLabourColumns } from 'components/spComponents/Table/Columns/Labours/SpLabourColumn';
import FullyEditableAndDeletableTable from 'components/common/Table/FullyEditableAndDeletableTable';
import CreateAutoCompleteTextfield from 'components/common/Textfield/AutoCompleteTextfield';
import {  useFetch, useFetchFunction } from 'hooks/useFetch';
import ServiceProvidertable from 'components/spComponents/Table/ServiceProviderTable';
import { SpEstimateListColumn } from 'components/spComponents/Table/Columns/Service/SpEstimateColumn';
import URL from 'url/apiURL';
import { SpCreateSpareEstimateColumn, SpEditSpareEstimateColumn, createEstimateColumn, createSpareEstimateColumn } from 'components/spComponents/Table/Columns/Service/SpCreate EstimateColumn';
import { SpCreateLabourEstimateColumn, SpEditLabourEstimateColumn } from 'components/spComponents/Table/Columns/Service/SpCreateLabourEstimateColumn';
import './EstimateList.scss'

const {getAllSpareListForAutoFill, getSpecificSpareDetailsForEstimate, getAllLabourListForAutoFill, getSpecificLabourDetailsForEstimate, addEstimate,getEstimatePendingVehcileList ,getSpecificVechicleDetailsToCreateEstimate, getAllCreatedEstimateList, getEstimateDetails} = URL.SERVICE_PROVIDER.SERVICE.ESTIMATE

const SpEstimateList = () => {
    const [page, setPage] = useState('table')
    const [sparePayload, setSparePayload] = useState([])
    const [labourPayload, setLabourSparePayload] = useState([])
    const {fetchData,snackbar,loadingIndicator} = useFetchFunction()
    const {data:PendingVehicleList} = useFetch(`${getEstimatePendingVehcileList}?sp_id=${localStorage.getItem('sp_id')}`)
    const [pendingVehicleApiData,setPendingVehicleApiData] = useState({})
    const [eyeIconValue,setEyeIconValue] = useState([])
    const [openDeleteEstimateConfirmation, setOpenDeleteEstimateConfirmation] = useState(false)
    const createEstimate = async()=>{
        const obj = {
            payload:{
                appointment_id:pendingVehicleApiData?.appointment_id,
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

    const updateEstimate = ()=>{

    }

    const deleteEstimate = ()=>{

    }

    useEffect(() => {
        if (page === 'eye-icon') {
          getEstimateDetailsApi();
        }
      }, [page]);

    const getEstimateDetailsApi = async()=>{
        
        const obj = {
            method:"GET",
            url:`${getEstimateDetails}?sp_id=${localStorage.getItem('sp_id')}&estimate_number=${eyeIconValue?.estimate_number}`
        }

        const {data} = await fetchData(obj)

        let spareData = data?.data.spares
        let labourData = data?.data.labours

        spareData.forEach((obj)=>{
            obj.amount = isNaN(parseFloat(obj.selling_price)) ? 0 : parseFloat(obj.tax/100) * parseFloat(obj.selling_price) + parseFloat(obj.selling_price)
            obj.tax_amount = !obj.tax ? 0 : obj.tax===0 ? 0 : parseFloat(obj.tax/100) * parseFloat(obj.selling_price)
        })

        labourData.forEach((obj)=>{
            obj.amount = isNaN(parseFloat(obj.selling_price)) ? 0 : parseFloat(obj.tax/100) * parseFloat(obj.selling_price) + parseFloat(obj.selling_price)
            obj.tax_amount = !obj.tax ? 0 : obj.tax===0 ? 0 : parseFloat(obj.tax/100) * parseFloat(obj.selling_price)
        })
        setSparePayload(data?.data?.spares)
        setLabourSparePayload(data?.data?.labours)
    }
    const getPendingVehicleDetails = async(SelectValue)=>{
        const obj = {
            method:"GET",
            url:`${getSpecificVechicleDetailsToCreateEstimate}?sp_id=${localStorage.getItem('sp_id')}&vehicle_number=${SelectValue?.value}`
        }
        const newData = await fetchData(obj)
        setPendingVehicleApiData(newData?.data?.data)
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
                    <Box className='flex jc-space-between mb-3'>
                        <Autocomplete
                          options={PendingVehicleList?.data || []}
                          renderInput={(params) => <TextField {...params} label={'Vehicle No'}  size='small'/>}
                          onChange={(e,value)=>getPendingVehicleDetails(value)}
                          sx={{width:250}}
                           />
                        <Button className='small-button' onClick={() => setPage('table')} variant='outlined' color='options'>Back <ArrowBackIcon /></Button>
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
                          <Box>: {pendingVehicleApiData?.vehicle_number}</Box>
                          <Box >: {pendingVehicleApiData?.model}</Box>  
                          <Box >: {pendingVehicleApiData?.brand}</Box>  
                          <Box >: {pendingVehicleApiData?.fuel_type}</Box>  
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
                          <Box>: {pendingVehicleApiData?.name}</Box>
                          <Box >: {pendingVehicleApiData?.pickup_address}</Box>  
                          <Box >: {pendingVehicleApiData?.mobile_number}</Box>  
                          <Box >: {pendingVehicleApiData?.email}</Box>  
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
                            setPayload = {setSparePayload} 
                            autoCompleteFieldName={'spare_name'}
                            getAllItemListForAutoFillDebounceOnInputChange={getAllSpareListForAutoFill}
                            getApiUrlOnAutocompleteItemSelect={getSpecificSpareDetailsForEstimate}
                            getApiUrlOnAutocompleteItemSelectParams={'spare_name'}
                        />
                    </Box>
                    <Box maxHeight={'400px'} overflow={'auto'} className='mb-3' >
                        <FullyEditableAndDeletableTable 
                            title={'LABOURS'} 
                            buttonName={'Add Labours'} 
                            data={labourPayload} 
                            column={SpCreateLabourEstimateColumn} 
                            setPayload = {setLabourSparePayload} 
                            autoCompleteFieldName={'labour_name'}
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
                                value={
                                    calculateTotalAmount(sparePayload,labourPayload)
                                }
                                />
                            </Box>
                        </Box>
                        <Button className='small-button' color='options' variant='contained' onClick={createEstimate}>SUBMIT</Button>
                    </Box>
                </div>
                {snackbar}
                {loadingIndicator}
            </>
        )
    }

    if(page ==='eye-icon'){
        // getEstimateDetailsApi()
        return (
            <>
                <div>
                    <Box className='flex jc-space-between mb-3'>
                        <Button className='small-button' onClick={() => setPage('table')} variant='outlined' color='options'>Back <ArrowBackIcon /></Button>
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
                        </Box>
                        <Box>
                          <Box>: {eyeIconValue?.appointment_status}</Box>
                          <Box >: {eyeIconValue?.appointment_time}</Box>  
                          <Box >: {eyeIconValue?.appointment_date}</Box>  
                        </Box>
                      </Box>
                    </Box>
                    </Box>

                    <Box maxHeight={'400px'} overflow={'auto'} className='mb-3'>
                        <FullyEditableAndDeletableTable
                            title={'SPARES'} 
                            buttonName={'Add Spares'} 
                            data={sparePayload} 
                            column={SpEditSpareEstimateColumn} 
                            setPayload = {setSparePayload} 
                            autoCompleteFieldName={'spare_name'}
                            getAllItemListForAutoFillDebounceOnInputChange={getAllSpareListForAutoFill}
                            getApiUrlOnAutocompleteItemSelect={getSpecificSpareDetailsForEstimate}
                            getApiUrlOnAutocompleteItemSelectParams={'spare_name'}
                        />
                    </Box>
                    <Box maxHeight={'400px'} overflow={'auto'} className='mb-3' >
                        <FullyEditableAndDeletableTable 
                            title={'LABOURS'} 
                            buttonName={'Add Labours'} 
                            data={labourPayload} 
                            column={SpEditLabourEstimateColumn} 
                            setPayload = {setLabourSparePayload} 
                            autoCompleteFieldName={'labour_name'}
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
                                value={
                                    calculateTotalAmount(sparePayload,labourPayload)
                                }
                                />
                            </Box>
                        </Box>
                        <Button className='small-button' color='options' variant='contained' onClick={()=>setOpenDeleteEstimateConfirmation(true)}>DELETE</Button>
                        <Button disabled className='small-button' color='options' variant='contained' onClick={updateEstimate}>UPDATE</Button>
                    </Box>
                </div>
                {openDeleteEstimateConfirmation && (
                    <Dialog open={true}>
                        <DialogTitle>Are you sure you want to Delete Estimate</DialogTitle>
                        <DialogActions><Button color='options' variant='outlined' onClick={()=>setOpenDeleteEstimateConfirmation(false)}>Cancel</Button><Button onClick={deleteEstimate} variant='contained' color='options'>Delete</Button></DialogActions>
                    </Dialog>
                )}
                {snackbar}
                {loadingIndicator}
            </>
        )
    }
    return (
        <div>
            <ServiceProvidertable
                URL={getAllCreatedEstimateList}
                columnss={SpEstimateListColumn(()=>setPage('eye-icon'),setEyeIconValue)}
                clickButton= {()=>setPage('estimate')}
                buttonName={'CREATE ESTIMATE'}
            />
        </div>
    )
}

export default SpEstimateList