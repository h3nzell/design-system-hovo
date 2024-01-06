import React from 'react'
import Radio from '../../../components/FormKit/Radio'

export default {
  title: 'FormKit/Radio/Radio-full-labeled',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    
    subLabel: { control: 'text' },
    
    value: { control: 'text' },

    disabled: { control: 'boolean' },
  },
}

export const RadioFullLabeled = args => <Radio {...args} value="male" />
RadioFullLabeled.args = {
  name: 'gender',
  value: 'male',
  label: 'Receive Messages Notifications',
  subLabel: 'This is some hint text that maybe required in some cases',
}


export const RadioFullLabeledDisabled = args => <Radio {...args} />
RadioFullLabeledDisabled.args = {
  name: 'gender',
  value: 'male',
  value: 'male',
  disabled: true,
  label: 'Receive Messages Notifications',
  subLabel: 'This is some hint text that maybe required in some cases',
}
