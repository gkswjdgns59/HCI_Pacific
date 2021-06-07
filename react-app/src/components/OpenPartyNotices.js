import React, { useState, useEffect } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import firebase from './Firebase.js'
import Auth from './Auth';
import { TextField } from '@material-ui/core';


const databaseURL = "https://aster-42bcb-default-rtdb.firebaseio.com/";


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



var wishlist_check=true
var notice_check=[]

var usersData=[]
export default function OpenPartyNotices({info, setInfo}) {
  const [list, setList] = useState([]);
  const [checked,setChecked] = useState([]);
  const userRef = firebase.database();

  var noticeList=[]

  useEffect(()=>{
  
    userRef.ref(Auth.getAuth()+'/Mypage/notices').on('value',(snapshot) => {
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

  function CustomCheckbox_checked(id_num) {
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
          

          temp[id_num.id_num]=event.target.checked
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
    var len = notices.length
    //console.log(len)
    return notices.map(notice => {
      ind=ind+1;
      if (notice!=""){
        return (
          <div className="row" key={ind}>
              <div className="col-md-1">
                  <CustomCheckbox_checked id_num={ind} key={String(ind)}/>
              </div>
              <div className="col-md-11">
              <Input 
                  id_num={ind}
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
        if(ind==(len-1)){
          return(
          <div className="row" key={ind}> 
              <div className="col-md-1">
                  <CustomCheckbox_checked id_num={ind} key={String(ind)}/>
              </div>
              <div className="col-md-11">
              <div>
              <TextField 
                  id_num={ind}
                  placeholder="Ex)
                  1. Dresscode: Red
                  2. Menu: Fried Chicken
                  "  
                  fullWidth
                  multiline
                  row={4}
                  onChange={onChangeInput(ind)}
                  style={{fontFamily: 'Poppins', fontSize:14, marginBottom: 15}}
                  marginbottom={20}
                  inputProps={{style: {fontSize: 14,  fontFamily: 'Poppins' , color:'#ADADAD', lineHeight:'150%'},}}
              />
              </div>
              </div>
          </div>
        )
        }
        
      }
    })
  }

  return (
    
    <ThemeProvider theme={theme}>

        <h2
            style={{ fontFamily: 'Poppins', fontSize: 16, color:'#383838', marginBottom:20}}
            ><b>Notices and Wishes</b></h2>
          <div className="container" >{notice_map(list)}</div>
      


      <div className="container">
      
        
        
        <div>
         
        </div>

        </div>
      <p></p>
    </ThemeProvider>
  );
}