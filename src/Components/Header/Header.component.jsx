import { signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase.utils";
import { BackToCreateManage, BackToLandingPage, SignInButton } from "../SignInAndSignUp/SignInButtons/signinButtons";

import './header.styles.scss';

import { useHistory, useLocation } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../context";

const Header = () => {
    const { user } = useContext(UserContext);

    const location = useLocation();
    const history = useHistory();

    const signout = () => {
        signOut(auth).then(() => {
            console.log(user + ' signed out');
            history.push("/");
        }).catch((error) => {
            console.log('error signing out user', error.message);
        });
    }

    return (
        <div className="header">
            {location.pathname !== ('/sign-in-and-sign-up' || '/guest-page') & user !== null ? <SignInButton /> : null}
            {user && <button id='sign-out' onClick={signout}></button>}
            {location.pathname === '/sign-in-and-sign-up' || '/guest-page' ? <BackToLandingPage /> : null}
            {location.pathname === '/create-new-character-page' || '/manage-character-page' ? <BackToCreateManage /> : null}          
        </div>
    );
}

export default Header;