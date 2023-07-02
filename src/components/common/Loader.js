import { Box, CircularProgress, Dialog } from '@mui/material';
import React, { useEffect, useState } from 'react'

function Loader() {
    const [open, setOpen] = useState(false);
    const setLoading = (props) => {
        setOpen(!open);
    };
    const handleClose = () => {
       
            setOpen(false);
        

    };
    useEffect(() => {
        setTimeout(function () {
          console.log("Delayed for 5 second.");
          setOpen(false);
        }, 8000);
      }, []);
    function bindLoading(menuName) {

        return (
            <>
                <Dialog
                    PaperProps={{
                        sx: {
                            width: "100%",
                            height: '100%',
                            backgroundColor: 'transparent',
                            boxShadow:'none'
                        

                        }
                    }}

                    maxWidth='xxl'
                    open={open}
                    onClose={handleClose}
                >
                    <div className="loader-container" sx={{ display: "flex", justifyContent: "center" }}>
                        <CircularProgress sx={{"color":'#843560'}} />
                    
                    </div>

                </Dialog>

            </>
        )
    }

    return [setLoading, bindLoading, handleClose]
}

export default Loader
