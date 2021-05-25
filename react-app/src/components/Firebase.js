import firebase from 'firebase'


// src="https://www.gstatic.com/firebasejs/8.6.2/firebase-app.js"


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDyY0wo7n2YOM5j7m7GWo2zXSWyGg_ZoKQ",
    authDomain: "dp4jaeryung.firebaseapp.com",
    databaseURL: "https://dp4jaeryung-default-rtdb.firebaseio.com",
    projectId: "dp4jaeryung",
    storageBucket: "dp4jaeryung.appspot.com",
    messagingSenderId: "281817768453",
    appId: "1:281817768453:web:7e4b9401d52b2af6df726c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase