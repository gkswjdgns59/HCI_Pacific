import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import { CardActionArea, CardHeader, makeStyles, Typography, Grid } from '@material-ui/core';

const useStyles=makeStyles((theme)=>({
    root: {
        border: 0
    },
    text: {
        textTransform: 'none',
        width: 120,
        height: 30,
        fontWeight: 300,
        fontFamily: 'Poppins',
        alignItems: 'center',
        
        color: '#222222',
        fontSize: '14px',
    },
    color:{
        backgroundColor: '#222222'
    },
    cardMedia: {
        paddingTop: '56.5%',
        color: '#222222'
    },
    overlay:{
        position: 'absolute',
        top: '33%',
        left: '50%',
        transform: 'translate(-50%,-50%)',

        textTransform: 'none',
        fontWeight: 300,
        fontFamily: 'Poppins',
        
        color: '#222222',
        fontSize: '14px',
    }
}))

export const Single_party = ({}) => {
    const classes=useStyles();
    return (
        <div style={{paddingTop:'20px'}}>
            <CardActionArea>
                <Card style={{border:"none", boxShadow:"none", position:'relative'}}>
                    <CardMedia className={classes.cardMedia} image='/empty-rectangle.png'>
                        <Typography className={classes.text, classes.overlay}>
                            HBD Jaeryung!
                        </Typography>
                    </CardMedia>
                    <CardContent>
                        <Typography className={classes.text} textalign='center'>
                            HBD Jaeryung!
                        </Typography>
                    </CardContent>
                </Card>
            </CardActionArea>
        </div>
    )
}
