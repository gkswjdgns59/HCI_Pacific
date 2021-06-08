import React from 'react';
import { createMuiTheme, withStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import Auth from './Auth';
import firebase from './Firebase.js';

import { Link } from 'react-router-dom';

const databaseURL = "https://aster-42bcb-default-rtdb.firebaseio.com/";
const userRef=firebase.database();
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

// var partyName = 'HBD Jaeryung'
// var partyDateTime = '2021-05-13T19:00'
// var partyLocation = '52, Rose Street, Daejeon'
// var partyMemo = 'Dresscode: Red'

class PartiesMain extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            parties: {},
        };
        //var partyName = this.props.partyName  
        //var partyName = 'HBD Jaeryung'
    }
    guests = {};

    _get() {
        fetch(`${databaseURL}${Auth.auth}/Parties/${this.props.partyname}.json`).then(res => {
        if(res.status != 200) {
        throw new Error(res.statusText);
        }
        return res.json();
        }).then(parties => this.setState({parties: parties}));
        }
        
    shouldComponentUpdate(nextProps, nextState) {
        return nextState.parties != this.state.parties
    }
        
    componentDidMount() {
        this._get();
        let tempObj = {};
        userRef.ref(Auth.getAuth()+'/Parties/'+this.props.partyname+'/guests/').on('value',snapshot=>{
            const data = snapshot.val();
            this.guests=data;
            
        },[]);
    }
        
    render(){
        // return (
        //     <div>
        //     {Object.keys(this.state.words).map(id => {
        //var party = this.state.parties[this.props.partyName];
        //console.log(party)
        //var partyName = party.name
        var partyDateTime = this.state.parties.dateTime
        var arr1 = (String(partyDateTime)).split("T")
        var partyDate = arr1[0]
        var partyTime = arr1[1]
        var partyLocation = this.state.parties.location
        
        var partyMemo = this.state.parties.memo
        const sendInvitation= ()=>{
            let copyGuests = {}
            for (let i in this.guests){
                copyGuests[i] = true;
            }
            this.guests = copyGuests;
            userRef.ref(Auth.getAuth()+'/Parties/'+this.props.partyname+'/guests/').set(copyGuests);
            alert('Successfully Sent')
        }
                        
        return(
            <div><ThemeProvider theme={theme}>
                <div className="container" style={{marginBottom:40, borderBottom:'1px solid #EAEAEA', paddingBottom:'3%'}}> 


                <div style={{ width: '100%' }}>
                    <Box display="flex" p={1} >
                        <Box p={1} flexGrow={1} >
                        <h1 style={{ fontFamily: 'Poppins', marginBottom: 10, color:'#A9A9FF', fontWeight:500}}
                            ><b>{this.props.partyname}</b></h1>
                        </Box>
                        <Box p={1} >
                        <Link to={`${this.props.partyname}/edit`} style={{textDecoration:'none'}}>
                        <Button  size="large" variant="outlined" color="secondary" >Edit </Button>
                        </Link>
                        </Box>
                        <Box p={1} >
                        <Button size="large" variant="outlined" color="primary" onClick={()=>{sendInvitation()}} > Send   </Button>
                        </Box>
                    </Box>
                    </div>
                    
{/* <EditOutlinedIcon fontsize="small" style={{color:'#A9A9FF', borderBlockColor: '#A9A9FF', }}/>
<SendOutlinedIcon fontsize="small" style={{color:'#A9A9FF' }}/> */} 




                    <div className="row">
                        <div className="col-sm-offset-0 col-sm-2"><h1
                            style={{fontFamily: 'Poppins', fontSize: 16, color:'#ADADAD', fontWeight:300}}
                            >Date / Time   </h1></div>
                        <div className="col-sm-7">
                        <h2
                            style={{ fontFamily: 'Poppins', marginBottom: 5, color:'#383838', fontSize: 16, fontWeight:300}}
                            >{String(partyDate) +' / '+ String(partyTime)}</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-2"><h1
                            style={{fontFamily: 'Poppins', fontSize: 16, color:'#ADADAD', fontWeight:300}}
                            >Location </h1></div>
                        <div className="col-sm-7">
                        {
                                partyLocation==null
                                ? <h2
                                style={{ fontFamily: 'Poppins', marginBottom: 5, color:'#ADADAD', fontSize: 16, fontWeight:300}}
                                ></h2>
                                : <h2
                                style={{ fontFamily: 'Poppins', marginBottom: 5, color:'#383838', fontSize: 16, fontWeight:300}}
                                >{String(partyLocation)}</h2>

                                
                            }
                            
                            
                            </div>
                    </div>

                    
                </div>
            </ThemeProvider></div>
        )
    }
}

export default PartiesMain