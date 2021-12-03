import { useContext, useEffect } from 'react';
import {
  CharacterNameContext,
  SelectedAdvantagesContext,
  SelectedDisadvantagesContext
} from '../../context';

const useResetAttributes = () => {
  const { setCharacterName } = useContext(CharacterNameContext);
  const { setSelectedAdvantagesList } = useContext(SelectedAdvantagesContext);
  const { setSelectedDisadvantagesList } = useContext(SelectedDisadvantagesContext);

  useEffect(() => {
    setCharacterName('');
    setSelectedAdvantagesList([]);
    setSelectedDisadvantagesList([]);
  }, []);
};

export default useResetAttributes;
