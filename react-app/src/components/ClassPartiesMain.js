import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Paper } from '@material-ui/core';
import { createMuiTheme, withStyles, ThemeProvider} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { Component } from 'react';

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText('#F3F3FF'),
    backgroundColor: '#F3F3FF',
    '&:hover': {
      backgroundColor: '#E0E0FF',
    },
  },
}))(Button);


class ClassPartiesMain extends Component{
  constructor(){
    super();
    this.state={
      value:0
    }
  }
  render(){
    return(
      <div class="container">
        <div class="row">
            <div class="col-md-offset-1 col-md-6">
            <Paper>
          <form noValidate>
      
            <TextField
                id="standard-multiline-flexible"
                label="Title"
                defaultValue="My Birthday Party"
                multiline
                rowsMax={2}
                fontFamily= 'Poppins'
                disabled id="standard-disabled" 
              />
              <TextField
                id="datetime-local"
                label="Date/Time"
                type="datetime-local"
                defaultValue="2021-05-13T19:00"
                InputLabelProps={{
                  shrink: true,
                }}
                fontFamily= 'Poppins'
                disabled id="standard-disabled" 
              />
              <TextField
                id="standard-multiline-flexible"
                label="Location"
                defaultValue="52, Rose street, Daejeon"
                multiline
                rowsMax={2}
                fontFamily= 'Poppins'  
                disabled id="standard-disabled"      
              />
              <TextField
                id="standard-multiline-flexible"
                label="Memo"
                defaultValue="Dresscode: red"
                multiline
                rowsMax={2}
                fontFamily= 'Poppins'  
                // variant='disabled'  
                disabled id="standard-disabled"    
              />
          </form>
          </Paper>
            </div>
            <div class="col-md-2"><Button variant="outlined" onClick={() => { alert('clicked') }}>    <EditOutlinedIcon fontsize="small" style={{color:'#A9A9FF' }}/> </Button></div>
            <div class="col-md-2">
              <ColorButton variant="contained" color="primary" onClick={() => { alert('clicked') }} >    <SendOutlinedIcon fontsize="small" style={{color:'#A9A9FF' }}/></ColorButton>
            </div>
        </div>
      </div> 
    )
  }

}
export default ClassPartiesMain;