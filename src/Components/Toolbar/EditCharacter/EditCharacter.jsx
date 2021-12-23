import { useContext } from 'react';

import Button from 'react-bootstrap/Button';

import { UserContext } from '../../../context';
import { GetCharacterReference, SaveChangesToCharacter } from '../../Firebase/firebase.utils';
import { useCharacterStore } from '../../../Global State/store';
import usePushBackToCreateOrManage from '../../SharedComponents/PushBackToCreateOrManage';

const EditCharacter = () => {
  const { user } = useContext(UserContext);

  const currentCharacterId = useCharacterStore((state) => state.currentCharacterId);
  const selectedAdvantages = useCharacterStore((state) => state.selectedAdvantages);
  const selectedDisadvantages = useCharacterStore((state) => state.selectedDisadvantages);

  const handleEdit = async () => {
    const characterRef = await GetCharacterReference(user.uid, currentCharacterId);
    if ((selectedAdvantages.length !== 0) & (selectedDisadvantages.length !== 0)) {
      await SaveChangesToCharacter(characterRef, selectedAdvantages, selectedDisadvantages);
      console.log(`${characterRef} has been successfully edited.`);
      usePushBackToCreateOrManage();
    } else {
      console.log('**** Edit fail');
      alert('You must select at least one Advantage or Disadvantage');
    }
  };

  return (
    <div className="button-container">
      <Button className="tool-button" onClick={handleEdit}>
        Save Changes
      </Button>
    </div>
  );
};

export default EditCharacter;
