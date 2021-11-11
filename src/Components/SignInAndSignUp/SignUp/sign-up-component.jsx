import { useEffect, useState } from "react";

import "../../../Pages/SignInAndSignUp/sign-in-and-sign-up.scss";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router";
import { auth, google } from "../../Firebase/firebase.utils";
import { Button, Form } from "react-bootstrap";

const SignUp = () => {
  const [inputs, setInputs] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const history = useHistory();

  const handleChange = (e) =>
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      setInputs({
        email: "",
        password: "",
        confirmPassword: "",
      });
      history.push("/create-or-manage-page");
    } catch (error) {
      console.error("error code: ", error.code);
      const errorCode = error.code;

      if (errorCode === "auth/email-already-in-use") {
        alert("An account using this email already exists");
      }

      if (errorCode === "auth/invalid-email") {
        alert("The provided Email is invalid");
      }

      if (errorCode === "auth/weak-password") {
        alert("The password is too weak");
      }
    }
  };

  useEffect(() => {
    console.log("***Test: sign-up-component/form onChange");
    setEmail(inputs.email);
    setPassword(inputs.password);
    setConfirmPassword(inputs.confirmPassword);
  }, [
    inputs.confirmPassword,
    inputs.displayName,
    inputs.email,
    inputs.password,
  ]);

  const googleSignUp = async () => {
    await google();
    history.push("/create-or-manage-page");
  };

  return (
    <div className="sign-up">
      <h1>I do not have an account</h1>
      <span>Sign up with your email and password</span>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="sign-up-form" controlId="sign-up-email">
          <Form.Control
            type="email"
            name="email"
            value={email}
            placeholder="Enter email"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="sign-up-form" controlId="sign-up-password">
          <Form.Control
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </Form.Group>

        <Form.Group className="sign-up-form" controlId="confirm-password">
          <Form.Control
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          SIGN UP
        </Button>
        <Button variant="primary" onClick={googleSignUp}>
          SIGN UP WITH GOOGLE
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
