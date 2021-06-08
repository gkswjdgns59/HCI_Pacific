import React, {useEffect} from 'react';
import { AccordionSummary,AccordionDetails,Accordion,InputAdornment, ListItemAvatar, Chip, List, ListItem, ListItemText, ListItemSecondaryAction, Checkbox, Divider, Button, TextField, DialogContent, Dialog, DialogActions, DialogContentText, DialogTitle, Typography, Avatar} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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
import firebase from './Firebase';
import Auth from './Auth';

export default function SelectGuestDialog(props) {
    const userRef=firebase.database();
    const color_Set=['#e6e6fa','#faece6','#e6f3fa','#e7fae6','#faf8e6']
    const [objectData, setObjectData] = React.useState({});
    const [listData, setListData] = React.useState([]);
    const [checked, setChecked] = React.useState({});
    const [chipData, setChipData] = React.useState([]);
    const callbackFunction = props.callbackFromParent;
    const [defaultData, setDefaultData] = React.useState([]);
    
    useEffect(()=>{
        let inputObj = {};
        let loadedGuest = [];
        userRef.ref(Auth.getAuth()+'/Guests/').once('value',snapshot=>{
            const guests = snapshot.val();
            for (let i in guests){
                inputObj[i] = guests[i];
                loadedGuest.push(i);
            }
        },[]);
        setObjectData(inputObj);
        setListData(loadedGuest);
        setDefaultData(loadedGuest);
    }, []);

    const [open, setOpen] = React.useState(false);
    const [newGuest, setNewGuest] = React.useState([]);
    const [nameValue, setNameValue] = React.useState('');
    const [numberValue, setNumberValue] = React.useState('');
    const [expanded, setExpaned] = React.useState(false);

    const classes = useStyles();
    const handleClickOpen = () => {
        setOpen(true);
        let checkedInit = {};
        let sortDataParent = [];
        for (let i=0; i<props.dataFromParent.length; i++){
            
            sortDataParent.push(props.dataFromParent[i].label);
        }
        for (let i in objectData){
            if (sortDataParent.includes(i)){
                checkedInit[i] = true;
            }else{
                checkedInit[i] = false;
            }
        }
        setChecked(checkedInit);
        setChipData(props.dataFromParent);
    };

    const handleClose = () => {
        setOpen(false);
        setExpaned(false);
    };

    const handleCloseAdd = () => {
        const resultData={};
        for (let i=0; i<chipData.length; i++){
            resultData[chipData[i].label]=objectData[chipData[i].label];
        }
        callbackFunction(resultData);
        handleClose();
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
            for (let i=0; i<defaultData.length; i++){
                if (inputText===defaultData[i].slice(0, inputText.length).toLowerCase()){
                    resultList.push(defaultData[i]);
                }
            }
            setListData(resultList);
        }else{
            setListData(defaultData);
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
            const randomBlobNum = Math.floor(Math.random(0)*12+1);
            const randomBlobFill = Math.floor(Math.random(0)*5+1)
            objectData[newGuest[0]]={'blob_num':randomBlobNum, 'blob_fill':randomBlobFill, 'coins':0, 'number':newGuest[1]};
            setObjectData(objectData);
            userRef.ref(Auth.getAuth()+'/Guests/'+ newGuest[0] ).set({'blob_num':randomBlobNum, 'blob_fill':randomBlobFill, 'coins':0, 'number':newGuest[1]});
            setChipData(copyData);
            setChecked(copyChecked);
            setListData(copyList);
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
            fontSize: 16,
            fontWeight:300,
            color: "#222222"
        },
        palette :{
            primary: {
                main: "#A9A9FF"
            },
            secondary:{
                main: "#ABABAB"
            }
        }
    })

    return (
    <span>
        <ThemeProvider theme={theme}>
            <img src='/empty-blob.png' width='60' height='60' onClick={handleClickOpen} style={{cursor:"pointer"}}></img>
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
                            {makeblob(objectData[guest].blob_num, color_Set[objectData[guest].blob_fill-1])}
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
