import React, { Component } from 'react';
import Header from "./header";
import Parties from './Parties';
import {Parties_page_tab} from './Parties_page_tab';

export default class PageParties extends Component{
    render(){
        return(
            <div>
                <Header />
                <Parties_page_tab />
                <Parties />
            </div>
        )
    }
}