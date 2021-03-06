import { Routes, Route } from 'react-router-dom';

import SignInAndSignUp from './Pages/SignInAndSignUp/SignInAndSignUpPage';
import { useState } from 'react';
import { ComponentRefContext, UserContext } from './context';
import { useMemo } from 'react';
import LandingPage from './Pages/LandingPage/landingPage';
import GuestPage from './Pages/GuestPage/GuestPage';
import CreateOrManage from './Pages/CreateOrManagePage/CreateOrManagePage';
import CreateNewCharacterPage from './Pages/CreateNewCharacterPage/CreateNewCharacterPage';
import ManageCharactersPage from './Pages/ManageCharactersPage/ManageCharactersPage';
import EditCharacterPage from './Pages/EditCharacterPage/EditCharacterPage';
import ResetPasswordPage from './Pages/ResetPage/ResetPasswordPage';

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
    <UserContext.Provider value={userValue}>
      <ComponentRefContext.Provider value={componentRefValue}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/guest-page" element={<GuestPage />} />
          <Route path="/sign-in-and-sign-up" element={<SignInAndSignUp />} />
          <Route path="/reset-password-page" element={<ResetPasswordPage />} />
          <Route path="/create-or-manage-page" element={<CreateOrManage />} />
          <Route path="/edit-character-page" element={<EditCharacterPage />} />
          <Route path="/create-new-character-page" element={<CreateNewCharacterPage />} />
          <Route path="/manage-characters-page" element={<ManageCharactersPage />} />
        </Routes>
      </ComponentRefContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
