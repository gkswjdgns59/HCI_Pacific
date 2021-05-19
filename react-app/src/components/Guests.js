import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import {Single_guest} from './Single_guest';

export default class Guests extends Component {
    color = '#e6e6fa'
    num='1'
    render() {
        return (
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={2}>
                        <Single_guest num={this.num} fill={this.color}></Single_guest>
                    </Grid>
                    <Grid item xs={2}>
                        xs=2
                    </Grid>
                    <Grid item xs={2}>
                        xs=2
                    </Grid>
                    <Grid item xs={2}>
                        xs=2
                    </Grid>
                    <Grid item xs={2}>
                        xs=2
                    </Grid>
                    <Grid item xs={2}>
                        xs=2
                    </Grid>
                </Grid>
            </div>
        )
    }
}