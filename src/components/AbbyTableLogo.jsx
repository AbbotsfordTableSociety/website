import React from 'react';

export default function AbbyTableLogo({ isDark = false, className = "h-16 md:h-20" }) {
  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      
      {/* Official Abbotsford Table Society Circular Seal Logo */}
      <svg viewBox="0 0 300 300" className="h-full w-auto aspect-square flex-shrink-0 drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Top Arch Path for ABBOTSFORD TABLE */}
          <path id="topArchPath" d="M 44,150 A 106,106 0 1,1 256,150" fill="none"/>
          {/* Bottom Arch Path for SOCIETY */}
          <path id="bottomArchPath" d="M 52,150 A 98,98 0 0,0 248,150" fill="none"/>
        </defs>

        {/* Outer Circle Ring */}
        <circle cx="150" cy="150" r="145" fill="#FCFBF8" stroke="#1C1C1E" strokeWidth="4.5" />
        
        {/* Cream / Gold Inner Ring Band */}
        <circle cx="150" cy="150" r="137" fill="none" stroke="#F4EFE4" strokeWidth="12" />
        <circle cx="150" cy="150" r="143" fill="none" stroke="#C2953B" strokeWidth="1.5" />
        <circle cx="150" cy="150" r="131" fill="none" stroke="#1C1C1E" strokeWidth="2.5" />

        {/* Bottom Half Deep Forest Green Circle */}
        <path d="M 19,150 A 131,131 0 0,0 281,150 Z" fill="#334C22" />
        
        {/* Middle Horizontal Baseline */}
        <line x1="19" y1="150" x2="281" y2="150" stroke="#1C1C1E" strokeWidth="3" />

        {/* Inner Circle Border */}
        <circle cx="150" cy="150" r="92" fill="none" stroke="#C2953B" strokeWidth="2" />

        {/* Top Arched Text: ABBOTSFORD TABLE */}
        <text fontFamily="'Plus Jakarta Sans', 'Inter', sans-serif" fontSize="20" fontWeight="800" fill="#B88728" letterSpacing="4.5">
          <textPath href="#topArchPath" startOffset="50%" textAnchor="middle">
            ABBOTSFORD TABLE
          </textPath>
        </text>

        {/* Bottom Arched Text: SOCIETY */}
        <text fontFamily="'Plus Jakarta Sans', 'Inter', sans-serif" fontSize="23" fontWeight="800" fill="#FFFFFF" letterSpacing="6.5">
          <textPath href="#bottomArchPath" startOffset="50%" textAnchor="middle">
            SOCIETY
          </textPath>
        </text>

        {/* Side Dots in Green Half */}
        <circle cx="64" cy="172" r="5" fill="#FCFBF8" stroke="#1C1C1E" strokeWidth="1" />
        <circle cx="236" cy="172" r="5" fill="#FCFBF8" stroke="#1C1C1E" strokeWidth="1" />

        {/* Center Plant Branch / Leaves */}
        <g transform="translate(150, 110)">
          {/* Main Stem */}
          <path d="M 0,40 Q 2,15 0,-34" fill="none" stroke="#566250" strokeWidth="2.5" strokeLinecap="round" />
          
          {/* Leaves */}
          <path d="M 0,28 C -13,24 -15,10 -7,4 C -2,10 -2,22 0,28 Z" fill="#939E8B" />
          <path d="M 0,22 C 13,18 15,4 7,-2 C 2,4 2,16 0,22 Z" fill="#6B7663" />
          <path d="M 0,12 C -15,8 -17,-4 -9,-10 C -4,-4 -2,6 0,12 Z" fill="#6B7663" />
          <path d="M 0,5 C 15,1 17,-11 9,-17 C 4,-11 2,-1 0,5 Z" fill="#939E8B" />
          <path d="M 0,-8 C -11,-12 -13,-22 -7,-26 C -2,-22 0,-14 0,-8 Z" fill="#939E8B" />
          <path d="M 0,-12 C 11,-16 13,-26 7,-30 C 2,-26 0,-18 0,-12 Z" fill="#6B7663" />
          <path d="M 0,-28 C -4,-36 0,-42 0,-42 C 0,-42 4,-36 0,-28 Z" fill="#4B5345" />
        </g>

        {/* Center 4-Legged Table */}
        <g transform="translate(150, 150)">
          {/* 4 Angled White Table Legs */}
          <line x1="-38" y1="4" x2="-54" y2="36" stroke="#FFFFFF" strokeWidth="5.5" strokeLinecap="round"/>
          <line x1="-18" y1="4" x2="-26" y2="36" stroke="#FFFFFF" strokeWidth="5.5" strokeLinecap="round"/>
          <line x1="18" y1="4" x2="26" y2="36" stroke="#FFFFFF" strokeWidth="5.5" strokeLinecap="round"/>
          <line x1="38" y1="4" x2="54" y2="36" stroke="#FFFFFF" strokeWidth="5.5" strokeLinecap="round"/>
          
          {/* Dark Leg Outlines for crispness */}
          <line x1="-38" y1="4" x2="-54" y2="36" stroke="#1C1C1E" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="-18" y1="4" x2="-26" y2="36" stroke="#1C1C1E" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="18" y1="4" x2="26" y2="36" stroke="#1C1C1E" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="38" y1="4" x2="54" y2="36" stroke="#1C1C1E" strokeWidth="1.5" strokeLinecap="round"/>

          {/* Table Top Oval */}
          <ellipse cx="0" cy="0" rx="60" ry="11" fill="#FFFFFF" stroke="#1C1C1E" strokeWidth="3" />
        </g>
      </svg>

      {/* Brand Title Text */}
      <div className="flex flex-col">
        <span 
          className="font-extrabold text-lg md:text-xl leading-none tracking-tight"
          style={{ color: isDark ? '#FFFFFF' : '#1C1C1E' }}
        >
          Abbotsford Table
        </span>
        <span 
          className="text-xs font-bold tracking-widest uppercase mt-1"
          style={{ color: isDark ? '#A1A1AA' : '#334C22' }}
        >
          Society
        </span>
      </div>

    </div>
  );
}
