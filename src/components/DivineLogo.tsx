import React from 'react';

interface DivineLogoProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
}

export default function DivineLogo({
  className = 'w-10 h-12',
  showText = false,
}: DivineLogoProps) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 500 600"
        className="w-full h-full max-h-full object-contain filter drop-shadow-md"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="divineGoldLinear" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCE5A4" />
            <stop offset="30%" stopColor="#E2B755" />
            <stop offset="60%" stopColor="#FCE29F" />
            <stop offset="85%" stopColor="#BE8929" />
            <stop offset="100%" stopColor="#F2D179" />
          </linearGradient>

          <linearGradient id="divineArchBg" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8C4E17" />
            <stop offset="50%" stopColor="#7B4112" />
            <stop offset="100%" stopColor="#67340D" />
          </linearGradient>

          <radialGradient id="divineArchGlow" cx="50%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#B26C24" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#67340D" stopOpacity="0" />
          </radialGradient>

          <filter id="divineSoftShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#000000" floodOpacity="0.4" />
          </filter>

          <filter id="divineGoldEmboss" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="1" dy="2" stdDeviation="1" floodColor="#3A1C04" floodOpacity="0.6" />
          </filter>
        </defs>

        <g filter="url(#divineSoftShadow)">
          {/* Main Arch Shape */}
          <path
            d="M 30,570 L 30,250 A 220,220 0 0,1 470,250 L 470,570 Z"
            fill="url(#divineArchBg)"
          />
          <path
            d="M 30,570 L 30,250 A 220,220 0 0,1 470,250 L 470,570 Z"
            fill="url(#divineArchGlow)"
          />
          {/* Outer Gold Border */}
          <path
            d="M 30,570 L 30,250 A 220,220 0 0,1 470,250 L 470,570 Z"
            fill="none"
            stroke="url(#divineGoldLinear)"
            strokeWidth="14"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          {/* Inner Fine Gold Border */}
          <path
            d="M 44,556 L 44,250 A 206,206 0 0,1 456,250 L 456,556 Z"
            fill="none"
            stroke="url(#divineGoldLinear)"
            strokeWidth="3.5"
            strokeOpacity="0.95"
          />
        </g>

        {/* Monogram D and winged strokes */}
        <g filter="url(#divineGoldEmboss)">
          <path
            d="M 125,175 C 125,170 130,165 140,165 L 235,165 C 325,165 375,210 375,295 C 375,385 315,425 230,425 L 135,425 C 125,425 125,420 125,415 L 125,175 Z M 185,215 L 185,375 L 225,375 C 285,375 320,345 320,295 C 320,245 285,215 225,215 Z"
            fill="url(#divineGoldLinear)"
          />
          <polygon
            points="365,195 470,195 470,228 385,228"
            fill="url(#divineGoldLinear)"
          />
          <polygon
            points="395,246 470,246 470,279 415,279"
            fill="url(#divineGoldLinear)"
          />
        </g>

        {/* Divine Fragrance Script */}
        <g filter="url(#divineGoldEmboss)">
          <text
            x="250"
            y="495"
            fontFamily="'Cinzel', 'Playfair Display', 'Baskerville', 'Georgia', serif"
            fontSize="44"
            fontWeight="700"
            letterSpacing="1.5"
            textAnchor="middle"
            fill="url(#divineGoldLinear)"
          >
            Divine Fragrance
          </text>
        </g>
      </svg>

      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-serif text-lg tracking-[0.2em] uppercase font-medium text-[#FBF8F3]">
            Divine Fragrance
          </span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#C9A86A]">
            The Luxury Of Pure Fragrance
          </span>
        </div>
      )}
    </div>
  );
}
