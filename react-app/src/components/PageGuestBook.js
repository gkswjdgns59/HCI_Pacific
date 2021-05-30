import React, { Component } from 'react'
import Header from './header'
import {Guests} from './Guests'
import GBbar from './GBbar'
import Board from './Board'

export default class PageGuestBook extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Board></Board>
                <GBbar></GBbar>
                <Guests></Guests>
            </div>
        )
    }
}
