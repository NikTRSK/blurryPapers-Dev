export default function reducer(state={}, action) {
	switch (action.type) {
		case "ARTICLES_RECEIVED":
		{
			return {
				...state,
				articles: action.payload};
		}
	}
	return state;
}