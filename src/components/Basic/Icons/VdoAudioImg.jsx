import React from 'react'

const Microphone = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 19C15.31 19 18 16.31 18 13V8C18 4.69 15.31 2 12 2C8.69 2 6 4.69 6 8V13C6 16.31 8.69 19 12 19Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M3 11V13C3 17.97 7.03 22 12 22C16.97 22 21 17.97 21 13V11" stroke={color} strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.11011 7.48005C10.8901 6.83005 12.8301 6.83005 14.6101 7.48005" stroke={color} strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.03 10.48C11.23 10.15 12.5 10.15 13.7 10.48" stroke={color} strokeWidth="1.5" strokeLinecap="round"
          strokeLinejoin="round" />
  </svg>
)

const MicrophoneSlash = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.82 6.53C17.16 3.93 14.81 2 12 2C8.69 2 6 4.69 6 8V13C6 14.46 6.52 15.8 7.39 16.84" stroke={color}
          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M17.9999 9.97998V13C17.9999 16.31 15.3099 19 11.9999 19C11.2699 19 10.5599 18.87 9.91992 18.63"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.86011 19.58C7.47011 21.08 9.63011 22 12.0001 22C16.9701 22 21.0001 17.97 21.0001 13V11"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M21.5 2.98999L2.5 21.99" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11.55 5.50001V2.26001" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.5 3.5V7.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const Microphone2 = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 15.5C14.21 15.5 16 13.71 16 11.5V6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6V11.5C8 13.71 9.79 15.5 12 15.5Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.3501 9.65002V11.35C4.3501 15.57 7.7801 19 12.0001 19C16.2201 19 19.6501 15.57 19.6501 11.35V9.65002"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M10.6101 6.43C11.5101 6.1 12.4901 6.1 13.3901 6.43" stroke={color} strokeWidth="1.5" strokeLinecap="round"
          strokeLinejoin="round" />
    <path d="M11.2 8.54995C11.73 8.40995 12.28 8.40995 12.81 8.54995" stroke={color} strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 19V22" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const MicrophoneSlash2 = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 6.3V6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6V11" stroke={color} strokeWidth="1.5" strokeLinecap="round"
          strokeLinejoin="round" />
    <path d="M9.04004 14.19C9.77004 15 10.83 15.5 12 15.5C14.21 15.5 16 13.71 16 11.5V11" stroke={color}
          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M6.78003 16.95C8.15003 18.22 9.98003 19 12 19C16.22 19 19.65 15.57 19.65 11.35V9.65002"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M4.3501 9.65002V11.35C4.3501 12.41 4.5601 13.41 4.9501 14.33" stroke={color} strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20.0699 2.83997L3.92993 18.99" stroke={color} strokeWidth="1.5" strokeLinecap="round"
          strokeLinejoin="round" />
    <path d="M11 3V6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 19V22" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const VolumeCross = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 10.1595V14.1595C2 16.1595 3 17.1595 5 17.1595H6.43C6.8 17.1595 7.17 17.2695 7.49 17.4595L10.41 19.2895C12.93 20.8695 15 19.7195 15 16.7495V7.56946C15 4.58946 12.93 3.44946 10.41 5.02946L7.49 6.85946C7.17 7.04946 6.8 7.15946 6.43 7.15946H5C3 7.15946 2 8.15946 2 10.1595Z"
      stroke={color}
      strokeWidth="1.5"
    />
    <path d="M22 14.1194L18.04 10.1594" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
          strokeLinejoin="round" />
    <path d="M21.96 10.1995L18 14.1595" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
          strokeLinejoin="round" />
  </svg>
)

const VolumeSlash = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15 8.37003V7.41003C15 4.43003 12.93 3.29003 10.41 4.87003L7.49 6.70003C7.17 6.89003 6.8 7.00003 6.43 7.00003H5C3 7.00003 2 8.00003 2 10V14C2 16 3 17 5 17H7"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M10.4099 19.13C12.9299 20.71 14.9999 19.56 14.9999 16.59V12.95" stroke={color} strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18.81 9.42004C19.71 11.57 19.44 14.08 18 16" stroke={color} strokeWidth="1.5" strokeLinecap="round"
          strokeLinejoin="round" />
    <path d="M21.1501 7.80005C22.6201 11.29 22.1801 15.37 19.8301 18.5" stroke={color} strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 2L2 22" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const VolumeUp = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 9.95997V14.04C2 16.08 3.02 17.1 5.06 17.1H6.52C6.9 17.1 7.28 17.21 7.6 17.41L10.58 19.27C13.16 20.88 15.26 19.71 15.26 16.67V7.31997C15.26 4.27997 13.15 3.10997 10.58 4.71997L7.6 6.58997C7.27 6.78997 6.9 6.89997 6.52 6.89997H5.06C3.02 6.89997 2 7.91997 2 9.95997Z"
      stroke={color}
      strokeWidth="1.5"
    />
    <path d="M18 12H22" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 14V10" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const VolumeLow = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 9.95997V14.04C2 16.08 3.02 17.1 5.06 17.1H6.52C6.9 17.1 7.28 17.21 7.6 17.41L10.58 19.27C13.16 20.88 15.26 19.71 15.26 16.67V7.31997C15.26 4.27997 13.15 3.10997 10.58 4.71997L7.6 6.58997C7.27 6.78997 6.9 6.89997 6.52 6.89997H5.06C3.02 6.89997 2 7.91997 2 9.95997Z"
      stroke={color}
      strokeWidth="1.5"
    />
    <path d="M18 12H22" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const VolumeLow2 = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3.33008 10V14C3.33008 16 4.33008 17 6.33008 17H7.76008C8.13008 17 8.50008 17.11 8.82008 17.3L11.7401 19.13C14.2601 20.71 16.3301 19.56 16.3301 16.59V7.41003C16.3301 4.43003 14.2601 3.29003 11.7401 4.87003L8.82008 6.70003C8.50008 6.89003 8.13008 7.00003 7.76008 7.00003H6.33008C4.33008 7.00003 3.33008 8.00003 3.33008 10Z"
      stroke={color}
      strokeWidth="1.5"
    />
    <path d="M19.3301 8C21.1101 10.37 21.1101 13.63 19.3301 16" stroke={color} strokeWidth="1.5" strokeLinecap="round"
          strokeLinejoin="round" />
  </svg>
)

const VolumeHigh = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 10V14C2 16 3 17 5 17H6.43C6.8 17 7.17 17.11 7.49 17.3L10.41 19.13C12.93 20.71 15 19.56 15 16.59V7.41003C15 4.43003 12.93 3.29003 10.41 4.87003L7.49 6.70003C7.17 6.89003 6.8 7.00003 6.43 7.00003H5C3 7.00003 2 8.00003 2 10Z"
      stroke={color}
      strokeWidth="1.5"
    />
    <path d="M18 8C19.78 10.37 19.78 13.63 18 16" stroke={color} strokeWidth="1.5" strokeLinecap="round"
          strokeLinejoin="round" />
    <path d="M19.8301 5.5C22.7201 9.35 22.7201 14.65 19.8301 18.5" stroke={color} strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const Volume = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.5 10V14C5.5 16 6.5 17 8.5 17H9.93C10.3 17 10.67 17.11 10.99 17.3L13.91 19.13C16.43 20.71 18.5 19.56 18.5 16.59V7.41003C18.5 4.43003 16.43 3.29003 13.91 4.87003L10.99 6.70003C10.67 6.89003 10.3 7.00003 9.93 7.00003H8.5C6.5 7.00003 5.5 8.00003 5.5 10Z"
      stroke={color}
      strokeWidth="1.5"
    />
  </svg>
)

