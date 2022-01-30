import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserVal, selectCompVal, selectResult, resetGame } from '../features/gameSlice';
import { Button, IconButton } from '@mui/material';
import './Game.css';

import rock from '../assets/rock.svg';
import paper from '../assets/paper.svg';
import scissors from '../assets/scissors.svg';
import lizard from '../assets/lizard.svg';
import spock from '../assets/spock.svg';
import empty from '../assets/bg-circle.svg';

function Game() {
    const history = useHistory();
    const dispatch = useDispatch();
    const userVal = useSelector(selectUserVal);
    const compVal = useSelector(selectCompVal);
    const result = useSelector(selectResult);

    const closeGame = () => {
        dispatch(resetGame());
        history.push("/");
    }

    const values = [rock, paper, scissors, lizard, spock];

    const showResult = () => {
        if (result === 1) {
            return "You Win";
        }
        if (result === -1) {
            return "You Lose";
        }
    }

    return (
        <div className="game">
            <div className={`game__side ${(result === 1) && "show"}`}>
                <h2>You Picked</h2>

                <IconButton disabled>
                    <img src={values[userVal]} alt="" />
                </IconButton>
            </div>

            <div className={`game__msg ${result && "show"}`}>
                <h1>{showResult()}</h1>
                <Button 
                    onClick={closeGame}
                    variant="contained"
                >
                    Play Again
                </Button>
            </div>

            <div className={`game__side ${(result === -1) && "show"}`}>
                <h2>The House Picked</h2>

                <IconButton disabled>
                    <img src={(compVal !== -1) ? values[compVal] : empty} alt="" />
                </IconButton>
            </div>
        </div>
    );
}

export default Game;
