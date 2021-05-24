import React, { Component } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/CardContent';

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




export const Single_guest =({num,fill,showStamp,name}) => {
    const classes=useStyles();
    const color_Set=['#e6e6fa','#faece6','#e6f3fa','#e7fae6','#faf8e6']
    if(showStamp){
        return(
            <div align='center' style={{paddingTop:'10%'}}>
                {makeblob(num,color_Set[fill-1])}
                <Typography align='center' className={classes.root}>
                    {name}
                </Typography>
                <Typography align='center' className={classes.root}>
                    Stamp <i className="fas fa-plus"></i> <i className="fas fa-minus"></i>
                </Typography>
            </div>
        )
    }
    else{
        return(
            <div align='center'>
                {makeblob(num,fill)}
            </div>
        )
    }
}


const makeblob=(num,fill)=>{
    
    switch(num) {
        case 1:
            return (
                <Blob1 fill={fill} width='60%' height='60%'></Blob1>
            )
        case 2:
            return (
                <Blob2 fill={fill} width='60%' height='60%'></Blob2>
            )
        case 3:
            return (
                <Blob3 fill={fill} width='60%' height='60%'></Blob3>
            )
        case 4:
            return (
                <Blob4 fill={fill} width='60%' height='60%'/>
            )
        case 5:
            return (
                <Blob5 fill={fill} width='60%' height='60%'/>
            )
        case 6:
            return (
                <Blob6 fill={fill} width='60%' height='60%'/>
            )
        case 7:
            return (
                <Blob7 fill={fill} width='60%' height='60%'/>
            )
        case 8:
            return (
                <Blob8 fill={fill} width='60%' height='60%'/>
            )
        case 9:
            return (
                <Blob9 fill={fill} width='60%' height='60%'/>
            )
        case 10:
            return (
                <Blob10 fill={fill} width='60%' height='60%'/>
            )
        case 11:
            return (
                <Blob11 fill={fill} width='60%' height='60%'/>
            )
        case 12:
            return (
                <Blob12 fill={fill} width='60%' height='60%'/>
            )
        case 13:
            return (
                <Blob13 fill={fill} width='60%' height='60%'/>
            )
        case 14:
            return (
                <Blob14 fill={fill} width='60%' height='60%'/>
            )
        case 15:
            return (
                <Blob15 fill={fill} width='60%' height='60%'/>
            )
        case 16:
            return (
                <Blob16 fill={fill} width='60%' height='60%'/>
            )
        case 17:
            return (
                <Blob17 fill={fill} width='60%' height='60%'/>
            )
        case 18:
            return (
                <Blob18 fill={fill} width='60%' height='60%'/>
            )
        case 19:
            return (
                <Blob19 fill={fill} width='60%' height='60%'/>
            )
        case 20:
            return (
                <Blob20 fill={fill} width='60%' height='60%'/>
            )
    }
}

const useStyles = makeStyles((theme)=>({
    root: {
        textTransform: 'none',
        width: 120,
        height: 30,
        fontWeight: 300,
        fontFamily: 'Poppins',
        
        color: '#A6A6A6',
        fontSize: '14px',
    },
    Blob: {
        paddingTop:20,
        width:120,
        height:120
    }
}))