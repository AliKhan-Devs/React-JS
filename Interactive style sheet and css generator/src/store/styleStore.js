import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStyleStore = create(
  persist(
    (set) => ({
      savedStyles: [],
      addStyle: (style) => 
        set((state) => ({
          savedStyles: [...state.savedStyles, { ...style, id: Date.now() }]
        })),
      removeStyle: (id) =>
        set((state) => ({
          savedStyles: state.savedStyles.filter(style => style.id !== id)
        })),
      clearStyles: () => set({ savedStyles: [] })
    }),
    {
      name: 'css-styles-storage'
    }
  )
);

export default useStyleStore;