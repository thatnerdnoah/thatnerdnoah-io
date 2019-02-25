import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './component-styles/Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header" style={divStyle}>
                <h1 style={h1Style}>ThatNerdNoah</h1>
                <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link> | <Link style={linkStyle} to="/projects">Projects</Link> | <Link style={linkStyle} to="/contact">Contact</Link>
            </div>
        )
    }
}

export default Header;

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
    cursor: "click"
}

const divStyle = {
    position: "relative",
    textAlign: "center",
    background: "#696969",
    padding: "0 0 5px 0",
    margin: "0"
}

const h1Style = {
    color: "white",
    textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
}