export function getPersons() {
    return (dispatch, getState) => {
        // Async call
        dispatch({ type: "GET_PERSONS" });
    };
}
