import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAXkVwC-6MSvvfJlcRuLGa1vbVpNHt--UE",
  authDomain: "firechat-29b9f.firebaseapp.com",
  projectId: "firechat-29b9f",
  storageBucket: "firechat-29b9f.appspot.com",
  messagingSenderId: "745596407905",
  appId: "1:745596407905:web:c7af31536885878a2d1a20",
  measurementId: "G-BX7ZHX5JT2"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };