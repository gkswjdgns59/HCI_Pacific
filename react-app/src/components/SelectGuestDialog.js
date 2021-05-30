import React from 'react';
import { AccordionSummary,AccordionDetails,Accordion,InputAdornment, ListItemAvatar, Chip, List, ListItem, ListItemText, ListItemSecondaryAction, Checkbox, Divider, Button, TextField, DialogContent, Dialog, DialogActions, DialogContentText, DialogTitle, Typography, Avatar} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {ReactComponent as Blob1} from '../blobs/blob-haikei (1).svg';
import {ReactComponent as Blob2} from '../blobs/blob-haikei (2).svg';
import {ReactComponent as Blob3} from '../blobs/blob-haikei (3).svg';
import {ReactComponent as Blob4} from '../blobs/blob-haikei (4).svg';
import {ReactComponent as Blob5} from '../blobs/blob-haikei (5).svg';
import {ReactComponent as Blob6} from '../blobs/blob-haikei (6).svg';
import {ReactComponent as Blob7} from '../blobs/blob-haikei (7).svg';
import {ReactComponent as Blob8} from '../blobs/blob-haikei (8).svg';
import {ReactComponent as Blob9} from '../blobs/blob-haikei (9).svg';
import {ReactComponent as Blob10} from '../blobs/blob-haikei (10).svg';
import {ReactComponent as Blob11} from '../blobs/blob-haikei (11).svg';
import {ReactComponent as Blob12} from '../blobs/blob-haikei (12).svg';
import {ReactComponent as Blob13} from '../blobs/blob-haikei (13).svg';
import {ReactComponent as Blob14} from '../blobs/blob-haikei (14).svg';
import {ReactComponent as Blob15} from '../blobs/blob-haikei (15).svg';
import {ReactComponent as Blob16} from '../blobs/blob-haikei (16).svg';
import {ReactComponent as Blob17} from '../blobs/blob-haikei (17).svg';
import {ReactComponent as Blob18} from '../blobs/blob-haikei (18).svg';
import {ReactComponent as Blob19} from '../blobs/blob-haikei (19).svg';
import {ReactComponent as Blob20} from '../blobs/blob-haikei (20).svg';

const makeblob=(num,fill)=>{
    
    switch(num) {
        case 1:
            return (
                <Blob1 fill={fill} width='15%' height='15%'></Blob1>
            )
        case 2:
            return (
                <Blob2 fill={fill} width='15%' height='15%'></Blob2>
            )
        case 3:
            return (
                <Blob3 fill={fill} width='15%' height='15%'></Blob3>
            )
        case 4:
            return (
                <Blob4 fill={fill} width='15%' height='15%'/>
            )
        case 5:
            return (
                <Blob5 fill={fill} width='15%' height='15%'/>
            )
        case 6:
            return (
                <Blob6 fill={fill} width='15%' height='15%'/>
            )
        case 7:
            return (
                <Blob7 fill={fill} width='15%' height='15%'/>
            )
        case 8:
            return (
                <Blob8 fill={fill} width='15%' height='15%'/>
            )
        case 9:
            return (
                <Blob9 fill={fill} width='15%' height='15%'/>
            )
        case 10:
            return (
                <Blob10 fill={fill} width='15%' height='15%'/>
            )
        case 11:
            return (
                <Blob11 fill={fill} width='15%' height='15%'/>
            )
        case 12:
            return (
                <Blob12 fill={fill} width='15%' height='15%'/>
            )
        case 13:
            return (
                <Blob13 fill={fill} width='15%' height='15%'/>
            )
        case 14:
            return (
                <Blob14 fill={fill} width='15%' height='15%'/>
            )
        case 15:
            return (
                <Blob15 fill={fill} width='15%' height='15%'/>
            )
        case 16:
            return (
                <Blob16 fill={fill} width='15%' height='15%'/>
            )
        case 17:
            return (
                <Blob17 fill={fill} width='15%' height='15%'/>
            )
        case 18:
            return (
                <Blob18 fill={fill} width='15%' height='15%'/>
            )
        case 19:
            return (
                <Blob19 fill={fill} width='15%' height='15%'/>
            )
        case 20:
            return (
                <Blob20 fill={fill} width='15%' height='15%'/>
            )
    }
}

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
    },
    Head:{
        display: 'block',
        fontSize: 13,
        fontWeight: 400,
        marginLeft: '1%'

    },
    ButtonDiv:{
        marginTop: '1%'
    },
    ButtonAcco:{
        float: 'right'
    }
  }));


