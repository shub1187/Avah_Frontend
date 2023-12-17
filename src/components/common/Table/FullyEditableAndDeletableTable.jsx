import { Autocomplete, Box, Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './FullyEditableAndDeletableTable.scss'
import CreateAutoCompleteTextfield from '../Textfield/AutoCompleteTextfield';
import { useFetchFunction } from 'hooks/useFetch';
import URL from 'url/apiURL';
import { debounce } from '@mui/material/utils'

const {getAllSpareListForAutoFill, getSpecificSpareDetailsForEstimate, getAllLabourListForAutoFill} = URL.SERVICE_PROVIDER.SERVICE.ESTIMATE

const FullyEditableAndDeletableTable = ({data,column, title, buttonName ,setPayload, autoCompleteFieldName, getAllItemListForAutoFillDebounceOnInputChange, getApiUrlOnAutocompleteItemSelect, getApiUrlOnAutocompleteItemSelectParams}) => {

    const {fetchData} = useFetchFunction()

    //WHENEVER API DATA CHANGES RERUN AND UPDATE
    useEffect(()=>{
        setPayload && setPayload(data)
    },[data])

    //WHENEVER ANY ROW'S PARTICULAR COLUMN DATA CHANGES HANDLE THAT AND UPDATE
    const handleInputChange = (e,col,rowIndex)=>{
        // value={everyRowData.tax == 0? everyRowData.selling_price : (parseFloat(everyRowData.tax)/100) * parseFloat(everyRowData.selling_price) +  parseFloat(everyRowData.selling_price) }
        const newValue = [...data]
        if(col==='selling_price'){
            let amount = newValue[rowIndex].tax==0  ? parseFloat(e.target.value) :!newValue[rowIndex].tax===0 ? 0 :(parseFloat(newValue[rowIndex].tax)/100) * parseFloat(e.target.value) +  parseFloat(e.target.value) 
            let tax_amount = !newValue[rowIndex].tax ? 0 : newValue[rowIndex]===0 ? 0 : parseFloat(newValue[rowIndex].tax/100) * parseFloat(e.target.value)
            newValue[rowIndex] = {
                ...newValue[rowIndex],
                ['amount']:amount, 
                ['tax_amount']:tax_amount,
                [col]:e.target.value
            }
        }

        else if(col==='tax'){
            let tax_amount =isNaN(parseFloat(newValue[rowIndex].selling_price)) ? 0 :e.target.value===0? parseFloat(newValue[rowIndex].selling_price) : !e.target.value ? 0 :(parseFloat(e.target.value)/100) * parseFloat(newValue[rowIndex].selling_price) 
            let amount = isNaN(parseFloat(newValue[rowIndex].selling_price)) ? 0 : tax_amount + parseFloat(newValue[rowIndex].selling_price)

            newValue[rowIndex] = {
                ...newValue[rowIndex],
                ['tax_amount']:tax_amount,
                ['amount']:amount,
                [col]:e.target.value
            }
        }
        else{
        newValue[rowIndex] = {
            ...newValue[rowIndex],
            [col]:e.target.value
        }
        }
        setPayload && setPayload(newValue)
    }

    //OUT OF THE OPTIONS OF AUTOCOMPTE , WHICHEVER OPTIONS WE SELECT THAT WILL BE SENT AS PARAMS TO GET 
    //THE DATA WHICH WILL AUTOFILL THE REMAINING COLUMN OF THAT ROW
    const autoCompleteOnSelect = async(e,col,rowIndex,value)=>{
        const newValue = [...data]
        if(e.target.innerHTML){
            const obj = {
                method:"GET",
                url:`${getApiUrlOnAutocompleteItemSelect}?sp_id=${localStorage.getItem('sp_id')}&${getApiUrlOnAutocompleteItemSelectParams}=${e.target.innerHTML}`
            }
            let {data:apiData} =  await fetchData(obj)

            if(apiData){
                const newRow = {}
                column.forEach((val)=>{
                    newRow[val.field]=apiData.data[val.field]
                })
                newRow.tax_amount =parseFloat(apiData?.data?.tax/100 ) * parseFloat(apiData?.data?.selling_price)
                newRow.amount = newRow.tax_amount + parseFloat(apiData?.data?.selling_price)
                newValue[rowIndex] = {
                    ...newValue[rowIndex],
                    ...newRow
                }
                setPayload &&setPayload(newValue)
            }
        }
    }

    //WHENEVER A AUTOCOMPETE IS CREATED A DEBOUNCED API IS CALLED TO FILL THE AUTCOMPLETE WITH DATA
    const  debouncedApiCallOnInputChange= debounce(async(e,col,rowIndex,everyRowData)=>{
        const obj = {
            method:"GET",
            url:`${getAllItemListForAutoFillDebounceOnInputChange}?q=${e.target.value}&sp_id=${localStorage.getItem('sp_id')}`,
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
        setPayload &&setPayload(newInputValues)
    }

    //ADDS A NEW ROW WITH ALL KEYS AS EMPTY STRINGS
    const addEditableRow = ()=>{
        const newRow = {}
        column.forEach((val)=>{
            newRow[val.field]=''
        })
        setPayload && setPayload([...data,newRow])
    }

    //ADD A NEW AUTOMCPLETE ROW WITH AUTOCOMPELTE BOX AND REST AS EMPTY STRINGS WITH TEXTFEILD DISABLED
    const addAutocompleteRow = ()=>{
        const newRow = {'autocomplete':true}
        column.forEach((val)=>{
            newRow[val.field]=''
        })
        newRow['autocompleteData'] = []
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
                                    if(col.field===autoCompleteFieldName){
                                        return (<td>
                                                    <Autocomplete
                                                        options={everyRowData.autocompleteData}
                                                        renderInput={(params) => <TextField {...params}  size='small'/>}
                                                        onChange={(e,value)=>autoCompleteOnSelect(e, col.field, rowIndex,value)}
                                                        onInputChange={(e)=>debouncedApiCallOnInputChange(e,col.field,rowIndex,everyRowData.autocomplete)}
                                                    />
                                                </td>)
                                    }
                                    // //IF AMOUNT THEN WE WILL MULTIPLY TAX * SELLING_PRICE
                                    // if(col.field==='amount'){
                                    //     return(
                                    //     <td key={colIndex}>
                                    //         <TextField
                                    //             size='small'
                                    //             value={everyRowData.tax == 0? everyRowData.selling_price : (parseFloat(everyRowData.tax)/100) * parseFloat(everyRowData.selling_price)+parseFloat(everyRowData.selling_price) }
                                    //             sx={{"& fieldset": { border: 'none' }}}
                                    //             disabled
                                    //         />
                                    //     </td>)
                                    // }
                                    // if(col.field==='tax_amount'){
                                    //     return(
                                    //         <td key={colIndex}>
                                    //             <TextField
                                    //                 size='small'
                                    //                 value={everyRowData.tax == 0? 0 :(parseFloat(everyRowData.tax)/100) * parseFloat(everyRowData.selling_price) }
                                    //                 sx={{"& fieldset": { border: 'none' }}}
                                    //                 disabled
                                    //             />
                                    //         </td>)
                                    // }
                                    //ELSE CREATED TEXTFIELD WITH DISABLED
                                    return (<td key={colIndex}>
                                    <TextField
                                        size='small'
                                        value={everyRowData[col.field]}
                                        // onChange={(e) => handleInputChange(e, col.field, rowIndex)}
                                        onChange={(e) => handleInputChange(e, col.field, rowIndex)}
                                        sx={{"& fieldset": { border: 'none' }}}
                                        disabled
                                    />
                                    </td>)
                                    
                                }
                                //IF NOT AUTOCOMPLETE KEY THEN CREATE FULLY EDITABLE TEXTFIELD
                                //WITH EXCEPTION IF AMOUNT THEN WE WILL MULTIPLY TAX * SELLING_PRICE WITH DISABLED AS TRUE
                                // if(col.field==='amount'){
                                //     return(
                                //     <td key={colIndex}>
                                //         <TextField
                                //             size='small'
                                //             // value={everyRowData.tax == 0? everyRowData.selling_price : (parseFloat(everyRowData.tax)/100) * parseFloat(everyRowData.selling_price) +  parseFloat(everyRowData.selling_price) }
                                //             value={everyRowData[col.field]}
                                //             sx={{"& fieldset": { border: 'none' }}}
                                //             onChange={(e) => handleInputChange(e, col.field, rowIndex)}
                                //             disabled
                                //         />
                                //     </td>)
                                // }
                                // if(col.field==='tax_amount'){
                                //     return(
                                //         <td key={colIndex}>
                                //             <TextField
                                //                 size='small'
                                //                 // value={everyRowData.tax == 0? 0 :(parseFloat(everyRowData.tax)/100) * parseFloat(everyRowData.selling_price) }
                                //                 value={everyRowData[col.field]}
                                //                 onChange={(e) => handleInputChange(e, col.field, rowIndex)}
                                //                 sx={{"& fieldset": { border: 'none' }}}
                                //                 disabled
                                //             />
                                //         </td>)
                                // }
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