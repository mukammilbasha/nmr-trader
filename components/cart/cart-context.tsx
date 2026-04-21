"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import { PRODUCTS, findProduct, type Product } from "@/lib/products"

type CartItem = {
  id: string
  qty: number
}

type CartContextValue = {
  items: CartItem[]
  itemCount: number
  totalInr: number
  isOpen: boolean
  add: (id: string, qty?: number) => void
  remove: (id: string) => void
  setQty: (id: string, qty: number) => void
  clear: () => void
  open: () => void
  close: () => void
  toggle: () => void
  resolved: Array<CartItem & { product: Product }>
}

const STORAGE_KEY = "nmr-cart-v1"

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw) as CartItem[]
        const valid = parsed.filter(
          (i) => typeof i.id === "string" && typeof i.qty === "number" && findProduct(i.id),
        )
        setItems(valid)
      }
    } catch {
      // ignore
    }
    setHydrated(true)
  }, [])

  // Persist to localStorage
  useEffect(() => {
    if (!hydrated) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // ignore
    }
  }, [items, hydrated])

  const add = useCallback((id: string, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === id)
      if (existing) {
        return prev.map((i) => (i.id === id ? { ...i, qty: i.qty + qty } : i))
      }
      return [...prev, { id, qty }]
    })
    setIsOpen(true)
  }, [])

  const remove = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }, [])

  const setQty = useCallback((id: string, qty: number) => {
    setItems((prev) => {
      if (qty <= 0) return prev.filter((i) => i.id !== id)
      return prev.map((i) => (i.id === id ? { ...i, qty } : i))
    })
  }, [])

  const clear = useCallback(() => setItems([]), [])
  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen((v) => !v), [])

  const resolved = useMemo(() => {
    return items
      .map((i) => {
        const product = findProduct(i.id)
        return product ? { ...i, product } : null
      })
      .filter((x): x is CartItem & { product: Product } => x !== null)
  }, [items])

  const itemCount = useMemo(
    () => resolved.reduce((sum, i) => sum + i.qty, 0),
    [resolved],
  )

  const totalInr = useMemo(
    () => resolved.reduce((sum, i) => sum + i.product.price * i.qty, 0),
    [resolved],
  )

  const value: CartContextValue = {
    items,
    itemCount,
    totalInr,
    isOpen,
    add,
    remove,
    setQty,
    clear,
    open,
    close,
    toggle,
    resolved,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}

// Suppress unused import warning for tree-shaking hint
export const _keep = PRODUCTS
