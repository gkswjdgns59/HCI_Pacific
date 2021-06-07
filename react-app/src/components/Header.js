import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import Auth from './Auth'
const logo = {
    width: "100px"
};
const actst = {
    color: "#222222",
    backgroundColor: "#D6D6FF",
    margin: "10px"
};

const st = {
    color: "#222222",
    backgroundColor: "#2222222",
    margin: "10px"
};

const navbar = {
    fontFamily: "Poppins",
    fontWeight: 300,
    fontSize: 14,
    borderBottom: "1px black solid",

}

class Header extends Component{
    signOut = () => {
        Auth.logout();
        this.props.history.replace('/')
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
                <li className="nav-item">
                    <Link to="/parties" style={{textDecoration:'none'}}>
                        <div style={st}>Parties</div>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/guestbook" style={{textDecoration:'none'}}><div style={st}>Guest book</div></Link>
                </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
                <li className="nav-item">
                    <Link to="/" style={{textDecoration:'none'}} onClick={()=>this.signOut()}><div style={st}>Sign Out</div></Link>
                </li>
                <li className="nav-item" >
                    <Link to="/mypage" style={{textDecoration:'none'}}><div style={st}>My Page</div></Link>
                </li>

            </ul>       
        </nav>
        );
    }
}

export default withRouter(Header);
