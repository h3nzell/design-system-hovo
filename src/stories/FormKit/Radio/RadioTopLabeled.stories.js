import React from 'react'
import Radio from '../../../components/FormKit/Radio'

export default {
  title: 'FormKit/Radio/Radio-top-labeled',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },

    label: { control: 'text' },
    
    value: { control: 'text' },

    disabled: { control: 'boolean' },
  },
}

export const RadioTopLabeled = args => <Radio {...args} value="male" />
RadioTopLabeled.args = {
  name: 'gender',
  value: 'male',
  label: 'Receive Messages Notifications',
}


export const RadioTopLabeledDisabled = args => <Radio {...args} />
RadioTopLabeledDisabled.args = {
  name: 'gender',
  value: 'male',
  disabled: true,
  label: 'Receive Messages Notifications',
}
