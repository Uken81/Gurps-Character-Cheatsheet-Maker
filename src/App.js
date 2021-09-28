import { useEffect, useRef, useState } from "react";

import "./App.css";
import "./Display Results/DisplayResults.styles.css";

import ToggleAdvantageDisadvantage from "./Components/ToggleAdvantageDisadvantage/ToggleAdvantageDisadvantage";
import DisplaySelected from "./Selected/DisplaySelected";
import SearchBar from "./Components/SearchBar/SearchBar";

import PrintPDF from "./Components/Print PDF/printPDF";
import CopyToClipboard from "./Components/CopyToClipboard/CopyToClipboard";
import Header from "./Components/Header/Header.component";
import { onAuthStateChanged } from "firebase/auth";
import {
  auth,
  createUserProfileDocument,
  // addNewCharacterForUser,
  getMatchingCharactersForUser,
} from "./Components/Firebase/firebase.utils";
import SaveCharacter from "./Components/saveCharacter/save-character-component";
import AdvantagesArray from "./Attribute Objects/Advantages/Advantages.js";
import DisadvantagesArray from "./Attribute Objects/Disadvantages/Disadvantages";
import ComponentToPrint from "./Display Results/ComponentToPrint";
import LoadCharacter from "./Components/LoadCharacter/LoadCharacter";

function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [usersCharacterObject, setUsersCharacterObject] = useState([]);
  const [usersChoiceReference, setUsersChoiceReference] = useState([]);
  const [characterName, setCharacterName] = useState("");

  const [isChoosingAdvantages, setIsChoosingAdvantages] = useState(true);
  const [selectedAdvantagesList, setSelectedAdvantagesList] = useState([]);
  const [selectedDisadvantagesList, setSelectedDisadvantagesList] = useState(
    []
  );

  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
      await createUserProfileDocument(userAuth);
      if (userAuth) {
        setCurrentUser(userAuth);
        console.log(`${userAuth.displayName} has logged in`);
      } else {
        setCurrentUser(userAuth);
        console.log("User has logged out");
      }
      return () => {
        unsubscribeFromAuth();
      };
    });
  }, []);

  // const saveCharacterHandler = async () => {
  //   console.log("****saveCharacterHandler Called");
  //   console.log("****selectedAdvantagesList: ", selectedAdvantagesList);
  //   console.log("****selectedDisadvantagesList: ", selectedDisadvantagesList);
  //   console.log("****characterName: ", characterName);
  //   const newCharacter = {
  //     name: characterName,
  //     advantages: selectedAdvantagesList.map(({ title }) => title),
  //     disadvantages: selectedDisadvantagesList.map(({ title }) => title),
  //   };
  //   const currentlyLoggedInUserId = currentUser.uid;
  //   console.log("**** New Character for " + currentlyLoggedInUserId + " is ", newCharacter);
  //   const newCharacterRef = await addNewCharacterForUser(currentlyLoggedInUserId, newCharacter);
  //   console.log("**** newCharacterRef: ", newCharacterRef);
  // };

  // const getRecord = async () => {
  //   const records = await getMatchingCharactersForUser(currentUser.uid, 'Ironman');
  //   console.log("records: ", records);
  //   return records;
  // }

  // const test = async () => {
  //   const newRecord = await getRecord();
  //   const characterName = newRecord.map((item) => item.name);

  //   const advantagesRecord = newRecord.flatMap((item) => item.advantages);
  //   const characterAdvantages = AdvantagesArray.filter((advantage) => advantagesRecord.includes(advantage.title));

  //   const disadvantagesRecord = newRecord.flatMap((item) => item.disadvantages);
  //   const characterDisadvantages = DisadvantagesArray.filter((disadvantage) => disadvantagesRecord.includes(disadvantage.title));

  //   setSelectedAdvantagesList(characterAdvantages);
  //   setSelectedDisadvantagesList(characterDisadvantages);

  //   console.log('character name: ' + characterName);
  //   console.log('character advantages' + JSON.stringify(characterAdvantages));
  //   console.log('character disadvantages' + characterDisadvantages);
  //   // console.log(JSON.stringify(characterAdvantages));
  // }

  const componentRef = useRef();

  return (
    <div className="App">
      <div className="user-interface-window">
        <Header
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          characterName={characterName}
          setCharacterName={setCharacterName}
          setSelectedAdvantagesList={setSelectedAdvantagesList}
          setSelectedDisadvantagesList={setSelectedDisadvantagesList}
        />
        <h1 className="main-title"> G.C.C.M </h1>
        {/* <button type="button" onClick={getRecord}>Get Record with name Ironman</button> */}
        {/* <button onClick={test} >Read Character Record</button> */}
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
