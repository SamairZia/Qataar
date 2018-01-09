import * as firebase from 'firebase'

const config = {

    //Qataar id's configuration
    // apiKey: "AIzaSyDPKOTUJCdjniZsm4lYeHnw_jGPjStqroM",
    // authDomain: "qataar-f407c.firebaseapp.com",
    // databaseURL: "https://qataar-f407c.firebaseio.com",
    // projectId: "qataar-f407c",
    // storageBucket: "qataar-f407c.appspot.com",
    // messagingSenderId: "332751938955"

    // Umair's configuration
  apiKey: "AIzaSyDojvChl5TKo_uXbcCjiaxhSCfF1WSu6Rw",
  authDomain: "qataar-c1294.firebaseapp.com",
  databaseURL: "https://qataar-c1294.firebaseio.com",
  projectId: "qataar-c1294",
  storageBucket: "qataar-c1294.appspot.com",
  messagingSenderId: "899991899337"
  };
  
export const firebaseApp = firebase.initializeApp(config);