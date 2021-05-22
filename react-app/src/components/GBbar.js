import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const item = {
    position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)'
}
const item2 = {
    position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: "1px",
    margin: 0
}

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch'
      },
    },
  }));
  
export default function GBbar() {
    const classes = useStyles();

    return (
        <div className="container-fluid" style={{height: "50px"}}>
                <div className="row">
                    <div className="col-md-8"></div>
                    <div className="col-md-1">
                    <Typography style={item}>
                        <i class="fas fa-plus"></i>
                    </Typography>
                    </div>
                    <div className="col-md-1" >
                        <div style={item2}>Sort by : Date</div>
                    </div>
                    <div className="col-md-2">
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField label="Search"
                        id="outlined-size-small"
                        defaultValue=""
                        variant="outlined"
                        size="small" 
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