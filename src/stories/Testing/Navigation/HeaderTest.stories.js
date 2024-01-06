import HeaderTest from '../../../components/Testing/HeaderTest'

export default {
  title: 'Testing/Navigation/HeaderTest',
  component: HeaderTest,
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
  argTypes: {
    firstName: { control: 'text' },
    lastName: { control: 'text' },
  },
}

export const HeaderTesting = args => <HeaderTest {...args} />
HeaderTesting.args = {
  firstName: 'Hovo',
  lastName: 'Mrdo',
}
