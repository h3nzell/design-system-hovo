import React from 'react'
import Checkbox from '../../../components/FormKit/Checkbox'

export default {
  title: 'FormKit/Checkbox/Checkbox-top-labeled',
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

export const CheckboxTopLabeledChecked = args => <Checkbox {...args} />
CheckboxTopLabeledChecked.args = {
  checked: true,
  label: 'Receive Messages Notifications',
}

export const CheckboxTopLabeledNotChecked = args => <Checkbox {...args} />
CheckboxTopLabeledNotChecked.args = {
  checked: false,
  label: 'Receive Messages Notifications',
}

export const CheckboxTopLabeledDisabledChecked = args => <Checkbox {...args} />
CheckboxTopLabeledDisabledChecked.args = {
  checked: true,
  disabled: true,
  label: 'Receive Messages Notifications',
}

export const CheckboxTopLabeledDisabledNotChecked = args => <Checkbox {...args} />
CheckboxTopLabeledDisabledNotChecked.args = {
  checked: false,
  disabled: true,
  label: 'Receive Messages Notifications',
}
