import React from 'react'
import Avatar from '../../../components/UIComponents/Avatar'

export default {
  title: 'UIComponents/Avatar/Avatar-Do-Not-Disturb',

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

export const ExtraSmallDoNotDisturb = args => <Avatar {...args} />
ExtraSmallDoNotDisturb.args = {
  status: 'do_not_disturb',
  size: 'extra_small',
  img: 'https://www.w3schools.com/w3images/avatar2.png',
}

export const SmallDoNotDisturb = args => <Avatar {...args} />
SmallDoNotDisturb.args = {
  status: 'do_not_disturb',
  size: 'small',
  img: 'https://www.w3schools.com/w3images/avatar2.png',
}

export const MediumDoNotDisturb = args => <Avatar {...args} />
MediumDoNotDisturb.args = {
  status: 'do_not_disturb',
  size: 'medium',
  img: 'https://www.w3schools.com/w3images/avatar2.png',
}

export const LargeDoNotDisturb = args => <Avatar {...args} />
LargeDoNotDisturb.args = {
  status: 'do_not_disturb',
  size: 'large',
  img: 'https://www.w3schools.com/w3images/avatar2.png',
}

export const ExtraLargeDoNotDisturb = args => <Avatar {...args} />
ExtraLargeDoNotDisturb.args = {
  status: 'do_not_disturb',
  size: 'extra_large',
  img: 'https://www.w3schools.com/w3images/avatar2.png',
}

export const ExtraSmallDoNotDisturbNoAvatar = args => <Avatar {...args} />
ExtraSmallDoNotDisturbNoAvatar.args = {
  status: 'do_not_disturb',
  size: 'extra_small',
  firstName: 'Hovhannes',
  lastName: 'Baghdasaryan',
}

export const SmallDoNotDisturbNoAvatar = args => <Avatar {...args} />
SmallDoNotDisturbNoAvatar.args = {
  status: 'do_not_disturb',
  size: 'small',
  firstName: 'Hovhannes',
  lastName: 'Baghdasaryan',
}

export const MediumDoNotDisturbNoAvatar = args => <Avatar {...args} />
MediumDoNotDisturbNoAvatar.args = {
  status: 'do_not_disturb',
  size: 'medium',
  firstName: 'Hovhannes',
  lastName: 'Baghdasaryan',
}

export const LargeDoNotDisturbNoAvatar = args => <Avatar {...args} />
LargeDoNotDisturbNoAvatar.args = {
  status: 'do_not_disturb',
  size: 'large',
  firstName: 'Hovhannes',
  lastName: 'Baghdasaryan',
}

export const ExtraLargeDoNotDisturbNoAvatar = args => <Avatar {...args} />
ExtraLargeDoNotDisturbNoAvatar.args = {
  status: 'do_not_disturb',
  size: 'extra_large',
  firstName: 'Hovhannes',
  lastName: 'Baghdasaryan',
}
