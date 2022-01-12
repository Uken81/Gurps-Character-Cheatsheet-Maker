import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useCharacterStore } from '../../Global State/store';

const usePushBackOnRefresh = () => {
  const currentCharacterId = useCharacterStore((state) => state.currentCharacterId);
  const navigate = useNavigate();
  useEffect(() => {
    if (currentCharacterId === '') {
      navigate('/create-or-manage-page');
    }
  }, []);
};

export default usePushBackOnRefresh;
