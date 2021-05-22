import React from 'react';
import { InputAdornment, ListItemAvatar, Chip, List, ListItem, ListItemText, ListItemSecondaryAction, Checkbox, Divider, Button, TextField, DialogContent, Dialog, DialogActions, DialogContentText, DialogTitle, Typography, Avatar} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {ReactComponent as Blob1} from '../blobs/blob-haikei (1).svg';
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles((theme) => ({
    root: {
      position: 'relative',
      overflow: 'auto',
      maxHeight: 300
    },
    chips:{
        listStyle: 'none',
        display: 'flex',
        flexWrap: 'wrap'
    },
    chip:{
        margin: theme.spacing(0.5)
    },
    Blob: {
        width:60,
        height:60,
        marginRight: 20
    },
    text: {
        marginLeft: 24,
        marginRight: 24
    }
  }));


export default function SelectGuestDialog() {
    //list only for demo
    const loadedGuest = ['Sehoon Lim', 'Byungwoo Choi', 'Jeonghoon Han', 'Jaeryung Chung', 'Woojung Jun', 'Gahyeon Lee', 'Jayun Ku', 'Soeun Kim', 'Seongjun Hwang', 'Seokju Lee'];
    //
    
    const [open, setOpen] = React.useState(false);
    const [checked, setChecked] = React.useState(()=>{
        const guestObject = {};
        for (let i=0; i<loadedGuest.length; i++){
            guestObject[`${loadedGuest[i]}`]=false;
        }
        return guestObject;
    });
    const [chipData, setChipData] = React.useState([]);
    const [listData, setListData] = React.useState(loadedGuest);

    const classes = useStyles();
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setChipData([]);
        setChecked(()=>{
            const guestObject = {};
            for (let i=0; i<loadedGuest.length; i++){
                guestObject[`${loadedGuest[i]}`]=false;
            }
            return guestObject;
        })
    };

    const onListChange = (value) => {
        // let copyList = [...loadedGuest];
        // setListData(copyList.filter((guest)=>guest===value));
        setListData(value);
    }

    const handleToggle = (value) => () => {
        let copyData = [...chipData];
        if (checked[value]===false){
            checked[value]=true;
            copyData.push({
                key: value,
                label: value
            });
            setChipData(copyData);
        }else{
            checked[value]=false;
            setChipData(copyData.filter((chip)=>chip.key !== value));
        }
    }

    const handleListItemClick = (value) => {
        let copyData = [...chipData];
        let copyChecked = JSON.parse(JSON.stringify(checked));

        if (copyChecked[value]===false){
            copyChecked[value]=true;
            copyData.push({
                key: value,
                label: value
            });
            setChipData(copyData);
            setChecked(copyChecked);
        }else{
            copyChecked[value]=false;
            setChipData(copyData.filter((chip)=>chip.key !== value));
            setChecked(copyChecked);
        }
    }

    const handleDelete = (value) => () => {
        const copyData = [...chipData];
        setChipData(copyData.filter((chip)=>chip.key !== value));

        const copyChecked = JSON.parse(JSON.stringify(checked));
        copyChecked[value]=false;
        setChecked(copyChecked);
      };

    const handleSearch = (event) => {
        const inputText = event.target.value.trim().toLowerCase();
        let resultList = [];
        if (inputText.length>0){
            for (let i=0; i<loadedGuest.length; i++){
                if (inputText===loadedGuest[i].slice(0, inputText.length).toLowerCase()){
                    resultList.push(loadedGuest[i]);
                }
            }
            onListChange(resultList);
        }else{
            onListChange(loadedGuest);
        }
    }
    
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
            Select guests from Guest book
        </Button>
        <Dialog open={open} onClose={handleClose} maxWidth={'sm'} fullWidth={true}>
            <DialogTitle>
                Select guests from Guest book
            </DialogTitle>
            <DialogContent component="ul" className={classes.chips}>
                {chipData.map((data)=>{
                return (
                    <li>
                        <Chip
                            label={data.label}
                            variant="outlined"
                            onDelete={handleDelete(data.label)}
                            className={classes.chip}
                            key={data.label}
                        />
                    </li>
                )})}
            </DialogContent>
            <Divider />
            <TextField
                autoFocus
                onChange={handleSearch}
                className={classes.text}
                label= "Search with name"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>
                            <SearchIcon />
                        </InputAdornment>
                    )
                }}
            />
            <List className={classes.root} onListChange={onListChange}>
                {listData.map((guest)=>(
                    <ListItem button onClick={()=>handleListItemClick(guest)} key={guest}>
                        <Blob1 fill='#E6E6FA' class='blob' className={classes.Blob}></Blob1>
                        <ListItemText primary={guest} />
                        <ListItemSecondaryAction>
                            <Checkbox
                                onChange={handleToggle(guest)} checked={checked[guest]} color="primary"
                            />
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
            <Divider />
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