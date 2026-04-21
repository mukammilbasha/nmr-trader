"use client"

import { useEffect, useState } from "react"

// Mon–Sat: 9:30–21:00, Sun: 10:00–20:00
const HOURS: Record<number, { open: number; close: number } | null> = {
  0: { open: 10 * 60, close: 20 * 60 }, // Sun
  1: { open: 9 * 60 + 30, close: 21 * 60 },
  2: { open: 9 * 60 + 30, close: 21 * 60 },
  3: { open: 9 * 60 + 30, close: 21 * 60 },
  4: { open: 9 * 60 + 30, close: 21 * 60 },
  5: { open: 9 * 60 + 30, close: 21 * 60 },
  6: { open: 9 * 60 + 30, close: 21 * 60 },
}

export type StoreStatus = {
  isOpen: boolean
  label: string
  sublabel: string
}

function toIndiaTime(d: Date): Date {
  // India is UTC+5:30
  const utc = d.getTime() + d.getTimezoneOffset() * 60_000
  return new Date(utc + 5.5 * 60 * 60_000)
}

function fmt(mins: number) {
  const h = Math.floor(mins / 60)
  const m = mins % 60
  const suffix = h >= 12 ? "PM" : "AM"
  const h12 = ((h + 11) % 12) + 1
  return `${h12}${m ? ":" + String(m).padStart(2, "0") : ""} ${suffix}`
}

export function useStoreStatus(): StoreStatus {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    setNow(new Date())
    const id = setInterval(() => setNow(new Date()), 60_000)
    return () => clearInterval(id)
  }, [])

  if (!now) {
    return { isOpen: false, label: "Visit us today", sublabel: "9:30 AM – 9:00 PM" }
  }
  const ist = toIndiaTime(now)
  const day = ist.getUTCDay()
  const mins = ist.getUTCHours() * 60 + ist.getUTCMinutes()
  const today = HOURS[day]
  if (today && mins >= today.open && mins < today.close) {
    return {
      isOpen: true,
      label: "Open now",
      sublabel: `Closes ${fmt(today.close)} IST`,
    }
  }
  // Find next opening
  for (let i = 1; i <= 7; i++) {
    const d = (day + i) % 7
    const h = HOURS[d]
    if (h) {
      const names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      return {
        isOpen: false,
        label: "Closed now",
        sublabel: `Opens ${i === 1 ? "tomorrow" : names[d]} · ${fmt(h.open)}`,
      }
    }
  }
  return { isOpen: false, label: "Closed", sublabel: "" }
}
