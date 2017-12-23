import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDPKOTUJCdjniZsm4lYeHnw_jGPjStqroM",
    authDomain: "qataar-f407c.firebaseapp.com",
    databaseURL: "https://qataar-f407c.firebaseio.com",
    projectId: "qataar-f407c",
    storageBucket: "",
    messagingSenderId: "332751938955"
  };

  
export const firebaseApp = firebase.initializeApp(config);