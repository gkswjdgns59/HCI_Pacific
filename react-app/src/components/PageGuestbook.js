import React, { useEffect, useState, Component } from 'react';
import Guests from './Guests';
import Header from './Header';

export default class PageGuestbook extends Component{
    render(){
        window.scrollTo(0, 0)
        return(
            <div>
                <Header />
                <Guests />
            </div>
        )
    }
}