const Video = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.53 20.42H6.21C3.05 20.42 2 18.32 2 16.21V7.78996C2 4.62996 3.05 3.57996 6.21 3.57996H12.53C15.69 3.57996 16.74 4.62996 16.74 7.78996V16.21C16.74 19.37 15.68 20.42 12.53 20.42Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.52 17.1L16.74 15.15V8.84001L19.52 6.89001C20.88 5.94001 22 6.52001 22 8.19001V15.81C22 17.48 20.88 18.06 19.52 17.1Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.5 11C12.3284 11 13 10.3284 13 9.5C13 8.67157 12.3284 8 11.5 8C10.6716 8 10 8.67157 10 9.5C10 10.3284 10.6716 11 11.5 11Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const VideoSlash = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.63 7.57996C16.63 7.57996 16.66 6.62996 16.63 6.31996C16.46 4.27996 15.13 3.57996 12.52 3.57996H6.21C3.05 3.57996 2 4.62996 2 7.78996V16.21C2 17.47 2.38 18.74 3.37 19.55L4 20"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M16.74 10.95V16.21C16.74 19.37 15.69 20.42 12.53 20.42H7.26001" stroke={color} strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 6.73999V15.81C22 17.48 20.88 18.06 19.52 17.1L16.74 15.15" stroke={color} strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22.02 2.18994L2.02002 22.1899" stroke={color} strokeWidth="1.5" strokeLinecap="round"
          strokeLinejoin="round" />
  </svg>
)

const VideoSquare = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={color}
          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M9.1001 12V10.52C9.1001 8.60999 10.4501 7.83999 12.1001 8.78999L13.3801 9.52999L14.6601 10.27C16.3101 11.22 16.3101 12.78 14.6601 13.73L13.3801 14.47L12.1001 15.21C10.4501 16.16 9.1001 15.38 9.1001 13.48V12Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const VideoCircle = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.1001 12V10.52C9.1001 8.60999 10.4501 7.83999 12.1001 8.78999L13.3801 9.52999L14.6601 10.27C16.3101 11.22 16.3101 12.78 14.6601 13.73L13.3801 14.47L12.1001 15.21C10.4501 16.16 9.1001 15.38 9.1001 13.48V12Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Gallery = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={color}
          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.66992 18.95L7.59992 15.64C8.38992 15.11 9.52992 15.17 10.2399 15.78L10.5699 16.07C11.3499 16.74 12.6099 16.74 13.3899 16.07L17.5499 12.5C18.3299 11.83 19.5899 11.83 20.3699 12.5L21.9999 13.9"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const GalleryFavorite = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M12 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V11" stroke={color} strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M16.1199 5.11002C15.7899 4.07002 16.1799 2.78002 17.2599 2.43002C17.8299 2.25002 18.5399 2.40002 18.9399 2.95002C19.3199 2.38002 20.0499 2.24002 20.6199 2.43002C21.7099 2.78002 22.0999 4.07002 21.7699 5.11002C21.2499 6.75002 19.4499 7.61002 18.9499 7.61002C18.4399 7.61002 16.6499 6.77002 16.1199 5.11002Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.66992 18.95L7.59992 15.64C8.38992 15.11 9.52992 15.17 10.2399 15.78L10.5699 16.07C11.3499 16.74 12.6099 16.74 13.3899 16.07L17.5499 12.5C18.3299 11.83 19.5899 11.83 20.3699 12.5L21.9999 13.9"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const GallerySlash = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.37 20.1C2.43 18.97 2 17.31 2 15V9C2 4 4 2 9 2H15C17.19 2 18.8 2.38 19.92 3.23" stroke={color}
          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M21.97 7.98999C21.99 8.30999 22 8.64999 22 8.99999V15C22 20 20 22 15 22H8.99996C8.25996 22 7.57996 21.96 6.95996 21.86"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M22 2L2 22" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M11.4299 16.45C11.7299 16.75 12.2199 16.75 12.5199 16.45L17.5499 11.41C18.3299 10.63 19.5899 10.63 20.3699 11.41L21.9999 13.05"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const GalleryTick = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M13 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10" stroke={color} strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 4.99005L17.46 6.45005L21.36 2.55005" stroke={color} strokeWidth="1.5" strokeLinecap="round"
          strokeLinejoin="round" />
    <path
      d="M2.66992 18.95L7.59992 15.64C8.38992 15.11 9.52992 15.17 10.2399 15.78L10.5699 16.07C11.3499 16.74 12.6099 16.74 13.3899 16.07L17.5499 12.5C18.3299 11.83 19.5899 11.83 20.3699 12.5L21.9999 13.9"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const GalleryImport = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M13 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10" stroke={color} strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 2V8L20 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 8L16 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M2.66992 18.95L7.59992 15.64C8.38992 15.11 9.52992 15.17 10.2399 15.78L10.5699 16.07C11.3499 16.74 12.6099 16.74 13.3899 16.07L17.5499 12.5C18.3299 11.83 19.5899 11.83 20.3699 12.5L21.9999 13.9"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const GalleryAdd = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M13 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10" stroke={color} strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15.75 5H21.25" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M18.5 7.75V2.25" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path
      d="M2.66992 18.95L7.59992 15.64C8.38992 15.11 9.52992 15.17 10.2399 15.78L10.5699 16.07C11.3499 16.74 12.6099 16.74 13.3899 16.07L17.5499 12.5C18.3299 11.83 19.5899 11.83 20.3699 12.5L21.9999 13.9"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const GalleryRemove = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M13 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10" stroke={color} strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16.5601 6.94L20.4401 3.06" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M20.4401 6.94L16.5601 3.06" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path
      d="M2.66992 18.95L7.59992 15.64C8.38992 15.11 9.52992 15.17 10.2399 15.78L10.5699 16.07C11.3499 16.74 12.6099 16.74 13.3899 16.07L17.5499 12.5C18.3299 11.83 19.5899 11.83 20.3699 12.5L21.9999 13.9"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const GalleryEdit = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M13 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10" stroke={color} strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M19.1399 2.59003L15.5099 6.22003C15.3699 6.36003 15.2299 6.63003 15.2099 6.83003L15.0099 8.22003C14.9399 8.72003 15.2899 9.07003 15.7899 9.00003L17.1799 8.80003C17.3699 8.77003 17.6499 8.64003 17.7899 8.50003L21.4199 4.87003C22.0499 4.24003 22.3399 3.52003 21.4199 2.60003C20.4899 1.66003 19.7699 1.96003 19.1399 2.59003Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.6201 3.10999C18.9301 4.20999 19.7901 5.06999 20.8901 5.37999"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.66992 18.95L7.59992 15.64C8.38992 15.11 9.52992 15.17 10.2399 15.78L10.5699 16.07C11.3499 16.74 12.6099 16.74 13.3899 16.07L17.5499 12.5C18.3299 11.83 19.5899 11.83 20.3699 12.5L21.9999 13.9"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Image = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21.6799 16.96L18.5499 9.65001C17.4899 7.17001 15.5399 7.07001 14.2299 9.43001L12.3399 12.84C11.3799 14.57 9.58993 14.72 8.34993 13.17L8.12993 12.89C6.83993 11.27 5.01993 11.47 4.08993 13.32L2.36993 16.77C1.15993 19.17 2.90993 22 5.58993 22H18.3499C20.9499 22 22.6999 19.35 21.6799 16.96Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.96997 8C8.62682 8 9.96997 6.65685 9.96997 5C9.96997 3.34315 8.62682 2 6.96997 2C5.31312 2 3.96997 3.34315 3.96997 5C3.96997 6.65685 5.31312 8 6.96997 8Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ScreenMirroring = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={color}
          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M12.6 18.5H16.4C17.9 18.5 18.5 17.9 18.5 16.4V14.6C18.5 13.1 17.9 12.5 16.4 12.5H12.6C11.1 12.5 10.5 13.1 10.5 14.6V16.4C10.5 17.9 11.1 18.5 12.6 18.5Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Camera = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.75992 22H17.2399C19.9999 22 21.0999 20.31 21.2299 18.25L21.7499 9.99C21.8899 7.83 20.1699 6 17.9999 6C17.3899 6 16.8299 5.65 16.5499 5.11L15.8299 3.66C15.3699 2.75 14.1699 2 13.1499 2H10.8599C9.82992 2 8.62992 2.75 8.16992 3.66L7.44992 5.11C7.16992 5.65 6.60992 6 5.99992 6C3.82992 6 2.10992 7.83 2.24992 9.99L2.76992 18.25C2.88992 20.31 3.99992 22 6.75992 22Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M10.5 8H13.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M12 18C13.79 18 15.25 16.54 15.25 14.75C15.25 12.96 13.79 11.5 12 11.5C10.21 11.5 8.75 12.96 8.75 14.75C8.75 16.54 10.21 18 12 18Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const CameraSlash = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 10H9" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M6.76001 22H17.24C20 22 21.1 20.31 21.23 18.25L21.75 9.99001C21.81 9.06001 21.52 8.19001 21.01 7.51001"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.9999 6C17.3899 6 16.8299 5.65 16.5499 5.11L15.8299 3.66C15.3699 2.75 14.1699 2 13.1499 2H10.8599C9.82992 2 8.62992 2.75 8.16992 3.66L7.44992 5.11C7.16992 5.65 6.60992 6 5.99992 6C3.82992 6 2.10992 7.83 2.24992 9.99L2.76992 18.25C2.81992 19.07 3.02992 19.84 3.43992 20.46"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 17.31C10.55 17.74 11.25 18 12 18C13.79 18 15.25 16.54 15.25 14.75C15.25 14.11 15.07 13.52 14.75 13.02"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M22 2L2 22" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const Play = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 12V8.44002C4 4.02002 7.13 2.21002 10.96 4.42002L14.05 6.20002L17.14 7.98002C20.97 10.19 20.97 13.81 17.14 16.02L14.05 17.8L10.96 19.58C7.13 21.79 4 19.98 4 15.56V12Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Record = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Stop = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.3 21H14.7C19.2 21 21 19.2 21 14.7V9.3C21 4.8 19.2 3 14.7 3H9.3C4.8 3 3 4.8 3 9.3V14.7C3 19.2 4.8 21 9.3 21Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const MusicNote = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.96997 22C10.1791 22 11.97 20.2091 11.97 18C11.97 15.7909 10.1791 14 7.96997 14C5.76083 14 3.96997 15.7909 3.96997 18C3.96997 20.2091 5.76083 22 7.96997 22Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M11.97 18V4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M14.61 2.11L19.03 3.58C20.1 3.94 20.98 5.15 20.98 6.28V7.45C20.98 8.98 19.8 9.83 18.35 9.35L13.93 7.88C12.86 7.52 11.98 6.31 11.98 5.18V4C11.97 2.48 13.16 1.62 14.61 2.11Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Music = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.27991 22C8.00304 22 9.39991 20.6031 9.39991 18.88C9.39991 17.1569 8.00304 15.76 6.27991 15.76C4.55678 15.76 3.15991 17.1569 3.15991 18.88C3.15991 20.6031 4.55678 22 6.27991 22Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.8399 16.8V4.59997C20.8399 1.99997 19.2099 1.63997 17.5599 2.08997L11.3199 3.78997C10.1799 4.09997 9.3999 4.99997 9.3999 6.29997V8.46997V9.92997V18.87"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.7201 19.92C19.4432 19.92 20.8401 18.5231 20.8401 16.8C20.8401 15.0769 19.4432 13.68 17.7201 13.68C15.997 13.68 14.6001 15.0769 14.6001 16.8C14.6001 18.5231 15.997 19.92 17.7201 19.92Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M9.3999 9.52002L20.8399 6.40002" stroke={color} strokeWidth="1.5" strokeLinecap="round"
          strokeLinejoin="round" />
  </svg>
)

