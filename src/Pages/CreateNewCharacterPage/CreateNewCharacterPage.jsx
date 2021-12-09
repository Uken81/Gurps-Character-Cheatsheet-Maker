import { useRef } from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';

import '../../Components/Display Results/DisplayResults.styles.scss';
import '../page.styles.scss';

import Header from '../../Components/Header/Header.component';
import SearchBar from '../../Components/SearchBar/SearchBar';
import CopyToClipboard from '../../Components/Toolbar/CopyToClipboard/CopyToClipboard';
import PrintPDF from '../../Components/Toolbar/Print PDF/printPDF';
import ResetCharacter from '../../Components/Toolbar/ResetCharacter/ResetCharacter';
import DisplaySelected from '../../Components/Selected/DisplaySelected';
import ComponentToPrint from '../../Components/Display Results/ComponentToPrint';

import { useCharacterStore, useToggleStore } from '../../Global State/store';
import SaveCharacter from '../../Components/Toolbar/SaveCharacter/SaveCharacterComponent';
import SuccessfulSaveAlert from '../../Components/Toolbar/SaveCharacter/SuccessfulSaveAlert';

const CreateNewCharacterPage = () => {
  const showSuccessfulSaveAlert = useToggleStore((state) => state.showSuccessfulSaveAlert);

  const [formInput, setForminput] = useState('');

  const formRef = useRef();

  const handleInput = () => {
    const value = formRef.current.value;
    setForminput(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    useCharacterStore.setState({ characterName: formInput });
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
