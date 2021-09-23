import { useEffect, useState } from "react";

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
  addNewCharacterForUser,
  getMatchingCharactersForUser,
  readBack,
} from "./Components/Firebase/firebase.utils";
import SaveCharacter from "./Components/saveCharacter/save-character-component";

function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [usersCharacterObject, setUsersCharacterObject] = useState([]);
  const [usersChoiceReference, setUsersChoiceReference] = useState([]);
  const [characterName, setCharacterName] = useState("");
  const [characterList, setCharacterList] = useState([]);

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
  const arr1 = ["1", "2", "3"];

  const read = () => {
    // console.log(usersChoiceReference);
    readBack(currentUser);
  };

  // const createUserChoiceReference = () => {
  //   let arr = [];
  //   selectedAdvantagesList.map((element) => {
  //     arr.push(element.title);

  //     setUsersChoiceReference(arr);
  //     console.log('arr: ' + arr);
  //     console.log(usersChoiceReference);
  //   })
  // }

  const reference = () => {
    console.log(usersChoiceReference);
  };

  const saveCharacterHandler = async () => {
    console.log("****saveCharacterHandler Called");
    console.log("****selectedAdvantagesList: ", selectedAdvantagesList);
    console.log("****selectedDisadvantagesList: ", selectedDisadvantagesList);
    console.log("****characterName: ", characterName);
    const newCharacter = {
      name: characterName,
      advantages: selectedAdvantagesList.map(({ title }) => title),
      disadvantages: selectedDisadvantagesList.map(({ title }) => title),
    };
    const currentlyLoggedInUserId = currentUser.uid;
    console.log("**** New Character for " + currentlyLoggedInUserId + " is ", newCharacter);
    const newCharacterRef = await addNewCharacterForUser(currentlyLoggedInUserId, newCharacter);
    console.log("**** newCharacterRef: ", newCharacterRef);
  };

  const getRecord = async () => {
    const records = await getMatchingCharactersForUser(currentUser.uid, 'Ironman');
    console.log("records: ", records);
  }

  return (
    <div className="App">
      <div className="user-interface-window">
        <Header
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          characterName={characterName}
          setCharacterName={setCharacterName}
        />{" "}
        <button onClick={() => read()}> read </button>{" "}
        <button onClick={reference}> ucr </button>{" "}
        <h1 className="main-title"> G.C.C.M </h1>{" "}
        <button type="button" onClick={getRecord}>Get Record with name Ironman</button>
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
        />{" "}
      </div>{" "}
      <div className="results-window" id="results">
        <SaveCharacter
          saveCharacterHandler={saveCharacterHandler}
          usersCharacterObject={usersCharacterObject}
          setUsersCharacterObject={setUsersCharacterObject}
          characterName={characterName}
          selectedAdvantagesList={selectedAdvantagesList}
          setSelectedAdvantagesList={setSelectedAdvantagesList}
          selectedDisadvantagesList={selectedDisadvantagesList}
          currentUser={currentUser}
          usersChoiceReference={usersChoiceReference}
          setUsersChoiceReference={setUsersChoiceReference}
        />{" "}
        <CopyToClipboard />
        <PrintPDF
          selectedAdvantagesList={selectedAdvantagesList}
          selectedDisadvantagesList={selectedDisadvantagesList}
        />{" "}
      </div>{" "}
    </div>
  );
}

export default App;
