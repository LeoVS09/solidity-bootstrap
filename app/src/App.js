import React from "react";
import { DrizzleContext } from "@drizzle/react-plugin";
import MyComponent from "./MyComponent";
import "./App.css";



const App = () => {
  return (
    <DrizzleContext.Consumer>
      {({ drizzle, drizzleState, initialized } ) => {
        if (!initialized) {
          return "Loading..."
        }

        return (
          <MyComponent drizzle={drizzle} drizzleState={drizzleState} />
        )
      }}
    </DrizzleContext.Consumer>
  );
}

export default App;