const VideoVertical = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={color}
          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.88989 2.52002V21.48" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16.8899 2.52002V21.48" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.89004 6.96997H2.54004" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.89003 12H2.03003" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.88998 16.97H2.47998" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21.89 6.96997H17.54" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21.89 12H17.03" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16.97 12H5.96997" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21.89 16.97H17.48" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const VideoHorizontal = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z" stroke={color}
          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2.52002 17.11H21.48" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2.52002 7.10999H21.48" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.96997 17.11V21.46" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 17.11V21.97" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16.97 17.11V21.52" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.96997 2.10999V6.45999" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 2.10999V6.96999" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 7.03003V18.03" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16.97 2.10999V6.51999" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const VideoPlay = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z" stroke={color}
          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2.52002 7.10999H21.48" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.52002 2.10999V6.96999" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15.48 2.10999V6.51999" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M9.75 14.45V13.25C9.75 11.71 10.84 11.08 12.17 11.85L13.21 12.45L14.25 13.05C15.58 13.82 15.58 15.08 14.25 15.85L13.21 16.45L12.17 17.05C10.84 17.82 9.75 17.19 9.75 15.65V14.45V14.45Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Subtitle = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={color}
          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17.4999 17.08H15.6499" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12.97 17.08H6.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17.5 13.32H11.97" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.27 13.32H6.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const PlayCircle = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.97 22C17.4928 22 21.97 17.5228 21.97 12C21.97 6.47715 17.4928 2 11.97 2C6.44712 2 1.96997 6.47715 1.96997 12C1.96997 17.5228 6.44712 22 11.97 22Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.73999 12.23V10.56C8.73999 8.48 10.21 7.63 12.01 8.67L13.46 9.51L14.91 10.35C16.71 11.39 16.71 13.09 14.91 14.13L13.46 14.97L12.01 15.81C10.21 16.85 8.73999 16 8.73999 13.92V12.23Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const RecordCircle = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.97 22C17.4928 22 21.97 17.5228 21.97 12C21.97 6.47715 17.4928 2 11.97 2C6.44712 2 1.96997 6.47715 1.96997 12C1.96997 17.5228 6.44712 22 11.97 22Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 16.23C14.3362 16.23 16.23 14.3362 16.23 12C16.23 9.66386 14.3362 7.77002 12 7.77002C9.66386 7.77002 7.77002 9.66386 7.77002 12C7.77002 14.3362 9.66386 16.23 12 16.23Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const StopCircle = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.97 22C17.4928 22 21.97 17.5228 21.97 12C21.97 6.47715 17.4928 2 11.97 2C6.44712 2 1.96997 6.47715 1.96997 12C1.96997 17.5228 6.44712 22 11.97 22Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.73 16.23H13.27C15.39 16.23 16.23 15.38 16.23 13.27V10.73C16.23 8.61002 15.38 7.77002 13.27 7.77002H10.73C8.61002 7.77002 7.77002 8.62002 7.77002 10.73V13.27C7.77002 15.38 8.62002 16.23 10.73 16.23Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const PauseCircle = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.97 22C17.4928 22 21.97 17.5228 21.97 12C21.97 6.47715 17.4928 2 11.97 2C6.44712 2 1.96997 6.47715 1.96997 12C1.96997 17.5228 6.44712 22 11.97 22Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.72 14.53V9.46999C10.72 8.98999 10.52 8.79999 10.01 8.79999H8.71C8.2 8.79999 8 8.98999 8 9.46999V14.53C8 15.01 8.2 15.2 8.71 15.2H10C10.52 15.2 10.72 15.01 10.72 14.53Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 14.53V9.46999C16 8.98999 15.8 8.79999 15.29 8.79999H14C13.49 8.79999 13.29 8.98999 13.29 9.46999V14.53C13.29 15.01 13.49 15.2 14 15.2H15.29C15.8 15.2 16 15.01 16 14.53Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Pause = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.65 19.11V4.89C10.65 3.54 10.08 3 8.64 3H5.01C3.57 3 3 3.54 3 4.89V19.11C3 20.46 3.57 21 5.01 21H8.64C10.08 21 10.65 20.46 10.65 19.11Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.0001 19.11V4.89C21.0001 3.54 20.4301 3 18.9901 3H15.3601C13.9301 3 13.3501 3.54 13.3501 4.89V19.11C13.3501 20.46 13.9201 21 15.3601 21H18.9901C20.4301 21 21.0001 20.46 21.0001 19.11Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Backward = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={color}
          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M8.41998 10.9C9.48037 10.9 10.34 10.0404 10.34 8.98C10.34 7.91961 9.48037 7.06 8.41998 7.06C7.3596 7.06 6.5 7.91961 6.5 8.98C6.5 10.0404 7.3596 10.9 8.41998 10.9Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.41998 16.94C9.48037 16.94 10.34 16.0804 10.34 15.02C10.34 13.9596 9.48037 13.1 8.41998 13.1C7.3596 13.1 6.5 13.9596 6.5 15.02C6.5 16.0804 7.3596 16.94 8.41998 16.94Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M17.4999 8.70001L10.1599 14.19" stroke={color} strokeWidth="1.5" strokeLinecap="round"
          strokeLinejoin="round" />
    <path d="M17.4999 15.28L10.1599 9.78998" stroke={color} strokeWidth="1.5" strokeLinecap="round"
          strokeLinejoin="round" />
  </svg>
)

