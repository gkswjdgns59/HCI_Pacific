import React, { useEffect, useState, Component } from 'react';
import GBbar from './GBbar';
import Guests from './Guests';
import Header from './Header';

export default class PageGuestbook extends Component{
    render(){
        return(
            <div>
                <Header />
                <Guests />
            </div>
        )
    }
}