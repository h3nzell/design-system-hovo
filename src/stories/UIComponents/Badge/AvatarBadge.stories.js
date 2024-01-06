import Badge from '../../../components/UIComponents/Badge'

export default {
  title: 'UIComponents/Badges/Avatar',
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
    avatar: { control: 'text' },
  },
}

//success
export const DotsSmallSuccess = args => <Badge {...args} />
DotsSmallSuccess.args = {
  avatar: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628',
  size: 'small',
  status: 'success',
  text: 'Dots Small',
}

export const DotsMediumSuccess = args => <Badge {...args} />
DotsMediumSuccess.args = {
  avatar: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628',
  size: 'medium',
  status: 'success',
  text: 'Dots Medium',
}

export const DotsLargeSuccess = args => <Badge {...args} />
DotsLargeSuccess.args = {
  avatar: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628',
  size: 'large',
  status: 'success',
  text: 'Dots Large',
}

// warning
export const DotsSmallWarning = args => <Badge {...args} />
DotsSmallWarning.args = {
  avatar: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628',
  size: 'small',
  status: 'warning',
  text: 'Dots Small',
}

export const DotsMediumWarning = args => <Badge {...args} />
DotsMediumWarning.args = {
  avatar: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628',
  size: 'medium',
  status: 'warning',
  text: 'Dots Medium',
}

export const DotsLargeWarning = args => <Badge {...args} />
DotsLargeWarning.args = {
  avatar: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628',
  size: 'large',
  status: 'warning',
  text: 'Dots Large',
}

// error
export const DotsSmallError = args => <Badge {...args} />
DotsSmallError.args = {
  avatar: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628',
  size: 'small',
  status: 'error',
  text: 'Dots Small',
}

export const DotsMediumError = args => <Badge {...args} />
DotsMediumError.args = {
  avatar: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628',
  size: 'medium',
  status: 'error',
  text: 'Dots Medium',
}

export const DotsLargeError = args => <Badge {...args} />
DotsLargeError.args = {
  avatar: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628',
  size: 'large',
  status: 'error',
  text: 'Dots Large',
}

// primary
export const DotsSmallPrimary = args => <Badge {...args} />
DotsSmallPrimary.args = {
  avatar: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628',
  size: 'small',
  status: 'primary',
  text: 'Dots Small',
}

export const DotsMediumPrimary = args => <Badge {...args} />
DotsMediumPrimary.args = {
  avatar: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628',
  size: 'medium',
  status: 'primary',
  text: 'Dots Medium',
}

export const DotsLargePrimary = args => <Badge {...args} />
DotsLargePrimary.args = {
  avatar: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628',
  size: 'large',
  status: 'primary',
  text: 'Dots Large',
}

//purple
export const DotsSmallPurple = args => <Badge {...args} />
DotsSmallPurple.args = {
  avatar: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628',
  size: 'small',
  status: 'purple',
  text: 'Dots Small',
}

export const DotsMediumPurple = args => <Badge {...args} />
DotsMediumPurple.args = {
  avatar: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628',
  size: 'medium',
  status: 'purple',
  text: 'Dots Medium',
}

export const LeftLargePurple = args => <Badge {...args} />
LeftLargePurple.args = {
  avatar: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628',
  size: 'large',
  status: 'purple',
  text: 'Left Large',
}

//blue
export const LeftSmallBlue = args => <Badge {...args} />
LeftSmallBlue.args = {
  avatar: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628',
  size: 'small',
  status: 'blue',
  text: 'Left Small',
}

export const LeftMediumBlue = args => <Badge {...args} />
LeftMediumBlue.args = {
  avatar: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628',
  size: 'medium',
  status: 'blue',
  text: 'Left Medium',
}

export const LeftLargeBlue = args => <Badge {...args} />
LeftLargeBlue.args = {
  avatar: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628',
  size: 'large',
  status: 'blue',
  text: 'Left Large',
}

//default
export const LeftSmallDefault = args => <Badge {...args} />
LeftSmallDefault.args = {
  avatar: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628',
  size: 'small',
  text: 'Left Small',
}

export const LeftMediumDefault = args => <Badge {...args} />
LeftMediumDefault.args = {
  avatar: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628',
  size: 'medium',
  text: 'Left Medium',
}

export const LeftLargeDefault = args => <Badge {...args} />
LeftLargeDefault.args = {
  avatar: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628',
  size: 'large',
  text: 'Left Large',
}
