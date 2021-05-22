import React, { Component } from 'react'
import {Single_guest} from './Single_guest';
import {Empty_guest} from './Empty_guest';

const guests_list=[{num:"1",fill:"#222222", id:"Sehoon Lim"},{num:"2",fill:"#555555", id:"Jeonghoon Han"},{num:"1",fill:"#aaaaaa", id:"Byungwoo Choi"},{num:"3",fill:"#333333", id:"Woojeong Jun"},{num:"1",fill:"#555555", id:"Jayun Ku"},{num:"2",fill:"#555555",id:"Gahyeon Lee"},{num:"2",fill:"#aaaaaa",id:"Seokju Lee"}]

export default class Guests extends Component {
    render() {
        const guests=guests_list.map((guest,index) => {
            return (
                <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                    <Single_guest num={guest.num} fill={guest.fill} key={index} showStamp={true} />
                </div>
            )
        })
        return(
            <div>
                <div className="row">
                    {guests}
                    <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2" align='center'>
                        <Empty_guest></Empty_guest>
                    </div>
                </div>
            </div>
        )
    }
}