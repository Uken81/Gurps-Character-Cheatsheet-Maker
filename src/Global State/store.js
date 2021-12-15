import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

let UseStore = () => ({
  selectInput: []
});

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

UseStore = devtools(UseStore);
// UseStore = persist(UseStore, { name: 'selectInput' });
// ToggleStore = devtools(ToggleStore);

characterStore = devtools(characterStore);
characterStore = persist(characterStore, { name: 'characterStore' });

export const useStore = create(UseStore);
export const useToggleStore = create(ToggleStore);
export const useCharacterStore = create(characterStore);
