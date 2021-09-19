// Your web app's Firebase configuration
import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCBQWC0fwJFXFr7mTl30cRj9eFU9fmp2B0",
    authDomain: "af-prj-datastore.firebaseapp.com",
    projectId: "af-prj-datastore",
    storageBucket: "af-prj-datastore.appspot.com",
    messagingSenderId: "926493684003",
    appId: "1:926493684003:web:b7b5ebfcb0133dbd98dc96"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timestamp};
