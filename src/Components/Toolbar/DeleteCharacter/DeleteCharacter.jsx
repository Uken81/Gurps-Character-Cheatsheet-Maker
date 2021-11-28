import { useContext } from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';

import { CharacterNameContext } from '../../../context';

const DeleteCharacter = (props) => {
  const { characterName } = useContext(CharacterNameContext);

  const setShowAlert = props.setShowAlert;

  const show = () => {
    setShowAlert(true);
  };

  return (
    <div className="button-container">
      <Button className="tool-button" onClick={show}>
        Delete {characterName}
      </Button>
    </div>
  );
};

DeleteCharacter.propTypes = {
  setShowAlert: PropTypes.func
};

export default DeleteCharacter;
