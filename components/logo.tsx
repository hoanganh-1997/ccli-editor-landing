export function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128">
      <rect width="128" height="128" rx="28" fill="#111113" />
      <path d="M30,36 L30,30 L36,30" stroke="#d97706" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M98,36 L98,30 L92,30" stroke="#d97706" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M30,92 L30,98 L36,98" stroke="#d97706" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M98,92 L98,98 L92,98" stroke="#d97706" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
      <g transform="translate(64,64)">
        <path d="M-20,-14 L-4,0 L-20,14" stroke="#d97706" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <line x1="2" y1="14" x2="22" y2="14" stroke="#d97706" strokeWidth="4.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}
