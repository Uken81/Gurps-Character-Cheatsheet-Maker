import { useContext } from 'react';
import { ShowSuccessfulSaveAlertContext } from '../../../context';

import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import useCharacterStore from '../../../Global State/store';

const SuccessfulSaveAlert = () => {
  const { setShowSuccessfulSaveAlert } = useContext(ShowSuccessfulSaveAlertContext);

  const characterName = useCharacterStore((state) => state.characterName);

  const hideAlert = () => {
    setShowSuccessfulSaveAlert(false);
  };

  return (
    <div className="successful-save-alert">
      <Alert variant="success">
        <Alert.Heading>{`${characterName} has been succesfully saved.`}</Alert.Heading>
        <div className="d-flex justify-content-end">
          <Button onClick={hideAlert}>Continue</Button>
        </div>
      </Alert>
    </div>
  );
};

export default SuccessfulSaveAlert;
