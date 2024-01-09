import React, { useState } from 'react'
import { PropTypes } from 'prop-types'

import Badge from '../Badge'
import classNames from 'classnames'
import Typography from '../../Basic/Typography'
import ArrowIcons from '../../Basic/Icons/Arrow'

const SidebarNavItem = ({ id, selected, badge, label, Icon, onClick, submenuItems = [], className }) => {
  const [activeItem, setActiveItem] = useState(submenuItems[0]?.id ?? 0)

  const handleSubMenuItemCLick = id => {
    setActiveItem(id)
  }

  const renderRightSideContent = () => {
    if (submenuItems.length) {
      return selected === id ? (
        <ArrowIcons.ArrowUp2 style={{ marginLeft: '4px' }} size='12px' color={selected === id ? '#FFFFFF' : '#667085'} />
      ) : (
        <ArrowIcons.ArrowDown2 style={{ marginLeft: '4px' }} size='12px' color={selected === id && selected ? '#FFFFFF' : '#667085'} />
      )
    } else if (badge) {
      return <Badge className='ml-1' size='small' status={selected === id ? 'primary' : 'default'} text={badge} />
    }
    return
  }

  const renderColor = selected === id ? 'bg-primary500' : 'bg-white'
  const renderTextColor = selected === id ? 'text-white' : 'text-gray500'

  return (
    <div className={classNames('max-w-[228px] flex flex-col gap-1', { [className]: className })}>
      <div onClick={onClick} className={`group py-3 pl-5 pr-4 rounded-xl w-full cursor-pointer flex items-center justify-between gap-3 ${renderColor}`}>
        <div className='flex gap-2 items-center'>
          {Icon && <Icon size='24px' color={selected === id ? '#FFFFFF' : '#667085'} />}
          <Typography className={`${selected !== id && 'group-hover:text-primary500'} ${renderTextColor}`} size='md' text={label} weight='semibold' />
        </div>
        {renderRightSideContent()}
      </div>
      <div style={{ height: submenuItems.length && selected === id ? `${submenuItems.length * 34}px` : 0 }} className={`flex flex-col duration-500 ease-out overflow-hidden`}>
        {submenuItems?.map(element => (
          <Typography
            key={element.id}
            onClick={() => {
              handleSubMenuItemCLick(element.id)
              element.onSubMenuItemClick?.()
            }}
            className={`${element.id === activeItem ? 'text-primary500' : 'text-gray400'}  w-full py-2 px-14 cursor-pointer `}
            size='sm'
            weight='medium'
            text={element.label}
          />
        ))}
      </div>
    </div>
  )
}

SidebarNavItem.propTypes = {
  badge: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.number,
  Icon: PropTypes.elementType,
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  submenuItems: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, label: PropTypes.string, onSubMenuItemClick: PropTypes.func })),
}

SidebarNavItem.defaultProps = {
  label: 'Sidebar Nav Item',
}

export default SidebarNavItem
