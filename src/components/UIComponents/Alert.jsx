import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import AlertIcons from '../Basic/Icons/Alert'

const Alert = ({ outlined, status, size }) => {
  const configSize = {
    large: 52,
    medium: 40,
    small: 24,
    micro: 16,
  }

  const configWrapperSize = {
    large: 'w-[92px] h-[92px]',
    medium: 'w-[64px] h-[64px]',
    small: 'w-[40px] h-[40px]',
    micro: 'w-[26px] h-[26px]',
  }

  const configIcon = {
    success: <AlertIcons.Success size={configSize[size]} />,
    error: <AlertIcons.Error size={configSize[size]} />,
    info: <AlertIcons.Info size={configSize[size]} />,
    warning: <AlertIcons.Warning size={configSize[size]} />,
  }

  const configColors = {
    success: 'bg-success500',
    error: 'bg-error500',
    info: 'bg-blue500',
    warning: 'bg-warning500',
  }

  if (!outlined) return configIcon[status]

  return (
    <div
      className={classNames(`relative flex items-center justify-center`, {
        [configWrapperSize[size]]: outlined,
      })}
    >
      {configIcon[status]}
      <div className={`rounded-full absolute top-0 w-full h-full ${configColors[status]} -z-1 opacity-20`} />
    </div>
  )
}

Alert.defaultProps = {
  size: 'large',
  status: 'success',
  outlined: true,
}

Alert.propTypes = {
  size: PropTypes.oneOf(['large', 'medium', 'small', 'micro']),
  status: PropTypes.oneOf(['success', 'error', 'info', 'warning']),
  outlined: PropTypes.bool,
}

export default Alert
