import React, { useState } from 'react'
import { PropTypes } from 'prop-types'
import classNames from 'classnames'

import './sidebar.css'
import Logo from '../../Basic/Logo'
import Button from './../../FormKit/Button'
import SidebarNavItem from './SidebarNavItem'
import Typography from '../../Basic/Typography'
import ArrowIcons from '../../Basic/Icons/Arrow'

const SideMenu = ({ sideMenuItems = [], isAuth = false, isMobile, handleLogout, handleNotificationClick }) => {
  const [selected, setSelected] = useState(-1)

  const onSideMenuItemClick = id => {
    if (id === selected) {
      setSelected(-1)
      return
    }
    setSelected(id)
  }

  const mobileNavItem = '!max-w-[100%] pr-2'

  return (
    <div className={classNames('p-4 w-[260px] max-h-[1098px] h-full bg-white gap-10 flex flex-col justify-between', { ['!w-full']: isMobile })}>
      <div className='flex flex-col gap-10'>
        {!isMobile && <Logo isTextIncludes size='medium' variant='dark' className='pl-[22px] pt-[24px]' />}
        <div className='flex flex-col gap-6 h-[calc(100vh-360px)] max-h-[650px] mr-[-16px] overflow-y-auto custom-sidebar'>
          <div className='flex flex-col gap-2'>
            {sideMenuItems[0].items.map(element => (
              <SidebarNavItem
                key={element.id}
                id={element.id}
                onClick={() => {
                  onSideMenuItemClick(element.id)
                  element.onMenuClick?.()
                }}
                className={isMobile && mobileNavItem}
                Icon={element.Icon}
                badge={element.badge}
                label={element.label}
                submenuItems={element.submenuItems}
                selected={selected}
              />
            ))}
          </div>
          <div className='flex flex-col gap-2'>
            {sideMenuItems[1].items.map(element => (
              <SidebarNavItem
                key={element.id}
                id={element.id}
                onSubMenuItemClick={element.onSubMenuItemClick}
                onClick={() => onSideMenuItemClick(element.id)}
                className={isMobile && mobileNavItem}
                Icon={element.Icon}
                badge={element.badge}
                label={element.label}
                submenuItems={element.submenuItems}
                selected={selected}
              />
            ))}
          </div>
          <div className='flex flex-col gap-2'>
            {sideMenuItems[2].items.map(element => (
              <SidebarNavItem
                key={element.id}
                id={element.id}
                onClick={() => onSideMenuItemClick(element.id)}
                Icon={element.Icon}
                badge={element.badge}
                className={isMobile && mobileNavItem}
                label={element.label}
                submenuItems={element.submenuItems}
                selected={selected}
              />
            ))}
            {isAuth && <SidebarNavItem id={999} onClick={handleLogout} Icon={ArrowIcons.Logout2} label='Logout' className={mobileNavItem} />}
          </div>
        </div>
      </div>

      <div className='bg-gray800 h-52 rounded-xl py-[30px] px-4 w-full flex flex-col gap-6'>
        <div className='flex flex-col gap-2 text-center'>
          <Typography className='text-white' size='lg' text='Get Job Information Into Your Inbox!' weight='bold' />
          <Typography className='text-gray300' size='xs' weight='normals' text='You can edit the frequency of the updates directly from the settings' />
        </div>
        <Button
          size='small'
          variant='secondary'
          RightIcon={ArrowIcons.ArrowRight2}
          iconColor='#000'
          className='w-fit m-auto bg-white text-black rounded-[32px]'
          onClick={handleNotificationClick}
        >
          Notifications
        </Button>
      </div>
    </div>
  )
}

SideMenu.propTypes = {
  sideMenuItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      items: PropTypes.arrayOf({
        id: PropTypes.number.isRequired,
        Icon: PropTypes.elementType,
        badge: PropTypes.string,
        onMenuClick: PropTypes.func,
        label: PropTypes.string.isRequired,
        submenuItems: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, label: PropTypes.string })),
      }),
    })
  ).isRequired,
  isAuth: PropTypes.bool,
  isMobile: PropTypes.bool,
  handleLogout: PropTypes.func,
  handleNotificationClick: PropTypes.func,
}

export default SideMenu
