import { useEffect, useState } from "react";

import "../../../Pages/SignInAndSignUp/sign-in-and-sign-up.scss";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router";
import { google } from "../../Firebase/firebase.utils";
import { Button, Form } from "react-bootstrap";

const SignIn = () => {
  const [inputs, setInputs] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) =>
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  const history = useHistory();
  const auth = getAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("****signin");
        setInputs({ email: "", password: "" });
        history.push("/create-or-manage-page");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log("error code: ", errorCode);
        if (errorCode === "auth/user-not-found") {
          alert("The email you have entered has not been found.");
        }

        if (errorCode === "auth/wrong-password") {
          alert("Wrong password entered for this account.");
        }
      });
  };

  useEffect(() => {
    setEmail(inputs.email);
    setPassword(inputs.password);
  }, [inputs.email, inputs.password]);

  const googleSignIn = async () => {
    await google();
    history.push("/create-or-manage-page");
  };

  return (
    <div className="sign-in">
      <h1>I already have an account</h1>
      <span>Sign in with your email and password</span>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className="sign-in-form"
          controlId="sign-in-email"
        >
          <Form.Control
            type="email"
            name="email"
            value={email}
            placeholder="Enter email"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group
          className="sign-in-form"         
          controlId="sign-in-password"
        >
          <Form.Control
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type='submit'>
          SIGN IN
        </Button>
        <Button variant="primary" onClick={googleSignIn}>
          SIGN IN WITH GOOGLE
        </Button>
      </Form>
    </div>
  );
};

export default SignIn;