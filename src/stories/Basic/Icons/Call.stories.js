import Icons from '../../../components/Basic/Icons/Icons'
import CallIcon from '../../../components/Basic/Icons/Call'

export default {
  title: 'Basic/Icons/Call',
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

export const Call = {
  args: {
    Icon: CallIcon.Call,
    color: '#1D2939',
    size: 24,
  },
}
export const CallCalling = {
  args: {
    Icon: CallIcon.CallCalling,
    color: '#1D2939',
    size: 24,
  },
}

export const CallIncoming = {
  args: {
    Icon: CallIcon.CallIncoming,
    color: '#1D2939',
    size: 24,
  },
}
export const CallOutgoing = {
  args: {
    Icon: CallIcon.CallOutgoing,
    color: '#1D2939',
    size: 24,
  },
}
export const CallAdd = {
  args: {
    Icon: CallIcon.CallAdd,
    color: '#1D2939',
    size: 24,
  },
}
export const CallMinus = {
  args: {
    Icon: CallIcon.CallMinus,
    color: '#1D2939',
    size: 24,
  },
}
export const CallRemove = {
  args: {
    Icon: CallIcon.CallRemove,
    color: '#1D2939',
    size: 24,
  },
}
export const CallReceived = {
  args: {
    Icon: CallIcon.CallReceived,
    color: '#1D2939',
    size: 24,
  },
}
export const CallSlash = {
  args: {
    Icon: CallIcon.CallSlash,
    color: '#1D2939',
    size: 24,
  },
}
