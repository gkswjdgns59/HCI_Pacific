import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import firebase from './Firebase.js'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { Link } from 'react-router-dom';
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




export const Single_guest =({num,fill,showCoin,name,coins}) => {
    const classes=useStyles();
    const color_Set=['#e6e6fa','#faece6','#e6f3fa','#e7fae6','#faf8e6']
    const userRef = firebase.database();
    const [coin, setCoin] = useState(coins)

    const onPlus = () => {
        userRef.ref('/Guests/'+name).update({coins: coin+1})
        setCoin(coin+1)
    }
    const onMinus = () => {
        userRef.ref('/Guests/'+name).update({coins: coin-1})
        setCoin(coin-1)
    }

    const minusButton = () => {
        if(coin>0){
            return (
                <span><i className={`${classes.abled} fas fa-minus`} onClick={onMinus} style={{margin:10}}></i></span>
            )
        }
        else {
            return (
                <span className={classes.minus}><i className={`${classes.disabled} fas fa-minus` } style={{margin:10}}></i></span>
            )
        }
    }

    if(showCoin){
        return(
            <div align='center' style={{paddingTop:'10%'}}>
                <Link to={`/guests/${name}`} style={{textDecoration:'none'}}>
                    {makeblob(num,color_Set[fill-1])}
                </Link>
                <div className={`${classes.root} ${classes.abled}`}>
                    {name}
                </div>
                <Paper className={classes.Paper} style={{boxShadow:'none', border:'1px solid #e2e2e2', paddingBottom:45}}>
                    <Typography className={`${classes.root} ${classes.coin}`}>
                            {minusButton()}
                            <span className={`${classes.abled}`}> <MonetizationOnIcon/>   {coin}</span>
                            <span className={classes.plus} style={{flexDirection:'row', justifyContent:'flex-end', margin:10}}> <i className={`${classes.abled} fas fa-plus`} onClick={onPlus}></i> </span>
                    </Typography>
                </Paper>
            </div>
        )
    }
    else{
        return(
            <div align='center'>
                {makeblob(num,color_Set[fill-1])}
                <div className={`${classes.root} ${classes.abled}`}>
                    {name}
                </div>
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
        // width: 120,
        height: 30,
        fontWeight: 300,
        fontFamily: 'Poppins',
        fontSize: '14px',
    },
    abled: {
        color: '#222222'
    },
    disabled: {
        color: '#e2e2e2'
    },
    Blob: {
        paddingTop:20,
        width:120,
        height:120
    },
    Paper: {
        width : 120,
        height: 35
    },
    coin: {
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%,18%)',
    }
}))
