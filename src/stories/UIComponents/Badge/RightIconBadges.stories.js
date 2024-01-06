import { CloseCircle } from '../../../components/Basic/Icons/Essentials'
import Badge from '../../../components/UIComponents/Badge'

export default {
  title: 'UIComponents/Badges/RIghtIcons',
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
    RightIcon: { control: 'clicked' },
  },
}

//success
export const RightSmallSuccess = args => <Badge {...args} />
RightSmallSuccess.args = {
  size: 'small',
  RightIcon: CloseCircle,
  status: 'success',
  text: 'Right Small',
}

export const RightMediumSuccess = args => <Badge {...args} />
RightMediumSuccess.args = {
  size: 'medium',
  RightIcon: CloseCircle,
  status: 'success',
  text: 'Right Medium',
}

export const RightLargeSuccess = args => <Badge {...args} />
RightLargeSuccess.args = {
  size: 'large',
  RightIcon: CloseCircle,
  status: 'success',
  text: 'Right Large',
}

// warning
export const RightSmallWarning = args => <Badge {...args} />
RightSmallWarning.args = {
  size: 'small',
  RightIcon: CloseCircle,
  status: 'warning',
  text: 'Right Small',
}

export const RightMediumWarning = args => <Badge {...args} />
RightMediumWarning.args = {
  size: 'medium',
  RightIcon: CloseCircle,
  status: 'warning',
  text: 'Right Medium',
}

export const RightLargeWarning = args => <Badge {...args} />
RightLargeWarning.args = {
  size: 'large',
  RightIcon: CloseCircle,
  status: 'warning',
  text: 'Right Large',
}

// error
export const RightSmallError = args => <Badge {...args} />
RightSmallError.args = {
  size: 'small',
  RightIcon: CloseCircle,
  status: 'error',
  text: 'Right Small',
}

export const RightMediumError = args => <Badge {...args} />
RightMediumError.args = {
  size: 'medium',
  RightIcon: CloseCircle,
  status: 'error',
  text: 'Right Medium',
}

export const RightLargeError = args => <Badge {...args} />
RightLargeError.args = {
  size: 'large',
  RightIcon: CloseCircle,
  status: 'error',
  text: 'Right Large',
}

// primary
export const RightSmallPrimary = args => <Badge {...args} />
RightSmallPrimary.args = {
  size: 'small',
  RightIcon: CloseCircle,
  status: 'primary',
  text: 'Right Small',
}

export const RightMediumPrimary = args => <Badge {...args} />
RightMediumPrimary.args = {
  size: 'medium',
  RightIcon: CloseCircle,
  status: 'primary',
  text: 'Right Medium',
}

export const RightLargePrimary = args => <Badge {...args} />
RightLargePrimary.args = {
  size: 'large',
  RightIcon: CloseCircle,
  status: 'primary',
  text: 'Right Large',
}

//purple
export const RightSmallPurple = args => <Badge {...args} />
RightSmallPurple.args = {
  size: 'small',
  RightIcon: CloseCircle,
  status: 'purple',
  text: 'Right Small',
}

export const RightMediumPurple = args => <Badge {...args} />
RightMediumPurple.args = {
  size: 'medium',
  RightIcon: CloseCircle,
  status: 'purple',
  text: 'Right Medium',
}

export const RightLargePurple = args => <Badge {...args} />
RightLargePurple.args = {
  size: 'large',
  RightIcon: CloseCircle,
  status: 'purple',
  text: 'Right Large',
}

//blue
export const RightSmallBlue = args => <Badge {...args} />
RightSmallBlue.args = {
  size: 'small',
  RightIcon: CloseCircle,
  status: 'blue',
  text: 'Right Small',
}

export const RightMediumBlue = args => <Badge {...args} />
RightMediumBlue.args = {
  size: 'medium',
  RightIcon: CloseCircle,
  status: 'blue',
  text: 'Right Medium',
}

export const RightLargeBlue = args => <Badge {...args} />
RightLargeBlue.args = {
  size: 'large',
  RightIcon: CloseCircle,
  status: 'blue',
  text: 'Right Large',
}

//default
export const RightSmallDefault = args => <Badge {...args} />
RightSmallDefault.args = {
  size: 'small',
  RightIcon: CloseCircle,
  text: 'Right Small',
}

export const RightMediumDefault = args => <Badge {...args} />
RightMediumDefault.args = {
  size: 'medium',
  RightIcon: CloseCircle,
  text: 'Right Medium',
}

export const RightLargeDefault = args => <Badge {...args} />
RightLargeDefault.args = {
  size: 'large',
  RightIcon: CloseCircle,
  text: 'Right Large',
}
