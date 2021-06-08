import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import {Link, useHistory} from 'react-router-dom'
import { makeStyles, withStyles } from "@material-ui/core/styles";
import firebase from './Firebase.js'
import Badge from "@material-ui/core/Badge";
import Auth from './Auth';
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
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { CardActionArea, Typography } from '@material-ui/core';
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

const makeblob=(num,fill)=>{
    
    switch(num) {
        case 1:
            return (
                <Blob1 fill={fill}></Blob1>
            )
        case 2:
            return (
                <Blob2 fill={fill}></Blob2>
            )
        case 3:
            return (
                <Blob3 fill={fill}></Blob3>
            )
        case 4:
            return (
                <Blob4 fill={fill}/>
            )
        case 5:
            return (
                <Blob5 fill={fill}/>
            )
        case 6:
            return (
                <Blob6 fill={fill}/>
            )
        case 7:
            return (
                <Blob7 fill={fill}/>
            )
        case 8:
            return (
                <Blob8 fill={fill}/>
            )
        case 9:
            return (
                <Blob9 fill={fill}/>
            )
        case 10:
            return (
                <Blob10 fill={fill}/>
            )
        case 11:
            return (
                <Blob11 fill={fill}/>
            )
        case 12:
            return (
                <Blob12 fill={fill}/>
            )
        case 13:
            return (
                <Blob13 fill={fill}/>
            )
        case 14:
            return (
                <Blob14 fill={fill}/>
            )
        case 15:
            return (
                <Blob15 fill={fill}/>
            )
        case 16:
            return (
                <Blob16 fill={fill}/>
            )
        case 17:
            return (
                <Blob17 fill={fill}/>
            )
        case 18:
            return (
                <Blob18 fill={fill}/>
            )
        case 19:
            return (
                <Blob19 fill={fill}/>
            )
        case 20:
            return (
                <Blob20 fill={fill}/>
            )
    }
}

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
//   const month_list=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const month_list=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
//   let test = []
//   let testdict = {"partyname": "HBD JR", "dateTime": "1234-1234", "guests": [1,2,3]}
//   test.push(testdict)

export const Single_party = (data) => {
    var dict={}
    let history=useHistory()

    let today = new Date();
    // let nowyear = parseInt(today.getFullYear());
    // let nowmonth = parseInt(today.getMonth()+1);
    // let nowdate = parseInt(today.getDate())
    // let nowtime = parseInt(today.getHours())

    var newdateTime = data.dateTime;
    var time = newdateTime.substring(newdateTime.length-5,newdateTime.length)
    var year = newdateTime.substring(0, newdateTime.length-12)
    var month = newdateTime.substring(newdateTime.length-11, newdateTime.length-9)
    var date = newdateTime.substring(newdateTime.length-8, newdateTime.length-6)

    var random_guest=data.random_guest
    const [blobnum,setNum]=React.useState(0)
    const [blobfill,setFill]=React.useState(0)
    React.useEffect(()=>{
        userRef.ref(Auth.getAuth()+'/Guests/'+random_guest).on('value',snapshot => {
            var res = snapshot.val()
            if(res!=null){
                setNum(res.blob_num)
                setFill(res.blob_fill)
            }
            else{
            }
        })
    },[])

    // if(nowyear<year){
    //     dict["when"]="Upcoming"
    // }else if (nowmonth<month){
    //     dict["when"]="Upcoming"
    // }else if (nowdate<date){
    //     dict["when"]="Upcoming"
    // }else if (nowtime<time){
    //     dict["when"]="Upcoming"
    // }else{
    //     dict["when"]="Previous"
    // }
    if(Date.parse(newdateTime)<today){
        dict['when']='Previous'
    }
    else{
        dict['when']='Upcoming'
    }

    month = month_list[month-1]
    newdateTime = year+" "+month+" "+date+" "+time
    dict["dateTime"] = newdateTime;

    const classes=useStyles();
    const color_Set=['#D4D4FB','#FDDACB','#C3E5F8','#C7E2C6','#FFF9C8']
    const fill_color=color_Set[blobfill-1]

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const editParty = () => {
        history.replace('/parties/'+data['partyname']+'/edit')
    }

    const deleteParty= () => {
        userRef.ref(Auth.getAuth()+'/Parties/'+data['partyname']).remove()
        setAnchorEl(null);
    }

    var badge_guest = 0
    badge_guest = data.guest_num
    if (badge_guest===0){
        badge_guest="0"
    }

    var party_name=data['partyname']
    if (data['partyname'].length>12){
        party_name=party_name.slice(0, 10) + " . ."
    }

    if((data.type == dict['when'] || data.type=='All')&&(data['partyname'].toLowerCase().replace(/\s/g, '').includes(data.searchname.replace(/\s/g, '').toLowerCase()))){
        return (
            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2" style={{paddingTop:'20px'}}>
                <Link to={`/parties/${data['partyname']}`} style={{textDecoration:'none'}}>
                    <CardActionArea>
                        <Card style={{border:"none", boxShadow:"none", position:'relative'}}>
                            <CardMedia className={classes.cardMedia} image='/empty-rectangle.png'>
                            <Typography
                                className={classes.text}
                                color="textSecondary"
                                style={{fontFamily:'Poppins'}}
                                gutterBottom
                                >
                                {dict["when"]}
                            </Typography>
                        <br />
                            <Typography variant="h6" component="h5"  style={{fontFamily:'Poppins'}}>
                                {party_name}
                            </Typography>
                            
                            <Badge className={classes.badge}
                                        overlap="circle"
                                        anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "right"
                                        }}
                                        //badgeContent={<SmallAvatar alt={String(data.guest_num)} src="/static/images/avatar/1.jpg" />}
                                        badgeContent={badge_guest}                                       
                                    >
                                        <BigAvatar
                                        style={{ backgroundColor: { color } }}
                                        alt="S"
                                        src="/static/images/avatar/2.jpg"
                                        
                                        >{makeblob(blobnum,fill_color)}</BigAvatar>
                                    </Badge>
                            <Typography  className={classes.text} color="textSecondary" style={{fontFamily:'Poppins', fontSize:12}}>
                                {dict["dateTime"]}
                            </Typography>
                       
                            </CardMedia>
                            <CardContent className={classes.cardContent}>
                                <Typography className={classes.avatar} textalign='center'>
                                    
                                </Typography>
                                
                            </CardContent>
                        </Card>
                    </CardActionArea>
                </Link>
                <IconButton aria-label="settings" style={{position:'absolute', right:'2%', top:'10%'}} onClick={handleClick}>
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                    style: {
                        maxHeight: 100,
                        width: 65,
                        boxShadow: 'none'
                    },
                    }}
                >
                    <MenuItem onClick={editParty}>Edit</MenuItem>
                    <MenuItem onClick={deleteParty}>Delete</MenuItem>
                </Menu>

            </div>
        )
    }
    else return(null)
}