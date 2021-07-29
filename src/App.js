import { useState } from 'react';
import './App.css';
import AdvantageSelector from './Advantages/AdvantageSelector';
import Disadvantageselector from './Disadvantages/DisadvantageSelector';
import ToggleAdvantageDisadvantage from './Components/ToggleAdvantageDisadvantage/ToggleAdvantageDisadvantage';
import Selected from './Selected/DisplaySelected';


function App() {
  const [isAdvantage, setIsAdvantage] = useState(true);
  const [selectedAdvantagesList, setselectedAdvantagesList] = useState([]);
  const [selectedDisadvantagesList, setSelectedDisadvantagesList] = useState([]);

  const log = () => {
    console.log(selectedAdvantagesList);
  }


  return (
    <div className="App">
      <div className='selection-screen'>
        <ToggleAdvantageDisadvantage isAdvantage={isAdvantage} setIsAdvantage={setIsAdvantage} />
        <Selected
          selectedAdvantagesList={selectedAdvantagesList}
          selectedDisadvantagesList={selectedDisadvantagesList}
        />
        {isAdvantage && <AdvantageSelector selectedAdvantagesList={selectedAdvantagesList} setSelectedAdvantagesList={setselectedAdvantagesList} />}
        {!isAdvantage && <Disadvantageselector selectedDisadvantagesList={selectedDisadvantagesList} setSelectedDisadvantagesList={setSelectedDisadvantagesList} />}
      </div>
      <button onClick={log}>MainLog</button>
    </div>
  );
}

export default App;
