import React from 'react'
import Sidesheet from '../../../components/UIComponents/Modal-Sidesheet/Sidesheet'

export default {
  title: 'UIComponents/Sidesheet/SidesheetBasic',
  component: Sidesheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    title: { control: 'text' },
    children: { control: 'node' },
    onCancelHandle: { control: 'clicked' },
    hideFooterCancelButton: { control: 'boolean' },
    onPrimaryActionHandler: { control: 'clicked' },
    onBackButtonHandler: { control: 'clicked' },
    onSecondaryActionHandler: { control: 'clicked' },
  },
}

export const SidesheetFooterCancelHide = args => <Sidesheet {...args} />
SidesheetFooterCancelHide.args = {
  open: true,
  title: 'Submit a Proposal',
  onBackButtonHandler: () => alert('Back button handler'),
  hideFooterCancelButton: true,
  onCancelHandler: () => alert('Close Handler'),
  onPrimaryActionHandler: () => alert('Primary Action Handler'),
  onSecondaryActionHandler: () => alert('Secondary Action Handler'),
}

export const SidesheetFooterSecondaryHide = args => <Sidesheet {...args} />
SidesheetFooterSecondaryHide.args = {
  open: true,
  title: 'Submit a Proposal',
  onBackButtonHandler: () => alert('Back button handler'),
  onSecondaryActionHandler: null,
  onCancelHandler: () => alert('Close Handler'),
  onPrimaryActionHandler: () => alert('Primary Action Handler'),
}

export const SidesheetFooterFullHide = args => <Sidesheet {...args} />
SidesheetFooterFullHide.args = {
  open: true,
  title: 'Submit a Proposal',
  onBackButtonHandler: () => alert('Back button handler'),
  hideFooterCancelButton: true,
  onSecondaryActionHandler: null,
  onCancelHandler: () => alert('Close Handler'),
}

export const SidesheetHeaderBackButtonHide = args => <Sidesheet {...args} />
SidesheetHeaderBackButtonHide.args = {
  open: true,
  title: 'Submit a Proposal',
  hideFooterCancelButton: true,
  onBackButtonHandler: null,
  onSecondaryActionHandler: null,
  onCancelHandler: () => alert('Close Handler'),
}

export const SidesheetHeaderCancelButtonHide = args => <Sidesheet {...args} />
SidesheetHeaderCancelButtonHide.args = {
  open: true,
  title: 'Submit a Proposal',
  hideFooterCancelButton: true,
  onSecondaryActionHandler: null,
  onCancelHandler: null,
}

export const SidesheetFullHeaderHide = args => <Sidesheet {...args} />
SidesheetFullHeaderHide.args = {
  open: true,
  title: 'Submit a Proposal',
  hideFooterCancelButton: true,
  onSecondaryActionHandler: null,
  onCancelHandler: null,
  onBackButtonHandler: null,
}

export const SidesheetCustomContent = args => <Sidesheet {...args} />
SidesheetCustomContent.args = {
  open: true,
  title: 'Submit a Proposal',
  onCancelHandler: () => alert('Close Handler'),
  children: (
    <div className='min-h-[200px] flex justify-center items-center'>
      <p>Custom Content</p>
    </div>
  ),
}
