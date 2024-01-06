import React, { forwardRef, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import Input from './../FormKit/Input'
import Dropdown from './Dropdown/Dropdown'
import Button from './../FormKit/Button'
import SearchIcons from './../Basic/Icons/Search'
import ArrowIcons from './../Basic/Icons/Arrow'
import DropdownList from './Dropdown/DropdownList'
import useOutsideClick from '../../hooks/useOutsideClick'
import classNames from 'classnames'

const SearchInput = forwardRef(
  (
    {
      name,
      label,
      Icon,
      searchList,
      categoryList,
      widthContent,
      defaultCategory,
      onCategoryChange,
      hint,
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
      inputContainerClassName,
      buttonContainerClassName,
      DropdownIcon,
      DropdownIconColor,
      ...props
    },
    ref
  ) => {
    const [categoryValue, setCategory] = useState()
    const [value, setValue] = useState('')
    const [open, setOpen] = useState(false)
    const containerRef = useRef(null)

    useOutsideClick(containerRef, () => {
      onBlur?.()
      setOpen(false)
    })

    const onHandleChange = (event, value) => {
      if (!open) setOpen(true)
      onChange?.(event, value)
      setValue(value)
    }

    const onHandleCategoryChange = (event, value, label) => {
      onCategoryChange?.(event, value, label)
      setCategory(label)
    }

    const onHandleSearchChange = (event, value, label) => {
      onChange?.(event, value, label)
      setOpen(false)
      setValue(value)
    }

    const onCategoryButtonClick = () => {
      if (open) setOpen(false)
    }

    const onHandlerFocus = () => {
      onFocus?.()
      setOpen(true)
    }

    return (
      <div ref={containerRef} className={classNames('relative w-fit', { [containerClassName]: containerClassName })}>
        <Input
          IconColor={IconColor}
          Icon={Icon}
          ref={ref}
          label={label}
          hint={hint}
          name={name}
          value={value}
          disabled={disabled}
          minLength={minLength}
          maxLength={maxLength}
          onFocus={onHandlerFocus}
          placeholder={placeholder}
          autoComplete={autoComplete}
          onKeyDown={onKeyDown}
          onChange={onHandleChange}
          containerClassName={inputContainerClassName}
          {...props}
        />
        <div className='absolute top-[50%] right-[12px] -translate-y-1/2'>
          <Dropdown widthContent={widthContent} onChange={onHandleCategoryChange} items={categoryList}>
            <Button
              size='small'
              RightIcon={DropdownIcon}
              iconColor={DropdownIconColor}
              onClick={onCategoryButtonClick}
              className={classNames('min-w-[100px] max-w-[120px] max-h-[38px]', { [buttonContainerClassName]: buttonContainerClassName })}
            >
              {categoryValue ?? defaultCategory ?? 'Category'}
            </Button>
          </Dropdown>
        </div>
        <DropdownList items={searchList} open={open} onChange={onHandleSearchChange} />
      </div>
    )
  }
)

SearchInput.defaultProps = {
  IconColor: 'gray',
  autoComplete: 'off',
  Icon: SearchIcons.SearchNormal,
  DropdownIcon: ArrowIcons.ArrowDown2,
}

SearchInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  Icon: PropTypes.func,
  IconColor: PropTypes.string,
  onChange: PropTypes.func,
  searchList: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, value: PropTypes.string, label: PropTypes.string })).isRequired,
  categoryList: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, value: PropTypes.string, label: PropTypes.string })).isRequired,
  onCategoryChange: PropTypes.func,
  disabled: PropTypes.bool,
  widthContent: PropTypes.bool,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  autoComplete: PropTypes.oneOf(['off', 'on']),
  inputContainerClassName: PropTypes.string,
  buttonContainerClassName: PropTypes.string,
  DropdownIcon: PropTypes.element,
  DropdownIconColor: PropTypes.string,
}

export default SearchInput
