import Icons from '../../../components/Basic/Icons/Icons'
import ArstrologyIcon from '../../../components/Basic/Icons/Arstrology'

export default {
  title: 'Basic/Icons/Arstrology',
  component: Icons,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'color',
    },
  },
  size: {
    control: {
      type: 'number',
      min: 0,
      step: 1,
    },
  },
}

export const Aquarius = {
  args: {
    Icon: ArstrologyIcon.Aquarius,
    color: '#1D2939',
    size: 24,
  },
}

export const Gemini = {
  args: {
    Icon: ArstrologyIcon.Gemini,
    color: '#1D2939',
    size: 24,
  },
}

export const Gemini2 = {
  args: {
    Icon: ArstrologyIcon.Gemini2,
    color: '#1D2939',
    size: 24,
  },
}

export const Sagittarius = {
  args: {
    Icon: ArstrologyIcon.Sagittarius,
    color: '#1D2939',
    size: 24,
  },
}

export const Man = {
  args: {
    Icon: ArstrologyIcon.Man,
    color: '#1D2939',
    size: 24,
  },
}

export const Woman = {
  args: {
    Icon: ArstrologyIcon.Woman,
    color: '#1D2939',
    size: 24,
  },
}
