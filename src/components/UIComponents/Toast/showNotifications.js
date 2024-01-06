import { toast } from 'react-toastify'
import { injectStyle } from 'react-toastify/dist/inject-style'

import Alert from '../Alert'
import Button from '../../FormKit/Button'
import Typography from '../../Basic/Typography'

const showNotification = (type, { subTitle, actionFirst, actionSecond, hideClose = false }) => {
  injectStyle()

  const confgiTitle = {
    success: 'Action Successfully Completed!',
    error: 'Action Was Not Successful!',
    info: "Here's Something Important!",
    warning: 'A Warning is Initiated',
    default: 'A Default is Initiated',
  }

  const configBackgroundColor = {
    success: '#F2FBF7',
    error: '#FFFBFA',
    info: '#F5FAFF',
    warning: '#FFFCF5',
    default: '#ffffff',
  }

  const configActionColor = {
    success: 'text-success600',
    error: 'text-error600',
    info: 'text-blue600',
    warning: 'text-warning600',
    default: 'text-gray600',
  }

  const toastContent = (
    <div className='flex flex-col gap-1'>
      <Typography weight='bold' size='lg' className='text-gray700' text={confgiTitle[type]} />
      <Typography weight='normal' size='sm' className='text-gray500 whitespace-nowrap' text={subTitle} />
      <div className='flex gap-1'>
        {actionFirst && (
          <Button className={configActionColor[type]} variant='text' onClick={actionFirst}>
            Action Number 1
          </Button>
        )}
        {actionSecond && (
          <Button variant='text' onClick={actionSecond}>
            Action Number 2
          </Button>
        )}
      </div>
    </div>
  )

  const configToast = {
    type,
    style: { backgroundColor: configBackgroundColor[type], borderRadius: 20 },
    icon: <Alert size='small' status={type} />,
    bodyStyle: { alignItems: 'center' },
  }

  if (actionFirst || actionSecond) {
    configToast['bodyStyle'].alignItems = 'start'
  }

  if (type === 'default') {
    configToast['progressStyle'] = { backgroundColor: 'gray' }
    configToast['icon'] = false
  }

  if (hideClose) {
    configToast['closeButton'] = false
  }
console.log(toastContent, configToast)
  toast(toastContent, configToast)
}

export default showNotification
