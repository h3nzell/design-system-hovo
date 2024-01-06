import React, { useRef, useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import DropdownList from './DropdownList'
import useOutsideClick from '../../../hooks/useOutsideClick'

const Dropdown = ({ children, items, Icon, onChange, widthContent, className, containerClassName, classNameItem }) => {
  const ref = useRef(null)
  const [open, setOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('')

  const onItemChange = (event, value, label) => {
    onChange?.(event, value, label)
    setActiveItem(label)
    setOpen(false)
  }

  useOutsideClick(ref, () => setOpen(false))

  return (
    <div ref={ref} onClick={() => setOpen(!open)} className={classNames('relative w-[fit-content]', { [containerClassName]: containerClassName })}>
      {children}
      <DropdownList
        widthContent={widthContent}
        className={className}
        classNameItem={classNameItem}
        items={items}
        open={open}
        Icon={Icon}
        activeItem={activeItem}
        onChange={onItemChange}
      />
    </div>
  )
}

Dropdown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, value: PropTypes.string, label: PropTypes.string })).isRequired,
  containerClassName: PropTypes.string,
  Icon: PropTypes.element,
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
  onChange: PropTypes.func,
  widthContent: PropTypes.bool,
  classNameItem: PropTypes.string,
}

export default Dropdown
