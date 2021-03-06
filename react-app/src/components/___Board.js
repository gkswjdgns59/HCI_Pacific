import React, { Component } from 'react';
import {Single_guest} from './Single_guest';
import Typography from '@material-ui/core/Typography';

const box = {
    border: "3px #E6E6FA solid",
    borderRadius: 30,
    marginBottom: "30px"
}

const center = {
    display: "relative",
    justifyContent: "center",
    alignItems: "center",
    border: "3px #E6E6FA solid",
    borderRadius: 30,
    marginBottom: "30px"
}

const text = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins",
    fontWeight: 300,
    fontSize: "10px"
}

const award = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins",
    fontWeight: 500,
    fontSize: "10px",
    margin: "5px"
}

class Board extends Component{
    render(){
        return(
            <div className="container-fluid" align="center">
                <div className="col-lg-1"></div>
                <div className="row col-lg-10" align="center" style={center}>
                    {/* <div className="col-lg-10" style={box}> */}
                        <Typography align='right'>
                            <i style={{margin: "5px"}} className="fas fa-trophy"></i>
                            <i style={{marginRight: "13px"}} className="fas fa-list-ol"></i>
                        </Typography>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-2" style={{marginBottom: 10, padding: 0}}>
                            <Single_guest num="1" fill="#222222" />
                            <div style={text}>Byungwoo Choi</div>
                            <div align='center' style={award}>Most Stamps award</div>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-2"style={{marginBottom: 10, padding: 0}}>
                            <Single_guest num="1" fill="#2255FF" />
                            <div style={text}>Byungwoo Choi</div>
                            <div align='center' style={award}>Most Stamps award</div>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-2"style={{marginBottom: 10, padding: 0}}>
                            <Single_guest num="1" fill="#FF2255" />
                            <div style={text}>Byungwoo Choi</div>
                            <div align='center' style={award}>Most Stamps award</div>
                        </div>
                        <div className="col-lg-1"></div>
                    {/* </div> */}
                </div>
            </div>
        )
    }
}

export default Board;