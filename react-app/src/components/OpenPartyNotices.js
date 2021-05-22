import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';

const ariaLabel = { 'aria-label': 'description' };


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

function CustomCheckbox_checked() {
  const classes = useStyles();

  return (
    <Checkbox
      defaultChecked
      //defaultUnchecked
      //sx={{ '& .MuiSvgIcon-root': { fontSize: 200 } }}
      classes={{
        root: classes.root,
        checked: classes.checked,
      }}
      style={{fontSize:200}}
    />
  );
}
function CustomCheckbox_unchecked() {
    const classes = useStyles();
  
    return (
      <Checkbox
        //defaultChecked
        defaultUnchecked
        //sx={{ '& .MuiSvgIcon-root': { fontSize: 200 } }}
        classes={{
          root: classes.root,
          checked: classes.checked,
        }}
        style={{fontSize:200}}
      />
    );
  }

const theme = createMuiTheme({
  status: {
    use: '#A9A9FF',
    fontSize: 200
  },
  fontSize:200
});




export default function CustomStyles() {
  return (
    <ThemeProvider theme={theme}>
        <h2
            style={{ fontFamily: 'Poppins', fontSize: 16, color:'#383838'}}
            ><b>Notices</b></h2>
      <div class="container">
        <div class="row" marginBottom={20}>
            <div class="col-md-1">
                <CustomCheckbox_checked />
            </div>
            <div class="col-md-11">
            <Input 
                id='notice_input'
                defaultValue="Don't go on my bed!" inputProps={ariaLabel} 
                fullWidth
                style={{fontFamily: 'Poppins', fontSize:14, marginBottom: 15}}
                inputProps={{style: {fontSize: 14,  fontFamily: 'Poppins' , color:'#ADADAD'},}}
            />
            </div>
        </div>

        <div class="row">
            <div class="col-md-1">
                <CustomCheckbox_checked />
            </div>
            <div class="col-md-11">
            <Input 
                id='notice_input'
                defaultValue="We should not be too noisy!" inputProps={ariaLabel} 
                fullWidth
                style={{fontFamily: 'Poppins', fontSize:14, marginBottom: 15}}
                inputProps={{style: {fontSize: 14,  fontFamily: 'Poppins' , color:'#ADADAD'},}}
            />

            </div>
        </div>

        <div class="row">
            <div class="col-md-1">
                <CustomCheckbox_checked />
            </div>
            <div class="col-md-11">
            <Input 
                id='notice_input'
                defaultValue="Can someone bring paper tissues?" inputProps={ariaLabel} 
                fullWidth
                style={{fontFamily: 'Poppins', fontSize:14, marginBottom: 15}}
                marginBottom={20}
                inputProps={{style: {fontSize: 14,  fontFamily: 'Poppins' , color:'#ADADAD'},}}
            />
            </div>
        </div>


        <div class="row">
            <div class="col-md-1">
                <CustomCheckbox_unchecked />
            </div>
            <div class="col-md-11">
            <Input 
                id='notice_input'
                placeholder="Click to add more..." inputProps={ariaLabel} 
                fullWidth
                style={{fontFamily: 'Poppins', fontSize:14, marginBottom: 15}}
                marginBottom={20}
                inputProps={{style: {fontSize: 14,  fontFamily: 'Poppins' , color:'#ADADAD'},}}
            />
            </div>
        </div>




        </div>
      <p></p>
    </ThemeProvider>
  );
}
