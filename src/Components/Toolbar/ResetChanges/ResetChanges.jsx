import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { SelectInputValueContext } from '../../../context';
import useCharacterStore from '../../../Global State/store';

const ResetChanges = () => {
  const { selectInput, setSelectInput } = useContext(SelectInputValueContext);

  const selectedAdvantages = useCharacterStore((state) => state.selectedAdvantages);
  const selectedDisadvantages = useCharacterStore((state) => state.selectedDisadvantages);

  const [initialAdvantages, setInitialAdvantages] = useState([]);
  const [initialDisadvantages, setInitialDisadvantages] = useState([]);
  const [initalSelect, setInitialSelect] = useState([]);

  useEffect(() => {
    setInitialAdvantages(selectedAdvantages);
    setInitialDisadvantages(selectedDisadvantages);
    setInitialSelect(selectInput);
  }, []);

  const handleClick = async () => {
    useCharacterStore.setState({ selectedAdvantages: initialAdvantages });
    useCharacterStore.setState({ selectedDisadvantages: initialDisadvantages });
    setSelectInput(initalSelect);
  };

  return (
    <div>
      <Button className="tool-button" onClick={handleClick} size="lg">
        Reset Changes
      </Button>
    </div>
  );
};

export default ResetChanges;
