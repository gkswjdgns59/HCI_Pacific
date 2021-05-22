import React, { Component } from 'react';

const logo = {
    width: "100px",
    marginRight: "70px"
};
const st = {
    color: "#222222",
    margin: "10px"
};
const mp = {
    color: "#222222",
    margin: "10px",
    marginRight: "300px"
};

class Header extends Component{
    render(){
        return (
        //<header>
        <nav style={{borderBottom: "1px black solid"}} className="navbar navbar-expand-sm">
            <img src="https://i.esdrop.com/d/jVtSFxmZHu/K7EY72p0Gq.png" alt="Brand" style={logo}></img>
            <ul className="nav navbar-nav">
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
                    <a className="nav-link" href="#" style={mp}>About us</a>
                </li>
                <li className="nav-item justify-content-end">
                    <a className="nav-link" href="#" style={st}>My Page</a>
                </li>
            </ul>       
        </nav>
        //</header>
        );
    }
}

export default Header;