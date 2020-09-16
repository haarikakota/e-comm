import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBrom1APtNFw9X-_HDwywDkQOPmL1JKTX4",
    authDomain: "crwn-db-15758.firebaseapp.com",
    databaseURL: "https://crwn-db-15758.firebaseio.com",
    projectId: "crwn-db-15758",
    storageBucket: "crwn-db-15758.appspot.com",
    messagingSenderId: "722137452327",
    appId: "1:722137452327:web:2034191e2dda2fe3306302",
    measurementId: "G-3S46N7TYTR"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;