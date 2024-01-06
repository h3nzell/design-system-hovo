import Badge from '../../../components/UIComponents/Badge'

export default {
  title: 'UIComponents/Badges/OnlyBadges',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    status: {
      control: {
        type: 'select',
        options: ['success', 'warning', 'error', 'primary', 'purple', 'blue', 'default'],
      },
    },
    text: { control: 'text' },
    dot: { control: 'clicked' },
    avatar: { control: 'clicked' },
    LeftIcon: { control: 'clicked' },
    RightIcon: { control: 'clicked' },
  },
}

//success
export const SuccessSmall = args => <Badge {...args} />
SuccessSmall.args = {
  size: 'small',
  status: 'success',
  text: 'Success Small',
}

export const SuccessMedium = args => <Badge {...args} />
SuccessMedium.args = {
  size: 'medium',
  status: 'success',
  text: 'Success Medium',
}

export const SuccessLarge = args => <Badge {...args} />
SuccessLarge.args = {
  size: 'large',
  status: 'success',
  text: 'Success Large',
}

//warning
export const WarningSmall = args => <Badge {...args} />
WarningSmall.args = {
  size: 'small',
  status: 'warning',
  text: 'Warning Small',
}

export const WarningMedium = args => <Badge {...args} />
WarningMedium.args = {
  size: 'medium',
  status: 'warning',
  text: 'Warning Medium',
}

export const WarningLarge = args => <Badge {...args} />
WarningLarge.args = {
  size: 'large',
  status: 'warning',
  text: 'Warning Large',
}

//error
export const ErrorSmall = args => <Badge {...args} />
ErrorSmall.args = {
  size: 'small',
  status: 'error',
  text: 'Error Small',
}

export const ErrorMedium = args => <Badge {...args} />
ErrorMedium.args = {
  size: 'medium',
  status: 'error',
  text: 'Error Medium',
}

export const ErrorLarge = args => <Badge {...args} />
ErrorLarge.args = {
  size: 'large',
  status: 'error',
  text: 'Error Large',
}

//primary
export const PrimarySmall = args => <Badge {...args} />
PrimarySmall.args = {
  size: 'small',
  status: 'primary',
  text: 'Primary Small',
}

export const PrimaryMedium = args => <Badge {...args} />
PrimaryMedium.args = {
  size: 'medium',
  status: 'primary',
  text: 'Primary Medium',
}

export const PrimaryLarge = args => <Badge {...args} />
PrimaryLarge.args = {
  size: 'large',
  status: 'primary',
  text: 'Primary Large',
}

// purple
export const PurpleSmall = args => <Badge {...args} />
PurpleSmall.args = {
  size: 'small',
  status: 'purple',
  text: 'Purple Small',
}

export const PurpleMedium = args => <Badge {...args} />
PurpleMedium.args = {
  size: 'medium',
  status: 'purple',
  text: 'Purple Medium',
}

export const PurpleLarge = args => <Badge {...args} />
PurpleLarge.args = {
  size: 'large',
  status: 'purple',
  text: 'Purple Large',
}

//blue
export const BlueSmall = args => <Badge {...args} />
BlueSmall.args = {
  size: 'small',
  status: 'blue',
  text: 'Blue Small',
}

export const BlueMedium = args => <Badge {...args} />
BlueMedium.args = {
  size: 'medium',
  status: 'blue',
  text: 'Blue Medium',
}

export const BlueLarge = args => <Badge {...args} />
BlueLarge.args = {
  size: 'large',
  status: 'blue',
  text: 'Blue Large',
}

// default
export const DefaultSmall = args => <Badge {...args} />
DefaultSmall.args = {
  size: 'small',
  text: 'Default Small',
}

export const DefaultMedium = args => <Badge {...args} />
DefaultMedium.args = {
  size: 'medium',
  text: 'Default Medium',
}

export const DefaultLarge = args => <Badge {...args} />
DefaultLarge.args = {
  size: 'large',
  text: 'Default Large',
}
