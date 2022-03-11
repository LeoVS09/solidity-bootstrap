import React from "react";
import { useSelector, useDispatch } from 'react-redux'

import logo from './logo.svg';
import './App.css';
import ReadString from "./ReadString";
import SetString from "./SetString";



const App = () => { 
  const drizzle = useSelector(state => state)

  if(!drizzle.drizzleStatus.initialized) {
    return "Loading..."
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Drizzle is ready.
        </p>
        <ReadString
          drizzle={drizzle}
          drizzleState={drizzle}
        />
        <SetString
          drizzle={drizzle}
          drizzleState={drizzle}
        />
      </header>
    </div>
  )
};

export default App;
