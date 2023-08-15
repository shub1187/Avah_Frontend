import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';

const CreateCustomerDialog = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const textfield = [
        {
            label:'Name',
            name:"name",
            type:'text'
        },
        {
            label:'Email',
            name:"email",
            type:'email'
        },
        {
            label: 'Mobile',
            name: "name",
            type: 'tel'
        },
        {
            label: 'Gender',
            name: "name",
            type: 'text'
        },
        {
            label: 'Tax Number',
            name: "taxNumber",
            type: 'number'
        },
        {
            label: 'Address',
            name: "address",
            type: 'text'
        },
        {
            label: 'Country',
            name: "country",
            type: 'text'
        },
        {
            label: 'State',
            name: "state",
            type: 'text'
        },
        {
            label: 'City',
            name: "city",
            type: 'text'
        },
        {
            label: 'Pincode',
            name: "pincode",
            type: 'number'
        },
    ]
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default CreateCustomerDialog