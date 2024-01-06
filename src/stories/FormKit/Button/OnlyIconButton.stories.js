import { Send } from '../../../components/Basic/Icons/Arrow'
import Button from '../../../components/FormKit/Button'

export default {
  title: 'FormKit/Buttons/OnlyIconsButton',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
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

    RightIcon: {control: 'clicked'}
  },
}

// primary
export const PrimarySmall = args => <Button {...args} />
PrimarySmall.args = {
  size: 'small',
  variant: 'primary',
  RightIcon: Send
}

export const PrimaryMedium = args => <Button {...args} />
PrimaryMedium.args = {
  size: 'medium',
  variant: 'primary',
  RightIcon: Send
}

export const PrimaryLarge = args => <Button {...args} />
PrimaryLarge.args = {
  size: 'large',
  variant: 'primary',
  RightIcon: Send
}

export const PrimaryDisabledLarge = args => <Button {...args} />
PrimaryDisabledLarge.args = {
  size: 'large',
  disabled: true,
  variant: 'primary',
  RightIcon: Send
}


// secondary
export const SecondarySmall = args => <Button {...args} />
SecondarySmall.args = {
  size: 'small',
  variant: 'secondary',
  RightIcon: Send
}

export const SecondaryMedium = args => <Button {...args} />
SecondaryMedium.args = {
  size: 'medium',
  variant: 'secondary',
  RightIcon: Send
}

export const SecondaryLarge = args => <Button {...args} />
SecondaryLarge.args = {
  size: 'large',
  variant: 'secondary',
  RightIcon: Send
}

export const SecondaryDisabledLarge = args => <Button {...args} />
SecondaryDisabledLarge.args = {
  size: 'large',
  disabled: true,
  variant: 'secondary',
  RightIcon: Send
}


// outlined
export const OutlinedSmall = args => <Button {...args} />
OutlinedSmall.args = {
  size: 'small',
  variant: 'outlined',
  RightIcon: Send
}

export const OutlinedMedium = args => <Button {...args} />
OutlinedMedium.args = {
  size: 'medium',
  variant: 'outlined',
  RightIcon: Send
}

export const OutlinedLarge = args => <Button {...args} />
OutlinedLarge.args = {
  size: 'large',
  variant: 'outlined',
  RightIcon: Send
}

export const OutlinedDisabledLarge = args => <Button {...args} />
OutlinedDisabledLarge.args = {
  size: 'large',
  variant: 'outlined',
  disabled: true,
  RightIcon: Send
}


// ghost
export const GhostSmall = args => <Button {...args} />
GhostSmall.args = {
  size: 'small',
  variant: 'ghost',
  RightIcon: Send
}

export const GhostMedium = args => <Button {...args} />
GhostMedium.args = {
  size: 'medium',
  variant: 'ghost',
  RightIcon: Send
}

export const GhostLarge = args => <Button {...args} />
GhostLarge.args = {
  size: 'large',
  variant: 'ghost',
  RightIcon: Send
}

export const GhostDisabledLarge = args => <Button {...args} />
GhostDisabledLarge.args = {
  size: 'large',
  variant: 'ghost',
  disabled: true,
  RightIcon: Send
}

// text
export const TextSmall = args => <Button {...args} />
TextSmall.args = {
  size: 'small',
  variant: 'text',
  RightIcon: Send
}

export const TextMedium = args => <Button {...args} />
TextMedium.args = {
  size: 'medium',
  variant: 'text',
  RightIcon: Send
}

export const TextLarge = args => <Button {...args} />
TextLarge.args = {
  size: 'large',
  variant: 'text',
  RightIcon: Send
}

export const TextDisabledLarge = args => <Button {...args} />
TextDisabledLarge.args = {
  size: 'large',
  variant: 'text',
  disabled: true,
  RightIcon: Send
}

