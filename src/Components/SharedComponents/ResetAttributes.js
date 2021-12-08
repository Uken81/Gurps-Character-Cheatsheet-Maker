import { useEffect } from 'react';

import useCharacterStore from '../../Global State/store';

const useResetAttributesOnLoad = () => {
  useEffect(() => {
    useCharacterStore.setState({ characterName: '' });
    useCharacterStore.setState({ selectedAdvantages: [] });
    useCharacterStore.setState({ selectedDisadvantages: [] });
  }, []);
};

export default useResetAttributesOnLoad;