export default function SelectGuestDialog() {
    let inputObj = {'Sehoon Lim':{"blob_num": 2, "blob_fill":1}, 'Byungwoo Choi':{"blob_num": 1, "blob_fill":5}, 'Jaeryung Chung':{"blob_num": 5, "blob_fill":3}, 'Jeonghoon Han':{"blob_num": 7, "blob_fill":2},'Woojung Jun':{"blob_num": 6, "blob_fill":4}} //아까 니가 말한 input

    let loadedGuest = [];
    for (let person in inputObj){
        loadedGuest.push(person)
    }
    const color_Set=['#e6e6fa','#faece6','#e6f3fa','#e7fae6','#faf8e6']
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
    const [newGuest, setNewGuest] = React.useState([]);
    const [nameValue, setNameValue] = React.useState('');
    const [numberValue, setNumberValue] = React.useState('');
    const [expanded, setExpaned] = React.useState(false);

    const classes = useStyles();
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setChipData([]);
        setExpaned(false);
        setChecked(()=>{
            const guestObject = {};
            for (let i=0; i<listData.length; i++){
                guestObject[`${listData[i]}`]=false;
            }
            return guestObject;
        })
    };

    const handleCloseAdd = () => {
        const resultData={};
        for (let i=0; i<chipData.length; i++){
            resultData[chipData[i].label]=inputObj[chipData[i].label];
        }
        console.log(resultData); //output consolelog 대신 callback 함수 넣어서 부모 component로 올리면 될 듯
        handleClose();
    }

    const onListChange = (value) => {
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
    
    const handleAccordion = () => {
        if (newGuest[0]!==null){
            let copyList = [...listData];
            let copyData = [...chipData];
            let copyChecked = JSON.parse(JSON.stringify(checked));
            copyChecked[newGuest[0]]=true;
            copyList.push(newGuest[0]);
            copyData.push({
                key: newGuest[0],
                label: newGuest[0]
            })
            inputObj[newGuest[0]]={'blob_num':Math.floor(Math.random(0)*5+1), 'blob_fill':Math.floor(Math.random(0)*5+1)};
            console.log(inputObj)
            setChipData(copyData);
            setChecked(copyChecked);
            onListChange(copyList);
            setNewGuest([]);
            setNumberValue('');
            setNameValue('');
            setExpaned(false);
        }
    }

    const newName = (event) => {
        setNameValue(event.target.value);
        if (event.target.value.trim()!==''){
            let copyList = [...newGuest];
            copyList[0]=event.target.value.trim();
            setNewGuest(copyList);
        }
    }

    const newNumber = (event) => {
        setNumberValue(event.target.value);
        if (event.target.value.trim()!==''){
            let copyList = [...newGuest];
            copyList[1]=event.target.value.trim();
            setNewGuest(copyList);
        }
    }

    const handleExpanded = () => {
        if (expanded){
            setExpaned(false);
        }else{
            setExpaned(true);
        }
        
    }

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

    return (
    <span>
        <ThemeProvider theme={theme}>
            {/* <Button variant="outlined" onClick={handleClickOpen}>
                Select guests from Guest book
            </Button> */}
            <img src='/empty-blob.png' width='80' height='80' onClick={handleClickOpen} style={{margin:30}}></img>
            <Dialog open={open} onClose={handleClose} maxWidth={'sm'} fullWidth={true}>
                <DialogTitle>
                    Select guests from Guest book
                </DialogTitle>
                <DialogContent component="ul" className={classes.chips}>
                    {chipData.map((data)=>{
                    return (
                        <li key={data.label}>
                            <Chip
                                label={data.label}
                                variant="outlined"
                                onDelete={handleDelete(data.label)}
                                className={classes.chip}
                                
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
                <List className={classes.root}>
                    {listData.map((guest)=>(
                        <ListItem button onClick={()=>handleListItemClick(guest)} key={guest}>
                            {/* <Blob1 fill='#E6E6FA' className={classes.Blob}></Blob1> */}
                            {makeblob(inputObj[guest].blob_num, color_Set[inputObj[guest].blob_fill-1])}
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
                <Accordion expanded={expanded} onChange={handleExpanded}>
                    <AccordionSummary expandIcon = {<ExpandMoreIcon />}>
                        <Typography className={classes.Head}>Add new guest</Typography>
                    </AccordionSummary>
                    <Divider />
                    <AccordionDetails>
                        <div className='row'>
                            <div className='col-sm-12'>
                                <Typography>
                                    Insert the name and phone number to add new guest
                                </Typography>
                            </div>
                            <div className='col-sm-12'>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    label="Name"
                                    fullWidth
                                    color="primary"
                                    onChange={newName}
                                    value={nameValue}
                                />
                            </div>
                            <div className='col-sm-12'>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    label="Phone Number"
                                    fullWidth
                                    color="primary"
                                    onChange={newNumber}
                                    value={numberValue}
                                />
                            </div>
                            <div className='col-sm-12' className={classes.ButtonDiv}>
                                <Button onClick={handleAccordion} variant="outlined" color="primary" className={classes.ButtonAcco}>
                                    Add a new guest
                                </Button>
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Divider />
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
    );
}