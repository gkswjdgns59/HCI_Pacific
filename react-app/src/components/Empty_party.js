import React, { Component } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import empty_party_img from '../images/empty_party.png'
import { BrowserRouter, Router, Switch, Link, Route, withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { Card, CardActionArea, CardMedia } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    root: {
        width:'100%',
        color:'e2e2e2',
        paddingTop: '20px'
    },
    text: {
        color:'#e2e2e2'
    }
}));


const Empty_party = ({ location, match, history }) => {
    const classes = useStyles();
    return (
        // <div button onClick>
        //     <div align='center'  >
        //         <img src={empty_party_img} width='100%' ></img>
        //     </div>
        <Card className={classes.root} elevation={0}>
            <Link to='/open' style={{textDecoration:'none'}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={empty_party_img}
                    />
                </CardActionArea>
            </Link>
        </Card>
        // </div>
    )
}
export default withRouter(Empty_party);