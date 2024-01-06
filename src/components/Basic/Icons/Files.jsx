import React from 'react'

const Folder = ({ color = 'white', size = 20, className='' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M21 10V16C21 20 20 21 16 21H6C2 21 1 20 1 16V6C1 2 2 1 6 1H7.5C9 1 9.33 1.44 9.9 2.2L11.4 4.2C11.78 4.7 12 5 13 5H16C20 5 21 6 21 10Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
    />
  </svg>
)
const FolderCross = ({ color = 'white', size = 20, className='' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M13.81 15.73L10.27 12.19' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M13.77 12.23L10.23 15.77' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M22 11V17C22 21 21 22 17 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44 10.9 3.2L12.4 5.2C12.78 5.7 13 6 14 6H17C21 6 22 7 22 11Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
    />
  </svg>
)
const FolderAdd = ({ color = 'white', size = 20, className='' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M12.0601 16.5V11.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M14.5 14H9.5' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M22 11V17C22 21 21 22 17 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44 10.9 3.2L12.4 5.2C12.78 5.7 13 6 14 6H17C21 6 22 7 22 11Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
    />
  </svg>
)
const FolderMinus = ({ color = 'white', size = 20, className='' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M14.4299 14.55H9.42993' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M22 11V17C22 21 21 22 17 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44 10.9 3.2L12.4 5.2C12.78 5.7 13 6 14 6H17C21 6 22 7 22 11Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
    />
  </svg>
)
const FolderFavorite = ({ color = 'white', size = 20, className='' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M9.19997 14.78L11.78 17.04C11.9 17.15 12.09 17.15 12.21 17.04L14.79 14.78C15.46 14.19 15.55 13.19 14.99 12.49C14.43 11.79 13.41 11.66 12.7 12.2L12 12.74L11.29 12.21C10.57 11.67 9.55997 11.8 8.99997 12.5C8.43997 13.19 8.52997 14.2 9.19997 14.78Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M22 11V17C22 21 21 22 17 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44 10.9 3.2L12.4 5.2C12.78 5.7 13 6 14 6H17C21 6 22 7 22 11Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
    />
  </svg>
)
const Folder2 = ({ color = 'white', size = 20, className='' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M22 11V17C22 21 21 22 17 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44 10.9 3.2L12.4 5.2C12.78 5.7 13 6 14 6H17C21 6 22 7 22 11Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
    />
    <path d='M8 2H17C19 2 20 3 20 5V6.38' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const FolderOpen = ({ color = 'white', size = 20, className='' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M21.67 14.3L21.27 19.3C21.12 20.83 21 22 18.29 22H5.71001C3.00001 22 2.88001 20.83 2.73001 19.3L2.33001 14.3C2.25001 13.47 2.51001 12.7 2.98001 12.11C2.99001 12.1 2.99001 12.1 3.00001 12.09C3.55001 11.42 4.38001 11 5.31001 11H18.69C19.62 11 20.44 11.42 20.98 12.07C20.99 12.08 21 12.09 21 12.1C21.49 12.69 21.76 13.46 21.67 14.3Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
    />
    <path
      d='M3.5 11.43V6.28003C3.5 2.88003 4.35 2.03003 7.75 2.03003H9.02C10.29 2.03003 10.58 2.41003 11.06 3.05003L12.33 4.75003C12.65 5.17003 12.84 5.43003 13.69 5.43003H16.24C19.64 5.43003 20.49 6.28003 20.49 9.68003V11.47'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M9.42993 17H14.5699' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const FolderCloud = ({ color = 'white', size = 20, className='' }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M21.67 14.3L21.27 19.3C21.12 20.83 21 22 18.29 22H5.71001C3.00001 22 2.88001 20.83 2.73001 19.3L2.33001 14.3C2.25001 13.47 2.51001 12.7 2.98001 12.11C2.99001 12.1 2.99001 12.1 3.00001 12.09C3.55001 11.42 4.38001 11 5.31001 11H18.69C19.62 11 20.44 11.42 20.98 12.07C20.99 12.08 21 12.09 21 12.1C21.49 12.69 21.76 13.46 21.67 14.3Z'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
    />
    <path
      d='M3.5 11.43V6.28003C3.5 2.88003 4.35 2.03003 7.75 2.03003H9.02C10.29 2.03003 10.58 2.41003 11.06 3.05003L12.33 4.75003C12.65 5.17003 12.84 5.43003 13.69 5.43003H16.24C19.64 5.43003 20.49 6.28003 20.49 9.68003V11.47'
      stroke={color}
      strokeWidth='1.5'
      strokeMiterlimit='10'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M9.42993 17H14.5699' stroke={color} strokeWidth='1.5' strokeMiterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)

export default {
  Folder,
  FolderCross,
  FolderAdd,
  FolderMinus,
  FolderFavorite,
  Folder2,
  FolderOpen,
  FolderCloud,
}
