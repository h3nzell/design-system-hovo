import Input from '../../../components/FormKit/Input'
import { ProfileCircle } from './../../../components/Basic/Icons/User'

export default {
  title: 'FormKit/Input/OnlyLabeInput',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {control: 'text'},

    hint: {control: 'text'},

    label: {control: 'text'},

    Icon: {control: 'clicked'},

    error: {control: 'text'},

    value: {control: 'text'},

    onBlur: {control: 'clicked'},

    onFocus: {control: 'clicked'},

    onChange: {control: 'clicked'},

    onKeyDown: {control: 'clicked'},

    disabled: {control: 'boolean'},

    maxLength: {control: 'boolean'},

    minLength: {control: 'boolean'},

    autoComplete: {
      control: {
        type: 'select',
        options: ['off', 'on'],
      },
    },
    
    type: {
      control: {
        type: 'select',
        options: ['text', 'password'],
      },
    },

    placeholder:{control: 'text'},
  }
}

export const PlaceholderInput = args => <Input {...args} />
PlaceholderInput.args = {
  name: 'my-input',
  label: 'FirstName',
  placeholder: 'my placeholder',
}

export const PlaceholderPasswordInput = args => <Input {...args} />
PlaceholderPasswordInput.args = {
  name: 'my-input',
  type: 'password',
  value: 'My Filled Text',
  hint: 'This is a hint text to help the user',
  placeholder: 'my placeholder',
}

export const PlaceholderIconInput = args => <Input {...args} />
PlaceholderIconInput.args = {
  name: 'my-input',
  Icon: ProfileCircle,
  hint: 'This is a hint text to help the user',
  placeholder: 'my placeholder',
}

export const DisabledInput = args => <Input {...args} />
DisabledInput.args = {
  disabled: true,
  name: 'my-input',
  label: 'FirstName',
  placeholder: 'my placeholder',
}


export const FilledInput = args => <Input {...args} />
FilledInput.args = {
  name: 'my-input',
  label: 'FirstName',
  value: 'Filled Input',
  placeholder: 'my placeholder',
}

export const FilledDisabledInput = args => <Input {...args} />
FilledDisabledInput.args = {
  disabled: true,
  label: 'FirstName',
  name: 'my-input',
  value: 'Filled Input',
  placeholder: 'my placeholder',
}

export const PlaceholderErrorInput = args => <Input {...args} />
PlaceholderErrorInput.args = {
  label: 'FirstName',
  error: 'Error hint',
  name: 'my-input',
  placeholder: 'my placeholder',
}

export const FilledErrorInput = args => <Input {...args} />
FilledErrorInput.args = {
  label: 'FirstName',
  error: 'Error hint',
  name: 'my-input',
  value: 'Filled Input',
  placeholder: 'my placeholder',
}

export const FilledErrorDisabledInput = args => <Input {...args} />
FilledErrorDisabledInput.args = {
  disabled: true,
  label: 'FirstName',
  error: 'Error hint',
  name: 'my-input',
  value: 'Filled Input',
  placeholder: 'my placeholder',
}