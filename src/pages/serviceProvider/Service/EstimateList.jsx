import React, { useEffect, useMemo, useState } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Select, TextField } from '@mui/material';
import { spLabourColumns } from 'components/spComponents/Table/Columns/Labours/SpLabourColumn';
import FullyEditableAndDeletableTable from 'components/common/Table/FullyEditableAndDeletableTable';
import CreateAutoCompleteTextfield from 'components/common/Textfield/AutoCompleteTextfield';
import {  useFetchFunction } from 'hooks/useFetch';
const SpEstimateList = () => {
    const [page, setPage] = useState('estimate')
    const [sparePayload, setSparePayload] = useState([])
    const [labourPayload, setLabourSparePayload] = useState([])
    console.log(sparePayload,labourPayload)

    const {fetchData} = useFetchFunction()
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
                        <Button onClick={() => setPage('table')} variant='outlined' color='options'>Back <ArrowBackIcon /></Button>
                    </Box>
                    <Box maxHeight={'400px'} overflow={'auto'} className='mb-3'>
                        <FullyEditableAndDeletableTable title={'SPARES'} buttonName={'Add Spares'} data={mock} column={spLabourColumns} setPayload = {setSparePayload}/>
                    </Box>
                    <Box maxHeight={'400px'} overflow={'auto'} className='mb-3' >
                        <FullyEditableAndDeletableTable title={'LABOURS'} buttonName={'Add Labours'} data={mock} column={spLabourColumns} setPayload = {setLabourSparePayload} />
                    </Box>
                    <Box className='flex jc-flex-end'>
                        <Button color='options' variant='contained' onClick={handleSubmit}>SUBMIT</Button>
                    </Box>
                </div>
            </>
        )
    }
    return (
        <div>
            bb
        </div>
    )
}

export default SpEstimateList