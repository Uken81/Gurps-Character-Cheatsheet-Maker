import "./sign-in-and-sign-up.scss";

import Header from "../../Components/Header/Header.component";
import SignIn from "../../Components/SignInAndSignUp/SignIn/sign-in-component.jsx";
import SignUp from "../../Components/SignInAndSignUp/SignUp/sign-up-component.jsx";
import { useState } from "react";

const SignInAndSignUp = () => {
  const [signInOrUp, setSignInOrUp] = useState("sign-in");
  const [isWaitingForPopup, setIsWaitingForPopup] = useState(false);

  if (!isWaitingForPopup) {
    return (
      <div className="sign-in-and-sign-up">
        <Header />
        <div className="form-container">
          <h1 className="main-title"> G.C.C.M </h1>
          {signInOrUp === "sign-in" && (
            <SignIn
              setSignInOrUp={setSignInOrUp}
              isWaitingForPopup={isWaitingForPopup}
              setIsWaitingForPopup={setIsWaitingForPopup}
            />
          )}
          {signInOrUp === "sign-up" && <SignUp />}
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="sign-in-and-sign-up"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="main-title"> G.C.C.M </h1>
      </div>
    );
  }
};

export default SignInAndSignUp;
