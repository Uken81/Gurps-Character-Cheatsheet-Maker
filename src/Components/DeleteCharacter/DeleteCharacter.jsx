import { useContext } from "react";
import { UserContext } from "../../context";
import { GetCharacterToDelete } from "../Firebase/firebase.utils";

const DeleteCharacter = (props) => {
    const { user } = useContext(UserContext);

    const currentCharacterId = props.currentCharacterId;

    const deleteCharacter = async () => {
        await GetCharacterToDelete(user.uid, currentCharacterId);
        console.log('****Current character has been removed from database');
    }

    return (
        <div className='button-container'>
            <button className="tool-button" onClick={deleteCharacter}>Delete Character</button>
        </div>

    );
}

export default DeleteCharacter;