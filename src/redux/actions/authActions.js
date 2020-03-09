import firebase from "../../components/firebase/fbConfig";

export function signIn(credentials) {
    return (dispatch, getState) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(() => {
                dispatch({ type: "LOGIN_SUCCESS" });
            })
            .catch(e => {
                dispatch({ type: "LOGIN_FAILURE" }, e);
                console.error(e);
            });
    };
}
