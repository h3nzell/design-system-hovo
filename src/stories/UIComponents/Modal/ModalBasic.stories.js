import React from 'react'
import Modal from '../../../components/UIComponents/Modal-Sidesheet/Modal'

export default {
  title: 'UIComponents/Modal/ModalBasic',
  component: Modal,
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
    onSecondaryActionHandler: { control: 'clicked' },
  },
}

export const ModalFullFooter = args => <Modal {...args} />
ModalFullFooter.args = {
  open: true,
  title: 'Submit a Proposal',
  onPrimaryActionHandler: () => alert('Primary Action Handler'),
  onSecondaryActionHandler: () => alert('Secondary Action Handler'),
}

export const ModalCancelHide = args => <Modal {...args} />
ModalCancelHide.args = {
  open: true,
  title: 'Submit a Proposal',
  hideFooterCancelButton: true,
  onPrimaryActionHandler: () => alert('Primary Action Handler'),
  onSecondaryActionHandler: () => alert('Secondary Action Handler'),
}

export const ModalSecondaryHide = args => <Modal {...args} />
ModalSecondaryHide.args = {
  open: true,
  title: 'Submit a Proposal',
  onSecondaryActionHandler: null,
  onPrimaryActionHandler: () => alert('Primary Action Handler'),
}

export const ModalFullHide = args => <Modal {...args} />
ModalFullHide.args = {
  open: true,
  title: 'Submit a Proposal',
  hideFooterCancelButton: true,
  onSecondaryActionHandler: null,
}

export const ModalCustomContent = args => <Modal {...args} />
ModalCustomContent.args = {
  open: true,
  title: 'Submit a Proposal',
  children: (
    <div className='min-h-[200px] flex justify-center items-center'>
      <p>Custom Content</p>
    </div>
  ),
}
