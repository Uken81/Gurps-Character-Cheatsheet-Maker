import { useContext } from 'react';
import {
  CharacterNameContext,
  SelectedAdvantagesContext,
  SelectedDisadvantagesContext,
  SelectInputValueContext
} from '../../../context';
import Button from 'react-bootstrap/Button';

const ResetCharacter = () => {
  const { setSelectInput } = useContext(SelectInputValueContext);
  const { setCharacterName } = useContext(CharacterNameContext);
  const { setSelectedAdvantagesList } = useContext(SelectedAdvantagesContext);
  const { setSelectedDisadvantagesList } = useContext(SelectedDisadvantagesContext);

  const HandleCharacterReset = () => {
    setSelectInput([]);
    setCharacterName('');
    setSelectedAdvantagesList([]);
    setSelectedDisadvantagesList([]);
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
