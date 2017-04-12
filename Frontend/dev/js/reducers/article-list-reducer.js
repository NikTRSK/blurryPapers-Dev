export default function reducer(state={articles:[]}, action) {
	switch (action.type) {
		case "ARTICLES_RECEIVED":
		{
			return {
				...state,
				articles: action.payload};
		}
		case "ARTICLES_CLEAR":
		{
			return {
				...state,
				articles: action.payload
			}
		}
	}
	return state;
}