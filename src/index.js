import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import {applyMiddleware, createStore} from "redux";
import reducers from './Reducers'
import thunk from "redux-thunk";
import {Auth0Provider} from "@auth0/auth0-react";
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))


const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(

    <Provider store={store}>
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}>
            <App/>
        </Auth0Provider>

    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
