import { useEffect, useState } from "react";

import '../../../Pages/SignInAndSignUp/sign-in-and-sign-up.scss';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router";
import { google } from "../../Firebase/firebase.utils";

const SignIn = () => {
    const [inputs, setInputs] = useState({});
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const handleChange = e => setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));

    const history = useHistory();
    const auth = getAuth();
    const handleSubmit = async event => {
        event.preventDefault();
        await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            console.log('****signin');
            setInputs({ email: '', password: '' });
            history.push("/create-or-manage-page");
          })
          .catch((error) => {
            const errorCode = error.code;
            console.log('error code: ', errorCode);
            alert('The email you have entered has not been found.');
          });
    }

    useEffect(() => {
        setEmail(inputs.email);
        setPassword(inputs.password);
    }, [inputs.email, inputs.password]);

    const googleSignIn = async ()=> {
        await google();
        history.push("/create-or-manage-page");
    }

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
                    <button className="google-sign-in" onClick={googleSignIn}>SIGN IN WITH GOOGLE</button>
                </div>
            </form>
        </div>
    );
}

export default SignIn;
