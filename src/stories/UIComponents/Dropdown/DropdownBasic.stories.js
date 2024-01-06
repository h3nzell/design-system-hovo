import Dropdown from '../../../components/UIComponents/Dropdown/Dropdown'
import Button from '../../../components/FormKit/Button'
import EssentialIcons from '../../../components/Basic/Icons/Essentials'
import ArrowIcons from '../../../components/Basic/Icons/Arrow'

export default {
  title: 'UIComponents/Dropdown/Dropdown-Basic',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { control: 'function' },
    items: { control: 'array' },
    className: { control: 'text' },
    containerClassName: { control: 'text' },
  },
}

export const DropdownBasic = args => (
  <Dropdown {...args}>
    <Button>Choose Content</Button>
  </Dropdown>
)
DropdownBasic.args = {
  Icon: <EssentialIcons.Level color='red' />,
  items: [
    { id: 1, value: 'value1', label: 'Label1' },
    { id: 2, value: 'value2', label: 'Label2' },
  ],
}