const Forward = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 8.34V15.66C2 17.16 3.62999 18.1 4.92999 17.35L8.10001 15.53L11.27 13.7C11.47 13.58 11.63 13.45 11.76 13.29V10.73C11.63 10.57 11.47 10.44 11.27 10.32L8.10001 8.48999L4.92999 6.67002C3.62999 5.90002 2 6.84 2 8.34Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.76 8.34V15.66C11.76 17.16 13.39 18.1 14.69 17.35L17.86 15.53L21.03 13.7C22.33 12.95 22.33 11.08 21.03 10.32L17.86 8.48999L14.69 6.67002C13.39 5.90002 11.76 6.84 11.76 8.34Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Previous = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20.24 7.21999V16.79C20.24 18.75 18.11 19.98 16.41 19L12.26 16.61L8.10996 14.21C6.40996 13.23 6.40996 10.78 8.10996 9.79998L12.26 7.39998L16.41 5.01C18.11 4.03 20.24 5.24999 20.24 7.21999Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M3.76001 18.18V5.82001" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const Next = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3.76001 7.21999V16.79C3.76001 18.75 5.89 19.98 7.59 19L11.74 16.61L15.89 14.21C17.59 13.23 17.59 10.78 15.89 9.79998L11.74 7.39998L7.59 5.01C5.89 4.03 3.76001 5.24999 3.76001 7.21999Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M20.24 18.18V5.82001" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const Radio = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 5H7C4 5 2 7 2 10V17C2 20 4 22 7 22H17C20 22 22 20 22 17V10C22 7 20 5 17 5Z" stroke={color}
          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 2V5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M8.5 16C9.88071 16 11 14.8807 11 13.5C11 12.1193 9.88071 11 8.5 11C7.11929 11 6 12.1193 6 13.5C6 14.8807 7.11929 16 8.5 16Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M14.5 11H18.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.5 15H15" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 15H18.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const MusicCircle = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.58008 8.66998C3.20008 6.90998 4.30009 5.37998 5.72009 4.22998" stroke={color} strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 12C2 13.17 2.20999 14.29 2.57999 15.33" stroke={color} strokeWidth="1.5" strokeLinecap="round"
          strokeLinejoin="round" />
    <path
      d="M9.09009 21.57C10.0101 21.85 10.9901 22 12.0001 22C17.5201 22 22.0001 17.52 22.0001 12C22.0001 11.4 21.9401 10.81 21.8401 10.24"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M5.71991 19.75C5.24991 19.37 4.7999 18.95 4.3999 18.49" stroke={color} strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M20.2401 6.34003C18.4401 3.72003 15.4201 2 12.0001 2C10.9901 2 10.0101 2.14999 9.09009 2.42999"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.59 17.11C9.46813 17.11 10.18 16.3982 10.18 15.52C10.18 14.6419 9.46813 13.93 8.59 13.93C7.71186 13.93 7 14.6419 7 15.52C7 16.3982 7.71186 17.11 8.59 17.11Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.9999 14.4601V8.25003C15.9999 6.93003 15.1699 6.74 14.3299 6.97L11.1499 7.84006C10.5699 8.00006 10.1699 8.45003 10.1699 9.12003V10.23V10.97V15.5201"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.4101 16.05C15.2882 16.05 16.0001 15.3382 16.0001 14.46C16.0001 13.5819 15.2882 12.87 14.4101 12.87C13.5319 12.87 12.8201 13.5819 12.8201 14.46C12.8201 15.3382 13.5319 16.05 14.4101 16.05Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M10.1799 10.76L15.9999 9.16998" stroke={color} strokeWidth="1.5" strokeLinecap="round"
          strokeLinejoin="round" />
  </svg>
)

const PlayCircle2 = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.0701 19.07C22.9801 15.16 22.9801 8.82999 19.0701 4.92999" stroke={color} strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4.93006 4.92999C1.02006 8.83999 1.02006 15.17 4.93006 19.07" stroke={color} strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M8.69995 21.41C9.76995 21.78 10.8799 21.96 11.9999 21.96C13.1199 21.95 14.2299 21.78 15.2999 21.41"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.69995 2.59003C9.76995 2.22003 10.8799 2.03998 11.9999 2.03998C13.1199 2.03998 14.2299 2.22003 15.2999 2.59003"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.73999 12V10.33C8.73999 8.25003 10.21 7.40002 12.01 8.44002L13.46 9.28005L14.91 10.12C16.71 11.16 16.71 12.86 14.91 13.9L13.46 14.74L12.01 15.58C10.21 16.62 8.73999 15.77 8.73999 13.69V12Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const PlayRemove = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22 12C22 13.31 21.75 14.57 21.28 15.72C20.63 15.27 19.84 15 19 15C18.06 15 17.19 15.33 16.5 15.88C15.58 16.61 15 17.74 15 19C15 19.75 15.21 20.46 15.58 21.06C15.62 21.13 15.67 21.2 15.73 21.27C14.58 21.74 13.32 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.37988 12V10.61C9.37988 8.89001 10.5999 8.18001 12.0899 9.04001L13.2899 9.73001L14.4899 10.42C15.9799 11.28 15.9799 12.69 14.4899 13.55L13.2899 14.24L12.0899 14.93C10.5999 15.79 9.37988 15.09 9.37988 13.36V12Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M23 19C23 19.75 22.79 20.46 22.42 21.06C22.21 21.42 21.94 21.74 21.63 22C20.93 22.63 20.01 23 19 23C17.63 23 16.43 22.31 15.73 21.27C15.67 21.2 15.62 21.13 15.58 21.06C15.21 20.46 15 19.75 15 19C15 17.74 15.58 16.61 16.5 15.88C17.19 15.33 18.06 15 19 15C19.84 15 20.63 15.27 21.28 15.72C22.32 16.44 23 17.64 23 19Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M20.0699 20.04L17.95 17.93" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
          strokeLinejoin="round" />
    <path d="M20.0499 17.96L17.9299 20.07" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
          strokeLinejoin="round" />
  </svg>
)

const PlayAdd = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22 12C22 13.31 21.75 14.57 21.28 15.72C20.63 15.27 19.84 15 19 15C18.06 15 17.19 15.33 16.5 15.88C15.58 16.61 15 17.74 15 19C15 19.75 15.21 20.46 15.58 21.06C15.62 21.13 15.67 21.2 15.73 21.27C14.58 21.74 13.32 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.37988 12V10.61C9.37988 8.89001 10.5999 8.18001 12.0899 9.04001L13.2899 9.73001L14.4899 10.42C15.9799 11.28 15.9799 12.69 14.4899 13.55L13.2899 14.24L12.0899 14.93C10.5999 15.79 9.37988 15.09 9.37988 13.36V12Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M23 19C23 19.75 22.79 20.46 22.42 21.06C22.21 21.42 21.94 21.74 21.63 22C20.93 22.63 20.01 23 19 23C17.54 23 16.27 22.22 15.58 21.06C15.21 20.46 15 19.75 15 19C15 17.74 15.58 16.61 16.5 15.88C17.19 15.33 18.06 15 19 15C21.21 15 23 16.79 23 19Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M20.49 18.98H17.51" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
          strokeLinejoin="round" />
    <path d="M19 17.52V20.51" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
          strokeLinejoin="round" />
  </svg>
)

