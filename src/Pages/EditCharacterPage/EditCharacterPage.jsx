import Header from '../../Components/Header/Header.component';
import SearchBar from '../../Components/SearchBar/SearchBar';
import EditCharacter from '../../Components/Toolbar/EditCharacter/EditCharacter';
import ResetChanges from '../../Components/Toolbar/ResetChanges/ResetChanges';
import DisplaySelected from '../../Components/Selected/DisplaySelected';
import usePushBackToLoadCharacter from '../../Components/SharedComponents/PushBackToLoadCharacter';

const EditCharacterPage = () => {
  usePushBackToLoadCharacter();

  return (
    <div className="edit-character-page">
      <Header />
      <div className="user-interface-window">
        <h1 className="main-title"> G.C.C.M </h1>
        <div className="container">
          <div className="toolbar-container">
            <span className="toolbar-header">Character Toolbar</span>
            <div className="toolbar-characters">
              <ResetChanges />
              <EditCharacter />
            </div>
          </div>
          <div className="main-interface">
            <SearchBar />
            <DisplaySelected />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCharacterPage;
