import React, { Component } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme)=>({
    root: {
        width:120,
        height:150,
        color:'e2e2e2',
        paddingTop:40
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
                <img src={require('../images/empty-party.png').default} width='80' height='80' onClick={() => { alert('clicked') }}></img>
            </div>
        </div>
    )
}