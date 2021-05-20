import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Paper } from '@material-ui/core';
import { createMuiTheme, withStyles, ThemeProvider} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      fontFamily: 'Poppins',
      marginLeft: theme.spacing(20),      
      //width: 400,
      marginBottom: 20,
      //marginRight: theme.spacing(10),
      outerHeight: 50,
      width: 1200,
      //wrap: 'nowrap',
      
      
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 240,
      },
    },
  },
  
  Paper : {
    width: 400,
    innerWidth:300 
  },
  '.MuiGrid-container'	: {
    // display: 'flex',
    // flexWrap: 'wrap',
    fontFamily: 'Poppins',
    outerHeight: 50,
  },
  TextField: {
    fontFamily: 'Poppins',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 1000,
    maxLines: 1
    //fontWeight: 300,
  },
  Grid:{
    
  }

}));


const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText('#F3F3FF'),
    backgroundColor: '#F3F3FF',
    '&:hover': {
      backgroundColor: '#E0E0FF',
    },
  },
}))(Button);

export default function PartiesMain() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <form className={classes.container} noValidate>
      
      <TextField
          id="standard-multiline-flexible"
          label="Title"
          defaultValue="My Birthday Party"
          multiline
          rowsMax={4}
          fontFamily= 'Poppins'
          disabled id="standard-disabled" 
        />
        <TextField
          id="datetime-local"
          label="Date/Time"
          type="datetime-local"
          defaultValue="2021-05-13T19:00"
          className={classes.textField}
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
          justify="center" alignContent="center" alignItems="center" item xs={1.2}>
          <Button variant="outlined" onClick={() => { alert('clicked') }}>View & Edit</Button>
          
        </Grid>
        <Grid justify="center" alignContent="center" alignItems="center" item xs={1}>
          <ColorButton variant="contained" color="primary" onClick={() => { alert('clicked') }} >
          Send
          </ColorButton>
        </Grid>

      </Grid>


    </div>
  );
}
