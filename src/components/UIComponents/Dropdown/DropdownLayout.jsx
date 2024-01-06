import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const DropdownLayout = ({ open, className, children, itemsLength, widthContent }) => (
  <ul
    className={classNames(`rounded-[10px] absolute top-[115%] overflow-hidden max-h-[${itemsLength}] z-50`, {
      ['max-h-0']: !open,
      ['w-full']: !widthContent,
      ['!border-[1px] border-gray200 border-opacity-70']: open,
      [className]: className,
    })}
  >
    {children}
  </ul>
)

DropdownLayout.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.element,
  className: PropTypes.string,
  itemsLength: PropTypes.number,
  widthContent: PropTypes.bool,
}

export default DropdownLayout
