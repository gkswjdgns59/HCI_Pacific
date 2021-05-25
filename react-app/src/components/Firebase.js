import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3rG4DL5-iSkCD3zccDhDAoCZuJIKNQhE",
  authDomain: "aster-42bcb.firebaseapp.com",
  databaseURL: "https://aster-42bcb-default-rtdb.firebaseio.com",
  projectId: "aster-42bcb",
  storageBucket: "aster-42bcb.appspot.com",
  messagingSenderId: "313659903472",
  appId: "1:313659903472:web:dbd22ba21d90c440152135"
};

  firebase.initializeApp(firebaseConfig);

export default firebase;
