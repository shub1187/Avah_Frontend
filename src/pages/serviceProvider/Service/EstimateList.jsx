import React, { useEffect, useMemo, useState } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Autocomplete, Box, Button, Select, TextField } from '@mui/material';
import { spLabourColumns } from 'components/spComponents/Table/Columns/Labours/SpLabourColumn';
import FullyEditableAndDeletableTable from 'components/common/Table/FullyEditableAndDeletableTable';
import CreateAutoCompleteTextfield from 'components/common/Textfield/AutoCompleteTextfield';
import {  useFetch, useFetchFunction } from 'hooks/useFetch';
import ServiceProvidertable from 'components/spComponents/Table/ServiceProviderTable';
import { SpEstimateListColumn } from 'components/spComponents/Table/Columns/Service/SpEstimateColumn';
import URL from 'url/apiURL';
import { SpCreateSpareEstimateColumn, createEstimateColumn, createSpareEstimateColumn } from 'components/spComponents/Table/Columns/Service/SpCreate EstimateColumn';
import { SpCreateLabourEstimateColumn } from 'components/spComponents/Table/Columns/Service/SpCreateLabourEstimateColumn';

const {getAllSpareListForAutoFill, getSpecificSpareDetailsForEstimate, getAllLabourListForAutoFill, getSpecificLabourDetailsForEstimate, addEstimate,getEstimatePendingVehcileList ,getSpecificVechicleDetailsToCreateEstimate} = URL.SERVICE_PROVIDER.SERVICE.ESTIMATE

const SpEstimateList = () => {
    const [page, setPage] = useState('table')
    const [sparePayload, setSparePayload] = useState([])
    const [labourPayload, setLabourSparePayload] = useState([])
    console.log(sparePayload,labourPayload)
    const {} = useFetch()
    const {fetchData} = useFetchFunction()
    const {data:PendingVehicleList} = useFetch(`${getEstimatePendingVehcileList}?sp_id=${localStorage.getItem('sp_id')}`)
    const [pendingVehicleApiData,setPendingVehicleApiData] = useState({})
    console.log("ln 26",pendingVehicleApiData)
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
        // console.log("ln 41", SelectValue?.value)
        const obj = {
            method:"GET",
            url:`${getSpecificVechicleDetailsToCreateEstimate}?sp_id=${localStorage.getItem('sp_id')}&vehicle_number=${SelectValue?.value}`
        }
        const newData = await fetchData(obj)
        console.log("ln 48",newData)
        setPendingVehicleApiData(newData?.data?.data)
    }
    const mock = useMemo(
        ()=>
        [
            {
                labour_name: 'ab',
                hsn_sac: '2000',
                amount: '20',
                status: '5',
            },
            {
                labour_name: 'bb',
                hsn_sac: '33',
                amount: '63',
                status: '5',
            },
            {
                labour_name: 'qq',
                hsn_sac: '55',
                amount: '55',
                status: '5',
            },
            {
                labour_name: 'ee',
                hsn_sac: '121',
                amount: '23',
                status: '5',
            },
            {
                labour_name: 'gg',
                hsn_sac: '23',
                amount: '1',
                status: '52',
            }],[])

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
                          <Box >ADDRESS</Box>  
                          <Box >MOBILE</Box>  
                          <Box >EMAIL</Box>  
                        </Box>
                        <Box>
                          <Box>: {pendingVehicleApiData?.name}</Box>
                          <Box >: {pendingVehicleApiData?.address}</Box>  
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
                    <Box className='flex jc-flex-end'>
                        <Button className='small-button' color='options' variant='contained' onClick={handleSubmit}>SUBMIT</Button>
                    </Box>
                </div>
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