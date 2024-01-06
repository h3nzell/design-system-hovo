import Icons from '../../../components/Basic/Icons/Icons'
import FilesIcon from '../../../components/Basic/Icons/Files'

export default {
  title: 'Basic/Icons/Files',
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

export const Folder = {
  args: {
    Icon: FilesIcon.Folder,
    color: '#1D2939',
    size: 24,
  },
}

export const FolderCross = {
  args: {
    Icon: FilesIcon.FolderCross,
    color: '#1D2939',
    size: 24,
  },
}

export const FolderAdd = {
  args: {
    Icon: FilesIcon.FolderAdd,
    color: '#1D2939',
    size: 24,
  },
}

export const FolderMinus = {
  args: {
    Icon: FilesIcon.FolderMinus,
    color: '#1D2939',
    size: 24,
  },
}

export const FolderFavorite = {
  args: {
    Icon: FilesIcon.FolderFavorite,
    color: '#1D2939',
    size: 24,
  },
}

export const Folder2 = {
  args: {
    Icon: FilesIcon.Folder2,
    color: '#1D2939',
    size: 24,
  },
}

export const FolderOpen = {
  args: {
    Icon: FilesIcon.FolderOpen,
    color: '#1D2939',
    size: 24,
  },
}

export const FolderCloud = {
  args: {
    Icon: FilesIcon.FolderCloud,
    color: '#1D2939',
    size: 24,
  },
}
