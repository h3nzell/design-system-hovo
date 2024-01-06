import { Arrow2 } from '../../../components/Basic/Icons/Arrow'
import SidebarNavItem from '../../../components/UIComponents/Sidebar/SidebarNavItem'

export default {
  title: 'UIComponents/Sidebar/SideBarNavItem',
  component: SidebarNavItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text' },
    badge: { control: 'text' },
    submenuItems: { control: 'array' },
    id: { control: { type: 'number', min: 1, max: 6, step: 1 } },
    selected: { control: { type: 'number', min: 1, max: 6, step: 1 } },
  },
}

export const SimpleSidebarNavItem = args => <SidebarNavItem {...args} />
SimpleSidebarNavItem.args = {
  id: 1,
}

export const ExpandableSidebarNavItem = args => <SidebarNavItem {...args} />
ExpandableSidebarNavItem.args = {
  id: 1,
}

export const BadgeSidebarNavItem = args => <SidebarNavItem {...args} />
BadgeSidebarNavItem.args = {
  id: 1,
  badge: '2',
}

export const IconSidebarNavItem = args => <SidebarNavItem {...args} />
IconSidebarNavItem.args = {
  id: 1,
  badge: '2',
  label: 'Icon',
  Icon: Arrow2,
}

export const SubMenuSidebarNavItem = args => <SidebarNavItem {...args} />
SubMenuSidebarNavItem.args = {
  id: 1,
  selected: 1,
  submenuItems: [
    { id: 1, label: 'sub menu item' },
    { id: 2, label: 'sub menu item' },
    { id: 3, label: 'sub menu item' },
  ],
}
