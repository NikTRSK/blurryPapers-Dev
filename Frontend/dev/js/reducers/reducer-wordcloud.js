export default function wordcloud(state = [], action) {
  if (action.type === 'GENERATE_WORDCLOUD_FULFILLED') {
    return [
      // ...state,
      action.payload[0].paperData,
      true
    ];
  }

  if (action.type !== 'GET_PAPERS') {
  return state;
  }
  return state;
}