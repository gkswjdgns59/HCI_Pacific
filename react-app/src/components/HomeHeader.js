import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField, DialogContent, Dialog, DialogActions, DialogContentText, DialogTitle, Typography } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import firebase from './Firebase'
import Auth from './Auth';
import { withRouter } from 'react-router-dom'

class HomeHeader extends Component{
    constructor(props){
        super(props);
        this.state={
            open: false,
            id: '',
            error: '',
            pw: '',
            openLogin: false,
            idLogin: '',
            errorLogin: '',
            pwLogin: ''
        };
    }
    userRef = firebase.database();
    idList = [];
    pairList = [];

    componentWillMount(){
        this.userRef.ref('/').once('value',snapshot=>{
            const guests = snapshot.val();
            for (let i in guests){
                this.idList.push(i);
                this.pairList.push([i, guests[i].pw])
            }
        },[]);
    }

    OpenTab = ()=>{
        this.setState({ open: true });
    }
    handleClose = ()=>{
        this.setState({
            open: false,
            id: '',
            pw: '',
            error: ''
        })
    }
    onChangeName = (event)=>{
        this.setState({
            id: event.target.value
        })
    }
    onChangePw= (event)=>{
        this.setState({
            pw: event.target.value
        })
    }
    handleCloseAdd = ()=>{
        if (this.idList.includes(this.state.id)){
            const temp = this.state.id
            this.setState({
                error: `'${temp}' is already taken ID.`,
                id: '',
                pw: ''
            })
        }else{
            Auth.login(this.state.id);
            this.userRef.ref('/'+this.state.id+'/Mypage/').set({
                location: 'default',
                notices: {
                    0 : 'default'
                },
                wishlist: {
                    0: 'default'
                }
            });
            this.userRef.ref('/'+this.state.id+'/pw/').set(this.state.pw);
            this.handleClose();
            this.props.history.push('/parties')
        }
    }
    OpenTabLogin = ()=>{
        this.setState({ openLogin: true });
    }
    handleCloseLogin = ()=>{
        this.setState({
            openLogin: false,
            idLogin: '',
            pwLogin: '',
            errorLogin: ''
        })
    }
    onChangeNameLogin = (event)=>{
        this.setState({
            idLogin: event.target.value
        })
    }
    onChangePwLogin= (event)=>{
        this.setState({
            pwLogin: event.target.value
        })
    }
    handleCloseAddLogin = ()=>{
        for (let i=0; i<this.pairList.length; i++){
            if (JSON.stringify(this.pairList[i])===JSON.stringify([this.state.idLogin, this.state.pwLogin])){
                Auth.login(this.state.idLogin);
                this.handleCloseLogin();
                this.props.history.push('/parties')
                return 0
            }
        }
        this.setState({
            errorLogin: `Invalid ID and password. Try again.`,
            idLogin: '',
            pwLogin: ''
        })
    }
    addButton = () => {
        if(this.state.id!=='' && this.state.pw!==''){
            return(
                <Button onClick={this.handleCloseAdd} variant="outlined" color="primary">
                    Sign up
                </Button>
            )
        }
        else { 
            return(
                <Button variant="outlined" disabled>
                    Sign up
                </Button>
            )
        }
    }
    addButtonLogin = () => {
        if(this.state.idLogin!=='' && this.state.pwLogin!==''){
            return(
                <Button onClick={this.handleCloseAddLogin} variant="outlined" color="primary">
                    Login
                </Button>
            )
        }
        else { 
            return(
                <Button variant="outlined" disabled>
                    Login
                </Button>
            )
        }
    }
    render(){
        return (
        <nav style={navbar} className="navbar navbar-expand-lg collapse navbar-collapse bs-navbar-collapse">
            <ul className="nav navbar-nav">
                <li className="nav-item">
                    <Link to = '/'>
                        <img src="https://i.esdrop.com/d/jVtSFxmZHu/K7EY72p0Gq.png" alt="Brand" style={logo}></img>
                    </Link>
                </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
                <li className="nav-item" key="signup">
                    <a className="nav-link" onClick={this.OpenTab} style={st}>Sign up</a>
                    <ThemeProvider theme={theme}>
                        <Dialog open={this.state.open} onClose={this.handleClose} maxWidth={'sm'} fullWidth={true}>
                            <DialogTitle>
                                Sign up
                            </DialogTitle>
                            <DialogContent dividers>
                            <DialogContentText>
                                <div>Insert unique ID to sign up</div>
                                <div style={{color:'#ABABFF'}}>{this.state.error}</div>
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                label="ID"
                                fullWidth
                                color="primary"
                                onChange={this.onChangeName}
                                value={this.state.id}
                            />
                            <TextField
                                margin="dense"
                                label="Password"
                                fullWidth
                                color="primary"
                                onChange={this.onChangePw}
                                value={this.state.pw}
                            />
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={this.handleClose}>
                                Cancel
                            </Button>
                            {this.addButton()}
                            </DialogActions>
                        </Dialog>
                    </ThemeProvider>
                </li>
                <li className="nav-item" key="login">
                    <a className="nav-link" onClick={this.OpenTabLogin} style={st}>Login</a>
                    <ThemeProvider theme={theme}>
                        <Dialog open={this.state.openLogin} onClose={this.handleCloseLogin} maxWidth={'sm'} fullWidth={true}>
                            <DialogTitle>
                                Sign up
                            </DialogTitle>
                            <DialogContent dividers>
                            <DialogContentText>
                                <div>Insert valid ID with password to login</div>
                                <div style={{color:'#ABABFF'}}>{this.state.errorLogin}</div>
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                label="ID"
                                fullWidth
                                color="primary"
                                onChange={this.onChangeNameLogin}
                                value={this.state.idLogin}
                            />
                            <TextField
                                margin="dense"
                                label="Password"
                                fullWidth
                                color="primary"
                                onChange={this.onChangePwLogin}
                                value={this.state.pwLogin}
                            />
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={this.handleCloseLogin}>
                                Cancel
                            </Button>
                            {this.addButtonLogin()}
                            </DialogActions>
                        </Dialog>
                    </ThemeProvider>
                </li>
            </ul>       
        </nav>
        );
    }
}

export default withRouter(HomeHeader);

const logo = {
    width: "100px"
};
const st = {
    color: "#222222",
    backgroundColor: "#2222222",
    margin: "10px",
    cursor: "pointer"
};
const navbar = {
    fontFamily: "Poppins",
    fontWeight: 300,
    fontSize: 14,
    borderBottom: "1px black solid"
};

const theme = createMuiTheme({
    typography :{
        fontFamily:"Poppins",
        fontSize: 20,
        fontWeight:300,
        color: "#222222"
    },
    palette :{
        primary: {
            main: "#A9A9FF"
        }
    }
})