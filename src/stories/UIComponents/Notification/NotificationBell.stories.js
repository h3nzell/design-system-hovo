import NotificationBell from '../../../components/UIComponents/NotificationBell'

export default {
  title: 'UIComponents/Notification/NotificationBell',
  component: NotificationBell,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    messages: { control: 'array' },
    onItemClickHandler: { control: 'func' },
    onAllClickHandler: { control: 'func' },
    onMarkAsReadHandler: { control: 'func' },
  },
}

export const SimpleNotificationBell = args => <NotificationBell {...args} />
SimpleNotificationBell.args = {
  messages: [
    {
      id: 1,
      subLabel: 'This is the notification title',
      label: 'This is the notification title',
      isRead: false,
    },
    {
      id: 2,
      subLabel: 'This is the notification title',
      label: 'This is the notification title',
      isRead: false,
    },
    {
      id: 3,
      subLabel: 'This is the notification title',
      label: 'This is the notification title',
      isRead: false,
    },
  ],
  onItemClickHandler: (event, notification) => console.log('item handler', event, notification),
  onAllClickHandler: () => console.log('all handler'),
  onMarkAsReadHandler: () => console.log('mark as read handler'),
}
