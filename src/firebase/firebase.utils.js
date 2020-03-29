import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyALoIWYWQu-FHETzfhxJ6BmVSeJspOpeIU",
  authDomain: "online-shop-9b4f2.firebaseapp.com",
  databaseURL: "https://online-shop-9b4f2.firebaseio.com",
  projectId: "online-shop-9b4f2",
  storageBucket: "online-shop-9b4f2.appspot.com",
  messagingSenderId: "546315099435",
  appId: "1:546315099435:web:3de9aaf2236a82e6a3b96e",
  measurementId: "G-8R1N2VPJML"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;