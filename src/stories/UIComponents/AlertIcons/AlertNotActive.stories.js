import Alert from '../../../components/UIComponents/Alert'

export default {
  title: 'UIComponents/Alert/Alert-Not-Outlined',
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
  outlined: false,
  status: 'success',
  size: 'small',
}

export const AlertErrorSmall = args => <Alert {...args} />
AlertErrorSmall.args = {
  outlined: false,
  status: 'error',
  size: 'small',
}

export const AlertInfoSmall = args => <Alert {...args} />
AlertInfoSmall.args = {
  outlined: false,
  status: 'info',
  size: 'small',
}

export const AlertWarningSmall = args => <Alert {...args} />
AlertWarningSmall.args = {
  outlined: false,
  status: 'warning',
  size: 'small',
}

export const AlertSuccessMedium = args => <Alert {...args} />
AlertSuccessMedium.args = {
  outlined: false,
  status: 'success',
  size: 'medium',
}

export const AlertErrorMedium = args => <Alert {...args} />
AlertErrorMedium.args = {
  outlined: false,
  status: 'error',
  size: 'medium',
}

export const AlertInfoMedium = args => <Alert {...args} />
AlertInfoMedium.args = {
  outlined: false,
  status: 'info',
  size: 'medium',
}

export const AlertWarningMedium = args => <Alert {...args} />
AlertWarningMedium.args = {
  outlined: false,
  status: 'warning',
  size: 'medium',
}

export const AlertSuccessLarge = args => <Alert {...args} />
AlertSuccessLarge.args = {
  outlined: false,
  status: 'success',
  size: 'large',
}

export const AlertErrorLarge = args => <Alert {...args} />
AlertErrorLarge.args = {
  outlined: false,
  status: 'error',
  size: 'large',
}

export const AlertInfoLarge = args => <Alert {...args} />
AlertInfoLarge.args = {
  outlined: false,
  status: 'info',
  size: 'large',
}

export const AlertWarningLarge = args => <Alert {...args} />
AlertWarningLarge.args = {
  outlined: false,
  status: 'warning',
  size: 'large',
}
