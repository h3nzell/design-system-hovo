import React from 'react'
import Logo from '../../../components/Basic/Logo'

export default {
  title: 'Basic/Logo/Dark',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['large', 'medium', 'small'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['dark', 'light'],
      },
    },
    isLogoIncludes: 'bool',
    isTextIncludes: 'bool',
  },
}

export const DarkLogoLarge = args => <Logo {...args} />
DarkLogoLarge.args = {
  size: 'large',
  variant: 'dark',
}

export const DarkLogoMedium = args => <Logo {...args} />
DarkLogoMedium.args = {
  size: 'medium',
  variant: 'dark',
}

export const DarkLogoSmall = args => <Logo {...args} />
DarkLogoSmall.args = {
  size: 'small',
  variant: 'dark',
}

export const LightLogoLarge = args => <Logo {...args} />
LightLogoLarge.args = {
  size: 'large',
  variant: 'light',
}

export const LightLogoMedium = args => <Logo {...args} />
LightLogoMedium.args = {
  size: 'medium',
  variant: 'light',
}

export const LightLogoSmall = args => <Logo {...args} />
LightLogoSmall.args = {
  size: 'small',
  variant: 'light',
}
