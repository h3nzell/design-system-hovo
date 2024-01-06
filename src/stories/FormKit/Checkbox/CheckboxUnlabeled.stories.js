import React from 'react'
import Checkbox from '../../../components/FormKit/Checkbox'

export default {
  title: 'FormKit/Checkbox/Checkbox-unlabeled',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },

    disabled: { control: 'boolean' },
  },
}

export const CheckboxNotLabeledChecked = args => <Checkbox {...args} />
CheckboxNotLabeledChecked.args = {
  checked: true,
}

export const CheckboxNotLabeledNotChecked = args => <Checkbox {...args} />
CheckboxNotLabeledNotChecked.args = {
  checked: false,
}

export const CheckboxNotLabeledDisabledChecked = args => <Checkbox {...args} />
CheckboxNotLabeledDisabledChecked.args = {
  checked: true,
  disabled: true,
}

export const CheckboxNotLabeledDisabledNotChecked = args => <Checkbox {...args} />
CheckboxNotLabeledDisabledNotChecked.args = {
  checked: false,
  disabled: true,
}
