import firebase from "../../components/firebase/fbConfig";

export function getPersons() {
    return (dispatch, getState) => {
        const db = firebase.firestore();
        let persons = [];
        db.collection("profiles")
            // .where("firstName", "==", "Markus")
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

export function createPerson(person) {
    return (dispatch, getState) => {
        const db = firebase.firestore();
        db.collection("profiles")
            .add(person)
            .then(() => {
                dispatch({ type: "ADD_PERSON", person });
            });
    };
}
