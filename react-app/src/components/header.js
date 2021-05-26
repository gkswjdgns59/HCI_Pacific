import React, { Component } from 'react';

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
    borderBottom: "1px black solid"
}


class Header extends Component{
    render(){
        return (
        <nav style={navbar} className="navbar navbar-expand-lg collapse navbar-collapse bs-navbar-collapse">
            <ul className="nav navbar-nav">
                <li className="nav-item">
                    <a href="#">
                        <img src="https://i.esdrop.com/d/jVtSFxmZHu/K7EY72p0Gq.png" alt="Brand" style={logo}></img>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" style={st}>Parties</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" style={st}>Guest book</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" style={st}>Records</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" style={st}>About us</a>
                </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
                <li className="nav-item">
                    <a className="nav-link" href="#" style={st}>My Page</a>
                </li>
            </ul>       
        </nav>
        );
    }
}

export default Header;