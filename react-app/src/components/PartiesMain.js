import React from 'react';
import { createMuiTheme, withStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';


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
const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText('#F3F3FF'),
      backgroundColor: '#F3F3FF',
      '&:hover': {
        backgroundColor: '#E0E0FF',
      },
    },
  }))(Button);

// var partyName = 'HBD Jaeryung'
// var partyDateTime = '2021-05-13T19:00'
// var partyLocation = '52, Rose Street, Daejeon'
// var partyMemo = 'Dresscode: Red'

class PartiesMain extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            parties: {}
        };
        //var partyName = this.props.partyName  
        //var partyName = 'HBD Jaeryung'
    }
    
    _get() {
        fetch(`${databaseURL}/Parties/${this.props.partyname}.json`).then(res => {
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

                        
        return(
            <div><ThemeProvider theme={theme}>
                <div class="container" style={{marginBottom:40, borderBottom:'1px solid #EAEAEA', paddingBottom:'3%'}}> 
                    <div class="row" style={{marginBottom:10}}>
                        <div class="col-sm-9">
                        <h1 style={{ fontFamily: 'Poppins', marginBottom: 10, color:'#A9A9FF', fontWeight:500}}
                            ><b>{this.props.partyname}</b></h1>
                        </div>

                        <div class="col-sm-offset-0 col-sm-1">
                        <Button variant="outlined" onClick={() => { alert('clicked') }}><EditOutlinedIcon fontsize="small" style={{color:'#A9A9FF', borderBlockColor: '#A9A9FF', }}/> </Button>
                        </div>

                        <div class="col-sm-offset-1 col-sm-1">
                        <ColorButton variant="contained" color="primary" onClick={() => { alert('clicked') }} >    <SendOutlinedIcon fontsize="small" style={{color:'#A9A9FF' }}/></ColorButton>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-sm-offset-0 col-sm-2"><h1
                            style={{fontFamily: 'Poppins', fontSize: 16, color:'#ADADAD', fontWeight:300}}
                            >Date / Time   </h1></div>
                        <div class="col-sm-7">
                        <h2
                            style={{ fontFamily: 'Poppins', marginBottom: 5, color:'#383838', fontSize: 16, fontWeight:300}}
                            >{String(partyDate) +' / '+ String(partyTime)}</h2>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-2"><h1
                            style={{fontFamily: 'Poppins', fontSize: 16, color:'#ADADAD', fontWeight:300}}
                            >Location </h1></div>
                        <div class="col-sm-7">
                        {
                                partyLocation==null
                                ? <h2
                                style={{ fontFamily: 'Poppins', marginBottom: 5, color:'#ADADAD', fontSize: 16, fontWeight:300}}
                                >no location</h2>
                                : <h2
                                style={{ fontFamily: 'Poppins', marginBottom: 5, color:'#383838', fontSize: 16, fontWeight:300}}
                                >{String(partyLocation)}</h2>

                                
                            }
                            
                            
                            </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-2"><h1
                            style={{fontFamily: 'Poppins', fontSize: 16, color:'#ADADAD', fontWeight:300}}
                            >Memo </h1></div>
                        <div class="col-sm-7">
                            {
                                partyMemo==null
                                ? <h2
                                style={{ fontFamily: 'Poppins', marginBottom: 5, color:'#ADADAD', fontSize: 16, fontWeight:300}}
                                >no memo</h2>
                                : <h2
                                style={{ fontFamily: 'Poppins', marginBottom: 5, color:'#383838', fontSize: 16, fontWeight:300}}
                                >{String(partyMemo)}</h2>

                                
                            }
                            
                            </div>
                    </div>
                </div>
            </ThemeProvider></div>
        )
    }
}

export default PartiesMain