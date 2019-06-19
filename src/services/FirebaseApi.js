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

// criação de usuário
export const createUserOnFirebaseAsync = async (email, password) => {
    const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

    return user;
}

// autenticação do usuário
export async function signInOnFirebaseAsync(email, password) {
    const user = await firebase.auth().signInWithEmailAndPassword(email, password);
    return user;
}

// verifica o estado do usuário
export const currentFirebaseUser = () => {
    return new Promise((resolve, reject) => {
        var unsubscribe = null;
        unsubscribe = firebase
            .auth()
            .onAuthStateChanged((user) => {
                resolve(user);
            }, (error) => {
                reject(error);
            }, () => {
                unsubscribe();
            });
    });
}

export const writeTaskOnFirebaseAsync = async (task) => {
    const user = await currentFirebaseUser();
    var tasksReference = firebase
        .database()
        .ref(user.uid);

    const key = task.key ?
        task.key : tasksReference
            .child('tasks')
            .push()
            .key;

    return await tasksReference.child(`tasks/${key}`).update(task);
}

export const readTasksFromFirebaseAsync = async (listener) => {
    const user = await currentFirebaseUser();
    var tasksReference = firebase
        .database()
        .ref(user.uid)
        .child('tasks');

    tasksReference.on('value', (snapshot) => {
        var tasks = [];
        snapshot.forEach(function (element) {
            var task = element.val();
            task.key = element.key;
            tasks.push(task);
        });
        listener(tasks);
    });
}