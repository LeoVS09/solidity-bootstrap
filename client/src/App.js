import React from "react";
import { DrizzleContext } from '@drizzle/react-plugin'

import logo from './logo.svg';
import './App.css';
import ReadString from "./ReadString";
import SetString from "./SetString";
import { newContextComponents } from "@drizzle/react-components";

const { AccountData, ContractData, ContractForm } = newContextComponents;


const App = () => (
  <DrizzleContext.Consumer>
    {({drizzle, drizzleState, initialized}) => {
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
          
            <AccountData 
              drizzle={drizzle}
              drizzleState={drizzleState}
              accountIndex={0}
              units={'ether'}
              render={({
                address,
                balance,
                units,
              }) => (
                <div>
                  <p>Account: {address}</p>
                  <p>Balance: {balance} {units}</p>
                </div>
              )}
            />
          </header>
        </div>
        )
      }}
  </DrizzleContext.Consumer>
);

export default App;
