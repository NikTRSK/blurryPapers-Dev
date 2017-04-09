export default function reducer(state={}, action) {
	switch (action.type) {
		case "FETCH_ARTICLES":
		{
			return {...state, articles: action.payload};
		}
		//case "BIBTEX_RECEIVED":
		//{
		//	return {
    //		...state,
    //		bibtex: action.payload.bibtex
    //	}
		//}
	}
	return state;
}