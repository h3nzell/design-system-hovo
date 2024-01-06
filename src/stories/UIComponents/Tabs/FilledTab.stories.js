import Tab from '../../../components/UIComponents/Tab'

export default {
  title: 'UIComponents/Tabs/FilledTab',
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

export const FilledTabSmall = args => <Tab {...args} />
FilledTabSmall.args = {
  id: 1,
  size: 'small',
  type: 'filled',
  fullWidth: false,
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const FilledBadgeTabSmall = args => <Tab {...args} />
FilledBadgeTabSmall.args = {
  id: 1,
  size: 'small',
  type: 'filled',
  badge: '1',
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const FilledTabLarge = args => <Tab {...args} />
FilledTabLarge.args = {
  id: 1,
  size: 'large',
  type: 'filled',
  fullWidth: false,
  badge: '1',
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const FilledBadgeTabLarge = args => <Tab {...args} />
FilledBadgeTabLarge.args = {
  id: 1,
  size: 'large',
  type: 'filled',
  fullWidth: false,
  badge: '1',
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const FilledTabSmallSelected = args => <Tab {...args} />
FilledTabSmallSelected.args = {
  id: 1,
  selected: 1,
  size: 'small',
  type: 'filled',
  fullWidth: false,
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const FilledBadgeTabSmallSelected = args => <Tab {...args} />
FilledBadgeTabSmallSelected.args = {
  id: 1,
  selected: 1,
  size: 'small',
  type: 'filled',
  fullWidth: false,
  badge: '1',
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const FilledTabLargeSelected = args => <Tab {...args} />
FilledTabLargeSelected.args = {
  id: 1,
  selected: 1,
  size: 'large',
  type: 'filled',
  fullWidth: false,
  badge: '1',
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const FilledBadgeTabLargeSelected = args => <Tab {...args} />
FilledBadgeTabLargeSelected.args = {
  id: 1,
  selected: 1,
  size: 'large',
  type: 'filled',
  fullWidth: false,
  badge: '1',
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const FilledTabSmallFull = args => <Tab {...args} />
FilledTabSmallFull.args = {
  id: 1,
  size: 'small',
  fullWidth: true,
  type: 'filled',
  fullWidth: false,
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const FilledBadgeTabSmallFull = args => <Tab {...args} />
FilledBadgeTabSmallFull.args = {
  id: 1,
  size: 'small',
  fullWidth: true,
  type: 'filled',
  badge: '1',
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const FilledTabLargeFull = args => <Tab {...args} />
FilledTabLargeFull.args = {
  id: 1,
  size: 'large',
  fullWidth: true,
  type: 'filled',
  badge: '1',
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const FilledBadgeTabLargeFull = args => <Tab {...args} />
FilledBadgeTabLargeFull.args = {
  id: 1,
  size: 'large',
  fullWidth: true,
  type: 'filled',
  badge: '1',
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const FilledTabSmallSelectedFull = args => <Tab {...args} />
FilledTabSmallSelectedFull.args = {
  id: 1,
  selected: 1,
  size: 'small',
  fullWidth: true,
  type: 'filled',
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const FilledBadgeTabSmallSelectedFull = args => <Tab {...args} />
FilledBadgeTabSmallSelectedFull.args = {
  id: 1,
  selected: 1,
  fullWidth: true,
  size: 'small',
  type: 'filled',
  badge: '1',
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const FilledTabLargeSelectedFull = args => <Tab {...args} />
FilledTabLargeSelectedFull.args = {
  id: 1,
  selected: 1,
  size: 'large',
  type: 'filled',
  badge: '1',
  fullWidth: true,
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}

export const FilledBadgeTabLargeSelectedFull = args => <Tab {...args} />
FilledBadgeTabLargeSelectedFull.args = {
  id: 1,
  selected: 1,
  size: 'large',
  type: 'filled',
  badge: '1',
  fullWidth: true,
  children: 'Tab 1',
  onClick: () => {
    console.log('selected')
  },
}
