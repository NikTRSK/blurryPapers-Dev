import axios from "axios";

const WC = 'GENERATE_WORDCLOUD';

export default function wordcloud(state = [], action) {
  if (action.type === 'GENERATE_WORDCLOUD') {
    return [
      ...state,
      action.payload[0].paperData
    ];
  }

  if (action.type !== 'GET_PAPERS') {
  return state;
  }
  return state;
}