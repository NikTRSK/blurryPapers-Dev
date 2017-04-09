import axios from "axios";
import articleData from "../data/articleData";
// import 'redux-promise-middleware'

export const generatePapers = (query) => {
  const request = axios.get("http://localhost:8888/generateWordcloud/" + query);
  // console.log("Querying API");
  // return {
  //   type: 'GENERATE_WORDCLOUD',
  //   query
  // }
  return (dispatch) => {
    request.then(({data}) => {
      dispatch({
        type: "GENERATE_WORDCLOUD",
        payload: data
      })
    })
  };
  // return {
  //   type: 'GENERATE_WORDCLOUD',
  //   payload: {
  //     promise: callAPI(query)/*axios.get("http://localhost:8888/generateWordcloud/" + query)*/
  // }

  // }
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
  return {
    type: "FETCH_ARTICLES",
    payload: articleData
  }
}

export function fetchBibtex() {
  return function(dispatch) {
    axios.get("http://localhost:8888/bibtex")
      .then((response) => {
        dispatch({type: "BIBTEX_RECEIVED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_TWEETS_REJECTED", payload: err})
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