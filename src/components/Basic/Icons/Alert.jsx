import React from 'react'

const Success = ({ size = 20, className }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 52 52' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M26 47.6667C37.9167 47.6667 47.6667 37.9167 47.6667 26C47.6667 14.0833 37.9167 4.33334 26 4.33334C14.0833 4.33334 4.33333 14.0833 4.33333 26C4.33333 37.9167 14.0833 47.6667 26 47.6667Z'
      fill='#268D61'
      stroke='#268D61'
      stroke-width='4'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path d='M16.7917 26L22.9233 32.1317L35.2083 19.8683' stroke='white' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' />
  </svg>
)

const Error = ({ size = 20, className }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 52 52' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M26 47.6667C37.9167 47.6667 47.6667 37.9167 47.6667 26C47.6667 14.0833 37.9167 4.33333 26 4.33333C14.0833 4.33333 4.33333 14.0833 4.33333 26C4.33333 37.9167 14.0833 47.6667 26 47.6667Z'
      fill='#F3291A'
      stroke='#F3291A'
      stroke-width='4'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path d='M19.8683 32.1317L32.1317 19.8683' stroke='white' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' />
    <path d='M32.1317 32.1317L19.8683 19.8683' stroke='white' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' />
  </svg>
)

const Info = ({ size = 20, className }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 52 52' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M26 47.6667C37.9167 47.6667 47.6667 37.9167 47.6667 26C47.6667 14.0833 37.9167 4.33334 26 4.33334C14.0833 4.33334 4.33333 14.0833 4.33333 26C4.33333 37.9167 14.0833 47.6667 26 47.6667Z'
      fill='#2E90FA'
      stroke='#2E90FA'
      stroke-width='4'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path d='M26 17.3333V28.1667' stroke='white' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' />
    <path d='M25.9881 34.6667H26.0076' stroke='white' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' />
  </svg>
)

const Warning = ({ size = 20, className }) => (
  <svg width={size} height={size} className={className} viewBox='0 0 52 52' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M26 46.3883H12.87C5.35166 46.3883 2.21 41.015 5.85 34.45L12.61 22.2733L18.98 10.8333C22.8367 3.87833 29.1633 3.87833 33.02 10.8333L39.39 22.295L46.15 34.4717C49.79 41.0367 46.6267 46.41 39.13 46.41H26V46.3883Z'
      fill='#F79009'
      stroke='#F79009'
      stroke-width='4'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path d='M25.9881 36.8333H26.0076' stroke='white' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' />
    <path d='M26 19.5V30.3333' stroke='white' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' />
  </svg>
)

export default {
  Success,
  Error,
  Info,
  Warning,
}
