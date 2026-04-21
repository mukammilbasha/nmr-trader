"use client"

import { useEffect } from "react"

/**
 * Adds an `.in` class to any element with `[data-reveal]` once it scrolls
 * into view. Works with `.reveal`, `.reveal-x`, `.reveal-scale`, `.clip-reveal`
 * utilities from globals.css.
 *
 * Stagger children by setting `style={{ transitionDelay: "120ms" }}` inline.
 */
export function useReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]")
    if (!("IntersectionObserver" in window) || nodes.length === 0) {
      nodes.forEach((n) => n.classList.add("in"))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in")
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    )

    nodes.forEach((n) => io.observe(n))
    return () => io.disconnect()
  }, [])
}
