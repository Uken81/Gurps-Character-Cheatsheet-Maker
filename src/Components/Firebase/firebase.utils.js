import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { getFirestore, addDoc, collection, getDocs } from 'firebase/firestore/lite';
import { doc, setDoc, query, where, getDoc } from "firebase/firestore/lite";
import { useEffect } from 'react';
import { Firestore, onSnapshot } from 'firebase/firestore';




const firebaseConfig = {
    apiKey: "AIzaSyDAz2HJffqgqAjIbnXvc5GxHc7_10-sV0A",
    authDomain: "gccm-35118.firebaseapp.com",
    projectId: "gccm-35118",
    storageBucket: "gccm-35118.appspot.com",
    messagingSenderId: "1094311800122",
    appId: "1:1094311800122:web:d737cd2d1e7f44ea053403",
    measurementId: "G-56GHWXS27L"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const usersCollectionRef = collection(db, 'users');

const createUserProfileDocument = async (userAuth, aditionalData) => {
    if (!userAuth) return;
    const userRef = doc(db, `users/${userAuth.uid}`);
    console.log(userAuth.uid);
    const docSnap = await getDoc(userRef);
    
    if (!docSnap.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
       
    
        try {
          await setDoc(userRef,  {
            displayName,
            email,
            createdAt,
            // ...additionalData
          });
        } catch (error) {
          console.log('error creating user', error.message);
        }
      }
      console.log('test');
      console.log(userRef);
      console.log(docSnap.exists());
      console.log(docSnap.data());
      console.log(userAuth.uid);
      return userRef;
    
    }
    
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

const auth = getAuth();


    const google = async () => {
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

    const sendCharacterList = (list, currentUser) => {
      if (currentUser !== null) {
        console.log('setting character list')
        const userRef = doc(db, `users/${currentUser.uid}`);
        setDoc(userRef, {
          list
          });
    }
   

    console.log('characters');
    console.log(currentUser);
    
    }

    export { signInWithPopup, google, auth, usersCollectionRef, db, firebaseApp, createUserProfileDocument, sendCharacterList }
