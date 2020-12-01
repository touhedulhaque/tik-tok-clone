import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBKLouZBD6NQ_bwGwb76dICHSCpZun4HLQ",
    authDomain: "tik-tok-clone-f221f.firebaseapp.com",
    databaseURL: "https://tik-tok-clone-f221f.firebaseio.com",
    projectId: "tik-tok-clone-f221f",
    storageBucket: "tik-tok-clone-f221f.appspot.com",
    messagingSenderId: "461043649109",
    appId: "1:461043649109:web:a6c16cc8c9ba2a5e6f22dc"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;