import { deleteDoc } from "firebase/firestore";
import { useContext } from "react";
import { CharacterNameContext, CurrentCharacterIdContext, UserContext } from "../../../context";
import { GetCharacterReference } from "../../Firebase/firebase.utils";

const DeleteCharacter = (props) => {
    const { user } = useContext(UserContext);
    const { characterName } = useContext(CharacterNameContext);
    const { currentCharacterId } = useContext(CurrentCharacterIdContext);

    const deleteCharacter = async () => {
        const docRef = await GetCharacterReference(user.uid, currentCharacterId);
        await deleteDoc(docRef);
        console.log('****Current character has been removed from database');
    }
  
    return (
        <div className='button-container'>
            <button className="tool-button" onClick={deleteCharacter}>Delete {characterName}</button>
        </div>

    );
}

export default DeleteCharacter;