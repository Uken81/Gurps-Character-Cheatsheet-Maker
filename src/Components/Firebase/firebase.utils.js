import {initializeApp} from 'firebase/app';
import {GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth";
import {getFirestore, collection} from 'firebase/firestore';
import {doc, setDoc, getDoc, getDocs, addDoc, where, query} from "firebase/firestore";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_SECRET_KEY,
    authDomain: "gccm-35118.firebaseapp.com",
    projectId: "gccm-35118",
    storageBucket: "gccm-35118.appspot.com",
    messagingSenderId: "1094311800122",
    appId: "1:1094311800122:web:d737cd2d1e7f44ea053403",
    measurementId: "G-56GHWXS27L"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
// const usersCollectionRef = collection(db, 'users');

const createUserProfileDocument = async(userAuth) => {
    if (!userAuth) 
        return;
    const userRef = doc(db, `users/${userAuth.uid}`);
    const docSnap = await getDoc(userRef);

    if (!docSnap.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userRef, {
                displayName, email, createdAt,
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    console.log('CreateUserProfileDocument/FireBase.Utils');
    console.log('userRef: ',userRef);
    console.log('docSnap exist: ',docSnap.exists());
    console.log('docData: ',docSnap.data());
    console.log('UID: ',userAuth.uid);
    return userRef;

}

const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

const auth = getAuth();


const google = async() => {
    signInWithPopup(auth, provider).then((result) => {
      
        // This gives you a Google Access Token. You can use it to access the Google
        // API.
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

const addNewCharacterForUser = async(userId, newCharacter) => {
    const userCharactersRef = collection(db, 'users', userId, "characters");

    try {
      const newCharacterRef = await addDoc(userCharactersRef, newCharacter);
      return newCharacterRef;

    } catch(error) {
      console.log("**** Something Went wrong: ", error);
    }
}

const getMatchingCharactersForUser = async (userId, characterName) => {
  const userCharactersRef = collection(db, 'users', userId, "characters");
  const q = query(userCharactersRef, where("name", "==", characterName));
    try {
      const matchingCharactersSnapshot = await getDocs(q);
      const matchingCharacters = [];
      matchingCharactersSnapshot.forEach(doc => matchingCharacters.push(doc.data()));
      return matchingCharacters;
      
    } catch(error) {
      console.log("**** Something Went wrong: ", error);
    }
}

const getUsersCharactersList = async(userId) => {
    const userCharactersRef = collection(db, 'users', userId, "characters");
    const charactersList = await getDocs(userCharactersRef);
    const usersCharactersList = [];

    charactersList.forEach(doc => usersCharactersList.push(doc.data().name));
    return usersCharactersList;
}

const GetCharacterReference = async (userId, currentCharacterId) => {
    const userCharactersRef = collection(db, 'users', userId, "characters");
    console.log('userCharacterRef: ', userCharactersRef);

    const docRef = doc(userCharactersRef, currentCharacterId);

    console.log('docRef: ', docRef);

    return docRef;
}

export {
    signInWithPopup,
    google,
    auth,
    db,
    firebaseApp,
    createUserProfileDocument,
    addNewCharacterForUser,
    getMatchingCharactersForUser,
    getUsersCharactersList,
    GetCharacterReference
}