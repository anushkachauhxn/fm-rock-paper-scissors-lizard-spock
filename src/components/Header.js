import React from 'react';
import './Header.css';
import logo from '../assets/logo.svg';

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="scorecard">
                <h2>Score</h2>
                <h1>12</h1>
            </div>
        </div>
    );
}

export default Header;
