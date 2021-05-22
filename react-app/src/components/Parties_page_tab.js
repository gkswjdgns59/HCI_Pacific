import React from 'react'
import { Button, Paper, Tab, Tabs } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    tab:{
        borderBottom: '1px solid #222222',
        height: 35,
        width: '100%',
    },
    text: {
        textTransform: 'none',
        width: 100,
        fontWeight: 300,
        fontFamily: 'Poppins',
        color: '#A6A6A6',
        fontSize: '14px',
    },
    input:{
        // border: '1px solid #222222',
        width: '100%',
    },
    button:{
        textTransform: 'none',
        fontWeight: 300,
        fontFamily: 'Poppins',
        color: '#A6A6A6',
        fontSize: '18px',
        width: 'auto',
        alignItems:'center'
    }
}))


export const Parties_page_tab = () => {
    const classes = useStyles();
    return (
        <div className="Row">
            <Paper elevation={0} className={`${classes.tab} col-xs-12`}>
                {/* <TextField className="col-lg-offset-6 col-lg-2"></TextField> */}
                <div className="col-md-offset-9 col-sm-offset-8 col-xs-offset-7 col-lg-2 col-md-2 col-sm-2 col-xs-2">
                    <Input
                    placeholder="Search"
                    className={`${classes.text} ${classes.input}`}
                    variant='outlined'
                    >
                    </Input>
                </div>
                <div className="col-xs-auto">
                    <div className="row" width='100%'>
                        <IconButton className={`${classes.button} col`}><i class="far fa-calendar-alt"></i></IconButton>
                        <IconButton className={`${classes.button} col`}><i class="fas fa-plus"></i></IconButton>
                    </div>
                </div>
            </Paper>
        </div>
    )
}
