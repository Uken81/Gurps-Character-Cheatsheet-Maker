import { addNewCharacterForUser } from "../Firebase/firebase.utils";

const SaveCharacter = (props) => {
    const selectedAdvantagesList = props.selectedAdvantagesList;
    const selectedDisadvantagesList = props.selectedDisadvantagesList;
    const characterName = props.characterName;

    const currentUser = props.currentUser;
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

        const currentlyLoggedInUserId = currentUser.uid;
        console.log("**** New Character for " + currentlyLoggedInUserId + " is ", newCharacter);
        const newCharacterRef = await addNewCharacterForUser(currentlyLoggedInUserId, newCharacter);
        console.log("**** newCharacterRef: ", newCharacterRef);
    };

    const con = () => {
        console.log('advantages list: ', selectedAdvantagesList);
        console.log('disadvantages list: ', selectedDisadvantagesList);
        console.log('name: ', characterName);
    }

    return (
        <div className="button-container">
            <button className="tool-button" onClick={saveCharacterHandler}>Save Character</button>
            <button onClick={con}>con</button>
        </div>
    );
}

export default SaveCharacter;

