
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDGAfzMQYI18StAPpPSjw5Lz1PJCKq3lN0",
    authDomain: "twitterclone-b9443.firebaseapp.com",
    databaseURL: "https://twitterclone-b9443.firebaseio.com",
    projectId: "twitterclone-b9443",
    storageBucket: "twitterclone-b9443.appspot.com",
    messagingSenderId: "814004755149",
    appId: "1:814004755149:web:4ce596db8be6ea06942784",
    measurementId: "G-YHPTJNJREL"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;