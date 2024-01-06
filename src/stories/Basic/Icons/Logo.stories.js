import Icons from '../../../components/Basic/Icons/Icons'
import LogoIcon from '../../../components/Basic/Icons/Logo'

export default {
  title: 'Basic/Icons/Logo',
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

export const PrimaryLogoLarge = {
  args: {
    Icon: LogoIcon.PrimaryLogo,
    size: 32,
  },
}

export const PrimaryLogoMedium = {
  args: {
    Icon: LogoIcon.PrimaryLogo,
    size: 24,
  },
}

export const PrimaryLogoSmall = {
  args: {
    Icon: LogoIcon.PrimaryLogo,
    size: 16,
  },
}

export const SecondaryLogoLarge = {
  args: {
    Icon: LogoIcon.SecondaryLogo,
    size: 32,
  },
}

export const SecondaryLogoMedium = {
  args: {
    Icon: LogoIcon.SecondaryLogo,
    size: 24,
  },
}

export const SecondaryLogoSmall = {
  args: {
    Icon: LogoIcon.SecondaryLogo,
    size: 16,
  },
}
