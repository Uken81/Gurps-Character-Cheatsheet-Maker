import "../../App.css";
import "../../Display Results/DisplayResults.styles.css";
import "../Home Page/homePage.styles.scss";

import Header from "../../Components/Header/Header.component";
import CopyToClipboard from "../../Components/Toolbar/CopyToClipboard/CopyToClipboard";
import DeleteCharacter from "../../Components/Toolbar/DeleteCharacter/DeleteCharacter";
import PrintPDF from "../../Components/Toolbar/Print PDF/printPDF";
import DisplaySelected from "../../Selected/DisplaySelected";
import { useContext } from "react";
import { CharacterNameContext } from "../../context";
import { ToEditCharacter } from "../../Components/SignInAndSignUp/SignInButtons/signinButtons";

const ManageCharactersPage = () => {
    const { characterName } = useContext(CharacterNameContext);
  return (
    <div className="manage-characters-page">
      <Header />
      <div className="user-interface-window">
        <h1 className="main-title"> G.C.C.M </h1>
        <div className="container">
          <div className="toolbar-container">
            <span className="toolbar-header">Character Toolbar</span>
            <div className="toolbar-characters">
              <ToEditCharacter />
              <DeleteCharacter />
            </div>
            <div className="toolbar-print-options">
              <CopyToClipboard />
              <PrintPDF />
            </div>
          </div>
          <div className="main-interface">
            {/* <SearchBar /> */}
            <h1>{characterName.toUpperCase()}'S CHEATSHEET</h1>
            <DisplaySelected />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCharactersPage;
