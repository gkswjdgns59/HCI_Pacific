import React, { Component } from 'react';
import { Paper, Tab, Tabs } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Roulette from './Roulette.js';
import { Switch, Link, Route, BrowserRouter, Redirect } from 'react-router-dom';
import styled from 'styled-components'

class GuestInfoTab extends Component{
    constructor(){
        super();
        this.state = {
            value: 0
        }
    }
    handleChange = (event, newValue) => {
        this.setState({value:newValue});
    }
    render(){
        return (
        <div>
            <BrowserRouter>
                <Paper elevation={0}>
                    <StyledTabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        centered
                    >
                        <StyledTab label="roulette" component={StyledLink} to={"/"}/>
                        <StyledTab label="records" />
                        <StyledTab label="statistics"/>
                    </StyledTabs>
                </Paper>
                <Redirect to={"/"} />
                <Switch>
                    <Route exact path="/">
                        <Roulette dataFromParent={this.props.dataFromParent} callbackFromParent={this.props.callbackFromParent}/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
        );
    }
}

const StyledTabs = withStyles({
    root: {
      borderBottom: '1px solid #e8e8e8',
    },
    indicator: {
      backgroundColor: '#E6E6FA',
    },
  })(Tabs);

const StyledTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        width: 100,
        fontWeight: 300,
        marginRight: theme.spacing(7),
        fontFamily: 'Poppins',
        '&:hover': {
            color: '#222222',
            opacity: 1,
        },
        '&$selected': {
            color: '#222222',
            fontWeight: 500,
        },
        '&:focus': {
            color: '#222222',
            fontWeight: 500,
        },
        color: '#A6A6A6',
        fontSize: '14px'
    },
    selected: {},
}))((props) => <Tab disableRipple {...props} />);

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        outline: 0;
    }
`;

export default GuestInfoTab;