import React from 'react'
import Logo from '../../../components/Basic/Logo'

export default {
  title: 'Basic/Logo/PartialLogo',
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

export const WithoutLogoLarge = args => <Logo {...args} />
WithoutLogoLarge.args = {
  isLogoIncludes: false,
  size: 'large',
  variant: 'dark',
}

export const WithoutLogoMedium = args => <Logo {...args} />
WithoutLogoMedium.args = {
  isLogoIncludes: false,
  size: 'medium',
  variant: 'dark',
}

export const WithoutLogoSmall = args => <Logo {...args} />
WithoutLogoSmall.args = {
  isLogoIncludes: false,
  size: 'small',
  variant: 'dark',
}

export const WithoutTextLarge = args => <Logo {...args} />
WithoutTextLarge.args = {
  isTextIncludes: false,
  size: 'large',
  variant: 'dark',
}

export const WithoutTextMedium = args => <Logo {...args} />
WithoutTextMedium.args = {
  isTextIncludes: false,
  size: 'medium',
  variant: 'dark',
}

export const WithoutTextSmall = args => <Logo {...args} />
WithoutTextSmall.args = {
  isTextIncludes: false,
  size: 'small',
  variant: 'dark',
}
