import { useEffect } from "react/cjs/react.development";
import { storeCharacterObject, loadCharactersAttributes } from "../Firebase/firebase.utils";
import AdvantagesArray from '../../Attribute Objects/Advantages/Advantages.js';

const SaveCharacter = ({ characterName, selectedAdvantagesList, selectedDisadvantagesList, currentUser, usersChoiceReference, setUsersChoiceReference, setSelectedAdvantagesList }) => {

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
        // console.log(demo);
        // const arr = AdvantagesArray.filter(i => demo.includes('Abso'));

        let arr = AdvantagesArray.filter(function(item) {
            
            return demo.includes(item); 
          })

       
          console.log(arr);
    }


    const con = () => {
        console.log(selectedAdvantagesList);
    }

    return (
        <div>
            <button onClick={saveCharacter}>Save Character</button>
            <button onClick={con}>con obj</button>
            <button onClick={loadCharacter}>load</button>
        </div>

    );
}

export default SaveCharacter;

