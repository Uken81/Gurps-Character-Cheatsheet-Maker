import { signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase.utils";
import { BackFromSignIn, SignInButton } from "../SignInButtons/signinButtons";

import './header.styles.scss';
import { useEffect } from "react";
import LoadCharacter from "../LoadCharacter/LoadCharacter";
import { useLocation } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../context";

const Header = (props) => {
    const { user } = useContext(UserContext);
    
    const setSelectedAdvantagesList = props.setSelectedAdvantagesList;
    const setSelectedDisadvantagesList = props.setSelectedDisadvantagesList;

    const location = useLocation();


    const signout = () => {
        signOut(auth).then(() => {
            console.log(user + ' signed out');
        }).catch((error) => {
            console.log('error signing out user', error.message);
        });

    }

    useEffect(() => {
        console.log('location: ', location.pathname)
    }, [location.pathname])

    return (
        <div className="header">
            <div className="sign-in-page">
                {(location.pathname !== '/sign-in-and-sign-up' & !user) &&
                    <SignInButton />}
                {user && <button className="signout" onClick={() => signout()}></button>}
            </div>

            {user &&
                <div className="load-character">
                    <LoadCharacter
                        user={user}
                        setSelectedAdvantagesList={setSelectedAdvantagesList}
                        setSelectedDisadvantagesList={setSelectedDisadvantagesList}
                    />
                </div>
            }
            {(location.pathname === '/sign-in-and-sign-up') &&
                <BackFromSignIn />}
        </div>
    );
}

export default Header;