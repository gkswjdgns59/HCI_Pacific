import React, {useState, useEffect, Component} from 'react';
import OpenPartyGuests from './OpenPartyGuests';
import EditPartyInfo from './EditPartyInfo';
import EditPartyNotices from './EditPartyNotices'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, withStyles, ThemeProvider} from '@material-ui/core/styles';
// import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import firebase from './Firebase'
// import Header from './Header'
import {Typography} from '@material-ui/core';
// import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Auth from './Auth'


//   const theme = createMuiTheme({
//     typography :{
//         fontFamily:"Poppins",
//         fontSize: 16,
//         fontWeight:300,
//         color: "#222222"
//     },
//     palette :{
//         primary: {
//             main: "#8484ED"
//         },
//         secondary:{
//             main: "#ABABAB"
//         }
//     }
    
// })

// const useStyles = makeStyles((theme) => ({
//     root: {
//         fontFamily:"Poppins",
//         fontSize: 12,
//         fontWeight:500,
//         color: "#8484ED"
//     },
//     rootTwo: {
//         fontFamily:"Poppins",
//         fontSize: 12,
//         fontWeight:500,
//         color: "#ABABAB"
//     }
//   }));


// const PageEdit = ({history, partyname}) => {
//     window.scrollTo(0, 0)
//     const [info,setInfo] = useState({});
//     console.log('info', info)
//     const classes = useStyles();
//     //should be form of {name: 'HBD Sehoon',location:'busan',memo:'blah',dateTime:'2021-11-06T19:00', notices:{0:"don't sleep"}}
//     const userRef=firebase.database()
//     var location_default

//     var firebase_party_info=[]
//     React.useEffect(()=>{
//     userRef.ref('/Parties/'+partyname).on('value',(snapshot) => {

//         firebase_party_info = snapshot.val();
//         console.log(firebase_party_info)

//     })
//     },[])

//     const openonly = () => {
//         var temp = info

//         if (temp.location==""){
//             console.log(location_default)
//             info.location=location_default
//             console.log(info)
//         }
//         if (temp.name==("" ||undefined)){
//             alert('You need to add your party name')
//             console.log(info)
//         }
//         else{
//             userRef.ref('/Parties/'+info.name).set(info)
//             history.replace('/parties/'+info.name)
//         }
//     }

//     const sendInvitation = () => {
//         var temp = info

//         if (temp.location==""){
//             console.log(location_default)
//             info.location=location_default
//             console.log(info)
//         }
//         if (temp.name==("" ||undefined)){
//             alert('You need to add your party name')
//         }
//         else{
//             userRef.ref('/Parties/'+info.name).set(info)
//             alert('successfully Sent')
//             history.replace('/parties/'+info.name)
//         }
//     }
//     //const name = this.match.params.partyname;   
//     var party_name=this.props.partyname
//     console.log(partyname)
//     return(
//         <ThemeProvider theme={theme}>
//         <div style={{marginBottom:100}}>
//             <Header />
//             <div className="container">
//                 <div className="row">
//                     <div className="col-md-offset-2 col-md-8">
//                         <EditPartyInfo partyname={party_name}  info={info} setInfo={setInfo} />
//                         <EditPartyNotices partyname={party_name}  info={info} setInfo={setInfo} />
//                         {/* <EditPartyGuests info={info} setInfo={setInfo}/> */} 
//                     </div>
//                 </div>
//             </div>


//             <Box display="flex" justifyContent="center">
//                 <Box>
//                         <Button style={{marginRight: 20}} variant="outlined" color="primary" onClick={openonly} >
//                             <Typography className={classes.root} >Save</Typography>
//                         </Button>
//                 {/*</Box>
//                  <Box>
//                     <Button  variant="outlined" color="primary" onClick={sendInvitation} >
//                         <Typography className={classes.root} >open and send</Typography>
//                     </Button>
//                 </Box> */} 
//                 </Box>
                
