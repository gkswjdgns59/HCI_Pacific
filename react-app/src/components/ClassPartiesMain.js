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

class ClassPartiesMain extends Component{
    constructor(){
        super()
        this.state={
            value:0
        }
    }
    handleChange = (event, newValue) => {
        this.setState({value:newValue})
    }
    render(){
        return(
            <div >
      <Grid container spacing={3}>
        <Grid item xs={1}></Grid>
        <Grid item xs={6}>
          <Paper>
          <form  noValidate>
      
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
                //className={classes.textField}
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
        </Grid>

        <Grid
          justify="center" alignContent="center" alignItems="center"  item xs={0} >
          <Button variant="outlined" onClick={() => { alert('clicked') }}>    <EditOutlinedIcon fontsize="small" style={{color:'#A9A9FF' }}/> </Button>
          
        </Grid>

        <Grid justify="center" alignContent="center" alignItems="center" item xs={0}>
          <ColorButton variant="contained" color="primary" onClick={() => { alert('clicked') }} >    <SendOutlinedIcon fontsize="small" style={{color:'#A9A9FF' }}/></ColorButton>
        </Grid>
      </Grid>

    </div>
        )
    }
}
  
  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText('#F3F3FF'),
      backgroundColor: '#F3F3FF',
      '&:hover': {
        backgroundColor: '#E0E0FF',
      },
    },
  }))(Button);


  export default ClassPartiesMain;