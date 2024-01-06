import React from 'react'
import Toggle from '../../../components/FormKit/Toggle'

export default {
  title: 'FormKit/Toggle/Toggle-top-labeled',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },

    subLabel: { control: 'text' },

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

export const ToggleTopLabeledChecked = args => <Toggle {...args} />
ToggleTopLabeledChecked.args = {
  checked: true,
  label: 'Receive Messages Notifications',
}

export const ToggleTopLabeledNotChecked = args => <Toggle {...args} />
ToggleTopLabeledNotChecked.args = {
  checked: false,
  label: 'Receive Messages Notifications',
}

export const ToggleTopLabeledDisabledChecked = args => <Toggle {...args} />
ToggleTopLabeledDisabledChecked.args = {
  checked: true,
  disabled: true,
  label: 'Receive Messages Notifications',
}

export const ToggleTopLabeledDisabledNotChecked = args => <Toggle {...args} />
ToggleTopLabeledDisabledNotChecked.args = {
  checked: false,
  disabled: true,
  label: 'Receive Messages Notifications',
}

export const ToggleTopLabeledCheckedSmall = args => <Toggle {...args} />
ToggleTopLabeledCheckedSmall.args = {
  checked: true,
  label: 'Receive Messages Notifications',
  size: 'small'
}

export const ToggleTopLabeledNotCheckedSmall = args => <Toggle {...args} />
ToggleTopLabeledNotCheckedSmall.args = {
  checked: false,
  label: 'Receive Messages Notifications',
  size: 'small'
}

export const ToggleTopLabeledDisabledCheckedSmall = args => <Toggle {...args} />
ToggleTopLabeledDisabledCheckedSmall.args = {
  checked: true,
  disabled: true,
  label: 'Receive Messages Notifications',
  size: 'small'
}

export const ToggleTopLabeledDisabledNotCheckedSmall = args => <Toggle {...args} />
ToggleTopLabeledDisabledNotCheckedSmall.args = {
  checked: false,
  disabled: true,
  label: 'Receive Messages Notifications',
  size: 'small'
}
