import React, { forwardRef, useMemo, useState } from 'react'
import className from 'classnames'
import PropTypes from 'prop-types'
import Icons from './../Basic/Icons/Icons'
import SecurityIcons from './../Basic/Icons/Security'

const Input = forwardRef(
  (
    {
      name,
      hint,
      label,
      type,
      LeftIcon,
      RightIcon,
      error,
      value,
      onBlur,
      onFocus,
      onChange,
      onKeyDown,
      disabled,
      maxLength,
      minLength,
      autoComplete,
      placeholder,
      IconColor,
      containerClassName,
      ...props
    },
    ref
  ) => {
    const isPasswordType = useMemo(() => type === 'password', [type])

    const [isHide, setIsHide] = useState(isPasswordType)

    const onEyeClickHandler = event => {
      event.preventDefault()
      if (!disabled) setIsHide(prev => !prev)
    }

    const onChangeValueHandler = event => {
      const value = event.target.value
      onChange?.(event, value)
    }

    const onBlurHandler = event => {
      onBlur?.(event)
    }

    const onFocusHandler = event => {
      onFocus?.(event)
    }

    const onKeyDownHandler = event => {
      onKeyDown?.(event)
    }

    const InputContent = (
      <>
        <input
          className={className(
            'transition-all outline-none -ml-1 w-full rounded-2xl p-[12px] border-2 border-opacity-20 border-gray400 font-normal focus:border-primary100 focus:focus:shadow-[0.0px_0.0px_1.0px_2.0px_#FEEED1] disabled:bg-gray100 disabled:border-gray100 disabled:placeholder-gray300 disabled:placeholder-opacity-80 disabled:cursor-not-allowed disabled:text-slate-400',
            {
              ['pl-[38px]']: LeftIcon,
              ['!border-error400 border-opacity-100 focus:!shadow-[0.0px_0.0px_1.0px_2.0px_#F97066]']: error,
            }
          )}
          ref={ref}
          type={isHide ? 'password' : 'text'}
          name={name}
          value={value}
          disabled={disabled}
          minLength={minLength}
          maxLength={maxLength}
          onBlur={onBlurHandler}
          onFocus={onFocusHandler}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onKeyDown={onKeyDownHandler}
          onChange={onChangeValueHandler}
          {...props}
        />
        {(RightIcon || LeftIcon) && <div className={`absolute bottom-[50%] translate-y-1/2 bg-gray-50 ${RightIcon ? 'right-[16px]' : 'left-[9px]'}`}>{RightIcon || LeftIcon}</div>}
        {isPasswordType && (
          <Icons
            onClick={onEyeClickHandler}
            color={'#717BBC'}
            Icon={isHide ? SecurityIcons.EyeSlash : SecurityIcons.Eye}
            size={20}
            className={className('cursor-pointer absolute bottom-[50%] translate-y-1/2 right-[16px]', {
              ['cursor-not-allowed']: disabled,
            })}
          />
        )}
      </>
    )

    return (
      <div className={className('flex flex-col gap-[10px] w-fit', { [containerClassName]: containerClassName })}>
        <label className='flex flex-col justify-start gap-[12px] w-full font-semibold text-base'>
          {label}
          {RightIcon || LeftIcon || isPasswordType ? <div className='relative w-full'>{InputContent}</div> : <>{InputContent}</>}
        </label>
        {(error || hint) && (
          <span
            className={className('text-xs text-gray500 font-normal', {
              ['text-error500']: error,
            })}
          >
            {error || hint}
          </span>
        )}
      </div>
    )
  }
)

Input.defaultProps = {
  onBlur: () => {},
  onFocus: () => {},
  onChange: () => {},
  value: '',
  disabled: false,
  type: 'text',
  autoComplete: 'off',
  containerClassName: '',
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  LeftIcon: PropTypes.func,
  RightIcon: PropTypes.any,
  IconColor: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  containerClassName: PropTypes.string,
  autoComplete: PropTypes.oneOf(['off', 'on']),
  type: PropTypes.oneOf(['text', 'password']),
}

export default Input
