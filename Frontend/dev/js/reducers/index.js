import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import articles from "./article-list-reducer";
import paperData from './reducer-wordcloud';

const rootReducer = combineReducers({
  routing: routerReducer,
  paperData,
  articles
});

export default rootReducer