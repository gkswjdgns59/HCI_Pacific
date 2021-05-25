import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import {ReactComponent as Blob1} from '../blobs/blob-haikei (1).svg';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { colors } from "@material-ui/core";

import Badge from "@material-ui/core/Badge";

import { CardActionArea, CardHeader, Typography, Grid } from '@material-ui/core';
const color = "#e6e6fa";
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
        padding: '5%',
        //paddingTop: '56.5%',
        color: '#222222'
    },
    cardContent:{
        paddingRight: '50%',
        alignItems:'right'
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
    },
    avatar:{
        alignItems: 'flex-end',
    },
    badge:{
        float: 'right',
        //paddingBottom: '50%'
        //marginBottom: 200
    }
}))

const SmallAvatar = withStyles((theme) => ({
    root: {
      width: 22,
      height: 22,
      border: `2px solid ${theme.palette.background.paper}`,
  
      backgroundColor: "#383838"
    }
  }))(Avatar);
  
  const BigAvatar = withStyles((theme) => ({
    root: {
      width: 55,
      height: 55,
      border: `2px solid ${theme.palette.background.paper}`,
      backgroundColor: '#FFFFFF'
    }
  }))(Avatar);




export const Single_party = ({num,fill}) => {
    var fill=4
    const classes=useStyles();
    const color_Set=['#D4D4FB','#FDDACB','#C3E5F8','#C7E2C6','#FFF9C8']
    const fill_color=color_Set[fill-1]
    return (
        <div style={{paddingTop:'20px'}}>
            <CardActionArea>
                <Card style={{border:"none", boxShadow:"none", position:'relative'}}>


        

                    <CardMedia className={classes.cardMedia} image='/empty-rectangle.png'>
                    <Typography
                        className={classes.text}
                        color="textSecondary"
                        style={{fontFamily:'Poppins'}}
                        gutterBottom
                        >
                        Previous
                    </Typography>
                   <br />
                    <Typography variant="h5" component="h4"  style={{fontFamily:'Poppins'}}>
                        HBD Jaeryung
                    </Typography>
                    
                    <Badge className={classes.badge}
                                overlap="circle"
                                anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "right"
                                }}
                                badgeContent={<SmallAvatar alt="6" src="/static/images/avatar/1.jpg" />}
                            >
                                <BigAvatar
                                style={{ backgroundColor: { color } }}
                                alt="S"
                                src="/static/images/avatar/2.jpg"
                                
                                ><Blob1 fill={fill_color}></Blob1></BigAvatar>
                            </Badge>
                    <Typography  className={classes.text} color="textSecondary" style={{fontFamily:'Poppins', fontSize:12}}>
                        May 13, 2021
                    </Typography>

                        {/* <Typography className={classes.text, classes.overlay}>
                            HBD Jaeryung!
                        </Typography> */}

                        
                    </CardMedia>
                    <CardContent className={classes.cardContent}>
                        <Typography className={classes.avatar} textalign='center'>
                             
                        </Typography>
                        
                    </CardContent>
                </Card>
            </CardActionArea>
        </div>
    )
}
