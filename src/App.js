import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Game from './components/Game';
import Rules from './components/Rules';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <div className="app__body">
          <Switch>
            <Route path="/game">
              <Game />
            </Route>
            <Route exact path="/">
              <Main />
            </Route>
          </Switch>
        </div>
        
        <Rules />
      </div>
    </Router>
  );
}

export default App;
