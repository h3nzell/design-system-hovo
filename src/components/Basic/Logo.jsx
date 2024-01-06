import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import Icons from './Icons/Icons'
import LogoIcon from './Icons/Logo'
import Typography from './Typography'

const Logo = ({ isLogoIncludes, isTextIncludes, variant, size, className }) => {
  const configTextSize = {
    large: 'lg',
    medium: 'md',
    small: 'xs',
  }

  const configTextСolor = {
    dark: 'black',
    light: 'white',
  }

  const configTextWeight = {
    large: 'bold',
    medium: 'medium',
    small: 'normal',
  }

  const configLogoSize = {
    large: 32,
    medium: 24,
    small: 20,
  }

  const configLogoVariant = {
    dark: LogoIcon.PrimaryLogo,
    light: LogoIcon.SecondaryLogo,
  }

  return (
    <div className={classNames('flex items-center', { [className]: className })}>
      {isLogoIncludes && <Icons Icon={configLogoVariant[variant]} size={configLogoSize[size]} className={isTextIncludes ? 'mr-2' : ''} />}
      {isTextIncludes && (
        <>
          <Typography text='youpal' size={configTextSize[size]} weight={configTextWeight[size]} className={`text-${configTextСolor[variant]} `} />
          <Typography text='group' size={configTextSize[size]} weight={configTextWeight[size]} className='text-primary500 ' />
        </>
      )}
    </div>
  )
}

Logo.defaultProps = {
  isLogoIncludes: true,
  isTextIncludes: true,
  variant: 'dark',
  size: 'large',
}

Logo.propTypes = {
  isLogoIncludes: PropTypes.bool,
  isTextIncludes: PropTypes.bool,
  variant: PropTypes.oneOf(['dark', 'light']),
  size: PropTypes.oneOf(['large', 'medium', 'small']),
}

export default Logo
