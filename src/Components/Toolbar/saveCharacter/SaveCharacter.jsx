import { setDoc } from '@firebase/firestore';
import { useContext, useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';

import { UserContext } from '../../../context';
import { useCharacterStore, useToggleStore } from '../../../Global State/store';
import { addNewCharacterForUser, getUsersSavedCharactersList } from '../../Firebase/firebase.utils';

const SaveCharacter = () => {
  const { user } = useContext(UserContext);
  const characterName = useCharacterStore((state) => state.characterName);
  const selectedAdvantages = useCharacterStore((state) => state.selectedAdvantages);
  const selectedDisadvantages = useCharacterStore((state) => state.selectedDisadvantages);

  const toggleShow = useToggleStore((state) => state.toggleShow);

  const [nameIsDuplicate, setNameIsDuplicate] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  console.log('uesrTest: ', user);
  let currentlyLoggedInUserId;
  if (user) {
    currentlyLoggedInUserId = user.uid;
    console.log('FB**currentlyLoggedInUser: ', currentlyLoggedInUserId);
  }

  useEffect(() => {
    const checkIfDuplicate = async () => {
      if (user) {
        const matchingName = await getUsersSavedCharactersList(currentlyLoggedInUserId);
        setNameIsDuplicate(() => matchingName.includes(characterName));
      }
    };
    checkIfDuplicate();
  }, [characterName]);

  const saveCharacterHandler = async () => {
    setIsSaving(true);
    if ((selectedAdvantages.length === 0) & (selectedDisadvantages.length === 0)) {
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
      console.log('**** SelectedAdvantages: ', selectedAdvantages);
      console.log('**** SelectedDisadvantages: ', selectedDisadvantages);

      const newCharacter = {
        name: characterName,
        advantages: selectedAdvantages.map(({ title }) => title),
        disadvantages: selectedDisadvantages.map(({ title }) => title)
      };

      const currentlyLoggedInUserId = user.uid;
      console.log('**** New Character for ' + currentlyLoggedInUserId + ' is ', newCharacter);
      const newCharacterRef = await addNewCharacterForUser(currentlyLoggedInUserId, newCharacter);
      console.log('**** NewCharacterRef: ', newCharacterRef);

      console.log('**newCharacterFref.id**: ', newCharacterRef.id);
      const id = { id: newCharacterRef.id };
      console.log('**id**: ', id);

      useCharacterStore.setState({ currentCharacterId: id });
      console.log('**** NewCharacterId: ', newCharacterRef.id);
      await setDoc(newCharacterRef, id, { merge: true });
      console.log(`**** ${characterName} has been saved`);

      toggleShow();
    }
    setIsSaving(false);
  };

  return (
    <div className="button-container">
      <Button className="tool-button" size="lg" onClick={saveCharacterHandler}>
        {isSaving ? 'Saving...' : 'Save Character'}
      </Button>
    </div>
  );
};

export default SaveCharacter;
