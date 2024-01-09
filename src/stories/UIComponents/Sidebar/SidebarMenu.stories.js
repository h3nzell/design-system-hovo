import SideMenu from '../../../components/UIComponents/Sidebar/SideMenu'
import { Element3 } from '../../../components/Basic/Icons/Grid'
import { Discover } from '../../../components/Basic/Icons/Essentials'
import { Message } from '../../../components/Basic/Icons/Email'
import { Clock } from '../../../components/Basic/Icons/Computer'
import { DocumentText } from '../../../components/Basic/Icons/Content'
import { DiscountShape } from '../../../components/Basic/Icons/Money'
import { MessageQuestion } from '../../../components/Basic/Icons/Support'

export default {
  title: 'UIComponents/Sidebar/LeftSidebar',
  component: SideMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    sideMenuItems: { control: 'array' },
    isAuth: { control: 'boolean' },
    handleLogout: { control: 'func' },
    handleNotificationClick: { control: 'func' },
  },
}

const sideMenuItems = [
  {
    title: 'General',
    items: [
      { id: 1, label: 'Dashboard', Icon: Element3 },
      {
        id: 2,
        label: 'Sidenav Item',
        onMenuClick: () => console.log("es el itemy"),
        Icon: Discover,
        submenuItems: [
          { id: 10, label: 'Search Jobs', onSubMenuItemClick: () => console.log("subMenuItem click") },
          { id: 11, label: 'Applications',  onSubMenuItemClick: () => console.log("subMenuItem click") },
          { id: 12, label: 'Saved Jobs', onSubMenuItemClick: () => console.log("subMenuItem click") },
        ],
      },
      { id: 3, label: 'Messages', Icon: Message, badge: '17' },
      { id: 4, label: 'Payments', Icon: Discover },
      { id: 5, label: 'My Time', Icon: Clock },
    ],
  },
  {
    title: 'About',
    items: [
      { id: 6, label: 'Reports', Icon: DocumentText },
      { id: 7, label: 'Benefits', Icon: DiscountShape },
    ],
  },
  {
    title: 'Footer',
    items: [{ id: 8, label: 'Help Center', Icon: MessageQuestion }],
  },
]

export const AuthSideMenu = args => <SideMenu {...args} />
AuthSideMenu.args = {
  isAuth: true,
  sideMenuItems,
  handleLogout: () => console.log('logout handle'),
  handleNotificationClick: () => console.log('asdas'),
}

export const UnAuthSideMenu = args => <SideMenu {...args} />
UnAuthSideMenu.args = {
  isAuth: false,
  sideMenuItems,
  handleLogout: () => console.log('logout handle'),
  handleNotificationClick: () => console.log('asdas'),
}

export const AuthSideMenuMobile = args => <SideMenu {...args} />
AuthSideMenuMobile.args = {
  isAuth: true,
  isMobile: true,
  sideMenuItems,
  handleLogout: () => console.log('logout handle'),
  handleNotificationClick: () => console.log('asdas'),
}

export const UnAuthSideMenuMobile = args => <SideMenu {...args} />
UnAuthSideMenuMobile.args = {
  isAuth: false,
  isMobile: true,
  sideMenuItems,
  handleLogout: () => console.log('logout handle'),
  handleNotificationClick: () => console.log('asdas'),
}
