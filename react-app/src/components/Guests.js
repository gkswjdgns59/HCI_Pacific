import React, { useEffect, useState, Component } from 'react'
import {Single_guest} from './Single_guest';
import {Empty_guest} from './Empty_guest';
import firebase from './Firebase.js'
import { Route, Link, BrowserRouter } from 'react-router-dom';

// const guests_list=[{num:"1",fill:"#222222", id:"Sehoon Lim"},{num:"2",fill:"#555555", id:"Jeonghoon Han"},{num:"1",fill:"#aaaaaa", id:"Byungwoo Choi"},{num:"3",fill:"#333333", id:"Woojung Jun"},{num:"1",fill:"#555555", id:"Jayun Ku"},{num:"2",fill:"#555555",id:"Gahyeon Lee"},{num:"2",fill:"#aaaaaa",id:"Seokju Lee"}]


export const Guests = ({party_name}) => {
    const [guests, setGuests] = useState([]);
    const userRef = firebase.database();

    // const get_guests = () => {
    //     firebase.database().ref('Guests/' + '/starCount').on('value', (snapshot) => {
    //         for(let guest_name in snapshot.val()) {
    //             var guest = snapshot.val()[guest_name]
    //             console.log(guest_name)
    //             guests_list+= {num: guest.blob_num, fill: guest.blob_fill}
    //         }
    //     })
    // }

    useEffect(() => {
        if(party_name != null) {
            userRef.ref('/Parties/'+party_name+'/guests').on('value', snapshot => {
                const users = snapshot.val();
                const guests_name = [];
                for(let id in users) {
                    guests_name.push( id );
                }
                userRef.ref('/Guests').on('value', snapshot => {
                    const users = snapshot.val()
                    const usersData=[];
                    for(let guest_name of guests_name) {
                        var data={}
                        data[guest_name]=users[guest_name]
                        usersData.push(data)
                    }
                    console.log(usersData)
                    setGuests(usersData)
                })
            })
        }
        else{
            userRef.ref('/Guests').on('value', snapshot => {
                const users = snapshot.val(); //전체 Map
                const usersData = [];
                for(let id in users) { //id가 key 값들을 하나씩 가짐
                    var data = {}
                    data[id]= users[id] //users[id]하면 해당 key의 data
                    // console.log(data)
                    usersData.push( data );
                }
                setGuests(usersData);
            })
        }
      }, []);

    const put_guests=guests.map((guest,index) => {
        // console.log(guest)
        var name;
        for(let guest_name in guest){
            name=guest_name
        }
        return (
            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                <Single_guest num={guest[name].blob_num} fill={guest[name].blob_fill} key={index} name={name} showStamp={true}/>
            </div>
        )
    })

    return(
        <div>
            <div className="row">
                {put_guests}
                <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2" align='center'>
                    <Empty_guest></Empty_guest>
                </div>
            </div>
        </div>
    )
}

