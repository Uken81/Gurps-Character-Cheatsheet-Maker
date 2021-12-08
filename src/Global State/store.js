import create from 'zustand';
import { devtools } from 'zustand/middleware';

let characterStore = () => ({
  characterName: '',
  selectedAdvantages: [],
  selectedDisadvantages: []
});

characterStore = devtools(characterStore);

const useCharacterStore = create(characterStore);

export default useCharacterStore;
