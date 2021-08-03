import { useState } from 'react';
import './App.css';
import AdvantageSelector from './Advantages/AdvantageSelector';
import Disadvantageselector from './Disadvantages/DisadvantageSelector';
import ToggleAdvantageDisadvantage from './Components/ToggleAdvantageDisadvantage/ToggleAdvantageDisadvantage';
import DisplaySelected from './Selected/DisplaySelected';
import DisplayAdvantages from './Display Results/DisplayAdvantages';
import DisplayDisadvantages from './Display Results/DisplayDisadvantages';


function App() {
  const [isAdvantage, setIsAdvantage] = useState(true);
  const [selectedAdvantagesList, setSelectedAdvantagesList] = useState([]);
  const [selectedDisadvantagesList, setSelectedDisadvantagesList] = useState([]);

  const log = () => {
    console.log('selectedAdvantages: ' + selectedAdvantagesList);
  }


  return (
    <div className="App">
      <div className='selection-window'>
        <ToggleAdvantageDisadvantage isAdvantage={isAdvantage} setIsAdvantage={setIsAdvantage} />
        <DisplaySelected
          selectedAdvantagesList={selectedAdvantagesList}
          setSelectedAdvantagesList={setSelectedAdvantagesList}
          selectedDisadvantagesList={selectedDisadvantagesList}
          setSelectedDisadvantagesList={setSelectedDisadvantagesList}
        />
        {isAdvantage && <AdvantageSelector selectedAdvantagesList={selectedAdvantagesList} setSelectedAdvantagesList={setSelectedAdvantagesList} />}
        {!isAdvantage && <Disadvantageselector selectedDisadvantagesList={selectedDisadvantagesList} setSelectedDisadvantagesList={setSelectedDisadvantagesList} />}
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
