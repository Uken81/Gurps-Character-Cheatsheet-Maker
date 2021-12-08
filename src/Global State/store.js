import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export const useStore = create(() => ({
  selectInput: []
}));

let ToggleStore = (set) => ({
  isChoosingAdvantages: true,
  toggleAdvantages: () => set({ isChoosingAdvantages: true }),
  toggleDisadvantages: () => set({ isChoosingAdvantages: false }),

  showSuccessfulSaveAlert: false,
  toggleShow: () => set({ showSuccessfulSaveAlert: true }),
  toggleHide: () => set({ showSuccessfulSaveAlert: false })
});

let characterStore = () => ({
  characterName: '',
  selectedAdvantages: [],
  selectedDisadvantages: [],
  currentCharacterId: ''
});

ToggleStore = devtools(ToggleStore);

characterStore = devtools(characterStore);
characterStore = persist(characterStore);

export const useToggleStore = create(ToggleStore);
export const useCharacterStore = create(characterStore);