//             </Box>
//         </div>
//         </ThemeProvider>
//     )
// }

// export default PageEdit;


import Header from "./Header";
import PartiesMain from "./PartiesMain"
import Guests from './Guests'

export default function PageEdit(props){
    window.scrollTo(0, 0)
    const name = props.match.params.partyname;
    const [info,setInfo] = useState({});

    const databaseURL = "https://aster-42bcb-default-rtdb.firebaseio.com/";
    const userRef = firebase.database();

  var noticeList=[]
  var dateTime_props=""
  var location_props=""
  var memo_props=""
  useEffect(()=>{
  
    userRef.ref(Auth.getAuth()+'/Parties/'+name+'/').on('value',(snapshot) => {
      
      const party_info = snapshot.val();
      //console.log(party_info, 'snaphot')
       dateTime_props=party_info.dateTime
       location_props=party_info.location
       memo_props=party_info.memo
       //console.log(location_props)
      
    })
  },[])



    
  const theme = createMuiTheme({
    typography :{
        fontFamily:"Poppins",
        fontSize: 16,
        fontWeight:300,
        color: "#222222"
    },
    palette :{
        primary: {
            main: "#8484ED"
        },
        secondary:{
            main: "#ABABAB"
        }
    }
    
})

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily:"Poppins",
        fontSize: 12,
        fontWeight:500,
        color: "#8484ED"
    },
    rootTwo: {
        fontFamily:"Poppins",
        fontSize: 12,
        fontWeight:500,
        color: "#ABABAB"
    }
  }));
  const classes = useStyles();
  
    const openonly = () => {
        var temp = info

        // if (temp.location==""){
        //     console.log(location_default)
        //     info.location=location_default
        //     console.log(info)
        // }
        // if (temp.name==("" ||undefined)){
        //     alert('You need to add your party name')
        //     console.log(info)
        // }
        // else{
        //     userRef.ref('/Parties/'+info.name).set(info)
        //     //history.replace('/parties/'+info.name)
        // }
        userRef.ref(Auth.getAuth()+'/Parties/'+name+'/notices').set(info.notices)
        if((info.dateTime!==(undefined)) && (info.dateTime!==(""))){
            //console.log('/Parties/'+name+'/dateTime', '주소')
            userRef.ref(Auth.getAuth()+'/Parties/'+name+'/dateTime').set(info.dateTime)
        }
        if((info.location!==(undefined)) && (info.location!==(""))){
            userRef.ref(Auth.getAuth()+'/Parties/'+name+'/location').set(info.location)
        }
        if((info.memo!==(undefined)) && (info.memo!==(""))){
            userRef.ref(Auth.getAuth()+'/Parties/'+name+'/memo').set(info.memo)
        }
        userRef.ref(Auth.getAuth()+'/Parties/'+name+'/notices').set(info.notices)
        //console.log(info.notices)
        //history.replace('/parties/'+info.name)
        

    }
    //const userRef=firebase.database()
    var location_default
    return(
        <ThemeProvider theme={theme}>
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-2 col-md-8">
                        <EditPartyInfo dateTime_props={dateTime_props} location_props={location_props} memo_props={memo_props} partyname={name} info={info} setInfo={setInfo} />
                        <EditPartyNotices partyname={name} info={info} setInfo={setInfo} />
                        {/* <Guests partyname={name} info={info} setInfo={setInfo}/>  */}
                    </div>
                </div>
            </div>
            

            <Box display="flex" justifyContent="center" marginBottom='5%'>
                <Box>
                <Link to={`/parties/${name}`} style={{textDecoration:'none'}}>
                        <Button style={{marginRight: 20}} variant="outlined" color="primary" onClick={openonly} >
                            {/* <SendOutlinedIcon style={{color:'#A9A9FF'}}/> */}
                            <Typography className={classes.root} >Save</Typography>
                        </Button>
                        </Link>
                </Box>
            </Box>

        </div>
        </ThemeProvider>
        
    )
    
}