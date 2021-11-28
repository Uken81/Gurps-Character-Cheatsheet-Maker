import { useRef } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Form } from 'react-bootstrap';

import '../../App.css';
import '../../Display Results/DisplayResults.styles.css';
import '../page.styles.scss';

import Header from '../../Components/Header/Header.component';
import SearchBar from '../../Components/SearchBar/SearchBar';
import CopyToClipboard from '../../Components/Toolbar/CopyToClipboard/CopyToClipboard';
import PrintPDF from '../../Components/Toolbar/Print PDF/printPDF';
import ResetCharacter from '../../Components/Toolbar/ResetCharacter/ResetCharacter';
import SaveCharacter from '../../Components/Toolbar/SaveCharacter/Save-character-component';
import { CharacterNameContext, ShowSuccessfulSaveAlertContext } from '../../context';
import DisplaySelected from '../../Selected/DisplaySelected';
import ComponentToPrint from '../../Display Results/ComponentToPrint';
import SuccessfulSaveAlert from '../../Components/Toolbar/SaveCharacter/SuccessfulSaveAlert';

const CreateNewCharacterPage = () => {
  const { setCharacterName } = useContext(CharacterNameContext);
  const { showSuccessfulSaveAlert } = useContext(ShowSuccessfulSaveAlertContext);
  const [formInput, setForminput] = useState('');

  const formRef = useRef();

  const handleInput = () => {
    const value = formRef.current.value;
    setForminput(value);
    console.log(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCharacterName(formInput);
    setForminput('');
  };

  return (
    <div className="App">
      <Header />
      <div className="user-interface-window">
        <h1 className="main-title"> G.C.C.M </h1>
        {showSuccessfulSaveAlert && <SuccessfulSaveAlert />}
        <div className="container">
          <div className="toolbar-container">
            <span className="toolbar-header">Character Tools</span>
            <div className="toolbar-characters">
              <ResetCharacter />
              <SaveCharacter />
            </div>
            <span className="toolbar-header">Output Tools</span>
            <div className="toolbar-print-options">
              <PrintPDF />
              <CopyToClipboard />
            </div>
          </div>
          <div className="main-interface">
            <div className="form">
              <Form className="new-character-form" onSubmit={handleSubmit}>
                <Form.Control
                  type="text"
                  ref={formRef}
                  value={formInput}
                  onChange={handleInput}
                  placeholder="Enter New Character Name..."
                  size="lg"
                />
              </Form>
            </div>
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
};

export default CreateNewCharacterPage;
