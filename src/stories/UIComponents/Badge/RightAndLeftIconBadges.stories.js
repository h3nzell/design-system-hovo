import { Add, CloseCircle } from '../../../components/Basic/Icons/Essentials'
import Badge from '../../../components/UIComponents/Badge'

export default {
  title: 'UIComponents/Badges/LeftAndRightIcons',
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
export const LeftAndRightSmallSuccess = args => <Badge {...args} />
LeftAndRightSmallSuccess.args = {
  size: 'small',
  LeftIcon: Add,
  status: 'success',
  text: 'Left Small',
  RightIcon: CloseCircle,
}

export const LeftAndRightMediumSuccess = args => <Badge {...args} />
LeftAndRightMediumSuccess.args = {
  size: 'medium',
  LeftIcon: Add,
  status: 'success',
  text: 'Left Medium',
  RightIcon: CloseCircle,
}

export const LeftAndRightLargeSuccess = args => <Badge {...args} />
LeftAndRightLargeSuccess.args = {
  size: 'large',
  LeftIcon: Add,
  status: 'success',
  text: 'Left Large',
  RightIcon: CloseCircle,
}

// warning
export const LeftAndRightSmallWarning = args => <Badge {...args} />
LeftAndRightSmallWarning.args = {
  size: 'small',
  LeftIcon: Add,
  status: 'warning',
  text: 'Left Small',
  RightIcon: CloseCircle,
}

export const LeftAndRightMediumWarning = args => <Badge {...args} />
LeftAndRightMediumWarning.args = {
  size: 'medium',
  LeftIcon: Add,
  status: 'warning',
  text: 'Left Medium',
  RightIcon: CloseCircle,
}

export const LeftAndRightLargeWarning = args => <Badge {...args} />
LeftAndRightLargeWarning.args = {
  size: 'large',
  LeftIcon: Add,
  status: 'warning',
  text: 'Left Large',
  RightIcon: CloseCircle,
}

// error
export const LeftAndRightSmallError = args => <Badge {...args} />
LeftAndRightSmallError.args = {
  size: 'small',
  LeftIcon: Add,
  status: 'error',
  text: 'Left Small',
  RightIcon: CloseCircle,
}

export const LeftAndRightMediumError = args => <Badge {...args} />
LeftAndRightMediumError.args = {
  size: 'medium',
  LeftIcon: Add,
  status: 'error',
  text: 'Left Medium',
  RightIcon: CloseCircle,
}

export const LeftAndRightLargeError = args => <Badge {...args} />
LeftAndRightLargeError.args = {
  size: 'large',
  LeftIcon: Add,
  status: 'error',
  text: 'Left Large',
  RightIcon: CloseCircle,
}

// primary
export const LeftAndRightSmallPrimary = args => <Badge {...args} />
LeftAndRightSmallPrimary.args = {
  size: 'small',
  LeftIcon: Add,
  status: 'primary',
  text: 'Left Small',
  RightIcon: CloseCircle,
}

export const LeftAndRightMediumPrimary = args => <Badge {...args} />
LeftAndRightMediumPrimary.args = {
  size: 'medium',
  LeftIcon: Add,
  status: 'primary',
  text: 'Left Medium',
  RightIcon: CloseCircle,
}

export const LeftAndRightLargePrimary = args => <Badge {...args} />
LeftAndRightLargePrimary.args = {
  size: 'large',
  LeftIcon: Add,
  status: 'primary',
  text: 'Left Large',
  RightIcon: CloseCircle,
}

//purple
export const LeftAndRightSmallPurple = args => <Badge {...args} />
LeftAndRightSmallPurple.args = {
  size: 'small',
  LeftIcon: Add,
  status: 'purple',
  text: 'Left Small',
  RightIcon: CloseCircle,
}

export const LeftAndRightMediumPurple = args => <Badge {...args} />
LeftAndRightMediumPurple.args = {
  size: 'medium',
  LeftIcon: Add,
  status: 'purple',
  text: 'Left Medium',
  RightIcon: CloseCircle,
}

export const LeftAndRightLargePurple = args => <Badge {...args} />
LeftAndRightLargePurple.args = {
  size: 'large',
  LeftIcon: Add,
  status: 'purple',
  text: 'Left Large',
  RightIcon: CloseCircle,
}

//blue
export const LeftAndRightSmallBlue = args => <Badge {...args} />
LeftAndRightSmallBlue.args = {
  size: 'small',
  LeftIcon: Add,
  status: 'blue',
  text: 'Left Small',
  RightIcon: CloseCircle,
}

export const LeftAndRightMediumBlue = args => <Badge {...args} />
LeftAndRightMediumBlue.args = {
  size: 'medium',
  LeftIcon: Add,
  status: 'blue',
  text: 'Left Medium',
  RightIcon: CloseCircle,
}

export const LeftAndRightLargeBlue = args => <Badge {...args} />
LeftAndRightLargeBlue.args = {
  size: 'large',
  LeftIcon: Add,
  status: 'blue',
  text: 'Left Large',
  RightIcon: CloseCircle,
}

//default
export const LeftAndRightSmallDefault = args => <Badge {...args} />
LeftAndRightSmallDefault.args = {
  size: 'small',
  LeftIcon: Add,
  text: 'Left Small',
  RightIcon: CloseCircle,
}

export const LeftAndRightMediumDefault = args => <Badge {...args} />
LeftAndRightMediumDefault.args = {
  size: 'medium',
  LeftIcon: Add,
  text: 'Left Medium',
  RightIcon: CloseCircle,
}

export const LeftAndRightLargeDefault = args => <Badge {...args} />
LeftAndRightLargeDefault.args = {
  size: 'large',
  LeftIcon: Add,
  text: 'Left Large',
  RightIcon: CloseCircle,
}
