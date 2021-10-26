import { useContext, useEffect, useState } from "react";

import '../../../Pages/SignInAndSignUp/sign-in-and-sign-up.scss';

import { createUserProfileDocument, google } from "../../Firebase/firebase.utils";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { UserContext } from "../../../context";
import { useHistory } from "react-router";

import { onAuthStateChanged } from "firebase/auth";

const SignIn = () => {
    const { user, setUser } = useContext(UserContext);
    const [inputs, setInputs] = useState({});
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const handleChange = e => setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));

    const history = useHistory();
    useEffect(() => {
      let unsubscribeFromAuth = null;
      unsubscribeFromAuth = onAuthStateChanged(auth, async (userAuth) => {
        await createUserProfileDocument(userAuth);
        if (userAuth) {
          setUser(userAuth);
          console.log('OnAuthStateChange/HomePage')
          console.log(`${userAuth.email} has logged in`);
          console.log('****User: ', user)
          history.push("/home-page");
        } else {
          setUser(userAuth);
          console.log("User has logged out");
        }
        return () => {
          unsubscribeFromAuth();
        };
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    const auth = getAuth();
    const handleSubmit = async event => {
        event.preventDefault();
        await signInWithEmailAndPassword(auth, email, password)

        setInputs({ email: '', password: '' });
    }

    useEffect(() => {
        setEmail(inputs.email);
        setPassword(inputs.password);
    }, [inputs.email, inputs.password]);

    return (
        <div className="sign-in">
            <h1>I already have an account</h1>
            <span>Sign in with your email and password</span>

            <form className="sign-in-form" onSubmit={handleSubmit}>           
                    <input
                        name='email'
                        type='email'
                        onChange={handleChange}
                        placeholder='Email'
                        value={email}
                        required
                    />
       
                    <input
                        name='password'
                        type='password'
                        onChange={handleChange}
                        placeholder='Password'
                        value={password}
                        required
                    />
           
                <div className="buttons">
                    <button className="submit" onClick={handleSubmit}>SIGN IN</button>
                    <button className="google-sign-in" onClick={() => google()}>SIGN IN WITH GOOGLE</button>
                </div>
            </form>
        </div>
    );
}

export default SignIn;
