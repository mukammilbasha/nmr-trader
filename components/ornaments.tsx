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
 * The "leather hide" monogram from the NMR letterhead — an abstract
 * interpretation to stand in as a brand mark until a real logo file is supplied.
 */
export function NmrMark({
  className = "",
  size = 44,
}: {
  className?: string
  size?: number
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      className={className}
      aria-label="NMR Traders mark"
    >
      <defs>
        <linearGradient id="nmr-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="oklch(0.4 0.135 22)" />
          <stop offset="1" stopColor="oklch(0.28 0.11 18)" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="6" fill="url(#nmr-grad)" />
      <path
        d="M11 34 L11 14 L15.5 14 L24 28 L24 14 L28.5 14 L28.5 34 L24 34 L15.5 20 L15.5 34 Z"
        fill="oklch(0.94 0.08 80)"
      />
      <path
        d="M32 14 L37 14 L37 34 L32 34 Z"
        fill="oklch(0.76 0.12 72)"
      />
      <circle cx="37" cy="14" r="2" fill="oklch(0.94 0.08 80)" />
    </svg>
  )
}
