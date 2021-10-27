import { useContext, useRef, useState } from "react";
import { useEffect } from "react";

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
import { CharacterNameContext, UserContext } from "../../context";

import LoadCharacter from "../../Components/Toolbar/LoadCharacter/LoadCharacter";
import ResetCharacter from "../../Components/Toolbar/ResetCharacter/ResetCharacter";
import DeleteCharacter from "../../Components/Toolbar/DeleteCharacter/DeleteCharacter";
import EditCharacter from "../../Components/Toolbar/EditCharacter/EditCharacter";


const HomePage = () => {
  const { user, setUser } = useContext(UserContext);
  const { setCharacterName } = useContext(CharacterNameContext);

  const [currentCharacterId, setCurrentCharacterId] = useState('');
  const [formInput, setForminput] = useState('');

  // useEffect(() => {
  //   let unsubscribeFromAuth = null;
    // unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
  //     await createUserProfileDocument(userAuth);
  //     if (userAuth) {
  //       setUser(userAuth);
  //       console.log('OnAuthStateChange/HomePage')
  //       console.log(`${userAuth.email} has logged in`);
  //       console.log('****User: ', user)
  //     } else {
  //       setUser(userAuth);
  //       console.log("User has logged out");
  //     }
  //     return () => {
  //       unsubscribeFromAuth();
  //     };
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [user]);

  // const newCharacter = useRef(null);
  // const handleInput = () => {
  //   const form = newCharacter.current;
  //   let value = form['new-character'].value;
  //   setForminput(value);
  // }

  // const handleAddCharacter = (event) => {
  //   event.preventDefault();
  //   const form = newCharacter.current;

  //   let value = form['new-character'].value;
  //   console.log("****value: ", value);
  //   setCharacterName(value);
  //   setForminput('');
  // }


  // const con = () => {
  //   console.log('componenRef: ', componentRef);
  // }

  return (
    <div className="App">
      <Header />

      <div className="user-interface-window">
        <h1 className="main-title"> G.C.C.M </h1>
        {/* <button onClick={con}>cony</button> */}
        <div className='container'>
          <div className="toolbar-container">

            <span className='toolbar-header'>Character Toolbar</span>
            {user && <div className="toolbar-characters">
              <ResetCharacter />

              <LoadCharacter
                setCharacterName={setCharacterName}
                setCurrentCharacterId={setCurrentCharacterId}
              />

              <SaveCharacter
                setCurrentCharacterId={setCurrentCharacterId}
              />

              <DeleteCharacter
                currentCharacterId={currentCharacterId}
              />
            </div>}
            <CopyToClipboard />

            <PrintPDF />
          </div>

          <div className="main-interface">
            <SearchBar />

            <DisplaySelected />
          </div>
        </div>
     
      </div>
      <div className="results-window" id="results">
        <ComponentToPrint />
      </div>
    </div>
  );
}

export default HomePage;