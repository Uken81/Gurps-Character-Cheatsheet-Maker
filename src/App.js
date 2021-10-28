import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Pages/Home Page/HomePage";
import signInAndSignUp from "./Pages/SignInAndSignUp/sign-in-and-sign-up";
import { useState } from "react";
import {
  CharacterNameContext,
  ComponentRefContext,
  CurrentCharacterIdContext,
  SelectedAdvantagesContext,
  SelectedDisadvantagesContext,
  SelectInputValueContext,
  UserContext,
} from "./context";
import { useMemo } from "react";
import LandingPage from "./Pages/LandingPage/landingPage";
import GuestPage from "./Pages/GuestPage/GuestPage";
import ManageCharacters from "./Pages/ManageCharactersPage/ManageCharactersPage";
import CreateOrManage from "./Pages/CreateOrManagePage/CreateOrManagePage";
import CreateNewCharacterPage from "./Pages/CreateNewCharacterPage/CreateNewCharacterPage";
import ManageCharactersPage from "./Pages/ManageCharactersPage/ManageCharactersPage";

function App() {
  const [componentRef, setComponentRef] = useState(null);
  const componentRefValue = useMemo(
    () => ({ componentRef, setComponentRef }),
    [componentRef, setComponentRef]
  );

  const [user, setUser] = useState(null);
  const userValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  const [selectInput, setSelectInput] = useState([]);
  const selectInputValue = useMemo(
    () => ({ selectInput, setSelectInput }),
    [selectInput]
  );

  const [characterName, setCharacterName] = useState("");
  const characterNameValue = useMemo(
    () => ({ characterName, setCharacterName }),
    [characterName]
  );

  const [currentCharacterId, setCurrentCharacterId] = useState("");
  const currentCharacterIdValue = useMemo(
    () => ({ currentCharacterId, setCurrentCharacterId }),
    [currentCharacterId]
  );

  const [selectedAdvantagesList, setSelectedAdvantagesList] = useState([]);
  const selectedAdvantagesValue = useMemo(
    () => ({ selectedAdvantagesList, setSelectedAdvantagesList }),
    [selectedAdvantagesList]
  );

  const [selectedDisadvantagesList, setSelectedDisadvantagesList] = useState(
    []
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
            <SelectedDisadvantagesContext.Provider
              value={selectedDisadvantagesValue}
            >
              <SelectInputValueContext.Provider value={selectInputValue}>
                <CharacterNameContext.Provider value={characterNameValue}>
                  <CurrentCharacterIdContext.Provider
                    value={currentCharacterIdValue}
                  >
                    <Route path="/create-or-manage" component={CreateOrManage} />
                    <ComponentRefContext.Provider value={componentRefValue}>
                      <Route path="/home-page" component={HomePage} />
                      <Route path="/guest-page" component={GuestPage} />
                      <Route
                        path="/create-new-character-page"
                        component={CreateNewCharacterPage}
                      />
                      <Route path="/manage-characters-page" component={ManageCharactersPage} />
                    </ComponentRefContext.Provider>
                  </CurrentCharacterIdContext.Provider>
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
