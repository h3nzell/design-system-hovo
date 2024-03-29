import React from 'react'

const DirectBox = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M7 12C3 12 3 13.79 3 16V17C3 19.76 3 22 8 22H16C20 22 21 19.76 21 17V16C21 13.79 21 12 17 12C16 12 15.72 12.21 15.2 12.6L14.18 13.68C13 14.94 11 14.94 9.81 13.68L8.8 12.6C8.28 12.21 8 12 7 12Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M19 12V6C19 3.79 19 2 15 2H9C5 2 5 3.79 5 6V12' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const DirectBoxNoti = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M7 12C3 12 3 13.79 3 16V17C3 19.76 3 22 8 22H16C20 22 21 19.76 21 17V16C21 13.79 21 12 17 12C16 12 15.72 12.21 15.2 12.6L14.18 13.68C13 14.94 11 14.94 9.81 13.68L8.8 12.6C8.28 12.21 8 12 7 12Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M19 12V6C19 3.79 19 2 15 2H9C5 2 5 3.79 5 6V12' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M10.55 9.22998H13.88' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9.71997 6.22998H14.72' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const DirectBoxReceive = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M12 2V8L14 6' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M12 8L10 6' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M7 12C3 12 3 13.79 3 16V17C3 19.76 3 22 8 22H16C20 22 21 19.76 21 17V16C21 13.79 21 12 17 12C16 12 15.72 12.21 15.2 12.6L14.18 13.68C13 14.94 11 14.94 9.81 13.68L8.8 12.6C8.28 12.21 8 12 7 12Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M5 12V8.00004C5 5.99004 5 4.33004 8 4.04004' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M19 12V8.00004C19 5.99004 19 4.33004 16 4.04004' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const DirectBoxSend = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M12 8V2L10 4' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M12 2L14 4' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M7 12C3 12 3 13.79 3 16V17C3 19.76 3 22 8 22H16C20 22 21 19.76 21 17V16C21 13.79 21 12 17 12C16 12 15.72 12.21 15.2 12.6L14.18 13.68C13 14.94 11 14.94 9.81 13.68L8.8 12.6C8.28 12.21 8 12 7 12Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M5 12V10C5 7.99004 5 6.33004 8 6.04004' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M19 12V10C19 7.99004 19 6.33004 16 6.04004' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const DirectNormal = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M2 13H5.76C6.52 13 7.21 13.43 7.55 14.11L8.44 15.9C9 17 10 17 10.24 17H13.77C14.53 17 15.22 16.57 15.56 15.89L16.45 14.1C16.79 13.42 17.48 12.99 18.24 12.99H21.98'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const Direct = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M2 13H5.76C6.52 13 7.21 13.43 7.55 14.11L8.44 15.9C9 17 10 17 10.24 17H13.77C14.53 17 15.22 16.57 15.56 15.89L16.45 14.1C16.79 13.42 17.48 12.99 18.24 12.99H21.98'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M10.34 7H13.67' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9.5 10H14.5' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const DirectNoti = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M1.97998 13H5.76998C6.52998 13 7.21998 13.43 7.55998 14.11L8.44998 15.9C8.99998 17 9.99998 17 10.24 17H13.77C14.53 17 15.22 16.57 15.56 15.89L16.45 14.1C16.79 13.42 17.48 12.99 18.24 12.99H21.98'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M14 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const DirectInbox = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M12 2V9L14 7' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M12 9L10 7' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M1.97998 13H6.38998C6.76998 13 7.10998 13.21 7.27998 13.55L8.44998 15.89C8.78998 16.57 9.47998 17 10.24 17H13.77C14.53 17 15.22 16.57 15.56 15.89L16.73 13.55C16.9 13.21 17.25 13 17.62 13H21.98'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M7 4.13C3.46 4.65 2 6.73 2 11V15C2 20 4 22 9 22H15C20 22 22 20 22 15V11C22 6.73 20.54 4.65 17 4.13'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const DirectBox2 = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M12 9V2L10 4' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M12 2L14 4' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M1.97998 13H6.38998C6.76998 13 7.10998 13.21 7.27998 13.55L8.44998 15.89C8.78998 16.57 9.47998 17 10.24 17H13.77C14.53 17 15.22 16.57 15.56 15.89L16.73 13.55C16.9 13.21 17.25 13 17.62 13H21.98'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M7 5.13C3.46 5.65 2 7.73 2 12V15C2 20 4 22 9 22H15C20 22 22 20 22 15V12C22 7.73 20.54 5.65 17 5.13'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const Message = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M15.9965 11H16.0054' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M11.9955 11H12.0045' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M7.99451 11H8.00349' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const MessageFavorite = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H12'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M15.2 4.61996C14.87 3.62996 15.26 2.40996 16.34 2.06996C16.9 1.89996 17.6 2.03996 18 2.56996C18.38 2.01996 19.1 1.89996 19.66 2.06996C20.74 2.39996 21.13 3.62996 20.8 4.61996C20.29 6.18996 18.5 6.99996 18 6.99996C17.5 6.99996 15.73 6.19996 15.2 4.61996Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M15.9965 11H16.0054' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M11.9955 11H12.0045' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M7.99451 11H8.00349' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const MessageNoti = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M22 10V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H14'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M19.5 7C20.8807 7 22 5.88071 22 4.5C22 3.11929 20.8807 2 19.5 2C18.1193 2 17 3.11929 17 4.5C17 5.88071 18.1193 7 19.5 7Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M15.9965 11H16.0054' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M11.9955 11H12.0045' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M7.99451 11H8.00349' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const MessageSearch = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M13.2 21.37C12.54 22.25 11.46 22.25 10.8 21.37L9.29999 19.37C9.12999 19.15 8.77 18.97 8.5 18.97H8C4 18.97 2 17.97 2 12.97V7.96997C2 3.96997 4 1.96997 8 1.96997H16C20 1.96997 22 3.96997 22 7.96997V12.97'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M18.2 21.4C19.9673 21.4 21.4 19.9673 21.4 18.2C21.4 16.4327 19.9673 15 18.2 15C16.4327 15 15 16.4327 15 18.2C15 19.9673 16.4327 21.4 18.2 21.4Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M22 22L21 21' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M15.9965 11H16.0054' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M11.9955 11H12.0045' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M7.99451 11H8.00349' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const MessageText = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M7 8H17' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M7 13H13' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const DeviceMessage = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M20 12.2V13.9C20 17.05 18.2 18.4 15.5 18.4H6.5C3.8 18.4 2 17.05 2 13.9V8.5C2 5.35 3.8 4 6.5 4H9.2C9.07 4.38 9 4.8 9 5.25V9.15002C9 10.12 9.32 10.94 9.89 11.51C10.46 12.08 11.28 12.4 12.25 12.4V13.79C12.25 14.3 12.83 14.61 13.26 14.33L16.15 12.4H18.75C19.2 12.4 19.62 12.33 20 12.2Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M22 5.25V9.15002C22 10.64 21.24 11.76 20 12.2C19.62 12.33 19.2 12.4 18.75 12.4H16.15L13.26 14.33C12.83 14.61 12.25 14.3 12.25 13.79V12.4C11.28 12.4 10.46 12.08 9.89 11.51C9.32 10.94 9 10.12 9 9.15002V5.25C9 4.8 9.07 4.38 9.2 4C9.64 2.76 10.76 2 12.25 2H18.75C20.7 2 22 3.3 22 5.25Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M7.40002 22H14.6' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M11 18.4V22' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M18.4955 7.25H18.5045' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M15.6957 7.25H15.7047' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M12.8954 7.25H12.9044' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Messages = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M17 9C17 12.87 13.64 16 9.5 16L8.57001 17.12L8.02 17.78C7.55 18.34 6.65 18.22 6.34 17.55L5 14.6C3.18 13.32 2 11.29 2 9C2 5.13 5.36 2 9.5 2C12.52 2 15.13 3.67001 16.3 6.07001C16.75 6.96001 17 7.95 17 9Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M22.0001 12.86C22.0001 15.15 20.8201 17.1801 19.0001 18.4601L17.6601 21.41C17.3501 22.08 16.4501 22.2101 15.9801 21.6401L14.5001 19.86C12.0801 19.86 9.92007 18.7901 8.57007 17.1201L9.50006 16.0001C13.6401 16.0001 17.0001 12.8701 17.0001 9.00006C17.0001 7.95006 16.7501 6.96007 16.3001 6.07007C19.5701 6.82007 22.0001 9.58005 22.0001 12.86Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M7 9H12' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Message2 = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M18.47 16.83L18.86 19.99C18.96 20.82 18.07 21.4 17.36 20.97L13.17 18.48C12.71 18.48 12.26 18.45 11.82 18.39C12.56 17.52 13 16.42 13 15.23C13 12.39 10.54 10.09 7.49997 10.09C6.33997 10.09 5.26997 10.42 4.37997 11C4.34997 10.75 4.33997 10.5 4.33997 10.24C4.33997 5.68999 8.28997 2 13.17 2C18.05 2 22 5.68999 22 10.24C22 12.94 20.61 15.33 18.47 16.83Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M13 15.23C13 16.42 12.56 17.52 11.82 18.39C10.83 19.59 9.26 20.36 7.5 20.36L4.89 21.91C4.45 22.18 3.89 21.81 3.95 21.3L4.2 19.33C2.86 18.4 2 16.91 2 15.23C2 13.47 2.94 11.92 4.38 11C5.27 10.42 6.34 10.09 7.5 10.09C10.54 10.09 13 12.39 13 15.23Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const Message3 = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M22 6.25V11.35C22 12.62 21.58 13.69 20.83 14.43C20.09 15.18 19.02 15.6 17.75 15.6V17.41C17.75 18.09 16.99 18.5 16.43 18.12L15.46 17.48C15.55 17.17 15.59 16.83 15.59 16.47V12.4C15.59 10.36 14.23 9 12.19 9H5.39999C5.25999 9 5.13 9.01002 5 9.02002V6.25C5 3.7 6.7 2 9.25 2H17.75C20.3 2 22 3.7 22 6.25Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M15.59 12.4V16.47C15.59 16.83 15.55 17.17 15.46 17.48C15.09 18.95 13.87 19.87 12.19 19.87H9.47L6.45 21.88C6 22.19 5.39999 21.86 5.39999 21.32V19.87C4.37999 19.87 3.53 19.53 2.94 18.94C2.34 18.34 2 17.49 2 16.47V12.4C2 10.5 3.18 9.19002 5 9.02002C5.13 9.01002 5.25999 9 5.39999 9H12.19C14.23 9 15.59 10.36 15.59 12.4Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const Sms = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const SmsTracking = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M2 8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5H7'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M2 16.5H8' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M2 12.5H5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const SmsNoti = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M22 10.5V15.5C22 19 20 20.5 17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H14'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M7 9L10.13 11.5C11.16 12.32 12.85 12.32 13.88 11.5L15.06 10.56' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M19.5 8C20.8807 8 22 6.88071 22 5.5C22 4.11929 20.8807 3 19.5 3C18.1193 3 17 4.11929 17 5.5C17 6.88071 18.1193 8 19.5 8Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const SmsEdit = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V11.5'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M19.21 14.77L15.6701 18.31C15.5301 18.45 15.4 18.71 15.37 18.9L15.18 20.25C15.11 20.74 15.45 21.0801 15.94 21.0101L17.29 20.82C17.48 20.79 17.75 20.66 17.88 20.52L21.4201 16.9801C22.0301 16.3701 22.3201 15.6601 21.4201 14.7601C20.5301 13.8701 19.82 14.16 19.21 14.77Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M18.7001 15.28C19.0001 16.36 19.8401 17.2 20.9201 17.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const SmsStar = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M22 11.5V15.5C22 19 20 20.5 17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H12'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M7 9L10.13 11.5C11.16 12.32 12.85 12.32 13.88 11.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M19.48 2.82L19.76 3.38999C19.9 3.66999 20.25 3.93 20.56 3.99L20.94 4.05C22.08 4.24 22.35 5.08 21.53 5.91L21.18 6.25999C20.95 6.49999 20.82 6.95999 20.89 7.27999L20.94 7.49C21.25 8.87 20.52 9.39999 19.32 8.67999L19.06 8.52999C18.75 8.34999 18.25 8.34999 17.94 8.52999L17.68 8.67999C16.47 9.40999 15.74 8.87 16.06 7.49L16.1099 7.27999C16.1799 6.95999 16.05 6.49999 15.82 6.25999L15.47 5.91C14.65 5.08 14.92 4.24 16.06 4.05L16.44 3.99C16.74 3.94 17.1 3.66999 17.24 3.38999L17.52 2.82C18.06 1.73 18.94 1.73 19.48 2.82Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const SmsSearch = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V11.5'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M18.2 21.4C19.9673 21.4 21.4 19.9673 21.4 18.2C21.4 16.4327 19.9673 15 18.2 15C16.4327 15 15 16.4327 15 18.2C15 19.9673 16.4327 21.4 18.2 21.4Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M22 22L21 21' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const MessageRemove = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M22 7.42999V13.43C22 14.93 21.5 16.18 20.62 17.06C19.75 17.93 18.5 18.43 17 18.43V20.56C17 21.36 16.11 21.84 15.45 21.4L11 18.43H8.88C8.96 18.13 9 17.82 9 17.5C9 16.48 8.61 15.54 7.97 14.83C7.25 14.01 6.18 13.5 5 13.5C3.88 13.5 2.86 13.96 2.13 14.71C2.04 14.31 2 13.88 2 13.43V7.42999C2 4.42999 4 2.42999 7 2.42999H17C20 2.42999 22 4.42999 22 7.42999Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M9 17.5C9 17.82 8.96 18.13 8.88 18.43C8.79 18.83 8.63001 19.22 8.42001 19.56C7.73001 20.72 6.46 21.5 5 21.5C3.97 21.5 3.04 21.11 2.34 20.47C2.04 20.21 1.77999 19.9 1.57999 19.56C1.20999 18.96 1 18.25 1 17.5C1 16.42 1.43 15.43 2.13 14.71C2.86 13.96 3.88 13.5 5 13.5C6.18 13.5 7.25 14.01 7.97 14.83C8.61 15.54 9 16.48 9 17.5Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M6.06995 18.54L3.94995 16.43' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6.04993 16.46L3.92993 18.57' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M8.5 10.5H15.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const MessageAdd = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M22 7.42999V13.43C22 14.93 21.5 16.18 20.62 17.06C19.75 17.93 18.5 18.43 17 18.43V20.56C17 21.36 16.11 21.84 15.45 21.4L11 18.43H8.88C8.96 18.13 9 17.82 9 17.5C9 16.48 8.61 15.54 7.97 14.83C7.25 14.01 6.18 13.5 5 13.5C3.88 13.5 2.86 13.96 2.13 14.71C2.04 14.31 2 13.88 2 13.43V7.42999C2 4.42999 4 2.42999 7 2.42999H17C20 2.42999 22 4.42999 22 7.42999Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M9 17.5C9 17.82 8.96 18.13 8.88 18.43C8.79 18.83 8.63001 19.22 8.42001 19.56C7.73001 20.72 6.46 21.5 5 21.5C3.97 21.5 3.04 21.11 2.34 20.47C2.04 20.21 1.77999 19.9 1.57999 19.56C1.20999 18.96 1 18.25 1 17.5C1 16.42 1.43 15.43 2.13 14.71C2.86 13.96 3.88 13.5 5 13.5C6.18 13.5 7.25 14.01 7.97 14.83C8.61 15.54 9 16.48 9 17.5Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M6.48999 17.48H3.51001' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M5 16.02V19.01' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M8.5 10.5H15.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const MessageTick = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M22 7.42999V13.43C22 14.93 21.5 16.18 20.62 17.06C19.75 17.93 18.5 18.43 17 18.43V20.56C17 21.36 16.11 21.84 15.45 21.4L11 18.43H8.88C8.96 18.13 9 17.82 9 17.5C9 16.48 8.61 15.54 7.97 14.83C7.25 14.01 6.18 13.5 5 13.5C3.88 13.5 2.86 13.96 2.13 14.71C2.04 14.31 2 13.88 2 13.43V7.42999C2 4.42999 4 2.42999 7 2.42999H17C20 2.42999 22 4.42999 22 7.42999Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M9 17.5C9 18.25 8.79001 18.96 8.42001 19.56C8.21001 19.92 7.94 20.24 7.63 20.5C6.93 21.13 6.01 21.5 5 21.5C3.54 21.5 2.26999 20.72 1.57999 19.56C1.20999 18.96 1 18.25 1 17.5C1 16.24 1.58 15.11 2.5 14.38C3.19 13.83 4.06 13.5 5 13.5C7.21 13.5 9 15.29 9 17.5Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M3.43994 17.5L4.42993 18.49L6.55994 16.52' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M8.5 10.5H15.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const MessageTime = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M22 7.42999V13.43C22 14.93 21.5 16.18 20.62 17.06C19.75 17.93 18.5 18.43 17 18.43V20.56C17 21.36 16.11 21.84 15.45 21.4L11 18.43H8.88C8.96 18.13 9 17.82 9 17.5C9 16.48 8.61 15.54 7.97 14.83C7.25 14.01 6.18 13.5 5 13.5C3.88 13.5 2.86 13.96 2.13 14.71C2.04 14.31 2 13.88 2 13.43V7.42999C2 4.42999 4 2.42999 7 2.42999H17C20 2.42999 22 4.42999 22 7.42999Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M9 17.5C9 18.7 8.47001 19.77 7.64001 20.5C6.93001 21.12 6.01 21.5 5 21.5C2.79 21.5 1 19.71 1 17.5C1 16.24 1.58 15.11 2.5 14.38C3.19 13.83 4.06 13.5 5 13.5C7.21 13.5 9 15.29 9 17.5Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M5.25 16.25V17.75L4 18.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M8.5 10.5H15.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Message4 = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M8.5 10.5H15.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M7 18.43H11L15.45 21.39C16.11 21.83 17 21.36 17 20.56V18.43C20 18.43 22 16.43 22 13.43V7.42999C22 4.42999 20 2.42999 17 2.42999H7C4 2.42999 2 4.42999 2 7.42999V13.43C2 16.43 4 18.43 7 18.43Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const Messages2 = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M17.98 10.79V14.79C17.98 15.05 17.97 15.3 17.94 15.54C17.71 18.24 16.12 19.58 13.19 19.58H12.79C12.54 19.58 12.3 19.7 12.15 19.9L10.95 21.5C10.42 22.21 9.56 22.21 9.03 21.5L7.82999 19.9C7.69999 19.73 7.41 19.58 7.19 19.58H6.79001C3.60001 19.58 2 18.79 2 14.79V10.79C2 7.86001 3.35001 6.27001 6.04001 6.04001C6.28001 6.01001 6.53001 6 6.79001 6H13.19C16.38 6 17.98 7.60001 17.98 10.79Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M21.98 6.79001V10.79C21.98 13.73 20.63 15.31 17.94 15.54C17.97 15.3 17.98 15.05 17.98 14.79V10.79C17.98 7.60001 16.38 6 13.19 6H6.79004C6.53004 6 6.28004 6.01001 6.04004 6.04001C6.27004 3.35001 7.86004 2 10.79 2H17.19C20.38 2 21.98 3.60001 21.98 6.79001Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M13.4955 13.25H13.5045' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9.9955 13.25H10.0045' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6.4955 13.25H6.5045' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const MessageCircle = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M17.25 10.18V12.81C17.25 12.98 17.24 13.14 17.22 13.3C17.07 15.07 16.02 15.95 14.1 15.95H13.84C13.68 15.95 13.52 16.03 13.42 16.16L12.63 17.21C12.28 17.68 11.72 17.68 11.37 17.21L10.58 16.16C10.49 16.05 10.3 15.95 10.16 15.95H9.89999C7.79999 15.95 6.75 15.43 6.75 12.8V10.17C6.75 8.25004 7.63999 7.20002 9.39999 7.05002C9.55999 7.03002 9.72001 7.02002 9.89001 7.02002H14.09C16.2 7.04002 17.25 8.09002 17.25 10.18Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
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
const MessageSquare = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M18.28 9.76001V12.9C18.28 13.1 18.27 13.3 18.25 13.49C18.07 15.61 16.82 16.67 14.52 16.67H14.21C14.01 16.67 13.82 16.76 13.71 16.92L12.77 18.18C12.35 18.74 11.68 18.74 11.26 18.18L10.32 16.92C10.22 16.79 9.99001 16.67 9.82001 16.67H9.51001C7.00001 16.67 5.75 16.05 5.75 12.91V9.76999C5.75 7.46999 6.80999 6.22001 8.92999 6.04001C9.11999 6.02001 9.31999 6.01001 9.51999 6.01001H14.55C17.02 6.00001 18.28 7.26001 18.28 9.76001Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const MessageText2 = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M7 9.5H17' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M7 14.5H14' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const MessageMinus = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M8.5 12H15.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const MessageAdd2 = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M8.5 12H15.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M12 15.5V8.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const MessageEdit = ({ color = 'white', size = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M12.91 7.84003L7.72004 13.03C7.52004 13.23 7.33004 13.62 7.29004 13.9L7.01004 15.88C6.91004 16.6 7.41004 17.1 8.13004 17L10.11 16.72C10.39 16.68 10.78 16.49 10.98 16.29L16.17 11.1C17.06 10.21 17.49 9.17003 16.17 7.85003C14.85 6.52003 13.81 6.94003 12.91 7.84003Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M12.17 8.58002C12.61 10.15 13.84 11.39 15.42 11.83' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

export default {
  DirectBox,
  DirectBoxNoti,
  DirectBoxReceive,
  DirectBoxSend,
  DirectNormal,
  Direct,
  DirectNoti,
  DirectInbox,
  DirectBox2,
  Message,
  MessageFavorite,
  MessageNoti,
  MessageSearch,
  MessageText,
  DeviceMessage,
  Messages,
  Message2,
  Message3,
  Sms,
  SmsTracking,
  SmsNoti,
  SmsEdit,
  SmsStar,
  SmsSearch,
  MessageRemove,
  MessageAdd,
  MessageTick,
  MessageTime,
  Message4,
  Messages2,
  MessageCircle,
  MessageSquare,
  MessageText2,
  MessageMinus,
  MessageAdd2,
  MessageEdit,
}
