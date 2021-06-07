import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import { createMuiTheme, withStyles, ThemeProvider } from '@material-ui/core/styles';
import Auth from './Auth';

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
  }
})

const styles = {
    textField: {
    fontSize: 50, //works!
 }
}
// 

const info_list = ['', '2021-01-01T00:00', 'no location', '']





class OpenPartyInfo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        mypage: {location:""},
        //isEmpty: false
    };
      this.isEmpty=false
    }
    


    _get() {
      fetch(`${databaseURL}${Auth.auth}/Mypage.json`).then(res => {
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
      // console.log(this.state.mypage)
      info_list[2]=this.state.mypage.location
      const setInfo = this.props.setInfo;

      const onChangeInputName = (event) => {
        info_list[0]=event.target.value
        var data=this.props.info;
        data['name']=info_list[0]
        data['dateTime']=info_list[1]
        data['location']=info_list[2]
        data['memo']=info_list[3]
        setInfo(data)
        //console.log(info_list[0])
        //console.log(event.target.value==="", '비어있는가')
        //console.log(info_list[0]==="", '비어있는가')


        this.isEmpty=(event.target.value==="")
        
        //console.log(this.isEmpty)
        
      }
      const onChangeInputDateTime = (event) => {
        info_list[1]=event.target.value
        var data=this.props.info;
        data['name']=info_list[0]
        data['dateTime']=info_list[1]
        data['location']=info_list[2]
        data['memo']=info_list[3]
        setInfo(data)
      }
      const onChangeInputLocation = (event) => {
        info_list[2]=event.target.value
        var data=this.props.info;
        data['name']=info_list[0]
        data['dateTime']=info_list[1]
        data['location']=info_list[2]
        data['memo']=info_list[3]
        setInfo(data)
      }
      const onChangeInputMemo = (event) => {
        info_list[3]=event.target.value
        var data=this.props.info;
        data['name']=info_list[0]
        data['dateTime']=info_list[1]
        data['location']=info_list[2]
        data['memo']=info_list[3]
        setInfo(data)
      }

      return  (
        <div><ThemeProvider theme={theme}>
          
          <h1
            style={{ fontFamily: 'Poppins', marginBottom: 10, color:'#A9A9FF'}}
            ><b>Open Party</b></h1>
            <h2
            style={{ fontFamily: 'Poppins', marginBottom: 40, color:'#A9A9FF', fontSize: 14}}
            >Fill in the information to open your party.</h2>

            <h2
            style={{fontFamily: 'Poppins', fontSize: 16, color:'#383838'}}
            ><b>Basic Information</b></h2>
            

          <form noValidate>

          <div className="container">
            <div className="row">
                <div className="col-sm-12">
                <TextField className="custom-input"
              id="Party Name"
              label="Party Name"
              style={{ margin: 8, fontFamily: 'Poppins', marginBottom: 15}}
              placeholder="My Party Name"
              //helperText="Full width!"
              fullWidth
              onChange={onChangeInputName}           
              //size='large'
              margin="normal"
              
              //required
              //value={target.value}
              //focused
              error={this.isEmpty}

              inputProps={{style: {fontSize: 16,  fontFamily: 'Poppins', fontWeight: 300},}}
              InputLabelProps={{style: {fontSize: 16, fontFamily: 'Poppins' }, shrink: true, }}
              // color="#D6D6FF"
              
              inputstyle={styles.textField}
            />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                <TextField
              id="datetime-local"
              label="Date Time"
              type="datetime-local"
              defaultValue="2021-01-01T00:00"
              fullWidth
              onChange={onChangeInputDateTime}
              InputLabelProps={{
                shrink: true,
              }}
              style={{ margin: 8, fontFamily: 'Poppins', marginBottom: 15}}
              inputProps={{style: {fontSize: 15,  fontFamily: 'Poppins', fontWeight: 300},}}
              InputLabelProps={{style: {fontSize: 16, fontFamily: 'Poppins' }, shrink: true, }}
            />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                <TextField className="custom-input"
              id="Location"
              label="Location"
              style={{ margin: 8, fontFamily: 'Poppins', marginBottom: 10}}
              defaultValue= {this.state.mypage.location}
              //laceholerProps={{style: {color='#383838'}}}
              fullWidth
              onChange={onChangeInputLocation} 
              //defaultValue={location_default}
              placeholder={String(this.state.mypage.location)}
              //defaultValue={String(this.state.mypage.location)}
              margin="normal"
              inputProps={{style: {fontSize: 16,  fontFamily: 'Poppins', fontWeight: 300},}}
              InputLabelProps={{style: {fontSize: 16, fontFamily: 'Poppins' }, shrink: true, }}
              //color="#D6D6FF"
              // color="#383838"
              inputstyle={styles.textField}
            />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                <TextField className="custom-input"
              id="Memo"
              label="Memo"
              style={{ margin: 8, fontFamily: 'Poppins', marginBottom: 40}}
              placeholder="Dresscode, menu, etc"
              fullWidth
              onChange={onChangeInputMemo} 
              margin="normal"
              inputProps={{style: {fontSize: 16,  fontFamily: 'Poppins', fontWeight: 300},}}
              InputLabelProps={{style: {fontSize: 16, fontFamily: 'Poppins' }, shrink: true, }}
              // color="#D6D6FF"
              inputstyle={styles.textField}
            />
                </div>
            </div>
        </div>


            
            
            
            
            
          </form>
          
            
          </ThemeProvider></div>
      );
    }
  }

  export default OpenPartyInfo