const Backward5Sec = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13.9101 10.83H10.8501L10.0901 13.12H12.3801C13.2201 13.12 13.9101 13.8 13.9101 14.65C13.9101 15.49 13.2301 16.18 12.3801 16.18H10.0901"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M10.02 4.46997L12 2" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M4.90988 7.79999C3.79988 9.27999 3.10986 11.11 3.10986 13.11C3.10986 18.02 7.08988 22 11.9999 22C16.9099 22 20.8899 18.02 20.8899 13.11C20.8899 8.19999 16.9099 4.21997 11.9999 4.21997C11.3199 4.21997 10.6599 4.31002 10.0199 4.46002"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Backward10Sec = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.54004 15.92V10.58L8.04004 12.25" stroke={color} strokeWidth="1.5" strokeLinecap="round"
          strokeLinejoin="round" />
    <path d="M10.02 4.46997L12 2" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M4.90988 7.79999C3.79988 9.27999 3.10986 11.11 3.10986 13.11C3.10986 18.02 7.08988 22 11.9999 22C16.9099 22 20.8899 18.02 20.8899 13.11C20.8899 8.19999 16.9099 4.21997 11.9999 4.21997C11.3199 4.21997 10.6599 4.31002 10.0199 4.46002"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 10.58C15.1 10.58 16 11.48 16 12.58V13.93C16 15.03 15.1 15.93 14 15.93C12.9 15.93 12 15.03 12 13.93V12.58C12 11.47 12.9 10.58 14 10.58Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Backward15Sec = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.9601 10.83H12.9001L12.1401 13.12H14.4301C15.2701 13.12 15.9601 13.8 15.9601 14.65C15.9601 15.49 15.2801 16.18 14.4301 16.18H12.1401"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M9.54004 16.17V10.83L8.04004 12.5" stroke={color} strokeWidth="1.5" strokeLinecap="round"
          strokeLinejoin="round" />
    <path d="M10.02 4.46997L12 2" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M4.90985 7.79999C3.79985 9.27999 3.10986 11.11 3.10986 13.11C3.10986 18.02 7.08988 22 11.9999 22C16.9099 22 20.8899 18.02 20.8899 13.11C20.8899 8.19999 16.9099 4.21997 11.9999 4.21997C11.3199 4.21997 10.6599 4.31002 10.0199 4.46002"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Forward5Sec = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.98 4.46997L12 2" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M19.0899 7.79999C20.1999 9.27999 20.8899 11.11 20.8899 13.11C20.8899 18.02 16.9099 22 11.9999 22C7.08988 22 3.10986 18.02 3.10986 13.11C3.10986 8.19999 7.08988 4.21997 11.9999 4.21997C12.6799 4.21997 13.3399 4.31002 13.9799 4.46002"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.91 10.83H10.85L10.0901 13.12H12.3801C13.2201 13.12 13.91 13.8 13.91 14.65C13.91 15.49 13.2301 16.18 12.3801 16.18H10.0901"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Forward10Sec = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.98 4.46997L12 2" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M19.0899 7.79999C20.1999 9.27999 20.8899 11.11 20.8899 13.11C20.8899 18.02 16.9099 22 11.9999 22C7.08988 22 3.10986 18.02 3.10986 13.11C3.10986 8.19999 7.08988 4.21997 11.9999 4.21997C12.6799 4.21997 13.3399 4.31002 13.9799 4.46002"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M9.54004 15.92V10.58L8.04004 12.25" stroke={color} strokeWidth="1.5" strokeLinecap="round"
          strokeLinejoin="round" />
    <path
      d="M14 10.58C15.1 10.58 16 11.48 16 12.58V13.93C16 15.03 15.1 15.93 14 15.93C12.9 15.93 12 15.03 12 13.93V12.58C12 11.47 12.9 10.58 14 10.58Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Forward15Sec = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.9601 10.83H12.9001L12.1401 13.12H14.4301C15.2701 13.12 15.9601 13.8 15.9601 14.65C15.9601 15.49 15.2801 16.18 14.4301 16.18H12.1401"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M9.54004 16.17V10.83L8.04004 12.5" stroke={color} strokeWidth="1.5" strokeLinecap="round"
          strokeLinejoin="round" />
    <path d="M13.98 4.46997L12 2" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M19.0899 7.79999C20.1999 9.27999 20.8899 11.11 20.8899 13.11C20.8899 18.02 16.9099 22 11.9999 22C7.08988 22 3.10986 18.02 3.10986 13.11C3.10986 8.19999 7.08988 4.21997 11.9999 4.21997C12.6799 4.21997 13.3399 4.31002 13.9799 4.46002"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const MusicPlaylist = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17 22H7C4 22 2 20.5 2 17V12C2 8.5 4 7 7 7H17C20 7 22 8.5 22 12V17C22 20.5 20 22 17 22Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M6 4.5H18" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
          strokeLinejoin="round" />
    <path d="M9 2H15" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
          strokeLinejoin="round" />
    <path
      d="M8.89001 19.11C9.64664 19.11 10.26 18.4966 10.26 17.74C10.26 16.9834 9.64664 16.37 8.89001 16.37C8.13338 16.37 7.52002 16.9834 7.52002 17.74C7.52002 18.4966 8.13338 19.11 8.89001 19.11Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.28 16.83V11.48C15.28 10.34 14.57 10.18 13.84 10.38L11.1 11.13C10.6 11.27 10.26 11.66 10.26 12.23V13.18V13.82V17.74"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.91 18.2C14.6667 18.2 15.2801 17.5866 15.2801 16.83C15.2801 16.0734 14.6667 15.46 13.91 15.46C13.1534 15.46 12.54 16.0734 12.54 16.83C12.54 17.5866 13.1534 18.2 13.91 18.2Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M10.26 13.83L15.28 12.46" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const MusicFilter = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 3H22" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
          strokeLinejoin="round" />
    <path d="M2 9H11" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
          strokeLinejoin="round" />
    <path d="M2 15H8" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
          strokeLinejoin="round" />
    <path d="M2 21H6" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
          strokeLinejoin="round" />
    <path
      d="M11.8399 22C13.0439 22 14.0199 21.024 14.0199 19.82C14.0199 18.616 13.0439 17.64 11.8399 17.64C10.6359 17.64 9.65991 18.616 9.65991 19.82C9.65991 21.024 10.6359 22 11.8399 22Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 18.37V9.85999C22 8.04999 20.86 7.79999 19.71 8.10999L15.36 9.3C14.57 9.52 14.02 10.14 14.02 11.05V12.57V13.59V19.82"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.8199 20.55C21.0239 20.55 21.9999 19.574 21.9999 18.37C21.9999 17.166 21.0239 16.19 19.8199 16.19C18.6159 16.19 17.6399 17.166 17.6399 18.37C17.6399 19.574 18.6159 20.55 19.8199 20.55Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M14.02 13.6L22 11.42" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const MusicDashboard = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z" stroke={color}
          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 2.5V21.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M11.47 16.8C12.2929 16.8 12.96 16.1329 12.96 15.31C12.96 14.4871 12.2929 13.82 11.47 13.82C10.6471 13.82 9.97998 14.4871 9.97998 15.31C9.97998 16.1329 10.6471 16.8 11.47 16.8Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.43 14.31V8.47996C18.43 7.23996 17.65 7.07 16.86 7.28L13.88 8.09C13.34 8.24 12.96 8.66995 12.96 9.28995V10.33V11.03V15.3"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.9299 15.8C17.7528 15.8 18.4199 15.1329 18.4199 14.31C18.4199 13.4871 17.7528 12.82 16.9299 12.82C16.107 12.82 15.4399 13.4871 15.4399 14.31C15.4399 15.1329 16.107 15.8 16.9299 15.8Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M12.96 11.04L18.43 9.54999" stroke={color} strokeWidth="1.5" strokeLinecap="round"
          strokeLinejoin="round" />
  </svg>
)

const MusicSquareRemove = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21 8.65002V14.35C21 14.69 20.99 15.02 20.97 15.33C20.25 14.51 19.18 14 18 14C15.79 14 14 15.79 14 18C14 18.75 14.21 19.46 14.58 20.06C14.78 20.4 15.04 20.71 15.34 20.97C15.03 20.99 14.7 21 14.35 21H8.65C3.9 21 2 19.1 2 14.35V8.65002C2 3.90002 3.9 2 8.65 2H14.35C19.1 2 21 3.90002 21 8.65002Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.72002 14.42C7.52084 14.42 8.17002 13.7708 8.17002 12.97C8.17002 12.1692 7.52084 11.52 6.72002 11.52C5.91921 11.52 5.27002 12.1692 5.27002 12.97C5.27002 13.7708 5.91921 14.42 6.72002 14.42Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.4699 12V6.34001C13.4699 5.13001 12.7099 4.96997 11.9499 5.17997L9.05992 5.96995C8.53992 6.10995 8.16992 6.52999 8.16992 7.12999V8.14V8.81999V12.97"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.0301 13.45C12.8309 13.45 13.4801 12.8008 13.4801 12C13.4801 11.1992 12.8309 10.55 12.0301 10.55C11.2293 10.55 10.5801 11.1992 10.5801 12C10.5801 12.8008 11.2293 13.45 12.0301 13.45Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M8.16992 8.83002L13.4699 7.38" stroke={color} strokeWidth="1.5" strokeLinecap="round"
          strokeLinejoin="round" />
    <path
      d="M22 18C22 18.75 21.79 19.46 21.42 20.06C20.73 21.22 19.46 22 18 22C16.97 22 16.04 21.61 15.34 20.97C15.04 20.71 14.78 20.4 14.58 20.06C14.21 19.46 14 18.75 14 18C14 15.79 15.79 14 18 14C19.18 14 20.25 14.51 20.97 15.33C21.61 16.04 22 16.98 22 18Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M19.07 19.04L16.95 16.93" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
          strokeLinejoin="round" />
    <path d="M19.0499 16.96L16.9299 19.07" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
          strokeLinejoin="round" />
  </svg>
)

