import React, { useEffect, useState, Component } from 'react'
import {Single_party} from './Single_party';
import MenuItem from '@material-ui/core/MenuItem';
import NativeSelect from '@material-ui/core/Select';
import { Box, FormControl,  makeStyles } from '@material-ui/core';
import firebase from './Firebase'
import SearchIcon from '@material-ui/icons/Search'
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import {  Paper } from '@material-ui/core';
import Empty_party from './Empty_party';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// const guests_list=[{num:"1",fill:"#222222"},{num:"2",fill:"#555555"},{num:"1",fill:"#aaaaaa"},{num:"3",fill:"#333333"},{num:"1",fill:"#555555"},{num:"2",fill:"#555555"},{num:"2",fill:"#aaaaaa"}]
// var cnt = 0
// firebase.database().ref('/Parties/').on('value', snapshot =>{
//     for(let pty in snapshot.val()){
//         cnt++;
//     }
// })
// var parties_list=[]
// for(var i=0;i<cnt;i++){
//     parties_list.push(i)
// }
const theme = createMuiTheme({
    typography :{
        fontFamily:"Poppins",
        //fontSize: 16,
        //fontWeight:300,
        color: "#222222"
    },
    palette :{
        primary: {
            main: "#A9A9FF"
        }
    },
    status: {
          use: '#A9A9FF',
          //fontSize: 200
        },
  })

const useStyles= makeStyles((theme)=>({
    text: {
        textTransform: 'none',
        fontWeight: 300,
        fontFamily: 'Poppins',
        color: '#222222',
        fontSize: '14px',
    },
    dropdown:{
        width:120,
        height:40,
        textTransform: 'none',
        fontWeight: 300,
        fontFamily: 'Poppins',
        color: '#222222',
        fontSize: '14px',
    },
    tab:{
        //borderBottom: '1px solid #222222',
        height: 35,
        width: '100%',
    },
    text: {
        textTransform: 'none',
        width: 100,
        fontWeight: 300,
        fontFamily: 'Poppins',
        color: '#222222',
        fontSize: '14px',
    },
    input:{
        // border: '1px solid #222222',
        textTransform: 'none',
        width: "100%",
        fontWeight: 300,
        fontFamily: 'Poppins',
        color: '#222222',
        fontSize: '20px',
    },
    button:{
        textTransform: 'none',
        fontWeight: 300,
        fontFamily: 'Poppins',
        color: '#A6A6A6',
        fontSize: '18px',
        width: 'auto',
        alignItems:'center'
    }
}))


export default function Parties() {
    const classes=useStyles()
    const userRef = firebase.database();

    const [type, setType] = React.useState('All');
    const [open, setOpen] = React.useState(false);
    const [parties_list, setList] = React.useState([])
    const [search, setSearch] = React.useState('')

    
    const handleChange = (event) => {
        setType(event.target.value);
      };
    
    const handleClose = () => {
        setOpen(false);
      };
    
    const handleOpen = () => {
    setOpen(true);
    };
    
    const handleSearch = (event) => {
        setSearch(event.target.value)
    }


    useEffect(() => {
        userRef.ref('/Parties').on('value',snapshot=>{
            var ref = snapshot.val()
            var data=[];
            // var random_guest=[]
            for(let party in ref){
                var party_info=ref[party]
                var guests = ref[party].guests;
                var random_ind=0;
                if(guests!=undefined){
                    party_info['guest_num']=Object.keys(guests).length
                    random_ind=Math.floor(Math.random()*Object.keys(guests).length)
                }
                else{
                    party_info['guest_num']=0;
                    random_ind=0;
                }
                var cnt=0;
                var random_guest='';
                for(let guest in guests){
                    if(cnt==random_ind){
                        random_guest=guest;
                        break
                    }
                    cnt=cnt+1;
                }
                party_info['random_guest']=random_guest
                data.push(party_info);
            }
            data.sort((a,b) => (b.compareDate-a.compareDate))
            setList(data)
        })
    },[])

    const parties = parties_list.map(party=>{
        return (
                <Single_party 
                partyname={party.name} dateTime={party.dateTime} guest_num={party.guest_num} random_guest={party.random_guest}
                
                type={type} searchname={search}
                key={party.name}/>
        )
    })

    return(
        <ThemeProvider theme={theme}>
        <div>
            <div className="container">
                <Box display="flex">
                    <Box flexGrow={1}>
                        <FormControl>
                            <NativeSelect
                            labelId="parties_type"
                            id="parties_type"
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={type}
                            onChange={handleChange}
                            className={classes.dropdown}
                            defaultValue={type}
                            
                            >
                                <MenuItem value="All" className={classes.text}>All</MenuItem>
                                <MenuItem value="Previous" className={classes.text}>Previous</MenuItem>
                                <MenuItem value="Upcoming" className={classes.text}>Upcoming</MenuItem>
                                {/* <option value={1} className={classes.text} style={{margin:10}}>All</option>
                                <option value={2} className={classes.text} style={{margin:10}}>Previous</option>
                                <option value={3} className={classes.text} style={{margin:10}}>Upcoming</option> */}
                            </NativeSelect>
                        </FormControl>
                    </Box>
                    <Box>
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                            <SearchIcon />
                            </Grid>
                            <Grid item>
                                <TextField 
                                onChange={handleSearch}
                                className={`${classes.input}`}
                                id="input-with-icon-grid" 
                                placeholder="Search with name" 
                                inputProps={{style: {fontSize: 14,  fontFamily: 'Poppins' , color:'#222222', fontWeight:300},}}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                {/* <div className="col-xs-auto">
                    <div className="row" width='100%'>
                        <IconButton className={`${classes.button} col`}><i className="far fa-calendar-alt"></i></IconButton>
                        <IconButton className={`${classes.button} col`}><i className="fas fa-plus"></i></IconButton>
                    </div>
                </div> </Paper>*/}
            </div>
        </div>

        <div className="row">
            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2" align='center'>
                <Empty_party></Empty_party>
            </div>
            {parties}
        </div>
        </ThemeProvider>
    )
}