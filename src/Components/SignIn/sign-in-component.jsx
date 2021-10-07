import { useEffect, useState } from "react";

import '../../Pages/SignInAndSignUp/sign-in-and-sign-up.scss';

import { google } from "../Firebase/firebase.utils";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
    const [inputs, setInputs] = useState({});
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const handleChange = e => setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));

    const auth = getAuth();
    const handleSubmit = async event => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)

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
                <label>
                    Email:
                    <input
                        name='email'
                        type='email'
                        onChange={handleChange}
                        value={email}
                        required
                    />
                </label>
                <label>
                    Password:
                    <input
                        name='password'
                        type='password'
                        onChange={handleChange}
                        value={password}
                        required
                    />
                </label>
                <div className="buttons">
                    <button className="submit" onClick={handleSubmit}>SIGN IN</button>
                    <button className="google-sign-in" onClick={() => google()}>SIGN IN WITH GOOGLE</button>
                </div>
            </form>
        </div>
    );
}

export default SignIn;
