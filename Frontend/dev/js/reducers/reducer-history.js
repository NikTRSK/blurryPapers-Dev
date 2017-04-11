// For now this is empty. It will hold the search history data
export default function searchHistory(state = [], action) {
  if (action.type === 'APPEND_HISTORY') {
    return [...state,
    {
      query: action.query,
      count: action.count
    }]
  }
  return state;
}