const MusicSquareAdd = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21 8.65002V14.35C21 14.69 20.99 15.02 20.97 15.33C20.25 14.51 19.18 14 18 14C15.79 14 14 15.79 14 18C14 18.75 14.21 19.46 14.58 20.06C14.78 20.4 15.04 20.71 15.34 20.97C15.03 20.99 14.7 21 14.35 21H8.64999C3.89999 21 2 19.1 2 14.35V8.65002C2 3.90002 3.89999 2 8.64999 2H14.35C19.1 2 21 3.90002 21 8.65002Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.72002 14.42C7.52083 14.42 8.17001 13.7708 8.17001 12.97C8.17001 12.1692 7.52083 11.52 6.72002 11.52C5.9192 11.52 5.27002 12.1692 5.27002 12.97C5.27002 13.7708 5.9192 14.42 6.72002 14.42Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.4799 12V6.34001C13.4799 5.13001 12.7199 4.96997 11.9599 5.17997L9.06995 5.96995C8.54995 6.10995 8.17993 6.52999 8.17993 7.12999V8.14V8.81999V12.97"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.0301 13.45C12.8309 13.45 13.4801 12.8008 13.4801 12C13.4801 11.1992 12.8309 10.55 12.0301 10.55C11.2293 10.55 10.5801 11.1992 10.5801 12C10.5801 12.8008 11.2293 13.45 12.0301 13.45Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M8.16992 8.83002L13.4799 7.38" stroke={color} strokeWidth="1.5" strokeLinecap="round"
          strokeLinejoin="round" />
    <path
      d="M22 18C22 18.75 21.79 19.46 21.42 20.06C20.73 21.22 19.46 22 18 22C16.54 22 15.27 21.22 14.58 20.06C14.21 19.46 14 18.75 14 18C14 15.79 15.79 14 18 14C20.21 14 22 15.79 22 18Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M19.49 17.98H16.51" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
          strokeLinejoin="round" />
    <path d="M18 16.52V19.51" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
          strokeLinejoin="round" />
  </svg>
)

const MusicSquareSearch = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.35 21H8.64999C3.89999 21 2 19.1 2 14.35V8.65002C2 3.90002 3.89999 2 8.64999 2H14.35C19.1 2 21 3.90002 21 8.65002V12.35"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.72002 14.42C7.52083 14.42 8.17001 13.7708 8.17001 12.97C8.17001 12.1692 7.52083 11.52 6.72002 11.52C5.9192 11.52 5.27002 12.1692 5.27002 12.97C5.27002 13.7708 5.9192 14.42 6.72002 14.42Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.4799 12V6.34001C13.4799 5.13001 12.7199 4.96997 11.9599 5.17997L9.06995 5.96995C8.54995 6.10995 8.17993 6.52999 8.17993 7.12999V8.14V8.81999V12.97"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.0301 13.45C12.8309 13.45 13.4801 12.8008 13.4801 12C13.4801 11.1992 12.8309 10.55 12.0301 10.55C11.2293 10.55 10.5801 11.1992 10.5801 12C10.5801 12.8008 11.2293 13.45 12.0301 13.45Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M8.16992 8.83002L13.4799 7.38" stroke={color} strokeWidth="1.5" strokeLinecap="round"
          strokeLinejoin="round" />
    <path
      d="M17.94 21.28C19.7073 21.28 21.14 19.8473 21.14 18.08C21.14 16.3127 19.7073 14.88 17.94 14.88C16.1727 14.88 14.74 16.3127 14.74 18.08C14.74 19.8473 16.1727 21.28 17.94 21.28Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M21.74 21.88L20.74 20.88" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const RepeatMusic = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14 3L16.44 5.34003L8.48999 5.32001C4.91999 5.32001 1.98999 8.25003 1.98999 11.84C1.98999 13.63 2.71998 15.26 3.89998 16.44"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.0001 21L7.56006 18.66L15.5101 18.68C19.0801 18.68 22.0101 15.75 22.0101 12.16C22.0101 10.37 21.2801 8.74 20.1001 7.56"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M9 12H15" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const Repeat1 = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14 3L16.44 5.34003L8.48999 5.32001C4.91999 5.32001 1.98999 8.25003 1.98999 11.84C1.98999 13.63 2.71999 15.26 3.89999 16.44"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.0001 21L7.56006 18.66L15.5101 18.68C19.0801 18.68 22.0101 15.75 22.0101 12.16C22.0101 10.37 21.2801 8.74 20.1001 7.56"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M12.25 14.67V9.33002L10.75 11" stroke={color} strokeWidth="1.5" strokeLinecap="round"
          strokeLinejoin="round" />
  </svg>
)

