import Tab from '../../../components/UIComponents/Tab'

export default {
  title: 'UIComponents/Tabs/UnderlineTab',
  component: Tab,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: { control: 'text' },
    selected: { control: 'number' },
    fullWidth: { control: 'boolean' },
    onClick: { control: 'func' },
    type: {
      control: {
        type: 'select',
        options: ['underline', 'button', 'filled'],
      },
    },
    size: {
      control: {
        type: 'radio',
        options: ['small', 'large'],
      },
    },
    badge: { control: 'text' },
  },
}

export const UnderlineTabSmall = args => <Tab {...args} />
UnderlineTabSmall.args = {
  id: 1,
  size: 'small',
  type: 'underline',
  fullWidth: false,
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const UnderlineBadgeTabSmall = args => <Tab {...args} />
UnderlineBadgeTabSmall.args = {
  id: 1,
  size: 'small',
  type: 'underline',
  badge: '1',
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const UnderlineTabLarge = args => <Tab {...args} />
UnderlineTabLarge.args = {
  id: 1,
  size: 'large',
  type: 'underline',
  fullWidth: false,
  badge: '1',
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const UnderlineBadgeTabLarge = args => <Tab {...args} />
UnderlineBadgeTabLarge.args = {
  id: 1,
  size: 'large',
  type: 'underline',
  fullWidth: false,
  badge: '1',
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const UnderlineTabSmallSelected = args => <Tab {...args} />
UnderlineTabSmallSelected.args = {
  id: 1,
  selected: 1,
  size: 'small',
  type: 'underline',
  fullWidth: false,
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const UnderlineBadgeTabSmallSelected = args => <Tab {...args} />
UnderlineBadgeTabSmallSelected.args = {
  id: 1,
  selected: 1,
  size: 'small',
  type: 'underline',
  fullWidth: false,
  badge: '1',
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const UnderlineTabLargeSelected = args => <Tab {...args} />
UnderlineTabLargeSelected.args = {
  id: 1,
  selected: 1,
  size: 'large',
  type: 'underline',
  fullWidth: false,
  badge: '1',
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const UnderlineBadgeTabLargeSelected = args => <Tab {...args} />
UnderlineBadgeTabLargeSelected.args = {
  id: 1,
  selected: 1,
  size: 'large',
  type: 'underline',
  fullWidth: false,
  badge: '1',
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const UnderlineTabSmallFull = args => <Tab {...args} />
UnderlineTabSmallFull.args = {
  id: 1,
  size: 'small',
  fullWidth: true,
  type: 'underline',
  fullWidth: false,
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const UnderlineBadgeTabSmallFull = args => <Tab {...args} />
UnderlineBadgeTabSmallFull.args = {
  id: 1,
  size: 'small',
  fullWidth: true,
  type: 'underline',
  badge: '1',
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const UnderlineTabLargeFull = args => <Tab {...args} />
UnderlineTabLargeFull.args = {
  id: 1,
  size: 'large',
  fullWidth: true,
  type: 'underline',
  badge: '1',
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const UnderlineBadgeTabLargeFull = args => <Tab {...args} />
UnderlineBadgeTabLargeFull.args = {
  id: 1,
  size: 'large',
  fullWidth: true,
  type: 'underline',
  badge: '1',
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const UnderlineTabSmallSelectedFull = args => <Tab {...args} />
UnderlineTabSmallSelectedFull.args = {
  id: 1,
  selected: 1,
  size: 'small',
  fullWidth: true,
  type: 'underline',
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const UnderlineBadgeTabSmallSelectedFull = args => <Tab {...args} />
UnderlineBadgeTabSmallSelectedFull.args = {
  id: 1,
  selected: 1,
  fullWidth: true,
  size: 'small',
  type: 'underline',
  badge: '1',
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const UnderlineTabLargeSelectedFull = args => <Tab {...args} />
UnderlineTabLargeSelectedFull.args = {
  id: 1,
  selected: 1,
  size: 'large',
  type: 'underline',
  badge: '1',
  fullWidth: true,
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const UnderlineBadgeTabLargeSelectedFull = args => <Tab {...args} />
UnderlineBadgeTabLargeSelectedFull.args = {
  id: 1,
  selected: 1,
  size: 'large',
  type: 'underline',
  badge: '1',
  fullWidth: true,
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}
