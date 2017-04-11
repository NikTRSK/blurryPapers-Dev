import { applyMiddleware, createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import logger from "redux-logger"
import thunk from "redux-thunk"
import reduxpromise from 'redux-promise-middleware'
import { loadingBarMiddleware } from 'react-redux-loading-bar'

// import the root reducer
import rootReducer from './reducers/index'

import paperData from './data/paperData'
import articleData from './data/articleData'

// create an object for the default data
const defaultState = { paperData : {}, articles: [{}], searchHistory: {}, bibtex: {bibtex:""}, abstract: {abstract:""} };

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

const middleware = applyMiddleware(
                    logger(),
                    thunk,
                    reduxpromise(),
                    loadingBarMiddleware());

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