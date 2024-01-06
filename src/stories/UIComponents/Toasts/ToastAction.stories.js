import Button from '../../../components/FormKit/Button'
import ToastService from '../../../components/UIComponents/Toast/ToastService'
import showNotification from '../../../components/UIComponents/Toast/showNotifications'

export default {
  title: 'UIComponents/Toast/Toast-Action',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const ToastActionSuccess = args => (
  <>
    <Button {...args}>Success Alert</Button>
    <ToastService />
  </>
)
ToastActionSuccess.args = {
  onClick: () =>
    showNotification('success', {
      subTitle: 'User Logged In Successfully',
      actionFirst: () => alert('action 1'),
      actionSecond: () => alert('action 2'),
    }),
}

export const ToastActionError = args => (
  <>
    <Button {...args}>Error Alert</Button>
    <ToastService />
  </>
)
ToastActionError.args = {
  onClick: () =>
    showNotification('error', {
      subTitle: 'User Could Not Log In',
      actionFirst: () => alert('action 1'),
      actionSecond: () => alert('action 2'),
    }),
}

export const ToastActionInfo = args => (
  <>
    <Button {...args}>Info Alert</Button>
    <ToastService />
  </>
)
ToastActionInfo.args = {
  onClick: () =>
    showNotification('info', {
      subTitle: 'User Logged In Successfully',
      actionFirst: () => alert('action 1'),
      actionSecond: () => alert('action 2'),
    }),
}

export const ToastActionWarning = args => (
  <>
    <Button {...args}>Warning Alert</Button>
    <ToastService />
  </>
)
ToastActionWarning.args = {
  onClick: () =>
    showNotification('warning', {
      subTitle: 'User Logged In Successfully, but warn you to log out',
      actionFirst: () => alert('action 1'),
      actionSecond: () => alert('action 2'),
    }),
}

export const ToastActionDefault = args => (
  <>
    <Button {...args}>Warning Alert</Button>
    <ToastService />
  </>
)
ToastActionDefault.args = {
  onClick: () =>
    showNotification('default', {
      subTitle: 'User Logged In Successfully, but warn you to log out',
      actionFirst: () => alert('action 1'),
      actionSecond: () => alert('action 2'),
    }),
}
