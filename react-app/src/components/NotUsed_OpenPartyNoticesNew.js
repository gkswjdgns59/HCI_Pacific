import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { createMuiTheme, withStyles, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import NativeSelect from '@material-ui/core/NativeSelect';
import Checkbox from '@material-ui/core/Checkbox';

const databaseURL = "https://dp4jaeryung-default-rtdb.firebaseio.com/";


const theme = createMuiTheme({
    input:{
        color: '#A9A9FF'
    },
    Checkbox:{
        color: '#A9A9FF'
    },
    
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
        root: {
            color:'#A9A9FF' ,
            '&$checked': {
              color: '#A9A9FF',
              fontSize: 200
            },
            fontSize: 200
          },
          checked: {
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

const styles = {
    textField: {
    fontSize: 50, //works!
    color: '#A9A9FF'
 }
}
// 

const info_list = ['', '2021-01-01T00:00', 'no location', '']

const onChangeInputName = (event) => {
      info_list[0]=event.target.value
      console.log(info_list);
    }
const onChangeInputDateTime = (event) => {
  info_list[1]=event.target.value
  console.log(info_list);
}
const onChangeInputLocation = (event) => {
  info_list[2]=event.target.value
  console.log(info_list);
}
const onChangeInputMemo = (event) => {
  info_list[3]=event.target.value
  console.log(info_list);
}



class OpenPartyInfo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        mypage: {}
    };
    }
    


    _get() {
      fetch(`${databaseURL}/Mypage.json`).then(res => {
      if(res.status != 200) {
      throw new Error(res.statusText);
      }
      return res.json();
      }).then(mypage => this.setState({mypage: mypage}));
      }
      
  shouldComponentUpdate(nextProps, nextState) {
      return nextState.mypage != this.state.mypage
  }
      
  componentDidMount() {
      this._get();
  }

    render() {
      //var location_default = this.state.mypage.location
      //var location_default = "52, Rose street, Daejeon"
      //console.log(location_default)
      info_list[2]=this.state.mypage.location
      
      return  (
        <div><ThemeProvider theme={theme}>
          
          <h2
            style={{fontFamily: 'Poppins', fontSize: 16, color:'#383838'}}
            ><b>Wishlist</b></h2>

{/* <Checkbox
      defaultChecked
      //defaultUnchecked
      //sx={{ '& .MuiSvgIcon-root': { fontSize: 200 } }}
      theme={ThemeProvider.theme}
        classes={{
            root: useStyles.root,
            checked: useStyles.checked
        }}
      style={{fontSize:200}}
    /> */}
    <ThemeProvider theme={theme}>

        <span className='checkbox'>
    <label><input
    className='checkInput'
        type='checkbox'
        id='checkInput'
        defaultChecked
        onClick={(event)=>{
            console.log('clicked')
            console.log(event.target.id)
            console.log(event.target.checked)
        }
        }
        backgroundColor='#A9A9FF'
        color='#A9A9FF'
        background-color='#A9A9FF'
        style={{color: '#A9A9FF', color: theme, backgroundColor: '#A9A9FF', background:'#A9A9FF'}}
        ></input>
        <span className='customCheckBox'></span>
        </label></span></ThemeProvider>
            
         
          
            
          </ThemeProvider></div>
      );
    }
  }

  export default OpenPartyInfo