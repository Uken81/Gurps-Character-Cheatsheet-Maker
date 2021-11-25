import { deleteDoc } from 'firebase/firestore';
import { useContext } from 'react';
import { useHistory } from 'react-router';

import Button from 'react-bootstrap/Button';

import { CharacterNameContext, CurrentCharacterIdContext, UserContext } from '../../../context';
import { GetCharacterReference } from '../../Firebase/firebase.utils';

const DeleteCharacter = () => {
  const { user } = useContext(UserContext);
  const { characterName } = useContext(CharacterNameContext);
  const { currentCharacterId } = useContext(CurrentCharacterIdContext);

  const history = useHistory();
  const deleteCharacter = async () => {
    const docRef = await GetCharacterReference(user.uid, currentCharacterId);
    await deleteDoc(docRef)
      .then(() => {
        console.log('****Current character has been removed from database');
        history.push('/create-or-manage-page');
      })
      .catch(() => {
        alert('Unable to delete character from database please try again later');
      });
  };

  return (
    <div className="button-container">
      <Button className="tool-button" onClick={deleteCharacter}>
        Delete {characterName}
      </Button>
    </div>
  );
};

export default DeleteCharacter;
