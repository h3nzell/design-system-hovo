import Button from '../../../components/FormKit/Button'
import ToastService from '../../../components/UIComponents/Toast/ToastService'
import showNotification from '../../../components/UIComponents/Toast/showNotifications'

export default {
  title: 'UIComponents/Toast/Toast-No-Action-Hide-Close',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const ToastSuccess = args => (
  <>
    <Button {...args}>Success Alert</Button>
    <ToastService />
  </>
)
ToastSuccess.args = {
  onClick: () => showNotification('success', { subTitle: 'User Logged In Successfully', hideClose: true }),
}

export const ToastError = args => (
  <>
    <Button {...args}>Error Alert</Button>
    <ToastService />
  </>
)
ToastError.args = {
  onClick: () => showNotification('error', { subTitle: 'User Could Not Log In', hideClose: true }),
}

export const ToastInfo = args => (
  <>
    <Button {...args}>Info Alert</Button>
    <ToastService />
  </>
)
ToastInfo.args = {
  onClick: () => showNotification('info', { subTitle: 'User Logged In Successfully', hideClose: true }),
}

export const ToastWarning = args => (
  <>
    <Button {...args}>Warning Alert</Button>
    <ToastService />
  </>
)
ToastWarning.args = {
  onClick: () =>
    showNotification('warning', { subTitle: 'User Logged In Successfully, but warn you to log out', hideClose: true }),
}

export const ToastDefault = args => (
  <>
    <Button {...args}>Warning Alert</Button>
    <ToastService />
  </>
)
ToastDefault.args = {
  onClick: () =>
    showNotification('default', { subTitle: 'User Logged In Successfully, but warn you to log out', hideClose: true }),
}
