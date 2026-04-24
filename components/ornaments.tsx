import type { SVGProps } from "react"

/* ------------------------------------------------------------------
   Shared gold + navy gradients used across all brand SVGs
------------------------------------------------------------------- */
function BrandDefs() {
  return (
    <defs>
      <linearGradient id="nmr-gold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#F4DC8A" />
        <stop offset="0.25" stopColor="#D4B24C" />
        <stop offset="0.55" stopColor="#9E7A1F" />
        <stop offset="0.8" stopColor="#E3C663" />
        <stop offset="1" stopColor="#8F6B1A" />
      </linearGradient>
      <linearGradient id="nmr-gold-outline" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#E8C970" />
        <stop offset="1" stopColor="#8F6B1A" />
      </linearGradient>
      <linearGradient id="nmr-navy" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0" stopColor="#12345E" />
        <stop offset="0.5" stopColor="#0B2955" />
        <stop offset="1" stopColor="#061B3D" />
      </linearGradient>
      <filter id="nmr-emboss" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="0.35" />
        <feOffset dx="0.4" dy="0.4" result="off" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.5" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  )
}

/**
 * The NMR Traders brand mark — compact leather-hide shield silhouette
 * in deep navy with gold border and monogram, inspired by the client logo.
 * For header/footer positions.
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
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      aria-label="NMR Traders"
    >
      <BrandDefs />
      {/* Leather-hide shield silhouette */}
      <path
        d="M32 4
           C 24 4, 20 6, 14 7
           C 10 8, 6 6, 6 10
           C 8 16, 8 22, 7 28
           C 7 36, 12 42, 18 48
           C 23 54, 28 60, 32 60
           C 36 60, 41 54, 46 48
           C 52 42, 57 36, 57 28
           C 56 22, 56 16, 58 10
           C 58 6, 54 8, 50 7
           C 44 6, 40 4, 32 4 Z"
        fill="url(#nmr-navy)"
        stroke="url(#nmr-gold-outline)"
        strokeWidth="2"
        strokeLinejoin="round"
        filter="url(#nmr-emboss)"
      />
      {/* Inner bevel line */}
      <path
        d="M32 8
           C 25 8, 22 10, 17 11
           C 14 12, 11 11, 11 13
           C 13 18, 13 23, 12 28
           C 12 35, 16 40, 21 45
           C 26 50, 30 55, 32 55
           C 34 55, 38 50, 43 45
           C 48 40, 52 35, 52 28
           C 51 23, 51 18, 53 13
           C 53 11, 50 12, 47 11
           C 42 10, 39 8, 32 8 Z"
        fill="none"
        stroke="url(#nmr-gold)"
        strokeWidth="0.6"
        opacity="0.6"
      />
      {/* Stylized "NMR" monogram — abstract calligraphic swoop */}
      <g filter="url(#nmr-emboss)">
        <path
          d="M22 22
             L22 42
             L26 42
             L26 30
             L33 42
             L37 42
             L37 22
             L33 22
             L33 34
             L26 22 Z"
          fill="url(#nmr-gold)"
        />
        <path
          d="M40 28 L40 40 L43 40 L43 32 L45 40 L47 40 L49 32 L49 40 L52 40 L52 28 L48 28 L46 36 L44 28 Z"
          fill="url(#nmr-gold)"
          opacity="0.95"
        />
      </g>
    </svg>
  )
}

/**
 * Full branded lockup — large leather shield with gold NMR monogram,
 * flanked by "SINCE 1998" ribbon and optional "WHOLESALE & RETAIL" strap.
 * For hero / contact / footer wordmark positions.
 */
