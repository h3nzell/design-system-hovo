import React from 'react'
import PropTypes from 'prop-types'
import Typography from '../Basic/Typography'

const Badge = ({ size, LeftIcon, RightIcon, dot, status, avatar, text }) => {
  const getPaddings = () => {
    if (size === 'small' && LeftIcon && RightIcon) return 'py-[2px] pr-[6px] pl-1'
    if (size === 'small' && LeftIcon) return 'py-[2px] pl-1 pr-2'
    if (size === 'small' && RightIcon) return 'py-[2px] pr-[6px] pl-2'
    if (size === 'small' && dot) return 'py-[2px] pr-2 pl-[6px]'
    if (size === 'small' && avatar) return 'py-[2px] pr-2 pl-[2px]'
    if (size === 'small') return 'py-[2px] px-2'

    if (size === 'medium' && LeftIcon && RightIcon) return 'py-1 px-[6px]'
    if (size === 'medium' && LeftIcon) return 'p-1 pr-[10px] pl-[6px]'
    if (size === 'medium' && RightIcon) return 'py-1 pr-[6px] pl-2'
    if (size === 'medium' && dot) return 'py-1 pr-2 pl-[6px]'
    if (size === 'medium' && avatar) return 'py-1 pr-2 pl-1'
    if (size === 'medium') return 'py-1 px-2'

    if (size === 'large' && LeftIcon && RightIcon) return 'py-1 px-[6px]'
    if (size === 'large' && LeftIcon) return 'py-1 pr-[10px] pl-[6px]'
    if (size === 'large' && dot) return 'py-1 pr-[10px] pl-[8px]'
    if (size === 'large' && avatar) return 'py-1 pr-[10px] pl-1'
    if (size === 'large') return 'py-1 px-[10px]'
  }

  const configBackgroundColor = {
    blue: 'bg-blue50',
    error: 'bg-error50',
    default: 'bg-gray50',
    purple: 'bg-purple50',
    warning: 'bg-warning50',
    primary: 'bg-primary50',
    success: 'bg-success50',
  }

  const configTextColor = {
    blue: 'text-blue600',
    error: 'text-error600',
    default: 'text-gray600',
    purple: 'text-purple600',
    warning: 'text-warning600',
    primary: 'text-primary600',
    success: 'text-success600',
  }

  const configIconSize = {
    small: '14px',
    medium: '14px',
    large: '16px',
  }

  const configDotSize = {
    small: 'w-[6px] h-[6px]',
    medium: 'w-[7px] h-[7px]',
    large: 'w-[7px] h-[7px]',
  }

  const configDotColor = {
    blue: 'bg-blue500',
    error: 'bg-error500',
    default: 'bg-gray500',
    purple: 'bg-purple500',
    warning: 'bg-warning500',
    primary: 'bg-primary500',
    success: 'bg-success500',
  }

  const renderLeftIcon = () => {
    if (LeftIcon) return <LeftIcon color='#98A2B3' size={configIconSize[size]} />
    if (dot) return <div className={`rounded-full ${configDotSize[size]} ${configDotColor[status]}`} />
    if (avatar) return <img src={avatar} alt='badge-avatar' width={configIconSize[size]} height={configIconSize[size]} />

    return null
  }

  return (
    <div className={`max-w-[140px] flex flex-center justify-center items-center gap-1 rounded-full ${getPaddings()} ${configBackgroundColor[status]}`}>
      {renderLeftIcon()}
      <Typography text={text} weight='medium' size={size === 'large' ? 'lg' : 'sm'} className={`${configTextColor[status]}`} />
      {RightIcon && <RightIcon color='#98A2B3' size={configIconSize[size]} />}
    </div>
  )
}

Badge.propTypes = {
  dot: PropTypes.bool,
  avatar: PropTypes.string,
  LeftIcon: PropTypes.func,
  RightIcon: PropTypes.func,
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  status: PropTypes.oneOf(['success', 'warning', 'error', 'purple', 'primary', 'blue', 'default']),
}

Badge.defaultProps = {
  size: 'large',
  text: 'Badge',
  dot: false,
  status: 'default',
}

export default Badge
