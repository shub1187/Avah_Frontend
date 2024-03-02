import { Box, TextField } from '@mui/material'
import UnderLine from 'components/common/Underline'
import React from 'react'

const LabourEstimateTable = ({ data,column,title }) => {
    return (
        <div className='table-body'>
            <Box fontSize={'1.1rem'} className=' flex ai-center'>
                <Box>{title}<UnderLine/></Box>
            </Box>
            <table className='table'>
                <thead className='thead'>
                    <tr>
                        {column.map((field) => (
                            <th>{field.title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className='tbody'>
                    {data?.map((everyRowData, rowIndex) => (
                            <tr key={rowIndex}>
                                {column.map((col, colIndex) => {
                                    return (<td key={colIndex}>
                                        <TextField
                                            size='small'
                                            value={everyRowData[col.field]}
                                            disabled={true}
                                            sx={col.field==='name'&& {width:170}}
                                            type={col.field === 'quantity' && 'number'}
                                            InputProps={col.field === 'quantity' && {
                                                inputProps: {
                                                    min: 1
                                                }
                                            }}
                                        />
                                    </td>
                                    )
                                })}

                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default LabourEstimateTable