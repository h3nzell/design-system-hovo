import React from 'react'
import Toggle from '../../../components/FormKit/Toggle'

export default {
  title: 'FormKit/Toggle/Toggle-full-labeled',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },

    subLabel: { control: 'text' },

    checked: { control: 'boolean' },
    
    checked: { control: 'boolean' },
    
    disabled: { control: 'boolean' },
    
    size: {
      control: {
        type: 'select',
        options: ['small', 'large'],
      },
    },
  },
}

export const ToggleFullLabeledChecked = args => <Toggle {...args} />
ToggleFullLabeledChecked.args = {
  checked: true,
  label: 'Receive Messages Notifications',
  subLabel: 'This is some hint text that maybe required in some cases',
}

export const ToggleFullLabeledNotChecked = args => <Toggle {...args} />
ToggleFullLabeledNotChecked.args = {
  checked: false,
  label: 'Receive Messages Notifications',
  subLabel: 'This is some hint text that maybe required in some cases',
}

export const ToggleFullLabeledDisabledChecked = args => <Toggle {...args} />
ToggleFullLabeledDisabledChecked.args = {
  checked: true,
  disabled: true,
  label: 'Receive Messages Notifications',
  subLabel: 'This is some hint text that maybe required in some cases',
}

export const ToggleFullLabeledDisabledNotChecked = args => <Toggle {...args} />
ToggleFullLabeledDisabledNotChecked.args = {
  checked: false,
  disabled: true,
  label: 'Receive Messages Notifications',
  subLabel: 'This is some hint text that maybe required in some cases',
}

export const ToggleFullLabeledCheckedSmall = args => <Toggle {...args} />
ToggleFullLabeledCheckedSmall.args = {
  checked: true,
  label: 'Receive Messages Notifications',
  subLabel: 'This is some hint text that maybe required in some cases',
  size: 'small'
}

export const ToggleFullLabeledNotCheckedSmall = args => <Toggle {...args} />
ToggleFullLabeledNotCheckedSmall.args = {
  checked: false,
  label: 'Receive Messages Notifications',
  subLabel: 'This is some hint text that maybe required in some cases',
  size: 'small'
}

export const ToggleFullLabeledDisabledCheckedSmall= args => <Toggle {...args} />
ToggleFullLabeledDisabledCheckedSmall.args = {
  checked: true,
  disabled: true,
  label: 'Receive Messages Notifications',
  subLabel: 'This is some hint text that maybe required in some cases',
  size: 'small'
}

export const ToggleFullLabeledDisabledNotCheckedSmall = args => <Toggle {...args} />
ToggleFullLabeledDisabledNotCheckedSmall.args = {
  checked: false,
  disabled: true,
  label: 'Receive Messages Notifications',
  subLabel: 'This is some hint text that maybe required in some cases',
  size: 'small'
}
