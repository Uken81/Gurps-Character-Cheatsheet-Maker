import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useCharacterStore } from '../../../Global State/store';

const ResetChanges = () => {
  const selectedAdvantages = useCharacterStore((state) => state.selectedAdvantages);
  const selectedDisadvantages = useCharacterStore((state) => state.selectedDisadvantages);

  const [initialAdvantages, setInitialAdvantages] = useState([]);
  const [initialDisadvantages, setInitialDisadvantages] = useState([]);

  useEffect(() => {
    setInitialAdvantages(selectedAdvantages);
    setInitialDisadvantages(selectedDisadvantages);
  }, []);

  const handleClick = async () => {
    useCharacterStore.setState({ selectedAdvantages: initialAdvantages });
    useCharacterStore.setState({ selectedDisadvantages: initialDisadvantages });
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
