import React from 'react'
import Radio from '../../../components/FormKit/Radio'

export default {
  title: 'FormKit/Radio/Radio-unLabeled',
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

export const RadioUnLabeled = args => <Radio {...args} value="male" />
RadioUnLabeled.args = {
  name: 'gender',
  value: 'male',
}

export const RadioUnLabeledDisabled = args => <Radio {...args} />
RadioUnLabeledDisabled.args = {
  name: 'gender',
  value: 'male',
  disabled: true
}
