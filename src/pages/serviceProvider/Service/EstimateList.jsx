import React, { useEffect, useMemo, useState } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Autocomplete, Box, Button, Select, TextField, Typography } from '@mui/material';
import { spLabourColumns } from 'components/spComponents/Table/Columns/Labours/SpLabourColumn';
import FullyEditableAndDeletableTable from 'components/common/Table/FullyEditableAndDeletableTable';
import CreateAutoCompleteTextfield from 'components/common/Textfield/AutoCompleteTextfield';
import {  useFetch, useFetchFunction } from 'hooks/useFetch';
import ServiceProvidertable from 'components/spComponents/Table/ServiceProviderTable';
import { SpEstimateListColumn } from 'components/spComponents/Table/Columns/Service/SpEstimateColumn';
import URL from 'url/apiURL';
import { SpCreateSpareEstimateColumn, createEstimateColumn, createSpareEstimateColumn } from 'components/spComponents/Table/Columns/Service/SpCreate EstimateColumn';
import { SpCreateLabourEstimateColumn } from 'components/spComponents/Table/Columns/Service/SpCreateLabourEstimateColumn';
import './EstimateList.scss'

const {getAllSpareListForAutoFill, getSpecificSpareDetailsForEstimate, getAllLabourListForAutoFill, getSpecificLabourDetailsForEstimate, addEstimate,getEstimatePendingVehcileList ,getSpecificVechicleDetailsToCreateEstimate} = URL.SERVICE_PROVIDER.SERVICE.ESTIMATE

const mock = 
    [
        {
            labour_name: 'ab',
            hsn_sac: '2000',
            amount: '200',
            selling_price:'2000',
            status: '5',
            tax:'10'
        },
        {
            labour_name: 'bb',
            hsn_sac: '33',
            amount: '',
            selling_price:'2000',
            status: '5',
            tax:'0'
        },
        {
            labour_name: 'qq',
            hsn_sac: '55',
            amount: '',
            selling_price:'2000',
            tax:'0',
            status: '5',
        },
        {
            labour_name: 'ee',
            hsn_sac: '121',
            amount: '',
            selling_price:'2000',
            tax:'10',
            status: '5',
        },
        {
            labour_name: 'gg',
            hsn_sac: '23',
            amount: '',
            selling_price:'2000',
            status: '52',
            tax:'10'

        }]
const SpEstimateList = () => {
    const [page, setPage] = useState('table')
    const [sparePayload, setSparePayload] = useState([])
    const [labourPayload, setLabourSparePayload] = useState([])
    const {} = useFetch()
    const {fetchData,snackbar,loadingIndicator} = useFetchFunction()
    const {data:PendingVehicleList} = useFetch(`${getEstimatePendingVehcileList}?sp_id=${localStorage.getItem('sp_id')}`)
    const [pendingVehicleApiData,setPendingVehicleApiData] = useState({})
    const handleSubmit = async()=>{
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
                            <Box className='mr-1'> Total Amount of Spares * Total Amount of Labour</Box>
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
                        <Button className='small-button' color='options' variant='contained' onClick={handleSubmit}>SUBMIT</Button>
                    </Box>
                </div>
                {snackbar}
                {loadingIndicator}
            </>
        )
    }
    return (
        <div>
            <ServiceProvidertable
                URL={`http://localhost:3008/api/serviceprovider/getAllPendingAppointment`}
                columnss={SpEstimateListColumn}
                clickButton= {()=>setPage('estimate')}
                buttonName={'CREATE ESTIMATE'}
            />
        </div>
    )
}

export default SpEstimateList