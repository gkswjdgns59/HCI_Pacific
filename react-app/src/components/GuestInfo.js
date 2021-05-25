import React, { Component } from 'react';
import { TableContainer, Table, TableBody, TableHead, TableRow, TableCell, Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Switch, Link, Route, BrowserRouter as Router, BrowserRouter } from 'react-router-dom';
import {ReactComponent as Blob1} from '../blobs/blob-haikei (1).svg';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import GuestInfoTab from './GuestInfoTab.js'

const useStyles = makeStyles((theme) => ({
    Blob: {
        width:200,
        height:200,
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
    }
  }));



export default function GuestInfo(){
    const classes = useStyles();
    const [coinData, setCoinData] = React.useState(10);
    const handleCoin = (value) =>{
        const copyCoin = coinData+value;
        setCoinData(copyCoin)
    }
    const parentCallback = (dataFromChild) => {
        const copyCoin = coinData-dataFromChild;
        setCoinData(copyCoin);
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Blob1 fill='#E6E6FA' className={classes.Blob}></Blob1>
                    </div>
                    <div className="col-md-3">
                        <div className={classes.Box}>
                            <p className={classes.Name}>Woojung Jun</p>
                            <p className={classes.Number}>010 1234 5678</p>
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
            <GuestInfoTab dataFromParent={coinData} callbackFromParent={parentCallback}></GuestInfoTab>
        </div>
    )
}