const Loop = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 17.98L5.54999 17.99C6.45999 17.99 7.31 17.54 7.81 16.79L14.2 7.21C14.7 6.46 15.55 5.99999 16.46 6.00999L21.01 6.03001"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M19 19.98L21 17.98" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.89001 8.61999L7.81 7.11999C7.3 6.40999 6.47999 5.98999 5.60999 5.99999L3 6.01" stroke={color}
          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12.97 15.38L14.19 16.95C14.7 17.61 15.5 18 16.34 18L21.01 17.98" stroke={color} strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 6.02002L19 4.02002" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const Devices = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.7199 9.69002C17.7799 11.75 17.7799 15.08 15.7199 17.13C13.6599 19.19 10.3299 19.19 8.27986 17.13C6.21986 15.07 6.21986 11.74 8.27986 9.69002C10.3299 7.63002 13.6699 7.63002 15.7199 9.69002Z"
      stroke={color}
      strokeWidth="1.5093"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M11.9999 13.41L10.4099 15" stroke={color} strokeWidth="1.5093" strokeLinecap="round"
          strokeLinejoin="round" />
    <path
      d="M19.0701 6.34003C19.2201 6.49003 19.2201 6.74003 19.0701 6.90003C18.9201 7.05003 18.6701 7.05003 18.5101 6.90003C18.3501 6.75003 18.3601 6.50003 18.5101 6.34003C18.6601 6.18003 18.9201 6.18003 19.0701 6.34003Z"
      stroke={color}
      strokeMiterlimit="10"
    />
    <path
      d="M19.0701 6.34003C19.2201 6.49003 19.2201 6.74003 19.0701 6.90003C18.9201 7.05003 18.6701 7.05003 18.5101 6.90003C18.3501 6.75003 18.3601 6.50003 18.5101 6.34003C18.6601 6.18003 18.9201 6.18003 19.0701 6.34003Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.48988 19.92C5.63988 20.07 5.63988 20.32 5.48988 20.48C5.33988 20.64 5.08988 20.63 4.92988 20.48C4.77988 20.33 4.77988 20.08 4.92988 19.92C5.07988 19.76 5.33988 19.76 5.48988 19.92Z"
      stroke={color}
      strokeMiterlimit="10"
    />
    <path
      d="M5.48988 19.92C5.63988 20.07 5.63988 20.32 5.48988 20.48C5.33988 20.64 5.08988 20.63 4.92988 20.48C4.77988 20.33 4.77988 20.08 4.92988 19.92C5.07988 19.76 5.33988 19.76 5.48988 19.92Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.8799 13.13C22.0299 13.28 22.0299 13.53 21.8799 13.69C21.7299 13.84 21.4799 13.84 21.3199 13.69C21.1599 13.54 21.1699 13.29 21.3199 13.13C21.4699 12.97 21.7299 12.97 21.8799 13.13Z"
      stroke={color}
      strokeMiterlimit="10"
    />
    <path
      d="M21.8799 13.13C22.0299 13.28 22.0299 13.53 21.8799 13.69C21.7299 13.84 21.4799 13.84 21.3199 13.69C21.1599 13.54 21.1699 13.29 21.3199 13.13C21.4699 12.97 21.7299 12.97 21.8799 13.13Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.67009 13.13C2.82009 13.28 2.82009 13.53 2.67009 13.69C2.52009 13.85 2.27006 13.84 2.11006 13.69C1.96006 13.54 1.96006 13.29 2.11006 13.13C2.27006 12.97 2.52009 12.97 2.67009 13.13Z"
      stroke={color}
      strokeMiterlimit="10"
    />
    <path
      d="M2.67009 13.13C2.82009 13.28 2.82009 13.53 2.67009 13.69C2.52009 13.85 2.27006 13.84 2.11006 13.69C1.96006 13.54 1.96006 13.29 2.11006 13.13C2.27006 12.97 2.52009 12.97 2.67009 13.13Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.0701 19.92C19.2201 20.07 19.2201 20.32 19.0701 20.48C18.9201 20.63 18.6701 20.63 18.5101 20.48C18.3501 20.33 18.3601 20.08 18.5101 19.92C18.6701 19.76 18.9201 19.76 19.0701 19.92Z"
      stroke={color}
      strokeMiterlimit="10"
    />
    <path
      d="M19.0701 19.92C19.2201 20.07 19.2201 20.32 19.0701 20.48C18.9201 20.63 18.6701 20.63 18.5101 20.48C18.3501 20.33 18.3601 20.08 18.5101 19.92C18.6701 19.76 18.9201 19.76 19.0701 19.92Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.48988 6.34003C5.63988 6.49003 5.63988 6.74003 5.48988 6.90003C5.33988 7.06003 5.08988 7.05003 4.92988 6.90003C4.77988 6.75003 4.77988 6.50003 4.92988 6.34003C5.07988 6.18003 5.33988 6.18003 5.48988 6.34003Z"
      stroke={color}
      strokeMiterlimit="10"
    />
    <path
      d="M5.48988 6.34003C5.63988 6.49003 5.63988 6.74003 5.48988 6.90003C5.33988 7.06003 5.08988 7.05003 4.92988 6.90003C4.77988 6.75003 4.77988 6.50003 4.92988 6.34003C5.07988 6.18003 5.33988 6.18003 5.48988 6.34003Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.28 3.52003C12.43 3.67003 12.43 3.92003 12.28 4.08003C12.13 4.24003 11.88 4.23003 11.72 4.08003C11.56 3.93003 11.57 3.68003 11.72 3.52003C11.87 3.36003 12.13 3.37003 12.28 3.52003Z"
      stroke={color}
      strokeMiterlimit="10"
    />
    <path
      d="M12.28 3.52003C12.43 3.67003 12.43 3.92003 12.28 4.08003C12.13 4.24003 11.88 4.23003 11.72 4.08003C11.56 3.93003 11.57 3.68003 11.72 3.52003C11.87 3.36003 12.13 3.37003 12.28 3.52003Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const MusicLibrary2 = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22 13V17C22 20.5 20 22 17 22H7C4 22 2 20.5 2 17V13C2 10.35 3.15 8.85003 5 8.28003C5.6 8.09003 6.27 8 7 8H17C17.73 8 18.4 8.09003 19 8.28003C20.85 8.85003 22 10.35 22 13Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 7V8.28003C18.4 8.09003 17.73 8 17 8H7C6.27 8 5.6 8.09003 5 8.28003V7C5 5.9 5.9 5 7 5H17C18.1 5 19 5.9 19 7Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 3.51001V5H8V3.51001C8 2.68001 8.68001 2 9.51001 2H14.49C15.32 2 16 2.68001 16 3.51001Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.07001 19.45C9.79902 19.45 10.39 18.859 10.39 18.13C10.39 17.401 9.79902 16.81 9.07001 16.81C8.34099 16.81 7.75 17.401 7.75 18.13C7.75 18.859 8.34099 19.45 9.07001 19.45Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.2499 17.25V12.08C15.2499 10.98 14.5599 10.82 13.8599 11.02L11.2099 11.74C10.7299 11.87 10.3999 12.25 10.3999 12.8V13.72V14.34V18.13"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.9299 18.57C14.6589 18.57 15.2499 17.979 15.2499 17.25C15.2499 16.521 14.6589 15.93 13.9299 15.93C13.2009 15.93 12.6099 16.521 12.6099 17.25C12.6099 17.979 13.2009 18.57 13.9299 18.57Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M10.3999 14.35L15.2499 13.03" stroke={color} strokeWidth="1.5" strokeLinecap="round"
          strokeLinejoin="round" />
  </svg>
)

const MusicSquare = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z" stroke={color}
          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M8.4201 17.11C9.28719 17.11 9.99011 16.4071 9.99011 15.54C9.99011 14.6729 9.28719 13.97 8.4201 13.97C7.55302 13.97 6.8501 14.6729 6.8501 15.54C6.8501 16.4071 7.55302 17.11 8.4201 17.11Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.75 14.49V8.34997C15.75 7.03997 14.93 6.86002 14.1 7.09002L10.96 7.95001C10.39 8.11001 10 8.56002 10 9.21002V10.31V11.05V15.55"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.1801 16.06C15.0472 16.06 15.7501 15.3571 15.7501 14.49C15.7501 13.6229 15.0472 12.92 14.1801 12.92C13.313 12.92 12.6101 13.6229 12.6101 14.49C12.6101 15.3571 13.313 16.06 14.1801 16.06Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M9.99023 11.04L15.7502 9.46997" stroke={color} strokeWidth="1.5" strokeLinecap="round"
          strokeLinejoin="round" />
  </svg>
)

const MusicNoteSquare = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z" stroke={color}
          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M9.62 17.3C10.7908 17.3 11.74 16.3508 11.74 15.18C11.74 14.0091 10.7908 13.06 9.62 13.06C8.44915 13.06 7.5 14.0091 7.5 15.18C7.5 16.3508 8.44915 17.3 9.62 17.3Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M11.74 15.18V7.77002" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M13.13 6.77004L15.47 7.55C16.04 7.74 16.5 8.38 16.5 8.98V9.59999C16.5 10.41 15.87 10.86 15.11 10.6L12.77 9.82002C12.2 9.63002 11.74 8.99003 11.74 8.39003V7.77004C11.74 6.97004 12.36 6.51004 13.13 6.77004Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const NoteSquare = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 10V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H11" stroke={color} strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M15.51 22C16.6146 22 17.51 21.1046 17.51 20C17.51 18.8954 16.6146 18 15.51 18C14.4054 18 13.51 18.8954 13.51 20C13.51 21.1046 14.4054 22 15.51 22Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M17.51 20V13.01" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M18.82 12.07L21.03 12.81C21.56 12.99 22 13.59 22 14.16V14.75C22 15.51 21.41 15.94 20.69 15.7L18.48 14.96C17.95 14.78 17.51 14.18 17.51 13.61V13.02C17.51 12.25 18.1 11.83 18.82 12.07Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const MiniMusicSquare = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 10V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H11" stroke={color} strokeWidth="1.5"
          strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M15.2701 22C16.0654 22 16.7101 21.3553 16.7101 20.56C16.7101 19.7647 16.0654 19.12 15.2701 19.12C14.4748 19.12 13.8301 19.7647 13.8301 20.56C13.8301 21.3553 14.4748 22 15.2701 22Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.0002 19.6V13.96C22.0002 12.76 21.2502 12.59 20.4802 12.8L17.5902 13.59C17.0702 13.73 16.7002 14.15 16.7002 14.75V15.76V16.44V20.57"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.5601 21.04C21.3554 21.04 22.0001 20.3953 22.0001 19.6C22.0001 18.8047 21.3554 18.16 20.5601 18.16C19.7648 18.16 19.1201 18.8047 19.1201 19.6C19.1201 20.3953 19.7648 21.04 20.5601 21.04Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M16.71 16.43L22 14.99" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const VideoAdd = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22 9V15C22 15.23 22 15.45 21.98 15.67C21.94 15.61 21.89 15.55 21.84 15.5C21.83 15.49 21.82 15.47 21.81 15.46C21 14.56 19.81 14 18.5 14C17.24 14 16.09 14.52 15.27 15.36C14.48 16.17 14 17.28 14 18.5C14 19.34 14.24 20.14 14.65 20.82C14.87 21.19 15.15 21.53 15.47 21.81C15.49 21.82 15.5 21.83 15.51 21.84C15.56 21.89 15.61 21.93 15.67 21.98C15.46 22 15.23 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M2.52002 7.10999H21.48" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.52002 2.10999V6.96997" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15.48 2.10999V6.52002" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M23 18.5C23 18.86 22.96 19.21 22.87 19.55C22.76 20 22.58 20.43 22.35 20.82C21.57 22.12 20.14 23 18.5 23C17.42 23 16.44 22.62 15.68 21.98C15.67 21.98 15.67 21.98 15.67 21.98C15.61 21.93 15.56 21.89 15.51 21.84C15.5 21.83 15.49 21.82 15.47 21.81C15.15 21.53 14.87 21.19 14.65 20.82C14.24 20.14 14 19.34 14 18.5C14 17.28 14.48 16.17 15.27 15.36C16.09 14.52 17.24 14 18.5 14C19.81 14 21 14.56 21.81 15.46C21.82 15.47 21.83 15.49 21.84 15.5C21.89 15.55 21.94 15.61 21.98 15.67C22.62 16.44 23 17.43 23 18.5Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M20.1801 18.48H16.8201" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
          strokeLinejoin="round" />
    <path d="M18.5 16.84V20.2" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
          strokeLinejoin="round" />
  </svg>
)

