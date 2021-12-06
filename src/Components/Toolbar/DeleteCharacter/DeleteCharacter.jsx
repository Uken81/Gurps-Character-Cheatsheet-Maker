import { useContext } from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';

import { CharacterNameContext } from '../../../context';

const DeleteCharacter = ({ setShowAlert }) => {
  const { characterName } = useContext(CharacterNameContext);

  const showDeleteAlert = () => {
    setShowAlert(true);
  };

  return (
    <div className="button-container">
      <Button className="tool-button" onClick={showDeleteAlert}>
        {`Delete ${characterName}`}
      </Button>
    </div>
  );
};

DeleteCharacter.propTypes = {
  setShowAlert: PropTypes.func
};

export default DeleteCharacter;
