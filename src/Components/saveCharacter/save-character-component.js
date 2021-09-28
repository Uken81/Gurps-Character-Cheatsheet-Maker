import { addNewCharacterForUser } from "../Firebase/firebase.utils";

const SaveCharacter = (selectedAdvantagesList, selectedDisadvantagesList, characterName, currentUser) =>{
    const saveCharacterHandler = async () => {
        console.log("****saveCharacterHandler Called");
        console.log("****selectedAdvantagesList: ", selectedAdvantagesList);
        console.log("****selectedDisadvantagesList: ", selectedDisadvantagesList);
        console.log("****characterName: ", characterName);

        // const newCharacter = {
        //   name: characterName,
        //   advantages: selectedAdvantagesList.map(({ title }) => title),
        //   disadvantages: selectedDisadvantagesList.map(({ title }) => title),
        // };
        // const currentlyLoggedInUserId = currentUser.uid;
        // console.log("**** New Character for " + currentlyLoggedInUserId + " is ", newCharacter);
        // const newCharacterRef = await addNewCharacterForUser(currentlyLoggedInUserId, newCharacter);
        // console.log("**** newCharacterRef: ", newCharacterRef);
      };


//     characterName,
//     selectedAdvantagesList,
//     selectedDisadvantagesList,
//     currentUser, usersChoiceReference, setUsersChoiceReference, setSelectedAdvantagesList,
//     saveCharacterHandler
// }) => {

    // const saveCharacter = async () => {
    //     let arr = [];
    //     selectedAdvantagesList.map((element) => {
    //         arr.push(element.title);


    //         setUsersChoiceReference(arr);
    //         console.log('arr: ' + arr);



    //         return usersChoiceReference;
    //     })
    // }



    // useEffect(() => {
    //     console.log(usersChoiceReference);
    //     storeCharacterObject(usersChoiceReference, currentUser);
    //     console.log('went through');
    // }, [usersChoiceReference]);

    // const loadCharacter = async () => {
    //     let demo = await loadCharactersAttributes(currentUser);
    //     let arr;
    //     await arr.push(demo[0]);
    // }


    return (
        <div className="button-container">
            <button className="tool-button" onClick={saveCharacterHandler}>Save Character</button>
        </div>
    );
}

export default SaveCharacter;

