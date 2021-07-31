import { useState } from 'react';
import './App.css';
import AdvantageSelector from './Advantages/AdvantageSelector';
import Disadvantageselector from './Disadvantages/DisadvantageSelector';
import ToggleAdvantageDisadvantage from './Components/ToggleAdvantageDisadvantage/ToggleAdvantageDisadvantage';
import Selected from './Selected/DisplaySelected';
import DisplayAdvantages from './Display Results/DisplayAdvantages';


function App() {
  const [isAdvantage, setIsAdvantage] = useState(true);
  const [selectedAdvantagesList, setselectedAdvantagesList] = useState([]);
  const [selectedDisadvantagesList, setSelectedDisadvantagesList] = useState([]);

  const log = () => {
    console.log('selectedAdvantages: ' + selectedAdvantagesList);
  }


  return (
    <div className="App">
      <div className='selection-section'>
        <ToggleAdvantageDisadvantage isAdvantage={isAdvantage} setIsAdvantage={setIsAdvantage} />
        <Selected
          selectedAdvantagesList={selectedAdvantagesList}
          selectedDisadvantagesList={selectedDisadvantagesList}
        />
        {isAdvantage && <AdvantageSelector selectedAdvantagesList={selectedAdvantagesList} setSelectedAdvantagesList={setselectedAdvantagesList} />}
        {!isAdvantage && <Disadvantageselector selectedDisadvantagesList={selectedDisadvantagesList} setSelectedDisadvantagesList={setSelectedDisadvantagesList} />}
      </div>
      <button onClick={log}>MainLog</button>
      <div className='results-window'>
        <DisplayAdvantages selectedAdvantagesList={selectedAdvantagesList} />
      </div>
    </div>
  );
}

export default App;