export function NmrFullLogo({
  className = "",
  width = 320,
  showTagline = true,
  theme = "dark",
}: {
  className?: string
  width?: number
  showTagline?: boolean
  theme?: "dark" | "light"
}) {
  const bgFill = theme === "dark" ? "#0b111e" : "transparent"
  const strokeMuted = theme === "dark" ? "#E3C663" : "url(#nmr-gold-outline)"

  return (
    <svg
      viewBox="0 0 320 340"
      width={width}
      className={className}
      aria-label="NMR Traders — Wholesale & Retail, Since 1998"
      role="img"
    >
      <BrandDefs />
      {/* Background plate — transparent for light theme, dark plate for dark */}
      {theme === "dark" && (
        <rect x="0" y="0" width="320" height="340" rx="18" fill={bgFill} />
      )}

      {/* Top decorative rule + fleur */}
      <g>
        <line x1="36" y1="22" x2="140" y2="22" stroke="url(#nmr-gold)" strokeWidth="1" />
        <line x1="180" y1="22" x2="284" y2="22" stroke="url(#nmr-gold)" strokeWidth="1" />
        <g transform="translate(160 22)" fill="url(#nmr-gold)">
          <circle cx="-18" cy="0" r="1.4" />
          <circle cx="18" cy="0" r="1.4" />
          <path
            d="M0 -6 C 2 -4, 4 -2, 0 0 C -4 -2, -2 -4, 0 -6 Z M0 0 C 3 1, 3 4, 0 6 C -3 4, -3 1, 0 0 Z"
            opacity="0.9"
          />
        </g>
      </g>

      {/* SINCE 1998 text */}
      <g>
        <circle cx="102" cy="40" r="1.8" fill="url(#nmr-gold)" />
        <circle cx="218" cy="40" r="1.8" fill="url(#nmr-gold)" />
        <text
          x="160"
          y="44"
          textAnchor="middle"
          fontSize="12"
          letterSpacing="4"
          fontFamily="var(--font-serif)"
          fontWeight="600"
          fill="url(#nmr-gold)"
        >
          SINCE 1998
        </text>
      </g>

      {/* Leather-hide shield */}
      <g transform="translate(88 60)">
        <path
          d="M72 4
             C 54 4, 46 8, 32 10
             C 22 12, 10 9, 10 14
             C 14 24, 14 36, 12 46
             C 12 62, 24 76, 36 90
             C 48 102, 60 116, 72 116
             C 84 116, 96 102, 108 90
             C 120 76, 132 62, 132 46
             C 130 36, 130 24, 134 14
             C 134 9, 122 12, 112 10
             C 98 8, 90 4, 72 4 Z"
          fill="url(#nmr-navy)"
          stroke="url(#nmr-gold-outline)"
          strokeWidth="3"
          strokeLinejoin="round"
          filter="url(#nmr-emboss)"
        />
        {/* Inner bevel */}
        <path
          d="M72 12
             C 57 12, 50 15, 37 17
             C 28 18, 18 16, 18 19
             C 22 28, 22 37, 20 46
             C 20 60, 30 71, 41 83
             C 51 94, 61 106, 72 106
             C 83 106, 93 94, 103 83
             C 114 71, 124 60, 124 46
             C 122 37, 122 28, 126 19
             C 126 16, 116 18, 107 17
             C 94 15, 87 12, 72 12 Z"
          fill="none"
          stroke="url(#nmr-gold)"
          strokeWidth="1"
          opacity="0.55"
        />
        {/* Monogram N (stylised calligraphic) */}
        <g filter="url(#nmr-emboss)">
          <path
            d="M52 42
               L52 78
               L59 78
               L59 58
               L74 78
               L82 78
               L82 42
               L75 42
               L75 62
               L60 42 Z"
            fill="url(#nmr-gold)"
          />
          {/* Decorative sweep across the shield (the "M" ligature) */}
          <path
            d="M66 36
               C 76 40, 86 50, 90 62
               C 92 70, 88 74, 82 72
               C 74 70, 68 62, 64 52
               Z"
            fill="url(#nmr-gold)"
            opacity="0.88"
          />
        </g>
      </g>

      {/* NMR TRADERS wordmark */}
      <g>
        <text
          x="160"
          y="218"
          textAnchor="middle"
          fontSize="54"
          letterSpacing="6"
          fontFamily="var(--font-serif)"
          fontWeight="700"
          fill="url(#nmr-gold)"
          filter="url(#nmr-emboss)"
        >
          NMR
        </text>
        <g>
          <line x1="78" y1="244" x2="124" y2="244" stroke="url(#nmr-gold)" strokeWidth="0.9" />
          <line x1="196" y1="244" x2="242" y2="244" stroke="url(#nmr-gold)" strokeWidth="0.9" />
        </g>
        <text
          x="160"
          y="258"
          textAnchor="middle"
          fontSize="22"
          letterSpacing="8"
          fontFamily="var(--font-serif)"
          fontWeight="600"
          fill="url(#nmr-gold)"
        >
          TRADERS
        </text>
      </g>

      {showTagline && (
        <g>
          <line x1="48" y1="290" x2="128" y2="290" stroke="url(#nmr-gold)" strokeWidth="0.8" />
          <line x1="192" y1="290" x2="272" y2="290" stroke="url(#nmr-gold)" strokeWidth="0.8" />
          <g transform="translate(160 290)" fill="url(#nmr-gold)">
            <circle cx="-22" cy="0" r="1.4" />
            <circle cx="22" cy="0" r="1.4" />
            <circle cx="0" cy="0" r="6" fill="url(#nmr-navy)" stroke="url(#nmr-gold)" strokeWidth="0.8" />
            <text
              x="0"
              y="3"
              textAnchor="middle"
              fontSize="7"
              fontFamily="var(--font-serif)"
              fontWeight="700"
              fill="url(#nmr-gold)"
            >
              &amp;
            </text>
          </g>
          <text
            x="160"
            y="316"
            textAnchor="middle"
            fontSize="11"
            letterSpacing="5"
            fontFamily="var(--font-serif)"
            fontWeight="600"
            fill={strokeMuted}
          >
            WHOLESALE  ·  RETAIL
          </text>
        </g>
      )}
    </svg>
  )
}

/**
 * A rotating circular seal — "NMR TRADERS · ESTD 1998 · ARCOT · RANIPET"
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
 * Ornamental divider — thin rule with a small rhombus and dots on each side.
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
