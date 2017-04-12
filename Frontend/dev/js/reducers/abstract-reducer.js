export default function reducer(state={abstract: {abstract:""}}, action) {
	switch (action.type) {
		case "ABSTRACT_RECEIVED":
		{
			return {
				...state,
				abstract: action.payload};
		}
		case "ABSTRACT_CLEAR":
		{
			return {
				...state,
				abstract: action.payload
			}
		}
	}
	return state;
}