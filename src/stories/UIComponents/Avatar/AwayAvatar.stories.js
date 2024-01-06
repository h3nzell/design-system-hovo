import React from 'react'
import Avatar from '../../../components/UIComponents/Avatar'

export default {
  title: 'UIComponents/Avatar/Avatar-Away',
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

export const ExtraSmallAway = args => <Avatar {...args} />
ExtraSmallAway.args = {
  status: 'away',
  size: 'extra_small',
  img: 'https://www.w3schools.com/w3images/avatar2.png',
}

export const SmallAway = args => <Avatar {...args} />
SmallAway.args = {
  status: 'away',
  size: 'small',
  img: 'https://www.w3schools.com/w3images/avatar2.png',
}

export const MediumAway = args => <Avatar {...args} />
MediumAway.args = {
  status: 'away',
  size: 'medium',
  img: 'https://www.w3schools.com/w3images/avatar2.png',
}

export const LargeAway = args => <Avatar {...args} />
LargeAway.args = {
  status: 'away',
  size: 'large',
  img: 'https://www.w3schools.com/w3images/avatar2.png',
}

export const ExtraLargeAway = args => <Avatar {...args} />
ExtraLargeAway.args = {
  status: 'away',
  size: 'extra_large',
  img: 'https://www.w3schools.com/w3images/avatar2.png',
}

export const ExtraSmallAwayNoAvatar = args => <Avatar {...args} />
ExtraSmallAwayNoAvatar.args = {
  status: 'away',
  size: 'extra_small',
  firstName: 'Hovhannes',
  lastName: 'Baghdasaryan',
}

export const SmallAwayNoAvatar = args => <Avatar {...args} />
SmallAwayNoAvatar.args = {
  status: 'away',
  size: 'small',
  firstName: 'Hovhannes',
  lastName: 'Baghdasaryan',
}

export const MediumAwayNoAvatar = args => <Avatar {...args} />
MediumAwayNoAvatar.args = {
  status: 'away',
  size: 'medium',
  firstName: 'Hovhannes',
  lastName: 'Baghdasaryan',
}

export const LargeAwayNoAvatar = args => <Avatar {...args} />
LargeAwayNoAvatar.args = {
  status: 'away',
  size: 'large',
  firstName: 'Hovhannes',
  lastName: 'Baghdasaryan',
}

export const ExtraLargeAwayNoAvatar = args => <Avatar {...args} />
ExtraLargeAwayNoAvatar.args = {
  status: 'away',
  size: 'extra_large',
  firstName: 'Hovhannes',
  lastName: 'Baghdasaryan',
}
