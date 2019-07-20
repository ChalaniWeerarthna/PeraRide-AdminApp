import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import { Provider } from 'react-redux';
import {
  routerMiddleware
} from 'react-router-redux'
import { createStore, applyMiddleware } from 'redux'

import "./assets/css/material-dashboard-react.css";

import indexRoutes from "./routes/index.jsx";
import rootReducer from "./reducers/rootReducer"
import thunk from 'redux-thunk'
const history = createBrowserHistory();
const rMiddleware = routerMiddleware(history)

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, rMiddleware)
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} >
      {indexRoutes()}
    </Router>
  </Provider>,
  document.getElementById("root")
);
