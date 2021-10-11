import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from 'react-router-dom';
import HomePage from "./Pages/Home Page/HomePage";
import signInAndSignUp from "./Pages/SignInAndSignUp/sign-in-and-sign-up";
import { useState } from "react";
import { UserContext } from "./context";
import { useMemo } from "react";

function App() {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <BrowserRouter>
      <Switch>
        <UserContext.Provider value={value}>
          <Route exact path='/' component={HomePage} />
          <Route path='/sign-in-and-sign-up' component={signInAndSignUp} />
        </UserContext.Provider>
      </Switch>
    </BrowserRouter >
  )
}

export default App;
