import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import articles from "./article-list-reducer";
import paperData from './reducer-wordcloud';
import searchHistory from './reducer-history';

const rootReducer = combineReducers({
  routing: routerReducer,
  paperData,
  articles,
  searchHistory
});

export default rootReducer