import Icons from '../../../components/Basic/Icons/Icons'
import CarIcon from '../../../components/Basic/Icons/Car'

export default {
  title: 'Basic/Icons/Car',
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

export const Airplane = {
  args: {
    Icon: CarIcon.Airplane,
    color: '#1D2939',
    size: 24,
  },
}

export const Car = {
  args: {
    Icon: CarIcon.Car,
    color: '#1D2939',
    size: 24,
  },
}

export const Bus = {
  args: {
    Icon: CarIcon.Bus,
    color: '#1D2939',
    size: 24,
  },
}

export const SmartCar = {
  args: {
    Icon: CarIcon.SmartCar,
    color: '#1D2939',
    size: 24,
  },
}

export const Driving = {
  args: {
    Icon: CarIcon.Driving,
    color: '#1D2939',
    size: 24,
  },
}

export const Ship = {
  args: {
    Icon: CarIcon.Ship,
    color: '#1D2939',
    size: 24,
  },
}

export const AirplanSquare = {
  args: {
    Icon: CarIcon.AirplanSquare,
    color: '#1D2939',
    size: 24,
  },
}

export const GasStation = {
  args: {
    Icon: CarIcon.GasStation,
    color: '#1D2939',
    size: 24,
  },
}
