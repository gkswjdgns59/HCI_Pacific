import React, { useState, useEffect } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import firebase from './Firebase.js'
import { useForkRef } from '@material-ui/core';
import { InfoSharp } from '@material-ui/icons';






const databaseURL = "https://dp4jaeryung-default-rtdb.firebaseio.com/";

const theme = createMuiTheme({
  typography :{
      fontFamily:"Poppins",
      fontSize: 16,
      fontWeight:300,
      color: "#222222"
  },
  palette :{
      primary: {
          main: "#A9A9FF"
      }
  },
  status: {
        use: '#A9A9FF',
        fontSize: 200
      },
})

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.status.use,
    '&$checked': {
      color: theme.status.use,
      fontSize: 200
    },
    fontSize: 200
  },
  checked: {
    fontSize: 200 
  },
}));


function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}


var wishlist_check=true
var notice_check=[]




var usersData=[]
export default function OpenPartyNotices({info, setInfo}) {
  const [list, setList] = useState([]);
  const [checked,setChecked] = useState([]);
  const userRef = firebase.database();

  var noticeList=[]

  useEffect(()=>{
  
    userRef.ref('/Mypage/notices').on('value',(snapshot) => {
      var temp_list = [];
      var temp_checked_list=[];
      var temp_info=info;
      var temp={};
      const notices = snapshot.val();
      for(let id in notices) {
        temp_list.push(notices[id]);
        temp_checked_list.push(true);
        temp[id]=notices[id]
      }
      temp_list.push("")
      temp_checked_list.push(true)
      temp_info['notices']=temp;
      setList(temp_list)
      setChecked(temp_checked_list)
      setInfo(temp_info)
    })
  },[])

  function CustomCheckbox_checked(id) {
    const classes = useStyles();
  
    return (
      <Checkbox
        defaultChecked
        classes={{
          root: classes.root,
          checked: classes.checked,
        }}
        onClick={(event)=>{
          var temp = checked;
          var temp_info = info
          var temp_notices = {}
          

          temp[id.id]=event.target.checked
          setChecked(temp)

          for(let id in list){
            if(checked[id]){
              temp_notices[id]=list[id]
            }
          }
          temp_info['notices']=temp_notices
          setInfo(temp_info)

      }
      }
        style={{fontSize:200}}
      />
      
    );
  }

  function CustomCheckbox_unchecked(id) {
    const classes = useStyles();
    return (
      <Checkbox
        defaultUnchecked
        classes={{
          root: classes.root,
          checked: classes.checked,
        }}
        style={{fontSize:200}}
        onClick={(event)=>{

        }
        }
      />
    );
  }

  function CustomCheckbox_checked_wish(id) {
    const classes = useStyles(); 
  
    return (
      <Checkbox
        defaultChecked
        classes={{
          root: classes.root,
          checked: classes.checked,
        }}
        onClick={(event)=>{

          wishlist_check=event.target.checked

      }
      }
        style={{fontSize:200}}
      />
      
    );
  }

  const onChangeInput = (ind) => {
    const _onchange = event => {
      var temp_list = list;
      var temp_notices={};
      var temp_info = info;
      temp_list[ind] = event.target.value
      setList(temp_list)
      for(let id in temp_list) {
        if(checked[id]){
          temp_notices[id]=temp_list[id];
        }
      }
      temp_info['notices']=temp_notices;
      setInfo(temp_info)
    }
    return _onchange
  }

  const notice_map= (notices) => {
    
    var ind=-1;

    return notices.map(notice => {
      ind=ind+1;
      if (notice!=""){
        return (
          <div className="row">
              <div className="col-md-1">
                  <CustomCheckbox_checked id={ind}/>
              </div>
              <div className="col-md-6">
              <Input 
                  id={ind}
                  defaultValue={notice} 
                  onChange={onChangeInput(ind)}
                  fullWidth
                  key={ind}
                  style={{fontFamily: 'Poppins', fontWeight: 300, fontSize:14, marginBottom: 15}}
                  inputProps={{style: {fontSize: 14,  fontFamily: 'Poppins' , color:'#ADADAD'},}}
              />
              </div>
          </div>
        )}
      else {
        return(
          <div class="row">
              <div class="col-md-1">
                  <CustomCheckbox_checked />
              </div>
              <div class="col-md-6">
              <Input 
                  id={ind}
                  placeholder="Click to add more...(distinguish the content with comma)"  
                  fullWidth
                  onChange={onChangeInput(ind)}
                  style={{fontFamily: 'Poppins', fontSize:14, marginBottom: 15}}
                  marginBottom={20}
                  inputProps={{style: {fontSize: 14,  fontFamily: 'Poppins' , color:'#ADADAD'},}}
              />
              </div>
          </div>
        )
      }
    })
  }

  return (
    
    <ThemeProvider theme={theme}>
        <h2
            style={{ fontFamily: 'Poppins', fontSize: 16, color:'#383838'}}
            ><b>Wishlist</b></h2>
            

            <div className="container" style={{marginBottom:30}}>
            <div className="row">
            <div className="col-md-1">
                <CustomCheckbox_checked_wish key='wishlist' id='wishlist'/>
            </div>
            <div className="col-md-6">
            <h2 style={{fontSize: 14,  fontWeight: 300, fontFamily: 'Poppins' , color:'#ADADAD', margintop:20, paddingTop: 7.5, paddingBottom:9}} >Send Wishlist</h2>

            </div>
            </div>
        </div>

        <h2
            style={{ fontFamily: 'Poppins', fontSize: 16, color:'#383838'}}
            ><b>Notices</b></h2>
          <div className="container" >{notice_map(list)}</div>
      


      <div className="container">
      
        
        
        <div>
         
        </div>




{/* 

      <div class="row">
            <div class="col-md-1">
                <CustomCheckbox_checked id={2}/>
            </div>
            <div class="col-md-11">
            <Input 
                id={2}
                defaultValue="Don't go on my bed!" 
                onChange={onChangeInput}
                fullWidth
                key={'234'}
                style={{fontFamily: 'Poppins', fontWeight: 300, fontSize:14, marginBottom: 15}}
                inputProps={{style: {fontSize: 14,  fontFamily: 'Poppins' , color:'#ADADAD'},}}
            />
            </div>
        </div>






        <div class="row">
            <div class="col-md-1">
                <CustomCheckbox_checked id={1}/>
            </div>
            <div class="col-md-11">
            <Input 
                id='notice_input'
                defaultValue="Don't go on my bed!" 
                onChange={onChangeInput}
                fullWidth
                key={'234'}
                style={{fontFamily: 'Poppins', fontWeight: 300, fontSize:14, marginBottom: 15}}
                inputProps={{style: {fontSize: 14,  fontFamily: 'Poppins' , color:'#ADADAD'},}}
            />
            </div>
        </div> */}

        {/* <div class="row">
            <div class="col-md-1">
                <CustomCheckbox_checked />
            </div>
            <div class="col-md-11">
            <Input 
                id='notice_input'
                defaultValue="We should not be too noisy!"
                fullWidth
                style={{fontFamily: 'Poppins', fontSize:14, marginBottom: 15}}
                inputProps={{style: {fontSize: 14,  fontFamily: 'Poppins' , color:'#ADADAD'},}}
            />

            </div>
        </div>

        <div class="row">
            <div class="col-md-1">
                <CustomCheckbox_checked />
            </div>
            <div class="col-md-11">
            <Input 
                id='notice_input'
                defaultValue="Can someone bring paper tissues?" 
                fullWidth
                style={{fontFamily: 'Poppins', fontSize:14, marginBottom: 15}}
                marginBottom={20}
                inputProps={{style: {fontSize: 14,  fontFamily: 'Poppins' , color:'#ADADAD'},}}
            />
            </div>
        </div>


        <div class="row">
            <div class="col-md-1">
                <CustomCheckbox_unchecked />
            </div>
            <div class="col-md-11">
            <Input 
                id='notice_input'
                placeholder="Click to add more..."  
                fullWidth
                style={{fontFamily: 'Poppins', fontSize:14, marginBottom: 15}}
                marginBottom={20}
                inputProps={{style: {fontSize: 14,  fontFamily: 'Poppins' , color:'#ADADAD'},}}
            />
            </div>
        </div> */}




        </div>
      <p></p>
    </ThemeProvider>
  );
}

