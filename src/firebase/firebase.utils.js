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

  export const createUserProfileDocument = async (userAuth, displayName, ...additionalData) =>{
   
    
    
   
    // if userAuth is null than exit from function
    if(!userAuth){
     
      return;
    } 

    const userRef = firestore.doc(`users/${userAuth.uid}`);  //this is refrence
    const snapShot = await userRef.get(); //this is data on the basis of refrence.
    

    if(!snapShot.exists){
      console.log(userAuth);
      
      //creating document . so we need to use document query refrence rather than snapshot
      
      const { email } = userAuth;

      //instead of getting displayName from userAuth, i have getting value directly from parameter
      

      const createdAt = new Date(); //current date and time
      try{
        // .set is create method. So, if data is not existing we are creating data 
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }
      catch(err)
      {
        console.log('error creating user', err.message);
      }

    }
    return userRef;
    

  }

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();


  //google signin setup config

  //create an instance of google provider object.
 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({ prompt: 'select_account'});

 export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;