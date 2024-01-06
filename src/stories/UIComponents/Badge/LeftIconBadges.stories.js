import { Add } from '../../../components/Basic/Icons/Essentials'
import Badge from '../../../components/UIComponents/Badge'

export default {
  title: 'UIComponents/Badges/LeftIcons',
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
  },
}

//success
export const LeftSmallSuccess = args => <Badge {...args} />
LeftSmallSuccess.args = {
  size: 'small',
  LeftIcon: Add,
  status: 'success',
  text: 'Left Small',
}

export const LeftMediumSuccess = args => <Badge {...args} />
LeftMediumSuccess.args = {
  size: 'medium',
  LeftIcon: Add,
  status: 'success',
  text: 'Left Medium',
}

export const LeftLargeSuccess = args => <Badge {...args} />
LeftLargeSuccess.args = {
  size: 'large',
  LeftIcon: Add,
  status: 'success',
  text: 'Left Large',
}

// warning
export const LeftSmallWarning = args => <Badge {...args} />
LeftSmallWarning.args = {
  size: 'small',
  LeftIcon: Add,
  status: 'warning',
  text: 'Left Small',
}

export const LeftMediumWarning = args => <Badge {...args} />
LeftMediumWarning.args = {
  size: 'medium',
  LeftIcon: Add,
  status: 'warning',
  text: 'Left Medium',
}

export const LeftLargeWarning = args => <Badge {...args} />
LeftLargeWarning.args = {
  size: 'large',
  LeftIcon: Add,
  status: 'warning',
  text: 'Left Large',
}

// error
export const LeftSmallError = args => <Badge {...args} />
LeftSmallError.args = {
  size: 'small',
  LeftIcon: Add,
  status: 'error',
  text: 'Left Small',
}

export const LeftMediumError = args => <Badge {...args} />
LeftMediumError.args = {
  size: 'medium',
  LeftIcon: Add,
  status: 'error',
  text: 'Left Medium',
}

export const LeftLargeError = args => <Badge {...args} />
LeftLargeError.args = {
  size: 'large',
  LeftIcon: Add,
  status: 'error',
  text: 'Left Large',
}

// primary
export const LeftSmallPrimary = args => <Badge {...args} />
LeftSmallPrimary.args = {
  size: 'small',
  LeftIcon: Add,
  status: 'primary',
  text: 'Left Small',
}

export const LeftMediumPrimary = args => <Badge {...args} />
LeftMediumPrimary.args = {
  size: 'medium',
  LeftIcon: Add,
  status: 'primary',
  text: 'Left Medium',
}

export const LeftLargePrimary = args => <Badge {...args} />
LeftLargePrimary.args = {
  size: 'large',
  LeftIcon: Add,
  status: 'primary',
  text: 'Left Large',
}

//purple
export const LeftSmallPurple = args => <Badge {...args} />
LeftSmallPurple.args = {
  size: 'small',
  LeftIcon: Add,
  status: 'purple',
  text: 'Left Small',
}

export const LeftMediumPurple = args => <Badge {...args} />
LeftMediumPurple.args = {
  size: 'medium',
  LeftIcon: Add,
  status: 'purple',
  text: 'Left Medium',
}

export const LeftLargePurple = args => <Badge {...args} />
LeftLargePurple.args = {
  size: 'large',
  LeftIcon: Add,
  status: 'purple',
  text: 'Left Large',
}

//blue
export const LeftSmallBlue = args => <Badge {...args} />
LeftSmallBlue.args = {
  size: 'small',
  LeftIcon: Add,
  status: 'blue',
  text: 'Left Small',
}

export const LeftMediumBlue = args => <Badge {...args} />
LeftMediumBlue.args = {
  size: 'medium',
  LeftIcon: Add,
  status: 'blue',
  text: 'Left Medium',
}

export const LeftLargeBlue = args => <Badge {...args} />
LeftLargeBlue.args = {
  size: 'large',
  LeftIcon: Add,
  status: 'blue',
  text: 'Left Large',
}

//default
export const LeftSmallDefault = args => <Badge {...args} />
LeftSmallDefault.args = {
  size: 'small',
  LeftIcon: Add,
  text: 'Left Small',
}

export const LeftMediumDefault = args => <Badge {...args} />
LeftMediumDefault.args = {
  size: 'medium',
  LeftIcon: Add,
  text: 'Left Medium',
}

export const LeftLargeDefault = args => <Badge {...args} />
LeftLargeDefault.args = {
  size: 'large',
  LeftIcon: Add,
  text: 'Left Large',
}
