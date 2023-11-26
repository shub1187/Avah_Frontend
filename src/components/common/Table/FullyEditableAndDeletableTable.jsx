import { Box, Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './FullyEditableAndDeletableTable.scss'
const FullyEditableAndDeletableTable = ({data,column, title, buttonName ,setPayload}) => {

    const [tableValues, setTableValues] = useState([])
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(()=>{
        setTableValues(data)
        setPayload(data)
    },[data])

    const handleInputChange = (e,col,rowIndex)=>{
        const newValue = [...tableValues]
        newValue[rowIndex] = {
            ...newValue[rowIndex],
            [col]:e.target.value
        }
        setTableValues(newValue)
        setPayload(newValue)
        // updatePayload((prev)=>({...prev,newValue}))
    }

    const deleteRow = (rowIndex) => {
        const newInputValues = [...tableValues]
        newInputValues.splice(rowIndex,1)
        setTableValues(newInputValues)
        setPayload(newInputValues)
        // updatePayload((prev)=>({...prev,newInputValues}))

    }

    const addRow = ()=>{
        const newRow = {}
        column.forEach((val)=>{
            newRow[val.field]=''
        })
        setTableValues([...tableValues,newRow])
        setPayload([...tableValues,newRow])
        // updatePayload((prev)=>([...tableValues,newRow]))
    }
    return (
        <div className='table-body'>    
            {/* <Button onClick={() => setPage('table')} variant='outlined' color='options'>Back <ArrowBackIcon /></Button> */}
            <Box fontSize={'1.1rem'} className='ml-2 flex ai-center'>
                <Box>{title}</Box>
                <Box className='ml-2'>
                    <TextField
                    label={!searchTerm && "Search"}
                    variant="outlined"
                    fullWidth
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    // sx={{ height:'30px'}}
                    size='small'
                    sx={{
                        width:'150px',
                        "& input": {
                            height: '8px',
                          },
                        "&.Mui-focused fieldset": {
                        borderColor:"#ad4970", // Remove border color when focused
                        },
        
                    }}
                    InputLabelProps={{
                        sx:{
                            top:'-0.6vh',
                        },
                        shrink:false
                    }}
                    />
                </Box>
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
                    {tableValues
                        .filter((object) => {
                            // Filter based on search term
                            return Object.values(object).some((value) =>
                            value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
                            );
                        })                    
                        .map((everyRowData, rowIndex) => (
                        <tr key={rowIndex}>
                            {column.map((col, colIndex) => (
                                <td key={colIndex}>
                                    <TextField
                                        size='small'
                                        value={everyRowData[col.field]}
                                        onChange={(e) => handleInputChange(e, col.field, rowIndex)}
                                        sx={{"& fieldset": { border: 'none' },
                                    }}
                                    />
                                </td>
                            ))}
                            <td><Button onClick={() => deleteRow(rowIndex)} color='options' variant='outlined'><DeleteOutlineIcon /></Button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Box className='flex jc-flex-end mt-3 mr-2'>
                <Button onClick={() => addRow()} color='options' variant='contained'> + {buttonName}</Button>
            </Box>
        </div>
    )
}

export default FullyEditableAndDeletableTable