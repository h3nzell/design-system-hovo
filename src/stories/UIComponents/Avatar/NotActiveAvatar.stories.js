import React from 'react'
import Avatar from '../../../components/UIComponents/Avatar'

export default {
  title: 'UIComponents/Avatar/NotActiveAvatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['extra_small', 'small', 'medium', 'large', 'extra_large'],
      },
    },
    status: {
      control: {
        type: 'select',
        options: ['active', 'do_not_disturb', 'inactive', 'away'],
      },
      img: { control: 'text' },
      onFileChange: { action: 'File Selected' },
    },
  },
}

export const ExtraSmall = args => <Avatar {...args} />
ExtraSmall.args = {
  size: 'extra_small',
  img: 'https://www.w3schools.com/w3images/avatar2.png',
}

export const Small = args => <Avatar {...args} />
Small.args = {
  size: 'small',
  img: 'https://www.w3schools.com/w3images/avatar2.png',
}

export const Medium = args => <Avatar {...args} />
Medium.args = {
  size: 'medium',
  img: 'https://www.w3schools.com/w3images/avatar2.png',
}

export const Large = args => <Avatar {...args} />
Large.args = {
  size: 'large',
  img: 'https://www.w3schools.com/w3images/avatar2.png',
}

export const ExtraLarge = args => <Avatar {...args} />
ExtraLarge.args = {
  size: 'extra_large',
  img: 'https://www.w3schools.com/w3images/avatar2.png',
}
