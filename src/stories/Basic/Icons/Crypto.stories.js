import Icons from '../../../components/Basic/Icons/Icons'
import CryptoIcon from '../../../components/Basic/Icons/CryptoIcon'

export default {
  title: 'Basic/Icons/Crypto',
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

export const CardCoin = {
  args: {
    Icon: CryptoIcon.CardCoin,
    color: '#1D2939',
    size: 24,
  },
}

export const Trade = {
  args: {
    Icon: CryptoIcon.Trade,
    color: '#1D2939',
    size: 24,
  },
}

export const BuyCrypto = {
  args: {
    Icon: CryptoIcon.BuyCrypto,
    color: '#1D2939',
    size: 24,
  },
}

export const BitcoinCard = {
  args: {
    Icon: CryptoIcon.BitcoinCard,
    color: '#1D2939',
    size: 24,
  },
}

export const BitcoinConvert = {
  args: {
    Icon: CryptoIcon.BitcoinConvert,
    color: '#1D2939',
    size: 24,
  },
}

export const Refresh = {
  args: {
    Icon: CryptoIcon.Refresh,
    color: '#1D2939',
    size: 24,
  },
}
