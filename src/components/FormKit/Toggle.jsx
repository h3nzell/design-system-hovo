import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Typography from '../Basic/Typography'

const Toggle = ({ name, label, subLabel, checked, required, onChange, size, disabled, containerClassName, ...props }) => {
  const handleChange = event => {
    onChange(event, event.target.checked)
  }

  const toggleSizes = {
    large: { toggler: 'w-[28px] h-[28px] right-[25px]', input: 'w-[55px] h-[32px]' },
    small: { toggler: 'w-[20px] h-[20px] right-[20px]', input: 'w-[42px] h-[24px]' },
  }

  const MainToggle = (
    <>
      <input
        type='checkbox'
        name={name}
        checked={checked}
        disabled={disabled}
        required={required}
        onChange={handleChange}
        className={`transition-all appearance-none ${toggleSizes[size].input} outline-none cursor-pointer border-none rounded-full bg-gray300 disabled:opacity-20 disabled:cursor-not-allowed focus:border-none focus:shadow-[0.0px_0.0px_0.0px_2.0px_rgba(252,220,165,1.0)] checked:bg-primary500 checked:border-primary500 checked:hover:border-primary500 checked:w-4.5 checked:h-4.5 checked:border-opacity-5 hover:border-gray-950 hover:border-opacity-20`}
      />
      <div
        className={classNames(
          `transition-all absolute cursor-pointer bg-white ${toggleSizes[size].toggler} top-[50%] -translate-y-1/2 focus:shadow-[0.0px_0.0px_0.0px_2.0px_rgba(252,220,165,1.0)] rounded-full`,
          { ['!right-[2px]']: checked },
          { ['!cursor-not-allowed']: disabled }
        )}
      />
    </>
  )

  return (
    <>
      {label || subLabel ? (
        <label
          className={classNames('cursor-pointer w-[fit-content] flex  gap-2', {
            [containerClassName]: containerClassName,
            ['!cursor-not-allowed']: disabled,
            ['items-center']: !subLabel,
            ['items-start']: subLabel,
          })}
        >
          <div className='relative flex'>{MainToggle}</div>
          {subLabel ? (
            <div className='flex flex-col gap-1'>
              <Typography size='sm' weight='medium' text={label} className='text-gray700 leading-3' />
              <Typography size='xs' weight='normal' text={subLabel} className='text-gray500 max-w-[200px]' />
            </div>
          ) : (
            <Typography size='sm' weight='medium' text={label} className='text-gray700 leading-3' />
          )}
        </label>
      ) : (
        <label className={classNames('relative flex w-fit', { [containerClassName]: containerClassName })}>{MainToggle}</label>
      )}
    </>
  )
}

Toggle.propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool.isRequired,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string,
  subLabel: PropTypes.string,
  containerClassName: PropTypes.string,
  size: PropTypes.oneOf(['large', 'small']),
}

Toggle.defaultProps = { required: false, onChange: () => {}, size: 'large', disabled: false }

export default Toggle
