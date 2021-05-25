import React from 'react';
import { createMuiTheme, withStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';



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

var partyName = 'HBD Jaryung'
var partyDateTime = '2021-05-13T19:00'
var partyLocation = '52, Rose Street, Daejeon'
var partyMemo = 'Dresscode: Red'

class PartiesMainNew extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div><ThemeProvider theme={theme}>
                <h1>{this.props}</h1>
                <div class="container" style={{marginBottom:40}}> 
                    <div class="row" style={{marginBottom:10}}>
                        <div class="col-sm-9">
                        <h1 style={{ fontFamily: 'Poppins', marginBottom: 10, color:'#A9A9FF'}}
                            ><b>{partyName}</b></h1>
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
                            style={{fontFamily: 'Poppins', fontSize: 16, color:'#ADADAD'}}
                            >Date / Time   </h1></div>
                        <div class="col-sm-7">
                        <h2
                            style={{ fontFamily: 'Poppins', marginBottom: 5, color:'#383838', fontSize: 16}}
                            >{String(partyDateTime).slice(0,10) +' / '+ String(partyDateTime).slice(11,16)}</h2>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-2"><h1
                            style={{fontFamily: 'Poppins', fontSize: 16, color:'#ADADAD'}}
                            >Location </h1></div>
                        <div class="col-sm-7"><h2
                            style={{ fontFamily: 'Poppins', marginBottom: 5, color:'#383838', fontSize: 16}}
                            >{String(partyLocation)}</h2></div>
                    </div>
                    
                    <div class="row">
                        <div class="col-sm-2"><h1
                            style={{fontFamily: 'Poppins', fontSize: 16, color:'#ADADAD'}}
                            >Memo </h1></div>
                        <div class="col-sm-7"><h2
                            style={{ fontFamily: 'Poppins', marginBottom: 5, color:'#383838', fontSize: 16}}
                            >{String(partyMemo)}</h2></div>
                    </div>
                </div>

            </ThemeProvider></div>
        )
    }
}

export default PartiesMainNew