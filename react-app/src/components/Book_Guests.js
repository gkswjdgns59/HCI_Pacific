import React, { Component } from 'react';
import {Single_guest} from './Single_guest';

const text = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins",
    fontWeight: 300,
    fontSize: "10px"
}
const bg = {
    borderTop: "1px black solid"
}

export class BookGuests extends Component {
    render(){
        return(
            <div className="row" style={bg}>
                <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                        <Single_guest num="1" fill="#222222" />
                        <div style={text}>Byungwoo Choi</div>
                </div>
                <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                        <Single_guest num="1" fill="#222222" />
                        <div style={text}>Byungwoo Choi</div>
                </div>
                <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                        <Single_guest num="1" fill="#222222" />
                        <div style={text}>Byungwoo Choi</div>
                </div>
                <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                        <Single_guest num="1" fill="#222222" />
                        <div style={text}>Byungwoo Choi</div>
                </div>
            </div>
        )
    }
}

export default BookGuests