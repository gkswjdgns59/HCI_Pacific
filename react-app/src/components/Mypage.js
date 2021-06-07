import React, { Component } from 'react';
import {TextField, List, Input, Box, Button, Typography} from "@material-ui/core";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import firebase from "./Firebase"
import Auth from './Auth';
const styles = {
    textField: {
    fontSize: 50, //works!
 }
}


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
      },
      secondary:{
        main: "#ABABAB"
    }
  },
  status: {
        use: '#A9A9FF',
        fontSize: 200
      },
})

// const useStyles = makeStyles((theme) => ({
//   root: {
//     color: theme.status.use,
//     '&$checked': {
//       color: theme.status.use,
//       fontSize: 200
//     },
//     fontSize: 200
//   },
//   checked: {
//     fontSize: 200 
//   },
// }));



// var init_location = ""
var init_notice = []
var init_wishlist = []
var upnotice = []
var uplocation = ""
var upwishlist = []

var x = 0
var y = 0
export const Mypage = () => {
  let updatenotice = []
  const [notice, setNotice] = React.useState([]);
  const [temp, setTemp] = React.useState([]);
  const [location, setLocation] = React.useState([])
  let updatewishlist = []
  const [wishlist, setWishlist] = React.useState([]);
  const [tempw, setTempw] = React.useState([]);
  React.useEffect(()=>{
    firebase.database().ref(Auth.getAuth()+'/Mypage/location').once('value',(snapshot) => {
      setLocation([snapshot.val()])
      uplocation = snapshot.val()
    })
    firebase.database().ref(Auth.getAuth()+'/Mypage/notices').once('value').then((snapshot)=>{
      init_notice=[]
      for(let obj in snapshot.val()){
        var defval = String(snapshot.val()[obj]);
        if(defval!==""){
          init_notice.push(defval)
        }
      }
      init_notice.push("")
      setNotice(init_notice)
      upnotice = init_notice
      console.log("ㅊ어ㅡㅁ", upnotice)
    })
    firebase.database().ref(Auth.getAuth()+'/Mypage/wishlist').once('value').then((snapshot)=>{
      init_wishlist=[]
      for(let obj in snapshot.val()){
        var defval = String(snapshot.val()[obj]);
        if(defval!==""){
          init_wishlist.push(defval)
        }
      }
      init_wishlist.push("")
      setWishlist(init_wishlist)
      upwishlist = init_wishlist
    })
  },[])

  const handleNotice = (event) => {
    const inputText = event.target.value.trim();
    if(x===0){
      console.log(x)
      let copyList = [...notice]
      if (inputText.length>0){
        copyList[parseInt(event.target.name)]=inputText;
        if (copyList[copyList.length-1]!==""){
          copyList.push("");
        }
        setNotice(copyList);
        upnotice = copyList
      }else if (inputText.length===0){
        setNotice([]);
        copyList.splice(parseInt(event.target.name), 1);
        setTemp(copyList);
        upnotice = copyList
        // updatenotice = copyList
        // for(var i=0;i<updatenotice.length;i++){
        //   firebase.database().ref(Auth.getAuth()+'/Mypage/notices').update({[i] : updatenotice[i]})
        // }
        x = 1
      }
    }else if(x===1){
      console.log(x)
      let copyList = [...temp]
      if (inputText.length>0){
        copyList[parseInt(event.target.name)]=inputText;
        if (copyList[copyList.length-1]!==""){
          copyList.push("");
        }
        setTemp(copyList);
        upnotice = copyList
      }else if (inputText.length===0){
        setTemp([]);
        copyList.splice(parseInt(event.target.name), 1);
        setNotice(copyList);
        upnotice = copyList
        // updatenotice = copyList
        // for(var i=0;i<updatenotice.length;i++){
        //   firebase.database().ref(Auth.getAuth()+'/Mypage/notices').update({[i] : updatenotice[i]})
        // }
        // const idx = event.target.name
        // firebase.database().ref('Mypage/notices'+idx).set(null)
        x = 0
      }
    }
  }

  // const onblurnotice = (event) => {
  //   const idx = event.target.name
  //   const inputText = event.target.value.trim();
  //   firebase.database().ref(Auth.getAuth()+'/Mypage/notices').update({[idx] : inputText})
  // }

  const onblurLocation = (event) => {
    const inputText = event.target.value.trim();
    uplocation = inputText
    console.log("up uplocation", uplocation)
  }

  
  const handleWishlist = (event) => {
    const inputText = event.target.value.trim();
    if(y===0){
      let copyList = [...wishlist]
      if (inputText.length>0){
        copyList[parseInt(event.target.name)]=inputText;
        if (copyList[copyList.length-1]!==""){
          copyList.push("");
        }
        setWishlist(copyList);
        upwishlist = copyList
      }else if (inputText.length===0){
        setWishlist([]);
        copyList.splice(parseInt(event.target.name), 1);
        setTempw(copyList);
        upwishlist = copyList
        // updatewishlist = copyList
        // for(var i=0;i<updatewishlist.length;i++){
        //   firebase.database().ref(Auth.getAuth()+'/Mypage/wishlist').update({[i] : updatewishlist[i]})
        // }
        y = 1
      }
    }else if(y===1){
      let copyList = [...tempw]
      if (inputText.length>0){
        copyList[parseInt(event.target.name)]=inputText;
        if (copyList[copyList.length-1]!==""){
          copyList.push("");
        }
        setTempw(copyList);
        upwishlist = copyList
      }else if (inputText.length===0){
        setTempw([]);
        copyList.splice(parseInt(event.target.name), 1);
        setWishlist(copyList);
        upwishlist = copyList
        // updatewishlist = copyList
        // for(var i=0;i<updatewishlist.length;i++){
        //   firebase.database().ref(Auth.getAuth()+'/Mypage/wishlist').update({[i] : updatewishlist[i]})
        // }
        y = 0
      }
    }
  }
  const save = () =>{
    firebase.database().ref(Auth.getAuth()+'/Mypage/').update({"notices": null})
    firebase.database().ref(Auth.getAuth()+'/Mypage/').update({"wishlist": null})
    console.log("upnotice", upnotice)
    console.log("uplocation", uplocation)
    console.log("upwsihlist", upwishlist)
    for(var i=0;i<upnotice.length;i++){
        firebase.database().ref(Auth.getAuth()+'/Mypage/notices').update({[i] : upnotice[i]})
    }
    firebase.database().ref(Auth.getAuth()+'/Mypage/').update({
      location: uplocation
    })
    for(var i=0;i<upwishlist.length;i++){
      firebase.database().ref(Auth.getAuth()+'/Mypage/wishlist').update({[i] : upwishlist[i]})
    }
    alert('Successfully Saved')
  }
  // const onblurwishlist = (event) => {
  //   const idx = event.target.name
  //   const inputText = event.target.value.trim();
  //   firebase.database().ref(Auth.getAuth()+'/Mypage/wishlist').update({[idx] : inputText})
  // }
  // const classes = useStyles();
    return  (
      <ThemeProvider theme={theme}>
      <div>
      <h1
            style={{ fontFamily: 'Poppins', marginBottom: 10, color:'#A9A9FF'}}
            ><b>My Page</b></h1>
            <h2
            style={{ fontFamily: 'Poppins', marginBottom: 40, color:'#A9A9FF', fontSize: 14}}
            >Create your default setting</h2>


          <form noValidate>

          <h2
            style={{fontFamily: 'Poppins', fontSize: 16, color:'#383838'}}
            ><b>Location</b></h2>
          <List style={{marginBottom: 10}}>
            {location.map((value)=>(
              <Input className="custom-input"
              id="standard-basic"
              style={{ margin: 8, fontFamily: 'Poppins'}}
              defaultValue = {value}
              placeholder= "Type in your location"
              fullWidth
              onBlur={onblurLocation}
              //margin="normal"
              inputProps={{style: {fontSize: 14,  fontFamily: 'Poppins'},}}
              InputLabelProps={{style: {fontSize: 14, fontFamily: 'Poppins' }, shrink: true, }}
              color="#D6D6FF"
              inputStyle={styles.textField}
            />
            ))}
          </List>


          <h2
            style={{fontFamily: 'Poppins', fontSize: 16, color:'#383838'}}
            ><b>Notices and Wishes</b></h2>
          <List>
            {notice.map((guest, index)=>(
              <TextField 
              className="custom-input"
              id="standard-basic"
              name={String(index)}
              style={{ margin: 8, fontFamily: 'Poppins'}}
              placeholder="Type in your Notices and Wishes"
              defaultValue={guest}
              fullWidth
              size='large'
              //margin="normal"
              onChange={handleNotice}
              // onBlur={onblurnotice}
              inputProps={{style: {fontSize: 14}, fontFamily: 'Poppins'}}
              InputLabelProps={{style: {fontSize: 14}, shrink: true, fontFamily: 'Poppins'}}
              color="#D6D6FF"
              inputStyle={styles.textField}
              />
            ))}
          </List>
          <List>
            {temp.map((guest, index)=>(
                <TextField className="custom-input"
              id="standard-basic"
              name={String(index)}
              style={{ margin: 8, fontFamily: 'Poppins'}}
              placeholder="Type in your Notices and Wishes"
              defaultValue={guest}
              fullWidth
              size='large'
              //margin="normal"
              onChange={handleNotice}
              // onBlur={onblurnotice}
              inputProps={{style: {fontSize: 14}, fontFamily: 'Poppins'}}
              InputLabelProps={{style: {fontSize: 14}, shrink: true, fontFamily: 'Poppins'}}
              color="#D6D6FF"
              inputStyle={styles.textField}
            />         
            ))}
          </List>

          {/* <h4 style={{ margin: 8 ,fontFamily: 'Poppins'}}>Wish List.</h4>
          <List>
            {wishlist.map((guest, index)=>(
              <TextField className="custom-input"
              id="standard-basic"
              name={String(index)}
              style={{ margin: 8, fontFamily: 'Poppins'}}
              placeholder="Wishlist"
              defaultValue={guest}
              fullWidth
              size='large'
              margin="normal"
              onChange={handleWishlist}
              // onBlur={onblurwishlist}
              inputProps={{style: {fontSize: 14}, fontFamily: 'Poppins'}}
              InputLabelProps={{style: {fontSize: 14}, shrink: true, fontFamily: 'Poppins'}}
              color="#D6D6FF"
              inputStyle={styles.textField}
            />
            ))}
          </List>
          <List>
            {tempw.map((guest, index)=>(
              <TextField className="custom-input"
              id="standard-basic"
              name={String(index)}
              style={{ margin: 8, fontFamily: 'Poppins'}}
              placeholder="Notice"
              defaultValue={guest}
              fullWidth
              size='large'
              margin="normal"
              onChange={handleWishlist}
              // onBlur={onblurwishlist}
              inputProps={{style: {fontSize: 14}, fontFamily: 'Poppins'}}
              InputLabelProps={{style: {fontSize: 14}, shrink: true, fontFamily: 'Poppins'}}
              color="#D6D6FF"
              inputStyle={styles.textField}
            />
            ))}
          </List>           */}
        </form>
        <Box display="flex" justifyContent="center">
                <Box>
                    <Button  variant="outlined" color="primary" onClick={save} style={{marginBottom:30}}>
                        {/* <SendOutlinedIcon style={{color:'#A9A9FF'}}/> */}
                        <Typography >Save</Typography>
                    </Button>
                </Box>
            </Box>
      </div></ThemeProvider>
    );
  }