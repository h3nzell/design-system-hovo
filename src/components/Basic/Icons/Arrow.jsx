import React from 'react'

const Received = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M5 17.5L19 3.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M5 7.23V17.5H15.27' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M3.5 22H20.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const TooltipIcon = ({ color = 'white', size = 20, className = '' }) => (
  <svg fill='none' width={size} height={size} className={className} viewBox='0 0 16 9' xmlns='http://www.w3.org/2000/svg'>
    <g id='Tooltip'>
      <path
        id='bottom-center'
        d='M14.0711 0.485289C14.962 0.485289 15.4081 1.56243 14.7782 2.1924L8.70711 8.26347C8.31658 8.654 7.68342 8.654 7.29289 8.26347L1.22183 2.1924C0.591867 1.56243 1.03803 0.485289 1.92894 0.485289L14.0711 0.485289Z'
        fill={color}
      />
    </g>
  </svg>
)

const Send = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M3.5 22H20.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M5 3.5L19 17.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M5 13.77V3.5H15.27' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const Arrow2 = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M17.28 10.45L21 6.72998L17.28 3.01001' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M3 6.72998H21' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6.71997 13.55L3 17.27L6.71997 20.99' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M21 17.27H3' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const Arrow3 = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M10.45 6.71997L6.72998 3L3.01001 6.71997' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6.72998 21V3' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M13.55 17.28L17.2701 21L20.9901 17.28' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M17.27 3V21' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const ArrowSquareUp = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M8.46997 13.46L12 9.94L15.53 13.46' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const ArrowSquareDown = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M8.46997 10.64L12 14.16L15.53 10.64' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const ArrowSquareLeft = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M13.26 15.53L9.73999 12L13.26 8.47' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const ArrowSquareRight = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M10.74 15.53L14.26 12L10.74 8.47' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const ArrowRight = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M14.4299 5.92999L20.4999 12L14.4299 18.07' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M3.5 12H20.33' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const ArrowLeft = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M9.57 5.92999L3.5 12L9.57 18.07' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M20.4999 12H3.66992' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const ArrowUp = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M18.0699 9.57L11.9999 3.5L5.92993 9.57' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M12 20.5V3.67' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const ArrowDown = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M18.0699 14.43L11.9999 20.5L5.92993 14.43' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M12 3.5V20.33' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const ArrowUp2 = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M19.9201 15.05L13.4001 8.53C12.6301 7.76 11.3701 7.76 10.6001 8.53L4.08008 15.05'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

const ArrowDown2 = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M19.9201 8.95L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.95'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

const ArrowRight2 = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M8.90991 19.92L15.4299 13.4C16.1999 12.63 16.1999 11.37 15.4299 10.6L8.90991 4.08'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

const ArrowLeft2 = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M15.0001 19.92L8.48009 13.4C7.71009 12.63 7.71009 11.37 8.48009 10.6L15.0001 4.08'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

const ArrowLoading = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' >
    <path
      d='M9.11 5.0799C9.98 4.8199 10.94 4.6499 12 4.6499C16.79 4.6499 20.67 8.5299 20.67 13.3199C20.67 18.1099 16.79 21.9899 12 21.9899C7.21 21.9899 3.33 18.1099 3.33 13.3199C3.33 11.5399 3.87 9.8799 4.79 8.4999'
      stroke={color}
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path d='M7.87 5.32L10.76 2' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
    <path d='M7.87 5.32007L11.24 7.78007' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
  </svg>
)

