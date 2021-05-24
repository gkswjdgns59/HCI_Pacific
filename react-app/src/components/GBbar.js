import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const item = {
    position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: 15
}
const item2 = {
    position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: "1px",
    margin: 0
}
  
export default function GBbar() {
    return (
        <div className="container-fluid" style={{height: "50px"}}>
                <div className="row">
                    <div className="col-md-9"></div>
                    <div className="col-md-1">
                    <Typography style={item}>
                        <i class="fas fa-plus"></i>
                    </Typography>
                    </div>
                    <div className="col-md-2">
                    <form>
                        <TextField
                        placeholder="Search"
                        id="standard-basic"
                        style={{ margin: 8, fontFamily: 'Poppins'}}
                        inputProps={{style: {fontSize: 8}, fontFamily: 'Poppins'}}
                        InputLabelProps={{style: {fontSize: 8}, shrink: true, fontFamily: 'Poppins'}}
                        defaultValue=""
                        variant="outlined"
                        size="small"
                        color="#D6D6FF" 
                        />
                    </form>
                    </div>
                </div>
            </div>
        
    );
}

// class gbbar extends Component{
//     render(){
//         return(
//             <div className="container-fluid">
//                 <div className="row">
//                     <div className="col-md-8"></div>
//                     <div className="col-md-1">
//                     <Typography align='center'>
//                         <i class="fas fa-plus"></i>
//                     </Typography>
//                     </div>
//                     <div className="col-md-2">

//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }