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
      fontSize: 20,
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

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'primary',
    '&$checked': {
      color: 'primary',
      fontSize: 14
    },
    fontSize: 14
  },
}));



// var init_location = ""
var uplocation = ""
var upwishlist = []

export const Mypage = () => {
  const [notice, setNotice] = React.useState({});
  const [location, setLocation] = React.useState([])

  const [data,setData] = React.useState({})
  const userRef=firebase.database();
  const classes = useStyles();
  
  React.useEffect(()=>{
    firebase.database().ref(Auth.getAuth()+'/Mypage/location').once('value',(snapshot) => {
      setLocation([snapshot.val()])
      uplocation = snapshot.val()
    })
    userRef.ref(Auth.getAuth()+'/Mypage/notices').on('value', snapshot=>{
      var res=snapshot.val();
      var temp={}
      var last=-1;
      for(let key in res){
        var temp_form={}
        temp_form['name']=res[key];
        temp_form['key']=key
        temp[key]=temp_form
        last=key;
      }
      var temp_data={}
      temp_data['name']=''
      temp_data['key']=parseInt(last)+1
      temp[parseInt(last)+1]=temp_data
      setData(temp)
    })
  },[])

  const onFilledChange = (event, key) => {
    var temp={};
    var last;
    last=-1;
    for(let notice in data){
        temp[notice]=data[notice]
        if(notice==key){
            temp[notice].name=event.target.value
        }
        last=notice;
    }
    if(temp[last].name!=''){
        var temp_data={}
        temp_data['name']=''
        temp_data['key']=parseInt(last)+1
        temp[parseInt(last)+1]=temp_data
    }
    setData(temp)
}

const onFilledBlur = (event,key) => {
    var cnt=0;
    var last;
    for(let obj in data){
        cnt=cnt+1;
    }
    if(event.target.value==='' && cnt>1){
        var temp={}
        for(let notice in data){
            if(notice==key){
                continue
            }
            else{
                temp[notice]=data[notice]
                last=notice;
            }
        }
        if(temp[last].name!=''){
            var temp_data={}
            temp_data['name']=''
            temp_data['key']=parseInt(last)+1
            temp[parseInt(last)+1]=temp_data
        }
        setData(temp)
    }
  }

  const filled_input_helper = (notice) => {
      return(
          <ThemeProvider theme={theme}>
            <Input 
            placeholder='Type in your Notices and Wishes'
            value={notice.name}
            fullWidth
            style={{ margin: 8, fontFamily: 'Poppins'}}
            onChange = {event => onFilledChange(event,notice.key)}
            onBlur = {event => onFilledBlur(event,notice.key)}
            className={classes.root}
            />
          </ThemeProvider>
      )
  }

  const filled_input = () => {
      var res = [];
      for(let notice in data){
          res.push(filled_input_helper(data[notice]))
      }
      return res;
  }

  const onblurLocation = (event) => {
    const inputText = event.target.value.trim();
    uplocation = inputText
  }

  const save = () =>{
    userRef.ref(Auth.getAuth()+'/Mypage/location').set(uplocation)
    var temp=data;
    var last=0;
    for(let obj in data){
      last=obj
    }
    delete temp[last]
    var modified_data={};
    for(let key in temp){
      modified_data[key]=temp[key].name
    }
    userRef.ref(Auth.getAuth()+'/Mypage/notices').set(modified_data)
    alert('Successfully Saved')
  }

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
          {filled_input()}
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