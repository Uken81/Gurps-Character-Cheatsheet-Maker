import { useState } from 'react';
import './App.css';
import AdvantageSelector from './Advantages/AdvantageSelector';
import Disadvantageselector from './Disadvantages/DisadvantageSelector';


function App() {
const [selectedAdvantages, setSelectedAdvantages] = useState([]);
const [selectedDisadvantages, setSelectedDisadvantages] = useState([]);


  return (
    <div className="App">
      <AdvantageSelector selectedAdvantages={selectedAdvantages} setSelectedAdvantages={setSelectedAdvantages}/>
      <Disadvantageselector selectedDisadvantages={selectedDisadvantages} setSelectedDisadvantages={setSelectedDisadvantages}/>
    </div>
  );
}

export default App;
