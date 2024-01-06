import Tooltip from './../../../components/UIComponents/Tooltip'

import { themes } from '@storybook/theming'

export default {
  title: 'UIComponents/Tooltip/WhiteTooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    theme: themes.dark,
    layout: 'centered',
  },
  argTypes: {
    children: { control: 'text' },
    tooltip: { control: 'text' },
    tooltipDescription: { control: 'text' },
    color: {
      control: {
        type: 'radio',
        options: ['white', 'dark'],
      },
    },
    position: {
      type: 'select',
      options: ['none', 'left', 'right', 'top', 'bottom_right', 'bottom_center', 'bottom_left'],
    },
  },
}

export const NoneTooltip = args => <Tooltip {...args} />
NoneTooltip.args = {
  color: 'white',
  position: 'none',
  children: 'None',
  tooltip: 'I am tooltip',
}

export const NoneTooltipDescription = args => <Tooltip {...args} />
NoneTooltipDescription.args = {
  color: 'white',
  position: 'none',
  children: 'None',
  tooltip: 'I am tooltip',
  tooltipDescription:
    'Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.',
}

export const LeftTooltip = args => <Tooltip {...args} />
LeftTooltip.args = {
  color: 'white',
  children: 'Left',
  position: 'left',
  tooltip: 'I am tooltip',
}

export const LeftTooltipDescription = args => <Tooltip {...args} />
LeftTooltipDescription.args = {
  color: 'white',
  children: 'Left',
  position: 'left',
  tooltip: 'I am tooltip',
  tooltipDescription:
    'Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.',
}

export const RightTooltip = args => <Tooltip {...args} />
RightTooltip.args = {
  color: 'white',
  children: 'Right',
  position: 'right',
  tooltip: 'I am tooltip',
}

export const RightTooltipDescription = args => <Tooltip {...args} />
RightTooltipDescription.args = {
  color: 'white',
  children: 'Right',
  position: 'right',
  tooltip: 'I am tooltip',
  tooltipDescription:
    'Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.',
}

export const TopTooltip = args => <Tooltip {...args} />
TopTooltip.args = {
  color: 'white',
  children: 'Top',
  position: 'top',
  tooltip: 'I am tooltip',
}

export const TopTooltipDescription = args => <Tooltip {...args} />
TopTooltipDescription.args = {
  color: 'white',
  children: 'Top',
  position: 'top',
  tooltip: 'I am tooltip',
  tooltipDescription:
    'Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.',
}

export const BottomRightTooltip = args => <Tooltip {...args} />
BottomRightTooltip.args = {
  color: 'white',
  children: 'Bottom Right',
  position: 'bottom_right',
  tooltip: 'I am tooltip',
}

export const BottomRightTooltipDescription = args => <Tooltip {...args} />
BottomRightTooltipDescription.args = {
  color: 'white',
  children: 'Bottom Right',
  position: 'bottom_right',
  tooltip: 'I am tooltip',
  tooltipDescription:
    'Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.',
}

export const BottomLeftTooltip = args => <Tooltip {...args} />
BottomLeftTooltip.args = {
  color: 'white',
  children: 'Bottom Left',
  position: 'bottom_left',
  tooltip: 'I am tooltip',
}

export const BottomLeftTooltipDescription = args => <Tooltip {...args} />
BottomLeftTooltipDescription.args = {
  color: 'white',
  children: 'Bottom Left',
  position: 'bottom_left',
  tooltip: 'I am tooltip',
  tooltipDescription:
    'Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.',
}

export const BottomCenterTooltip = args => <Tooltip {...args} />
BottomCenterTooltip.args = {
  color: 'white',
  children: 'Bottom Center',
  position: 'bottom_center',
  tooltip: 'I am tooltip',
}

export const BottomCenterTooltipDescription = args => <Tooltip {...args} />
BottomCenterTooltipDescription.args = {
  color: 'white',
  children: 'Bottom Center',
  position: 'bottom_center',
  tooltip: 'I am tooltip',
  tooltipDescription:
    'Tooltips are used to describe or identify an element. In most scenarios, tooltips help the user understand the meaning, function or alt-text of an element.',
}
