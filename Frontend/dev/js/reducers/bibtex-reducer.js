export default function reducer(state={bibtex: {bibtex:""}}, action) {
	switch (action.type) {
		case "BIBTEX_RECEIVED":
		{
			return {
				...state,
				bibtex: action.payload
			}
		}
		case "BIBTEX_CLEAR":
		{
			return {
				...state,
				bibtex: action.payload
			}
		}
	}
	return state;
}