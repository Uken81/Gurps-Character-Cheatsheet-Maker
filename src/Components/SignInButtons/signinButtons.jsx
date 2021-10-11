import { Link } from "react-router-dom";

import './signInButtons.styles.scss';

export const SignInButton = () => {

    return (
        <div className='sign-in-link'>
            <Link to='/sign-in-and-sign-up'>SIGN IN</Link>
        </div>
    );
}

export const BackFromSignIn = () => {
    return (
        <div className="sign-in-link">
            <Link to='/' >BACK</Link>
        </div>
    )
}