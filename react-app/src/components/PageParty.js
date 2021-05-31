import React from 'react';
import Header from "./Header";
import PartiesMain from "./PartiesMain"
import Guests from './Guests'

export default function PageParty(props){
    window.scrollTo(0, 0)
    const name = props.match.params.partyname;

    return(
        <div>
            <Header />
            <PartiesMain partyname={name} />
            <Guests partyname={name} />
        </div>
    )
    
}