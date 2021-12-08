import { useContext } from 'react';
import { SelectInputValueContext } from '../../../context';
import Button from 'react-bootstrap/Button';
import useCharacterStore from '../../../Global State/store';

const ResetCharacter = () => {
  const { setSelectInput } = useContext(SelectInputValueContext);

  const HandleCharacterReset = () => {
    setSelectInput([]);
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
