import { useEffect } from "react/cjs/react.development";
import { storeCharacterObject, loadCharactersAttributes } from "../Firebase/firebase.utils";
import AdvantagesArray from '../../Attribute Objects/Advantages/Advantages.js';

const SaveCharacter = ({ 
    characterName, 
    selectedAdvantagesList, 
    selectedDisadvantagesList, 
    currentUser, usersChoiceReference, setUsersChoiceReference, setSelectedAdvantagesList,
    saveCharacterHandler
 }) => {

    const saveCharacter = async () => {
        let arr = [];
        selectedAdvantagesList.map((element) => {
            arr.push(element.title);

           
                setUsersChoiceReference(arr);
                console.log('arr: ' + arr);
            
            

            return usersChoiceReference;
        })
    }



    useEffect(() => {
        console.log(usersChoiceReference);
        storeCharacterObject(usersChoiceReference, currentUser);
        console.log('went through');
    }, [usersChoiceReference]);

    const loadCharacter = async () => {
        let demo = await loadCharactersAttributes(currentUser);
        let arr;
        await arr.push(demo[0]);
    }


    const con = () => {
        console.log(selectedAdvantagesList);
    }

    return (
        <div>
            <button onClick={saveCharacterHandler}>Save Character</button>
            <button onClick={con}>con obj</button>
            <button onClick={loadCharacter}>load</button>
        </div>

    );
}

export default SaveCharacter;

