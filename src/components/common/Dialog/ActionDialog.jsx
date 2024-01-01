import { Autocomplete, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Input, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import EditIcon from '@mui/icons-material/Edit';
import { FiEdit } from "react-icons/fi";
import DeleteIcon from '@mui/icons-material/Delete';
import { useFetchFunction } from 'hooks/useFetch'
import { useRef, useState } from 'react'
import CreateTextFields from 'components/common/Textfield'
import UnderLine from '../Underline';

const ActionDialog = ({ changePassword, edit, status, view, approve, reject, createEstimate, editEstimate, editRole, editEmployee, deleteSpare, deleteLabour ,deleteEmployee, deleteRole, payload, params, url, noLoading, noSnackbar, setPage, setEyeIconValue, rowData }) => {
    const { fetchData, snackbar, loadingIndicator } = useFetchFunction()
    // const timerRef = useRef(null);

    //Dialog Popups
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => { setOpen(true) };
    const handleClose = () => { setOpen(false) };

    //Formdata Related And Required Checks
    const [formData, setFormData] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleFieldChange = (fieldName, value) => { setFormData((prevData) => ({ ...prevData, [fieldName]: value })) }

    //IF YOUR ACTION IS REJECT
    const RejectList = [
        {
            label: 'Reason Of Rejection',
            name: "sp_rejection_note",
            type: 'text',
            fullWidth: true,
            required: true, // Add the required property
            errormessage: 'Rejection Message Required', // Add the error message
        },
        {
            label: 'Is Reschedule Available?',
            name: "is_reschedule_allowed",
            fullWidth: true,
            required: true, // Add the required property
            errormessage: 'Confirm Rescheduling', // Add the error message    
            select: true,
            selectArray: [{ label: 'Yes', value: true }, { label: 'No', value: false }]

        }
    ]
    const StatusUpdate = async () => {
        try {
            setIsSubmitted(true); // Set the form as submitted
            if (reject) {
                const requiredFields = RejectList.filter((field) => field.required);
                const emptyRequiredFields = requiredFields.filter((field) => !formData[field.name]);
                if (emptyRequiredFields.length > 0) { return }
            }
            const obj = {
                payload: { ...payload, ...formData },
                method: "POST",
                url: `${url}${params || ''}`,
                noLoading: noLoading || false,
                noSnackbar: noSnackbar || false
            }
            if (url) {
                await fetchData(obj)
            }
            setFormData({})
            setOpen(false)

        }
        catch (error) {
            console.log(error)
            setFormData({})

        }
        setIsSubmitted(false)
    }

    const rowadata = {
        role:'Accountant',
        permission_granted:[{title:'Spares'},{title:'Roles'},{title:'Service'}]
    }
    console.log(rowadata.permission_granted[0])
    const checkboxList = [
        { title:'Roles'},
        { title:'Spares'},
        { title:'Labour'},
        { title:'Service'},
        { title:'Service Type'},
        { title:'Accounts'},
        { title:'Billing'},
        { title:'Finance'},
        { title:'Packages'},
        { title:'Reviews'},
        { title:'Settings'}
      ]
      const defaultValues = checkboxList.filter((checkbox) =>
  rowadata.permission_granted.some((permission) => permission.title === checkbox.title)
);
    return (
        <>
            {/* {changePassword && <ChangePasswordDialog/>}
            {edit && <EditDialog/>}
            {status && <StatusDialog/>}
            {view && <ViewDialog/>} */}
            {approve && <Button variant='outlined' color='success' onClick={StatusUpdate}>
                <CheckCircleIcon style={{ color: 'rgb(5,131,30)', cursor: 'pointer', marginRight: '5px' }} /> Approve
            </Button>}

            {reject &&
                <>
                    <Button variant='outlined' color='error' onClick={handleClickOpen} >
                        <CancelIcon style={{ color: 'rgb(204,16,16)', cursor: 'pointer', marginRight: '5px' }} /> Reject
                    </Button>
                    <Dialog fullWidth open={open} onClose={handleClose} maxWidth='xs'>
                        <Box m={4}>
                            <CreateTextFields fields={RejectList} onChange={handleFieldChange} formField={formData} isSubmitted={isSubmitted} />
                        </Box>
                        <DialogActions sx={{ mt: 3 }}>
                            <Button color='options' onClick={handleClose}>CANCEL</Button>
                            <Button variant={'contained'} color='options' onClick={StatusUpdate}>SUBMIT</Button>
                        </DialogActions>
                    </Dialog>
                </>
            }

            {createEstimate &&
                <>
                    <Button variant='contained' color='options' onClick={() => { setPage(); setEyeIconValue(rowData) }} >
                        <PlaylistAddIcon style={{ cursor: 'pointer', marginRight: '5px' }} /> Create Estimate
                    </Button>
                </>
            }

            {editEstimate &&
                <>
                    <IconButton color='options' onClick={() => { setPage(); setEyeIconValue(rowData) }}>
                        <Box className='flex ai-flex-start column'>
                            <Typography fontSize={9}> &nbsp;Edit</Typography>
                            <FiEdit style={{ cursor: 'pointer', marginRight: '5px' }} />
                        </Box>
                    </IconButton>
                </>
            }

            {editEmployee &&
                <>
                    <IconButton color='options' onClick={handleClickOpen}>
                        <Box className='flex ai-flex-start column'>
                            <Typography fontSize={9}> &nbsp;Edit</Typography>
                            <FiEdit style={{ cursor: 'pointer', marginRight: '5px' }} />
                        </Box>
                    </IconButton>
                    <Dialog fullWidth open={open} onClose={handleClose} maxWidth='xs'>
                    <DialogTitle>Employee<UnderLine/></DialogTitle>
                    <DialogActions sx={{ mt: 3 }}>
                        <Button color='options' onClick={handleClose}>CANCEL</Button>
                        <Button variant={'contained'} color='options' onClick={StatusUpdate}>UPDATE</Button>
                    </DialogActions>
                    </Dialog>
                </>
            }

            {editRole &&
                <>
                    <IconButton color='options' onClick={handleClickOpen}>
                        <Box className='flex ai-flex-start column'>
                            <Typography fontSize={9}> &nbsp;Edit</Typography>
                            <FiEdit style={{ cursor: 'pointer', marginRight: '5px' }} />
                        </Box>
                    </IconButton>
                    <Dialog fullWidth open={open} onClose={handleClose} maxWidth='xs'>
                    <DialogTitle>Role<UnderLine/></DialogTitle>
                    <DialogContent>
                        <TextField value={rowadata.role} size='small' sx={{mb:1}}/>
                        <Autocomplete
                            multiple
                            id="tags-standard"
                            options={checkboxList}
                            getOptionLabel={(option) => option.title}
                            defaultValue={defaultValues}
                            renderInput={(params) => (
                            <TextField
                                {...params}
                                size='small'
                            />
                            )}
                        />
                    </DialogContent>
                    <DialogActions sx={{ mt: 3 }}>
                        <Button color='options' onClick={handleClose}>CANCEL</Button>
                        <Button variant={'contained'} color='options' onClick={StatusUpdate}>UPDATE</Button>
                    </DialogActions>
                    </Dialog>
                </>
            }
            {deleteSpare &&
                <>
                    <IconButton color='options' onClick={handleClickOpen}>
                        <Box className='flex ai-flex-start column'>
                            <Typography fontSize={9}> &nbsp;Delete</Typography>
                            <DeleteIcon style={{ cursor: 'pointer', marginRight: '5px' }} />
                        </Box>
                    </IconButton>
                    <Dialog fullWidth open={open} onClose={handleClose} maxWidth='xs'>
                        <DialogTitle>Spares<UnderLine/> </DialogTitle>
                        <DialogContent><Typography component={'span'} color='#ad4970' >{rowData?.spare_name}</Typography> will be deleted. Please click on <Typography component={'span'} color='#ad4970'>Delete</Typography> to proceed </DialogContent>
                        <DialogActions sx={{ mt: 3 }}>
                            <Button color='options' onClick={handleClose}>CANCEL</Button>
                            <Button variant={'contained'} color='options' onClick={StatusUpdate}>DELETE</Button>
                        </DialogActions>

                    </Dialog>
                </>

            }
            {deleteLabour &&
                <>
                    <IconButton color='options' onClick={handleClickOpen}>
                        <DeleteIcon style={{ cursor: 'pointer', marginRight: '5px' }} />
                    </IconButton>
                    <Dialog fullWidth open={open} onClose={handleClose} maxWidth='xs'>
                        <DialogTitle>Labour <span style={{ color: '#ad4970' }}>{rowData?.labour_name}</span> will be deleted. Please click on <span style={{ color: '#ad4970' }}>Delete</span> to proceed </DialogTitle>
                        <DialogActions sx={{ mt: 3 }}>
                            <Button color='options' onClick={handleClose}>CANCEL</Button>
                            <Button variant={'contained'} color='options' onClick={StatusUpdate}>DELETE</Button>
                        </DialogActions>

                    </Dialog>
                </>

            }
            {deleteEmployee &&
                <>
                    <IconButton color='options' onClick={handleClickOpen}>
                        <Box className='flex ai-flex-start column'>
                            <Typography fontSize={9}> &nbsp;Delete</Typography>
                            <DeleteIcon style={{ cursor: 'pointer', marginRight: '5px' }} />
                        </Box>
                    </IconButton>
                    <Dialog fullWidth open={open} onClose={handleClose} maxWidth='xs'>
                        <DialogTitle>Employee<UnderLine/> </DialogTitle>
                        <DialogContent><Typography component={'span'} color='#ad4970' >{rowData?.spare_name}</Typography> will be deleted. Please click on <Typography component={'span'} color='#ad4970'>Delete</Typography> to proceed </DialogContent>
                        <DialogActions sx={{ mt: 3 }}>
                            <Button color='options' onClick={handleClose}>CANCEL</Button>
                            <Button variant={'contained'} color='options' onClick={StatusUpdate}>DELETE</Button>
                        </DialogActions>

                    </Dialog>
                </>

            }

            {deleteRole &&
                <>
                    <IconButton color='options' onClick={handleClickOpen}>
                        <Box className='flex ai-flex-start column'>
                            <Typography fontSize={9}> &nbsp;Delete</Typography>
                            <DeleteIcon style={{ cursor: 'pointer', marginRight: '5px' }} />
                        </Box>
                    </IconButton>
                    <Dialog fullWidth open={open} onClose={handleClose} maxWidth='xs'>
                        <DialogTitle>Role<UnderLine/> </DialogTitle>
                        <DialogContent><Typography component={'span'} color='#ad4970' >{rowData?.spare_name}</Typography> will be deleted. Please click on <Typography component={'span'} color='#ad4970'>Delete</Typography> to proceed </DialogContent>
                        <DialogActions sx={{ mt: 3 }}>
                            <Button color='options' onClick={handleClose}>CANCEL</Button>
                            <Button variant={'contained'} color='options' onClick={StatusUpdate}>DELETE</Button>
                        </DialogActions>
                    </Dialog>
                </>

            }
            {snackbar}
            {loadingIndicator}
        </>
    )
}

export default ActionDialog