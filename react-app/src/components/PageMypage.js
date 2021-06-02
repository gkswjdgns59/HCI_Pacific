import React, { useEffect, useState, Component } from 'react';
import {Mypage} from './Mypage';
import Header from './Header';

export default class PageMypage extends Component{
    render(){
        window.scrollTo(0, 0)
        return(
            <div>
                <Header />
                <Mypage />
            </div>
        )
    }
}
