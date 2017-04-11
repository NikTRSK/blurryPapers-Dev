import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import articles from "./article-list-reducer";
import paperData from './reducer-wordcloud';
import searchHistory from './reducer-history';
import bibtex from "./bibtex-reducer";
import abstract from "./abstract-reducer";
import { loadingBarReducer } from 'react-redux-loading-bar'

const rootReducer = combineReducers({
  routing: routerReducer,
  paperData,
  articles,
	bibtex,
	abstract,
  searchHistory,
  loadingBar: loadingBarReducer
});

export default rootReducer