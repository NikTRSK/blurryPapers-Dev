export default function reducer(state={}, action) {
	switch (action.type) {
		case "ABSTRACT_RECEIVED":
		{
			return {
				...state,
				abstract: action.payload};
		}
	}
	return state;
}