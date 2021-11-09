import { useContext } from "react";
import Header from "../../Components/Header/Header.component";
import SearchBar from "../../Components/SearchBar/SearchBar";
import EditCharacter from "../../Components/Toolbar/EditCharacter/EditCharacter";
import LoadCharacter from "../../Components/Toolbar/LoadCharacter/LoadCharacter";
import { CharacterNameContext } from "../../context";
import DisplaySelected from "../../Selected/DisplaySelected";

const EditCharacterPage = () => {
    const { characterName } = useContext(CharacterNameContext);
    return (  
        <div className="edit-character-page">
      <Header />
      <div className="user-interface-window">
        <h1 className="main-title"> G.C.C.M </h1>
        <div className="container">
          <div className="toolbar-container">
            <span className="toolbar-header">Character Toolbar</span>
            <div className="toolbar-characters">
              <LoadCharacter />             
              <p>Reset Changes**replace</p>
              <EditCharacter />
            </div>
       
          </div>
          <div className="main-interface">
            <SearchBar />
            <h1>{characterName.toUpperCase()}'S CHEATSHEET</h1>
            <DisplaySelected />
          </div>
        </div>
      </div>
    </div>
  );

    
}
 
export default EditCharacterPage;