import React, { useEffect, useState, Component } from 'react'
import {Single_party} from './Single_party';
import MenuItem from '@material-ui/core/MenuItem';
import NativeSelect from '@material-ui/core/Select';
import { FormControl,  makeStyles } from '@material-ui/core';
import firebase from './Firebase'


import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import {  Paper } from '@material-ui/core';
import Empty_party from './Empty_party';

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

const useStyles= makeStyles((theme)=>({
    text: {
        textTransform: 'none',
        fontWeight: 300,
        fontFamily: 'Poppins',
        color: '#222222',
        fontSize: '14px',
    },
    dropdown:{
        width:'100%',
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
        width: '100%',
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

    
    const handleChange = (event) => {
        setType(event.target.value);
      };
    
    const handleClose = () => {
        setOpen(false);
      };
    
    const handleOpen = () => {
    setOpen(true);
    };


    useEffect(() => {
        userRef.ref('/Parties').on('value',snapshot=>{
            var ref = snapshot.val()
            var data=[];
            // var random_guest=[]
            for(let party in ref){
                var party_info=ref[party]
                var guests = ref[party].guests;
                party_info['guest_num']=Object.keys(guests).length
                var random_ind = Math.floor(Math.random()*Object.keys(guests).length)
                var cnt=0;
                var random_guest;
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
            // userRef.ref('/Guests').on('value',snapshot=>{
            //     var ref= snapshot.val()
            //     for(let i=0; i<random_guest.length; i++){
            //         var guest=random_guest[i]
            //         data[i]['blob_num']=ref[guest].blob_num
            //         data[i]['blob_fill']=ref[guest].blob_fill
            //     }
            // })
            console.log(data)
            setList(data)
        })
    },[])

    const parties = parties_list.map(party=>{
        return (
            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                <Single_party 
                partyname={party.name} dateTime={party.dateTime} guest_num={party.guest_num} random_guest={party.random_guest}
                blob_num={party.blob_num} blob_fill={party.blob_fill}
                key={party.name}/>
            </div>
        )
    })

    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8"><FormControl className="col-xs-2 col-sm-2 col-md-8 col-lg-2">
                    <NativeSelect
                    labelId="parties_type"
                    fullWidth
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
                </FormControl></div>
                    <div className="col-md-4"> 
                        <div className="Row">
                            <Paper elevation={0} className={`${classes.tab} col-xs-12`}>
                                {/* <TextField className="col-lg-offset-6 col-lg-2"></TextField> */}
                                {/* <div className="col-md-offset-9 col-sm-offset-8 col-xs-offset-7 col-lg-2 col-md-2 col-sm-2 col-xs-2"> */}
                                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
                                    <Input
                                    placeholder="Search"
                                    className={`${classes.text} ${classes.input}`}
                                    variant='outlined'
                                    >
                                    </Input>
                                </div>
                                <div className="col-xs-auto">
                                    <div className="row" width='100%'>
                                        <IconButton className={`${classes.button} col`}><i className="far fa-calendar-alt"></i></IconButton>
                                        <IconButton className={`${classes.button} col`}><i className="fas fa-plus"></i></IconButton>
                                    </div>
                                </div>
                            </Paper>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="row">
                
               
                
            </div> */}
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-offset-4 col-md-4"></div>
                </div>
            </div>

            <div className="row">
                {parties}
                <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2" align='center'>
                    <Empty_party></Empty_party>
                </div>
            </div>
        </div>
    )
}