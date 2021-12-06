import '../../Display Results/DisplayResults.styles.scss';
import '../page.styles.scss';

import Header from '../../Components/Header/Header.component';
import CopyToClipboard from '../../Components/Toolbar/CopyToClipboard/CopyToClipboard';
import DeleteCharacter from '../../Components/Toolbar/DeleteCharacter/DeleteCharacter';
import PrintPDF from '../../Components/Toolbar/Print PDF/printPDF';
import DisplaySelected from '../../Selected/DisplaySelected';
import { useContext, useState } from 'react';
import { CharacterNameContext } from '../../context';
import { ToEditCharacter } from '../../Components/Header/Navigation Links/navigationLinks';
import DeleteAlert from '../../Components/Toolbar/DeleteCharacter/DeleteAlert';

const ManageCharactersPage = () => {
  const { characterName } = useContext(CharacterNameContext);
  const [showAlert, setShowAlert] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  return (
    <div className="manage-character-page">
      <Header />
      <div className="user-interface-window">
        <h1 className="main-title"> G.C.C.M </h1>
        <div className="container">
          <div className="toolbar-container">
            <span className="toolbar-header">Character Toolbar</span>
            <div className="toolbar-characters">
              <ToEditCharacter />
              <DeleteCharacter setShowAlert={setShowAlert} isDeleting={isDeleting} />
            </div>
            <div className="toolbar-print-options">
              <CopyToClipboard />
              <PrintPDF />
            </div>
          </div>
          <div className="main-interface">
            <h1 className="selected-header">{characterName.toUpperCase()}&apos;S CHEATSHEET</h1>
            {showAlert && (
              <DeleteAlert
                setShowAlert={setShowAlert}
                isDeleting={isDeleting}
                setIsDeleting={setIsDeleting}
              />
            )}
            <DisplaySelected />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCharactersPage;
