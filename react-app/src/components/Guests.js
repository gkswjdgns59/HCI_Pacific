import React, { useEffect, useState } from 'react'
import {Single_guest} from './Single_guest';
import {Empty_guest} from './Empty_guest';
import firebase from './Firebase.js'
import SelectGuestDialog from './SelectGuestDialog'

const Guests = ({partyname}) => {
    const [guests, setGuests] = useState([]);
    const userRef = firebase.database();
    const [partyGuests, setPartyGuests] = useState([]);

    useEffect(() => {
        if(partyname != null) {
            userRef.ref('/Parties/'+partyname+'/guests').on('value', snapshot => {
                const users = snapshot.val();
                const guests_name = [];
                for(let id in users) {
                    guests_name.push( id );
                }
                userRef.ref('/Guests').on('value', snapshot => {
                    const users = snapshot.val()
                    const usersData=[];
                    for(let guest_name of guests_name) {
                        var data={};
                        data[guest_name]=users[guest_name];
                        usersData.push(data);
                        partyGuests.push({
                            key: guest_name,
                            label: guest_name
                        });
                        
                    }
                    setPartyGuests(partyGuests);
                    setGuests(usersData);
                })
            })
        }
        else{
            userRef.ref('/Guests').on('value', snapshot => {
                const users = snapshot.val();
                const usersData = [];
                for(let id in users) {
                    var data = {}
                    data[id]= users[id]
                    usersData.push( data );
                    partyGuests.push({
                        key: id,
                        label: id
                    });
                }
                setPartyGuests(partyGuests);
                setGuests(usersData);
            })
        }
      }, []);

    const put_guests=guests.map((guest,index) => {
        var name;
        for(let guest_name in guest){
            name=guest_name
        }
        return (
            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2" key={name} >
                <Single_guest num={guest[name].blob_num} fill={guest[name].blob_fill} key={name} name={name} showCoin={true} coins={guest[name].coins}/>
            </div>
        )
    })

    const parentCallback = (object) => {
        
        let tempPartyGuests = [];
        let tempGuests = [];
        userRef.ref('/Parties/'+partyname+'/guests').remove()
        for (let i in object){
            tempPartyGuests.push({
                key: i,
                label: i
            })
            let data = {};
            data[i] = object[i];
            tempGuests.push(data)
            userRef.ref('/Parties/'+partyname+'/guests/'+i).push(object[i]);
        }
        setPartyGuests(tempPartyGuests);
        setGuests(tempGuests);
        
    }

    const add_guest_version = () => {
        if(partyname != null){
            return(
                <SelectGuestDialog dataFromParent={partyGuests} callbackFromParent={parentCallback}></SelectGuestDialog>
            )
        }
        else {
            return <Empty_guest></Empty_guest>
        }
    }

    return(
        <div>
            <div className="row">
                {put_guests}
                <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2" align='center'>
                    {add_guest_version()}
                </div>
            </div>
        </div>
    )
}

export default Guests;