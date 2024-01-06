import React, { useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Typography from '../Basic/Typography'

// HINT name prop should be the save for all radios in the form
const Radio = ({ label, subLabel, name, value, required, onChange, disabled, ...props }) => {
  const handleChange = useCallback(event => {
    onChange(event, event.target.value)
  }, [])

  const MainRadioBox = useMemo(
    () => (
      <>
        <input
          type='radio'
          name={name}
          value={value}
          disabled={disabled}
          required={required}
          onChange={handleChange}
          className={classNames(
            'appearance-none outline-none cursor-pointer min-w-[24px] min-h-[24px] rounded-full transition-all border-2 border-opacity-60 border-gray-500 focus:border-[rgba(252,220,165,1.0)] focus:shadow-[0.0px_0.0px_0.0px_1.0px_rgba(252,220,165,1.0)] disabled:opacity-40 checked:border-primary500 hover:border-primary600 hover:border-opacity-60',
            { ['!cursor-not-allowed']: disabled }
          )}
          {...props}
        />
        <div
          className={classNames('hidden min-w-[12px] min-h-[12px] cursor-pointer absolute top-0 left-0 translate-y-1/2 translate-x-1/2 rounded-full', {
            ['!cursor-not-allowed']: disabled,
          })}
        />
      </>
    ),
    [name, value, disabled, required, handleChange]
  )

  return (
    <>
      {label || subLabel ? (
        <label
          className={classNames('checkedSpan relative flex gap-2', {
            ['items-center']: !subLabel,
            ['items-start']: subLabel,
            ['cursor-not-allowed']: disabled,
            ['cursor-pointer']: !disabled,
          })}
        >
          {MainRadioBox}
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
        <label className={classNames('checkedSpan relative flex w-[fit-content]', { ['cursor-not-allowed']: disabled })}>{MainRadioBox}</label>
      )}
    </>
  )
}

Radio.propTypes = {
  disabled: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
  subLabel: PropTypes.string,
}

Radio.defaultProps = { required: false, onChange: () => {}, disabled: false }

export default Radio
