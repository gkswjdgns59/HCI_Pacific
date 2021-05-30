import React, { Component } from 'react';
import Header from "./Header";
import Parties from './Parties';

export default class PageParties extends Component{
    render(){
        return(
            <div>
                <Header />
                <Parties />
            </div>
        )
    }
}