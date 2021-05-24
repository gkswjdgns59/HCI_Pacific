
  import firebase from 'firebase'

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDfxf0FwBBO6ulRDUXwbiFsghV1Nil_RWM",
    authDomain: "hci-practice-4da11.firebaseapp.com",
    databaseURL: "https://hci-practice-4da11-default-rtdb.firebaseio.com",
    projectId: "hci-practice-4da11",
    storageBucket: "hci-practice-4da11.appspot.com",
    messagingSenderId: "541733407015",
    appId: "1:541733407015:web:29b8865ba6dc7503b60102"
  };
  
    firebase.initializeApp(firebaseConfig);
  
  export default firebase;