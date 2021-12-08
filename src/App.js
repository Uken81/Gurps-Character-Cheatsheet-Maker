import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import SignInAndSignUp from './Pages/SignInAndSignUp/sign-in-and-sign-up';
import { useState } from 'react';
import { ComponentRefContext, UserContext } from './context';
import { useMemo } from 'react';
import LandingPage from './Pages/LandingPage/landingPage';
import GuestPage from './Pages/GuestPage/GuestPage';
import CreateOrManage from './Pages/CreateOrManagePage/CreateOrManagePage';
import CreateNewCharacterPage from './Pages/CreateNewCharacterPage/CreateNewCharacterPage';
import ManageCharactersPage from './Pages/ManageCharactersPage/ManageCharactersPage';
import EditCharacterPage from './Pages/EditCharacterPage/EditCharacterPage';

function App() {
  const [componentRef, setComponentRef] = useState(null);
  const componentRefValue = useMemo(
    () => ({
      componentRef,
      setComponentRef
    }),
    [componentRef, setComponentRef]
  );

  const [user, setUser] = useState(null);
  const userValue = useMemo(
    () => ({
      user,
      setUser
    }),
    [user, setUser]
  );

  return (
    <BrowserRouter>
      <Switch>
        <UserContext.Provider value={userValue}>
          <Route path="/sign-in-and-sign-up" component={SignInAndSignUp} />{' '}
          <Route exact path="/" component={LandingPage} />{' '}
          <Route path="/create-or-manage-page" component={CreateOrManage} />{' '}
          <Route path="/edit-character-page" component={EditCharacterPage} />{' '}
          <ComponentRefContext.Provider value={componentRefValue}>
            <Route path="/guest-page" component={GuestPage} />{' '}
            <Route path="/create-new-character-page" component={CreateNewCharacterPage} />{' '}
            <Route path="/manage-characters-page" component={ManageCharactersPage} />{' '}
          </ComponentRefContext.Provider>{' '}
        </UserContext.Provider>{' '}
      </Switch>{' '}
    </BrowserRouter>
  );
}

export default App;