const VideoRemove = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22 9V15C22 15.23 22 15.45 21.98 15.67C21.94 15.61 21.89 15.55 21.84 15.5C21.03 14.57 19.83 14 18.5 14C17.24 14 16.09 14.52 15.27 15.36C14.48 16.17 14 17.28 14 18.5C14 19.34 14.24 20.14 14.65 20.82C14.88 21.2 15.17 21.55 15.51 21.84C15.56 21.89 15.61 21.93 15.67 21.98C15.46 22 15.23 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M2.52002 7.10999H21.48" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.52002 2.10999V6.96997" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15.48 2.10999V6.52002" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M23 18.5C23 18.86 22.96 19.21 22.87 19.55C22.76 20 22.58 20.43 22.35 20.82C21.57 22.12 20.14 23 18.5 23C17.42 23 16.44 22.62 15.68 21.98C15.67 21.98 15.67 21.98 15.67 21.98C15.61 21.93 15.56 21.89 15.51 21.84C15.17 21.55 14.88 21.2 14.65 20.82C14.24 20.14 14 19.34 14 18.5C14 17.28 14.48 16.17 15.27 15.36C16.09 14.52 17.24 14 18.5 14C19.83 14 21.03 14.57 21.84 15.5C21.89 15.55 21.94 15.61 21.98 15.67C22.62 16.44 23 17.43 23 18.5Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M19.7001 19.68L17.3201 17.3" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
          strokeLinejoin="round" />
    <path d="M19.68 17.32L17.3 19.7" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"
          strokeLinejoin="round" />
  </svg>
)

const VideoTick = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22 9V15C22 15.22 22 15.44 21.98 15.65C21.16 14.64 19.91 14 18.5 14C17.44 14 16.46 14.37 15.69 14.99C14.65 15.81 14 17.08 14 18.5C14 19.34 14.24 20.14 14.65 20.82C14.92 21.27 15.26 21.66 15.66 21.98C15.45 22 15.23 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M2.52002 7.10999H21.48" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.52002 2.10999V6.96997" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15.48 2.10999V6.52002" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M23 18.5C23 19.34 22.76 20.14 22.35 20.82C22.11 21.22 21.81 21.58 21.46 21.88C20.67 22.58 19.64 23 18.5 23C17.43 23 16.44 22.62 15.67 21.98H15.66C15.26 21.66 14.92 21.27 14.65 20.82C14.24 20.14 14 19.34 14 18.5C14 17.08 14.65 15.81 15.69 14.99C16.46 14.37 17.44 14 18.5 14C19.91 14 21.16 14.64 21.98 15.65C22.62 16.42 23 17.42 23 18.5Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M16.75 18.5L17.86 19.61L20.26 17.39" stroke={color} strokeWidth="1.5" strokeLinecap="round"
          strokeLinejoin="round" />
  </svg>
)

const VideoTime = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22 9V15C22 15.22 22 15.44 21.98 15.65C21.16 14.64 19.91 14 18.5 14C17.44 14 16.46 14.37 15.69 14.99C14.65 15.81 14 17.08 14 18.5C14 19.91 14.64 21.16 15.65 21.98C15.44 22 15.22 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M2.52002 7.10999H21.48" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.52002 2.10999V6.96997" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15.48 2.10999V6.52002" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M23 18.5C23 19.85 22.4 21.05 21.47 21.88C20.67 22.57 19.64 23 18.5 23C17.42 23 16.42 22.62 15.65 21.98C14.64 21.16 14 19.91 14 18.5C14 17.08 14.65 15.81 15.69 14.99C16.46 14.37 17.44 14 18.5 14C19.91 14 21.16 14.64 21.98 15.65C22.62 16.42 23 17.42 23 18.5Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M18.7799 17.09V18.78L17.3799 19.62" stroke={color} strokeWidth="1.5" strokeMiterlimit="10"
          strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const VideoOctagon = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21.0799 8.58003V15.42C21.0799 16.54 20.4799 17.58 19.5099 18.15L13.5699 21.58C12.5999 22.14 11.3999 22.14 10.4199 21.58L4.47992 18.15C3.50992 17.59 2.90991 16.55 2.90991 15.42V8.58003C2.90991 7.46003 3.50992 6.41999 4.47992 5.84999L10.4199 2.42C11.3899 1.86 12.5899 1.86 13.5699 2.42L19.5099 5.84999C20.4799 6.41999 21.0799 7.45003 21.0799 8.58003Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.75 12V10.8C9.75 9.26001 10.84 8.63005 12.17 9.40005L13.21 10L14.25 10.6C15.58 11.37 15.58 12.63 14.25 13.4L13.21 14L12.17 14.6C10.84 15.37 9.75 14.74 9.75 13.2V12Z"
      stroke={color}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const VideoSquare2 = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 9.85999V14.15" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 8.42999V15.57" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 7V17" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 8.42999V15.57" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 9.85999V14.15" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={color}
          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const VideoCircle2 = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 9.85999V14.15" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 8.42999V15.57" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 7V17" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 8.42999V15.57" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 9.85999V14.15" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const MaximizeCircle = ({ color, size  = 20, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 3H21V7" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 9L21 3" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 21H3V17" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 15L3 21" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M14.02 2.20001C13.37 2.07001 12.69 2 12 2C6.48 2 2 6.48 2 12C2 12.69 2.07001 13.36 2.20001 14"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.97998 21.8C10.63 21.93 11.31 22 12 22C17.52 22 22 17.52 22 12C22 11.32 21.93 10.65 21.8 10"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default {
  Microphone,
  MicrophoneSlash,
  Microphone2,
  MicrophoneSlash2,
  VolumeCross,
  VolumeSlash,
  VolumeUp,
  VolumeLow,
  VolumeLow2,
  VolumeHigh,
  Volume,
  Video,
  VideoSlash,
  VideoSquare,
  VideoCircle,
  GalleryFavorite,
  GallerySlash,
  GalleryTick,
  GalleryImport,
  Gallery,
  GalleryAdd,
  GalleryRemove,
  GalleryEdit,
  Image,
  ScreenMirroring,
  Camera,
  CameraSlash,
  Play,
  Record,
  Stop,
  MusicNote,
  Music,
  VideoVertical,
  VideoHorizontal,
  VideoPlay,
  Subtitle,
  PlayCircle,
  RecordCircle,
  StopCircle,
  PauseCircle,
  Pause,
  Backward,
  Forward,
  Previous,
  Next,
  Radio,
  MusicCircle,
  PlayCircle2,
  PlayRemove,
  PlayAdd,
  Backward5Sec,
  Backward10Sec,
  Backward15Sec,
  Forward5Sec,
  Forward10Sec,
  Forward15Sec,
  MusicPlaylist,
  MusicFilter,
  MusicDashboard,
  MusicSquareRemove,
  MusicSquareAdd,
  MusicSquareSearch,
  RepeatMusic,
  Repeat1,
  Loop,
  Devices,
  MusicLibrary2,
  MusicSquare,
  MusicNoteSquare,
  NoteSquare,
  MiniMusicSquare,
  VideoAdd,
  VideoRemove,
  VideoTick,
  VideoTime,
  VideoOctagon,
  VideoSquare2,
  VideoCircle2,
  MaximizeCircle,
}