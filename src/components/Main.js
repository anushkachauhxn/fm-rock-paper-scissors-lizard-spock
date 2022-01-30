import React from 'react';
import { useHistory } from 'react-router-dom';
import { IconButton } from '@mui/material';
import './Main.css';
import scissors from '../assets/scissors.svg';
import spock from '../assets/spock.svg';
import paper from '../assets/paper.svg';
import lizard from '../assets/lizard.svg';
import rock from '../assets/rock.svg';

function Main() {
    const history = useHistory();
    const openGame = () => {
        history.push("/game");
    }

    return (
        <div className="main">
            <div className="main__btns main__btns1">
                <IconButton onClick={() => openGame()}>
                    <img src={scissors} alt="" />
                </IconButton>
            </div>

            <div className="main__btns main__btns2">
                <IconButton onClick={() => openGame()}>
                    <img src={spock} alt="" />
                </IconButton>
                <IconButton onClick={() => openGame()}>
                    <img src={paper} alt="" />
                </IconButton>
            </div>

            <div className="main__btns main__btns3">
                <IconButton onClick={() => openGame()}>
                    <img src={lizard} alt="" />
                </IconButton>
                <IconButton onClick={() => openGame()}>
                    <img src={rock} alt="" />
                </IconButton>
            </div>
        </div>
    );
}

export default Main;