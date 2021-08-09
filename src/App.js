import { useState } from 'react';
import './App.css';
import ToggleAdvantageDisadvantage from './Components/ToggleAdvantageDisadvantage/ToggleAdvantageDisadvantage';
import DisplaySelected from './Selected/DisplaySelected';
import DisplayAdvantages from './Display Results/DisplayAdvantages';
import DisplayDisadvantages from './Display Results/DisplayDisadvantages';
import SearchBar from './Components/SearchBar/SearchBar';


function App() {
  const [isChoosingAdvantages, setIsChoosingAdvantages] = useState(true);
  const [selectedAdvantagesList, setSelectedAdvantagesList] = useState([]);
  const [selectedDisadvantagesList, setSelectedDisadvantagesList] = useState([]);

  const log = () => {
    console.log('selectedAdvantages: ' + selectedAdvantagesList);
    console.log(isChoosingAdvantages);
  }

 
  return (
    <div className="App">
      <div className='selection-window'>
        <ToggleAdvantageDisadvantage
          isChoosingAdvantages={isChoosingAdvantages}
          setIsChoosingAdvantages={setIsChoosingAdvantages}
        />

        <SearchBar
          isChoosingAdvantages={isChoosingAdvantages}
          selectedAdvantagesList={selectedAdvantagesList}
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
      <button onClick={log}>MainLog</button>
      <div className='results-window'>
        <DisplayAdvantages selectedAdvantagesList={selectedAdvantagesList} />
        <DisplayDisadvantages selectedDisadvantagesList={selectedDisadvantagesList} />
      </div>
    </div>
  );
}

export default App;
