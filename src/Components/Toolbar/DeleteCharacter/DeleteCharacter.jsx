import { deleteDoc } from "firebase/firestore";
import { useContext } from "react";
import { UserContext } from "../../../context";
import { GetCharacterReference } from "../../Firebase/firebase.utils";

const DeleteCharacter = (props) => {
    const { user } = useContext(UserContext);

    const currentCharacterId = props.currentCharacterId;

    const deleteCharacter = async () => {
        const docRef = await GetCharacterReference(user.uid, currentCharacterId);
        await deleteDoc(docRef);
        console.log('****Current character has been removed from database');
    }
  
    return (
        <div className='button-container'>
            <button className="tool-button" onClick={deleteCharacter}>Delete Character</button>
            {/* <button onClick={con}>con</button> */}
        </div>

    );
}

export default DeleteCharacter;