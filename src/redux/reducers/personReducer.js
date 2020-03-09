const initialState = {
    persons: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "GET_PERSONS":
            console.log("getteded");
            return { ...state, persons: action.persons };
        case "ADD_PERSON":
            console.log("Added person");
            return { ...state, persons: [...state.persons, action.person] };
        default:
            return state;
    }
}
