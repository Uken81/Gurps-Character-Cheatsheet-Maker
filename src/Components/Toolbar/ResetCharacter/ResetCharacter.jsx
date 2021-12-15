import Button from 'react-bootstrap/Button';
import { useCharacterStore } from '../../../Global State/store';

const ResetCharacter = () => {
  const HandleCharacterReset = () => {
    useCharacterStore.setState({ characterName: '' });
    useCharacterStore.setState({ selectedAdvantages: [] });
    useCharacterStore.setState({ selectedDisadvantages: [] });
  };

  return (
    <div className="button-container">
      <Button className="tool-button" size="lg" onClick={HandleCharacterReset}>
        Reset Character
      </Button>
    </div>
  );
};

export default ResetCharacter;
