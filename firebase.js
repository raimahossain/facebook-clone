import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD5juA6u6PHx1xRcAfQTdqZA7P6TaGX9Bo",
    authDomain: "facebook-clone-82bf4.firebaseapp.com",
    projectId: "facebook-clone-82bf4",
    storageBucket: "facebook-clone-82bf4.appspot.com",
    messagingSenderId: "836526568524",
    appId: "1:836526568524:web:487a6fdb2f7adc76c730e9"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();
export {db, storage};