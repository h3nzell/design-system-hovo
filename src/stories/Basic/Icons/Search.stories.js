import Icons from '../../../components/Basic/Icons/Icons'
import SearchIcon from '../../../components/Basic/Icons/Search'

export default {
  title: 'Basic/Icons/Search',
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

export const SearchNormal = {
  args: {
    Icon: SearchIcon.SearchNormal,
    color: '#1D2939',
    size: 24,
  },
}
export const SearchZoomIn = {
  args: {
    Icon: SearchIcon.SearchZoomIn,
    color: '#1D2939',
    size: 24,
  },
}
export const SearchZoomOut = {
  args: {
    Icon: SearchIcon.SearchZoomOut,
    color: '#1D2939',
    size: 24,
  },
}
export const SearchFavorite = {
  args: {
    Icon: SearchIcon.SearchFavorite,
    color: '#1D2939',
    size: 24,
  },
}
export const SearchStatus = {
  args: {
    Icon: SearchIcon.SearchStatus,
    color: '#1D2939',
    size: 24,
  },
}
export const SearchNormal2 = {
  args: {
    Icon: SearchIcon.SearchNormal2,
    color: '#1D2939',
    size: 24,
  },
}
export const SearchZoomIn2 = {
  args: {
    Icon: SearchIcon.SearchZoomIn2,
    color: '#1D2939',
    size: 24,
  },
}
export const SearchZoomOut2 = {
  args: {
    Icon: SearchIcon.SearchZoomOut2,
    color: '#1D2939',
    size: 24,
  },
}
export const SearchStatus2 = {
  args: {
    Icon: SearchIcon.SearchStatus2,
    color: '#1D2939',
    size: 24,
  },
}
export const SearchFavorite2 = {
  args: {
    Icon: SearchIcon.SearchFavorite2,
    color: '#1D2939',
    size: 24,
  },
}
