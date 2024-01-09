import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import ArrowIcons from './../Basic/Icons/Arrow'

const Button = ({ variant, type, disabled, size, children, RightIcon, LeftIcon, onClick, className, loading, iconColor, isRestricted }) => {
  const configVariant = {
    primary: 'rounded-xl bg-primary500 text-[#ffffff] hover:bg-primary600 focus:shadow-[0.0px_0.0px_0.0px_3.0px_#FCDCA5] disabled:bg-primary300',
    secondary: 'rounded-xl bg-gray50 text-gray500 hover:bg-gray100 focus:shadow-[0.0px_0.0px_0.0px_3.0px_#E4E7EC] disabled:bg-gray25 disabled:text-[#7d89a1]',
    outlined: 'rounded-xl text-gray500 border border-[gray200] focus:shadow-[0.0px_0.0px_0.0px_3.0px_#E4E7EC]',
    ghost: 'rounded-xl text-gray500 border border-transparent focus:shadow-[0.0px_0.0px_0.0px_3.0px_#F2F4F7]',
    text: 'rounded-md text-gray500 focus:border-none focus:shadow-[0.0px_0.0px_0.0px_3.0px_#F2F4F7] px-[3px] py-[5px]',
  }

  const configSize = {
    small: 'px-[14px] py-[10px]',
    medium: 'px-4 py-[11px]',
    large: 'px-4 py-3',
  }

  const configWithoutContentSize = {
    small: 'p-[10px]',
    medium: 'p-[11px]',
    large: 'p-3',
  }

  const configIconSize = {
    small: 16,
    medium: 18,
    large: 24,
  }

  const configIconColor = useMemo(() => (iconColor ? iconColor : variant === 'primary' ? '#ffffff' : '#667085'), [iconColor, variant])

  return (
    <button
      className={classNames(`flex items-center justify-between transition-all outline-none gap-2 font-primary font-semibold disabled:opacity-60 ${configVariant[variant]}`, {
        [`!rounded-full ${configWithoutContentSize[size]}`]: !children,
        ['!rounded-md !p-[3px]']: !children && variant === 'text',
        [configSize[size]]: children,
        [className]: className,
      })}
      style={{
        fontSize: size === 'small' ? '12px' : size === 'medium' ? '14px' : '16px',
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {LeftIcon && <LeftIcon color={configIconColor} size={configIconSize[size]} />}
      {isRestricted && children.length > 6 ? `${children.substring(0, 6)}...` : children}
      {loading ? (
        <ArrowIcons.Refresh2 size={configIconSize[size]} color={configIconColor} className='animate-spin flex items-center justify-center' />
      ) : (
        RightIcon && <RightIcon color={configIconColor} size={configIconSize[size]} />
      )}
    </button>
  )
}

Button.propTypes = {
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  LeftIcon: PropTypes.func,
  RightIcon: PropTypes.func,
  children: PropTypes.string,
  className: PropTypes.string,
  iconColor: PropTypes.string,
  isRestricted: PropTypes.bool,
  classNameIcon: PropTypes.string,
  type: PropTypes.oneOf(['submit', '']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'outlined', 'ghost', 'text']),
}

Button.defaultProps = {
  disabled: false,
  variant: 'primary',
  children: '',
  size: 'large',
  type: '',
  onClick: () => {},
}

export default Button
