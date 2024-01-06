import Button from '../../../components/FormKit/Button'
import { Send } from '../../../components/Basic/Icons/Arrow'

export default {
  title: 'FormKit/Buttons/Content-Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },

    children: { control: 'text' },

    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },

    variant: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'outlined', 'ghost', 'text'],
      },
    },

    type: {
      control: {
        type: 'select',
        options: ['submit', 'button'],
      },
    },
  },
}

// primary
export const PrimarySmall = args => <Button {...args} />
PrimarySmall.args = {
  size: 'small',
  variant: 'primary',
  children: 'My children',
}

export const PrimaryMedium = args => <Button {...args} />
PrimaryMedium.args = {
  size: 'medium',
  variant: 'primary',
  children: 'My children',
}

export const PrimaryLarge = args => <Button {...args} />
PrimaryLarge.args = {
  size: 'large',
  variant: 'primary',
  children: 'My children',
}

export const PrimaryDisabledLarge = args => <Button {...args} />
PrimaryDisabledLarge.args = {
  size: 'large',
  disabled: true,
  variant: 'primary',
  children: 'My children',
}

export const PrimaryLoadingLarge = args => <Button {...args} />
PrimaryLoadingLarge.args = {
  size: 'large',
  variant: 'primary',
  children: 'My children',
  loading: true,
}

export const PrimaryLoadingMedium = args => <Button {...args} />
PrimaryLoadingMedium.args = {
  size: 'medium',
  variant: 'primary',
  children: 'My children',
  loading: true,
}

export const PrimaryLoadingSmall = args => <Button {...args} />
PrimaryLoadingSmall.args = {
  size: 'small',
  variant: 'primary',
  children: 'My children',
  loading: true,
}

// secondary
export const SecondarySmall = args => <Button {...args} />
SecondarySmall.args = {
  size: 'small',
  variant: 'secondary',
  children: 'My children',
}

export const SecondaryMedium = args => <Button {...args} />
SecondaryMedium.args = {
  size: 'medium',
  variant: 'secondary',
  children: 'My children',
}

export const SecondaryLarge = args => <Button {...args} />
SecondaryLarge.args = {
  size: 'large',
  variant: 'secondary',
  children: 'My children',
}

export const SecondaryDisabledLarge = args => <Button {...args} />
SecondaryDisabledLarge.args = {
  size: 'large',
  disabled: true,
  variant: 'secondary',
  children: 'My children',
}

export const SecondaryLoadingLarge = args => <Button {...args} />
SecondaryLoadingLarge.args = {
  size: 'large',
  variant: 'secondary',
  children: 'My children',
  loading: true,
}

export const SecondaryLoadingMedium = args => <Button {...args} />
SecondaryLoadingMedium.args = {
  size: 'medium',
  variant: 'secondary',
  children: 'My children',
  loading: true,
}

export const SecondaryLoadingSmall = args => <Button {...args} />
SecondaryLoadingSmall.args = {
  size: 'small',
  variant: 'secondary',
  children: 'My children',
  loading: true,
}

// outlined
export const OutlinedSmall = args => <Button {...args} />
OutlinedSmall.args = {
  size: 'small',
  variant: 'outlined',
  children: 'My children',
}

export const OutlinedMedium = args => <Button {...args} />
OutlinedMedium.args = {
  size: 'medium',
  variant: 'outlined',
  children: 'My children',
}

export const OutlinedLarge = args => <Button {...args} />
OutlinedLarge.args = {
  size: 'large',
  variant: 'outlined',
  children: 'My children',
}

export const OutlinedDisabledLarge = args => <Button {...args} />
OutlinedDisabledLarge.args = {
  size: 'large',
  variant: 'outlined',
  disabled: true,
  children: 'My children',
}

export const OutlinedLoadingLarge = args => <Button {...args} />
OutlinedLoadingLarge.args = {
  size: 'large',
  variant: 'outlined',
  children: 'My children',
  loading: true,
}

export const OutlinedLoadingMedium = args => <Button {...args} />
OutlinedLoadingMedium.args = {
  size: 'medium',
  variant: 'outlined',
  children: 'My children',
  loading: true,
}

export const OutlinedLoadingSmall = args => <Button {...args} />
OutlinedLoadingSmall.args = {
  size: 'small',
  variant: 'outlined',
  children: 'My children',
  loading: true,
}

// ghost
export const GhostSmall = args => <Button {...args} />
GhostSmall.args = {
  size: 'small',
  variant: 'ghost',
  children: 'My children',
}

export const GhostMedium = args => <Button {...args} />
GhostMedium.args = {
  size: 'medium',
  variant: 'ghost',
  children: 'My children',
}

export const GhostLarge = args => <Button {...args} />
GhostLarge.args = {
  size: 'large',
  variant: 'ghost',
  children: 'My children',
}

export const GhostDisabledLarge = args => <Button {...args} />
GhostDisabledLarge.args = {
  size: 'large',
  variant: 'ghost',
  disabled: true,
  children: 'My children',
}

export const GhostLoadingLarge = args => <Button {...args} />
GhostLoadingLarge.args = {
  size: 'large',
  variant: 'ghost',
  children: 'My children',
  loading: true,
}

export const GhostLoadingMedium = args => <Button {...args} />
GhostLoadingMedium.args = {
  size: 'medium',
  variant: 'ghost',
  children: 'My children',
  loading: true,
}

export const GhostLoadingSmall = args => <Button {...args} />
GhostLoadingSmall.args = {
  size: 'small',
  variant: 'ghost',
  children: 'My children',
  loading: true,
}

// text
export const TextSmall = args => <Button {...args} />
TextSmall.args = {
  size: 'small',
  variant: 'text',
  children: 'My children',
}

export const TextMedium = args => <Button {...args} />
TextMedium.args = {
  size: 'medium',
  variant: 'text',
  children: 'My children',
}

export const TextLarge = args => <Button {...args} />
TextLarge.args = {
  size: 'large',
  variant: 'text',
  children: 'My children',
}

export const TextDisabledLarge = args => <Button {...args} />
TextDisabledLarge.args = {
  size: 'large',
  variant: 'text',
  disabled: true,
  children: 'My children',
}

export const TextLoadingLarge = args => <Button {...args} />
TextLoadingLarge.args = {
  size: 'large',
  variant: 'text',
  children: 'My children',
  loading: true,
}

export const TextLoadingMedium = args => <Button {...args} />
TextLoadingMedium.args = {
  size: 'medium',
  variant: 'text',
  children: 'My children',
  loading: true,
}

export const TextLoadingSmall = args => <Button {...args} />
TextLoadingSmall.args = {
  size: 'small',
  variant: 'text',
  children: 'My children',
  loading: true,
}
