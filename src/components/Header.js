import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectScore, setScore } from '../features/gameSlice';
import './Header.css';
import logo from '../assets/logo.svg';

function Header() {
    const score = useSelector(selectScore);
    const dispatch = useDispatch();
    window.addEventListener('load', () => {
        dispatch(setScore());
    })

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
