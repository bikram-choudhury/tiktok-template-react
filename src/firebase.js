import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDHzITF9Ko8MgvasqZWWqqQxz7WkxV0jRQ",
    authDomain: "tiktok-template.firebaseapp.com",
    databaseURL: "https://tiktok-template.firebaseio.com",
    projectId: "tiktok-template",
    storageBucket: "tiktok-template.appspot.com",
    messagingSenderId: "1039630845121",
    appId: "1:1039630845121:web:5542737e5c5c55282f0040",
    measurementId: "G-PBCP60JCB7"
};

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();

export default db;