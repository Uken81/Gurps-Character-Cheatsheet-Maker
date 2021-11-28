import { useContext } from 'react';
import { CharacterNameContext, CurrentCharacterIdContext, UserContext } from '../../../context';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import { GetCharacterReference } from '../../Firebase/firebase.utils';
import { useHistory } from 'react-router';
import { deleteDoc } from '@firebase/firestore';

const DeleteAlert = (props) => {
  const { user } = useContext(UserContext);
  const { currentCharacterId } = useContext(CurrentCharacterIdContext);
  const { characterName } = useContext(CharacterNameContext);

  const setShowAlert = props.setShowAlert;

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
  const hideAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="delete-alert">
      <Alert variant="warning">
        <Alert.Heading>{`Confirm Delete ${characterName}`}</Alert.Heading>
        <p>
          {`You are attempting to delete ${characterName}. This can not be undone. Are you sure you wish to continue?`}
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={hideAlert}>Cancel</Button>
          <Button onClick={deleteCharacter} variant="outline-success">
            Confirm
          </Button>
        </div>
      </Alert>
    </div>
  );
};

DeleteAlert.propTypes = {
  setShowAlert: PropTypes.func
};

export default DeleteAlert;
