import React from 'react'
import Avatar from '../../../components/UIComponents/Avatar'

export default {
  title: 'UIComponents/Avatar/ActiveAvatar',
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

export const ExtraSmallActive = args => <Avatar {...args} />
ExtraSmallActive.args = {
  status: 'active',
  size: 'extra_small',
  img: 'https://www.w3schools.com/w3images/avatar2.png',
}

export const SmallActive = args => <Avatar {...args} />
SmallActive.args = {
  status: 'active',
  size: 'small',
  img: 'https://www.w3schools.com/w3images/avatar2.png',
}

export const MediumActive = args => <Avatar {...args} />
MediumActive.args = {
  status: 'active',
  size: 'medium',
  img: 'https://www.w3schools.com/w3images/avatar2.png',
}

export const LargeActive = args => <Avatar {...args} />
LargeActive.args = {
  status: 'active',
  size: 'large',
  img: 'https://www.w3schools.com/w3images/avatar2.png',
}

export const ExtraLargeActive = args => <Avatar {...args} />
ExtraLargeActive.args = {
  status: 'active',
  size: 'extra_large',
  img: 'https://www.w3schools.com/w3images/avatar2.png',
}

export const ExtraSmallActiveNoAvatar = args => <Avatar {...args} />
ExtraSmallActiveNoAvatar.args = {
  status: 'active',
  size: 'extra_small',
  firstName: 'Hovhannes',
  lastName: 'Baghdasaryan',
}

export const SmallActiveNoAvatar = args => <Avatar {...args} />
SmallActiveNoAvatar.args = {
  status: 'active',
  size: 'small',
  firstName: 'Hovhannes',
  lastName: 'Baghdasaryan',
}

export const MediumActiveNoAvatar = args => <Avatar {...args} />
MediumActiveNoAvatar.args = {
  status: 'active',
  size: 'medium',
  firstName: 'Hovhannes',
  lastName: 'Baghdasaryan',
}

export const LargeActiveNoAvatar = args => <Avatar {...args} />
LargeActiveNoAvatar.args = {
  status: 'active',
  size: 'large',
  firstName: 'Hovhannes',
  lastName: 'Baghdasaryan',
}

export const ExtraLargeActiveNoAvatar = args => <Avatar {...args} />
ExtraLargeActiveNoAvatar.args = {
  status: 'active',
  size: 'extra_large',
  firstName: 'Hovhannes',
  lastName: 'Baghdasaryan',
}
