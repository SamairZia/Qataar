import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCfkw6wQ50hEmqiE7V83UC6kigCFSuX-b0",
    authDomain: "qataar-b7052.firebaseapp.com",
    databaseURL: "https://qataar-b7052.firebaseio.com",
    projectId: "qataar-b7052",
    storageBucket: "qataar-b7052.appspot.com",
    messagingSenderId: "909362349185"
  };

  export const firebaseApp = firebase.initializeApp(config);