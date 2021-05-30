import React, { useEffect, useState, Component } from 'react';
import { TableContainer, Table, TableBody, TableHead, TableRow, TableCell, Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Switch, Link, Route, BrowserRouter as Router, BrowserRouter } from 'react-router-dom';
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
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import firebase from './Firebase'
import Header from './Header'
import Roulette from './Roulette.js';

export default function GuestInfo(props){
    const color_Set=['#e6e6fa','#faece6','#e6f3fa','#e7fae6','#faf8e6']
    const classes = useStyles();
    const name = props.match.params.guestname;
    const userRef=firebase.database();
    const [data, setData] = useState({});
    const [coinData, setCoinData] = React.useState(0);
    // const [num, setNum]=React.useState(0)
    // const [fill,setFill] = React.useState(0);
    // const [phone,setPhone] = React.useState('')
    
    useEffect(()=>{
        userRef.ref('/Guests/'+name).once('value',snapshot=>{
            setData(snapshot.val());
            setCoinData(snapshot.val().coins);
        },[])
    }, [])

    const makeblob=(num,fill)=>{
    
        switch(num) {
            case 1:
                return (
                    <Blob1 fill={fill} className={classes.Blob}></Blob1>
                )
            case 2:
                return (
                    <Blob2 fill={fill} className={classes.Blob}></Blob2>
                )
            case 3:
                return (
                    <Blob3 fill={fill} className={classes.Blob}></Blob3>
                )
            case 4:
                return (
                    <Blob4 fill={fill} className={classes.Blob}/>
                )
            case 5:
                return (
                    <Blob5 fill={fill} className={classes.Blob}/>
                )
            case 6:
                return (
                    <Blob6 fill={fill} className={classes.Blob}/>
                )
            case 7:
                return (
                    <Blob7 fill={fill} className={classes.Blob}/>
                )
            case 8:
                return (
                    <Blob8 fill={fill} className={classes.Blob}/>
                )
            case 9:
                return (
                    <Blob9 fill={fill} className={classes.Blob}/>
                )
            case 10:
                return (
                    <Blob10 fill={fill} className={classes.Blob}/>
                )
            case 11:
                return (
                    <Blob11 fill={fill} className={classes.Blob}/>
                )
            case 12:
                return (
                    <Blob12 fill={fill} className={classes.Blob}/>
                )
            case 13:
                return (
                    <Blob13 fill={fill} className={classes.Blob}/>
                )
            case 14:
                return (
                    <Blob14 fill={fill} className={classes.Blob}/>
                )
            case 15:
                return (
                    <Blob15 fill={fill} className={classes.Blob}/>
                )
            case 16:
                return (
                    <Blob16 fill={fill} className={classes.Blob}/>
                )
            case 17:
                return (
                    <Blob17 fill={fill} className={classes.Blob}/>
                )
            case 18:
                return (
                    <Blob18 fill={fill} className={classes.Blob}/>
                )
            case 19:
                return (
                    <Blob19 fill={fill} className={classes.Blob}/>
                )
            case 20:
                return (
                    <Blob20 fill={fill} className={classes.Blob}/>
                )
        }
    }

    const handleCoin = (value) =>{
        const coinUpdate = coinData+value;
        setCoinData(coinUpdate);
        userRef.ref('/Guests/'+name).update({coins: coinUpdate});
    }

    const parentCallback = (dataFromChild) => {
        const coinUpdate = coinData-dataFromChild;
        setCoinData(coinUpdate);
        userRef.ref('/Guests/'+name).update({coins: coinUpdate});
    }
    return (
        <div>
            <Header />
            <div className="container" className={classes.Container}>
                <div className="row">
                    <div className="col-md-3">
                        {makeblob(data.blob_num,color_Set[data.blob_fill-1])}
                    </div>
                    <div className="col-md-3">
                        <div className={classes.Box}>
                            <p className={classes.Name}>{name}</p>
                            <p className={classes.Number}>{data.number}</p>
                        </div>
                    </div>  
                    <div className="col-md-3">
                        <Card variant="outlined" className={classes.Coin}>
                            <div className={classes.Buttons}>
                                <RemoveIcon className={classes.CoinIcon} button onClick={()=>handleCoin(-1)}/>
                                <Typography className={classes.CoinText}>
                                    Coin X {coinData}
                                </Typography>
                                <AddIcon className={classes.CoinIcon} button onClick={()=>handleCoin(1)} />
                            </div>
                        </Card>
                    </div>
                    <div className="col-md-2" />
                </div>
                <div className="row">
                    <div className="col-xs-12"></div>
                </div>
            </div>
            <Roulette dataFromParent={coinData} guestname={name} callbackFromParent={parentCallback}/>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    Blob: {
        width:150,
        height:150,
        display: 'block',
        margin: 'auto',
        textAlign: 'center'
    },
    Box: {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)'
    },
    Name: {
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: 500
    },
    Number: {
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: 300
    },
    Coin:{
        width: 190,
        borderColor: '#EDEDF5',
        borderWidth: 2,
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        padding: '10px 0px 10px 0px'
    },
    CoinText:{
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: 300,
        padding: '0',
        display: 'inline',
        marginLeft: '20%',
        marginRight: '20%'
    },
    CoinIcon: {
        display: 'inline'
    },
    Buttons:{
        textAlign: 'center'
    },
    Container:{
        borderBottom: '1px solid #EAEAEA'
    }
  }));