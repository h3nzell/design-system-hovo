import React from 'react'
import Toggle from '../../../components/FormKit/Toggle'

export default {
  title: 'FormKit/Toggle/Toggle-unlabeled',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
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

export const ToggleNotLabeledChecked = args => <Toggle {...args} />
ToggleNotLabeledChecked.args = {
  checked: true,
}

export const ToggleNotLabeledNotChecked = args => <Toggle {...args} />
ToggleNotLabeledNotChecked.args = {
  checked: false,
}

export const ToggleNotLabeledDisabledChecked = args => <Toggle {...args} />
ToggleNotLabeledDisabledChecked.args = {
  checked: true,
  disabled: true,
}

export const ToggleNotLabeledDisabledNotChecked = args => <Toggle {...args} />
ToggleNotLabeledDisabledNotChecked.args = {
  checked: false,
  disabled: true,
  size: 'small'
}

export const ToggleNotLabeledCheckedSmall = args => <Toggle {...args} />
ToggleNotLabeledCheckedSmall.args = {
  checked: true,
  size: 'small'
}

export const ToggleNotLabeledNotCheckedSmall = args => <Toggle {...args} />
ToggleNotLabeledNotCheckedSmall.args = {
  checked: false,
  size: 'small'
}

export const ToggleNotLabeledDisabledCheckedSmall = args => <Toggle {...args} />
ToggleNotLabeledDisabledCheckedSmall.args = {
  checked: true,
  disabled: true,
  size: 'small'
}

export const ToggleNotLabeledDisabledNotCheckedSmall = args => <Toggle {...args} />
ToggleNotLabeledDisabledNotCheckedSmall.args = {
  checked: false,
  disabled: true,
  size: 'small'
}
