
import { doc, setDoc } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import { add, db, snap, auth, usersCollectionRef, sendCharacterList } from "../Firebase/firebase.utils";
import { SignInButton } from "../SignInAndSignUp/signinButtons";

import './header.styles.scss';
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ currentUser, setCurrentUser, characterList, setCharacterList }) => {
    const [formInput, setForminput] = useState('');

    const signout = () => {
        // const auth = getAuth();
        signOut(auth).then(() => {
            console.log(currentUser + ' signed out');
        }).catch((error) => {
            console.log('error signing out user', error.message);
        });
    }

    function test() {
        console.log('character: ' + characterList);
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

        setCharacterList((prev) => {
            return [...prev, value]
        });   
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