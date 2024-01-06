import React from 'react'
import PropTypes from 'prop-types'

export const Icons = ({ Icon, color, size, ...props }) => {
  return (
    <>
      <Icon color={color} size={size} {...props} />
    </>
  )
}

Icons.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

Icons.defaultProps = {
  color: 'black',
  size: 24,
}

export default Icons
