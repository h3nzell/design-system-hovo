import React from 'react'
import Checkbox from '../../../components/FormKit/Checkbox'

export default {
  title: 'FormKit/Checkbox/Checkbox-full-labeled',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },

    subLabel: { control: 'text' },

    checked: { control: 'boolean' },

    disabled: { control: 'boolean' },
  },
}

export const CheckboxFullLabeledChecked = args => <Checkbox {...args} />
CheckboxFullLabeledChecked.args = {
  checked: true,
  label: 'Receive Messages Notifications',
  subLabel: 'This is some hint text that maybe required in some cases',
}

export const CheckboxFullLabeledNotChecked = args => <Checkbox {...args} />
CheckboxFullLabeledNotChecked.args = {
  checked: false,
  label: 'Receive Messages Notifications',
  subLabel: 'This is some hint text that maybe required in some cases',
}

export const CheckboxFullLabeledDisabledChecked = args => <Checkbox {...args} />
CheckboxFullLabeledDisabledChecked.args = {
  checked: true,
  disabled: true,
  label: 'Receive Messages Notifications',
  subLabel: 'This is some hint text that maybe required in some cases',
}

export const CheckboxFullLabeledDisabledNotChecked = args => <Checkbox {...args} />
CheckboxFullLabeledDisabledNotChecked.args = {
  checked: false,
  disabled: true,
  label: 'Receive Messages Notifications',
  subLabel: 'This is some hint text that maybe required in some cases',
}
