import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type CurrencyStore = {
  currency: string
  setCurrency: (currency: string) => void
}

export const useCurrencyStore = create(
  persist<CurrencyStore>(
    (set) => ({
      currency: 'UAH',
      setCurrency: (currency) => set({ currency }),
    }),
    {
      name: 'currency',
    }
  )
)