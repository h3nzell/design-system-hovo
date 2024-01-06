import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

import Button from '../FormKit/Button'
import useOutsideClick from '../../hooks/useOutsideClick'
import NotificationIcons from '../Basic/Icons/Notifications'
import NotificationsDropdown from './Dropdown/NotificationsDropdown'

const NotificationBell = ({ messages, onItemClickHandler, onAllClickHandler, onMarkAsReadHandler }) => {
  const notificationRef = useRef(null)
  const [openNotification, setOpenNotifications] = useState(false)

  useOutsideClick(notificationRef, () => setOpenNotifications(false))

  const onItemHandler = (event, notification) => {
    setOpenNotifications(false)
    onItemClickHandler?.(event, notification)
  }

  return (
    <NotificationsDropdown
      ref={notificationRef}
      open={openNotification}
      notificationsList={messages}
      onItemClickHandler={onItemHandler}
      onAllClickHandler={onAllClickHandler}
      onMarkAsReadHandler={onMarkAsReadHandler}
    >
      <Button size='large' RightIcon={NotificationIcons.Notification} variant='text' onClick={() => setOpenNotifications(!openNotification)} />
    </NotificationsDropdown>
  )
}

NotificationBell.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      subLabel: PropTypes.string,
      label: PropTypes.string,
      isRead: PropTypes.bool,
    })
  ),
  onItemClickHandler: PropTypes.func,
  onAllClickHandler: PropTypes.func,
  onMarkAsReadHandler: PropTypes.func,
}

export default NotificationBell
