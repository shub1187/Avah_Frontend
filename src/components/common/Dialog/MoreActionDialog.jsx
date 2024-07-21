import React, { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Autocomplete, Box, Button, Chip, Dialog, DialogActions, DialogTitle, FormControl, IconButton, InputLabel, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CreateTextFields from 'components/common/Textfield';
import { cloneElement } from "react"

const MoreActionDialog = ({rowData,ActionDialog}) => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {setOpen(true)};
    const handleClose = () => {setOpen(false)};
    // const StatusUpdate = ()=>{}

    return (
        <>
            {/* <Button style={{ minWidth: '10px' }} onClick={handleClickOpen}>
                <VisibilityIcon style={{ color: 'rgb(145,54,93)', cursor: 'pointer' }} />
            </Button> */}
            <IconButton color='options' onClick={handleClickOpen}>
                <Box className='flex ai-flex-start column'>
                  <Typography fontSize={9}> &nbsp;View</Typography>
                  <VisibilityIcon  style={{cursor:'pointer',marginRight:'5px'}}/>
                </Box>
              </IconButton>
            <Dialog fullWidth open={open} onClose={handleClose} maxWidth='md'>
                    <Box display="flex" alignItems="center" justifyContent={'flex-end'}>
                                <IconButton onClick={handleClose}>
                                    <CloseIcon />
                                </IconButton>
                    </Box>

                <Box p={1} display={'flex'} flexWrap={"wrap"} flexGrow={1}>
                    {Object.keys(rowData).map((key)=>{
                        if(typeof rowData[key] ==='string'){
                            return <Box width={'200px'} m={1}><InputLabel>{key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</InputLabel><TextField size='small' multiline={key=='pickup_address' || key =='sp_rejection_note'?true:true} rows={key=='pickup_address' || key =='sp_rejection_note'  ? 3:1} fullWidth  value={rowData[key]} disabled/></Box>
                        }
                        else if(Array.isArray(rowData[key]) && rowData?.key==='serviced_brands'){
                            return (<Box width={'420px'} m={1}>
                            <InputLabel>{key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</InputLabel>
                            <Autocomplete
                                value={rowData[key] || []}
                                options={rowData[key] || []}
                                disabled
                                multiple
                                readOnly
                                // CloseIcon={null}
                                // freeSolo
                                // sx = {{width : '48%'}}  
                                getOptionLabel={(option)=>option}
                                renderInput={(params) => (
                                    <TextField 
                                    {...params} 
                                    size='small'   
                                                               
                                   />
                                )}
                                // disableClearable={true}
                            />
                            </Box>)
                        }
                    })}
                </Box>
                {/* <Box m={4}>
                    <CreateTextFields fields={RejectList} onChange={handleFieldChange} formField={formData} isSubmitted={isSubmitted} />
                </Box> */}
                <DialogActions sx={{ mt: 3 }}>
                    {ActionDialog && ActionDialog.map((Comp)=>cloneElement(Comp,{handleMainClose:handleClose}))}
                    {/* {ActionDialog} */}
                    {/* <Button color='options' onClick={handleClose}>Close</Button> */}
                    {/* <Button variant={'contained'} color='options' onClick={StatusUpdate}>SUBMIT</Button> */}
                </DialogActions>
            </Dialog>
        </>
    )
}

export default MoreActionDialog