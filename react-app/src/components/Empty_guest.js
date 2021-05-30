import React  from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, DialogContent, Dialog, DialogActions, DialogContentText, DialogTitle, Typography } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import firebase from './Firebase'

const useStyles = makeStyles((theme)=>({
    root: {
        width:120,
        height:150,
        color:'e2e2e2',
        paddingTop:55
    },
    text: {
        color:'#e2e2e2'
    }
}));

export const Empty_guest = () => {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState('');
    const [number,setNumber] = React.useState('')

    const userRef=firebase.database()

    const onChangeName = (event) => {
        setName(event.target.value)
        
    }

    const onChangeNumber = (event) => {
        setNumber(event.target.value)
        
    }


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleCloseAdd = () => {
        var data={};
        data['coins']=0;
        data['number']=number;
        data['parties']=null;
        data['blob_fill']=Math.floor(1+Math.random()*5)
        data['blob_num']=Math.floor(1+Math.random()*20)
        userRef.ref('/Guests/'+name).set(data)
        setOpen(false);
    };
    const theme = createMuiTheme({
        typography :{
            fontFamily:"Poppins",
            fontSize: 20,
            fontWeight:300,
            color: "#222222"
        },
        palette :{
            primary: {
                main: "#A9A9FF"
            }
        }
    })
    const classes = useStyles(); 
    return (
        <span>
            <ThemeProvider theme={theme}>
                <div align='center' className={classes.root} onClick={handleClickOpen} style={{paddingTop:30}}>
                    <img src='/empty-blob.png' width='80' height='80'></img>
                </div>
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
                        onChange={onChangeName}
                    />
                    <TextField
                        margin="dense"
                        label="Phone Number"
                        fullWidth
                        color="primary"
                        onChange={onChangeNumber}
                        />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleCloseAdd} variant="outlined" color="primary">
                        Add
                    </Button>
                    </DialogActions>
                </Dialog>
            </ThemeProvider>
        </span>
    )
}