const ArrowCircleLeft = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M13.26 15.53L9.73999 12L13.26 8.47' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const ArrowCircleRight = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M10.74 15.53L14.26 12L10.74 8.47' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const ArrowCircleDown = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M8.46997 10.74L12 14.26L15.53 10.74' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const ArrowCircleUp = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M8.46997 13.26L12 9.74001L15.53 13.26' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const ArrowSwapVertical = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M9.00999 20.5L3.98999 15.49' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9.01001 3.5V20.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M14.99 3.5L20.01 8.51' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M14.99 20.5V3.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const ArrowSwapHorizontal = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M20.5 14.99L15.49 20.01' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M3.5 14.99H20.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M3.5 9.01001L8.51 3.99001' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M20.5 9.00999H3.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const Undo = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M7.12988 18.31H15.1299C17.8899 18.31 20.1299 16.07 20.1299 13.31C20.1299 10.55 17.8899 8.31 15.1299 8.31H4.12988'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M6.43012 10.81L3.87012 8.25L6.43012 5.69' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const Redo = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M16.8701 18.31H8.87012C6.11012 18.31 3.87012 16.07 3.87012 13.31C3.87012 10.55 6.11012 8.31 8.87012 8.31H19.8701'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M17.5701 10.81L20.1301 8.25L17.5701 5.69' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const RotateLeft = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M9.11008 5.08C9.98008 4.82 10.9401 4.65 12.0001 4.65C16.7901 4.65 20.6701 8.53 20.6701 13.32C20.6701 18.11 16.7901 21.99 12.0001 21.99C7.21008 21.99 3.33008 18.11 3.33008 13.32C3.33008 11.54 3.87008 9.88 4.79008 8.5'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M7.87012 5.32L10.7601 2' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M7.87012 5.32L11.2401 7.78' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const RotateRight = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M14.8901 5.08C14.0201 4.82 13.0601 4.65 12.0001 4.65C7.21008 4.65 3.33008 8.53 3.33008 13.32C3.33008 18.12 7.21008 22 12.0001 22C16.7901 22 20.6701 18.12 20.6701 13.33C20.6701 11.55 20.1301 9.89 19.2101 8.51'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M16.13 5.32L13.24 2' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M16.13 5.32L12.76 7.78' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const Refresh2 = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M22 12C22 17.52 17.52 22 12 22C6.48 22 3.11 16.44 3.11 16.44M3.11 16.44H7.63M3.11 16.44V21.44M2 12C2 6.48 6.44 2 12 2C18.67 2 22 7.56 22 7.56M22 7.56V2.56M22 7.56H17.56'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

const ArrowLeft3 = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M18.0001 12V14.67C18.0001 17.98 15.6501 19.34 12.7801 17.68L10.4701 16.34L8.16007 15C5.29007 13.34 5.29007 10.63 8.16007 8.97L10.4701 7.63L12.7801 6.29C15.6501 4.66 18.0001 6.01 18.0001 9.33V12Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

const ArrowUp3 = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M6 12V9.33C6 6.02 8.35 4.66 11.22 6.32L13.53 7.66L15.84 9C18.71 10.66 18.71 13.37 15.84 15.03L13.53 16.37L11.22 17.71C8.35 19.34 6 17.99 6 14.67V12Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

const ArrowDown3 = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12.0001 6H14.6701C17.9801 6 19.3401 8.35 17.6801 11.22L16.3401 13.53L15.0001 15.84C13.3401 18.71 10.6301 18.71 8.97005 15.84L7.63005 13.53L6.29005 11.22C4.66005 8.35 6.01005 6 9.33005 6H12.0001Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

const ArrowUp4 = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M12 15.5V9.5' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9 11.5L12 8.5L15 11.5' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const ArrowRight4 = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M8.5 12H14.5' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M12.5 15L15.5 12L12.5 9' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const ArrowLeft4 = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M15.5 12H9.5' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M11.5 9L8.5 12L11.5 15' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const ArrowDown4 = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M12 8.5V14.5' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9 12.5L12 15.5L15 12.5' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const Revert = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12.0051 21.9842C17.5165 21.9842 21.9843 17.5164 21.9843 12.005C21.9843 6.49362 17.5165 2.02578 12.0051 2.02578C6.49372 2.02578 2.02588 6.49362 2.02588 12.005C2.02588 17.5164 6.49372 21.9842 12.0051 21.9842Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M6.13721 4.02162L14.3002 12.2046L14.3202 7.66403' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M17.8629 19.9784L9.69989 11.8054L9.67993 16.336' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const ArrangeSquare = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M17.1501 13.82L14.1101 16.86' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6.8501 13.82H17.1501' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6.8501 10.18L9.8901 7.14' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M17.1501 10.18H6.8501' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const ArrangeSquare2 = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M10.1799 17.15L7.13989 14.11' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M10.1799 6.85V17.15' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M13.8201 6.85L16.8601 9.89' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M13.8201 17.15V6.85' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const BackSquare = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M8.9999 15.38H13.9199C15.6199 15.38 16.9999 14 16.9999 12.3C16.9999 10.6 15.6199 9.22 13.9199 9.22H7.1499'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M8.57 10.77L7 9.19L8.57 7.62' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const ForwardSquare = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M15 15.38H10.08C8.38 15.38 7 14 7 12.3C7 10.6 8.38 9.22 10.08 9.22H16.85'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M15.4299 10.77L16.9999 9.19L15.4299 7.62' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const RefreshSquare = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M17.5 12C17.5 15.04 15.04 17.5 12 17.5C8.96 17.5 7.10999 14.44 7.10999 14.44M7.10999 14.44H9.59M7.10999 14.44V17.19M6.5 12C6.5 8.96 8.94 6.5 12 6.5C15.67 6.5 17.5 9.56 17.5 9.56M17.5 9.56V6.81M17.5 9.56H15.06'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

