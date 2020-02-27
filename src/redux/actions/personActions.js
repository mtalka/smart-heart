import firebase from "../../components/firebase/fbConfig";

export function getPersons() {
    return (dispatch, getState) => {
        const db = firebase.firestore();
        let persons = [];
        db.collection("users")
            .where("gender", "==", "female")
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                    persons.push(doc.data());
                });
                console.log(persons);
                dispatch({ type: "GET_PERSONS", persons });
            });

        // Async callx
    };
}
