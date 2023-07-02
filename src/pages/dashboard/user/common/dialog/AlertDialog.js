import React, { useState, useRef, useEffect } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { imageCongis } from '../../../../../configs/imageConfigs';
import { useAsyncDebounce } from 'react-table';

function AlertDialog() {

    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');
    const [type, setType] = React.useState('');

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    const onDialogDismiss = useAsyncDebounce(value => {
        handleClose()
    }, 3000)

    const handleClose = () => {
        if (open) {
            setOpen(false)

        }

    }

    const setAlertDialog = (props) => {
        if (!open) {
            setType(props)
            setOpen(!open)
            onDialogDismiss()
        }
    }

    function bindAlertDialog() {

        return (<div>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                maxWidth='700px'

            >
                {
                    type == "delete" ?
                        //-------------delete alert--------------
                        <div className='flex-container' style={{
                            'width': "700px",
                            'height': "424px"
                        }}>


                            <img src={imageCongis.tick} style={{ 'width': '150px' }}></img>
                            <h2 className='profile-title mt-4'>User deleted successfully.</h2>

                        </div>
                        :
                        //-------------reset password alert--------------
                        <div className='flex-container' style={{
                            'width': "700px",
                            'height': "424px"
                        }}>


                            <img src={imageCongis.tick} style={{ 'width': '150px' }}></img>
                            <h2 className='profile-title mt-4'>We are Successfully set New password <br/>
                                New password information sent to registered Email ID.</h2>

                        </div>
                }
            </Dialog>
        </div>);

    }

    return [setAlertDialog, bindAlertDialog, handleClose]


}

export default AlertDialog
