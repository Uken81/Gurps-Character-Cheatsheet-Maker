import { useState } from "react";

import './sign-in.styles.scss';

import { signInWithPopup } from "@firebase/auth";
import { google } from "../../Firebase/firebase.utils";


const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        setEmail('');
        setPassword('');
    }


    return (
        <div className="sign-in">
            <h1>I already have an account</h1>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input
                        name='email'
                        type='email'
                        label='email'
                        // handleChange={handleChange}
                        value={email}
                        required
                    />
                </label>
                <label>
                    Password:
                    <input
                        name='password'
                        value={password}
                        label='password'
                        type='password'
                        // handleChange={handleChange}
                        required
                    />
                </label>
                <div className="buttons">
                    <button className="submit">SIGN IN</button>
                    <button className="google-sign-in" onClick={() => google()}>SIGN IN WITH GOOGLE</button>
                </div>
            </form>
        </div>

    );
}

export default SignIn;
