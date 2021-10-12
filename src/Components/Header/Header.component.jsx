import { signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase.utils";
import { BackFromSignIn, SignInButton } from "../SignInButtons/signinButtons";

import './header.styles.scss';

import { useLocation } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../context";

const Header = () => {
    const { user } = useContext(UserContext);

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
            {location.pathname !== '/sign-in-and-sign-up' & !user ? <SignInButton /> : <BackFromSignIn />}
                
            {user && <button id='sign-out' onClick={() => signout()}></button>}  
        </div>
    );
}

export default Header;