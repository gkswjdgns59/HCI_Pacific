import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCodGCtE4oZH7H95O3-b_iRHgdA2gYlueI",
    authDomain: "dp4-test-c4be7.firebaseapp.com",
    databaseURL: "https://dp4-test-c4be7-default-rtdb.firebaseio.com",
    projectId: "dp4-test-c4be7",
    storageBucket: "dp4-test-c4be7.appspot.com",
    messagingSenderId: "689941682233",
    appId: "1:689941682233:web:6b6341d317efed659a95e8",
    measurementId: "G-LWKRBH2YN4"
  };

  firebase.initializeApp(firebaseConfig);

export default firebase;