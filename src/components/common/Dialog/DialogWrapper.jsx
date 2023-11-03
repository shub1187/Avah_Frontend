import { Button, Dialog } from '@mui/material'
import { useMobileResponsive } from 'hooks/useMobileResponsive'
import React, { createContext, useContext, useState } from 'react'
/**
 * @typedef {Object} DialogWrapperContextType
 * @property {() => void} handleOpen - Function to open the dialog.
 * @property {() => void} handleClose - Function to close the dialog.
 * @property {boolean} isMobile - Is Mobile Responsive 
 * @property {boolean} isSubmitted -submit for Textfield Error
 * @property {()=> void} setIsSubmitted -set Submit for Textfield Error
 * @property {object} formData - formdata
 * @property {()=> void} setFormData - seth the formdata
 */
const DialogWrapperContext = createContext('hi')
/**
 * Hook to use the DialogWrapperContext and access its functions.
 * @returns {DialogWrapperContextType} The context object containing handleOpen and handleClose functions.
 */
export const useDialogWrapperContext = ()=> useContext(DialogWrapperContext)

const DialogWrapper = ({children}) => {
    const [formData, setFormData] = useState({});

    const [open,setOpen] = useState(false)
    const handleOpen = ()=>setOpen(true)
    const handleClose = ()=>{setOpen(false)}

    const {isMobile} = useMobileResponsive()

    const [isSubmitted, setIsSubmitted] = useState(false);


    const DialogWrapperFuntions = {
        handleOpen,
        handleClose,
        setIsSubmitted,
        isSubmitted,
        isMobile,
        setFormData,
        formData
    }
    return (
        <div>
            <DialogWrapperContext.Provider value={DialogWrapperFuntions}>

            <Button  variant="contained" color={'success'} onClick={handleOpen}>
                CREATE APPOINTMENT
            </Button>
            <Dialog open={open} onClose={handleClose} maxWidth='md'>
                {children}
            </Dialog>
            </DialogWrapperContext.Provider>
        </div>
    )
}

export default DialogWrapper