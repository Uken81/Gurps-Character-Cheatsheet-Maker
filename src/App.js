import { useState } from 'react';
import './App.css';
import AdvantageSelector from './Advantages/AdvantageSelector';
import Disadvantageselector from './Disadvantages/DisadvantageSelector';
import ToggleAdvantageDisadvantage from './ToggleAdvantageDisadvantage/ToggleAdvantageDisadvantage';


function App() {
const [isAdvantage, setIsAdvantage] = useState(true);
const [selectedAdvantages, setSelectedAdvantages] = useState([]);
const [selectedDisadvantages, setSelectedDisadvantages] = useState([]);

const log = ()=> {
  console.log(isAdvantage);
}


  return (
    <div className="App">
      <ToggleAdvantageDisadvantage isAdvantage={isAdvantage} setIsAdvantage={setIsAdvantage} />
      {isAdvantage && <AdvantageSelector selectedAdvantages={selectedAdvantages} setSelectedAdvantages={setSelectedAdvantages}/>}
      {!isAdvantage && <Disadvantageselector selectedDisadvantages={selectedDisadvantages} setSelectedDisadvantages={setSelectedDisadvantages}/>}

      <button onClick={log}>MainLog</button>
    </div>
  );
}

export default App;
