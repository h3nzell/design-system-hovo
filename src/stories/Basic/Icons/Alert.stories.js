import Icons from '../../../components/Basic/Icons/Icons'
import AlertIcons from '../../../components/Basic/Icons/Alert'

export default {
  title: 'Basic/Icons/Alert',
  component: Icons,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'number',
    },
  },
}

export const Success = {
  args: {
    Icon: AlertIcons.Success,
    size: 24,
  },
}

export const Error = {
  args: {
    Icon: AlertIcons.Error,
    size: 24,
  },
}

export const Info = {
  args: {
    Icon: AlertIcons.Info,
    size: 24,
  },
}

export const Warning = {
  args: {
    Icon: AlertIcons.Warning,
    size: 24,
  },
}
