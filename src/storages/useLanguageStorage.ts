import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type LanguageStore = {
  language: string
  setLanguage: (currency: string) => void
}

export const useLanguageStore = create(
  persist<LanguageStore>(
    (set) => ({
      language: 'UA',
      setLanguage: (language) => set({ language }),
    }),
    {
      name: 'language',
    }
  )
)