import type { SVGProps } from "react"

/**
 * A rotating circular seal reminiscent of a letterhead stamp.
 * Text curves along a circle: "NMR TRADERS · ESTD 1998 · ARCOT · RANIPET · "
 */
export function SinceSeal({
  className = "",
  size = 120,
}: {
  className?: string
  size?: number
}) {
  return (
    <div
      className={`relative inline-flex shrink-0 items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 120 120"
        className="absolute inset-0 h-full w-full animate-seal-rotate text-primary"
        aria-hidden="true"
      >
        <defs>
          <path
            id="seal-circle"
            d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
          />
        </defs>
        <text
          fontSize="9.5"
          fill="currentColor"
          letterSpacing="2.4"
          fontFamily="var(--font-serif)"
          fontWeight="600"
        >
          <textPath href="#seal-circle" startOffset="0">
            NMR TRADERS · ESTD 1998 · ARCOT · RANIPET ·
          </textPath>
        </text>
      </svg>
      <svg
        viewBox="0 0 120 120"
        className="absolute inset-0 h-full w-full text-primary/80"
        aria-hidden="true"
      >
        <circle cx="60" cy="60" r="52" fill="none" stroke="currentColor" strokeWidth="0.6" />
        <circle cx="60" cy="60" r="38" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="1 2" />
      </svg>
      <div className="relative flex flex-col items-center justify-center text-primary">
        <span className="text-[9px] uppercase tracking-[0.2em] text-primary/70">Since</span>
        <span className="font-serif font-serif-tight text-2xl font-bold leading-none">1998</span>
      </div>
    </div>
  )
}

/**
 * Ornamental divider inspired by South-Indian temple geometry:
 * a thin rule with a small rhombus and dots on each side.
 */
export function OrnamentDivider({
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 320 16"
      role="presentation"
      aria-hidden="true"
      className={`h-4 w-auto text-accent ${className}`}
      {...props}
    >
      <line x1="0" y1="8" x2="128" y2="8" stroke="currentColor" strokeWidth="0.8" />
      <line x1="192" y1="8" x2="320" y2="8" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="138" cy="8" r="1.4" fill="currentColor" />
      <circle cx="182" cy="8" r="1.4" fill="currentColor" />
      <g transform="translate(160 8)">
        <rect
          x="-6"
          y="-6"
          width="12"
          height="12"
          transform="rotate(45)"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.9"
        />
        <circle cx="0" cy="0" r="1.8" fill="currentColor" />
      </g>
    </svg>
  )
}

/**
 * The NMR Traders brand mark — a leather-hide shield silhouette in navy
 * with the gold "NMR" monogram centered in it. Inspired by the real
 * NMR Traders logo (leather-hide silhouette + gold lettering).
 */
export function NmrMark({
  className = "",
  size = 44,
  variant = "dark",
}: {
  className?: string
  size?: number
  variant?: "dark" | "light"
}) {
  const isDark = variant === "dark"
  const shieldFill = isDark ? "#0B2955" : "#0B2955"
  const shieldStroke = isDark ? "oklch(0.76 0.12 72)" : "oklch(0.72 0.13 70)"
  const textFill = isDark ? "oklch(0.78 0.13 70)" : "oklch(0.72 0.13 65)"

  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      aria-label="NMR Traders brand mark"
    >
      <defs>
        <linearGradient id="nmr-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="oklch(0.88 0.12 80)" />
          <stop offset="0.5" stopColor="oklch(0.76 0.13 72)" />
          <stop offset="1" stopColor="oklch(0.62 0.14 55)" />
        </linearGradient>
        <linearGradient id="nmr-shield" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0" stopColor="#133a72" />
          <stop offset="1" stopColor="#071f45" />
        </linearGradient>
      </defs>
      {/* Leather-hide shield silhouette */}
      <path
        d="M32 6
           C 22 6, 18 10, 10 10
           C 8 14, 12 20, 10 28
           C 10 36, 14 42, 18 48
           C 22 54, 28 58, 32 58
           C 36 58, 42 54, 46 48
           C 50 42, 54 36, 54 28
           C 52 20, 56 14, 54 10
           C 46 10, 42 6, 32 6 Z"
        fill="url(#nmr-shield)"
        stroke="url(#nmr-gold)"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      {/* Monogram "N" + stylized accent — the gold abstract shape */}
      <path
        d="M20 22 L20 42 L24.5 42 L24.5 30.5 L33 42 L37 42 L37 22 L32.5 22 L32.5 33 L24 22 Z"
        fill="url(#nmr-gold)"
      />
      <circle cx="42" cy="26" r="1.6" fill="url(#nmr-gold)" />
      <circle cx="42" cy="38" r="1.6" fill="url(#nmr-gold)" />
      {/* Tiny SINCE 1998 badge strip */}
      <rect x="22" y="47" width="20" height="4" rx="1" fill={shieldFill} stroke="url(#nmr-gold)" strokeWidth="0.4" />
      <text
        x="32"
        y="50.4"
        textAnchor="middle"
        fontSize="2.6"
        fill={textFill}
        fontFamily="var(--font-serif)"
        letterSpacing="0.3"
        fontWeight="700"
      >
        SINCE 1998
      </text>
    </svg>
  )
}
