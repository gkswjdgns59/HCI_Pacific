import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";


const styles = {
    textField: {
    fontSize: 50, //works!
 }
}

class FormSubmission extends React.Component {
    constructor(props) {
      super(props);
    }
    
    render() {
      return  (
        <div>
          <h1
            style={{ margin: 8 ,fontFamily: 'Poppins', marginBottom: 10}}
            >Open Party</h1>
            <h2
            style={{ margin: 8 ,fontFamily: 'Poppins', marginBottom: 30}}
            >
                Fill in the blocks to open your party.
            </h2>
          <form noValidate>
          <TextField className="custom-input"
            id="standard-basic"
            label="Party Name"
            style={{ margin: 8, fontFamily: 'Poppins'}}
            placeholder="My Party Name"
            //helperText="Full width!"
            fullWidth
            size='large'
            margin="normal"
            inputProps={{style: {fontSize: 18}, fontFamily: 'Poppins'}}
            InputLabelProps={{style: {fontSize: 16}, shrink: true, fontFamily: 'Poppins'}}
            color="#D6D6FF"
            inputStyle={styles.textField}
            //HelperLabelProps={{style: {fontSize: 200},fontFamily: 'Poppins'}}


            />
            <TextField 
                id="standard-basic" 
                label="My Party Name" 
                style={{ margin: 8 }}
                fullWidth
                margin="normal"
                inputStyle={styles.textField}
                inputProps={{style: {fontSize: 20}, fontFamily: 'Poppins'}}
                LabelProps={{style: {fontSize: 100}, shrink: true, fontFamily: 'Poppins'}}
                
                
                />
             <TextField
          id="standard-full-width"
          label="Label"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
            
          </form>
        </div>
      );
    }
  }

  export default FormSubmission