import React from 'react';
import { Button, IconButton } from '@mui/material';
import './Game.css';
import rock from '../assets/rock.svg';
import paper from '../assets/paper.svg';
import scissors from '../assets/scissors.svg';
import lizard from '../assets/lizard.svg';
import spock from '../assets/spock.svg';
import empty from '../assets/bg-circle.svg'

function Game() {
  return (
    <div className="game">
        <div className="game__side game__user">
            <h2>You Picked</h2>

            <IconButton disabled>
                <img src={scissors} alt="" />
            </IconButton>
        </div>

        <div className="game__msg show">
            <h1>You Lose</h1>
            <Button variant="contained">Play Again</Button>
        </div>

        <div className="game__side game__house">
            <h2>The House Picked</h2>

            <IconButton disabled>
                <img src={empty} alt="" />
            </IconButton>
        </div>
    </div>
  );
}

export default Game;