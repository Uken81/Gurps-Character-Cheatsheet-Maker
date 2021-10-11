import { signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase.utils";
import { BackFromSignIn, SignInButton } from "../SignInButtons/signinButtons";

import './header.styles.scss';
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

    return (
        <div className="header">
          
                {(location.pathname !== '/sign-in-and-sign-up' & !user) &&
                    <SignInButton />}
                {user && <button  id='sign-out' onClick={() => signout()}></button>}
            

        
            {(location.pathname === '/sign-in-and-sign-up') &&
                <BackFromSignIn />}
           
        </div>
    );
}

export default Header;