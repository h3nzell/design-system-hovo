import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './dropdown.css'
import DropdownLayout from './DropdownLayout'
import Typography from '../../Basic/Typography'

const DropdownList = ({ open, items, Icon, activeItem, onChange, className, classNameItem, widthContent }) => {
  const dropdownSize = items.length * 100

  const onItemChange = (event, value, label) => {
    event.stopPropagation()
    onChange?.(event, value, label)
  }

  return (
    <DropdownLayout widthContent={widthContent} itemsLength={dropdownSize} open={open} className={className}>
      {items.length !== 0 ? (
        items.map(item => (
          <li
            key={item.id}
            onClick={event => onItemChange(event, item.value, item.label)}
            className={classNames('px-2 py-3.5 bg-white cursor-pointer border-b-[1px] border-t-[1px] border-b-white border-t-white flex items-center gap-3', {
              ['bg-gray50']: activeItem === item.value,
              [classNameItem]: classNameItem,
            })}
          >
            {Icon ? Icon : null}
            <Typography
              className={classNames('text-gray500 whitespace-nowrap w-[fit-content]', {
                ['text-primary600']: activeItem === item.value,
                [classNameItem]: classNameItem,
              })}
              text={item.label}
              size='md'
              weight='medium'
            />
          </li>
        ))
      ) : (
        <li className='px-2 py-4 bg-white cursor-pointer flex items-center gap-3'>
          <Typography className='text-gray500 whitespace-nowrap w-[fit-content]' text={'No Results'} size='md' weight='medium' />
        </li>
      )}
    </DropdownLayout>
  )
}

DropdownList.propTypes = {
  Icon: PropTypes.element,
  onChange: PropTypes.func,
  className: PropTypes.string,
  activeItem: PropTypes.string,
  open: PropTypes.bool.isRequired,
  widthContent: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, value: PropTypes.string, label: PropTypes.string })).isRequired,
}

export default DropdownList
