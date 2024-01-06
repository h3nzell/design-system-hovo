import React, { useState } from 'react'

import Avatar from '../UIComponents/Avatar'
import PropTypes from 'prop-types'
import SearchInput from '../UIComponents/SearchInput'
import NotificationBell from '../UIComponents/NotificationBell'

const Header = ({ firstName, lastName }) => {
  const itemsReal = [
    { id: 1, value: 'jobs', label: 'Jobs' },
    { id: 2, value: 'contacts', label: 'Contacts' },
    { id: 3, value: 'projects', label: 'Projects' },
    { id: 4, value: 'projects', label: 'Projects' },
    { id: 5, value: 'projects', label: 'Projects' },
    { id: 6, value: 'projects', label: 'Projects' },
  ]
  const [filteredItems, setFilteredItems] = useState(itemsReal)

  const itemsCategory = [
    { id: 15, value: '', label: 'Default' },
    { id: 25, value: 'jobs', label: 'Jobs' },
    { id: 35, value: 'contacts', label: 'Contactsasdasdasdsdads' },
    { id: 45, value: 'projects', label: 'Projects' },
  ]

  const onCategoryChange = (_, value) => {
    const newFitleredArray = itemsReal.filter(item => {
      return item.value.toLowerCase().includes(value.toLowerCase())
    })
    setFilteredItems(newFitleredArray)
  }

  const onSearchInputChange = (_, value) => {
    const newFitleredArray = itemsReal.filter(item => {
      return item.value.toLowerCase().includes(value.toLowerCase())
    })
    setFilteredItems(newFitleredArray)
  }

  const onNotificationItemClickHandler = (event, notification) => {
    console.log(event, notification)
  }

  const notificationList = [
    {
      id: 1,
      value: 'This is the notification title',
      subLabel: 'This is the notification title',
      label: 'This is the notification title',
      isRead: false,
    },
  ]

  return (
    <header className='flex justify-between bg-white w-full p-[24px] h-[max-content]'>
      <SearchInput
        name='search name'
        defaultCategory='Default'
        placeholder='Search for a job'
        searchList={filteredItems}
        categoryList={itemsCategory}
        onChange={onSearchInputChange}
        onCategoryChange={onCategoryChange}
      />
      <div className='flex items-center gap-[25px]'>
        <NotificationBell
          messages={notificationList}
          onItemClickHandler={onNotificationItemClickHandler}
          onAllClickHandler={() => console.log('all notification messages callback')}
          onMarkAsReadHandler={() => console.log('mark as read notification messages callback')}
        />
        <Avatar firstName={firstName} lastName={lastName} size='medium' />
      </div>
    </header>
  )
}

Header.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
}

export default Header
