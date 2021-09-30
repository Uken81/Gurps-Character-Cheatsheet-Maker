import { useEffect, useRef, useState } from "react";

import "./App.css";
import "./Display Results/DisplayResults.styles.css";

import Header from "./Components/Header/Header.component";
import ToggleAdvantageDisadvantage from "./Components/ToggleAdvantageDisadvantage/ToggleAdvantageDisadvantage";
import DisplaySelected from "./Selected/DisplaySelected";
import SearchBar from "./Components/SearchBar/SearchBar";
import SaveCharacter from "./Components/saveCharacter/save-character-component";
import ComponentToPrint from "./Display Results/ComponentToPrint";

import PrintPDF from "./Components/Print PDF/printPDF";
import CopyToClipboard from "./Components/CopyToClipboard/CopyToClipboard";
import { useHistory } from "react-router";

import { onAuthStateChanged } from "firebase/auth";
import {
  auth,
  createUserProfileDocument,
} from "./Components/Firebase/firebase.utils";




function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [usersCharacterObject, setUsersCharacterObject] = useState([]);
  const [usersChoiceReference, setUsersChoiceReference] = useState([]);
  const [characterName, setCharacterName] = useState("");
  const [formInput, setForminput] = useState('');

  const [isChoosingAdvantages, setIsChoosingAdvantages] = useState(true);
  const [selectedAdvantagesList, setSelectedAdvantagesList] = useState([]);
  const [selectedDisadvantagesList, setSelectedDisadvantagesList] = useState([]);

  const history = useHistory();
 useEffect(() => {
    console.log('app');
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
      await createUserProfileDocument(userAuth);
      if (userAuth) {
        setCurrentUser(userAuth);
        console.log(`${userAuth.displayName} has logged in`);
        history.push("/");
      } else {
        setCurrentUser(userAuth);
        console.log("User has logged out");
      }
      return () => {
        unsubscribeFromAuth();
      };
    });
  },[currentUser]);

  const handleInput = () => {
    const form = newCharacter.current;
    let value = form['new-character'].value;
    setForminput(value);
}


const newCharacter = useRef(null);
const handleAddCharacter = (event) => {
    event.preventDefault();
    const form = newCharacter.current;

    let value = form['new-character'].value;
    console.log("****value: ", value);
    setCharacterName(value);
    setForminput('');
}

  const componentRef = useRef();

  return (
    <div className="App">
        <Header
          currentUser={currentUser}
          setSelectedAdvantagesList={setSelectedAdvantagesList}
          setSelectedDisadvantagesList={setSelectedDisadvantagesList}
          selectedAdvantagesList={selectedAdvantagesList}
        />
      <div className="user-interface-window">     
        <h1 className="main-title"> G.C.C.M </h1>
        <div className="form">
                <form className='new-character-form'ref={newCharacter}>
                  
                        <input
                            name='new-character'
                            label='new-character'
                            type='text'
                            placeholder='Enter New Character Name...' 
                            value={formInput}
                            onChange={handleInput}
                        />
                        <button onClick={handleAddCharacter}>Submit</button>
                    
                </form>
            </div>
        <SearchBar
          isChoosingAdvantages={isChoosingAdvantages}
          characterName={characterName}
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
      <div className="toolbar-container">
          {currentUser && <SaveCharacter
            // saveCharacterHandler={saveCharacterHandler}
            usersCharacterObject={usersCharacterObject}
            setUsersCharacterObject={setUsersCharacterObject}
            characterName={characterName}
            selectedAdvantagesList={selectedAdvantagesList}
            setSelectedAdvantagesList={setSelectedAdvantagesList}
            selectedDisadvantagesList={selectedDisadvantagesList}
            currentUser={currentUser}
            usersChoiceReference={usersChoiceReference}
            setUsersChoiceReference={setUsersChoiceReference}
          />}
          <CopyToClipboard />
          <PrintPDF
            selectedAdvantagesList={selectedAdvantagesList}
            selectedDisadvantagesList={selectedDisadvantagesList}
            componentRef={componentRef}
          />
        </div>
      <div className="results-window" id="results">
        <ComponentToPrint
          selectedAdvantagesList={selectedAdvantagesList}
          selectedDisadvantagesList={selectedDisadvantagesList}
          ref={componentRef}
        />
      </div>
    </div>
  );
}

export default App;
