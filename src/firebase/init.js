import firebase from 'firebase'
import firestore from 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyBL5HTZsoDyiV0rk2uJa-yO9AYKdChfJqw",
    authDomain: "equi-ninja-chat.firebaseapp.com",
    databaseURL: "https://equi-ninja-chat.firebaseio.com",
    projectId: "equi-ninja-chat",
    storageBucket: "equi-ninja-chat.appspot.com",
    messagingSenderId: "1051078380484",
    appId: "1:1051078380484:web:facffd29c3761a38a53291"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({timestampsInSnapshots: true})

export default firebaseApp.firestore()
