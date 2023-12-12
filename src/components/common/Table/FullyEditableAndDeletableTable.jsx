import { Autocomplete, Box, Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './FullyEditableAndDeletableTable.scss'
import CreateAutoCompleteTextfield from '../Textfield/AutoCompleteTextfield';
import { useFetchFunction } from 'hooks/useFetch';
import URL from 'url/apiURL';
import { debounce } from '@mui/material/utils'

const {getAllSpareListForAutoFill, getSpecificSpareDetailsForEstimate} = URL.SERVICE_PROVIDER.SERVICE.ESTIMATE

const FullyEditableAndDeletableTable = ({data,column, title, buttonName ,setPayload}) => {

    // const [tableValues, setTableValues] = useState([])
    const {fetchData} = useFetchFunction()
    // console.log(tableValues)

    //WHENEVER API DATA CHANGES RERUN AND UPDATE
    useEffect(()=>{
        // setTableValues(data)
        setPayload && setPayload(data)
    },[data])

    //WHENEVER ANY ROW'S PARTICULAR COLUMN DATA CHANGES HANDLE THAT AND UPDATE
    const handleInputChange = (e,col,rowIndex)=>{
        const newValue = [...data]
        newValue[rowIndex] = {
            ...newValue[rowIndex],
            [col]:e.target.value
        }
        // setTableValues(newValue)
        setPayload && setPayload(newValue)
    }

    //WHENEVER ANY AUTOCOMPLETE ROW'S IS ADDED THEN API CALLED TO FILL AUTOMCPTE LIST
    //THEN ON CLICK OF ANY VALUE MAKE A API CALL AND THAT WILL FILL THAT ROW DATA
    const autoCompleteInputChange = async(e,col,rowIndex,value)=>{
        const newValue = [...data]
        if(e.target.innerHTML){
            const obj = {
                method:"GET",
                url:`${getSpecificSpareDetailsForEstimate}?sp_id=${localStorage.getItem('sp_id')}&spare_name=${e.target.innerHTML}`
            }
            let {data:apiData} =  await fetchData(obj)
            // let apiData = {
            //     labour_name:'sdsds',
            //     hsn_sac:'sdsd',
            //     price:'sdsd',
            //     tax:'sdsds'
            // }
            // data.results = {

            // }
            if(apiData){
                const newRow = {}
                column.forEach((val)=>{
                    newRow[val.field]=apiData.data[val.field]
                })

                newValue[rowIndex] = {
                    ...newValue[rowIndex],
                    ...newRow
                }
                // setTableValues(newValue)
                setPayload &&setPayload(newValue)
            }

        }

    }

    const  debouncedApiCall= debounce(async(e,col,rowIndex,everyRowData)=>{
        const obj = {
            method:"GET",
            url:`${getAllSpareListForAutoFill}?q=${e.target.value}&sp_id=${localStorage.getItem('sp_id')}`,
        }
        if(e.target.value!=0 || e.target.value){
        let {data:autoCompleteData} =await fetchData(obj)
        if(autoCompleteData){
            console.log("ln 77",autoCompleteData)
            let newData = [...data]
            newData[rowIndex] = {
                ...newData[rowIndex],
                ['autocompleteData']:autoCompleteData.data
            }
            setPayload &&setPayload(newData)
        }}
    },1000)

    //DELETE ROW WHEN CLIKED ON DELETE ICON
    const deleteRow = (rowIndex) => {
        const newInputValues = [...data]
        newInputValues.splice(rowIndex,1)
        // setTableValues(newInputValues)
        setPayload &&setPayload(newInputValues)
    }

    //ADDS A NEW ROW WITH ALL KEYS AS EMPTY STRINGS
    const addEditableRow = ()=>{
        const newRow = {}
        column.forEach((val)=>{
            newRow[val.field]=''
        })
        // setTableValues([...tableValues,newRow])
        setPayload && setPayload([...data,newRow])
    }

    //ADD A NEW AUTOMCPLETE ROW WITH AUTOCOMPELTE BOX AND REST AS EMPTY STRINGS WITH TEXTFEILD DISABLED
    const addAutocompleteRow = ()=>{
        const newRow = {'autocomplete':true}
        column.forEach((val)=>{
            newRow[val.field]=''
        })
        console.log(newRow)
        const obj = {
            method:"GET",
            url:getAllSpareListForAutoFill
        }
        // let autoCompleteData = fetchData(obj)
        // let autoCompleteData = [{label:"sdsdsd"},{label:"rr"},{label:"e"},{label:"w"},{label:"a"}]
        // let {data:autoCompleteData} = await fetchData(obj)
        newRow['autocompleteData'] = []
        // setTableValues([...tableValues,newRow])
        setPayload && setPayload([...data,newRow])
    }
    return (
        <div className='table-body'>    
            <Box fontSize={'1.1rem'} className=' flex ai-center'>
                <Box>{title}</Box>
            </Box>
            <table className='table'>
                <thead className='thead'>
                    <tr>
                        {column.map((field) => (
                            <th>{field.title}</th>
                        ))}
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className='tbody'>
                    {data
                  
                        .map((everyRowData, rowIndex) => (
                        <tr key={rowIndex}>
                            {column.map((col, colIndex) => {
                                //IF THIS ROW HAVE AUTOCOMPLETE KEY => INDICATES WE WILL BE USING AUTOCOMPTE LOGIC
                                if(everyRowData.autocomplete){
                                    
                                    //IF ONLY ITS THIS FIELD THEN CREATE AUTOCOMPLETE
                                    if(col.field==='labour_name'){
                                        return (<td>
                                                    <Autocomplete
                                                        options={everyRowData.autocompleteData}
                                                        renderInput={(params) => <TextField {...params}  size='small'/>}
                                                        onChange={(e,value)=>autoCompleteInputChange(e, col.field, rowIndex,value)}
                                                        onInputChange={(e)=>debouncedApiCall(e,col.field,rowIndex,everyRowData.autocomplete)}
                                                    />
                                                </td>)
                                    }

                                    //ELSE CREATED TEXTFIELD WITH DISABLED
                                    return (<td key={colIndex}>
                                    <TextField
                                        size='small'
                                        value={everyRowData[col.field]}
                                        // onChange={(e) => handleInputChange(e, col.field, rowIndex)}
                                        sx={{"& fieldset": { border: 'none' }}}
                                        disabled
                                    />
                                    </td>)
                                    
                                }

                                //IF NOT AUTOCOMPLETE KEY THEN CREATE FULLY EDITABLE TEXTFIELD
                                return(<td key={colIndex}>
                                    <TextField
                                        size='small'
                                        value={everyRowData[col.field]}
                                        onChange={(e) => handleInputChange(e, col.field, rowIndex)}
                                        sx={{"& fieldset": { border: 'none' }}}
                                    />
                                </td>
                            )})}

                            {/* DELETE BUTTON FOR EVERY ROW */}
                            <td><Button onClick={() => deleteRow(rowIndex)} color='options' variant='outlined'><DeleteOutlineIcon /></Button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* FIRST BUTTON TO ADD AUTOCOMPLETE ROW , SECOND TO ADD FULLY EDITABLE ROW */}
            <Box className='flex jc-flex-end mt-3 mr-2'>
                <Button className='mr-1' onClick={() => addAutocompleteRow()} color='options' variant='contained'> + Add existing {buttonName}</Button>
                <Button  onClick={() => addEditableRow()} color='options' variant='contained'> + Add new {buttonName}</Button>
            </Box>
        </div>
    )
}

export default FullyEditableAndDeletableTable