import { setDoc } from '@firebase/firestore';
import { useContext, useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';

import {
  CharacterNameContext,
  CurrentCharacterIdContext,
  SelectedAdvantagesContext,
  SelectedDisadvantagesContext,
  ShowSuccessfulSaveAlertContext,
  UserContext
} from '../../../context';
import { addNewCharacterForUser, getUsersSavedCharactersList } from '../../Firebase/firebase.utils';

const SaveCharacter = () => {
  const { user } = useContext(UserContext);
  const { characterName } = useContext(CharacterNameContext);
  const { setCurrentCharacterId } = useContext(CurrentCharacterIdContext);
  const { selectedAdvantagesList } = useContext(SelectedAdvantagesContext);
  const { selectedDisadvantagesList } = useContext(SelectedDisadvantagesContext);
  const { setShowSuccessfulSaveAlert } = useContext(ShowSuccessfulSaveAlertContext);

  const [nameIsDuplicate, setNameIsDuplicate] = useState(false);

  let currentlyLoggedInUserId;
  if (user) {
    currentlyLoggedInUserId = user.uid;
  }

  useEffect(() => {
    const checkIfDuplicate = async () => {
      const matchingName = await getUsersSavedCharactersList(currentlyLoggedInUserId);
      setNameIsDuplicate(() => matchingName.includes(characterName));
    };
    checkIfDuplicate();
  }, [characterName]);

  const saveCharacterHandler = async () => {
    if ((selectedAdvantagesList.length === 0) & (selectedDisadvantagesList.length === 0)) {
      console.log('**** Save fail');
      alert('You must select at least one Advantage or Disadvantage');
    } else if (nameIsDuplicate) {
      console.log('**** Save fail');
      alert(
        'You already have a character with this name. Delete original character or change name'
      );
    } else if (characterName === '') {
      console.log('**** Save fail');
      alert('You must select a name for your character in order to save');
    } else {
      console.log('**** SaveCharacterHandler Called');
      console.log('**** SelectedAdvantagesList: ', selectedAdvantagesList);
      console.log('**** SelectedDisadvantagesList: ', selectedDisadvantagesList);
      console.log(`**** ${characterName} has been saved`);

      const newCharacter = {
        name: characterName,
        advantages: selectedAdvantagesList.map(({ title }) => title),
        disadvantages: selectedDisadvantagesList.map(({ title }) => title)
      };

      const currentlyLoggedInUserId = user.uid;
      console.log('**** New Character for ' + currentlyLoggedInUserId + ' is ', newCharacter);
      const newCharacterRef = await addNewCharacterForUser(currentlyLoggedInUserId, newCharacter);
      console.log('**** NewCharacterRef: ', newCharacterRef);

      const id = { id: newCharacterRef.id };
      setCurrentCharacterId(id);
      console.log('**** NewCharacterId: ', newCharacterRef.id);
      await setDoc(newCharacterRef, id, { merge: true });

      setShowSuccessfulSaveAlert(true);
    }
  };

  return (
    <div className="button-container">
      <Button className="tool-button" size="lg" onClick={saveCharacterHandler}>
        Save Character
      </Button>
    </div>
  );
};

export default SaveCharacter;
