export default function reducer(state={}, action) {
	switch (action.type) {
		case "BIBTEX_RECEIVED":
		{
			return {
				...state,
				bibtex: action.payload
			}
		}
	}
	return state;
}