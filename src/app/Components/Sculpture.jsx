// Decorative hero sculpture. Pure SVG: no filters, no blur, no animation inside.
// The entrance animation is applied by the wrapper in Hero.jsx.

const SILHOUETTE =
  "M300 20 C420 10 540 90 560 220 C580 340 520 380 535 470 C550 560 480 660 350 680 C230 698 110 650 70 540 C35 445 95 400 80 300 C62 185 150 110 220 60 C245 42 272 22 300 20 Z";

export default function Sculpture({ className = "" }) {
  return (
    <svg
      viewBox="0 0 700 800"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <clipPath id="sculpture-clip">
          <path d={SILHOUETTE} />
        </clipPath>

        {/* Dark plum bottom-left to lavender-grey top-right */}
        <linearGradient id="sculpture-base" x1="0.1" y1="1" x2="0.9" y2="0">
          <stop offset="0" stopColor="#4E3A48" />
          <stop offset="0.42" stopColor="#806477" />
          <stop offset="0.78" stopColor="#C6B5C2" />
          <stop offset="1" stopColor="#DED4DB" />
        </linearGradient>

        <linearGradient id="sculpture-deep" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3F2F3B" />
          <stop offset="0.6" stopColor="#4E3A48" />
          <stop offset="1" stopColor="#6A5063" />
        </linearGradient>

        <linearGradient id="sculpture-plum" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6A5063" />
          <stop offset="0.5" stopColor="#806477" />
          <stop offset="1" stopColor="#A58C9D" />
        </linearGradient>

        <linearGradient id="sculpture-mauve" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#C6B5C2" />
          <stop offset="1" stopColor="#A58C9D" />
        </linearGradient>

        <linearGradient id="sculpture-light" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#DED4DB" />
          <stop offset="1" stopColor="#C6B5C2" />
        </linearGradient>
      </defs>

      {/* Artwork was drawn on 600x700. This scales it to fill 700x800. */}
      <g transform="translate(7 0) scale(1.1429)">
      {/* Base body */}
      <path d={SILHOUETTE} fill="url(#sculpture-base)" />

      {/* Folds, clipped to the silhouette */}
      <g clipPath="url(#sculpture-clip)">
        {/* Mid plum swoop */}
        <path
          d="M120 120 C220 150 330 140 420 210 C500 270 530 360 520 470 C440 400 360 330 260 300 C190 280 140 220 120 120 Z"
          fill="url(#sculpture-plum)"
        />
        {/* Dark left ridge */}
        <path
          d="M90 330 C150 360 190 430 200 510 C205 570 240 620 300 660 C220 650 140 600 105 520 C80 460 100 400 90 330 Z"
          fill="url(#sculpture-deep)"
          opacity="0.6"
        />
        {/* Deep lower-left lobe */}
        <path
          d="M-20 420 C80 380 160 430 230 520 C290 595 350 640 420 720 L-20 720 Z"
          fill="url(#sculpture-deep)"
        />
        {/* Mauve crescent */}
        <path
          d="M230 300 C330 320 420 400 460 520 C470 570 440 620 380 660 C400 560 360 440 230 300 Z"
          fill="url(#sculpture-mauve)"
          opacity="0.85"
        />
        {/* Light upper-right fold */}
        <path
          d="M300 10 C430 20 560 120 565 250 C520 190 450 150 360 140 C300 132 250 90 300 10 Z"
          fill="url(#sculpture-light)"
        />

        {/* Fine contour lines following the folds */}
        <g fill="none" stroke="#DED4DB" strokeWidth="1" opacity="0.4">
          <path d="M110 200 C200 175 330 180 410 240 C470 285 495 350 490 430" />
          <path d="M130 235 C210 215 320 222 390 275 C440 312 462 365 458 430" />
          <path d="M150 270 C220 255 305 262 365 305 C405 335 425 375 425 425" />
          <path d="M110 410 C130 480 180 545 250 585" />
          <path d="M140 440 C165 505 220 565 290 600" />
          <path d="M170 480 C200 540 260 590 330 615" />
        </g>

        {/* Curved highlights */}
        <g
          fill="none"
          stroke="#DED4DB"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.65"
        >
          <path d="M150 150 C230 110 330 100 430 160" />
          <path d="M255 330 C340 345 415 405 450 500" />
          <path d="M120 360 C165 400 185 460 190 520" />
        </g>
      </g>

      {/* Soft edge definition */}
      <path
        d={SILHOUETTE}
        fill="none"
        stroke="#DED4DB"
        strokeWidth="1"
        opacity="0.3"
      />
      </g>
    </svg>
  );
}