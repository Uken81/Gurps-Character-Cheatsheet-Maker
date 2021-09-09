import { getAuth, signOut } from "firebase/auth";
import { SignInButton } from "../SignInAndSignUp/signinButtons";

const Header = ({currentUser, setCurrentUser}) => {
    const signout= () => {
        const auth = getAuth();
        signOut(auth).then(() => {
          console.log('user signed out')
        }).catch((error) => {
            console.log('error signing out user', error.message);
        });
    }
    

    return (  
        <div className="header">
            <SignInButton />
            <button className="signout" onClick={()=> signout()}>SIGN OUT</button>
            {/* {currentUser === null && <SignInButton />} */}
            {/* {currentUser !== null && <button className="signout" onClick={()=> signout()}>SIGN OUT</button>} */}
        </div>
    );
}
 
export default Header;