const initialState = {
    persons: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "GET_PERSONS":
            console.log("getteded");
            return { ...state, persons: action.persons };
        default:
            return state;
    }
}