const RefreshRightSquare = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M13.67 7.51C13.17 7.36 12.62 7.26 12 7.26C9.24 7.26 7 9.5 7 12.26C7 15.02 9.24 17.26 12 17.26C14.76 17.26 17 15.02 17 12.26C17 11.23 16.69 10.28 16.16 9.48'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M14.38 7.65L12.72 5.74' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M14.3799 7.65L12.4399 9.07' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const RefreshLeftSquare = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M10.33 7.51C10.83 7.36 11.38 7.26 12 7.26C14.76 7.26 17 9.5 17 12.26C17 15.02 14.76 17.26 12 17.26C9.24 17.26 7 15.02 7 12.26C7 11.23 7.31 10.28 7.84 9.48'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M9.62012 7.65L11.2801 5.74' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9.62012 7.65L11.5601 9.07' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const ReceivedSquare = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9 11.51L12 14.51L15 11.51' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M12 14.51V6.50999' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6 16.51C9.89 17.81 14.11 17.81 18 16.51' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const SendSquare = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9 9.50999L12 6.50999L15 9.50999' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M12 6.50999V14.51' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6 16.51C9.89 17.81 14.11 17.81 18 16.51' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const SendSquare2 = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M10.5898 7.67999H14.8298V11.93' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M14.8299 7.67999L9.16992 13.34' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6 16.51C9.89 17.81 14.11 17.81 18 16.51' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const ReceivedSquare2 = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M10.5898 13.34H14.8298V9.10001' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M14.8299 13.34L9.16992 7.67999' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6 16.51C9.89 17.81 14.11 17.81 18 16.51' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const Login = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M11.6799 14.62L14.2399 12.06L11.6799 9.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M4 12.06H14.17' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M12 4C16.42 4 20 7 20 12C20 17 16.42 20 12 20' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const Logout = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M17.4399 14.62L19.9999 12.06L17.4399 9.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9.76001 12.06H19.93' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M11.76 20C7.34001 20 3.76001 17 3.76001 12C3.76001 7 7.34001 4 11.76 4'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

const Import = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M9.32007 11.68L11.8801 14.24L14.4401 11.68' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M11.8799 4V14.17' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M20 12.18C20 16.6 17 20.18 12 20.18C7 20.18 4 16.6 4 12.18' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const Export = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M9.32007 6.5L11.8801 3.94L14.4401 6.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M11.8799 14.18V4.01' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M4 12C4 16.42 7 20 12 20C17 20 20 16.42 20 12' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const ExportRound = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M16.44 8.9C20.04 9.21 21.51 11.06 21.51 15.11V15.24C21.51 19.71 19.72 21.5 15.25 21.5H8.73998C4.26998 21.5 2.47998 19.71 2.47998 15.24V15.11C2.47998 11.09 3.92998 9.24 7.46998 8.91'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M12 15V3.62' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M15.3499 5.85L11.9999 2.5L8.6499 5.85' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const ImportRound = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M16.44 8.9C20.04 9.21 21.51 11.06 21.51 15.11V15.24C21.51 19.71 19.72 21.5 15.25 21.5H8.73998C4.26998 21.5 2.47998 19.71 2.47998 15.24V15.11C2.47998 11.09 3.92998 9.24 7.46998 8.91'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M12 2V14.88' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M15.3499 12.65L11.9999 16L8.6499 12.65' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const Login2 = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M8.8999 7.56C9.2099 3.96 11.0599 2.49 15.1099 2.49H15.2399C19.7099 2.49 21.4999 4.28 21.4999 8.75V15.27C21.4999 19.74 19.7099 21.53 15.2399 21.53H15.1099C11.0899 21.53 9.2399 20.08 8.9099 16.54'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M2 12H14.88' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M12.6499 8.65L15.9999 12L12.6499 15.35' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const Logout2 = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M8.8999 7.56C9.2099 3.96 11.0599 2.49 15.1099 2.49H15.2399C19.7099 2.49 21.4999 4.28 21.4999 8.75V15.27C21.4999 19.74 19.7099 21.53 15.2399 21.53H15.1099C11.0899 21.53 9.2399 20.08 8.9099 16.54'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M15.0001 12H3.62012' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M5.85 8.65L2.5 12L5.85 15.35' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const Export3 = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M13 11L21.2 2.8' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M21.9999 6.83V2H17.1699' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const Import3 = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M22 2L13.8 10.2' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M13 6.17V11H17.83' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const Import4 = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M22 2L13.8 10.2' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M13 6.17V11H17.83' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const Export4 = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M13 11L21.2 2.8' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M22 6.8V2H17.2' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const Refresh = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M14.55 21.67C18.84 20.54 22 16.64 22 12C22 6.48 17.56 2 12 2C5.33 2 2 7.56 2 7.56M2 7.56V3M2 7.56H4.01H6.44'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M2 12C2 17.52 6.48 22 12 22' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' strokeDasharray='3 3' />
  </svg>
)

