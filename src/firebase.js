// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNlyiVOS4kiQfvnTSLb6FQYpddb7egtDY",
  authDomain: "clone-5b796.firebaseapp.com",
  projectId: "clone-5b796",
  storageBucket: "clone-5b796.appspot.com",
  messagingSenderId: "182396632335",
  appId: "1:182396632335:web:f82a6e4f1295a7f365127a",
  measurementId: "G-GRS3TW7PLR"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
