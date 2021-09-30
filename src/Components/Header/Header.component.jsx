import { signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase.utils";
import { BackFromSignIn, SignInButton } from "../SignInAndSignUp/signinButtons";

import './header.styles.scss';
import { useEffect } from "react";
import LoadCharacter from "../LoadCharacter/LoadCharacter";
import { useLocation } from "react-router";



const Header = (props) => {
    const currentUser = props.currentUser;
    const setSelectedAdvantagesList = props.setSelectedAdvantagesList;
    const setSelectedDisadvantagesList = props.setSelectedDisadvantagesList;

    const selectedAdvantagesList = props.selectedAdvantagesList;

    const location = useLocation();


    const signout = () => {
        signOut(auth).then(() => {
            console.log(currentUser + ' signed out');
        }).catch((error) => {
            console.log('error signing out user', error.message);
        });

    }

    const con = () => {
        console.log(currentUser);
        console.log('location: ', location.pathname);
        console.log('advantages list: ', selectedAdvantagesList);
    }

    useEffect(() => {
        console.log('location: ', location.pathname)
    }, [location.pathname])

    return (
        <div className="header">
            <div className="sign-in-page">
                {(location.pathname !== '/sign-in-and-sign-up' & !currentUser) &&
                    <SignInButton currentUser={currentUser} />}
                {currentUser && <button className="signout" onClick={() => signout()}></button>}
                <button onClick={con}>con</button>
            </div>

            {currentUser &&
                <div className="load-character">
                    <LoadCharacter
                        currentUser={currentUser}
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