import React, { Component } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import empty_party_img from '../images/empty_party.png'


const useStyles = makeStyles((theme)=>({
    root: {
        width:'100%',
        // height:,
        color:'e2e2e2',
        paddingTop: '20px'
    },
    text: {
        color:'#e2e2e2'
    }
}));


export const Empty_party = () => {
    const classes = useStyles(); 
    return (
        <div >
            <div align='center' className={classes.root} >
                <img src={empty_party_img} width='100%' onClick={() => { alert('clicked') }}></img>
            </div>
        </div>
    )
}