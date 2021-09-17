import { useEffect, useState } from 'react';

import './App.css';
import './Display Results/DisplayResults.styles.css';

import ToggleAdvantageDisadvantage from './Components/ToggleAdvantageDisadvantage/ToggleAdvantageDisadvantage';
import DisplaySelected from './Selected/DisplaySelected';
import SearchBar from './Components/SearchBar/SearchBar';

import PrintPDF from './Components/Print PDF/printPDF';
import CopyToClipboard from './Components/CopyToClipboard/CopyToClipboard';
import Header from './Components/Header/Header.component';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth, createUserProfileDocument, firebaseApp, usersCollectionRef } from './Components/Firebase/firebase.utils';




function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [usersCharacterInformation, setUsersCharacterInformation] = useState({});
  const [characterList, setCharacterList] = useState([]);

  const [isChoosingAdvantages, setIsChoosingAdvantages] = useState(true);
  const [selectedAdvantagesList, setSelectedAdvantagesList] = useState([]);
  const [selectedDisadvantagesList, setSelectedDisadvantagesList] = useState([]);

  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = onAuthStateChanged(auth, async userAuth => {
      await createUserProfileDocument(userAuth);
      if (userAuth) {
        setCurrentUser(userAuth);
        console.log(`${userAuth.displayName} has logged in`);

      } 
      else {
        setCurrentUser(userAuth);
        console.log( 'User has logged out');
      }
      return () => {
        unsubscribeFromAuth();
      }
    })
  },[]);

     
const tryit = () => {
  console.log(currentUser.email);
}


  return (
    <div className="App">
      <div className='user-interface-window'>
        <Header
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          characterList={characterList}
          setCharacterList={setCharacterList}
        />
        <button onClick={() => tryit()}>try</button>

        <h1 className="main-title">G.C.C.M</h1>
        <SearchBar
          isChoosingAdvantages={isChoosingAdvantages}
          setSelectedAdvantagesList={setSelectedAdvantagesList}
          setSelectedDisadvantagesList={setSelectedDisadvantagesList}
        />

        <ToggleAdvantageDisadvantage
          isChoosingAdvantages={isChoosingAdvantages}
          setIsChoosingAdvantages={setIsChoosingAdvantages}
        />

        <DisplaySelected
          selectedAdvantagesList={selectedAdvantagesList}
          setSelectedAdvantagesList={setSelectedAdvantagesList}
          selectedDisadvantagesList={selectedDisadvantagesList}
          setSelectedDisadvantagesList={setSelectedDisadvantagesList}
        />
      </div>
      <div className='results-window' id='results'>
        <CopyToClipboard />
        <PrintPDF
          selectedAdvantagesList={selectedAdvantagesList}
          selectedDisadvantagesList={selectedDisadvantagesList}
        />
      </div>
    </div>
  );
}

export default App
