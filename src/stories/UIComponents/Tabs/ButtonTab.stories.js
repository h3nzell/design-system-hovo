import Tab from '../../../components/UIComponents/Tab'

export default {
  title: 'UIComponents/Tabs/ButtonTab',
  component: Tab,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: { control: 'text' },
    selected: { control: 'number' },
    // fullWidth: {control: 'boolean'},
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

export const ButtonTabSmall = args => <Tab {...args} />
ButtonTabSmall.args = {
  id: 1,
  size: 'small',
  type: 'button',
  fullWidth: false,
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const ButtonBadgeTabSmall = args => <Tab {...args} />
ButtonBadgeTabSmall.args = {
  id: 1,
  size: 'small',
  type: 'button',
  badge: '1',
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const ButtonTabLarge = args => <Tab {...args} />
ButtonTabLarge.args = {
  id: 1,
  size: 'large',
  type: 'button',
  fullWidth: false,
  badge: '1',
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const ButtonBadgeTabLarge = args => <Tab {...args} />
ButtonBadgeTabLarge.args = {
  id: 1,
  size: 'large',
  type: 'button',
  fullWidth: false,
  badge: '1',
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const ButtonTabSmallSelected = args => <Tab {...args} />
ButtonTabSmallSelected.args = {
  id: 1,
  selected: 1,
  size: 'small',
  type: 'button',
  fullWidth: false,
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const ButtonBadgeTabSmallSelected = args => <Tab {...args} />
ButtonBadgeTabSmallSelected.args = {
  id: 1,
  selected: 1,
  size: 'small',
  type: 'button',
  fullWidth: false,
  badge: '1',
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const ButtonTabLargeSelected = args => <Tab {...args} />
ButtonTabLargeSelected.args = {
  id: 1,
  selected: 1,
  size: 'large',
  type: 'button',
  fullWidth: false,
  badge: '1',
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const ButtonBadgeTabLargeSelected = args => <Tab {...args} />
ButtonBadgeTabLargeSelected.args = {
  id: 1,
  selected: 1,
  size: 'large',
  type: 'button',
  fullWidth: false,
  badge: '1',
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const ButtonTabSmallFull = args => <Tab {...args} />
ButtonTabSmallFull.args = {
  id: 1,
  size: 'small',
  fullWidth: true,
  type: 'button',
  fullWidth: false,
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const ButtonBadgeTabSmallFull = args => <Tab {...args} />
ButtonBadgeTabSmallFull.args = {
  id: 1,
  size: 'small',
  fullWidth: true,
  type: 'button',
  badge: '1',
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const ButtonTabLargeFull = args => <Tab {...args} />
ButtonTabLargeFull.args = {
  id: 1,
  size: 'large',
  fullWidth: true,
  type: 'button',
  badge: '1',
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const ButtonBadgeTabLargeFull = args => <Tab {...args} />
ButtonBadgeTabLargeFull.args = {
  id: 1,
  size: 'large',
  fullWidth: true,
  type: 'button',
  badge: '1',
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const ButtonTabSmallSelectedFull = args => <Tab {...args} />
ButtonTabSmallSelectedFull.args = {
  id: 1,
  selected: 1,
  size: 'small',
  fullWidth: true,
  type: 'button',
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const ButtonBadgeTabSmallSelectedFull = args => <Tab {...args} />
ButtonBadgeTabSmallSelectedFull.args = {
  id: 1,
  selected: 1,
  fullWidth: true,
  size: 'small',
  type: 'button',
  badge: '1',
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const ButtonTabLargeSelectedFull = args => <Tab {...args} />
ButtonTabLargeSelectedFull.args = {
  id: 1,
  selected: 1,
  size: 'large',
  type: 'button',
  badge: '1',
  fullWidth: true,
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const ButtonBadgeTabLargeSelectedFull = args => <Tab {...args} />
ButtonBadgeTabLargeSelectedFull.args = {
  id: 1,
  selected: 1,
  size: 'large',
  type: 'button',
  badge: '1',
  fullWidth: true,
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}
