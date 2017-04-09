/* eslint-disable no-unused-vars */
import React from 'react'
import { render } from 'react-dom'
import Homepage from './containers/homepage';
import ArticleList from './containers/article-list';

// import css

// import components
import App from './components/App'

// import react router
import { Router, Route, IndexRoute } from 'react-router'

import { Provider } from 'react-redux'

import store, { history } from './store'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Homepage} />
        <Route path="paperlist/:word" component={ArticleList} />
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));