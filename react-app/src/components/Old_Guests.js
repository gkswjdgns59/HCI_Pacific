import React, { Component } from 'react'
import {Single_guest} from './Single_guest';
import {Empty_guest} from './Empty_guest';
import {Guest_info} from './Guest_info'
import { Route, Link, BrowserRouter } from 'react-router-dom';

const databaseURL = "https://dp4-test-c4be7-default-rtdb.firebaseio.com/";

// const guests_list=[{num:"1",fill:"#222222", id:"Sehoon Lim"},{num:"2",fill:"#555555", id:"Jeonghoon Han"},{num:"1",fill:"#aaaaaa", id:"Byungwoo Choi"},{num:"3",fill:"#333333", id:"Woojung Jun"},{num:"1",fill:"#555555", id:"Jayun Ku"},{num:"2",fill:"#555555",id:"Gahyeon Lee"},{num:"2",fill:"#aaaaaa",id:"Seokju Lee"}]



export default class Guests extends Component {
    constructor() {
        super();
        this.state = {
            guests: {},
            party_guests:{},
            temp_guests:{}
        };
    }

    _get() {
        if(this.props.party_name != null){
            

            fetch(`${databaseURL}/Parties/${this.props.party_name}/guests.json`).then(res =>{
                if(res.status != 200) {
                    throw new Error(res.statusText);
                }
                return res.json();
            }).then(guest => {
                this.setState({party_guests: guest.name})

                var data={}
                for(let guest in this.state.party_guests){
                    fetch(`${databaseURL}/Guests/${guest.name}.json`).then(res =>{
                        data+={guest: res}
                    }).then(this.setState({guests:data}))
                }
                
            })

            

            // fetch(`${databaseURL}/Guests.json`).then(res =>{
            //     if(res.status != 200) {
            //         throw new Error(res.statusText);
            //     }
            //     return res.json();
            // }).then(guests => {
            //     var data={}
            //     for(let guest in this.state.party_guests){
            //         data += {guest:guests[guest]}
            //     }
            //     this.setState({guests: data})
            // })
            
            // for(let guest in this.state.party_guests){
            //     var data={guest:this.state.temp_guests[guest]}
            //     this.setState({guests:data})
            // }
        }
        else{
            fetch(`${databaseURL}/Guests.json`).then(res =>{
                if(res.status != 200) {
                    throw new Error(res.statusText);
                }
                return res.json();
            }).then(guest => this.setState({guests: guest}))
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.guests != this.state.guests;
    }

    componentDidMount() {
        this._get();
    }

    guests_to_render = (guests, partyname) => {
        
    }

    render() {
        // const guests=guests_list.map((guest,index) => {
        //     return (
                // <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                //     <Single_guest num={guest.num} fill={guest.fill} key={index} showStamp={true} />
                // </div>
        //     )
        // })
        // const get_guests = () => {
        //     firebase.database().ref('Guests/' + '/starCount').on('value', (snapshot) => {
        //         for(let guest_name in snapshot.val()) {
        //             var guest = snapshot.val()[guest_name]
        //             console.log(guest_name)
        //             guests_list+= {num: guest.blob_num, fill: guest.blob_fill}
        //         }
        //     })
        // }
        return(
            <div>
                <div className="row">
                    {Object.keys(this.state.guests).map(name =>{
                        const guest = this.state.guests[name];
                        return (
                            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                                <BrowserRouter>
                                    <Link to="/Empty_guest">
                                        <Single_guest num={guest.blob_num} fill={guest.blob_fill} key={name} name={name} showStamp={true} />
                                    </Link>
                                </BrowserRouter>
                            </div>
                        )
                    })}
                    <div className="col-xs-6 col-sm-4 col-md-3 col-lg-2" align='center'>
                        <Empty_guest></Empty_guest>
                    </div>
                </div>
            </div>
        )
    }
}