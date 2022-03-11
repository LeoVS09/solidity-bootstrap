import React from "react";
import { DrizzleContext } from '@drizzle/react-plugin'

import logo from './logo.svg';
import './App.css';
import ReadString from "./ReadString";
import SetString from "./SetString";



const App = () => (
  <DrizzleContext.Consumer>
    {drizzleContext => {
      const {drizzle, drizzleState, initialized} = drizzleContext;

      if(!initialized) {
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
              drizzleState={drizzleState}
            />
            <SetString
              drizzle={drizzle}
              drizzleState={drizzleState}
            />
          </header>
        </div>
        )
      }}
  </DrizzleContext.Consumer>
);

export default App;
