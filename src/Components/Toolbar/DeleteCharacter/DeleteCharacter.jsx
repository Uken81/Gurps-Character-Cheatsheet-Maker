import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import useCharacterStore from '../../../Global State/store';

const DeleteCharacter = ({ setShowAlert }) => {
  const characterName = useCharacterStore((state) => state.characterName);

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
