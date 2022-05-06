import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  sendPasswordResetEmail
} from 'firebase/auth';
import { getFirestore, collection } from 'firebase/firestore';
import { doc, setDoc, getDoc, getDocs, addDoc, where, query } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAUg8x52nzYgpcdr_xEP044Ja9WnR0FX3U',
  authDomain: 'gccm-fcde4.firebaseapp.com',
  projectId: 'gccm-fcde4',
  storageBucket: 'gccm-fcde4.appspot.com',
  messagingSenderId: '1048088412157',
  appId: '1:1048088412157:web:97f2271de9e600df5d6394'
};

// const firebaseConfig = {
//   apiKey:process.env.REACT_APP_SECRET_KEY,
//   authDomain: "gccm-4db46.firebaseapp.com",
//   projectId: "gccm-4db46",
//   storageBucket: "gccm-4db46.appspot.com",
//   messagingSenderId: "494749712392",
//   appId: "1:494749712392:web:2351350079ccaef65111bd"
// };

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const createUserProfileDocument = async (userAuth) => {
  if (!userAuth) return;
  const userRef = doc(db, `users/${userAuth.uid}`);
  const docSnap = await getDoc(userRef);

  if (!docSnap.exists()) {
    const { email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        email,
        createdAt
      });
      console.log('CreateUserProfileDocument/FireBase.Utils');
      console.log('userRef: ', userRef);
      console.log('docSnap exist: ', docSnap.exists());
      console.log('docData: ', docSnap.data());
      console.log('UID: ', userAuth.uid);
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

const auth = getAuth(firebaseApp);

const google = async () => {
  await signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(`${user.email} has signed in with google pop-up.`);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      alert(errorMessage);
    });
};

const ResetPassword = (email) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log('reset request sent');
    })
    .catch((error) => {
      // const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

const addNewCharacterForUser = async (userId, newCharacter) => {
  const userCharactersRef = collection(db, 'users', userId, 'characters');

  try {
    const newCharacterRef = await addDoc(userCharactersRef, newCharacter);
    return newCharacterRef;
  } catch (error) {
    console.log('**** Something Went wrong: ', error);
  }
};

const getMatchingCharacterForUser = async (userId, characterName) => {
  const userCharactersRef = collection(db, 'users', userId, 'characters');
  const q = query(userCharactersRef, where('name', '==', characterName));
  try {
    const matchingCharactersSnapshot = await getDocs(q);
    const matchingCharacters = [];
    matchingCharactersSnapshot.forEach((doc) => matchingCharacters.push(doc.data()));
    return matchingCharacters;
  } catch (error) {
    console.log('**** Something Went wrong: ', error);
  }
};

const getUsersSavedCharactersList = async (userId) => {
  const userCharactersRef = collection(db, 'users', userId, 'characters');
  const charactersList = await getDocs(userCharactersRef);
  const usersCharactersList = [];

  charactersList.forEach((doc) => usersCharactersList.push(doc.data().name));
  return usersCharactersList;
};

const GetCharacterReference = async (userId, currentCharacterId) => {
  const userCharactersRef = collection(db, 'users', userId, 'characters');
  console.log('userCharacterRef: ', userCharactersRef);

  const docRef = doc(userCharactersRef, currentCharacterId);

  console.log('docRef: ', docRef);

  return docRef;
};

const SaveChangesToCharacter = async (
  characterRef,
  selectedAdvantagesList,
  selectedDisadvantagesList
) => {
  setDoc(
    characterRef,
    {
      advantages: selectedAdvantagesList.map(({ title }) => title),
      disadvantages: selectedDisadvantagesList.map(({ title }) => title)
    },
    { merge: true }
  );
};

export {
  signInWithPopup,
  google,
  auth,
  db,
  firebaseApp,
  createUserProfileDocument,
  ResetPassword,
  addNewCharacterForUser,
  getMatchingCharacterForUser,
  getUsersSavedCharactersList,
  GetCharacterReference,
  SaveChangesToCharacter
};
