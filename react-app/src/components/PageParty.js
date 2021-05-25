import React, { Component } from 'react';
import Header from "./header";
import PartiesMainFirebase from "./PartiesMainFirebase"
import PartiesTab from './PartiesTab'
import {Guests} from './Guests'

export default class PageParties extends Component{
    render(){
        return(
            <div>
                <Header />
                <PartiesMainFirebase partyName='HBD Jaeryung' />
                <PartiesTab />
                <Guests party_name='HBD Jaeryung' />
            </div>
        )
    }
}