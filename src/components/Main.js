import React from 'react';
import { useHistory } from 'react-router-dom';
import { setCompVal, setUserVal, calculateResult, updateScore } from '../features/gameSlice';
import { useDispatch } from 'react-redux';
import { IconButton } from '@mui/material';
import './Main.css';
import scissors from '../assets/scissors.svg';
import spock from '../assets/spock.svg';
import paper from '../assets/paper.svg';
import lizard from '../assets/lizard.svg';
import rock from '../assets/rock.svg';

function Main() {
    const history = useHistory();
    const dispatch = useDispatch();

    const openGame = (usersPick) => {
        dispatch(setUserVal(usersPick));
        
        setTimeout(() => {
            dispatch(setCompVal());

            setTimeout(() => {
                dispatch(calculateResult());
                dispatch(updateScore());
            }, 500);
        }, 1000);

        history.push("/game");
    }

    return (
        <div className="main">
            <div className="main__btns main__btns1">
                <IconButton onClick={() => openGame(2)}>
                    <img src={scissors} alt="" />
                </IconButton>
            </div>

            <div className="main__btns main__btns2">
                <IconButton onClick={() => openGame(4)}>
                    <img src={spock} alt="" />
                </IconButton>
                <IconButton onClick={() => openGame(1)}>
                    <img src={paper} alt="" />
                </IconButton>
            </div>

            <div className="main__btns main__btns3">
                <IconButton onClick={() => openGame(3)}>
                    <img src={lizard} alt="" />
                </IconButton>
                <IconButton onClick={() => openGame(0)}>
                    <img src={rock} alt="" />
                </IconButton>
            </div>
        </div>
    );
}

export default Main;