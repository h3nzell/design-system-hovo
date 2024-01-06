import React, { useState } from 'react'
import Modal from '../UIComponents/Modal-Sidesheet/Modal'
import Input from '../FormKit/Input'
import Radio from '../FormKit/Radio'
import Button from '../FormKit/Button'
import Dropdown from '../UIComponents/Dropdown/Dropdown'
import ArrowIcons from '../Basic/Icons/Arrow'
import RangeSlider from '../UIComponents/RangeSlider/RangeSlider'
import Toggle from './../FormKit/Toggle'
import FileUpload from '../UIComponents/FileUpload/FileUpload'
import Avatar from './../UIComponents/Avatar'
import SearchIcons from './../Basic/Icons/Search'
// import SearchInput from './../UIComponents/SearchInput'
import EssentialIcons from '../Basic/Icons/Essentials'
import SearchInput from '../UIComponents/SearchInput'

const ModalFormTest = () => {
  const [open, setOpen] = useState(false)
  const [formValue, setFormValue] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    degree: '',
    isInvited: false,
    percentStart: 0,
    percentEnd: 70,
    filesPreview: [],
    avatar: null,
  })

  const onFormInputChange = (event, value) => {
    setFormValue(prev => ({ ...prev, [event.target.name]: value }))
  }

  const onFormRadioChange = (_, value) => setFormValue(prev => ({ ...prev, ['gender']: value }))

  const onSubmitHandler = event => {
    event.preventDefault()
  }

  const propSearch = {
    name: 'search-name',
    IconColor: 'gray',
    categoryValue: 'Jobs',
    searchList: [{ id: 1, value: 'jobs', label: 'Jobs' }],
    categoryList: [{ id: 1, value: 'jobs', label: 'Jobs' }],
    value: 'value',
    Icon: SearchIcons.SearchNormal,
    placeholder: 'Search for a job',
  }

  return (
    <>
      <Button onClick={() => setOpen(prev => !prev)} className='!w-full text-center'>
        Open Modal
        <ArrowIcons.ArrangeCircle />
      </Button>
      <Modal onCancelHandler={() => setOpen(false)} open={open}>
        <Input name='firstName' value={formValue.firstName} onChange={onFormInputChange} placeholder='Enter First Name' RightIcon={<ArrowIcons.Arrow2 color='gray' size={20} />} />
        <form onSubmit={onSubmitHandler}>
          {/* <Input name='lastName' value={formValue.lastName} onChange={onFormInputChange} placeholder='Enter Last Name' />
          <Input name='lastName' value={formValue.lastName} type='password' onChange={onFormInputChange} placeholder='Enter Last Name' /> */}
          <Radio name='gender' value={'female'} label='Female' onChange={onFormRadioChange} />
          <Radio name='gender' value={'male'} label='Male' onChange={onFormRadioChange} />
          <Radio name='gender' value={'unknown'} label='Unknown' onChange={onFormRadioChange} />
          <Dropdown
            classNameItem='bg-gray400 text-white'
            onChange={(_, value, label) => setFormValue(prev => ({ ...prev, degree: { value, label } }))}
            items={[
              { id: 1, value: 'bachelor', label: 'Bachelor' },
              { id: 2, value: 'master', label: 'Master' },
              { id: 3, value: 'professor', label: 'Professor' },
            ]}
          >
            <Button RightIcon={ArrowIcons.ArrowDown2}>{formValue.degree ? formValue.degree.label : 'Select Degree'}</Button>
          </Dropdown>
          <RangeSlider
            max={100}
            min={0}
            step={1}
            gapValue={25}
            tooltip='top'
            onChange={(_, minVal, maxVal) => setFormValue(prev => ({ ...prev, percentStart: minVal, percentEnd: maxVal }))}
            maxValue={formValue.maxVal}
            minValue={formValue.minVal}
            containerClassName='my-10'
          />
          <Toggle
            containerClassName='my-10'
            name='visited'
            label='Invited'
            checked={formValue.isInvited}
            onChange={(_, value) => setFormValue(prev => ({ ...prev, isInvited: value }))}
          />
          <SearchInput {...propSearch} categoryValue='vgbhnj' />
          <FileUpload
            maxSize={100}
            filesPreview={formValue.filesPreview}
            onFileChange={(_, files) => {
              console.log('file upload', files)
              setFormValue(prev => ({ ...prev, filesPreview: files }))
            }}
          />
          <Avatar img={formValue.avatar} size='extra_large' status='active' onFileChange={selectedImage => setFormValue(prev => ({ ...prev, avatar: selectedImage }))} />
          <Button>Submit</Button>
        </form>
      </Modal>
    </>
  )
}

export default ModalFormTest
