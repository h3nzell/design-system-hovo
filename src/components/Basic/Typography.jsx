import React from 'react'
import PropTypes from 'prop-types'

const Typography = ({ size, weight, text, onClick, className }) => {
  const getFontWeightClass = () => {
    if (weight === 'bold') return 'font-bold'
    if (weight === 'semibold') return 'font-semibold'
    if (weight === 'medium') return 'font-medium'
    if (weight === 'normal') return 'font-normal'
    return ''
  }

  const getTextSizeClass = () => {
    if (size === 'xs') return 'text-xs'
    if (size === 'sm') return 'text-sm'
    if (size === 'md') return 'text-base'
    if (size === 'lg') return 'text-lg'
    if (size === 'h6') return 'text-xl'
    if (size === 'h5') return 'text-2xl'
    if (size === 'h4') return 'text-3xl'
    if (size === 'h3') return 'text-5xl'
    if (size === 'h2') return 'text-6xl'
    if (size === 'h1') return 'text-7xl'
    return ''
  }

  const fontWeightClass = getFontWeightClass()
  const textSizeClass = getTextSizeClass()

  const classes = `${fontWeightClass} ${textSizeClass} ${className}`

  return (
    <p onClick={onClick} className={`${classes} font-primary`}>
      {text}
    </p>
  )
}

export default Typography

Typography.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  weight: PropTypes.oneOf(['bold', 'semibold', 'medium', 'normal']).isRequired,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
}
