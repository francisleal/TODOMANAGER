import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAU445iglNXeVNrkOxvr8MOHDBbVkww6uY",
    authDomain: "todomanager-d118f.firebaseapp.com",
    databaseURL: "https://todomanager-d118f.firebaseio.com",
    projectId: "todomanager-d118f",
    storageBucket: "todomanager-d118f.appspot.com",
    messagingSenderId: "863617667699",
    appId: "1:863617667699:web:796a7626eda1f9aa"
};

export const initializeFirebaseApi = () => firebase.initializeApp(config);

export const createUserOnFirebaseAsync = async (email, password) => {
    const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

    return user;
}

export const signInOnFirebaseAsync = async (email, password) => {
    const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
    return user;
}