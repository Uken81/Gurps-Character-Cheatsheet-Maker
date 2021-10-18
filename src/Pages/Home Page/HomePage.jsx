import { useContext, useEffect, useRef, useState } from "react";

import "../../App";

import "../../App.css"
import "../../Display Results/DisplayResults.styles.css";
import "./homePage.styles.scss";

import Header from "../../Components/Header/Header.component";
import DisplaySelected from "../../Selected/DisplaySelected";
import SearchBar from "../../Components/SearchBar/SearchBar";
import SaveCharacter from "../../Components/Toolbar/saveCharacter/save-character-component";
import ComponentToPrint from "../../Display Results/ComponentToPrint";

import PrintPDF from "../../Components/Toolbar/Print PDF/printPDF";
import CopyToClipboard from "../../Components/Toolbar/CopyToClipboard/CopyToClipboard";
import { useHistory } from "react-router";

import { onAuthStateChanged } from "firebase/auth";
import { auth, createUserProfileDocument } from "../../Components/Firebase/firebase.utils";
import { UserContext } from "../../context";
import LoadCharacter from "../../Components/Toolbar/LoadCharacter/LoadCharacter";
import ResetCharacter from "../../Components/Toolbar/ResetCharacter/ResetCharacter";
import DeleteCharacter from "../../Components/DeleteCharacter/DeleteCharacter";


const HomePage = () => {
  const { user, setUser } = useContext(UserContext);
  const [characterName, setCharacterName] = useState("");

  const [currentCharacterId, setCurrentCharacterId]  = useState('');

  const [formInput, setForminput] = useState('');
  const [selectInputValue, setSelectInputValue] = useState([]);

  const [isChoosingAdvantages, setIsChoosingAdvantages] = useState(true);
  const [selectedAdvantagesList, setSelectedAdvantagesList] = useState([]);
  const [selectedDisadvantagesList, setSelectedDisadvantagesList] = useState([]);

  const history = useHistory();
  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
      await createUserProfileDocument(userAuth);
      if (userAuth) {
        setUser(userAuth);
        console.log('OnAuthStateChange/HomePage')
        console.log(`${userAuth.email} has logged in`);
        console.log('****User: ', user)
        history.push("/");
      } else {
        setUser(userAuth);
        console.log("User has logged out");
      }
      return () => {
        unsubscribeFromAuth();
      };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const newCharacter = useRef(null);
  const handleInput = () => {
    const form = newCharacter.current;
    let value = form['new-character'].value;
    setForminput(value);
  }

  const handleAddCharacter = (event) => {
    event.preventDefault();
    const form = newCharacter.current;

    let value = form['new-character'].value;
    console.log("****value: ", value);
    setCharacterName(value);
    setForminput('');
  }

  const componentRef = useRef();

  const con = () => {
    console.log('currentCharacterId', currentCharacterId);
  }

  return (
    <div className="App">
      <Header />

      <div className="user-interface-window">
        <h1 className="main-title"> G.C.C.M </h1>
        <button onClick={con}>cony</button>

        <SearchBar
          selectInputValue={selectInputValue}
          setSelectInputValue={setSelectInputValue}
          isChoosingAdvantages={isChoosingAdvantages}
          setIsChoosingAdvantages={setIsChoosingAdvantages}
          characterName={characterName}
          setSelectedAdvantagesList={setSelectedAdvantagesList}
          setSelectedDisadvantagesList={setSelectedDisadvantagesList}
        />

        <DisplaySelected
          selectedAdvantagesList={selectedAdvantagesList}
          setSelectedAdvantagesList={setSelectedAdvantagesList}
          selectedDisadvantagesList={selectedDisadvantagesList}
          setSelectedDisadvantagesList={setSelectedDisadvantagesList}
        />

        <div className="toolbar-container">
          <ResetCharacter
            setSelectInputValue={setSelectInputValue}
            setCharacterName={setCharacterName}
            setSelectedAdvantagesList={setSelectedAdvantagesList}
            setSelectedDisadvantagesList={setSelectedDisadvantagesList}
          />
          {user && <div className="save-load-delete-characters">
            <LoadCharacter
              user={user}
              setCharacterName={setCharacterName}
              setCurrentCharacterId={setCurrentCharacterId}
              setSelectedAdvantagesList={setSelectedAdvantagesList}
              setSelectedDisadvantagesList={setSelectedDisadvantagesList}
            />

            <SaveCharacter
              characterName={characterName}
              setCurrentCharacterId={setCurrentCharacterId}
              selectedAdvantagesList={selectedAdvantagesList}
              setSelectedAdvantagesList={setSelectedAdvantagesList}
              selectedDisadvantagesList={selectedDisadvantagesList}
              setSelectedDisadvantagesList={setSelectedDisadvantagesList}
            />

            <DeleteCharacter 
            currentCharacterId={currentCharacterId}
            />
          </div>}
          <CopyToClipboard />

          <PrintPDF
            selectedAdvantagesList={selectedAdvantagesList}
            selectedDisadvantagesList={selectedDisadvantagesList}
            componentRef={componentRef}
          />
        </div>
        <div className="form">
          <form className='new-character-form' ref={newCharacter}>
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

export default HomePage;