const ArrangeCircle = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M13.8201 6.85001L16.86 9.89001' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M13.8201 17.15V6.85001' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M10.1801 17.15L7.14014 14.11' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M10.1802 6.85001V17.15' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

const ArrangeCircle2 = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M17.1501 13.82L14.1101 16.86' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6.8501 13.82H17.1501' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6.8501 10.18L9.89011 7.14001' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M17.1501 10.18H6.8501' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

const Repeat = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M3.58008 5.15997H17.4201C19.0801 5.15997 20.4201 6.49997 20.4201 8.15997V11.48'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M6.74008 2L3.58008 5.15997L6.74008 8.32001' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M20.4201 18.84H6.58008C4.92008 18.84 3.58008 17.5 3.58008 15.84V12.52'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M17.26 22L20.42 18.84L17.26 15.68' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const RepeatCircle = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M7.5 8.34003H14.9C15.79 8.34003 16.5 9.06 16.5 9.94V11.71' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9.19 6.65997L7.5 8.34003L9.19 10.03' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M16.5 15.66H9.10001C8.21001 15.66 7.5 14.94 7.5 14.06V12.29' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M14.8101 17.34L16.5001 15.66L14.8101 13.97' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

const RefreshCircle = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M8.01001 14.51C8.19001 14.81 8.41 15.09 8.66 15.34C10.5 17.18 13.49 17.18 15.34 15.34C16.09 14.59 16.52 13.64 16.66 12.67'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M7.34009 11.33C7.48009 10.35 7.9101 9.40997 8.6601 8.65997C10.5001 6.81997 13.4901 6.81997 15.3401 8.65997C15.6001 8.91997 15.8101 9.19999 15.9901 9.48999'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M7.82007 17.18V14.51H10.4901' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M16.18 6.82001V9.48999H13.51' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

export default {
  Received,
  TooltipIcon,
  Send,
  Arrow2,
  Arrow3,
  ArrowSquareUp,
  ArrowSquareDown,
  ArrowSquareLeft,
  ArrowSquareRight,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  ArrowUp2,
  ArrowDown2,
  ArrowRight2,
  ArrowLeft2,
  ArrowLoading,
  ArrowCircleLeft,
  ArrowCircleRight,
  ArrowCircleDown,
  ArrowCircleUp,
  ArrowSwapVertical,
  ArrowSwapHorizontal,
  Undo,
  Redo,
  RotateLeft,
  RotateRight,
  Refresh2,
  ArrowLeft3,
  ArrowUp3,
  ArrowDown3,
  ArrowUp4,
  ArrowRight4,
  ArrowLeft4,
  ArrowDown4,
  Revert,
  ArrangeSquare,
  ArrangeSquare2,
  BackSquare,
  ForwardSquare,
  RefreshSquare,
  RefreshRightSquare,
  RefreshLeftSquare,
  ReceivedSquare,
  SendSquare,
  SendSquare2,
  ReceivedSquare2,
  Login,
  Logout,
  Import,
  Export,
  ExportRound,
  ImportRound,
  Login2,
  Logout2,
  Export3,
  Import3,
  Import4,
  Export4,
  Refresh,
  ArrangeCircle,
  ArrangeCircle2,
  Repeat,
  RepeatCircle,
  RefreshCircle,
}
