import { Button, Dialog, DialogTitle } from '@mui/material'
import { useMobileResponsive } from 'hooks/useMobileResponsive'
import React, { createContext, useContext, useState } from 'react'
import UnderLine from '../Underline'
/**
 * @typedef {Object} DialogWrapperContextType
 * @property {() => void} handleOpen - Function to open the dialog.
 * @property {() => void} handleClose - Function to close the dialog.
 * @property {boolean} isMobile - Is Mobile Responsive 
 * @property {boolean} isSubmitted -submit for Textfield Error
 * @property {()=> void} setIsSubmitted -set Submit for Textfield Error
 * @property {object} formData - formdata
 * @property {()=> void} setFormData - seth the formdata
 * @property {()=> void} handleFieldChange - change the formdata field
 * @property {()=> void} tableRef - To Reload the Table

 */
const DialogWrapperContext = createContext('hi')
/**
 * Hook to use the DialogWrapperContext and access its functions.
 * @returns {DialogWrapperContextType} The context object containing handleOpen and handleClose functions.
 */
export const useDialogWrapperContext = ()=> useContext(DialogWrapperContext)

const DialogWrapper = ({children, title , buttonName , tableRef}) => {
    const [formData, setFormData] = useState({});

    const [open,setOpen] = useState(false)
    const handleOpen = ()=>setOpen(true)
    const handleClose = ()=>{setOpen(false)}

    const {isMobile} = useMobileResponsive()

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleFieldChange = (fieldName, value) => {
        setFormData((prevData) => ({ ...prevData, [fieldName]: value }));
      };

    const DialogWrapperFuntions = {
        handleOpen,
        handleClose,
        setIsSubmitted,
        isSubmitted,
        isMobile,
        setFormData,
        formData,
        handleFieldChange,
        tableRef
    }
    return (
        <div>
            <DialogWrapperContext.Provider value={DialogWrapperFuntions}>
            {buttonName && (
                <Button className='mr-1 mt-3'  variant="contained" color={'options'} onClick={handleOpen}>
                    {buttonName || ''}
                </Button>
            )}

            <Dialog open={open} onClose={handleClose} maxWidth='md'>
                <DialogTitle >{title || ''}<UnderLine/></DialogTitle>
                {children}
            </Dialog>
            </DialogWrapperContext.Provider>
        </div>
    )
}

export default DialogWrapper