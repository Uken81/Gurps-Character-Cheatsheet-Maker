import { useContext } from "react";
import { UserContext } from "../../context";
import { addNewCharacterForUser } from "../Firebase/firebase.utils";

const SaveCharacter = (props) => {
    const {user} = useContext(UserContext);

    const selectedAdvantagesList = props.selectedAdvantagesList;
    const selectedDisadvantagesList = props.selectedDisadvantagesList;
    const characterName = props.characterName;

    const saveCharacterHandler = async () => {
        console.log("****saveCharacterHandler Called");
        console.log("****selectedAdvantagesList: ", selectedAdvantagesList);
        console.log("****selectedDisadvantagesList: ", selectedDisadvantagesList);
        console.log("****characterName: ", characterName);
        let newCharacter;

        newCharacter = {
            name: characterName,
            advantages: selectedAdvantagesList.map(({ title }) => title),
            disadvantages: selectedDisadvantagesList.map(({ title }) => title)
        };

        const currentlyLoggedInUserId = user.uid;
        console.log("**** New Character for " + currentlyLoggedInUserId + " is ", newCharacter);
        const newCharacterRef = await addNewCharacterForUser(currentlyLoggedInUserId, newCharacter);
        console.log("**** newCharacterRef: ", newCharacterRef);
    };

    return (
        <div className="button-container">
            <button className="tool-button" onClick={saveCharacterHandler}>Save Character</button>
        </div>
    );
}

export default SaveCharacter;

