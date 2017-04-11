import { applyMiddleware, createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import axiosMiddleware from 'redux-axios-middleware'
import logger from "redux-logger"
import thunk from "redux-thunk"
import axios from 'axios';
import reduxpromise from 'redux-promise-middleware'
import { composeWithDevTools } from 'remote-redux-devtools';

// import the root reducer
import rootReducer from './reducers/index'

import paperData from './data/paperData'
import articleData from './data/articleData'

// create an object for the default data
const defaultState = { paperData, articles: [{}], searchHistory: {}, bibtex: {bibtex:""}, abstract: {abstract:""}, checkedDOIs: [] };

// enable Redux Dev Tools
const enhancers = compose(
  window.devToolsExtension
    ? window.devToolsExtension()
    : f => f
);


// const client = axios.create({
//   baseURL: 'http://localhost:8888',
//   responseType: 'json'
// });

const middleware = applyMiddleware(/*
                    axiosMiddleware(client),*/
                    logger(),
                    thunk,
                    reduxpromise());

const store = createStore(rootReducer,
                          defaultState,
                          compose(middleware, enhancers));

export const history = syncHistoryWithStore(browserHistory, store);

// hot reloading the reducer
if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer)
  })
}

export default store