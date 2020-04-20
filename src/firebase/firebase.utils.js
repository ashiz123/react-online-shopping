import firebase from 'firebase/app';
import 'firebase/firestore'; //this is for firebase database access
import 'firebase/auth' //this is for firebase auth


const config =

{
    apiKey: "AIzaSyB6oRt4RKT0Vr_Zwx5cYL8fRkVsmxMH1FY",
    authDomain: "ashiz-crown-db.firebaseapp.com",
    databaseURL: "https://ashiz-crown-db.firebaseio.com",
    projectId: "ashiz-crown-db",
    storageBucket: "ashiz-crown-db.appspot.com",
    messagingSenderId: "805756156702",
    appId: "1:805756156702:web:53c9ffe6ba04e61057270f",
    measurementId: "G-BWC8312LV7"
  }


  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();


  //google signin setup config
 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({ prompt: 'select_account'});

 export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;