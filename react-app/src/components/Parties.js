import React, { useEffect, useState, Component } from 'react'
import {Single_party} from './Single_party';
import MenuItem from '@material-ui/core/MenuItem';
import NativeSelect from '@material-ui/core/Select';
import { FormControl, InputLabel, makeStyles } from '@material-ui/core';
import firebase from './Firebase'
import {Empty_party} from './Empty_party';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import {  Paper } from '@material-ui/core';
// import {Parties_page_tab} from './Parties_page_tab'

// const guests_list=[{num:"1",fill:"#222222"},{num:"2",fill:"#555555"},{num:"1",fill:"#aaaaaa"},{num:"3",fill:"#333333"},{num:"1",fill:"#555555"},{num:"2",fill:"#555555"},{num:"2",fill:"#aaaaaa"}]

const parties_list=[1,2,3,4,5]


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
        color: '#A6A6A6',
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

    const [type, setType] = React.useState('');
    const [open, setOpen] = React.useState(false);
    
    const handleChange = (event) => {
        setType(event.target.value);
      };
    
    const handleClose = () => {
        setOpen(false);
      };
    
    const handleOpen = () => {
    setOpen(true);
    };
    
    const parties=parties_list.map(id=>{
        return (
            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2" key={id}>
                <Single_party />
            </div>
        )
    })

    // useEffect(() => {
    //     userRef()

    // })

    return(
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-md-8"><FormControl className="col-xs-2 col-sm-2 col-md-8 col-lg-2">
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
                    >
                        <MenuItem value="All" className={classes.text}>All</MenuItem>
                        <MenuItem value="Previous" className={classes.text}>Previous</MenuItem>
                        <MenuItem value="Upcoming" className={classes.text}>Upcoming</MenuItem>
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


            <div class="container">
                <div class="row">
                    <div class="col-md-4"></div>
                    <div class="col-md-offset-4 col-md-4"></div>
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