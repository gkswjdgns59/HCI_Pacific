import React, { useState, useEffect } from 'react';
import TextField from "@material-ui/core/TextField";
import {Input} from "@material-ui/core"
import { createMuiTheme, withStyles, ThemeProvider } from '@material-ui/core/styles';
import firebase from './Firebase.js'
import Auth from './Auth'
// const databaseURL = "https://dp4-test-c4be7-default-rtdb.firebaseio.com/";
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
      },
      secondary:{
        main: "#ABABAB"
    }
  }
})

const styles = {
    textField: {
    fontSize: 50, //works!
 }
}




class EditPartyInfo extends React.Component {
    constructor(props) {
      super(props);
      
      this.isEmpty=false
      this.state = {
              mypage: {location:""},
              //isEmpty: false
              party:{}
          };


    }
    


    _get() {
      fetch(`${databaseURL}/${Auth.auth}/Parties/${this.props.partyname}.json`).then(res => {
      if(res.status != 200) {
      throw new Error(res.statusText);
      }
      return res.json();
      }).then(party => this.setState({party: party}));
      }
      
  shouldComponentUpdate(nextProps, nextState) {
      return nextState.party != this.state.party
  }
      
  componentDidMount() {
      this._get();
  }

    render() {
      //var location_default = this.state.mypage.location
      //var location_default = "52, Rose street, Daejeon"
      //console.log(location_default)
      //info_list[2]=this.state.mypage.location
      //console.log(this.state.party,'party')
      
      const initial=this.state.party
      const info_list = [initial.name, "", "", ""]
      //console.log(info_list, 'all string?')
      //const initial_name=initial.name
      //const initial_dateTime=this.state.party.dateTime
      var initial_location=initial.location
      if (initial_location==""){
        initial_location="Type in your location"
      }
      const initial_memo=initial.memo
      const initial_dateTime=initial.dateTime
      
      //console.log(this.props.partyname, '왜안됨')

      const setInfo = this.props.setInfo;
      const databaseURL = "https://aster-42bcb-default-rtdb.firebaseio.com/";
      const userRef = firebase.database();
      //const initial=this.state.party
      const initial_name=this.props.partyname
      var firebase_partyname=this.props.partyname
      


      const onChangeInputName = (event) => {
        info_list[0]=event.target.value
        var data=this.props.info;
        data['name']=info_list[0]
        data['dateTime']=info_list[1]
        data['location']=info_list[2]
        data['memo']=info_list[3]
        //console.log(info_list)
        console.log(data)
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
        //console.log(info_list)
        setInfo(data)
      }
      const onChangeInputLocation = (event) => {
        info_list[2]=event.target.value
        var data=this.props.info;
        data['name']=info_list[0]
        data['dateTime']=info_list[1]
        data['location']=info_list[2]
        data['memo']=info_list[3]
        //console.log(info_list)
        //console.log(data)
        setInfo(data)
      }
      const onChangeInputMemo = (event) => {
        info_list[3]=event.target.value
        var data=this.props.info;
        data['name']=info_list[0]
        data['dateTime']=info_list[1]
        data['location']=info_list[2]
        data['memo']=info_list[3]
        //console.log(info_list)
        //console.log(data)
        setInfo(data)
      }
      //console.log(this.props.partyname)


      const newdateTime = String(initial_dateTime);
      var time = newdateTime.substring(newdateTime.length-5,newdateTime.length)
      var year = newdateTime.substring(0, newdateTime.length-12)
      var month = newdateTime.substring(newdateTime.length-11, newdateTime.length-9)
      var date = newdateTime.substring(newdateTime.length-8, newdateTime.length-6)
      var dateTime_show= 'Date : '+ year +' . ' + month +' . ' + date+' , Time : ' +time

      return  (
        <div><ThemeProvider theme={theme}>
          
          {/* <h1
            style={{ fontFamily: 'Poppins', marginBottom: 10, color:'#A9A9FF'}}
            ><b>Edit Party Information</b></h1> */}
          <h1 style={{ fontFamily: 'Poppins', marginBottom: 10, color:'#A9A9FF', fontWeight:500}}
                            ><b>{this.props.partyname}</b></h1>
                            
            <h2
            style={{ fontFamily: 'Poppins', marginBottom: 40, color:'#A9A9FF', fontSize: 14}}
            >Edit your Party Information and Notices.</h2>

            <h2
            style={{fontFamily: 'Poppins', fontSize: 16, color:'#383838', marginBottom:20}}
            ><b>Basic Information</b></h2>
            

          <form noValidate>

          <div className="container">
            {/* <div className="row">
                <div className="col-sm-12">
                <TextField className="custom-input"
              id="Party Name"
              label="Party Name: You cannot edit your party name"
              style={{ margin: 8, fontFamily: 'Poppins', marginBottom: 15}}
              //defaultValue={initial_name}
              value={initial_name}
              //placeholder={initial_name}
              //disabled
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
            </div> */}
            <div className="row">
              <div className="col-sm-12">
                  <p
                style={{ fontFamily: 'Poppins', marginBottom: -5, paddingLeft: 8, color:'#666666', fontSize: 12, fontWeight: 200}}
                >{dateTime_show}</p>
              </div>

                
                <div className="col-sm-12">

                  
                <Input
              id="datetime-local"
              label={"Date Time" + initial_dateTime}
              type="datetime-local"
              defaultValue={newdateTime}
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

            {/* <div className="col-sm-12">
                  <p
                style={{ fontFamily: 'Poppins', marginBottom: -10, paddingLeft: 8, color:'#A9A9FF', fontSize: 14}}
                >Location</p>
              </div> */}

                <div className="col-sm-12">
                <TextField className="custom-input"
              id="Location"
              label="Location"
              style={{ margin: 8, fontFamily: 'Poppins', marginBottom: 40}}
              placeholder={initial_location}
              //laceholerProps={{style: {color='#383838'}}}
              fullWidth
              onChange={onChangeInputLocation} 
              //defaultValue={location_default}
              //placeholder={String(this.state.mypage.location)}
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
            {/* <div className="row">

                <div className="col-sm-12">
                <TextField className="custom-input"
              id="Memo"
              label="Memo"
              style={{ margin: 8, fontFamily: 'Poppins', marginBottom: 40}}
            
              placeholder={initial_memo}
              //placeholder="Dresscode, menu, etc"
              fullWidth
              onChange={onChangeInputMemo} 
              margin="normal"
              inputProps={{style: {fontSize: 16,  fontFamily: 'Poppins', fontWeight: 300},}}
              InputLabelProps={{style: {fontSize: 16, fontFamily: 'Poppins' }, shrink: true, }}
              // color="#D6D6FF"
              inputstyle={styles.textField}
            />
                </div>
            </div> */}
        </div>


            
            
            
            
            
          </form>
          
            
          </ThemeProvider></div>
      );
    }
  }

  export default EditPartyInfo