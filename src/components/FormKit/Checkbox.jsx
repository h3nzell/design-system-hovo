import React from 'react'
import PropTypes from 'prop-types'
import EssentialsIcons from '../Basic/Icons/Essentials'
import Typography from '../Basic/Typography'
import classNames from 'classnames'

const Checkbox = ({ label, subLabel, checked, required, onChange, disabled }) => {
  const handleChange = event => {
    onChange(event.target.checked, event)
  }

  const MainCheckBox = (
    <>
      <input
        type='checkbox'
        checked={checked}
        disabled={disabled}
        required={required}
        className='appearance-none w-4 h-4 outline-none cursor-pointer border-opacity-20 transition-all disabled:opacity-20 focus:border-none focus:shadow-[0.0px_0.0px_0.0px_2.0px_rgba(252,220,165,1.0)] checked:bg-primary500 checked:border-primary500 checked:hover:border-primary500 checked:w-4.5 checked:h-4.5 checked:border-opacity-5 hover:border-gray-950 hover:border-opacity-20 border border-gray-500 rounded'
      />
      {checked && <EssentialsIcons.Tick size={12} color={'white'} className='absolute cursor-pointer w-2 h-2 top-1 left-1' />}
    </>
  )

  return (
    <>
      {label || subLabel ? (
        <label
          className={classNames('relative cursor-pointer flex gap-2', {
            ['items-start']: subLabel,
            ['items-center']: !subLabel,
          })}
          onChange={handleChange}
        >
          {MainCheckBox}
          {subLabel ? (
            <div className='flex flex-col gap-1'>
              <Typography size='sm' weight='medium' text={label} className='text-gray700 leading-3' />
              <Typography size='xs' weight='normal' text={subLabel} className='text-gray500 max-w-[60%]' />
            </div>
          ) : (
            <Typography size='xs' weight='normal' text={label} className='text-gray700 leading-3' />
          )}
        </label>
      ) : (
        <label className='relative flex w-[fit-content]' onChange={handleChange}>
          {MainCheckBox}
        </label>
      )}
    </>
  )
}

Checkbox.propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool.isRequired,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
  subLabel: PropTypes.string,
}

Checkbox.defaultProps = { required: false, onChange: () => {}, disabled: false }

export default Checkbox
