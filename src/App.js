import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import signInAndSignUp from "./Pages/SignInAndSignUp/sign-in-and-sign-up";
import { useState } from "react";
import {
  CharacterNameContext,
  ComponentRefContext,
  CurrentCharacterIdContext,
  IsChoosingAdvantagesContext,
  SelectedAdvantagesContext,
  SelectedDisadvantagesContext,
  SelectInputValueContext,
  UserContext,
} from "./context";
import { useMemo } from "react";
import LandingPage from "./Pages/LandingPage/landingPage";
import GuestPage from "./Pages/GuestPage/GuestPage";
import CreateOrManage from "./Pages/CreateOrManagePage/CreateOrManagePage";
import CreateNewCharacterPage from "./Pages/CreateNewCharacterPage/CreateNewCharacterPage";
import ManageCharactersPage from "./Pages/ManageCharactersPage/ManageCharactersPage";
import EditCharacterPage from "./Pages/EditCharacterPage/EditCharacterPage";

function App() {
  const [componentRef, setComponentRef] = useState(null);
  const componentRefValue = useMemo(
    () => ({
      componentRef,
      setComponentRef,
    }),
    [componentRef, setComponentRef]
  );

  const [user, setUser] = useState(null);
  const userValue = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user, setUser]
  );

  const [selectInput, setSelectInput] = useState([]);
  const selectInputValue = useMemo(
    () => ({
      selectInput,
      setSelectInput,
    }),
    [selectInput]
  );

  const [characterName, setCharacterName] = useState("");
  const characterNameValue = useMemo(
    () => ({
      characterName,
      setCharacterName,
    }),
    [characterName]
  );

  const [currentCharacterId, setCurrentCharacterId] = useState("");
  const currentCharacterIdValue = useMemo(
    () => ({
      currentCharacterId,
      setCurrentCharacterId,
    }),
    [currentCharacterId]
  );

  const [IsChoosingAdvantages, setIsChoosingAdvantages] = useState(true);
  const IsChoosingAdvantagesValue = useMemo(
    () => ({
      IsChoosingAdvantages,
      setIsChoosingAdvantages,
    }),
    [IsChoosingAdvantages]
  );

  const [selectedAdvantagesList, setSelectedAdvantagesList] = useState([]);
  const selectedAdvantagesValue = useMemo(
    () => ({
      selectedAdvantagesList,
      setSelectedAdvantagesList,
    }),
    [selectedAdvantagesList]
  );

  const [selectedDisadvantagesList, setSelectedDisadvantagesList] = useState(
    []
  );
  const selectedDisadvantagesValue = useMemo(
    () => ({
      selectedDisadvantagesList,
      setSelectedDisadvantagesList,
    }),
    [selectedDisadvantagesList]
  );

  return (
    <BrowserRouter>
      <Switch>
        <UserContext.Provider value={userValue}>
          <Route path="/sign-in-and-sign-up" component={signInAndSignUp} />{" "}
          <IsChoosingAdvantagesContext.Provider value={IsChoosingAdvantagesValue}>
          <SelectedAdvantagesContext.Provider value={selectedAdvantagesValue}>
            <SelectedDisadvantagesContext.Provider
              value={selectedDisadvantagesValue}
            >
              <Route exact path="/" component={LandingPage} />{" "}
              <SelectInputValueContext.Provider value={selectInputValue}>
                <CharacterNameContext.Provider value={characterNameValue}>
                  <CurrentCharacterIdContext.Provider
                    value={currentCharacterIdValue}
                  >
                    <Route
                      path="/create-or-manage-page"
                      component={CreateOrManage}
                    />{" "}
                    <Route
                      path="/edit-character-page"
                      component={EditCharacterPage}
                    />{" "}
                    <ComponentRefContext.Provider value={componentRefValue}>
                      <Route path="/guest-page" component={GuestPage} />{" "}
                      <Route
                        path="/create-new-character-page"
                        component={CreateNewCharacterPage}
                      />{" "}
                      <Route
                        path="/manage-characters-page"
                        component={ManageCharactersPage}
                      />{" "}
                    </ComponentRefContext.Provider>{" "}
                  </CurrentCharacterIdContext.Provider>{" "}
                </CharacterNameContext.Provider>{" "}
              </SelectInputValueContext.Provider>{" "}
            </SelectedDisadvantagesContext.Provider>{" "}
          </SelectedAdvantagesContext.Provider>{" "}
          </IsChoosingAdvantagesContext.Provider>{" "}
        </UserContext.Provider>{" "}
      </Switch>{" "}
    </BrowserRouter>
  );
}

export default App;
