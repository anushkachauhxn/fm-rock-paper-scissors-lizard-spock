import React from 'react';
import { useSelector } from 'react-redux';
import { selectScore } from '../features/gameSlice';
import './Header.css';
import logo from '../assets/logo.svg';

function Header() {
    const score = useSelector(selectScore);

    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="scorecard">
                <h2>Score</h2>
                <h1>{score}</h1>
            </div>
        </div>
    );
}

export default Header;
