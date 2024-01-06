import React, { useState, useEffect } from 'react'

import Badge from './Badge'
import { PropTypes } from 'prop-types'
import Typography from '../Basic/Typography'

const Tab = ({ id, fullWidth, onClick, size, type, badge, selected, children }) => {
  const [innerSelected, setInnerSelected] = useState(false)

  const configPaddings = {
    small: 'px-3 pt-[6px] pb-[10px]',
    large: 'px-3 pt-2 pb-[10px]',
  }

  const configFullWidth = {
    small: 'w-[180px]',
    large: 'w-[220px]',
  }

  const configSelectedType = {
    underline: 'text-primary600',
    filled: 'text-primary600 bg-primary100',
    button: 'text-primary600 bg-primary100',
  }

  const configButtonPaddings = {
    small: !badge ? 'px-4 py-2' : 'px-3 py-2',
    large: !badge ? 'px-6 py-[10px]' : 'px-4 py-[10px] ',
  }

  const borderBottomStyles = innerSelected && selected ? '2px solid #FAA91A' : '2px solid #F2F4F7'

  useEffect(() => {
    setInnerSelected(selected === id)
  }, [selected, id])

  return (
    <div
      onClick={onClick}
      style={{ borderBottom: type !== 'button' ? borderBottomStyles : 'none', border: type === 'button' && innerSelected && selected && '1px solid #FFBA40' }}
      className={`w-max px- gap-2 ${type === 'button' && innerSelected && selected && 'rounded-lg'} ${type === 'button' ? configButtonPaddings[size] : configPaddings[size]} ${
        fullWidth === true && configFullWidth[size]
      } ${selected === id && selected && configSelectedType[type]} flex justify-center items-center cursor-pointer`}
    >
      <Typography text={children} weight='medium' size={size === 'small' ? 'sm' : 'md'} className={`${innerSelected && selected ? 'text-primary600' : 'text-gray500'}`} />
      {badge && <Badge className={type !== 'button' && 'text-primary600'} size='small' status='default' text={badge} />}
    </div>
  )
}

Tab.propTypes = {
  badge: PropTypes.string,
  fullWidth: PropTypes.bool,
  selected: PropTypes.number,
  size: PropTypes.oneOf(['small', 'large']),
  type: PropTypes.oneOf(['underline', 'button', 'filled']).isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]).isRequired,
}

Tab.defaultProps = {
  size: 'small',
  fullWidth: false,
}

export default Tab
