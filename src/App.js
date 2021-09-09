import { useEffect, useState } from 'react';


import { NavLink, Route, Switch } from 'react-router-dom'



import './App.css'
import './Display Results/DisplayResults.styles.css'

import ToggleAdvantageDisadvantage from './Components/ToggleAdvantageDisadvantage/ToggleAdvantageDisadvantage';
import DisplaySelected from './Selected/DisplaySelected';
import SearchBar from './Components/SearchBar/SearchBar';

import PrintPDF from './Components/Print PDF/printPDF';
import CopyToClipboard from './Components/CopyToClipboard/CopyToClipboard';
import ComponentToPrint from './Display Results/ComponentToPrint';
// import { Route, Switch } from 'react-router';
import signInAndSignUp from './Components/SignInAndSignUp/sign-in-and-sign-up';
import { SignInButton } from './Components/SignInAndSignUp/signinButtons';
import Header from './Components/Header/Header.component';



function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const [isChoosingAdvantages, setIsChoosingAdvantages] = useState(true);
  const [selectedAdvantagesList, setSelectedAdvantagesList] = useState([]);
  const [selectedDisadvantagesList, setSelectedDisadvantagesList] = useState([]);

  //Would this effect be better placed in Display Results? If so should it be in a seperate component?
  // useEffect(() => {
  //   const displayResultsWindow = () => {
  //     const resultsWindow = document.getElementById('results');
  //     if (selectedAdvantagesList.length || selectedDisadvantagesList.length > 0) {
  //       resultsWindow.style.display = 'block';
  //     } else {
  //       resultsWindow.style.display = 'none';
  //     }
  //   }
  //   displayResultsWindow();
  // }, [selectedAdvantagesList, selectedDisadvantagesList]);


  return (
    <div className="App">
      <div className='user-interface-window'>
        <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />

        <h1 className="main-title">G.C.C.M</h1>
        <SearchBar
          isChoosingAdvantages={isChoosingAdvantages}
          setSelectedAdvantagesList={setSelectedAdvantagesList}
          setSelectedDisadvantagesList={setSelectedDisadvantagesList}
        />

        <ToggleAdvantageDisadvantage
          isChoosingAdvantages={isChoosingAdvantages}
          setIsChoosingAdvantages={setIsChoosingAdvantages}
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
