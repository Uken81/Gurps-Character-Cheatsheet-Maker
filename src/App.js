import { useEffect, useState } from 'react';

import './App.css';

import ToggleAdvantageDisadvantage from './Components/ToggleAdvantageDisadvantage/ToggleAdvantageDisadvantage';
import DisplaySelected from './Selected/DisplaySelected';
import SearchBar from './Components/SearchBar/SearchBar';

import PrintPDF from './Components/Print PDF/printPDF';
import CopyToClipboard from './Components/CopyToClipboard/CopyToClipboard';


function App() {
  const [isChoosingAdvantages, setIsChoosingAdvantages] = useState(true);
  const [selectedAdvantagesList, setSelectedAdvantagesList] = useState([]);
  const [selectedDisadvantagesList, setSelectedDisadvantagesList] = useState([]);

  //Would this effect be better placed in Display Results? If so should it be in a seperate component?
  useEffect(() => {
    const displayResultsWindow = () => {
      const resultsWindow = document.getElementById('results');
      if (selectedAdvantagesList.length || selectedDisadvantagesList.length > 0) {
        resultsWindow.style.display = 'block';
      } else {
        resultsWindow.style.display = 'none';
      }
    }
    displayResultsWindow();
  }, [selectedAdvantagesList, selectedDisadvantagesList]);


  return (
    <div className="App">
      <div className='user-selection-window'>
        <ToggleAdvantageDisadvantage
          isChoosingAdvantages={isChoosingAdvantages}
          setIsChoosingAdvantages={setIsChoosingAdvantages}
        />

        <SearchBar
          isChoosingAdvantages={isChoosingAdvantages}
          setSelectedAdvantagesList={setSelectedAdvantagesList}
          setSelectedDisadvantagesList={setSelectedDisadvantagesList}
        />

        <DisplaySelected
          selectedAdvantagesList={selectedAdvantagesList}
          setSelectedAdvantagesList={setSelectedAdvantagesList}
          selectedDisadvantagesList={selectedDisadvantagesList}
          setSelectedDisadvantagesList={setSelectedDisadvantagesList}
        />
      </div>
      <div className='results-window' id='results'>
        <CopyToClipboard />
        <PrintPDF
          selectedAdvantagesList={selectedAdvantagesList}
          selectedDisadvantagesList={selectedDisadvantagesList}
        />
      </div>
    </div>
  );
}

export default App;
