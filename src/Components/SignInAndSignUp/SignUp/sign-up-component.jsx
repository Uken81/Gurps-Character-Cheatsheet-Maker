import { useEffect, useState } from "react";

import '../../../Pages/SignInAndSignUp/sign-in-and-sign-up.scss';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router";
import { auth } from "../../Firebase/firebase.utils";

const SignUp = () => {
    const [inputs, setInputs] = useState({});
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // const auth = getAuth();
    const history = useHistory();

    const handleChange = e => setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));

    const handleSubmit = async event => {
        event.preventDefault();
        
        // try {
        //     const user = await createUserWithEmailAndPassword(
        //       auth,
        //       email,
        //       password
        //     );
        //     console.log(user);
        //   } catch (error) {
        //     console.log(error.message);
        //   }

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);

            setInputs({ displayName: '', email: '', password: '', confirmPassword: '' });
            history.push('/create-or-manage-page');
        } catch (error) {
            console.error('error code: ', error.code);
            const errorCode = error.code;

            if (errorCode === 'auth/email-already-in-use') {
                alert('An account using this email already exists')
            }

            if (errorCode === 'auth/invalid-email') {
                alert('The provided Email is invalid')
            }
            
            if (errorCode === 'auth/weak-password') {
                alert('The password is too weak');
            }
        }
    }

    useEffect(() => {
        console.log('***Test: sign-up-component');
        setDisplayName(inputs.displayName);
        setEmail(inputs.email);
        setPassword(inputs.password);
        setConfirmPassword(inputs.confirmPassword);
    }, [inputs.confirmPassword, inputs.displayName, inputs.email, inputs.password]);

    return (
        <div className='sign-up'>
            <h1>I do not have an account</h1>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>

                <input
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    placeholder='Display Name'
                    required
                />

                <input
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    placeholder='Email'
                    required
                />

                <input
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    placeholder='Password'
                    required
                />

                <input
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    placeholder='Confirm Password'

                    required
                />
                <button type='submit'>SIGN UP</button>
            </form>
        </div>
    );
}

export default SignUp;