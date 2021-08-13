import { useEffect, useState } from 'react';
import './App.css';
import ToggleAdvantageDisadvantage from './Components/ToggleAdvantageDisadvantage/ToggleAdvantageDisadvantage';
import DisplaySelected from './Selected/DisplaySelected';
import DisplayAdvantages from './Display Results/DisplayAdvantages';
import DisplayDisadvantages from './Display Results/DisplayDisadvantages';
import SearchBar from './Components/SearchBar/SearchBar';
import Toolbar from './Toolbar/Toolbar';


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
      <div className='userSelection-window'>
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
      <div className='toolbar-window'>
        <Toolbar />
      </div>
      <div className='results-window' id='results'>
        <DisplayAdvantages selectedAdvantagesList={selectedAdvantagesList} />
        <DisplayDisadvantages selectedDisadvantagesList={selectedDisadvantagesList} />
      </div>
    </div>
  );
}

export default App;
