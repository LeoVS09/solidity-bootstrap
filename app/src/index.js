import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Drizzle } from "@drizzle/store";
import drizzleOptions from "./store/drizzleOptions";
import { DrizzleContext } from "@drizzle/react-plugin";

import store from './store'
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

const drizzle = new Drizzle(drizzleOptions, store);


ReactDOM.render(
    <Provider store={store}>
        <DrizzleContext.Provider drizzle={drizzle}>
            <App />
        </DrizzleContext.Provider>
    </Provider>,
   document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
