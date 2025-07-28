import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type CurrencyStore = {
  currency: string
  rates: Record<string, number>
  setCurrency: (currency: string) => void
}

export const useCurrencyStore = create(
  persist<CurrencyStore>(
    (set) => ({
      currency: 'UAH',
      rates: {
        UAH: 1,
        EUR: 0.025,
        PLN: 0.11,
      },
      setCurrency: (currency) => set({ currency }),
    }),
    { name: 'currency-store' }
  )
)
