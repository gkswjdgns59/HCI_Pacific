import React, { useEffect, useState, Component } from 'react';
import {Mypage} from './Mypage';
import Header from './Header';

export default class PageMypage extends Component{
    render(){
        window.scrollTo(0, 0)
        return(
            <div>
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-md-offset-2 col-md-8">
                        <Mypage />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
