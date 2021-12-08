import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useCharacterStore, useToggleStore } from '../../../Global State/store';

const SuccessfulSaveAlert = () => {
  const toggleHide = useToggleStore((state) => state.toggleHide);

  const characterName = useCharacterStore((state) => state.characterName);

  return (
    <div className="successful-save-alert">
      <Alert variant="success">
        <Alert.Heading>{`${characterName} has been succesfully saved.`}</Alert.Heading>
        <div className="d-flex justify-content-end">
          <Button onClick={toggleHide}>Continue</Button>
        </div>
      </Alert>
    </div>
  );
};

export default SuccessfulSaveAlert;
