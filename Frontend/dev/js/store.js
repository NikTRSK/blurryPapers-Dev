import { applyMiddleware, createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import logger from "redux-logger"
import thunk from "redux-thunk"
import reduxpromise from 'redux-promise-middleware'
import { loadingBarMiddleware } from 'react-redux-loading-bar'

// import the root reducer
import rootReducer from './reducers/index'

// create an object for the default data
const defaultState = { paperData : [],
                       searchHistory: {}};

// enable Redux Dev Tools
const enhancers = compose(
  window.devToolsExtension
    ? window.devToolsExtension()
    : f => f
);

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