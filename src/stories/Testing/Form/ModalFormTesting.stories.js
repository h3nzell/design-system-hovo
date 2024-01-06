import ModalFormTest from '../../../components/Testing/ModalFormTest'
import './../../../style.css'

export default {
  title: 'Testing/Form/ModalFormTesting',
  component: ModalFormTest,
  parameters: {
    layout: 'centered',
  },
  parameters: {
    backgrounds: {
      default: 'twitter',
      values: [
        {
          name: 'twitter',
          value: '#00aced',
        },
        {
          name: 'facebook',
          value: '#3b5998',
        },
      ],
    },
  },
  tags: ['autodocs'],
}

export const ModalFormTesting = args => <ModalFormTest {...args} />
