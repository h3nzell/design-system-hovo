import Badge from '../../../components/UIComponents/Badge'

export default {
  title: 'UIComponents/Badges/Dots',
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
    dot: { control: 'boolean' },
  },
}

//success
export const DotsSmallSuccess = args => <Badge {...args} />
DotsSmallSuccess.args = {
  dot: true,
  size: 'small',
  status: 'success',
  text: 'Dots Small',
}

export const DotsMediumSuccess = args => <Badge {...args} />
DotsMediumSuccess.args = {
  dot: true,
  size: 'medium',
  status: 'success',
  text: 'Dots Medium',
}

export const DotsLargeSuccess = args => <Badge {...args} />
DotsLargeSuccess.args = {
  dot: true,
  size: 'large',
  status: 'success',
  text: 'Dots Large',
}

// warning
export const DotsSmallWarning = args => <Badge {...args} />
DotsSmallWarning.args = {
  dot: true,
  size: 'small',
  status: 'warning',
  text: 'Dots Small',
}

export const DotsMediumWarning = args => <Badge {...args} />
DotsMediumWarning.args = {
  dot: true,
  size: 'medium',
  status: 'warning',
  text: 'Dots Medium',
}

export const DotsLargeWarning = args => <Badge {...args} />
DotsLargeWarning.args = {
  dot: true,
  size: 'large',
  status: 'warning',
  text: 'Dots Large',
}

// error
export const DotsSmallError = args => <Badge {...args} />
DotsSmallError.args = {
  dot: true,
  size: 'small',
  status: 'error',
  text: 'Dots Small',
}

export const DotsMediumError = args => <Badge {...args} />
DotsMediumError.args = {
  dot: true,
  size: 'medium',
  status: 'error',
  text: 'Dots Medium',
}

export const DotsLargeError = args => <Badge {...args} />
DotsLargeError.args = {
  dot: true,
  size: 'large',
  status: 'error',
  text: 'Dots Large',
}

// primary
export const DotsSmallPrimary = args => <Badge {...args} />
DotsSmallPrimary.args = {
  dot: true,
  size: 'small',
  status: 'primary',
  text: 'Dots Small',
}

export const DotsMediumPrimary = args => <Badge {...args} />
DotsMediumPrimary.args = {
  dot: true,
  size: 'medium',
  status: 'primary',
  text: 'Dots Medium',
}

export const DotsLargePrimary = args => <Badge {...args} />
DotsLargePrimary.args = {
  dot: true,
  size: 'large',
  status: 'primary',
  text: 'Dots Large',
}

//purple
export const DotsSmallPurple = args => <Badge {...args} />
DotsSmallPurple.args = {
  dot: true,
  size: 'small',
  status: 'purple',
  text: 'Dots Small',
}

export const DotsMediumPurple = args => <Badge {...args} />
DotsMediumPurple.args = {
  dot: true,
  size: 'medium',
  status: 'purple',
  text: 'Dots Medium',
}

export const LeftLargePurple = args => <Badge {...args} />
LeftLargePurple.args = {
  dot: true,
  size: 'large',
  status: 'purple',
  text: 'Left Large',
}

//blue
export const LeftSmallBlue = args => <Badge {...args} />
LeftSmallBlue.args = {
  dot: true,
  size: 'small',
  status: 'blue',
  text: 'Left Small',
}

export const LeftMediumBlue = args => <Badge {...args} />
LeftMediumBlue.args = {
  dot: true,
  size: 'medium',
  status: 'blue',
  text: 'Left Medium',
}

export const LeftLargeBlue = args => <Badge {...args} />
LeftLargeBlue.args = {
  dot: true,
  size: 'large',
  status: 'blue',
  text: 'Left Large',
}

//default
export const LeftSmallDefault = args => <Badge {...args} />
LeftSmallDefault.args = {
  dot: true,
  size: 'small',
  text: 'Left Small',
}

export const LeftMediumDefault = args => <Badge {...args} />
LeftMediumDefault.args = {
  dot: true,
  size: 'medium',
  text: 'Left Medium',
}

export const LeftLargeDefault = args => <Badge {...args} />
LeftLargeDefault.args = {
  dot: true,
  size: 'large',
  text: 'Left Large',
}
