import React, { useEffect, useState, Component } from 'react'
import {Single_party} from './Single_party';
import MenuItem from '@material-ui/core/MenuItem';
import NativeSelect from '@material-ui/core/Select';
import { FormControl, InputLabel, makeStyles } from '@material-ui/core';
import firebase from './Firebase'
import Empty_party from './Empty_party';

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
            <div className="row">
                <FormControl className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <NativeSelect
                    labelId="parties_type"
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
                </FormControl>
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