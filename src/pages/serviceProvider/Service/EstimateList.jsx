import React, { useEffect, useMemo, useState } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Select, TextField } from '@mui/material';
import { spLabourColumns } from 'components/spComponents/Table/Columns/Labours/SpLabourColumn';
import FullyEditableAndDeletableTable from 'components/common/Table/FullyEditableAndDeletableTable';
import CreateAutoCompleteTextfield from 'components/common/Textfield/AutoCompleteTextfield';
import {  useFetch, useFetchFunction } from 'hooks/useFetch';
import ServiceProvidertable from 'components/spComponents/Table/ServiceProviderTable';
import { SpEstimateListColumn } from 'components/spComponents/Table/Columns/Service/SpEstimateColumn';
import URL from 'url/apiURL';
import { SpCreateSpareEstimateColumn, createEstimateColumn, createSpareEstimateColumn } from 'components/spComponents/Table/Columns/Service/SpCreate EstimateColumn';
import { SpCreateLabourEstimateColumn } from 'components/spComponents/Table/Columns/Service/SpCreateLabourEstimateColumn';

const {getAllSpareListForAutoFill, getSpecificSpareDetailsForEstimate, getAllLabourListForAutoFill, getSpecificLabourDetailsForEstimate} = URL.SERVICE_PROVIDER.SERVICE.ESTIMATE

const SpEstimateList = () => {
    const [page, setPage] = useState('table')
    const [sparePayload, setSparePayload] = useState([])
    const [labourPayload, setLabourSparePayload] = useState([])
    console.log(sparePayload,labourPayload)

    const {fetchData} = useFetchFunction()
    const {data:VehicleList} = useFetch('')

    const handleSubmit = async()=>{
        const obj = {
            payload:{
                sparePayload,
                labourPayload
            },
            method:"POST",
            url:''
        }
        await fetchData(obj)
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
                        <CreateAutoCompleteTextfield options={[]} whiteColor label={'Vehicle No'}/>
                        <Button className='small-button' onClick={() => setPage('table')} variant='outlined' color='options'>Back <ArrowBackIcon /></Button>
                    </Box>
                    <Box maxHeight={'400px'} overflow={'auto'} className='mb-3'>
                        <FullyEditableAndDeletableTable
                            title={'SPARES'} 
                            buttonName={'Add Spares'} 
                            data={sparePayload} 
                            column={SpCreateSpareEstimateColumn} 
                            setPayload = {setSparePayload} 
                            autoCompleteFieldName={'spare_name'}
                            getApiUrlForAutoComplete={getAllSpareListForAutoFill}
                            getApiUrlForAutoCompleteParams={'spare_name'}
                            getDebouncedApiUrlForInputChange={getSpecificSpareDetailsForEstimate}
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
                            getApiUrlForAutoComplete={getAllLabourListForAutoFill}
                            getApiUrlForAutoCompleteParams={'labour_name'}
                            getDebouncedApiUrlForInputChange={getSpecificLabourDetailsForEstimate}

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