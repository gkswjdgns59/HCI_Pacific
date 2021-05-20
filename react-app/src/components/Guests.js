import React, { Component } from 'react'
import {Single_guest} from './Single_guest';
import {Empty_guest} from './Empty_guest';

const guests_list=[{num:"1",fill:"#222222"},{num:"1",fill:"#555555"},{num:"1",fill:"#aaaaaa"},{num:"1",fill:"#333333"},{num:"1",fill:"#555555"},{num:"1",fill:"#555555"}]

export default class Guests extends Component {
    render() {
        const guests=guests_list.map(guest=>{
            return (
                <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                    <Single_guest num={guest.num} fill={guest.fill} />
                </div>
            )
        })
        return(
            <div>
                <div class="row">
                    {guests}
                    <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2" align='center'>
                        <Empty_guest></Empty_guest>
                    </div>
                </div>
            </div>
        )
    }
}