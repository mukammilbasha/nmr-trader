import type { SVGProps } from "react"

/* ------------------------------------------------------------------
   Shared gold / navy / silver gradients used across all brand SVGs
------------------------------------------------------------------- */
function BrandDefs() {
  return (
    <defs>
      {/* Rich metallic gold — for NMR, shield outline, decorative rules */}
      <linearGradient id="nmr-gold" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#F4DC8A" />
        <stop offset="0.22" stopColor="#E0B94A" />
        <stop offset="0.45" stopColor="#9E7A1F" />
        <stop offset="0.65" stopColor="#E8C86A" />
        <stop offset="0.85" stopColor="#A37E1E" />
        <stop offset="1" stopColor="#F0D27A" />
      </linearGradient>
      <linearGradient id="nmr-gold-soft" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#E8C970" />
        <stop offset="1" stopColor="#8F6B1A" />
      </linearGradient>
      <linearGradient id="nmr-gold-highlight" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0" stopColor="#FFF1B8" stopOpacity="0.9" />
        <stop offset="0.5" stopColor="#D4B24C" stopOpacity="0.4" />
        <stop offset="1" stopColor="transparent" />
      </linearGradient>

      {/* Deep navy leather — shield interior */}
      <linearGradient id="nmr-navy" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0" stopColor="#1A3E72" />
        <stop offset="0.5" stopColor="#0B2955" />
        <stop offset="1" stopColor="#051633" />
      </linearGradient>
      <linearGradient id="nmr-navy-medallion" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0" stopColor="#153766" />
        <stop offset="1" stopColor="#071F45" />
      </linearGradient>

      {/* Chrome silver — for TRADERS */}
      <linearGradient id="nmr-silver" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0" stopColor="#F5F5F5" />
        <stop offset="0.3" stopColor="#D1D5DB" />
        <stop offset="0.5" stopColor="#9CA3AF" />
        <stop offset="0.7" stopColor="#E5E7EB" />
        <stop offset="1" stopColor="#BFC4CC" />
      </linearGradient>

      {/* Leather banner for tagline */}
      <linearGradient id="nmr-leather" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0" stopColor="#1E1E1E" />
        <stop offset="1" stopColor="#080808" />
      </linearGradient>

      {/* 3D emboss filter */}
      <filter id="nmr-emboss" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="0.4" />
        <feOffset dx="0.6" dy="0.6" result="off" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.6" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      {/* Inner shadow for depth on letters */}
      <filter id="nmr-innershadow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1" />
        <feOffset dx="1" dy="1" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.35" />
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
 * The NMR Traders compact brand mark — leather-hide shield with gold NMR
 * monogram. For header/footer positions.
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
           C 23 4, 19 7, 12 8
           C 8 9, 5 7, 5 11
           C 7 17, 7 23, 6 29
           C 7 37, 13 44, 20 50
           C 25 55, 29 60, 32 60
           C 35 60, 39 55, 44 50
           C 51 44, 57 37, 58 29
           C 57 23, 57 17, 59 11
           C 59 7, 56 9, 52 8
           C 45 7, 41 4, 32 4 Z"
        fill="url(#nmr-navy)"
        stroke="url(#nmr-gold)"
        strokeWidth="2.2"
        strokeLinejoin="round"
        filter="url(#nmr-emboss)"
      />
      {/* Inner bevel */}
      <path
        d="M32 9
           C 24 9, 20 11, 14 12
           C 11 13, 9 12, 9 15
           C 11 20, 11 25, 10 30
           C 10 37, 15 42, 21 47
           C 25 51, 29 55, 32 55
           C 35 55, 39 51, 43 47
           C 49 42, 54 37, 54 30
           C 53 25, 53 20, 55 15
           C 55 12, 53 13, 50 12
           C 44 11, 40 9, 32 9 Z"
        fill="none"
        stroke="url(#nmr-gold-soft)"
        strokeWidth="0.8"
        opacity="0.55"
      />
      {/* NMR monogram — stylised N with decorative calligraphic sweep */}
      <g filter="url(#nmr-emboss)">
        <path
          d="M21 22
             L21 42
             L25 42
             L25 30
             L33 42
             L36 42
             L36 22
             L32 22
             L32 34
             L25 22 Z"
          fill="url(#nmr-gold)"
        />
        <path
          d="M38 26
             C 44 30, 48 38, 46 42
             L42 42
             C 42 38, 40 32, 36 28
             Z"
          fill="url(#nmr-gold)"
          opacity="0.9"
        />
      </g>
    </svg>
  )
}

