import Button from '@mui/material/Button';
import { Box, Dialog as MuiDialog, ThemeProvider,CircularProgress } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import LoginButtonTheme from 'components/Button/LoginButtonTheme';
import { useEffect, useState } from 'react';
export default function LoginDialog({ loginDialogOpenFunction ,goToLoginPageButtonAfterRegister }) {
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(true)
  const handleClickOpen = () => {
    setOpen(true);
  };
  useEffect(()=>{
    let a = setTimeout(()=>setLoading(false),2000)

    return ()=>clearTimeout(a)
  },[])
  const handleClose = () => {
    setOpen(false);
    loginDialogOpenFunction()
  };


  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <MuiDialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          sx: {
            width: "765px",
            height: "396px",
            justifyContent:"center",
            alignItems:"center"
          }
        }}      >
        {loading ?
          <CircularProgress
            size={100}
            thickness={2}
            sx={{color:"rgb(119,53,98)"}}
          />
          :
          <>
           <DialogTitle
            marginTop={"3.5rem"}
            display={"flex"} 
            flexDirection={"column"} 
            alignItems={"center"} 
            fontWeight={"bold"} 
            fontSize="36px" 
            color={"#AD4970"} 
            id="alert-dialog-title">
              <Box>
                  Thank you
              </Box>
              <Box>
                  For your registration
              </Box>
          </DialogTitle>
          <DialogContent sx={{display:"flex",justifyContent:"center"}}>
            <DialogContentText fontColor={"rgb(45,55,72)"} fontWeight={"700"} fontSize={"26px"} id="alert-dialog-description">
                  Please Login to continue
            </DialogContentText>
          </DialogContent>
          <DialogActions sx={{justifyContent:"center",marginBottom:"5rem"}}>
              <ThemeProvider theme={LoginButtonTheme}>
                  <Button onClick={()=>{handleClose();goToLoginPageButtonAfterRegister()}} sx={{textTransform:"none"}}>Login</Button>
              </ThemeProvider>
            </DialogActions>
          </>  
        }

      </MuiDialog>
    </div>
  );
}