import React from 'react';
import { Button, TextField, DialogContent, Dialog, DialogActions, DialogContentText, DialogTitle, Typography } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


export default function AddGuestDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const theme = createMuiTheme({
      typography :{
          fontFamily:"Poppins",
          fontSize: 16,
          fontWeight:300,
          color: "#222222"
      },
      palette :{
        primary: {
            main: "#A9A9FF"
        }
    }
  })

  return (
    <span>
      <ThemeProvider theme={theme}>
        <Button variant="outlined" onClick={handleClickOpen}>
          Add new guest
        </Button>
        <Dialog open={open} onClose={handleClose} maxWidth={'sm'} fullWidth={true}>
            <DialogTitle>
                Add new guest
            </DialogTitle>
            <DialogContent dividers>
            <DialogContentText>
                Insert the name and phone number to add new guest
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                label="Name"
                fullWidth
                color="primary"
            />
            <TextField
                autoFocus
                margin="dense"
                label="Phone Number"
                fullWidth
                color="primary"
                />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>
                Cancel
            </Button>
            <Button onClick={handleClose} variant="outlined" color="primary">
                Add
            </Button>
            </DialogActions>
        </Dialog>
      </ThemeProvider>
    </span>
  );
}

