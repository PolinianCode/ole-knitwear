import { useCurrencyStore } from "@/storages/useCurrencyStorage"

export function usePrice(priceUah: number): string {
  const { currency, rates } = useCurrencyStore()
  const rate = rates[currency] ?? 1
  const converted = priceUah * rate

  const symbols: Record<string, string> = {
    UAH: '₴',
    EUR: '€',
    PLN: 'zł',
    USD: '$',
  }

  const symbol = symbols[currency] ?? ''

  return `${symbol} ${converted.toFixed(0)}`
}
