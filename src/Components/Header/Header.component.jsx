import { signOut } from "firebase/auth";
import { auth } from "../Firebase/firebase.utils";
import { SignInButton } from "../SignInAndSignUp/signinButtons";

import './header.styles.scss';
import { useRef, useState } from "react";


const Header = ({ currentUser, setCurrentUser, characterName, setCharacterName }) => {
    const [formInput, setForminput] = useState('');

    const signout = () => {
        signOut(auth).then(() => {
            console.log(currentUser + ' signed out');
        }).catch((error) => {
            console.log('error signing out user', error.message);
        });
    }

    function test() {
        console.log('character: ' + characterName.value);
    }


    const handleInput = () => {
        const form = newCharacter.current;
        let value = form['new-character'].value;
        setForminput(value);
    }


    const newCharacter = useRef(null);
    const handleAddCharacter = (event) => {
        event.preventDefault();
        const form = newCharacter.current;

        let value = form['new-character'].value;
        console.log("****value: ", value);
        setCharacterName( value );
        setForminput('');
    }

    // useEffect(() => {
    //     sendCharacterList(characterList, currentUser);

    // }, [characterList, currentUser]);


    return (
        <div className="header">
            <button onClick={test}>TEST</button>
            <div className="form">
                <form className='new-character-form' ref={newCharacter}>
                    <label>
                        Create New Character
                        <input
                            name='new-character'
                            label='new-character'
                            type='text'
                            value={formInput}
                            onChange={handleInput}
                        />
                        <button onClick={handleAddCharacter}>Submit</button>
                    </label>

                </form>
            </div>
            <div className="sign-in-and-out">
                {currentUser === null && <SignInButton />}
                {currentUser !== null && <button className="signout" onClick={() => signout()}>SIGN OUT</button>}
            </div>

        </div>
    );
}

export default Header;