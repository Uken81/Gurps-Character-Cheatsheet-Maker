import './SignInAndSignUpPage.styles.scss';

import Header from '../../Components/Header/Header.component';
import SignIn from '../../Components/SignInAndSignUp/SignIn/sign-in-component.jsx';
import SignUp from '../../Components/SignInAndSignUp/SignUp/sign-up-component.jsx';
import { useState } from 'react';

const SignInAndSignUp = () => {
  const [signInOrUp, setSignInOrUp] = useState('sign-in');
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);

  if (!showLoadingScreen) {
    return (
      <div className="sign-in-and-sign-up">
        <Header />
        <div className="form-container">
          <h1 className="main-title"> G.C.C.M </h1>
          {signInOrUp === 'sign-in' && (
            <SignIn setSignInOrUp={setSignInOrUp} setShowLoadingScreen={setShowLoadingScreen} />
          )}
          {signInOrUp === 'sign-up' && <SignUp setShowLoadingScreen={setShowLoadingScreen} />}
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="sign-in-and-sign-up"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <h1 className="main-title"> G.C.C.M </h1>
        <p
          style={{
            fontSize: '2rem',
            color: 'white'
          }}>
          LOADING....
        </p>
      </div>
    );
  }
};

export default SignInAndSignUp;
