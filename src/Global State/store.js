import create from 'zustand';
import { devtools } from 'zustand/middleware';

let ToggleStore = (set) => ({
  isChoosingAdvantages: true,
  toggleAdvantages: () => set({ isChoosingAdvantages: true }),
  toggleDisadvantages: () => set({ isChoosingAdvantages: false }),

  showSuccessAlert: false,
  toggleShow: () => set({ showSuccessfulSaveAlert: true }),
  toggleHide: () => set({ showSuccessfulSaveAlert: false })
});

let characterStore = () => ({
  characterName: '',
  selectedAdvantages: [],
  selectedDisadvantages: [],
  currentCharacterId: ''
});

characterStore = devtools(characterStore);

export const useToggleStore = create(ToggleStore);
export const useCharacterStore = create(characterStore);
