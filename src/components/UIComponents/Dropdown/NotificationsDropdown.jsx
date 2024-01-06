import React, { forwardRef, useMemo } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import Button from './../../FormKit/Button'
import DropdownLayout from './DropdownLayout'
import Typography from './../../Basic/Typography'

const NotificationsDropdown = forwardRef(({ children, open, notificationsList, onItemClickHandler, onAllClickHandler, onMarkAsReadHandler }, ref) => {
  const notificationList = useMemo(
    () =>
      notificationsList.map(notification => (
        <li
          key={notification.id}
          onClick={event => onItemClickHandler(event, notification)}
          className={classNames('bg-white flex px-4 py-[10px] cursor-pointer', {
            ['!bg-primary50 justify-between items-center']: !notification.isRead,
            ['flex-col']: notification.isRead,
          })}
        >
          {notification.isRead ? (
            <div className='flex flex-col gap-1'>
              <Typography text={notification.label} weight='semibold' size='sm' className='text-gray700' />
              <Typography text={notification.subLabel} weight='normal' size='xs' className='text-gray500' />
            </div>
          ) : (
            <>
              <div className='flex flex-col gap-1'>
                <Typography text={notification.label} weight='semibold' size='sm' className='text-primary600' />
                <Typography text={notification.subLabel} weight='normal' size='xs' className='text-gray500' />
              </div>
              <span className='w-[10px] h-[10px] bg-primary300 rounded-full' />
            </>
          )}
        </li>
      )),
    [open, notificationsList]
  )

  return (
    <div ref={ref} className='relative flex flex-col items-end'>
      {children}
      <DropdownLayout className='!w-[fit-content]' itemsLength={notificationsList.length} open={open}>
        <div className='min-w-[360px]'>
          <div className='flex items-center justify-between gap-2 py-2 px-4 border-b-2 border-gray-100 bg-white rounded-t-lg'>
            <Typography text='Notifications' size='md' weight='medium' />
            <Button variant='text' size='medium' className='text-primary500' onClick={onMarkAsReadHandler}>
              Mark all as read
            </Button>
          </div>
          {notificationList}
          <div className='flex items-center justify-center py-2 border-t-2 border-gray-100 bg-white rounded-b-lg'>
            <Button onClick={onAllClickHandler} variant='text' size='small'>
              View all notifications
            </Button>
          </div>
        </div>
      </DropdownLayout>
    </div>
  )
})

NotificationsDropdown.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.element,
  onItemClickHandler: PropTypes.func,
  onAllClickHandler: PropTypes.func,
  onMarkAsReadHandler: PropTypes.func,
  notificationsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
      label: PropTypes.string,
      subLabel: PropTypes.string,
      isUnread: PropTypes.bool,
    })
  ),
}

export default NotificationsDropdown
