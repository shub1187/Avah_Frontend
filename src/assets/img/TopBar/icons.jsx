import TopBarHomeNotificationImage from 'assets/img/TopBar/TopBarNotificationIcon.png'
import TopBarHomeUsersImage from 'assets/img/TopBar/TopBarUserIcon.png'
import TopBarHomeSettingsImage from 'assets/img/TopBar/TopBarSettingsIcon.png'
import { Box, Button, Dialog, DialogTitle, Grid, Popover, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import CreateTextFields from 'components/common/Textfield';
import { useMobileResponsive } from 'hooks/useMobileResponsive';

const TopBarHomeNotificationIcon = ({ isSelected }) => (
    <img
      src={TopBarHomeNotificationImage}
      alt="notification"
      style={{ filter: isSelected ? 'brightness(0) invert(1)' : 'none' }}
    />
  );

const TopBarUserIcon = ({ isSelected,logout }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const {isMobile} = useMobileResponsive()
    const [popUpOpen,setOpen] = useState(false)
    const dispatch=useDispatch()
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const CompleteProfilePopUp = ()=>{
      // const [open, setOpen] = useState(false);

      const [formData, setFormData] = useState({});
      console.log(formData,"RAEES")
      const handleFieldChange = (fieldName, value) => {
        setFormData((prevData) => ({ ...prevData, [fieldName]: value }));
      };

      // const handleClickOpen = () => {
      //   setOpen(true);
      // };
    
      const handleClose = () => {
        setOpen(false);
      };
      const handleSubmit = ()=>{
      console.log(formData);
      setFormData({})
      }
      const LabourList = [
        {
            label:'Name',
            name:"name",
            type:'text',
            fullWidth:true
        },
        {
            label:'Email',
            name:"email",
            type:'email',
            fullWidth:true
    
        },
        {
            label: 'Address',
            name: "address",
            type: 'text',
            fullWidth:true
    
        },
        {
            label: 'Mobile Number',
            name: "mobile_number",
            type: 'number',
            fullWidth:true
    
        },
    ]
      return(
        <Dialog fullWidth open={popUpOpen} onClose={()=>setOpen(false)} maxWidth={'xs'}>
          <Box mx={2}>
            <Grid xs={12} container flexDirection={'column'}>
              <Grid my={1} item fontSize={20} >Update Your Profile</Grid>
              <Grid item><CreateTextFields fields={LabourList.slice(0,1)} onChange={handleFieldChange}  formField={formData}/></Grid>
              <Grid item><CreateTextFields fields={LabourList.slice(1,2)} onChange={handleFieldChange}  formField={formData}/></Grid>
              <Grid item><CreateTextFields fields={LabourList.slice(2,3)} onChange={handleFieldChange}  formField={formData}/></Grid>
              <Grid item><CreateTextFields fields={LabourList.slice(3,4)} onChange={handleFieldChange}  formField={formData}/></Grid>
              <Grid container spacing={2} my={1} justifyContent={'flex-end'}>
                <Grid item><Button onClick={handleClose} variant='contained' color='whiteBackground'>Close</Button></Grid>
                <Grid item><Button variant='contained' color='options'>Submit</Button></Grid>
              </Grid>

            </Grid>
          </Box>
          </Dialog>
      )
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return(
    <Box >
      <img
        src={TopBarHomeUsersImage}
        alt="users"
        style={{ filter: isSelected ? 'brightness(0) invert(1)' : 'none' ,cursor:'pointer'}}
        onClick={handleClick}

      />

    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      sx={{mt:1}}
    >
      <Box display={'flex'} flexDirection={'column'}>
      <Button onClick={()=>setOpen(true)} style={{padding:0,color:'rgb(173,73,112)'}}>
      <Typography fontWeight={'bold'} fontSize={12} sx={{ px: 2 ,py:1,textTransform:'none'}}>Update Your Profile</Typography>
      </Button>
      <CompleteProfilePopUp/>
      <Button onClick={logout} style={{padding:0,color:'rgb(173,73,112)'}}>
      <Typography fontWeight={'bold'} fontSize={12} sx={{ px: 2 ,py:1,textTransform:'none'}}>Logout</Typography>
      </Button>
      </Box>
    </Popover>
    </Box>

)};

const TopBarSettingsIcon = ({ isSelected }) => (
<img
    src={TopBarHomeSettingsImage}
    alt="settings"
    style={{ filter: isSelected ? 'brightness(0) invert(1)' : 'none' }}
/>
);

export {
    TopBarHomeNotificationIcon,
    TopBarSettingsIcon,
    TopBarUserIcon
}