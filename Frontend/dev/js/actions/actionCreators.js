import axios from "axios";
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const generatePapers = (query) => {
  const request = axios.get("http://localhost:8888/generateWordcloud/" + query);
  return (dispatch) => {
    dispatch(showLoading());
    request
      .then((response) => {
        dispatch({type: "GENERATE_WORDCLOUD_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "GENERATE_WORDCLOUD_REJECTED", payload: err})
      })
  };
};


export function getPapers(word, count) {
  console.log("GETTING PAPERS: " + word + ", " + count);
  return {
    type: 'GET_PAPERS',
    word,
    count
  }
}

export function fetchArticles() {
  return function(dispatch) {
    axios.get("http://localhost:8888/articles")
      .then((response) => {
        dispatch({type: "ARTICLES_RECEIVED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "ARTICLES_REJECTED", payload: err})
      })
  }
}

export function fetchBibtex() {
	return function(dispatch) {
		axios.get("http://localhost:8888/bibtex")
			.then((response) => {
				dispatch({type: "BIBTEX_RECEIVED", payload: response.data})
			})
			.catch((err) => {
				dispatch({type: "BIBTEX_REJECTED", payload: err})
			})
	}
}

export function fetchAbstract() {
	return function(dispatch) {
		axios.get("http://localhost:8888/abstract")
			.then((response) => {
				dispatch({type: "ABSTRACT_RECEIVED", payload: response.data})
			})
			.catch((err) => {
				dispatch({type: "ABSTRACT_REJECTED", payload: err})
			})
	}
}

export function addToHistory(query, count) {
  console.log("Adding to history");
  return {
    type: 'APPEND_HISTORY',
    query,
    count
  }
}