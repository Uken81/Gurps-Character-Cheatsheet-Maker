import { signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase.utils";
import { BackFromSignIn, SignInButton } from "../SignInAndSignUp/SignInButtons/signinButtons";

import './header.styles.scss';

import { useLocation } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../context";

const Header = () => {
    const { user } = useContext(UserContext);
    console.log('user' , user);

    const location = useLocation();

    const signout = () => {
        signOut(auth).then(() => {
            console.log(user + ' signed out');
        }).catch((error) => {
            console.log('error signing out user', error.message);
        });
    }

    return (
        <div className="header">
            {location.pathname !== ('/sign-in-and-sign-up' || '/guest-page') & user !== null ? <SignInButton /> : null}
            {user && <button id='sign-out' onClick={signout}></button>}
            {location.pathname === '/sign-in-and-sign-up' || '/guest-page' ? <BackFromSignIn /> : null}
            
        </div>
    );
}

export default Header;