import React, { Component } from 'react';
import { Paper, Tab, Tabs } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

class PartiesTab extends Component{
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
            <Paper>
                <StyledTabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    centered
                >
                    <StyledTab label="guests"/>
                    <StyledTab label="records"/>
                    <StyledTab label="bill split"/>
                </StyledTabs>
            </Paper>
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
        width: 150,
        fontWeight: 300,
        marginRight: theme.spacing(10),
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
        fontSize: '16px'
    },
    selected: {},
}))((props) => <Tab disableRipple {...props} />);
  
export default PartiesTab;