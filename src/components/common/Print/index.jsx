import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import React,{useRef} from 'react'
import {ReactToPrint} from 'react-to-print'
import PrintIcon from '@mui/icons-material/Print';
import { labour_column } from './components/labour_column';
import { spare_column } from './components/spare_column';
import LabourEstimateTable from './components/labour_estimate_table';
import { mock } from './components/mock';
const Print = () => {
    const ref = useRef();
    let labourData = mock?.data?.labours
    let spareData = mock?.data?.spares
  
    const calculateTotalAmount = (sparePayload, labourPayload) => {
  
      let TotalAmount = 0
  
      const addAmount = (payload) => {
        payload.forEach((obj) => {
          if (obj.amount) {
            TotalAmount += parseFloat(obj.amount)
          }
        })
      }
      addAmount(sparePayload)
      addAmount(labourPayload)
  
      return TotalAmount
    }
  return (
    <>
        <div className="hide-pdf-component">
        <div ref={ref}>
            
            <div id='pdf-print'>
            <LabourEstimateTable data={spareData} column={spare_column} title={'Spares'} />
            <LabourEstimateTable data={labourData} column={labour_column} title={'Labour'} />
            <Box className='flex jc-flex-end ai-center'>
                <Box className='flex jc-flex-end ai-center'>
                <Box className='bold' >Grand Total = </Box>
                <Box className='mr-1'> Total Amount of Spares + Total Amount of Labour</Box>
                <Box className='mr-4 textfield-grey-background'>
                    <TextField
                    size='small'
                    disabled
                    value={
                        calculateTotalAmount(spareData, labourData)
                    }
                    />
                </Box>
                </Box>
            </Box>
            </div>
        </div>        
        </div>
        <ReactToPrint
        bodyClass="print-agreement"
        content={() => ref.current}
        trigger={() => (
            <IconButton color='options' >
            <Box className='flex ai-flex-start jc-center column'>
                <Typography fontSize={9}> Print</Typography>
                <PrintIcon style={{ cursor: 'pointer', marginRight: '5px' }} />
            </Box>
            </IconButton>
         )}
       />    
    </>

  )
}

export default Print