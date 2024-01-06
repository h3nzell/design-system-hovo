import SearchInput from '../../../components/UIComponents/SearchInput'
import { SearchNormal } from './../../../components/Basic/Icons/Search'

export default {
  title: 'UIComponents/Search/Search-Basic',
  component: SearchInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    Icon: { control: 'text' },
    onChange: { control: 'clicked' },
    name: 'text',
    label: 'text',
    hint: 'text',
    placeholder: 'text',
    value: 'text',
    onBlur: 'text',
    onFocus: 'text',
    onKeyDown: 'text',
    Icon: 'text',
    IconColor: 'text',
    onChange: 'text',
    onSearchFilterChange: 'text',
    categoryValue: 'text',
    defaultCategory: 'text',
    onCategoryChange: 'clicked',
    disabled: 'boolean',
    maxLength: 'number',
    minLength: 'number',
    autoComplete: { control: { type: 'text', options: ['off', 'on'] } },
  },
}

export const SearchBasic = args => <SearchInput {...args} />
SearchBasic.args = {
  name: 'search-name',
  IconColor: 'gray',
  defaultCategory: 'Default',
  categoryValue: 'Jobs',
  searchList: [{ id: 1, value: 'jobs', label: 'Jobs' }],
  categoryList: [{ id: 1, value: 'jobs', label: 'Jobs' }],
  value: 'value',
  Icon: SearchNormal,
  placeholder: 'Search for a job',
}
