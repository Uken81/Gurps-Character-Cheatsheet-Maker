import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useCharacterStore } from '../../Global State/store';

const usePushBackToLoadCharacter = () => {
  const characterName = useCharacterStore((state) => state.characterName);
  const history = useHistory();
  useEffect(() => {
    if (characterName === '') {
      history.push('/create-or-manage-page');
    }
  }, []);
};

export default usePushBackToLoadCharacter;
