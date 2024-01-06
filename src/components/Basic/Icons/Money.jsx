import React from 'react'

const WalletAdd = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M17.7514 7.04997C17.5114 7.00997 17.2614 6.99998 17.0014 6.99998H7.00141C6.72141 6.99998 6.45141 7.01998 6.19141 7.05998C6.33141 6.77998 6.53141 6.52001 6.77141 6.28001L10.0214 3.02C11.3914 1.66 13.6114 1.66 14.9814 3.02L16.7314 4.78996C17.3714 5.41996 17.7114 6.21997 17.7514 7.04997Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M9 19C9 19.75 8.79 20.46 8.42 21.06C7.73 22.22 6.46 23 5 23C3.54 23 2.27 22.22 1.58 21.06C1.21 20.46 1 19.75 1 19C1 16.79 2.79 15 5 15C7.21 15 9 16.79 9 19Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M6.49172 18.9795H3.51172' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M5 17.5195V20.5095' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M22 12V17C22 20 20 22 17 22H7.63C7.94 21.74 8.21 21.42 8.42 21.06C8.79 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15C3.8 15 2.73 15.53 2 16.36V12C2 9.28 3.64 7.38 6.19 7.06C6.45 7.02 6.72 7 7 7H17C17.26 7 17.51 7.00999 17.75 7.04999C20.33 7.34999 22 9.26 22 12Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const EmptyWallet = ({ color = 'white', size = 20, ...props }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 24 24' fill='none' {...props}>
    <path
      d='M18.04 13.55C17.62 13.96 17.38 14.55 17.44 15.18C17.53 16.26 18.52 17.05 19.6 17.05H21.5V18.24C21.5 20.31 19.81 22 17.74 22H6.26C4.19 22 2.5 20.31 2.5 18.24V11.51C2.5 9.44001 4.19 7.75 6.26 7.75H17.74C19.81 7.75 21.5 9.44001 21.5 11.51V12.95H19.48C18.92 12.95 18.41 13.17 18.04 13.55Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M2.5 12.4101V7.8401C2.5 6.6501 3.23 5.59006 4.34 5.17006L12.28 2.17006C13.52 1.70006 14.85 2.62009 14.85 3.95009V7.75008'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M22.5588 13.9702V16.0302C22.5588 16.5802 22.1188 17.0302 21.5588 17.0502H19.5988C18.5188 17.0502 17.5288 16.2602 17.4388 15.1802C17.3788 14.5502 17.6188 13.9602 18.0388 13.5502C18.4088 13.1702 18.9188 12.9502 19.4788 12.9502H21.5588C22.1188 12.9702 22.5588 13.4202 22.5588 13.9702Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M7 12H14' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const WalletCheck = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} height={size} viewBox='0 0 24 24' fill='none' {...props} xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M9 19C9 19.75 8.79 20.46 8.42 21.06C7.73 22.22 6.46 23 5 23C3.54 23 2.27 22.22 1.58 21.06C1.21 20.46 1 19.75 1 19C1 16.79 2.79 15 5 15C7.21 15 9 16.79 9 19Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M3.44141 18.9995L4.43141 19.9895L6.56141 18.0195' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M17.7514 7.04997C17.5114 7.00997 17.2614 6.99998 17.0014 6.99998H7.00141C6.72141 6.99998 6.45141 7.01998 6.19141 7.05998C6.33141 6.77998 6.53141 6.52001 6.77141 6.28001L10.0214 3.02C11.3914 1.66 13.6114 1.66 14.9814 3.02L16.7314 4.78996C17.3714 5.41996 17.7114 6.21997 17.7514 7.04997Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M22 12V17C22 20 20 22 17 22H7.63C7.94 21.74 8.21 21.42 8.42 21.06C8.79 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15C3.8 15 2.73 15.53 2 16.36V12C2 9.28 3.64 7.38 6.19 7.06C6.45 7.02 6.72 7 7 7H17C17.26 7 17.51 7.00999 17.75 7.04999C20.33 7.34999 22 9.26 22 12Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const ReceiptItem = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M2 7V21C2 21.83 2.94 22.3 3.6 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.29 22.29C8.68 22.68 9.32 22.68 9.71 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M9 13.01H12' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9 9.01001H12' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M5.99561 13H6.00459' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M5.99561 9H6.00459' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const ReceiptDiscount = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M2 7V21C2 21.83 2.94 22.3 3.6 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.29 22.29C8.68 22.68 9.32 22.68 9.71 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M6.27002 13.73L11.73 8.27002' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M11.9247 13.5H11.9337' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6.1947 8.5H6.20368' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const EmptyWalletRemove = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M18.04 13.55C17.62 13.96 17.38 14.55 17.44 15.18C17.53 16.26 18.52 17.05 19.6 17.05H21.5V18.24C21.5 20.31 19.81 22 17.74 22H7.63C7.94 21.74 8.21 21.42 8.42 21.06C8.79 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15C4.06 15 3.19 15.33 2.5 15.88V11.51C2.5 9.44001 4.19 7.75 6.26 7.75H17.74C19.81 7.75 21.5 9.44001 21.5 11.51V12.95H19.48C18.92 12.95 18.41 13.17 18.04 13.55Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M2.5 12.4101V7.8401C2.5 6.6501 3.23 5.59006 4.34 5.17006L12.28 2.17006C13.52 1.70006 14.85 2.62009 14.85 3.95009V7.75008'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M22.5588 13.9702V16.0302C22.5588 16.5802 22.1188 17.0302 21.5588 17.0502H19.5988C18.5188 17.0502 17.5288 16.2602 17.4388 15.1802C17.3788 14.5502 17.6188 13.9602 18.0388 13.5502C18.4088 13.1702 18.9188 12.9502 19.4788 12.9502H21.5588C22.1188 12.9702 22.5588 13.4202 22.5588 13.9702Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M7 12H14' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M9 19C9 19.75 8.79 20.46 8.42 21.06C8.21 21.42 7.94 21.74 7.63 22C6.93 22.63 6.01 23 5 23C3.54 23 2.27 22.22 1.58 21.06C1.21 20.46 1 19.75 1 19C1 17.74 1.58 16.61 2.5 15.88C3.19 15.33 4.06 15 5 15C7.21 15 9 16.79 9 19Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M6.06995 20.0399L3.94995 17.9299' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6.04993 17.96L3.92993 20.0699' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const EmptyWalletAdd = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M18.04 13.55C17.62 13.96 17.38 14.55 17.44 15.18C17.53 16.26 18.52 17.05 19.6 17.05H21.5V18.24C21.5 20.31 19.81 22 17.74 22H7.63C7.94 21.74 8.21 21.42 8.42 21.06C8.79 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15C4.06 15 3.19 15.33 2.5 15.88V11.51C2.5 9.44001 4.19 7.75 6.26 7.75H17.74C19.81 7.75 21.5 9.44001 21.5 11.51V12.95H19.48C18.92 12.95 18.41 13.17 18.04 13.55Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M2.5 12.4101V7.8401C2.5 6.6501 3.23 5.59006 4.34 5.17006L12.28 2.17006C13.52 1.70006 14.85 2.62009 14.85 3.95009V7.75008'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M22.5588 13.9702V16.0302C22.5588 16.5802 22.1188 17.0302 21.5588 17.0502H19.5988C18.5188 17.0502 17.5288 16.2602 17.4388 15.1802C17.3788 14.5502 17.6188 13.9602 18.0388 13.5502C18.4088 13.1702 18.9188 12.9502 19.4788 12.9502H21.5588C22.1188 12.9702 22.5588 13.4202 22.5588 13.9702Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M7 12H14' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M9 19C9 19.75 8.79 20.46 8.42 21.06C8.21 21.42 7.94 21.74 7.63 22C6.93 22.63 6.01 23 5 23C3.54 23 2.27 22.22 1.58 21.06C1.21 20.46 1 19.75 1 19C1 17.74 1.58 16.61 2.5 15.88C3.19 15.33 4.06 15 5 15C7.21 15 9 16.79 9 19Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M6.49171 18.9795H3.51172' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M5 17.5195V20.5095' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const ReceiptMinus = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M2 7V21C2 21.83 2.94 22.3 3.6 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.29 22.29C8.68 22.68 9.32 22.68 9.71 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M6.25 10H11.75' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const WalletSearch = ({ color = 'white', size = 20, ...props }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={size} {...props} height={size} viewBox='0 0 24 24' fill='none'>
    <path
      d='M12 22H17C20 22 22 20 22 17V12C22 9.3 20.3 7.3 17.8 7C17.6 7 17.3 7 17 7H7C6.7 7 6.5 6.99998 6.2 7.09998C3.6 7.39998 2 9.3 2 12C2 12.3 2 12.7 2 13'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M17.8 6.99995C17.6 6.99995 17.3 6.99995 17 6.99995H6.99995C6.69995 6.99995 6.49995 6.99993 6.19995 7.09993C6.29995 6.79993 6.49996 6.59994 6.79996 6.29994L9.99995 2.99995C11.4 1.59995 13.6 1.59995 15 2.99995L16.8 4.79994C17.4 5.39994 17.7 6.19995 17.8 6.99995Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M5.80157 21.4C7.57157 21.4 9.00156 19.97 9.00156 18.2C9.00156 16.43 7.57157 15 5.80157 15C4.03157 15 2.60156 16.43 2.60156 18.2C2.60156 19.97 4.03157 21.4 5.80157 21.4Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M2 22L3 21' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Strongbox = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M8 19H16C18 19 19 18 19 16V8C19 6 18 5 16 5H8C6 5 5 6 5 8V16C5 18 6 19 8 19Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M5 9.5H7.48C8.86 9.5 9.98 10.62 9.98 12C9.98 13.38 8.86 14.5 7.48 14.5H5' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M19 9.98999H16' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M19 14H16' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M7.2002 12H7.3002' stroke={color} strokeWidth='2' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const EmptyWalletTick = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M18.04 13.55C17.62 13.96 17.38 14.55 17.44 15.18C17.53 16.26 18.52 17.05 19.6 17.05H21.5V18.24C21.5 20.31 19.81 22 17.74 22H7.63C7.94 21.74 8.21 21.42 8.42 21.06C8.79 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15C4.06 15 3.19 15.33 2.5 15.88V11.51C2.5 9.44001 4.18999 7.75 6.25999 7.75H17.74C19.81 7.75 21.5 9.44001 21.5 11.51V12.95H19.48C18.92 12.95 18.41 13.17 18.04 13.55Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M2.5 12.4101V7.8401C2.5 6.6501 3.23 5.59006 4.34 5.17006L12.28 2.17006C13.52 1.70006 14.85 2.62009 14.85 3.95009V7.75008'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M22.5588 13.9702V16.0302C22.5588 16.5802 22.1188 17.0302 21.5588 17.0502H19.5988C18.5188 17.0502 17.5288 16.2602 17.4388 15.1802C17.3788 14.5502 17.6188 13.9602 18.0388 13.5502C18.4088 13.1702 18.9188 12.9502 19.4788 12.9502H21.5588C22.1188 12.9702 22.5588 13.4202 22.5588 13.9702Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M7 12H14' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M9 19C9 19.75 8.79 20.46 8.42 21.06C8.21 21.42 7.94 21.74 7.63 22C6.93 22.63 6.01 23 5 23C3.54 23 2.27 22.22 1.58 21.06C1.21 20.46 1 19.75 1 19C1 17.74 1.58 16.61 2.5 15.88C3.19 15.33 4.06 15 5 15C7.21 15 9 16.79 9 19Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M3.44141 18.9995L4.4314 19.9895L6.5614 18.0195' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const ReceiptAdd = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M2 7V21C2 21.83 2.94001 22.3 3.60001 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.28999 22.29C8.67999 22.68 9.32001 22.68 9.71001 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M6.25 10H11.75' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9 12.75V7.25' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Money = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M5.5 9.5V14.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M18.5 9.5V14.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const EmptyWalletTime = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M18.04 13.55C17.62 13.96 17.38 14.55 17.44 15.18C17.53 16.26 18.52 17.05 19.6 17.05H21.5V18.24C21.5 20.31 19.81 22 17.74 22H7.64C8.47 21.27 9 20.2 9 19C9 16.79 7.21 15 5 15C4.06 15 3.19 15.33 2.5 15.88V11.51C2.5 9.44001 4.18999 7.75 6.25999 7.75H17.74C19.81 7.75 21.5 9.44001 21.5 11.51V12.95H19.48C18.92 12.95 18.41 13.17 18.04 13.55Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M2.5 11.51V7.84002C2.5 6.65002 3.23 5.58997 4.34 5.16997L12.28 2.16997C13.52 1.70997 14.85 2.62 14.85 3.95V7.74999'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M22.5588 13.9702V16.0302C22.5588 16.5802 22.1188 17.0302 21.5588 17.0502H19.5988C18.5188 17.0502 17.5288 16.2602 17.4388 15.1802C17.3788 14.5502 17.6188 13.9602 18.0388 13.5502C18.4088 13.1702 18.9188 12.9502 19.4788 12.9502H21.5588C22.1188 12.9702 22.5588 13.4202 22.5588 13.9702Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M7 12H14' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M9 19C9 20.2 8.47 21.27 7.64 22C6.93 22.62 6.01 23 5 23C2.79 23 1 21.21 1 19C1 17.74 1.58 16.61 2.5 15.88C3.19 15.33 4.06 15 5 15C7.21 15 9 16.79 9 19Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M5.25 17.75V19.25L4 20' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const TransactionMinus = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M6.72827 19.7C7.54827 18.82 8.79828 18.89 9.51828 19.85L10.5283 21.2C11.3383 22.27 12.6483 22.27 13.4583 21.2L14.4683 19.85C15.1883 18.89 16.4383 18.82 17.2583 19.7C19.0383 21.6 20.4883 20.97 20.4883 18.31V7.04C20.4883 3.01 19.5483 2 15.7683 2H8.20828C4.42828 2 3.48828 3.01 3.48828 7.04V18.3C3.49828 20.97 4.95827 21.59 6.72827 19.7Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M9.25 10H14.75' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Money2 = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M2 9H3C6 9 7 8 7 5V4' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M22 9H21C18 9 17 8 17 5V4' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M2 15H3C6 15 7 16 7 19V20' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M22 15H21C18 15 17 16 17 19V20' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const EmptyWalletChange = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M2.5 13.2401V11.5101C2.5 9.44007 4.18999 7.75006 6.25999 7.75006H17.74C19.81 7.75006 21.5 9.44007 21.5 11.5101V12.9501H19.48C18.92 12.9501 18.41 13.17 18.04 13.55C17.62 13.96 17.38 14.5501 17.44 15.1801C17.53 16.2601 18.52 17.05 19.6 17.05H21.5V18.2401C21.5 20.3101 19.81 22.0001 17.74 22.0001H12.26'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M2.5 12.4101V7.8401C2.5 6.6501 3.23 5.59006 4.34 5.17006L12.28 2.17006C13.52 1.70006 14.85 2.62009 14.85 3.95009V7.75008'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M22.5588 13.9702V16.0302C22.5588 16.5802 22.1188 17.0302 21.5588 17.0502H19.5988C18.5188 17.0502 17.5288 16.2602 17.4388 15.1802C17.3788 14.5502 17.6188 13.9602 18.0388 13.5502C18.4088 13.1702 18.9188 12.9502 19.4788 12.9502H21.5588C22.1188 12.9702 22.5588 13.4202 22.5588 13.9702Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M7 12H14' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M3 16.5H8.34C8.98 16.5 9.5 17.02 9.5 17.66V18.94' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M4.22 15.28L3 16.5L4.22 17.72' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9.5 21.78H4.16C3.52 21.78 3 21.26 3 20.62V19.34' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M8.28125 23.0003L9.50125 21.7803L8.28125 20.5603' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Money3 = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M19 7H16' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M8 17H5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const PercentageSquare = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M8.57007 15.27L15.11 8.72998' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M8.98001 10.37C9.65932 10.37 10.21 9.81936 10.21 9.14005C10.21 8.46073 9.65932 7.91003 8.98001 7.91003C8.3007 7.91003 7.75 8.46073 7.75 9.14005C7.75 9.81936 8.3007 10.37 8.98001 10.37Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M15.52 16.09C16.1993 16.09 16.75 15.5393 16.75 14.86C16.75 14.1807 16.1993 13.63 15.52 13.63C14.8407 13.63 14.29 14.1807 14.29 14.86C14.29 15.5393 14.8407 16.09 15.52 16.09Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const Money4 = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M8.5 6H7C5.62 6 4.5 7.12 4.5 8.5V10' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M15.5 6H17C18.38 6 19.5 7.12 19.5 8.5V10' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M8.5 18H7C5.62 18 4.5 16.88 4.5 15.5V14' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M15.5 18H17C18.38 18 19.5 16.88 19.5 15.5V14' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const PercentageCircle = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M8.57007 15.27L15.11 8.72998' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M8.98001 10.37C9.65932 10.37 10.21 9.81936 10.21 9.14005C10.21 8.46073 9.65932 7.91003 8.98001 7.91003C8.3007 7.91003 7.75 8.46073 7.75 9.14005C7.75 9.81936 8.3007 10.37 8.98001 10.37Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M15.52 16.09C16.1993 16.09 16.75 15.5393 16.75 14.86C16.75 14.1807 16.1993 13.63 15.52 13.63C14.8407 13.63 14.29 14.1807 14.29 14.86C14.29 15.5393 14.8407 16.09 15.52 16.09Z'
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
const ChartSquare = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M10.11 11.15H7.46005C6.83005 11.15 6.32007 11.66 6.32007 12.29V17.41H10.11V11.15V11.15Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12.7613 6.59998H11.2413C10.6113 6.59998 10.1013 7.10999 10.1013 7.73999V17.4H13.8913V7.73999C13.8913 7.10999 13.3913 6.59998 12.7613 6.59998Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M16.5482 12.85H13.8982V17.4H17.6882V13.99C17.6782 13.36 17.1682 12.85 16.5482 12.85Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Moneys = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M19.3 7.91998V13.07C19.3 16.15 17.54 17.47 14.9 17.47H6.10995C5.65995 17.47 5.22996 17.43 4.82996 17.34C4.57996 17.3 4.33996 17.23 4.11996 17.15C2.61996 16.59 1.70996 15.29 1.70996 13.07V7.91998C1.70996 4.83998 3.46995 3.52002 6.10995 3.52002H14.9C17.14 3.52002 18.75 4.47001 19.18 6.64001C19.25 7.04001 19.3 7.44998 19.3 7.91998Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M22.3011 10.9201V16.0701C22.3011 19.1501 20.5411 20.4701 17.9011 20.4701H9.11105C8.37105 20.4701 7.70106 20.3701 7.12106 20.1501C5.93106 19.7101 5.12105 18.8001 4.83105 17.3401C5.23105 17.4301 5.66105 17.4701 6.11105 17.4701H14.9011C17.5411 17.4701 19.3011 16.1501 19.3011 13.0701V7.9201C19.3011 7.4501 19.2611 7.03014 19.1811 6.64014C21.0811 7.04014 22.3011 8.38011 22.3011 10.9201Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M10.4984 13.1399C11.9564 13.1399 13.1384 11.9579 13.1384 10.4999C13.1384 9.04185 11.9564 7.85986 10.4984 7.85986C9.04038 7.85986 7.8584 9.04185 7.8584 10.4999C7.8584 11.9579 9.04038 13.1399 10.4984 13.1399Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M4.78003 8.29999V12.7' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M16.2217 8.30029V12.7003' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Coin = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M18.5 12.65V16.35C18.5 19.47 15.59 22 12 22C8.41 22 5.5 19.47 5.5 16.35V12.65C5.5 15.77 8.41 18 12 18C15.59 18 18.5 15.77 18.5 12.65Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M18.5 7.65C18.5 8.56 18.25 9.4 17.81 10.12C16.74 11.88 14.54 13 12 13C9.46 13 7.26 11.88 6.19 10.12C5.75 9.4 5.5 8.56 5.5 7.65C5.5 6.09 6.22999 4.68 7.39999 3.66C8.57999 2.63 10.2 2 12 2C13.8 2 15.42 2.63 16.6 3.65C17.77 4.68 18.5 6.09 18.5 7.65Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M18.5 7.65V12.65C18.5 15.77 15.59 18 12 18C8.41 18 5.5 15.77 5.5 12.65V7.65C5.5 4.53 8.41 2 12 2C13.8 2 15.42 2.63 16.6 3.65C17.77 4.68 18.5 6.09 18.5 7.65Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const ReceiptEdit = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M20.5 11.3V7.04001C20.5 3.01001 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01001 3.5 7.04001V18.3C3.5 20.96 4.96001 21.59 6.73001 19.69L6.73999 19.68C7.55999 18.81 8.80999 18.88 9.51999 19.83L10.53 21.18'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M8 7H16' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9 11H15' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M18.211 14.7703L14.671 18.3103C14.531 18.4503 14.401 18.7103 14.371 18.9003L14.181 20.2503C14.111 20.7403 14.451 21.0803 14.941 21.0103L16.291 20.8203C16.481 20.7903 16.751 20.6603 16.881 20.5203L20.421 16.9803C21.031 16.3703 21.321 15.6603 20.421 14.7603C19.531 13.8703 18.821 14.1603 18.211 14.7703Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M17.6992 15.2803C17.9992 16.3603 18.8392 17.2003 19.9192 17.5003'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const MoneyTick = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M18.5 9.5V14.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M9 18C9 18.75 8.79001 19.46 8.42001 20.06C7.73001 21.22 6.46 22 5 22C3.54 22 2.26999 21.22 1.57999 20.06C1.20999 19.46 1 18.75 1 18C1 15.79 2.79 14 5 14C7.21 14 9 15.79 9 18Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M3.44141 17.9995L4.4314 18.9895L6.5614 17.0195' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M2 15.3V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9V15C22 18.5 20 20 17 20H8.5'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const DiscountShape = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M3.9889 14.6604L2.46891 13.1404C1.84891 12.5204 1.84891 11.5004 2.46891 10.8804L3.9889 9.36039C4.2489 9.10039 4.4589 8.59038 4.4589 8.23038V6.08036C4.4589 5.20036 5.1789 4.48038 6.0589 4.48038H8.2089C8.5689 4.48038 9.0789 4.27041 9.3389 4.01041L10.8589 2.49039C11.4789 1.87039 12.4989 1.87039 13.1189 2.49039L14.6389 4.01041C14.8989 4.27041 15.4089 4.48038 15.7689 4.48038H17.9189C18.7989 4.48038 19.5189 5.20036 19.5189 6.08036V8.23038C19.5189 8.59038 19.7289 9.10039 19.9889 9.36039L21.5089 10.8804C22.1289 11.5004 22.1289 12.5204 21.5089 13.1404L19.9889 14.6604C19.7289 14.9204 19.5189 15.4304 19.5189 15.7904V17.9403C19.5189 18.8203 18.7989 19.5404 17.9189 19.5404H15.7689C15.4089 19.5404 14.8989 19.7504 14.6389 20.0104L13.1189 21.5304C12.4989 22.1504 11.4789 22.1504 10.8589 21.5304L9.3389 20.0104C9.0789 19.7504 8.5689 19.5404 8.2089 19.5404H6.0589C5.1789 19.5404 4.4589 18.8203 4.4589 17.9403V15.7904C4.4589 15.4204 4.2489 14.9104 3.9889 14.6604Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M9 15L15 9' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M14.4945 14.5H14.5035' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9.49451 9.5H9.50349' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const ReceiptSearch = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M20.5 11.3V7.04001C20.5 3.01001 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01001 3.5 7.04001V18.3C3.5 20.96 4.96001 21.59 6.73001 19.69L6.73999 19.68C7.55999 18.81 8.80999 18.88 9.51999 19.83L10.53 21.18'
      stroke={color}
      strokeWidth='1.5'
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
    <path d='M8 7H16' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9 11H15' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const MoneyAdd = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M18.5 9.5V14.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M9 18C9 18.75 8.79001 19.46 8.42001 20.06C7.73001 21.22 6.46 22 5 22C3.54 22 2.26999 21.22 1.57999 20.06C1.20999 19.46 1 18.75 1 18C1 15.79 2.79 14 5 14C7.21 14 9 15.79 9 18Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M6.4917 17.9795H3.51172' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M5 16.5195V19.5095' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M2 15.3V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9V15C22 18.5 20 20 17 20H8.5'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const Group = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M12 5.56H22' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M14.22 2H19.78C21.56 2 22 2.44 22 4.2V8.31C22 10.07 21.56 10.51 19.78 10.51H14.22C12.44 10.51 12 10.07 12 8.31V4.2C12 2.44 12.44 2 14.22 2Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M2 17.06H12' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M4.22 13.5H9.78C11.56 13.5 12 13.94 12 15.7V19.81C12 21.57 11.56 22.01 9.78 22.01H4.22C2.44 22.01 2 21.57 2 19.81V15.7C2 13.94 2.44 13.5 4.22 13.5Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M22 15C22 18.87 18.87 22 15 22L16.05 20.25' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M2 9C2 5.13 5.13 2 9 2L7.95001 3.75' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const DiscountCircle = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M9 15L15 9' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M14.4945 14.5H14.5035' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9.49451 9.5H9.50349' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Wallet2 = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M13 9H7' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M22 10.97V13.03C22 13.58 21.56 14.03 21 14.05H19.0399C17.9599 14.05 16.97 13.26 16.88 12.18C16.82 11.55 17.0599 10.96 17.4799 10.55C17.8499 10.17 18.36 9.95001 18.92 9.95001H21C21.56 9.97001 22 10.42 22 10.97Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M17.48 10.55C17.06 10.96 16.82 11.55 16.88 12.18C16.97 13.26 17.96 14.05 19.04 14.05H21V15.5C21 18.5 19 20.5 16 20.5H7C4 20.5 2 18.5 2 15.5V8.5C2 5.78 3.64 3.88 6.19 3.56C6.45 3.52 6.72 3.5 7 3.5H16C16.26 3.5 16.51 3.50999 16.75 3.54999C19.33 3.84999 21 5.76 21 8.5V9.95001H18.92C18.36 9.95001 17.85 10.17 17.48 10.55Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const MoneyRemove = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M2 15.3V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9V15C22 18.5 20 20 17 20H8.5'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M18.5 9.5V14.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M9 18C9 18.75 8.78998 19.46 8.41998 20.06C7.72998 21.22 6.46 22 5 22C3.54 22 2.27002 21.22 1.58002 20.06C1.21002 19.46 1 18.75 1 18C1 15.79 2.79 14 5 14C7.21 14 9 15.79 9 18Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M6.07117 19.04L3.96118 16.93' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6.03992 16.96L3.92993 19.07' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const WalletMoney = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M10.7516 16.8604V18.8904C10.7516 20.6104 9.15158 22.0004 7.18158 22.0004C5.21158 22.0004 3.60156 20.6104 3.60156 18.8904V16.8604C3.60156 18.5804 5.20158 19.8004 7.18158 19.8004C9.15158 19.8004 10.7516 18.5704 10.7516 16.8604Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M10.7501 14.11C10.7501 14.61 10.6101 15.07 10.3701 15.47C9.78006 16.44 8.57004 17.05 7.17004 17.05C5.77004 17.05 4.56003 16.43 3.97003 15.47C3.73003 15.07 3.59009 14.61 3.59009 14.11C3.59009 13.25 3.99007 12.48 4.63007 11.92C5.28007 11.35 6.17003 11.01 7.16003 11.01C8.15003 11.01 9.04006 11.36 9.69006 11.92C10.3501 12.47 10.7501 13.25 10.7501 14.11Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M10.7516 14.11V16.86C10.7516 18.58 9.15158 19.8 7.18158 19.8C5.21158 19.8 3.60156 18.57 3.60156 16.86V14.11C3.60156 12.39 5.20158 11 7.18158 11C8.17158 11 9.06161 11.35 9.71161 11.91C10.3516 12.47 10.7516 13.25 10.7516 14.11Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M22 10.97V13.03C22 13.58 21.56 14.03 21 14.05H19.0399C17.9599 14.05 16.97 13.26 16.88 12.18C16.82 11.55 17.0599 10.96 17.4799 10.55C17.8499 10.17 18.36 9.95001 18.92 9.95001H21C21.56 9.97001 22 10.42 22 10.97Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M2 10.5V8.5C2 5.78 3.64 3.88 6.19 3.56C6.45 3.52 6.72 3.5 7 3.5H16C16.26 3.5 16.51 3.50999 16.75 3.54999C19.33 3.84999 21 5.76 21 8.5V9.95001H18.92C18.36 9.95001 17.85 10.17 17.48 10.55C17.06 10.96 16.82 11.55 16.88 12.18C16.97 13.26 17.96 14.05 19.04 14.05H21V15.5C21 18.5 19 20.5 16 20.5H13.5'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const CardMoney = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M1.89844 10.0303H21.8984' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M11.4584 20.53H6.34839C2.79839 20.53 1.89844 19.65 1.89844 16.14V7.92004C1.89844 4.74004 2.63841 3.72004 5.42841 3.56004C5.70841 3.55004 6.01839 3.54004 6.34839 3.54004H17.4584C21.0084 3.54004 21.9084 4.42004 21.9084 7.93004V12.34'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M17.8984 22.0303C20.1076 22.0303 21.8984 20.2394 21.8984 18.0303C21.8984 15.8211 20.1076 14.0303 17.8984 14.0303C15.6893 14.0303 13.8984 15.8211 13.8984 18.0303C13.8984 20.2394 15.6893 22.0303 17.8984 22.0303Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M18.9694 19.1503L16.8594 17.0303' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M18.9481 17.0603L16.8281 19.1703' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M5.89844 16.0303H9.89844' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Cards = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M2 12.61H19' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M19 10.28V17.43C18.97 20.28 18.19 21 15.22 21H5.78003C2.76003 21 2 20.25 2 17.27V10.28C2 7.57999 2.63 6.70999 5 6.56999C5.24 6.55999 5.50003 6.54999 5.78003 6.54999H15.22C18.24 6.54999 19 7.29999 19 10.28Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M22 6.73V13.72C22 16.42 21.37 17.29 19 17.43V10.28C19 7.3 18.24 6.55 15.22 6.55H5.78003C5.50003 6.55 5.24 6.56 5 6.57C5.03 3.72 5.81003 3 8.78003 3H18.22C21.24 3 22 3.75 22 6.73Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M5.25 17.81H6.96997' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9.10986 17.81H12.5499' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const MoneyForbid = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M2 15.2V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9V15C22 18.5 20 20 17 20H8.5'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M18.5 9.5V14.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M9 18C9 18.75 8.78998 19.46 8.41998 20.06C7.72998 21.22 6.46 22 5 22C3.54 22 2.27002 21.22 1.58002 20.06C1.21002 19.46 1 18.75 1 18C1 15.79 2.79 14 5 14C7.21 14 9 15.79 9 18Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M7.75 15.25L2.25 20.75' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Wallet3 = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M13 11.15H7' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M2 11.15V6.53003C2 4.49003 3.65 2.84003 5.69 2.84003H11.31C13.35 2.84003 15 4.11002 15 6.15002'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M17.48 12.2C16.98 12.68 16.74 13.42 16.94 14.18C17.19 15.11 18.11 15.7 19.07 15.7H20V17.15C20 19.36 18.21 21.15 16 21.15H6C3.79 21.15 2 19.36 2 17.15V10.15C2 7.94002 3.79 6.15002 6 6.15002H16C18.2 6.15002 20 7.95002 20 10.15V11.6H18.92C18.36 11.6 17.85 11.82 17.48 12.2Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M22 12.62V14.68C22 15.24 21.5399 15.7 20.9699 15.7H19.0399C17.9599 15.7 16.97 14.91 16.88 13.83C16.82 13.2 17.0599 12.61 17.4799 12.2C17.8499 11.82 18.36 11.6 18.92 11.6H20.9699C21.5399 11.6 22 12.06 22 12.62Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const CardTick = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M2 10H22' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M11.5483 20.4998H6.43829C2.88829 20.4998 1.98828 19.6198 1.98828 16.1098V7.88977C1.98828 4.70977 2.72831 3.68977 5.51831 3.52977C5.79831 3.51977 6.10829 3.50977 6.43829 3.50977H17.5483C21.0983 3.50977 21.9983 4.38977 21.9983 7.89977V12.3098'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M6 16H10' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M22 18C22 18.75 21.79 19.46 21.42 20.06C20.73 21.22 19.46 22 18 22C16.54 22 15.27 21.22 14.58 20.06C14.21 19.46 14 18.75 14 18C14 15.79 15.79 14 18 14C20.21 14 22 15.79 22 18Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M16.4414 17.9995L17.4314 18.9895L19.5614 17.0195' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Receipt2 = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M20 7.04V16.96C20 18.48 19.86 19.56 19.5 20.33C19.5 20.34 19.49 20.36 19.48 20.37C19.26 20.65 18.97 20.79 18.63 20.79C18.1 20.79 17.46 20.44 16.77 19.7C15.95 18.82 14.69 18.89 13.97 19.85L12.96 21.19C12.56 21.73 12.03 22 11.5 22C10.97 22 10.44 21.73 10.04 21.19L9.02002 19.84C8.31002 18.89 7.05999 18.82 6.23999 19.69L6.22998 19.7C5.09998 20.91 4.10002 21.09 3.52002 20.37C3.51002 20.36 3.5 20.34 3.5 20.33C3.14 19.56 3 18.48 3 16.96V7.04C3 5.52 3.14 4.44 3.5 3.67C3.5 3.66 3.50002 3.65 3.52002 3.64C4.09002 2.91 5.09998 3.09 6.22998 4.3L6.23999 4.31C7.05999 5.18 8.31002 5.11 9.02002 4.16L10.04 2.81C10.44 2.27 10.97 2 11.5 2C12.03 2 12.56 2.27 12.96 2.81L13.97 4.15C14.69 5.11 15.95 5.18 16.77 4.3C17.46 3.56 18.1 3.21 18.63 3.21C18.97 3.21 19.26 3.36 19.48 3.64C19.5 3.65 19.5 3.66 19.5 3.67C19.86 4.44 20 5.52 20 7.04Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M8 10.25H16' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M8 13.75H14' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const MoneyChange = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M2 11V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9V15C22 18.5 20 20 17 20H12'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M18.5 9.5V14.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M2 15.5H7.34003C7.98003 15.5 8.5 16.02 8.5 16.66V17.94' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M3.21997 14.28L2 15.5L3.21997 16.72' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M8.5 20.78H3.15997C2.51997 20.78 2 20.26 2 19.62V18.34' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M7.28125 22.0003L8.50122 20.7803L7.28125 19.5603' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Receipt = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M2 7V21C2 21.83 2.93998 22.3 3.59998 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.28998 22.29C8.67998 22.68 9.32002 22.68 9.71002 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const WalletRemove = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M22 12V17C22 20 20 22 17 22H7.63C7.94 21.74 8.20998 21.42 8.41998 21.06C8.78998 20.46 9 19.75 9 19C9 16.79 7.21 15 5 15C3.8 15 2.73 15.53 2 16.36V12C2 9.28 3.64 7.38 6.19 7.06C6.45 7.02 6.72 7 7 7H17C17.26 7 17.51 7.00999 17.75 7.04999C20.33 7.34999 22 9.26 22 12Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M17.7514 7.04997C17.5114 7.00997 17.2614 6.99998 17.0014 6.99998H7.0014C6.7214 6.99998 6.45141 7.01998 6.19141 7.05998C6.33141 6.77998 6.53142 6.52001 6.77142 6.28001L10.0214 3.02C11.3914 1.66 13.6114 1.66 14.9814 3.02L16.7314 4.78996C17.3714 5.41996 17.7114 6.21997 17.7514 7.04997Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M9 19C9 19.75 8.78998 20.46 8.41998 21.06C8.20998 21.42 7.94 21.74 7.63 22C6.93 22.63 6.01 23 5 23C3.54 23 2.27002 22.22 1.58002 21.06C1.21002 20.46 1 19.75 1 19C1 17.99 1.38 17.07 2 16.36C2.73 15.53 3.8 15 5 15C7.21 15 9 16.79 9 19Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M6.07117 20.04L3.96118 17.93' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6.03992 17.96L3.92993 20.07' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const MoneyTime = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M18.5 9.5V14.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M5 22C7.20914 22 9 20.2091 9 18C9 15.7909 7.20914 14 5 14C2.79086 14 1 15.7909 1 18C1 20.2091 2.79086 22 5 22Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M5.25 16.75V17.68C5.25 18.03 5.07001 18.36 4.76001 18.54L4 19' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M2 15.2V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9V15C22 18.5 20 20 17 20H8.5'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const ReceiptText = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M2 7V21C2 21.83 2.93998 22.3 3.59998 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.28998 22.29C8.67998 22.68 9.32002 22.68 9.71002 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M6 9H12' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6.75 13H11.25' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const StrongBox = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M14.3511 10.9101C14.2511 11.6201 13.8311 12.2201 13.2511 12.5801V14.5601C13.2511 15.2501 12.6911 15.8101 12.0011 15.8101C11.3111 15.8101 10.7511 15.2501 10.7511 14.5601V12.5801C10.1711 12.2201 9.75109 11.6201 9.65109 10.9101C9.63109 10.8001 9.62109 10.6801 9.62109 10.5601C9.62109 9.04012 11.0611 7.86012 12.6411 8.28012C13.4411 8.49012 14.0911 9.14012 14.3011 9.94012C14.3911 10.2701 14.4011 10.6001 14.3511 10.9101Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
    />
    <path d='M22.0016 10.9102H14.3516' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' />
    <path d='M9.64999 10.91H2' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' />
  </svg>
)
const Wallet = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M22 12V17C22 20 20 22 17 22H7C4 22 2 20 2 17V12C2 9.28 3.64 7.38 6.19 7.06C6.45 7.02 6.72 7 7 7H17C17.26 7 17.51 7.00999 17.75 7.04999C20.33 7.34999 22 9.26 22 12Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M17.7514 7.05C17.5114 7.01 17.2614 7.00001 17.0014 7.00001H7.00141C6.72141 7.00001 6.45141 7.02001 6.19141 7.06001C6.33141 6.78001 6.53141 6.52001 6.77141 6.28001L10.0214 3.02C11.3914 1.66 13.6114 1.66 14.9814 3.02L16.7314 4.79002C17.3714 5.42002 17.7114 6.22 17.7514 7.05Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const SecurityCard = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M11.74 17.75H17.66C17.57 17.83 17.48 17.9 17.39 17.98L13.12 21.18C11.71 22.23 9.41001 22.23 7.99001 21.18L3.71001 17.98C2.77001 17.28 2 15.73 2 14.56V7.14998C2 5.92998 2.93001 4.57998 4.07001 4.14998L9.05 2.27999C9.87 1.96999 11.23 1.96999 12.05 2.27999L17.02 4.14998C17.97 4.50998 18.78 5.50999 19.03 6.52999H11.73C11.51 6.52999 11.31 6.54 11.12 6.54C9.27 6.65 8.78999 7.31998 8.78999 9.42998V14.86C8.79999 17.16 9.39001 17.75 11.74 17.75Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M8.80005 11.22H22' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M22 9.42001V14.97C21.98 17.19 21.37 17.74 19.06 17.74H11.7401C9.39005 17.74 8.80005 17.15 8.80005 14.84V9.41C8.80005 7.31 9.28005 6.63999 11.1301 6.51999C11.3201 6.51999 11.5201 6.51001 11.7401 6.51001H19.06C21.41 6.52001 22 7.10001 22 9.42001Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M11.3201 15.26H12.6501' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M14.75 15.26H18.02' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const MoneyReceive = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51001 10.94 9.51001 10.02C9.51001 9.17999 10.16 8.48999 10.96 8.48999H12.84C13.76 8.48999 14.51 9.26999 14.51 10.24'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M12 7.5V16.5' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M17 3V7H21' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M22 2L17 7' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const MoneySend = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51001 10.94 9.51001 10.02C9.51001 9.17999 10.16 8.48999 10.96 8.48999H12.84C13.76 8.48999 14.51 9.26999 14.51 10.24'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M12 7.5V16.5' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M22 6V2H18' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M17 7L22 2' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Archive = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M18 7.75V14.5C18 13.4 17.1 12.5 16 12.5H8C6.9 12.5 6 13.4 6 14.5V7.75C6 6.65 6.9 5.75 8 5.75H16C17.1 5.75 18 6.65 18 7.75Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M19 15.75H18' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6 15.75H5' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M18 14V11C18 9.9 17.1 9 16 9H8C6.9 9 6 9.9 6 11V14' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M18 14.5V15.75H14.5C14.5 17.13 13.38 18.25 12 18.25C10.62 18.25 9.5 17.13 9.5 15.75H6V14.5C6 13.4 6.9 12.5 8 12.5H16C17.1 12.5 18 13.4 18 14.5Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const Tag = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M4.16989 15.3L8.69989 19.83C10.5599 21.69 13.5799 21.69 15.4499 19.83L19.8399 15.44C21.6999 13.58 21.6999 10.56 19.8399 8.69005L15.2999 4.17005C14.3499 3.22005 13.0399 2.71005 11.6999 2.78005L6.69989 3.02005C4.69989 3.11005 3.10989 4.70005 3.00989 6.69005L2.76989 11.69C2.70989 13.04 3.21989 14.35 4.16989 15.3Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M9.5 12.0001C10.8807 12.0001 12 10.8808 12 9.50006C12 8.11935 10.8807 7.00006 9.5 7.00006C8.11929 7.00006 7 8.11935 7 9.50006C7 10.8808 8.11929 12.0001 9.5 12.0001Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
    />
  </svg>
)
const Tag2 = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M4.40476 15.5264L8.93476 20.0564C10.7948 21.9164 13.8148 21.9164 15.6848 20.0564L20.0748 15.6664C21.9348 13.8064 21.9348 10.7864 20.0748 8.91637L15.5348 4.39637C14.5848 3.44637 13.2748 2.93637 11.9348 3.00637L6.93476 3.24637C4.93476 3.33637 3.34476 4.92637 3.24476 6.91637L3.00476 11.9164C2.94476 13.2664 3.45476 14.5764 4.40476 15.5264Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M9.73486 12.2264C11.1156 12.2264 12.2349 11.1071 12.2349 9.72638C12.2349 8.34567 11.1156 7.22638 9.73486 7.22638C8.35415 7.22638 7.23486 8.34567 7.23486 9.72638C7.23486 11.1071 8.35415 12.2264 9.73486 12.2264Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
    />
    <path d='M13.2349 17.2264L17.2349 13.2264' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Coin2 = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M8 11.4C8 12.17 8.6 12.8 9.33 12.8H10.83C11.47 12.8 11.99 12.25 11.99 11.58C11.99 10.85 11.67 10.59 11.2 10.42L8.8 9.58001C8.32 9.41001 8 9.15001 8 8.42001C8 7.75001 8.52 7.20001 9.16 7.20001H10.66C11.4 7.21001 12 7.83001 12 8.60001'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M10 12.85V13.59' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M10 6.40997V7.18997' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M9.99 17.98C14.4028 17.98 17.98 14.4028 17.98 9.99C17.98 5.57724 14.4028 2 9.99 2C5.57724 2 2 5.57724 2 9.99C2 14.4028 5.57724 17.98 9.99 17.98Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12.98 19.88C13.88 21.15 15.35 21.98 17.03 21.98C19.76 21.98 21.98 19.76 21.98 17.03C21.98 15.37 21.16 13.9 19.91 13'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const Document = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M15.75 9H8.25' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M15.75 15H8.25' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const WalletMinus = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M14.2617 15.998H9.26172' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M12.66 2.51814L12.63 2.58814L9.72996 9.31814H6.87996C6.19996 9.31814 5.54996 9.45814 4.95996 9.70814L6.70996 5.52814L6.74996 5.42814L6.81996 5.26814C6.83996 5.20814 6.85996 5.14814 6.88996 5.09814C8.19996 2.06814 9.67996 1.37814 12.66 2.51814Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M18.05 9.51813C17.6 9.37813 17.12 9.31813 16.64 9.31813H9.72998L12.63 2.58813L12.66 2.51813C12.81 2.56813 12.95 2.63813 13.1 2.69813L15.31 3.62813C16.54 4.13813 17.4 4.66813 17.92 5.30813C18.02 5.42813 18.1 5.53813 18.17 5.66813C18.26 5.80813 18.33 5.94813 18.37 6.09813C18.41 6.18813 18.44 6.27813 18.46 6.35813C18.73 7.19813 18.57 8.22813 18.05 9.51813Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M21.5217 14.1984V16.1484C21.5217 16.3484 21.5117 16.5484 21.5017 16.7484C21.3117 20.2384 19.3617 21.9984 15.6617 21.9984H7.86172C7.62172 21.9984 7.38172 21.9784 7.15172 21.9484C3.97172 21.7384 2.27172 20.0384 2.06172 16.8584C2.03172 16.6284 2.01172 16.3884 2.01172 16.1484V14.1984C2.01172 12.1884 3.23172 10.4584 4.97172 9.70836C5.57172 9.45836 6.21172 9.31836 6.89172 9.31836H16.6517C17.1417 9.31836 17.6217 9.38836 18.0617 9.51836C20.0517 10.1284 21.5217 11.9884 21.5217 14.1984Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M6.71 5.52814L4.96 9.70814C3.22 10.4581 2 12.1881 2 14.1981V11.2681C2 8.42814 4.02 6.05814 6.71 5.52814Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M21.5186 11.2677V14.1977C21.5186 11.9977 20.0586 10.1277 18.0586 9.52766C18.5786 8.22766 18.7286 7.20766 18.4786 6.35766C18.4586 6.26766 18.4286 6.17766 18.3886 6.09766C20.2486 7.05766 21.5186 9.02766 21.5186 11.2677Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const CardEdit = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M1.99609 8.5H11.4961' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M5.99609 16.5H7.99609' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M10.4961 16.5H14.4961' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M21.9961 12.03V16.11C21.9961 19.62 21.1061 20.5 17.5561 20.5H6.43609C2.88609 20.5 1.99609 19.62 1.99609 16.11V7.89C1.99609 4.38 2.88609 3.5 6.43609 3.5H14.4961'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M19.0761 4.13L15.3661 7.84C15.2261 7.98 15.0861 8.26 15.0561 8.46L14.8561 9.88C14.7861 10.39 15.1461 10.75 15.6561 10.68L17.0761 10.48C17.2761 10.45 17.5561 10.31 17.6961 10.17L21.4061 6.46C22.0461 5.82 22.3461 5.08 21.4061 4.14C20.4561 3.19 19.7161 3.49 19.0761 4.13Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M18.5461 4.65997C18.8661 5.78997 19.7461 6.66997 20.8661 6.97997'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const CardSend = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M2 8.5H14.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6 16.5H8' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M10.5 16.5H14.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M22 14.03V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V7.89C2 4.38 2.89 3.5 6.44 3.5H14.5'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M20 9.5V3.5L22 5.5' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M20 3.5L18 5.5' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const CardReceive = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M2 8.5H14.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6 16.5H8' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M10.5 16.5H14.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M22 14.03V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V7.89C2 4.38 2.89 3.5 6.44 3.5H14.5'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M20 3.5V9.5L22 7.5' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M20 9.5L18 7.5' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Card = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M2 8.50494H22' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6 16.5049H8' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M10.5 16.5049H14.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M6.44 3.50494H17.55C21.11 3.50494 22 4.38494 22 7.89494V16.1049C22 19.6149 21.11 20.4949 17.56 20.4949H6.44C2.89 20.5049 2 19.6249 2 16.1149V7.89494C2 4.38494 2.89 3.50494 6.44 3.50494Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const CardPos = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M3.92969 15.8792L15.8797 3.9292' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M11.1013 18.279L12.3013 17.079' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M13.793 15.5887L16.183 13.1987' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M3.60127 10.239L10.2413 3.599C12.3613 1.479 13.4213 1.469 15.5213 3.569L20.4313 8.479C22.5313 10.579 22.5213 11.639 20.4013 13.759L13.7613 20.399C11.6413 22.519 10.5813 22.529 8.48127 20.429L3.57127 15.519C1.47127 13.419 1.47127 12.369 3.60127 10.239Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M2 21.9985H22' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const CardSlash = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M2 8.5H15.24' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6 16.5H7.29' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M11 16.5H14.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M7.97998 20.5H17.56C21.12 20.5 22 19.62 22 16.11V6.89001' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M19.99 3.75C19.37 3.57 18.57 3.5 17.56 3.5H6.44C2.89 3.5 2 4.38 2 7.89V16.1C2 18.44 2.39 19.61 3.71 20.13'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M22 2L2 22' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const CardTick2 = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M2 8.5H13.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6 16.5H8' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M10.5 16.5H14.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M22 11.03V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V7.89C2 4.38 2.89 3.5 6.44 3.5H13.5'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M16.5 6L18 7.5L22 3.5' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const CardRemove = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M2 8.5H13.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6 16.5H8' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M10.5 16.5H14.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M22 12.03V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V7.89C2 4.38 2.89 3.5 6.44 3.5H13.5'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M17.3086 8.18957L21.1886 4.30957' stroke={color} strokeWidth='1.5' strokeLinecap='round' />
    <path d='M21.1886 8.18957L17.3086 4.30957' stroke={color} strokeWidth='1.5' strokeLinecap='round' />
  </svg>
)
const CardAdd = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M2 8.5H13.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6 16.5H8' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M10.5 16.5H14.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M22 12.03V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V7.89C2 4.38 2.89 3.5 6.44 3.5H13.5'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M16.5 6.25H22' stroke={color} strokeWidth='1.5' strokeLinecap='round' />
    <path d='M19.25 9V3.5' stroke={color} strokeWidth='1.5' strokeLinecap='round' />
  </svg>
)
const Wallet4 = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12.66 2.51814L12.63 2.58814L9.72996 9.31814H6.87996C6.19996 9.31814 5.54996 9.45814 4.95996 9.70814L6.70996 5.52814L6.74996 5.42814L6.81996 5.26814C6.83996 5.20814 6.85996 5.14814 6.88996 5.09814C8.19996 2.06814 9.67996 1.37814 12.66 2.51814Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M18.05 9.51813C17.6 9.37813 17.12 9.31813 16.64 9.31813H9.72998L12.63 2.58813L12.66 2.51813C12.81 2.56813 12.95 2.63813 13.1 2.69813L15.31 3.62813C16.54 4.13813 17.4 4.66813 17.92 5.30813C18.02 5.42813 18.1 5.53813 18.17 5.66813C18.26 5.80813 18.33 5.94813 18.37 6.09813C18.41 6.18813 18.44 6.27813 18.46 6.35813C18.73 7.19813 18.57 8.22813 18.05 9.51813Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M21.5217 14.1984V16.1484C21.5217 16.3484 21.5117 16.5484 21.5017 16.7484C21.3117 20.2384 19.3617 21.9984 15.6617 21.9984H7.86172C7.62172 21.9984 7.38172 21.9784 7.15172 21.9484C3.97172 21.7384 2.27172 20.0384 2.06172 16.8584C2.03172 16.6284 2.01172 16.3884 2.01172 16.1484V14.1984C2.01172 12.1884 3.23172 10.4584 4.97172 9.70836C5.57172 9.45836 6.21172 9.31836 6.89172 9.31836H16.6517C17.1417 9.31836 17.6217 9.38836 18.0617 9.51836C20.0517 10.1284 21.5217 11.9884 21.5217 14.1984Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M6.71 5.52814L4.96 9.70814C3.22 10.4581 2 12.1881 2 14.1981V11.2681C2 8.42814 4.02 6.05814 6.71 5.52814Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M21.5186 11.2677V14.1977C21.5186 11.9977 20.0586 10.1277 18.0586 9.52766C18.5786 8.22766 18.7286 7.20766 18.4786 6.35766C18.4586 6.26766 18.4286 6.17766 18.3886 6.09766C20.2486 7.05766 21.5186 9.02766 21.5186 11.2677Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const WalletRemove2 = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M14.2617 15.4385H9.26172' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M11.7617 12.998V17.998' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M12.66 2.51814L12.63 2.58814L9.72996 9.31814H6.87996C6.19996 9.31814 5.54996 9.45814 4.95996 9.70814L6.70996 5.52814L6.74996 5.42814L6.81996 5.26814C6.83996 5.20814 6.85996 5.14814 6.88996 5.09814C8.19996 2.06814 9.67996 1.37814 12.66 2.51814Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M18.05 9.51813C17.6 9.37813 17.12 9.31813 16.64 9.31813H9.72998L12.63 2.58813L12.66 2.51813C12.81 2.56813 12.95 2.63813 13.1 2.69813L15.31 3.62813C16.54 4.13813 17.4 4.66813 17.92 5.30813C18.02 5.42813 18.1 5.53813 18.17 5.66813C18.26 5.80813 18.33 5.94813 18.37 6.09813C18.41 6.18813 18.44 6.27813 18.46 6.35813C18.73 7.19813 18.57 8.22813 18.05 9.51813Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M21.5217 14.1984V16.1484C21.5217 16.3484 21.5117 16.5484 21.5017 16.7484C21.3117 20.2384 19.3617 21.9984 15.6617 21.9984H7.86172C7.62172 21.9984 7.38172 21.9784 7.15172 21.9484C3.97172 21.7384 2.27172 20.0384 2.06172 16.8584C2.03172 16.6284 2.01172 16.3884 2.01172 16.1484V14.1984C2.01172 12.1884 3.23172 10.4584 4.97172 9.70836C5.57172 9.45836 6.21172 9.31836 6.89172 9.31836H16.6517C17.1417 9.31836 17.6217 9.38836 18.0617 9.51836C20.0517 10.1284 21.5217 11.9884 21.5217 14.1984Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M6.71 5.52814L4.96 9.70814C3.22 10.4581 2 12.1881 2 14.1981V11.2681C2 8.42814 4.02 6.05814 6.71 5.52814Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M21.5186 11.2677V14.1977C21.5186 11.9977 20.0586 10.1277 18.0586 9.52766C18.5786 8.22766 18.7286 7.20766 18.4786 6.35766C18.4586 6.26766 18.4286 6.17766 18.3886 6.09766C20.2486 7.05766 21.5186 9.02766 21.5186 11.2677Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const DollarSquare = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M12 6V18' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const DollarCircle = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M12 6V18' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const Receipt3 = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M6.73 19.7C7.55 18.82 8.8 18.89 9.52 19.85L10.53 21.2C11.34 22.27 12.65 22.27 13.46 21.2L14.47 19.85C15.19 18.89 16.44 18.82 17.26 19.7C19.04 21.6 20.49 20.97 20.49 18.31V7.04C20.5 3.01 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3C3.5 20.97 4.96 21.59 6.73 19.7Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M8 7H16' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9 11H15' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Receipt4 = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M6.73 19.7C7.55 18.82 8.8 18.89 9.52 19.85L10.53 21.2C11.34 22.27 12.65 22.27 13.46 21.2L14.47 19.85C15.19 18.89 16.44 18.82 17.26 19.7C19.04 21.6 20.49 20.97 20.49 18.31V7.04C20.5 3.01 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3C3.5 20.97 4.96 21.59 6.73 19.7Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M8.09607 11H8.10505' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M10.8984 11H16.3984' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M8.09607 7H8.10505' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M10.8984 7H16.3984' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const ReceiptDiscount2 = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M6.73 19.7C7.55 18.82 8.8 18.89 9.52 19.85L10.53 21.2C11.34 22.27 12.65 22.27 13.46 21.2L14.47 19.85C15.19 18.89 16.44 18.82 17.26 19.7C19.04 21.6 20.49 20.97 20.49 18.31V7.04C20.5 3.01 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3C3.5 20.97 4.96 21.59 6.73 19.7Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M9 13L15 7' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M14.9945 13H15.0035' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M8.99451 7.5H9.00349' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Ticket = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M19.5 12.5C19.5 11.12 20.62 10 22 10V9C22 5 21 4 17 4H7C3 4 2 5 2 9V9.5C3.38 9.5 4.5 10.62 4.5 12C4.5 13.38 3.38 14.5 2 14.5V15C2 19 3 20 7 20H17C21 20 22 19 22 15C20.62 15 19.5 13.88 19.5 12.5Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M10 4L10 20' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' strokeDasharray='5 5' />
  </svg>
)
const TicketStar = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M16.9949 4H6.99488C3.16488 4 2.09488 4.92 2.00488 8.5C3.93488 8.5 5.49488 10.07 5.49488 12C5.49488 13.93 3.93488 15.49 2.00488 15.5C2.09488 19.08 3.16488 20 6.99488 20H16.9949C20.9949 20 21.9949 19 21.9949 15V9C21.9949 5 20.9949 4 16.9949 4Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M8.99316 4V7.5' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M8.99316 16.5V20' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M15.025 9.32997L15.645 10.58C15.705 10.7 15.825 10.79 15.955 10.81L17.335 11.01C17.675 11.06 17.815 11.48 17.565 11.72L16.565 12.69C16.465 12.78 16.425 12.92 16.445 13.06L16.685 14.43C16.745 14.77 16.385 15.03 16.085 14.87L14.855 14.22C14.735 14.16 14.585 14.16 14.465 14.22L13.235 14.87C12.925 15.03 12.575 14.77 12.635 14.43L12.875 13.06C12.895 12.92 12.855 12.79 12.755 12.69L11.765 11.72C11.515 11.48 11.655 11.06 11.995 11.01L13.375 10.81C13.515 10.79 13.625 10.71 13.685 10.58L14.295 9.32997C14.435 9.01997 14.875 9.01997 15.025 9.32997Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const TicketExpired = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M10.9023 19.8701H17.3723C21.0723 19.8701 21.9923 18.9501 21.9923 15.2501C20.7123 15.2501 19.6823 14.2101 19.6823 12.9401C19.6823 11.6601 20.7123 10.6201 21.9923 10.6201V9.70008C21.9923 6.00008 21.0723 5.08008 17.3723 5.08008H10.9923V11.8701'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M10.9936 16.87V19.87H8.22356C6.74356 19.87 5.87357 18.86 4.91357 16.54L4.73356 16.09C5.94356 15.61 6.53357 14.21 6.02357 13C5.53357 11.79 4.14357 11.21 2.92357 11.71L2.75357 11.28C1.31356 7.76 1.81357 6.53 5.33357 5.08L7.97357 4L10.9936 11.32V13.87'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M8.16219 19.8701H7.99219' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Ticket2 = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M18.91 14.6925C18.91 15.9825 19.97 17.0325 21.26 17.0325C21.26 20.7825 20.32 21.7225 16.57 21.7225H7.19C3.44 21.7225 2.5 20.7825 2.5 17.0325V16.5725C3.79 16.5725 4.85 15.5125 4.85 14.2225C4.85 12.9325 3.79 11.8725 2.5 11.8725V11.4125C2.51 7.66247 3.44 6.72247 7.19 6.72247H16.56C20.31 6.72247 21.25 7.66247 21.25 11.4125V12.3525C19.96 12.3525 18.91 13.3925 18.91 14.6925Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M16.2111 6.7225H7.12109L10.0511 3.7925C12.4411 1.4025 13.6411 1.4025 16.0311 3.7925L16.6311 4.3925C16.0011 5.0225 15.8511 5.9525 16.2111 6.7225Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M9.87891 6.72266L9.87891 21.7227' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' strokeDasharray='5 5' />
  </svg>
)
const TicketDiscount = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M19.5 12.5C19.5 11.12 20.62 10 22 10V9C22 5 21 4 17 4H7C3 4 2 5 2 9V9.5C3.38 9.5 4.5 10.62 4.5 12C4.5 13.38 3.38 14.5 2 14.5V15C2 19 3 20 7 20H17C21 20 22 19 22 15C20.62 15 19.5 13.88 19.5 12.5Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M9 14.75L15 8.75' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M14.9945 14.75H15.0035' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M8.99451 9.25H9.00349' stroke={color} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const Math = ({ color = 'white', size = 20, ...props }) => (
  <svg width={size} {...props} height={size} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M14.4207 5.63965H21.7007' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M2.29956 5.64014H9.57956' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M14.4207 15.3301H21.7007' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M14.4207 21.3896H21.7007' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M18.0894 9.27V2' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M2.29956 22L9.57956 14.73' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9.57956 22L2.29956 14.73' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

