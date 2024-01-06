import React from 'react'

const PrimaryLogo = ({ size = 20, className }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M12.46 16L0 28.46V3.54001L12.46 16Z' fill='black' />
    <path d='M16 12.46L3.53998 0H28.46L16 12.46Z' fill='#FAA91A' />
    <path d='M32 3.54001V32H3.53998L32 3.54001Z' fill='#FAA91A' />
  </svg>
)

const SecondaryLogo = ({ size = 20, className }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M12.46 16L0 28.46V3.54001L12.46 16Z' fill='white' />
    <path d='M16 12.46L3.53998 0H28.46L16 12.46Z' fill='#FAA91A' />
    <path d='M32 3.54001V32H3.53998L32 3.54001Z' fill='#FAA91A' />
  </svg>
)

export default {
  PrimaryLogo,
  SecondaryLogo,
}
