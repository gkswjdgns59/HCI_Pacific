import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import {ReactComponent as Blob1} from '../blobs/blob-haikei (1).svg';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { colors } from "@material-ui/core";
import firebase from './Firebase.js'
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

  const userRef = firebase.database();
  let partyinfos = []
  const month_list=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
//   let test = []
//   let testdict = {"partyname": "HBD JR", "dateTime": "1234-1234", "guests": [1,2,3]}
//   test.push(testdict)

export const Single_party = ({num,fill,index}) => {
    var fill=4
    var idx = index
    userRef.ref('/Parties/').on('value', snapshot =>{
        for(let pty in snapshot.val()){
            var dict = {};
            dict["partyname"] = pty;
            let today = new Date();
            let nowyear = today.getFullYear();
            let nowmonth = today.getMonth()+1;
            let nowdate = today.getDate()
            let nowtime = today.getHours()
            var data = snapshot.val()[pty];
            var newdateTime = data.dateTime;
            var time = newdateTime.substring(newdateTime.length-5,newdateTime.length)
            var year = newdateTime.substring(0, newdateTime.length-12)
            var month = newdateTime.substring(newdateTime.length-11, newdateTime.length-9)
            var date = newdateTime.substring(newdateTime.length-8, newdateTime.length-6)
            if(nowyear<year){
                dict["when"]="Upcoming"
            }else if (nowmonth<month){
                dict["when"]="Upcoming"
            }else if (nowdate<date){
                dict["when"]="Upcoming"
            }else if (nowtime<time){
                dict["when"]="Upcoming"
            }else{
                dict["when"]="Previous"
            }
            month = month_list[month-1]
            newdateTime = year+" "+month+" "+date+" "+time
            dict["dateTime"] = newdateTime;
            userRef.ref('/Parties/'+pty+'/guests').on('value', snapshot =>{
                var nameslist = [];
                for(let names in snapshot.val()){
                    nameslist.push(names);
                }
                dict["guests"] = nameslist;
            })
            partyinfos.push(dict)
            // listformap.push(++cnt)
        }
    })


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
                        {partyinfos[idx]["when"]}
                    </Typography>
                   <br />
                    <Typography variant="h5" component="h4"  style={{fontFamily:'Poppins'}}>
                        {partyinfos[idx]["partyname"]}
                    </Typography>
                    
                    <Badge className={classes.badge}
                                overlap="circle"
                                anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "right"
                                }}
                                badgeContent={<SmallAvatar alt={String(partyinfos[idx]["guests"].length)} src="/static/images/avatar/1.jpg" />}
                            >
                                <BigAvatar
                                style={{ backgroundColor: { color } }}
                                alt="S"
                                src="/static/images/avatar/2.jpg"
                                
                                ><Blob1 fill={fill_color}></Blob1></BigAvatar>
                            </Badge>
                    <Typography  className={classes.text} color="textSecondary" style={{fontFamily:'Poppins', fontSize:12}}>
                        {partyinfos[idx]["dateTime"]}
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
