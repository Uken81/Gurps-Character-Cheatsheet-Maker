import { useContext } from 'react';
import { useHistory } from 'react-router';

import Button from 'react-bootstrap/Button';

import { CurrentCharacterIdContext, UserContext } from '../../../context';
import { GetCharacterReference, SaveChangesToCharacter } from '../../Firebase/firebase.utils';
import useCharacterStore from '../../../Global State/store';

const EditCharacter = () => {
  const { user } = useContext(UserContext);
  const { currentCharacterId } = useContext(CurrentCharacterIdContext);

  const selectedAdvantages = useCharacterStore((state) => state.selectedAdvantages);
  const selectedDisadvantages = useCharacterStore((state) => state.selectedDisadvantages);

  const history = useHistory();
  const handleEdit = async () => {
    const characterRef = await GetCharacterReference(user.uid, currentCharacterId);
    if ((selectedAdvantages.length !== 0) & (selectedDisadvantages.length !== 0)) {
      await SaveChangesToCharacter(characterRef, selectedAdvantages, selectedDisadvantages);
      console.log(`${characterRef} has been successfully edited.`);
      history.push('/create-or-manage-page');
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
