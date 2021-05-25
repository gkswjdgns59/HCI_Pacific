import React, { useState, useEffect } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import firebase from './Firebase.js'
import { useForkRef } from '@material-ui/core';






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


// var firebase_data=[]
// {
// var noticeRef = firebase.database().ref('Mypage/notices');
// noticeRef.on('value', (snapshot) => {
//   const data = snapshot.val();
//   // updateStarCount(postElement, data);
//   console.log(data)
//   firebase_data=data
// });
// //console.log(firebase_data[0])
// firebase_data.push('')
// console.log(firebase_data)
// }

// firebase.database().ref('/Mypage/notices').on('value', snapshot => {
//   const users = snapshot.val(); //전체 Map
//   const usersData = [];
//   for(let id in users) { //id가 key 값들을 하나씩 가짐
//       var data = ''
//       data= users[id] //users[id]하면 해당 key의 data 받아옴
//       // console.log(data)
//       usersData.push( data );

//       var num=id
//       //noticeList=usersData
//       {<p>{id}</p>}
//       {<Notice_map num={id}></Notice_map>}
      
      

// /////////////////////////////return

      
//   }
// })






// function Notice_map({ num }) {

//   console.log(firebase_data, 'noticemap' )
//   return (

    
//       <div class="row">
//             <div class="col-md-1">
//                 <CustomCheckbox_checked id={num}/>
//             </div>

//             <div class="col-md-11">
//             <Input 
//                 id={num}
//                 defaultValue={usersData[num]} 
//                 //onChange={onChangeInput}
//                 fullWidth
//                 key={num}
//                 style={{fontFamily: 'Poppins', fontWeight: 300, fontSize:14, marginBottom: 15}}
//                 inputProps={{style: {fontSize: 14,  fontFamily: 'Poppins' , color:'#ADADAD'},}}
//             />
//             </div>
//         </div>
      

    
//   );
// }


var usersData=[]
export default function OpenPartyNotices() {
  const [list, setList] = useState([]);
  const [checked,setChecked] = useState([]);
  const userRef = firebase.database();

  var noticeList=[]
  //const firebase_data=firebase_data
  // console.log('insidefunction', firebase_data)
  // console.log('still',firebase_data)
  //firebase.database().ref('/Guests').set({sehoon:3})

  useEffect(()=>{
    // firebase.database().ref('/Mypage/notices').on('value', snapshot => {
    //   const users = snapshot.val(); //전체 Map
    //   const usersData = [];
    //   for(let id in users) { //id가 key 값들을 하나씩 가짐
    //       var data = ''
    //       data= users[id] //users[id]하면 해당 key의 data 받아옴
    //       // console.log(data)
    //       usersData.push( data );

    //       var num=id
    //       //noticeList=usersData
    //       {<p>{id}</p>}
    //       {<Notice_map num={id}></Notice_map>}
          
          

    // /////////////////////////////return
    //   }
    // })
    userRef.ref('/Mypage/notices').on('value',(snapshot) => {
      var temp_list = [];
      var temp_checked_list=[];
      const notices = snapshot.val();
      for(let id in notices) {
        temp_list.push(notices[id]);
        temp_checked_list.push(true);
      }
      temp_list.push("")
      setList(temp_list)
      setChecked(temp_checked_list)
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
          //console.log(event.target.id)
          // console.log(event.target.checked)
          // console.log(id.id)
          // console.log(id)
          // temp[]=event.target.checked
          temp[id.id]=event.target.checked
          console.log(temp)
          setChecked(temp)
          // console.log(notice_check)
          
          // console.log(wishlist_check)
          //writeUserData('z','d','q','e')
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
          // console.log(event.target.checked)
          // console.log(id.id)
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
          //console.log(event.target.id)
          // console.log(event.target.checked)
          // console.log(id.id)
          // console.log(id)
          wishlist_check=event.target.checked
          // console.log('wishlist'+wishlist_check)
          
          // console.log(wishlist_check)
          //writeUserData('z','d','q','e')
      }
      }
        style={{fontSize:200}}
      />
      
    );
  }

  const notice_map= (notices) => {

    const onChangeInput = (ind) => {
      const _onchange = event => {
        var temp_list = list;
        temp_list[ind] = event.target.value
        console.log(temp_list)
        setList(temp_list)
      }
      return _onchange
    }
    
    var ind=-1;

    return notices.map(notice => {
      ind=ind+1;
      if (notice!=""){
        return (
          <div className="row">
              <div className="col-md-1">
                  <CustomCheckbox_checked id={ind}/>
              </div>
              <div className="col-md-11">
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
                  <CustomCheckbox_unchecked />
              </div>
              <div class="col-md-11">
              <Input 
                  id={ind}
                  placeholder="Click to add more..."  
                  fullWidth
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
            <div className="col-md-11">
            <h2 style={{fontSize: 14,  fontWeight: 300, fontFamily: 'Poppins' , color:'#ADADAD', margintop:20, paddingTop: 7.5, paddingBottom:9}} >Send Wishlist</h2>
            {/* <Input 
                id='notice_input'
                disabled
                defaultValue="Send wishlist" inputProps={ariaLabel} 
                fullWidth
                style={{fontFamily: 'Poppins', fontSize:14, marginBottom: 15}}
                inputProps={{style: {fontSize: 14,  fontFamily: 'Poppins' , color:'#ADADAD'},}}
            /> */}
            </div>
            </div>
        </div>

        <h2
            style={{ fontFamily: 'Poppins', fontSize: 16, color:'#383838'}}
            ><b>Notices</b></h2>
          {notice_map(list)}
      
      {/* {

        firebase.database().ref('/Mypage/notices').on('value', snapshot => {
          const users = snapshot.val(); //전체 Map
          const usersData = [];
          for(let id in users) { //id가 key 값들을 하나씩 가짐
              var data = ''
              data= users[id] //users[id]하면 해당 key의 data 받아옴
              // console.log(data)
              usersData.push( data );
              var num=id
              noticeList=usersData
              {<p>{id}</p>}
              // {<Notice_map num={id}></Notice_map>}
              
              

/////////////////////////////return

              
          }
          const len = usersData.length
          // console.log(len)
          usersData.push('')
          
          // console.log(usersData[len-1])
          // console.log(firebase_data)
      })
      } */}

      <div className="container">
      
        
        
        <div>
          {/* <Notice_map num={0}></Notice_map>
          <Notice_map num={1}></Notice_map> */}
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

