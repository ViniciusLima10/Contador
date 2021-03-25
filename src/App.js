import React from 'react';
import './App.css';
import Countdown from './components/Countdown';
import Header from './components/Header';
import { CountdownProvider } from './contexts/CountdownContext'

function App() {
  return (
    <div className="App">
      <CountdownProvider>
        <Header></Header>
        <Countdown></Countdown>
      </CountdownProvider>
    </div>
  );
}

export default App;
