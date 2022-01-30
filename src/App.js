import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Game from './components/Game';
import Rules from './components/Rules';

function App() {
  return (
    <div className="app">
      <Header />
      {/* <Main /> */}
      <Game />
      <Rules />
    </div>
  );
}

export default App;
