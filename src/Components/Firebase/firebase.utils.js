import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import {getFirestore} from 'firebase/firestore/lite'


const firebaseConfig = {
    apiKey: "AIzaSyDcJVMjeS_l2T6JSruAYVmMjvjXWB7l-vE",
    authDomain: "gccm-ea7b4.firebaseapp.com",
    projectId: "gccm-ea7b4",
    storageBucket: "gccm-ea7b4.appspot.com",
    messagingSenderId: "370036300661",
    appId: "1:370036300661:web:8f9795dc6aa8c08b2ad13c",
    measurementId: "G-R683EBXEQL"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();

// firebase.auth().useDeviceLanguage();


provider.setCustomParameters({
    'login_hint': 'user@example.com'
  });

  const auth = getAuth();
  
  const google = ()=> {
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }

  const user = auth.currentUser;

  if (user !== null) {
    user.providerData.forEach((profile) => {
      console.log("Sign-in provider: " + profile.providerId);
      console.log("  Provider-specific UID: " + profile.uid);
      console.log("  Name: " + profile.displayName);
      console.log("  Email: " + profile.email);
      console.log("  Photo URL: " + profile.photoURL);
      console.log(user);
    });
  } else {
      console.log('no user');
      console.log(user);
  }


export {signInWithPopup, google}
  