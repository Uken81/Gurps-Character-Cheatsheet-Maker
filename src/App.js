import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Pages/Home Page/HomePage";
import signInAndSignUp from "./Pages/SignInAndSignUp/sign-in-and-sign-up";
import { useState } from "react";
import {
  CharacterNameContext,
  ComponentRefContext,
  SelectedAdvantagesContext,
  SelectedDisadvantagesContext,
  SelectInputValueContext,
  UserContext,
} from "./context";
import { useMemo } from "react";
import LandingPage from "./Pages/LandingPage/landingPage";
import GuestPage from "./Pages/GuestPage/GuestPage";

function App() {
  const [user, setUser] = useState(null);
  const [selectedAdvantagesList, setSelectedAdvantagesList] = useState([]);
  const [selectedDisadvantagesList, setSelectedDisadvantagesList] = useState([]);
  const [selectInput, setSelectInput] = useState([]);
  const [characterName, setCharacterName] = useState('');

  const [componentRef, setComponentRef] = useState(null);
  const componentRefValue = useMemo(() => ({ componentRef, setComponentRef }), [componentRef, setComponentRef]);

  const userValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  const selectInputValue = useMemo(() => ({ selectInput, setSelectInput }), [selectInput]);

  const characterNameValue = useMemo(() => ({ characterName, setCharacterName }), [characterName]);

  const selectedAdvantagesValue = useMemo(
    () => ({ selectedAdvantagesList, setSelectedAdvantagesList }),
    [selectedAdvantagesList]
  );

  const selectedDisadvantagesValue = useMemo(
    () => ({ selectedDisadvantagesList, setSelectedDisadvantagesList }),
    [selectedDisadvantagesList]
  );


  return (
    <BrowserRouter>
      <Switch>
        <UserContext.Provider value={userValue}>
          <Route exact path="/" component={LandingPage} />
          <Route path="/sign-in-and-sign-up" component={signInAndSignUp} />
          <SelectedAdvantagesContext.Provider value={selectedAdvantagesValue}>
            <SelectedDisadvantagesContext.Provider value={selectedDisadvantagesValue}>
              <SelectInputValueContext.Provider value={selectInputValue} >
                <CharacterNameContext.Provider value={characterNameValue}>
                  <ComponentRefContext.Provider value={componentRefValue}>
                    <Route path="/home-page" component={HomePage} />
                    <Route path="/guest-page" component={GuestPage} />
                  </ComponentRefContext.Provider>
                </CharacterNameContext.Provider>
              </SelectInputValueContext.Provider>
            </SelectedDisadvantagesContext.Provider>
          </SelectedAdvantagesContext.Provider>
        </UserContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
