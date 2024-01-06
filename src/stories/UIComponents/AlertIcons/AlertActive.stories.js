import Alert from '../../../components/UIComponents/Alert'

export default {
  title: 'UIComponents/Alert/Alert-Outlined',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    outlined: { control: 'boolean' },

    size: {
      control: {
        type: 'select',
        options: ['large', 'medium', 'small', 'micro'],
      },
    },
  },
}

export const AlertSuccessSmall = args => <Alert {...args} />
AlertSuccessSmall.args = {
  status: 'success',
  size: 'small',
}

export const AlertErrorSmall = args => <Alert {...args} />
AlertErrorSmall.args = {
  status: 'error',
  size: 'small',
}

export const AlertInfoSmall = args => <Alert {...args} />
AlertInfoSmall.args = {
  status: 'info',
  size: 'small',
}

export const AlertWarningSmall = args => <Alert {...args} />
AlertWarningSmall.args = {
  status: 'warning',
  size: 'small',
}

export const AlertSuccessMedium = args => <Alert {...args} />
AlertSuccessMedium.args = {
  status: 'success',
  size: 'medium',
}

export const AlertErrorMedium = args => <Alert {...args} />
AlertErrorMedium.args = {
  status: 'error',
  size: 'medium',
}

export const AlertInfoMedium = args => <Alert {...args} />
AlertInfoMedium.args = {
  status: 'info',
  size: 'medium',
}

export const AlertWarningMedium = args => <Alert {...args} />
AlertWarningMedium.args = {
  status: 'warning',
  size: 'medium',
}

export const AlertSuccessLarge = args => <Alert {...args} />
AlertSuccessLarge.args = {
  status: 'success',
  size: 'large',
}

export const AlertErrorLarge = args => <Alert {...args} />
AlertErrorLarge.args = {
  status: 'error',
  size: 'large',
}

export const AlertInfoLarge = args => <Alert {...args} />
AlertInfoLarge.args = {
  status: 'info',
  size: 'large',
}

export const AlertWarningLarge = args => <Alert {...args} />
AlertWarningLarge.args = {
  status: 'warning',
  size: 'large',
}
