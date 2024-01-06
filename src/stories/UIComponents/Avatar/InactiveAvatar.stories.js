import React from 'react'
import Avatar from '../../../components/UIComponents/Avatar'

export default {
  title: 'UIComponents/Avatar/InactiveAvatar',
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
    },
    img: { control: 'text' },
    onFileChange: { action: 'File Selected' },
  },
}

export const ExtraSmallInactive = args => <Avatar {...args} />
ExtraSmallInactive.args = {
  status: 'inactive',
  size: 'extra_small',
  img: 'https://www.w3schools.com/w3images/avatar2.png',
}

export const SmallInactive = args => <Avatar {...args} />
SmallInactive.args = {
  status: 'inactive',
  size: 'small',
  img: 'https://www.w3schools.com/w3images/avatar2.png',
}

export const MediumInactive = args => <Avatar {...args} />
MediumInactive.args = {
  status: 'inactive',
  size: 'medium',
  img: 'https://www.w3schools.com/w3images/avatar2.png',
}

export const LargeInactive = args => <Avatar {...args} />
LargeInactive.args = {
  status: 'inactive',
  size: 'large',
  img: 'https://www.w3schools.com/w3images/avatar2.png',
}

export const ExtraLargeInactive = args => <Avatar {...args} />
ExtraLargeInactive.args = {
  status: 'inactive',
  size: 'extra_large',
  img: 'https://www.w3schools.com/w3images/avatar2.png',
}

export const ExtraSmallInActiveNoAvatar = args => <Avatar {...args} />
ExtraSmallInActiveNoAvatar.args = {
  status: 'inactive',
  size: 'extra_small',
  firstName: 'Hovhannes',
  lastName: 'Baghdasaryan',
}

export const SmallInActiveNoAvatar = args => <Avatar {...args} />
SmallInActiveNoAvatar.args = {
  status: 'inactive',
  size: 'small',
  firstName: 'Hovhannes',
  lastName: 'Baghdasaryan',
}

export const MediumInActiveNoAvatar = args => <Avatar {...args} />
MediumInActiveNoAvatar.args = {
  status: 'inactive',
  size: 'medium',
  firstName: 'Hovhannes',
  lastName: 'Baghdasaryan',
}

export const LargeInActiveNoAvatar = args => <Avatar {...args} />
LargeInActiveNoAvatar.args = {
  status: 'inactive',
  size: 'large',
  firstName: 'Hovhannes',
  lastName: 'Baghdasaryan',
}

export const ExtraLargeInActiveNoAvatar = args => <Avatar {...args} />
ExtraLargeInActiveNoAvatar.args = {
  status: 'inactive',
  size: 'extra_large',
  firstName: 'Hovhannes',
  lastName: 'Baghdasaryan',
}
