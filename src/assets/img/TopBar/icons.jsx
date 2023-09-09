import TopBarHomeNotificationImage from 'assets/img/TopBar/TopBarNotificationIcon.png'
import TopBarHomeUsersImage from 'assets/img/TopBar/TopBarUserIcon.png'
import TopBarHomeSettingsImage from 'assets/img/TopBar/TopBarSettingsIcon.png'
import { Box, Button, Popover, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const TopBarHomeNotificationIcon = ({ isSelected }) => (
    <img
      src={TopBarHomeNotificationImage}
      alt="notification"
      style={{ filter: isSelected ? 'brightness(0) invert(1)' : 'none' }}
    />
  );

const TopBarUserIcon = ({ isSelected,logout }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch=useDispatch()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
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
  >
    <Button onClick={logout} style={{padding:0,color:'rgb(173,73,112)'}}>
    <Typography fontWeight={'bold'} fontSize={12} sx={{ px: 2 ,py:1,textTransform:'none'}}>Logout</Typography>
    </Button>
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