export default {
  WalletAdd,
  EmptyWallet,
  WalletCheck,
  ReceiptItem,
  ReceiptDiscount,
  EmptyWalletRemove,
  EmptyWalletAdd,
  ReceiptMinus,
  WalletSearch,
  Strongbox,
  EmptyWalletTick,
  ReceiptAdd,
  Money,
  EmptyWalletTime,
  TransactionMinus,
  Money2,
  EmptyWalletChange,
  Money3,
  PercentageSquare,
  Money4,
  PercentageCircle,
  ChartSquare,
  Moneys,
  Coin,
  ReceiptEdit,
  MoneyTick,
  DiscountShape,
  ReceiptSearch,
  MoneyAdd,
  Group,
  DiscountCircle,
  Wallet2,
  MoneyRemove,
  WalletMoney,
  CardMoney,
  Cards,
  MoneyForbid,
  Wallet3,
  CardTick,
  Receipt2,
  MoneyChange,
  Receipt,
  WalletRemove,
  MoneyTime,
  ReceiptText,
  StrongBox,
  Wallet,
  SecurityCard,
  MoneyReceive,
  MoneySend,
  Archive,
  Tag,
  Tag2,
  Coin2,
  Document,
  WalletMinus,
  CardEdit,
  CardSend,
  CardReceive,
  Card,
  CardPos,
  CardSlash,
  CardTick2,
  CardRemove,
  CardAdd,
  Wallet4,
  WalletRemove2,
  DollarSquare,
  DollarCircle,
  Receipt3,
  Receipt4,
  ReceiptDiscount2,
  Ticket,
  TicketStar,
  TicketExpired,
  Ticket2,
  TicketDiscount,
  Math,
}