/**
 * Full branded lockup — matches the reference logo exactly:
 * SINCE 1998 arch → Leather shield → NMR (gold) → TRADERS (silver with wings) →
 * 🛒 WHOLESALE & RETAIL 🛍 with navy medallion → "Quality is Our Identity" banner
 */
export function NmrFullLogo({
  className = "",
  width = 320,
  theme = "dark",
  showTagline = true,
}: {
  className?: string
  width?: number
  theme?: "dark" | "light"
  showTagline?: boolean
}) {
  return (
    <svg
      viewBox="0 0 400 460"
      width={width}
      className={className}
      aria-label="NMR Traders — Since 1998, Wholesale & Retail, Quality is Our Identity"
      role="img"
    >
      <BrandDefs />

      {/* Background plate for dark theme */}
      {theme === "dark" && (
        <>
          <rect x="0" y="0" width="400" height="460" rx="20" fill="#0a0f1a" />
          {/* Very subtle world map silhouette */}
          <g opacity="0.08" fill="url(#nmr-gold)">
            {Array.from({ length: 180 }).map((_, i) => {
              const x = (i * 37) % 400
              const y = 80 + ((i * 17) % 300)
              const r = 0.6 + ((i * 3) % 4) * 0.2
              return <circle key={i} cx={x} cy={y} r={r} />
            })}
          </g>
        </>
      )}

      {/* ─── SINCE 1998 arched banner ─── */}
      <g>
        <defs>
          <path id="since-arc" d="M 130 78 Q 200 42 270 78" />
        </defs>
        <text
          fontSize="14"
          letterSpacing="6"
          fontFamily="var(--font-serif)"
          fontWeight="600"
          fill="url(#nmr-gold)"
          filter="url(#nmr-emboss)"
        >
          <textPath href="#since-arc" startOffset="50%" textAnchor="middle">
            SINCE 1998
          </textPath>
        </text>
        {/* Decorative fleur below arch */}
        <g transform="translate(200 92)" fill="url(#nmr-gold)">
          <circle cx="-30" cy="0" r="1.4" />
          <circle cx="30" cy="0" r="1.4" />
          <path d="M0 -4 C 2 -2, 3 -1, 0 0 C -3 -1, -2 -2, 0 -4 Z M0 0 C 3 1, 3 4, 0 6 C -3 4, -3 1, 0 0 Z" />
          <line x1="-26" y1="0" x2="-6" y2="0" stroke="url(#nmr-gold)" strokeWidth="0.6" />
          <line x1="26" y1="0" x2="6" y2="0" stroke="url(#nmr-gold)" strokeWidth="0.6" />
        </g>
      </g>

      {/* ─── Leather-hide shield ─── */}
      <g transform="translate(125 100)">
        {/* Outer gold frame */}
        <path
          d="M75 4
             C 58 4, 48 8, 30 10
             C 18 12, 6 9, 6 15
             C 12 26, 12 40, 10 52
             C 10 70, 22 86, 36 100
             C 50 114, 62 128, 75 128
             C 88 128, 100 114, 114 100
             C 128 86, 140 70, 140 52
             C 138 40, 138 26, 144 15
             C 144 9, 132 12, 120 10
             C 102 8, 92 4, 75 4 Z"
          fill="url(#nmr-navy)"
          stroke="url(#nmr-gold)"
          strokeWidth="4"
          strokeLinejoin="round"
          filter="url(#nmr-emboss)"
        />
        {/* Inner bevel */}
        <path
          d="M75 12
             C 60 12, 51 16, 35 18
             C 25 19, 14 17, 14 20
             C 19 30, 19 42, 17 52
             C 17 67, 28 80, 41 92
             C 53 104, 63 116, 75 116
             C 87 116, 97 104, 109 92
             C 122 80, 133 67, 133 52
             C 131 42, 131 30, 136 20
             C 136 17, 125 19, 115 18
             C 99 16, 90 12, 75 12 Z"
          fill="none"
          stroke="url(#nmr-gold-soft)"
          strokeWidth="1.2"
          opacity="0.6"
        />
        {/* Textured leather pattern inside (stippled dots) */}
        <g opacity="0.25">
          {Array.from({ length: 40 }).map((_, i) => {
            const x = 25 + ((i * 7) % 110)
            const y = 25 + (Math.floor(i / 12) * 15) + ((i * 3) % 8)
            return <circle key={i} cx={x} cy={y} r="0.8" fill="#1a3e72" />
          })}
        </g>

        {/* Monogram — large calligraphic N with M-sweep */}
        <g filter="url(#nmr-emboss)">
          {/* Main N */}
          <path
            d="M50 40
               L50 94
               L60 94
               L60 62
               L84 94
               L92 94
               L92 40
               L82 40
               L82 72
               L60 40 Z"
            fill="url(#nmr-gold)"
          />
          {/* M/swoosh — the decorative sweep across the shield */}
          <path
            d="M74 32
               C 86 38, 98 52, 104 66
               C 108 78, 102 84, 92 82
               C 80 78, 72 68, 66 54
               Z"
            fill="url(#nmr-gold)"
            opacity="0.92"
          />
          {/* Highlight streak on the N */}
          <path
            d="M52 42 L52 58 L57 58 L57 42 Z"
            fill="url(#nmr-gold-highlight)"
            opacity="0.6"
          />
        </g>
      </g>

      {/* ─── NMR wordmark ─── */}
      <g filter="url(#nmr-emboss)">
        <text
          x="200"
          y="296"
          textAnchor="middle"
          fontSize="78"
          letterSpacing="4"
          fontFamily="var(--font-serif)"
          fontWeight="800"
          fill="url(#nmr-gold)"
        >
          NMR
        </text>
        {/* Highlight sheen on letters */}
        <text
          x="200"
          y="296"
          textAnchor="middle"
          fontSize="78"
          letterSpacing="4"
          fontFamily="var(--font-serif)"
          fontWeight="800"
          fill="url(#nmr-gold-highlight)"
          opacity="0.55"
        >
          NMR
        </text>
      </g>

      {/* ─── TRADERS in silver with wing flourishes ─── */}
      <g>
        {/* Left wing */}
        <g transform="translate(100 324)">
          <line x1="0" y1="0" x2="30" y2="0" stroke="url(#nmr-silver)" strokeWidth="1.5" />
          <line x1="6" y1="-3" x2="26" y2="-3" stroke="url(#nmr-silver)" strokeWidth="0.8" />
          <line x1="12" y1="3" x2="28" y2="3" stroke="url(#nmr-silver)" strokeWidth="0.8" />
        </g>
        {/* Right wing (mirrored) */}
        <g transform="translate(270 324)">
          <line x1="0" y1="0" x2="30" y2="0" stroke="url(#nmr-silver)" strokeWidth="1.5" />
          <line x1="4" y1="-3" x2="24" y2="-3" stroke="url(#nmr-silver)" strokeWidth="0.8" />
          <line x1="2" y1="3" x2="18" y2="3" stroke="url(#nmr-silver)" strokeWidth="0.8" />
        </g>
        <text
          x="200"
          y="332"
          textAnchor="middle"
          fontSize="32"
          letterSpacing="14"
          fontFamily="var(--font-serif)"
          fontWeight="700"
          fill="url(#nmr-silver)"
          filter="url(#nmr-emboss)"
        >
          TRADERS
        </text>
      </g>

      {/* ─── WHOLESALE & RETAIL strap with cart + bag icons ─── */}
      {showTagline && (
        <g transform="translate(0 362)">
          {/* Left shopping cart icon in gold ring */}
          <g transform="translate(70 0)">
            <circle cx="0" cy="0" r="14" fill="none" stroke="url(#nmr-gold)" strokeWidth="1.4" />
            <g fill="url(#nmr-gold)" transform="translate(-7 -6) scale(0.55)">
              <path d="M2 3 L5 3 L8 18 L22 18 L25 7 L7 7" fill="none" stroke="url(#nmr-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="11" cy="22" r="1.8" />
              <circle cx="20" cy="22" r="1.8" />
            </g>
          </g>
          {/* WHOLESALE */}
          <text
            x="140"
            y="4"
            textAnchor="middle"
            fontSize="14"
            letterSpacing="5"
            fontFamily="var(--font-serif)"
            fontWeight="600"
            fill="url(#nmr-gold)"
          >
            WHOLESALE
          </text>
          {/* Navy medallion with gold & */}
          <g transform="translate(200 0)">
            <circle cx="0" cy="0" r="14" fill="url(#nmr-navy-medallion)" stroke="url(#nmr-gold)" strokeWidth="1.2" />
            <text
              x="0"
              y="5"
              textAnchor="middle"
              fontSize="16"
              fontFamily="var(--font-serif)"
              fontWeight="700"
              fill="url(#nmr-gold)"
              fontStyle="italic"
            >
              &amp;
            </text>
          </g>
          {/* RETAIL */}
          <text
            x="260"
            y="4"
            textAnchor="middle"
            fontSize="14"
            letterSpacing="5"
            fontFamily="var(--font-serif)"
            fontWeight="600"
            fill="url(#nmr-gold)"
          >
            RETAIL
          </text>
          {/* Right shopping bag icon in gold ring */}
          <g transform="translate(330 0)">
            <circle cx="0" cy="0" r="14" fill="none" stroke="url(#nmr-gold)" strokeWidth="1.4" />
            <g transform="translate(0 0) scale(0.5)" fill="url(#nmr-gold)">
              <path
                d="M-10 -6 L10 -6 L12 14 L-12 14 Z"
                fill="none"
                stroke="url(#nmr-gold)"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M-5 -6 C -5 -12, 5 -12, 5 -6"
                fill="none"
                stroke="url(#nmr-gold)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>
          </g>
        </g>
      )}

      {/* ─── Quality is Our Identity leather banner ─── */}
      {showTagline && (
        <g transform="translate(100 400)">
          <rect
            x="0"
            y="0"
            width="200"
            height="32"
            rx="16"
            fill="url(#nmr-leather)"
            stroke="url(#nmr-gold-soft)"
            strokeWidth="0.8"
          />
          {/* Stitching detail */}
          <rect
            x="4"
            y="4"
            width="192"
            height="24"
            rx="12"
            fill="none"
            stroke="url(#nmr-gold-soft)"
            strokeWidth="0.4"
            strokeDasharray="2 2"
            opacity="0.5"
          />
          {/* Rivets */}
          <circle cx="10" cy="16" r="1.5" fill="url(#nmr-gold)" />
          <circle cx="190" cy="16" r="1.5" fill="url(#nmr-gold)" />
          <text
            x="100"
            y="20"
            textAnchor="middle"
            fontSize="12"
            fontFamily="var(--font-serif)"
            fontStyle="italic"
            fontWeight="600"
            fill="url(#nmr-gold)"
            letterSpacing="1.5"
          >
            Quality is Our Identity
          </text>
        </g>
      )}

      {/* Lower fleur ornament */}
      <g transform="translate(200 448)" fill="url(#nmr-gold)">
        <path
          d="M0 -4 L3 0 L0 4 L-3 0 Z"
          stroke="url(#nmr-gold)"
          strokeWidth="0.5"
        />
      </g>
    </svg>
  )
}

/**
 * Rotating circular seal — "NMR TRADERS · ESTD 1998 · ARCOT · RANIPET"
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
 * Ornamental divider — thin rule with small rhombus and dots on each side.
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
