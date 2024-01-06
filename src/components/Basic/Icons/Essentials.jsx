import React from 'react'

const Trash = ({ color = 'white', size = 20, onClick, className }) => (
  <svg width={size} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' onClick={onClick} className={className}>
    <path d='M21 5.98C17.67 5.65 14.32 5.48 10.98 5.48C9 5.48 7.02 5.58 5.04 5.78L3 5.98' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M18.85 9.14L18.2 19.21C18.09 20.78 18 22 15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M10.33 16.5H13.66' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9.5 12.5H14.5' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const BatteryEmpty = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M13 19H7C3 19 2 18 2 14V10C2 6 3 5 7 5H13C17 5 18 6 18 10V14C18 18 17 19 13 19Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M20.5 9.5C22 9.5 22 10 22 11V13C22 14 22 14.5 20.5 14.5' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const BatteryEmpty2 = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M13 19H7C3 19 2 18 2 14V10C2 6 3 5 7 5H13C17 5 18 6 18 10V14C18 18 17 19 13 19Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M20.5 9.5C22 9.5 22 10 22 11V13C22 14 22 14.5 20.5 14.5' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6.38 10C6.71 11.31 6.71 12.69 6.38 14' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const BatteryFull = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M20.5 9.5C22 9.5 22 10 22 11V13C22 14 22 14.5 20.5 14.5' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6.38 10C6.71 11.31 6.71 12.69 6.38 14' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9.88 10C10.21 11.31 10.21 12.69 9.88 14' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M13 19H7C3 19 2 18 2 14V10C2 6 3 5 7 5H13C17 5 18 6 18 10V14C18 18 17 19 13 19Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const BatteryFull2 = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M20.5 9.5C22 9.5 22 10 22 11V13C22 14 22 14.5 20.5 14.5' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6.38 10C6.71 11.31 6.71 12.69 6.38 14' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9.88 10C10.21 11.31 10.21 12.69 9.88 14' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M13.38 10C13.71 11.31 13.71 12.69 13.38 14' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M13 19H7C3 19 2 18 2 14V10C2 6 3 5 7 5H13C17 5 18 6 18 10V14C18 18 17 19 13 19Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const BatteryCharging = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M20.5 9.5C22 9.5 22 10 22 11V13C22 14 22 14.5 20.5 14.5' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M10 8L8.11001 10.5C7.72001 11.17 8.20001 12 8.97001 12H11.27C12.04 12 12.52 12.83 12.14 13.5L10 16'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M7 19C3 19 2 18 2 14V10C2 6 3 5 7 5' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M13 5C17 5 18 6 18 10V14C18 18 17 19 13 19' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const BatteryDisable = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M20.5 9.5C22 9.5 22 10 22 11V13C22 14 22 14.5 20.5 14.5' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M4 21.5L16 2.5' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M7 5C3 5 2 6 2 10V14C2 17.4 2.72 18.63 5.39 18.92' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M13 19C17 19 18 18 18 14V10C18 6.61 17.28 5.37 14.63 5.08' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Home = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M12 18V15' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M10.07 2.82L3.13999 8.37C2.35999 8.99 1.85999 10.3 2.02999 11.28L3.35999 19.24C3.59999 20.66 4.95999 21.81 6.39999 21.81H17.6C19.03 21.81 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.99 20.86 8.37L13.93 2.83C12.86 1.97 11.13 1.97 10.07 2.82Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const Home2 = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M9.02 2.84L3.63 7.04C2.73 7.74 2 9.23 2 10.36V17.77C2 20.09 3.89 21.99 6.21 21.99H17.79C20.11 21.99 22 20.09 22 17.78V10.5C22 9.29 21.19 7.74 20.2 7.05L14.02 2.72C12.62 1.74 10.37 1.79 9.02 2.84Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M12 17.99V14.99' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const MoreSquare = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M15.9965 12H16.0054' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M11.9955 12H12.0045' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M7.99451 12H8.00349' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const TickCircle = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M7.75 12L10.58 14.83L16.25 9.17' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const AddCircle = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M8 12H16' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M12 16V8' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const MinusCircle = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M11.92 22C17.42 22 21.92 17.5 21.92 12C21.92 6.5 17.42 2 11.92 2C6.42 2 1.92 6.5 1.92 12C1.92 17.5 6.42 22 11.92 22Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M7.92 12H15.92' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const CloseCircle = ({ color = 'white', size = 20, onClick, className }) => (
  <svg width={size} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' onClick={onClick} className={className}>
    <path d='M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9.17 14.83L14.83 9.17' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M14.83 14.83L9.17 9.17' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const MoreCircle = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M15.9965 12H16.0054' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M11.9955 12H12.0045' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M7.99451 12H8.00349' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const InfoCircle = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M12 8V13' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M11.9945 16H12.0035' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Danger = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12 21.41H5.93999C2.46999 21.41 1.01999 18.93 2.69999 15.9L5.81999 10.28L8.75999 5C10.54 1.79 13.46 1.79 15.24 5L18.18 10.29L21.3 15.91C22.98 18.94 21.52 21.42 18.06 21.42H12V21.41Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M11.9945 17H12.0035' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M12 9V14' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Add = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M6 12H18' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M12 18V6' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Minus = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M6 12H18' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const AddSquare = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M8 12H16' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M12 16V8' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const MinusSquare = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M8 12H16' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Tick = ({ size, color = 'white', className }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M1.75 3.99998L4.58 6.82998L10.25 1.16998' stroke={color} stroke-width='2' stroke-linecap='round' stroke-linejoin='round' />
  </svg>
)
const TickSquare = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M7.75 12L10.58 14.83L16.25 9.17' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const CloseSquare = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M9.17 14.83L14.83 9.17' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M14.83 14.83L9.17 9.17' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Sort = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M3 7H21' stroke={color} strokeWidth='1.5' strokeLinecap='round' />
    <path d='M6 12H18' stroke={color} strokeWidth='1.5' strokeLinecap='round' />
    <path d='M10 17H14' stroke={color} strokeWidth='1.5' strokeLinecap='round' />
  </svg>
)
const Send = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M9.51 4.23L18.07 8.51C21.91 10.43 21.91 13.57 18.07 15.49L9.51 19.77C3.75 22.65 1.4 20.29 4.28 14.54L5.15 12.81C5.37 12.37 5.37 11.64 5.15 11.2L4.28 9.46C1.4 3.71 3.76 1.35 9.51 4.23Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M5.44 12H10.84' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Send2 = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M7.39999 6.32L15.89 3.49C19.7 2.22 21.77 4.3 20.51 8.11L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23 7.39999 6.32Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M10.11 13.65L13.69 10.06' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Share = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M16.96 6.17C18.96 7.56 20.34 9.77 20.62 12.32' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M3.48999 12.37C3.74999 9.83 5.10999 7.62 7.08999 6.22' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M8.19 20.94C9.35 21.53 10.67 21.86 12.06 21.86C13.4 21.86 14.66 21.56 15.79 21.01' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M12.06 7.7C13.5954 7.7 14.84 6.45535 14.84 4.92C14.84 3.38465 13.5954 2.14 12.06 2.14C10.5246 2.14 9.28 3.38465 9.28 4.92C9.28 6.45535 10.5246 7.7 12.06 7.7Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M4.82999 19.92C6.36534 19.92 7.60999 18.6754 7.60999 17.14C7.60999 15.6046 6.36534 14.36 4.82999 14.36C3.29464 14.36 2.04999 15.6046 2.04999 17.14C2.04999 18.6754 3.29464 19.92 4.82999 19.92Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M19.17 19.92C20.7054 19.92 21.95 18.6754 21.95 17.14C21.95 15.6046 20.7054 14.36 19.17 14.36C17.6347 14.36 16.39 15.6046 16.39 17.14C16.39 18.6754 17.6347 19.92 19.17 19.92Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const Flash = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M6.09001 13.28H9.18001V20.48C9.18001 22.16 10.09 22.5 11.2 21.24L18.77 12.64C19.7 11.59 19.31 10.72 17.9 10.72H14.81V3.52C14.81 1.84 13.9 1.5 12.79 2.76L5.22001 11.36C4.30001 12.42 4.69001 13.28 6.09001 13.28Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const FlasSlash = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M9.17999 18.04V20.48C9.17999 22.16 10.09 22.5 11.2 21.24L18.77 12.64C19.7 11.59 19.31 10.72 17.9 10.72H16.97'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M14.82 8.84V3.52C14.82 1.84 13.91 1.5 12.8 2.76L5.23 11.36C4.3 12.41 4.69 13.28 6.1 13.28H9.19V14.46'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M22 2L2 22' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const FlashCircle = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M8.68 12.72H10.42V16.77C10.42 17.37 11.16 17.65 11.56 17.2L15.82 12.36C16.19 11.94 15.89 11.28 15.33 11.28H13.59V7.23C13.59 6.63 12.85 6.35 12.45 6.8L8.19 11.64C7.82 12.06 8.12 12.72 8.68 12.72Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M11.97 22C17.4928 22 21.97 17.5228 21.97 12C21.97 6.47715 17.4928 2 11.97 2C6.44715 2 1.97 6.47715 1.97 12C1.97 17.5228 6.44715 22 11.97 22Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const Slash = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M18.9 5L4.90002 19' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Cake = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M2 22H22' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M3.10999 22V13C3.10999 11.34 4.59999 10 6.43999 10H17.55C19.39 10 20.88 11.34 20.88 13V22'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M5.56 10V7.17C5.56 5.97 6.64 5 7.98 5H16.03C17.36 5 18.44 5.97 18.44 7.17V10' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M3.53003 13.98L3.90003 13.99C4.64003 14 5.23003 14.6 5.23003 15.34V15.67C5.23003 16.41 5.83003 17.02 6.58003 17.02C7.32003 17.02 7.93003 16.42 7.93003 15.67V15.36C7.93003 14.62 8.53003 14.01 9.28003 14.01C10.02 14.01 10.63 14.61 10.63 15.36V15.67C10.63 16.41 11.23 17.02 11.98 17.02C12.72 17.02 13.33 16.42 13.33 15.67V15.36C13.33 14.62 13.93 14.01 14.68 14.01C15.42 14.01 16.03 14.61 16.03 15.36V15.67C16.03 16.41 16.63 17.02 17.38 17.02C18.12 17.02 18.73 16.42 18.73 15.67V15.36C18.73 14.62 19.33 14.01 20.08 14.01H20.53'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M8 5V3' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M16 5V3' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M12 5V2' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Grammerly = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M19.07 4.95002C23.04 8.92002 22.97 15.4 18.87 19.29C15.08 22.88 8.92996 22.88 5.12996 19.29C1.01996 15.4 0.94995 8.92002 4.92995 4.95002C8.82995 1.04002 15.17 1.04002 19.07 4.95002Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M15.84 16.07C13.72 18.07 10.28 18.07 8.16998 16.07' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Crown = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M2 15.29V5.71C2 4.38 2.77 4.06 3.71 5L6.3 7.59C6.69 7.98 7.33 7.98 7.71 7.59L11.29 4C11.68 3.61 12.32 3.61 12.7 4L16.29 7.59C16.68 7.98 17.32 7.98 17.7 7.59L20.29 5C21.23 4.06 22 4.38 22 5.71V15.3C22 18.3 20 20.3 17 20.3H7C4.24 20.29 2 18.05 2 15.29Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const Crown2 = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M16.7 18.98H7.3C6.88 18.98 6.41 18.65 6.27 18.25L2.13 6.67C1.54 5.01 2.23 4.5 3.65 5.52L7.55 8.31C8.2 8.76 8.94 8.53 9.22 7.8L10.98 3.11C11.54 1.61 12.47 1.61 13.03 3.11L14.79 7.8C15.07 8.53 15.81 8.76 16.45 8.31L20.11 5.7C21.67 4.58 22.42 5.15 21.78 6.96L17.74 18.27C17.59 18.65 17.12 18.98 16.7 18.98Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M6.5 22H17.5' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9.5 14H14.5' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Flag = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M5.14999 2V22' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M5.14999 4H16.35C19.05 4 19.65 5.5 17.75 7.4L16.55 8.6C15.75 9.4 15.75 10.7 16.55 11.4L17.75 12.6C19.65 14.5 18.95 16 16.35 16H5.14999'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const Flag2 = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M6.45 2V22' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6.95 4L15.05 7.5C18.35 8.9 18.35 11.3 15.25 12.9L6.95 17' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Cup = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M12.15 16.5V18.6' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M7.14999 22H17.15V21C17.15 19.9 16.25 19 15.15 19H9.14999C8.04999 19 7.14999 19.9 7.14999 21V22V22Z' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' />
    <path d='M6.14999 22H18.15' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M12 16C8.13 16 5 12.87 5 9V6C5 3.79 6.79 2 9 2H15C17.21 2 19 3.79 19 6V9C19 12.87 15.87 16 12 16Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M5.47001 11.65C4.72001 11.41 4.06001 10.97 3.54001 10.45C2.64001 9.45001 2.04001 8.25001 2.04001 6.85001C2.04001 5.45001 3.14001 4.35001 4.54001 4.35001H5.19001C4.99001 4.81001 4.89001 5.32001 4.89001 5.85001V8.85001C4.89001 9.85001 5.10001 10.79 5.47001 11.65Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M18.53 11.65C19.28 11.41 19.94 10.97 20.46 10.45C21.36 9.45001 21.96 8.25001 21.96 6.85001C21.96 5.45001 20.86 4.35001 19.46 4.35001H18.81C19.01 4.81001 19.11 5.32001 19.11 5.85001V8.85001C19.11 9.85001 18.9 10.79 18.53 11.65Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const EmojiHappy = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M15.5 9.75C16.3284 9.75 17 9.07843 17 8.25C17 7.42157 16.3284 6.75 15.5 6.75C14.6716 6.75 14 7.42157 14 8.25C14 9.07843 14.6716 9.75 15.5 9.75Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M8.5 9.75C9.32843 9.75 10 9.07843 10 8.25C10 7.42157 9.32843 6.75 8.5 6.75C7.67157 6.75 7 7.42157 7 8.25C7 9.07843 7.67157 9.75 8.5 9.75Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M8.4 13.3H15.6C16.1 13.3 16.5 13.7 16.5 14.2C16.5 16.69 14.49 18.7 12 18.7C9.51 18.7 7.5 16.69 7.5 14.2C7.5 13.7 7.9 13.3 8.4 13.3Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const EmojiNormal = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M7 8.25C8 9.25 9.63 9.25 10.64 8.25' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M13.36 8.25C14.36 9.25 15.99 9.25 17 8.25' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M8.4 13H15.6C16.1 13 16.5 13.4 16.5 13.9C16.5 16.39 14.49 18.4 12 18.4C9.51 18.4 7.5 16.39 7.5 13.9C7.5 13.4 7.9 13 8.4 13Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const EmojiSad = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M7 8.75C8 7.75 9.63 7.75 10.64 8.75' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M13.36 8.75C14.36 7.75 15.99 7.75 17 8.75' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M8.4 17.7H15.6C16.1 17.7 16.5 17.3 16.5 16.8C16.5 14.31 14.49 12.3 12 12.3C9.51 12.3 7.5 14.31 7.5 16.8C7.5 17.3 7.9 17.7 8.4 17.7Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const TagCross = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M10.28 20.25H17C19.76 20.25 22 18.01 22 15.25V8.75C22 5.99 19.76 3.75 17 3.75H10.28C8.86999 3.75 7.52999 4.34 6.57999 5.39L3.04999 9.27C1.63999 10.82 1.63999 13.18 3.04999 14.73L6.57999 18.61C7.52999 19.66 8.86999 20.25 10.28 20.25Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M16 14.47L11.06 9.53' stroke={color} strokeWidth='1.5' strokeLinecap='round' />
    <path d='M11.06 14.47L16 9.53' stroke={color} strokeWidth='1.5' strokeLinecap='round' />
  </svg>
)
const Menu = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M3 7H21' stroke={color} strokeWidth='1.5' strokeLinecap='round' />
    <path d='M3 12H21' stroke={color} strokeWidth='1.5' strokeLinecap='round' />
    <path d='M3 17H21' stroke={color} strokeWidth='1.5' strokeLinecap='round' />
  </svg>
)
const CD = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M11 13C12.1046 13 13 12.1046 13 11C13 9.89543 12.1046 9 11 9C9.89543 9 9 9.89543 9 11C9 12.1046 9.89543 13 11 13Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const Chart = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M4.02 5.97C2.75 7.65 2 9.74 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M5 12C5 15.87 8.13 19 12 19C15.87 19 19 15.87 19 12C19 8.13 15.87 5 12 5' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Archive = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M19.5 10.22V19C19.5 21 19 22 16.5 22H7.5C5 22 4.5 21 4.5 19V10.22' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M5 2H19C21 2 22 3 22 5V7C22 9 21 10 19 10H5C3 10 2 9 2 7V5C2 3 3 2 5 2Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M10.18 14H13.82' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Chrome = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M21.17 8C18.15 7.34 15.02 7.34 12 8' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M3.95 6.06L3.97 6.12C4.98 9.01 6.53 11.69 8.54 14' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M10.88 21.94C12.94 19.67 14.49 16.99 15.43 14.08L15.46 14' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Instagram = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M17.6361 7H17.6477' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Coffee = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M17.79 10.47V17.79C17.79 20.12 15.9 22 13.58 22H6.21C3.89 22 2 20.11 2 17.79V10.47C2 8.14001 3.89 6.26001 6.21 6.26001H13.58C15.9 6.26001 17.79 8.15001 17.79 10.47Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M5.5 4V2.25' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9.5 4V2.25' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M13.5 4V2.25' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M22 13.16C22 15.48 20.11 17.37 17.79 17.37V8.95001C20.11 8.95001 22 10.83 22 13.16Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M2 12H17.51' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Pet = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M4.41 16.75C4.17 19.64 6.35 22 9.25 22H14.04C17.3 22 19.54 19.37 19 16.15C18.43 12.77 15.17 10 11.74 10C8.02 10 4.72 13.04 4.41 16.75Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M10.47 7.5C11.8507 7.5 12.97 6.38071 12.97 5C12.97 3.61929 11.8507 2.5 10.47 2.5C9.08929 2.5 7.97 3.61929 7.97 5C7.97 6.38071 9.08929 7.5 10.47 7.5Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M17.3 8.70001C18.4046 8.70001 19.3 7.80458 19.3 6.70001C19.3 5.59544 18.4046 4.70001 17.3 4.70001C16.1954 4.70001 15.3 5.59544 15.3 6.70001C15.3 7.80458 16.1954 8.70001 17.3 8.70001Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M21 12.7C21.8284 12.7 22.5 12.0284 22.5 11.2C22.5 10.3716 21.8284 9.70001 21 9.70001C20.1716 9.70001 19.5 10.3716 19.5 11.2C19.5 12.0284 20.1716 12.7 21 12.7Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M3.97 10.7C5.07457 10.7 5.97 9.80458 5.97 8.70001C5.97 7.59544 5.07457 6.70001 3.97 6.70001C2.86543 6.70001 1.97 7.59544 1.97 8.70001C1.97 9.80458 2.86543 10.7 3.97 10.7Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const HappyEmoji = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M11.97 22C17.4928 22 21.97 17.5228 21.97 12C21.97 6.47715 17.4928 2 11.97 2C6.44715 2 1.97 6.47715 1.97 12C1.97 17.5228 6.44715 22 11.97 22Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M7.20999 16C8.25999 17.51 10.02 18.5 12 18.5C13.98 18.5 15.73 17.51 16.79 16' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Reserve = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M18.97 22H4.97C1.97 22 1.97 20.65 1.97 19V18C1.97 17.45 2.42 17 2.97 17H20.97C21.52 17 21.97 17.45 21.97 18V19C21.97 20.65 21.97 22 18.97 22Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M20.72 13V17H3.26999V13C3.26999 9.16 5.97999 5.95 9.58999 5.18C10.13 5.06 10.69 5 11.27 5H12.72C13.3 5 13.87 5.06 14.41 5.18C18.02 5.96 20.72 9.16 20.72 13Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M14.5 4.5C14.5 4.74 14.47 4.96 14.41 5.18C13.87 5.06 13.3 5 12.72 5H11.27C10.69 5 10.13 5.06 9.59 5.18C9.53 4.96 9.5 4.74 9.5 4.5C9.5 3.12 10.62 2 12 2C13.38 2 14.5 3.12 14.5 4.5Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M15 11H9' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Sticker = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M21.93 12.86C21.91 13.05 21.88 13.23 21.83 13.41C20.79 12.53 19.44 12 17.97 12C14.66 12 11.97 14.69 11.97 18C11.97 19.47 12.5 20.82 13.38 21.86C13.2 21.91 13.02 21.94 12.83 21.96C11.98 22.04 11.11 22 10.21 21.85C6.09999 21.15 2.78999 17.82 2.10999 13.7C0.97999 6.84999 6.81999 1.00999 13.67 2.13999C17.79 2.81999 21.12 6.12999 21.82 10.24C21.97 11.14 22.01 12.01 21.93 12.86Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M21.83 13.41C21.69 13.9 21.43 14.34 21.06 14.71L14.68 21.09C14.31 21.46 13.87 21.72 13.38 21.86C12.5 20.82 11.97 19.47 11.97 18C11.97 14.69 14.66 12 17.97 12C19.44 12 20.79 12.53 21.83 13.41Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const Computing = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M21.97 15V9C21.97 4 19.97 2 14.97 2H8.96997C3.96997 2 1.96997 4 1.96997 9V15C1.96997 20 3.96997 22 8.96997 22H14.97C19.97 22 21.97 20 21.97 15Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M19.72 3.25L3.27002 19.7' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M16.06 18V13' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M18.5 15.5H13.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M10.5 7.5H5.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Verify = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M8.38 12L10.79 14.42L15.62 9.57999' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M10.75 2.45001C11.44 1.86001 12.57 1.86001 13.27 2.45001L14.85 3.81001C15.15 4.07001 15.71 4.28001 16.11 4.28001H17.81C18.87 4.28001 19.74 5.15001 19.74 6.21001V7.91001C19.74 8.30001 19.95 8.87001 20.21 9.17001L21.57 10.75C22.16 11.44 22.16 12.57 21.57 13.27L20.21 14.85C19.95 15.15 19.74 15.71 19.74 16.11V17.81C19.74 18.87 18.87 19.74 17.81 19.74H16.11C15.72 19.74 15.15 19.95 14.85 20.21L13.27 21.57C12.58 22.16 11.45 22.16 10.75 21.57L9.17 20.21C8.87 19.95 8.31 19.74 7.91 19.74H6.18C5.12 19.74 4.25 18.87 4.25 17.81V16.1C4.25 15.71 4.04 15.15 3.79 14.85L2.44 13.26C1.86 12.57 1.86 11.45 2.44 10.76L3.79 9.17001C4.04 8.87001 4.25 8.31001 4.25 7.92001V6.20001C4.25 5.14001 5.12 4.27001 6.18 4.27001H7.91C8.3 4.27001 8.87 4.06001 9.17 3.80001L10.75 2.45001Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const Information = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M10.75 2.45001C11.45 1.86001 12.58 1.86001 13.26 2.45001L14.84 3.80001C15.14 4.05001 15.71 4.26001 16.11 4.26001H17.81C18.87 4.26001 19.74 5.13001 19.74 6.19001V7.89001C19.74 8.29001 19.95 8.85001 20.2 9.15001L21.55 10.73C22.14 11.43 22.14 12.56 21.55 13.24L20.2 14.82C19.95 15.12 19.74 15.68 19.74 16.08V17.78C19.74 18.84 18.87 19.71 17.81 19.71H16.11C15.71 19.71 15.15 19.92 14.85 20.17L13.27 21.52C12.57 22.11 11.44 22.11 10.76 21.52L9.18 20.17C8.88 19.92 8.31 19.71 7.92 19.71H6.17C5.11 19.71 4.24 18.84 4.24 17.78V16.07C4.24 15.68 4.04 15.11 3.79 14.82L2.44 13.23C1.86 12.54 1.86 11.42 2.44 10.73L3.79 9.14001C4.04 8.84001 4.24 8.28001 4.24 7.89001V6.20001C4.24 5.14001 5.11 4.27001 6.17 4.27001H7.9C8.3 4.27001 8.86 4.06001 9.16 3.81001L10.75 2.45001Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M12 8.13V12.96' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M11.9945 16H12.0035' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const AutoBrightness = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M10.75 2.45001C11.45 1.86001 12.58 1.86001 13.26 2.45001L14.84 3.80001C15.14 4.05001 15.71 4.26001 16.11 4.26001H17.81C18.87 4.26001 19.74 5.13001 19.74 6.19001V7.89001C19.74 8.29001 19.95 8.85001 20.2 9.15001L21.55 10.73C22.14 11.43 22.14 12.56 21.55 13.24L20.2 14.82C19.95 15.12 19.74 15.68 19.74 16.08V17.78C19.74 18.84 18.87 19.71 17.81 19.71H16.11C15.71 19.71 15.15 19.92 14.85 20.17L13.27 21.52C12.57 22.11 11.44 22.11 10.76 21.52L9.18 20.17C8.88 19.92 8.31 19.71 7.92 19.71H6.17C5.11 19.71 4.24 18.84 4.24 17.78V16.07C4.24 15.68 4.04 15.11 3.79 14.82L2.44 13.23C1.86 12.54 1.86 11.42 2.44 10.73L3.79 9.14001C4.04 8.84001 4.24 8.28001 4.24 7.89001V6.20001C4.24 5.14001 5.11 4.27001 6.17 4.27001H7.9C8.3 4.27001 8.86 4.06001 9.16 3.81001L10.75 2.45001Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M8.5 15.94L12 8.06L15.5 15.94' stroke={color} strokeWidth='1.5' strokeLinejoin='bevel' />
    <path d='M13.75 13.31H10.25' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Traingle = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12 21.41H5.93999C2.46999 21.41 1.01999 18.93 2.69999 15.9L5.81999 10.28L8.75999 5C10.54 1.79 13.46 1.79 15.24 5L18.18 10.29L21.3 15.91C22.98 18.94 21.52 21.42 18.06 21.42H12V21.41Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M21.44 20L12 13.39L2.56 20' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M12 3V13.39' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const ThreeCube = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12.92 2.26L19.43 5.77C20.19 6.18 20.19 7.35 19.43 7.76L12.92 11.27C12.34 11.58 11.66 11.58 11.08 11.27L4.57 7.76C3.81 7.35 3.81 6.18 4.57 5.77L11.08 2.26C11.66 1.95 12.34 1.95 12.92 2.26Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M3.61 10.13L9.66 13.16C10.41 13.54 10.89 14.31 10.89 15.15V20.87C10.89 21.7 10.02 22.23 9.28 21.86L3.23 18.83C2.48 18.45 2 17.68 2 16.84V11.12C2 10.29 2.87 9.75999 3.61 10.13Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M20.39 10.13L14.34 13.16C13.59 13.54 13.11 14.31 13.11 15.15V20.87C13.11 21.7 13.98 22.23 14.72 21.86L20.77 18.83C21.52 18.45 22 17.68 22 16.84V11.12C22 10.29 21.13 9.75999 20.39 10.13Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const Glass = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M10 17.5H14' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M2 17.5V7.5C2 3.5 3 2.5 7 2.5' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M22 17.5V7.5C22 3.5 21 2.5 17 2.5' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M10 15.91V19.2C10 21.2 9.2 22 7.2 22H4.8C2.8 22 2 21.2 2 19.2V15.91C2 13.91 2.8 13.11 4.8 13.11H7.2C9.2 13.11 10 13.91 10 15.91Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M22 15.91V19.2C22 21.2 21.2 22 19.2 22H16.8C14.8 22 14 21.2 14 19.2V15.91C14 13.91 14.8 13.11 16.8 13.11H19.2C21.2 13.11 22 13.91 22 15.91Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const Discover = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M17.8 2.1L7.87 4.59C6.42 4.95 4.95 6.42 4.59 7.87L2.1 17.8C1.35 20.8 3.19 22.65 6.2 21.9L16.13 19.42C17.57 19.06 19.05 17.58 19.41 16.14L21.9 6.2C22.65 3.2 20.8 1.35 17.8 2.1Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const Weight = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M17.18 18C19.58 18 20.18 16.65 20.18 15V9C20.18 7.35 19.58 6 17.18 6C14.78 6 14.18 7.35 14.18 9V15C14.18 16.65 14.78 18 17.18 18Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M6.82001 18C4.42001 18 3.82001 16.65 3.82001 15V9C3.82001 7.35 4.42001 6 6.82001 6C9.22001 6 9.82001 7.35 9.82001 9V15C9.82001 16.65 9.22001 18 6.82001 18Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M9.82001 12H14.18' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M22.5 14.5V9.5' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M1.5 14.5V9.5' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Filter = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M5.39999 2.10001H18.6C19.7 2.10001 20.6 3.00001 20.6 4.10001V6.30001C20.6 7.10001 20.1 8.10001 19.6 8.60001L15.3 12.4C14.7 12.9 14.3 13.9 14.3 14.7V19C14.3 19.6 13.9 20.4 13.4 20.7L12 21.6C10.7 22.4 8.89999 21.5 8.89999 19.9V14.6C8.89999 13.9 8.49999 13 8.09999 12.5L4.29999 8.50001C3.79999 8.00001 3.39999 7.10001 3.39999 6.50001V4.20001C3.39999 3.00001 4.29999 2.10001 5.39999 2.10001Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M10.93 2.10001L6 10' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const FilterSquare = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M8.16 6.64999H15.83C16.47 6.64999 16.99 7.16999 16.99 7.80999V9.08999C16.99 9.55999 16.7 10.14 16.41 10.43L13.91 12.64C13.56 12.93 13.33 13.51 13.33 13.98V16.48C13.33 16.83 13.1 17.29 12.81 17.47L12 17.98C11.24 18.45 10.2 17.92 10.2 16.99V13.91C10.2 13.5 9.97 12.98 9.73 12.69L7.52 10.36C7.23 10.08 7 9.54999 7 9.19999V7.86999C7 7.16999 7.52 6.64999 8.16 6.64999Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Sound = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M3 8.25V15.75' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M7.5 5.75V18.25' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M12 3.25V20.75' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M16.5 5.75V18.25' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M21 8.25V15.75' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Story = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M16.42 7.95C18.86 10.39 18.86 14.35 16.42 16.79C13.98 19.23 10.02 19.23 7.58 16.79C5.14 14.35 5.14 10.39 7.58 7.95C10.02 5.51 13.98 5.51 16.42 7.95Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M8.24999 21.64C6.24999 20.84 4.49999 19.39 3.33999 17.38C2.19999 15.41 1.81999 13.22 2.08999 11.13'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M5.84998 4.47998C7.54998 3.14998 9.67997 2.35999 12 2.35999C14.27 2.35999 16.36 3.12997 18.04 4.40997'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M15.75 21.64C17.75 20.84 19.5 19.39 20.66 17.38C21.8 15.41 22.18 13.22 21.91 11.13' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Slider = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M15 22H9C6.5 22 5 20.2 5 18V6C5 3.8 6.5 2 9 2H15C17.5 2 19 3.8 19 6V18C19 20.2 17.5 22 15 22Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M5 16.01H19' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M2 4V20' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M22 4V20' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Status = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M2.45 14.97C3.52 18.41 6.4 21.06 9.98 21.79' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M2.05 10.98C2.56 5.93 6.82 2 12 2C17.18 2 21.44 5.94 21.95 10.98'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M14.01 21.8C17.58 21.07 20.45 18.45 21.54 15.02' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const WifiSquare = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M6 9.96001C9.63 7.15001 14.37 7.15001 18 9.96001' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M7.60001 13.05C10.27 10.99 13.74 10.99 16.41 13.05' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9.8 16.14C11.13 15.11 12.87 15.11 14.2 16.14' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Box = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M18.67 18.67L20.89 17.56V14.78M14.22 9.78L12 10.89L14.22 9.78ZM12 10.89L9.78 9.78L12 10.89ZM12 10.89V13.67V10.89ZM20.89 6.44L18.67 7.55L20.89 6.44ZM20.89 6.44L18.67 5.33L20.89 6.44ZM20.89 6.44V9.22V6.44ZM14.22 3.11L12 2L9.78 3.11H14.22ZM3.11 6.44L5.33 5.33L3.11 6.44ZM3.11 6.44L5.33 7.55L3.11 6.44ZM3.11 6.44V9.22V6.44ZM12 22L9.78 20.89L12 22ZM12 22L14.22 20.89L12 22ZM12 22V19.22V22ZM5.33 18.67L3.11 17.56V14.78L5.33 18.67Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const TrashSquare = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M17.9 9.05C15.72 8.83 13.52 8.72 11.33 8.72C10.03 8.72 8.73 8.79 7.44 8.92L6.10001 9.05'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M9.71002 8.39L9.85002 7.53C9.95002 6.91 10.03 6.44 11.14 6.44H12.86C13.97 6.44 14.05 6.93 14.15 7.53L14.29 8.38'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M16.49 9.13L16.06 15.73C15.99 16.76 15.93 17.56 14.1 17.56H9.89C8.06 17.56 7.99999 16.76 7.92999 15.73L7.5 9.13'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const Wifi = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M4.91 11.84C9.21 8.52001 14.8 8.52001 19.1 11.84' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M2 8.35998C8.06 3.67998 15.94 3.67998 22 8.35998' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6.78998 15.49C9.93998 13.05 14.05 13.05 17.2 15.49' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9.39999 19.15C10.98 17.93 13.03 17.93 14.61 19.15' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Speedmeter = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M19.14 19.5C20.91 17.7 22 15.22 22 12.5C22 6.98 17.52 2.5 12 2.5C6.48 2.5 2 6.98 2 12.5C2 15.22 3.08 17.68 4.84 19.49'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 21.5C13.8667 21.5 15.38 19.9867 15.38 18.12C15.38 16.2533 13.8667 14.74 12 14.74C10.1333 14.74 8.62 16.2533 8.62 18.12C8.62 19.9867 10.1333 21.5 12 21.5Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M15.25 12H16C16.82 12 17.5 11.33 17.5 10.5C17.5 9.68 16.82 9 16 9C15.18 9 14.5 9.67 14.5 10.5V11.25C14.5 11.66 14.84 12 15.25 12Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const Diamonds = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M16.29 2.14999H7.70002C6.00002 2.14999 5.25001 2.99999 4.79001 4.03999L2.23001 9.79999C1.77001 10.84 2.02001 12.39 2.79001 13.23L9.65001 20.77C10.95 22.19 13.07 22.19 14.36 20.77L21.21 13.22C21.98 12.37 22.23 10.83 21.76 9.78999L19.2 4.02999C18.74 2.99999 17.99 2.14999 16.29 2.14999Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M3.5 8H20.5' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Level = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M2.20001 14.02C3.13001 18.58 7.16002 22 12 22C16.82 22 20.84 18.59 21.79 14.05' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M21.81 10.06C20.91 5.46 16.86 2 12 2C7.17002 2 3.14001 5.43001 2.20001 9.98001' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const Judge = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M20.01 18.51L15.06 13.56' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M15.06 13.56L11.52 17.1C10.74 17.88 9.47 17.88 8.69 17.1L4.44999 12.86C3.66999 12.08 3.66999 10.81 4.44999 10.03L11.52 2.96C12.3 2.18 13.57 2.18 14.35 2.96L18.59 7.20002C19.37 7.98002 19.37 9.25001 18.59 10.03L15.06 13.56Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M2 21H8' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6.56 7.92001L13.63 14.99' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Lamp = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M20.78 13.65V18.59H3.21997V13.65C3.21997 8.82999 7.11997 4.92999 11.94 4.92999H12.06C16.88 4.92999 20.78 8.82999 20.78 13.65Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M12 2V4.92999' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M15.65 18.59C15.52 20.5 13.93 22 12 22C10.07 22 8.47998 20.5 8.34998 18.59H15.65Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Tree = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M16.17 10.06H7.82998C6.64998 10.06 6.23998 9.27 6.92998 8.31L11.1 2.47001C11.59 1.77001 12.41 1.77001 12.89 2.47001L17.06 8.31C17.76 9.27 17.35 10.06 16.17 10.06Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M17.59 18H6.42001C4.84001 18 4.30001 16.95 5.23001 15.67L9.22 10.06H14.79L18.78 15.67C19.71 16.95 19.17 18 17.59 18Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M12 22V18' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Bubble = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M15.59 12.26C18.4232 12.26 20.72 9.96323 20.72 7.13C20.72 4.29678 18.4232 2 15.59 2C12.7568 2 10.46 4.29678 10.46 7.13C10.46 9.96323 12.7568 12.26 15.59 12.26Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
    />
    <path
      d='M6.35999 19.44C8.06102 19.44 9.44 18.0611 9.44 16.36C9.44 14.659 8.06102 13.28 6.35999 13.28C4.65895 13.28 3.28 14.659 3.28 16.36C3.28 18.0611 4.65895 19.44 6.35999 19.44Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
    />
    <path
      d='M16.62 22C18.0338 22 19.18 20.8539 19.18 19.44C19.18 18.0262 18.0338 16.88 16.62 16.88C15.2061 16.88 14.06 18.0262 14.06 19.44C14.06 20.8539 15.2061 22 16.62 22Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
    />
  </svg>
)
const Mirror = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12 18C16.4183 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 7.58172 18 12 18Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M6 22H18' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const TagRight = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M4.21995 3.10001H15.6599C16.3399 3.10001 17.19 3.57001 17.55 4.15001L21.73 10.83C22.13 11.48 22.09 12.5 21.63 13.11L16.45 20.01C16.08 20.5 15.28 20.9 14.67 20.9H4.21995C2.46995 20.9 1.40999 18.98 2.32999 17.49L5.09995 13.06C5.46995 12.47 5.46995 11.51 5.09995 10.92L2.32999 6.49001C1.40999 5.02001 2.47995 3.10001 4.21995 3.10001Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const Ghost = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M22 20.07V12.18C22 6.57999 17.5 2 12 2C6.5 2 2 6.57999 2 12.18V20.07C2 21.33 2.74998 21.67 3.66998 20.83L4.66998 19.92C5.03998 19.58 5.64001 19.58 6.01001 19.92L8.01001 21.75C8.38001 22.09 8.97998 22.09 9.34998 21.75L11.35 19.92C11.72 19.58 12.32 19.58 12.69 19.92L14.69 21.75C15.06 22.09 15.66 22.09 16.03 21.75L18.03 19.92C18.4 19.58 19 19.58 19.37 19.92L20.37 20.83C21.25 21.67 22 21.33 22 20.07Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M8 14C10.37 15.78 13.63 15.78 16 14' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const Milk = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M18 15V19C18 20.65 16.65 22 15 22H9C7.35 22 6 20.65 6 19V13.98L9.89001 14C10.62 14 11.34 14.17 12 14.5C12.66 14.83 13.38 15 14.12 15H18Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M18 10.83V15H14.12C13.38 15 12.66 14.83 12 14.5C11.34 14.17 10.62 14 9.89001 14L6 13.98V10.83C6 10.37 6.26003 9.74 6.59003 9.41L8.71002 7.28999C8.89002 7.10999 9 6.85 9 6.59V5H15V6.59C15 6.85 15.11 7.10999 15.29 7.28999L17.41 9.41C17.74 9.74 18 10.37 18 10.83Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M18 16V15' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6 14.98V13.98' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M14.5 5H9.5C8.67 5 8 4.32 8 3.5C8 2.68 8.67 2 9.5 2H14.5C15.33 2 16 2.68 16 3.5C16 4.32 15.33 5 14.5 5Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const Ranking = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M8.67 14H4C2.9 14 2 14.9 2 16V22H8.67V14Z' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M13.33 10H10.66C9.56 10 8.66 10.9 8.66 12V22H15.33V12C15.33 10.9 14.44 10 13.33 10Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M20 17H15.33V22H22V19C22 17.9 21.1 17 20 17Z' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M12.52 2.07001L13.05 3.13C13.12 3.28 13.31 3.42 13.47 3.44L14.43 3.60001C15.04 3.70001 15.19 4.14999 14.75 4.57999L14 5.32999C13.87 5.45999 13.8 5.69999 13.84 5.86999L14.05 6.79001C14.22 7.52001 13.83 7.80001 13.19 7.42001L12.29 6.89001C12.13 6.79001 11.86 6.79001 11.7 6.89001L10.8 7.42001C10.16 7.80001 9.76998 7.52001 9.93998 6.79001L10.15 5.86999C10.19 5.69999 10.12 5.44999 9.98999 5.32999L9.24999 4.59C8.80999 4.15 8.94999 3.70998 9.56999 3.60998L10.53 3.45001C10.69 3.42001 10.88 3.28001 10.95 3.14001L11.48 2.07999C11.77 1.49999 12.23 1.50001 12.52 2.07001Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const MouseSquare = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M22 12V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H12' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M20.96 17.84L19.33 18.39C18.88 18.54 18.52 18.89 18.37 19.35L17.82 20.98C17.35 22.39 15.37 22.36 14.93 20.95L13.08 15C12.72 13.82 13.81 12.72 14.98 13.09L20.94 14.94C22.34 15.38 22.36 17.37 20.96 17.84Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const MouseCircle = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M20.96 17.84L19.33 18.39C18.88 18.54 18.52 18.89 18.37 19.35L17.82 20.98C17.35 22.39 15.37 22.36 14.93 20.95L13.08 15C12.72 13.82 13.81 12.72 14.98 13.09L20.94 14.94C22.34 15.38 22.36 17.37 20.96 17.84Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Mouse = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M16.15 12.83L14.42 13.41C13.94 13.57 13.57 13.94 13.41 14.42L12.83 16.15C12.34 17.64 10.24 17.61 9.78 16.12L7.83 9.84C7.45 8.59 8.6 7.44001 9.83 7.82001L16.12 9.76999C17.61 10.24 17.63 12.34 16.15 12.83Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const Warning = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M14.9 2H9.10001C8.42001 2 7.46 2.4 6.98 2.88L2.88 6.98001C2.4 7.46001 2 8.42001 2 9.10001V14.9C2 15.58 2.4 16.54 2.88 17.02L6.98 21.12C7.46 21.6 8.42001 22 9.10001 22H14.9C15.58 22 16.54 21.6 17.02 21.12L21.12 17.02C21.6 16.54 22 15.58 22 14.9V9.10001C22 8.42001 21.6 7.46001 21.12 6.98001L17.02 2.88C16.54 2.4 15.58 2 14.9 2Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M4.94 19.08L19.08 4.94' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const CloseOctagon = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M14.9 2H9.10001C8.42001 2 7.46 2.4 6.98 2.88L2.88 6.98001C2.4 7.46001 2 8.42001 2 9.10001V14.9C2 15.58 2.4 16.54 2.88 17.02L6.98 21.12C7.46 21.6 8.42001 22 9.10001 22H14.9C15.58 22 16.54 21.6 17.02 21.12L21.12 17.02C21.6 16.54 22 15.58 22 14.9V9.10001C22 8.42001 21.6 7.46001 21.12 6.98001L17.02 2.88C16.54 2.4 15.58 2 14.9 2Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M8.5 15.5L15.5 8.5' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M15.5 15.5L8.5 8.5' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Close = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M7.75735 7.75739L16.2426 16.2427' stroke={color} stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
    <path d='M7.75736 16.2427L16.2426 7.75739' stroke={color} stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
  </svg>
)
const Warning2 = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M12 7.75V13' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M21.08 8.58003V15.42C21.08 16.54 20.48 17.58 19.51 18.15L13.57 21.58C12.6 22.14 11.4 22.14 10.42 21.58L4.47998 18.15C3.50998 17.59 2.90997 16.55 2.90997 15.42V8.58003C2.90997 7.46003 3.50998 6.41999 4.47998 5.84999L10.42 2.42C11.39 1.86 12.59 1.86 13.57 2.42L19.51 5.84999C20.48 6.41999 21.08 7.45003 21.08 8.58003Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M12 16.2V16.3' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Broom = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M9.87 5.66998L6.45 7.74999L4.89001 5.19C4.32001 4.25 4.62 3.01 5.56 2.44C6.5 1.87 7.74 2.16998 8.31 3.10998L9.87 5.66998Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M11.82 9.15997L8.66001 11.08C6.82001 12.2 6.26 14.46 7.15 16.26L9.2 20.44C9.86 21.79 11.46 22.26 12.74 21.47L19.17 17.56C20.46 16.78 20.77 15.15 19.88 13.94L17.11 10.2C15.91 8.58001 13.66 8.03997 11.82 9.15997Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M10.7566 5.09797L5.63205 8.21857L7.71245 11.635L12.837 8.51437L10.7566 5.09797Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M14.31 16.81L15.96 19.52' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M11.75 18.37L13.4 21.08' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M16.87 15.25L18.52 17.96' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Signpost = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M17.22 2H8.96005C8.56005 2 8.18002 2.14 7.87002 2.38L5.68002 4.13C4.80002 4.83 4.80002 6.15999 5.68002 6.85999L7.87002 8.60999C8.18002 8.85999 8.57005 8.98999 8.96005 8.98999H17.22C18.19 8.98999 18.97 8.20999 18.97 7.23999V3.73999C18.97 2.77999 18.19 2 17.22 2Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M6.79999 12H15.06C15.46 12 15.84 12.14 16.15 12.38L18.34 14.13C19.22 14.83 19.22 16.16 18.34 16.86L16.15 18.61C15.84 18.86 15.45 18.99 15.06 18.99H6.79999C5.82999 18.99 5.04999 18.21 5.04999 17.24V13.74C5.04999 12.78 5.82999 12 6.79999 12Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M12 12V9' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M12 22V19' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9 22H15' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const FilterRemove = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M13.41 20.79L12 21.7C10.69 22.51 8.87 21.6 8.87 19.98V14.63C8.87 13.92 8.47 13.01 8.06 12.51L4.22 8.46997C3.71 7.95997 3.31 7.06001 3.31 6.45001V4.13C3.31 2.92 4.22 2.01001 5.33 2.01001H18.67C19.78 2.01001 20.69 2.92003 20.69 4.03003V6.25C20.69 7.06 20.18 8.07001 19.68 8.57001'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M21.63 14.75C21.63 15.64 21.38 16.48 20.94 17.2C20.12 18.58 18.61 19.5 16.88 19.5C15.15 19.5 13.64 18.57 12.82 17.2C12.38 16.49 12.13 15.64 12.13 14.75C12.13 12.13 14.26 10 16.88 10C19.5 10 21.63 12.13 21.63 14.75Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M18.15 15.99L15.64 13.48' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M18.13 13.51L15.62 16.02' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M20.69 4.02002V6.23999C20.69 7.04999 20.18 8.06001 19.68 8.57001L17.92 10.12C17.59 10.04 17.24 10 16.88 10C14.26 10 12.13 12.13 12.13 14.75C12.13 15.64 12.38 16.48 12.82 17.2C13.19 17.82 13.7 18.35 14.32 18.73V19.07C14.32 19.68 13.92 20.49 13.41 20.79L12 21.7C10.69 22.51 8.87 21.6 8.87 19.98V14.63C8.87 13.92 8.46 13.01 8.06 12.51L4.22 8.46997C3.72 7.95997 3.31 7.05001 3.31 6.45001V4.12C3.31 2.91 4.22 2 5.33 2H18.67C19.78 2 20.69 2.91002 20.69 4.02002Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const FilterAdd = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M21.63 14.75C21.63 15.64 21.38 16.48 20.94 17.2C20.12 18.58 18.61 19.5 16.88 19.5C15.15 19.5 13.64 18.57 12.82 17.2C12.38 16.49 12.13 15.64 12.13 14.75C12.13 12.13 14.26 10 16.88 10C19.5 10 21.63 12.13 21.63 14.75Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M18.66 14.73H15.11' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M16.88 13V16.55' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M20.69 4.02002V6.23999C20.69 7.04999 20.18 8.06001 19.68 8.57001L17.92 10.12C17.59 10.04 17.24 10 16.88 10C14.26 10 12.13 12.13 12.13 14.75C12.13 15.64 12.38 16.48 12.82 17.2C13.19 17.82 13.7 18.35 14.32 18.73V19.07C14.32 19.68 13.92 20.49 13.41 20.79L12 21.7C10.69 22.51 8.87 21.6 8.87 19.98V14.63C8.87 13.92 8.46 13.01 8.06 12.51L4.22 8.46997C3.72 7.95997 3.31 7.05001 3.31 6.45001V4.12C3.31 2.91 4.22 2 5.33 2H18.67C19.78 2 20.69 2.91002 20.69 4.02002Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const FilterSearch = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M14.32 19.07C14.32 19.68 13.92 20.48 13.41 20.79L12 21.7C10.69 22.51 8.87 21.6 8.87 19.98V14.63C8.87 13.92 8.47 13.01 8.06 12.51L4.21997 8.47C3.70997 7.96 3.31 7.06001 3.31 6.45001V4.13C3.31 2.92 4.22002 2.01001 5.33002 2.01001H18.67C19.78 2.01001 20.69 2.92 20.69 4.03V6.25C20.69 7.06 20.18 8.07001 19.68 8.57001'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M16.07 16.52C17.8373 16.52 19.27 15.0873 19.27 13.32C19.27 11.5527 17.8373 10.12 16.07 10.12C14.3027 10.12 12.87 11.5527 12.87 13.32C12.87 15.0873 14.3027 16.52 16.07 16.52Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M19.87 17.12L18.87 16.12' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const FilterEdit = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M13.41 20.79L12 21.7C10.69 22.51 8.87 21.6 8.87 19.98V14.63C8.87 13.92 8.47 13.01 8.06 12.51L4.21997 8.47C3.70997 7.96 3.31 7.06001 3.31 6.45001V4.13C3.31 2.92 4.22002 2.01001 5.33002 2.01001H18.67C19.78 2.01001 20.69 2.92 20.69 4.03V6.25C20.69 7.06 20.18 8.07001 19.68 8.57001'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M17.08 11.89L13.54 15.43C13.4 15.57 13.27 15.83 13.24 16.02L13.05 17.37C12.98 17.86 13.32 18.2 13.81 18.13L15.1599 17.94C15.3499 17.91 15.62 17.78 15.75 17.64L19.29 14.1C19.9 13.49 20.19 12.78 19.29 11.88C18.4 10.99 17.69 11.28 17.08 11.89Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M16.58 12.39C16.88 13.47 17.72 14.31 18.8 14.61' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const FilterTick = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M21.63 14.75C21.63 15.64 21.39 16.48 20.95 17.2C20.13 18.57 18.62 19.5 16.88 19.5C15.94 19.5 15.06 19.22 14.32 18.73C13.7 18.35 13.19 17.82 12.82 17.2C12.38 16.48 12.13 15.64 12.13 14.75C12.13 12.13 14.26 10 16.88 10C17.24 10 17.59 10.04 17.92 10.12C20.05 10.59 21.63 12.49 21.63 14.75Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M15.03 14.75L16.2 15.92L18.73 13.58' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M20.69 4.01999V6.23999C20.69 7.04999 20.18 8.06001 19.68 8.57001L17.92 10.12C17.59 10.04 17.24 10 16.88 10C14.26 10 12.13 12.13 12.13 14.75C12.13 15.64 12.38 16.48 12.82 17.2C13.19 17.82 13.7 18.35 14.32 18.73V19.07C14.32 19.68 13.92 20.49 13.41 20.79L12 21.7C10.69 22.51 8.87 21.6 8.87 19.98V14.63C8.87 13.92 8.46 13.01 8.06 12.51L4.21997 8.47C3.71997 7.96 3.31 7.05001 3.31 6.45001V4.12C3.31 2.91 4.22002 2 5.33002 2H18.67C19.78 2 20.69 2.90999 20.69 4.01999Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const Home3 = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M10.07 2.82003L3.14002 8.37002C2.36002 8.99002 1.86002 10.3 2.03002 11.28L3.36002 19.24C3.60002 20.66 4.96002 21.81 6.40002 21.81H17.6C19.03 21.81 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.99002 20.86 8.37002L13.93 2.83004C12.86 1.97004 11.13 1.97003 10.07 2.82003Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 15.5C13.3807 15.5 14.5 14.3807 14.5 13C14.5 11.6193 13.3807 10.5 12 10.5C10.6193 10.5 9.5 11.6193 9.5 13C9.5 14.3807 10.6193 15.5 12 15.5Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const SmartHome = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M11.4 21.8101H17.6C19.03 21.8101 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.99002 20.86 8.37002L13.93 2.82998C12.86 1.96998 11.13 1.96997 10.07 2.81997L3.14004 8.37002C2.36004 8.99002 1.86002 10.3 2.03002 11.28L2.31002 12.96'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M2 19C3.76 19.04 4.96 20.24 5 22' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M8 22C7.99 21.24 7.86 20.53 7.63 19.88C7.04 18.21 5.78 16.96 4.12 16.37C3.47 16.14 2.76 16.01 2 16'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M1.9955 22H2.0045' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const WifiHome = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M10.07 2.81997L3.14001 8.37002C2.36001 8.99002 1.85999 10.3 2.02999 11.28L3.35998 19.24C3.59998 20.66 4.95998 21.8101 6.39998 21.8101H17.6C19.03 21.8101 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.99002 20.86 8.37002L13.93 2.82998C12.86 1.96998 11.13 1.96997 10.07 2.81997Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M9.88 14.38C11.15 13.17 12.85 13.17 14.12 14.38' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M16.24 12.2601C15.7 11.7301 15.1 11.3201 14.48 11.0201C12.89 10.2601 11.11 10.2601 9.51001 11.0201C8.89001 11.3201 8.3 11.7301 7.75 12.2601'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M11.9955 17H12.0045' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const SafeHome = ({ color = 'white', size = 20, className = ''}) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M23 15.37V17.5601C23 20.0001 21.22 22.3 18.8 22.97C18.63 23.01 18.45 23.01 18.29 22.97C17.11 22.65 16.07 21.93 15.34 21C14.55 20.02 14.09 18.8101 14.09 17.5601V15.37C14.09 14.95 14.4 14.49 14.78 14.33L17.56 13.1899C18.19 12.9399 18.89 12.9399 19.52 13.1899L20.52 13.6L22.31 14.33C22.69 14.49 23 14.95 23 15.37Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M20.95 11.0101L20.52 13.6L19.52 13.19C18.89 12.94 18.19 12.94 17.56 13.19L14.78 14.33C14.4 14.49 14.09 14.95 14.09 15.37V17.5601C14.09 18.8101 14.55 20.02 15.34 21H6.18C4.81 21 3.52002 19.9101 3.29002 18.5601L2.03001 11.0101C1.87001 10.0801 2.33999 8.83004 3.07999 8.24004L9.66001 2.98003C10.67 2.17003 12.31 2.17004 13.32 2.99004L19.9 8.24004C20.63 8.83004 21.11 10.0801 20.95 11.0101Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default {
  SafeHome,
  Trash,
  BatteryEmpty,
  BatteryEmpty2,
  BatteryFull,
  BatteryFull2,
  BatteryCharging,
  BatteryDisable,
  Home,
  Home2,
  MoreSquare,
  TickCircle,
  AddCircle,
  MinusCircle,
  CloseCircle,
  MoreCircle,
  InfoCircle,
  Danger,
  Add,
  Minus,
  AddSquare,
  MinusSquare,
  Tick,
  TickSquare,
  CloseSquare,
  Sort,
  Send,
  Send2,
  Share,
  Flash,
  FlasSlash,
  FlashCircle,
  Slash,
  Cake,
  Grammerly,
  Crown,
  Crown2,
  Flag,
  Flag2,
  Cup,
  EmojiHappy,
  EmojiNormal,
  EmojiSad,
  TagCross,
  Menu,
  CD,
  Chart,
  Archive,
  Chrome,
  Instagram,
  Coffee,
  Pet,
  HappyEmoji,
  Reserve,
  Sticker,
  Computing,
  Verify,
  Information,
  AutoBrightness,
  Traingle,
  ThreeCube,
  Glass,
  Discover,
  Weight,
  Filter,
  FilterSquare,
  Sound,
  Story,
  Slider,
  Status,
  WifiSquare,
  Box,
  TrashSquare,
  Wifi,
  Speedmeter,
  Diamonds,
  Level,
  Judge,
  Lamp,
  Tree,
  Bubble,
  Mirror,
  TagRight,
  Ghost,
  Milk,
  Ranking,
  MouseSquare,
  MouseCircle,
  Mouse,
  Warning,
  CloseOctagon,
  Close,
  Warning2,
  Broom,
  Signpost,
  FilterRemove,
  FilterAdd,
  FilterSearch,
  FilterEdit,
  FilterTick,
  Home3,
  SmartHome,
  WifiHome,
}
