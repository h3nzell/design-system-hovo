import React from 'react'

const Command = ({ color = 'white', size = 20, className='' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M16 8H8V16H16V8Z' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M5 22C6.65 22 8 20.65 8 19V16H5C3.35 16 2 17.35 2 19C2 20.65 3.35 22 5 22Z' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M5 8H8V5C8 3.35 6.65 2 5 2C3.35 2 2 3.35 2 5C2 6.65 3.35 8 5 8Z' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M16 8H19C20.65 8 22 6.65 22 5C22 3.35 20.65 2 19 2C17.35 2 16 3.35 16 5V8Z' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M19 22C20.65 22 22 20.65 22 19C22 17.35 20.65 16 19 16H16V19C16 20.65 17.35 22 19 22Z'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const ProgrammingArrow = ({ color = 'white', size = 20, className='' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M19 16V6.5C19 5.4 18.1 4.5 17 4.5H12.5' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M15 2L12 4.5L15 7' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M5 9V16' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M5.25 8.5C7.04493 8.5 8.5 7.04493 8.5 5.25C8.5 3.45507 7.04493 2 5.25 2C3.45507 2 2 3.45507 2 5.25C2 7.04493 3.45507 8.5 5.25 8.5Z'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M5 22C6.65685 22 8 20.6569 8 19C8 17.3431 6.65685 16 5 16C3.34315 16 2 17.3431 2 19C2 20.6569 3.34315 22 5 22Z'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M19 22C20.6569 22 22 20.6569 22 19C22 17.3431 20.6569 16 19 16C17.3431 16 16 17.3431 16 19C16 20.6569 17.3431 22 19 22Z'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const Hierachy = ({ color = 'white', size = 20, className='' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M5 9V16' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M5.25 8.5C7.04493 8.5 8.5 7.04493 8.5 5.25C8.5 3.45507 7.04493 2 5.25 2C3.45507 2 2 3.45507 2 5.25C2 7.04493 3.45507 8.5 5.25 8.5Z'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M5 22C6.65685 22 8 20.6569 8 19C8 17.3431 6.65685 16 5 16C3.34315 16 2 17.3431 2 19C2 20.6569 3.34315 22 5 22Z'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M19 22C20.6569 22 22 20.6569 22 19C22 17.3431 20.6569 16 19 16C17.3431 16 16 17.3431 16 19C16 20.6569 17.3431 22 19 22Z'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M5.13 9C5.58 10.75 7.18 12.05 9.07 12.04L12.5 12.03C15.12 12.02 17.35 13.7 18.17 16.04'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const Hierachy2 = ({ color = 'white', size = 20, className='' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M5 15V8' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M5.25 22C7.04493 22 8.5 20.5449 8.5 18.75C8.5 16.9551 7.04493 15.5 5.25 15.5C3.45507 15.5 2 16.9551 2 18.75C2 20.5449 3.45507 22 5.25 22Z'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M5 8C6.65685 8 8 6.65685 8 5C8 3.34315 6.65685 2 5 2C3.34315 2 2 3.34315 2 5C2 6.65685 3.34315 8 5 8Z'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M5.13 15C5.58 13.25 7.18 11.95 9.07 11.96L12.5 11.97C15.12 11.98 17.35 10.3 18.17 7.95999'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const CommandSquare = ({ color = 'white', size = 20, className='' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M14.4 9.60001H9.59998V14.4H14.4V9.60001Z' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M7.79999 18C8.78999 18 9.59998 17.19 9.59998 16.2V14.4H7.79999C6.80999 14.4 6 15.21 6 16.2C6 17.19 6.80999 18 7.79999 18Z'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M7.79999 9.60001H9.59998V7.79999C9.59998 6.80999 8.78999 6 7.79999 6C6.80999 6 6 6.80999 6 7.79999C6 8.78999 6.80999 9.60001 7.79999 9.60001Z'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M14.4 9.60001H16.2C17.19 9.60001 18 8.78999 18 7.79999C18 6.80999 17.19 6 16.2 6C15.21 6 14.4 6.80999 14.4 7.79999V9.60001Z'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M16.2 18C17.19 18 18 17.19 18 16.2C18 15.21 17.19 14.4 16.2 14.4H14.4V16.2C14.4 17.19 15.21 18 16.2 18Z'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const HierachySquare = ({ color = 'white', size = 20, className='' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M16.45 14.4V8.5C16.45 7.95 16 7.5 15.45 7.5H12.55' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M14.05 6L12.25 7.5L14.05 9' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M7.54999 10.2V14.4' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M7.70001 9.89999C8.77697 9.89999 9.65002 9.02697 9.65002 7.95001C9.65002 6.87306 8.77697 6 7.70001 6C6.62306 6 5.75 6.87306 5.75 7.95001C5.75 9.02697 6.62306 9.89999 7.70001 9.89999Z'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M7.54999 18C8.5441 18 9.34998 17.1941 9.34998 16.2C9.34998 15.2059 8.5441 14.4 7.54999 14.4C6.55588 14.4 5.75 15.2059 5.75 16.2C5.75 17.1941 6.55588 18 7.54999 18Z'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M16.45 18C17.4441 18 18.25 17.1941 18.25 16.2C18.25 15.2059 17.4441 14.4 16.45 14.4C15.4559 14.4 14.65 15.2059 14.65 16.2C14.65 17.1941 15.4559 18 16.45 18Z'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const HierachySquare2 = ({ color = 'white', size = 20, className='' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M7.79999 10.2V14.4' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M7.95001 9.89999C9.02697 9.89999 9.90002 9.02697 9.90002 7.95001C9.90002 6.87306 9.02697 6 7.95001 6C6.87306 6 6 6.87306 6 7.95001C6 9.02697 6.87306 9.89999 7.95001 9.89999Z'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M7.79999 18C8.7941 18 9.59998 17.1941 9.59998 16.2C9.59998 15.2059 8.7941 14.4 7.79999 14.4C6.80588 14.4 6 15.2059 6 16.2C6 17.1941 6.80588 18 7.79999 18Z'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M16.2 18C17.1941 18 18 17.1941 18 16.2C18 15.2059 17.1941 14.4 16.2 14.4C15.2059 14.4 14.4 15.2059 14.4 16.2C14.4 17.1941 15.2059 18 16.2 18Z'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M7.88 10.2C8.15 11.25 9.10999 12.03 10.24 12.02L12.3 12.01C13.87 12 15.21 13.01 15.7 14.42'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const HierachySquare3 = ({ color = 'white', size = 20, className='' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M7.79999 13.8V9.60001' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M7.95001 18C9.02697 18 9.90002 17.1269 9.90002 16.05C9.90002 14.973 9.02697 14.1 7.95001 14.1C6.87306 14.1 6 14.973 6 16.05C6 17.1269 6.87306 18 7.95001 18Z'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M7.79999 9.60001C8.7941 9.60001 9.59998 8.7941 9.59998 7.79999C9.59998 6.80588 8.7941 6 7.79999 6C6.80588 6 6 6.80588 6 7.79999C6 8.7941 6.80588 9.60001 7.79999 9.60001Z'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M16.2 9.60001C17.1941 9.60001 18 8.7941 18 7.79999C18 6.80588 17.1941 6 16.2 6C15.2059 6 14.4 6.80588 14.4 7.79999C14.4 8.7941 15.2059 9.60001 16.2 9.60001Z'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M7.88 13.8C8.15 12.75 9.10999 11.97 10.24 11.98L12.3 11.99C13.87 12 15.21 10.99 15.7 9.57999'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2Z' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Data = ({ color = 'white', size = 20, className='' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M20 14C21.1046 14 22 13.1046 22 12C22 10.8954 21.1046 10 20 10C18.8954 10 18 10.8954 18 12C18 13.1046 18.8954 14 20 14Z'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M20 6C21.1046 6 22 5.10457 22 4C22 2.89543 21.1046 2 20 2C18.8954 2 18 2.89543 18 4C18 5.10457 18.8954 6 20 6Z'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M20 22C21.1046 22 22 21.1046 22 20C22 18.8954 21.1046 18 20 18C18.8954 18 18 18.8954 18 20C18 21.1046 18.8954 22 20 22Z'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M4 14C5.10457 14 6 13.1046 6 12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14Z'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M6 12H18' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M18 4H14C12 4 11 5 11 7V17C11 19 12 20 14 20H18' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Data2 = ({ color = 'white', size = 20, className='' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M7 8H4C2.9 8 2 7.1 2 6V4C2 2.9 2.9 2 4 2H7C8.1 2 9 2.9 9 4V6C9 7.1 8.1 8 7 8Z' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M20.8 7H17.2C16.54 7 16 6.45999 16 5.79999V4.20001C16 3.54001 16.54 3 17.2 3H20.8C21.46 3 22 3.54001 22 4.20001V5.79999C22 6.45999 21.46 7 20.8 7Z'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M20.8 14.5H17.2C16.54 14.5 16 13.96 16 13.3V11.7C16 11.04 16.54 10.5 17.2 10.5H20.8C21.46 10.5 22 11.04 22 11.7V13.3C22 13.96 21.46 14.5 20.8 14.5Z'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M9 5H16' stroke={color} stroke-width='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M12.5 5V18C12.5 19.1 13.4 20 14.5 20H16' fill='white' />
    <path d='M12.5 5V18C12.5 19.1 13.4 20 14.5 20H16' stroke={color} stroke-width='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M12.5 12.5H16' stroke={color} stroke-width='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M20.8 22H17.2C16.54 22 16 21.46 16 20.8V19.2C16 18.54 16.54 18 17.2 18H20.8C21.46 18 22 18.54 22 19.2V20.8C22 21.46 21.46 22 20.8 22Z'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const DocumentCode = ({ color = 'white', size = 20, className='' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z'
      stroke={color}
      stroke-width='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5' stroke={color} stroke-width='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M10 13L8 15L10 17' stroke={color} stroke-width='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M14 13L16 15L14 17' stroke={color} stroke-width='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const CodeCircle = ({ color = 'white', size = 20, className='' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M8 10L6 12L8 14' stroke={color} stroke-width='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M16 10L18 12L16 14' stroke={color} stroke-width='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
      stroke={color}
      stroke-width='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M13 9.66998L11 14.33' stroke={color} stroke-width='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Hierachy3 = ({ color = 'white', size = 20, className='' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M5 8C6.65685 8 8 6.65685 8 5C8 3.34315 6.65685 2 5 2C3.34315 2 2 3.34315 2 5C2 6.65685 3.34315 8 5 8Z'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M19 15C20.6569 15 22 13.6569 22 12C22 10.3431 20.6569 9 19 9C17.3431 9 16 10.3431 16 12C16 13.6569 17.3431 15 19 15Z'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M5 22C6.65685 22 8 20.6569 8 19C8 17.3431 6.65685 16 5 16C3.34315 16 2 17.3431 2 19C2 20.6569 3.34315 22 5 22Z'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M16 12H9C6.8 12 5 11 5 8V16' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const ProgrammingArrow2 = ({ color = 'white', size = 20, className='' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M19 16V6.5C19 5.4 18.1 4.5 17 4.5H11.5' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M14 2L11 4.5L14 7' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M19 22C20.6569 22 22 20.6569 22 19C22 17.3431 20.6569 16 19 16C17.3431 16 16 17.3431 16 19C16 20.6569 17.3431 22 19 22Z'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M5 8V17.5C5 18.6 5.9 19.5 7 19.5H12.5' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M10 22L13 19.5L10 17' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M5 8C6.65685 8 8 6.65685 8 5C8 3.34315 6.65685 2 5 2C3.34315 2 2 3.34315 2 5C2 6.65685 3.34315 8 5 8Z'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const DocumentCode2 = ({ color = 'white', size = 20, className='' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M11 22H16C19.5 22 21 20 21 17V7C21 4 19.5 2 16 2H8C4.5 2 3 4 3 7V14'
      stroke={color}
      stroke-width='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5' stroke={color} stroke-width='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M4 17L2 19L4 21' stroke={color} stroke-width='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M7 17L9 19L7 21' stroke={color} stroke-width='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const MessageProgramming = ({ color = 'white', size = 20, className='' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M8.5 18.97H8C4 18.97 2 17.97 2 12.97V7.96997C2 3.96997 4 1.96997 8 1.96997H16C20 1.96997 22 3.96997 22 7.96997V12.97C22 16.97 20 18.97 16 18.97H15.5C15.19 18.97 14.89 19.12 14.7 19.37L13.2 21.37C12.54 22.25 11.46 22.25 10.8 21.37L9.29999 19.37C9.13999 19.15 8.78 18.97 8.5 18.97Z'
      stroke={color}
      stroke-width='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M8 8.70001L6 10.7L8 12.7' stroke={color} stroke-width='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M16 8.70001L18 10.7L16 12.7' stroke={color} stroke-width='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M13 8.37L11 13.03' stroke={color} stroke-width='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const MobileProgramming = ({ color = 'white', size = 20, className='' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M8.92999 2L8.95999 3.53003C8.97999 4.34003 9.64999 5 10.46 5H13.48C14.31 5 14.98 4.32 14.98 3.5V2'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M17 17L15 19L17 21' stroke={color} stroke-width='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M20 17L22 19L20 21' stroke={color} stroke-width='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M13 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7V14'
      stroke={color}
      stroke-width='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const Code = ({ color = 'white', size = 20, className='' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M6.89001 9C7.87001 9.49 8.71001 10.23 9.32001 11.15C9.67001 11.67 9.67001 12.34 9.32001 12.86C8.71001 13.77 7.87001 14.51 6.89001 15'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M13 15H17' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Code2 = ({ color = 'white', size = 20, className='' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M8.99999 13C8.33999 13.33 7.78999 13.82 7.37999 14.43C7.14999 14.78 7.14999 15.22 7.37999 15.57C7.78999 16.18 8.33999 16.67 8.99999 17'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M15.21 13C15.87 13.33 16.42 13.82 16.83 14.43C17.06 14.78 17.06 15.22 16.83 15.57C16.42 16.18 15.87 16.67 15.21 17'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M2.23001 8.01L21.45 8' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Hashtag = ({ color = 'white', size = 20, className='' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M22 13V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M19 22V16L17 18' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M19 16L21 18' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9.95002 6.26001L8.90002 15.73' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M13.11 6.26001L12.06 15.73' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6.53003 9.42001H16' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6 12.58H15.47' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Hashtag2 = ({ color = 'white', size = 20, className='' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M10 3L8 21' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M16 3L14 21' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M3.5 9H21.5' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M2.5 15H20.5' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const HashtagDown = ({ color = 'white', size = 20, className='' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M22 13V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H14' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M19 16V22L21 20' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M19 22L17 20' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M9.95002 6.26001L8.90002 15.73' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M13.11 6.26001L12.06 15.73' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6.53003 9.42001H16' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M6 12.58H15.47' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const Scroll = ({ color = 'white', size = 20, className='' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M9.6 8.97L7.11 11.46C6.82 11.75 6.82 12.24 7.11 12.53L9.6 15.02'
      stroke={color}
      stroke-width='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M14.4 8.97L16.89 11.46C17.18 11.75 17.18 12.24 16.89 12.53L14.4 15.02'
      stroke={color}
      stroke-width='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)
const SidebarLeft = ({ color = 'white', size = 20, className='' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M21.97 15V9C21.97 4 19.97 2 14.97 2H8.97C3.97 2 1.97 4 1.97 9V15C1.97 20 3.97 22 8.97 22H14.97C19.97 22 21.97 20 21.97 15Z'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M7.97 2V22' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M14.97 9.44L12.41 12L14.97 14.56' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const SidebarRight = ({ color = 'white', size = 20, className='' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M21.97 15V9C21.97 4 19.97 2 14.97 2H8.97C3.97 2 1.97 4 1.97 9V15C1.97 20 3.97 22 8.97 22H14.97C19.97 22 21.97 20 21.97 15Z'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M14.97 2V22' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M7.97 9.44L10.53 12L7.97 14.56' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const SidebarTop = ({ color = 'white', size = 20, className='' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M21.97 15V9C21.97 4 19.97 2 14.97 2H8.97C3.97 2 1.97 4 1.97 9V15C1.97 20 3.97 22 8.97 22H14.97C19.97 22 21.97 20 21.97 15Z'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M22 8.5H2' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M14.56 15.5L12 12.94L9.44 15.5' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

const SidebarBottom = ({ color = 'white', size = 20, className='' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M21.97 15V9C21.97 4 19.97 2 14.97 2H8.97C3.97 2 1.97 4 1.97 9V15C1.97 20 3.97 22 8.97 22H14.97C19.97 22 21.97 20 21.97 15Z'
      stroke={color}
      stroke-width='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M22 15.5H2' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M14.56 8.5L12 11.06L9.44 8.5' stroke={color} stroke-width='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

export default {
  Command,
  ProgrammingArrow,
  Hierachy,
  Hierachy2,
  CommandSquare,
  HierachySquare,
  HierachySquare2,
  HierachySquare3,
  Data,
  Data2,
  DocumentCode,
  CodeCircle,
  Hierachy3,
  ProgrammingArrow2,
  DocumentCode2,
  MessageProgramming,
  MobileProgramming,
  Code,
  Code2,
  Hashtag,
  Hashtag2,
  HashtagDown,
  Scroll,
  SidebarLeft,
  SidebarRight,
  SidebarTop,
  SidebarBottom,
}
