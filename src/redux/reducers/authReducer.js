const initialState = {};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case "LOGIN_FAILURE":
            return {
                ...state,
                authError: "Login failed"
            };
        case "LOGIN_SUCCESS":
            console.log("successful login");
            return {
                ...state,
                authError: null
            };
        default:
            return state;
    }
}
