import React from 'react'
import FileUpload from '../../../components/UIComponents/FileUpload/FileUpload'

export default {
  title: 'UIComponents/FileUpload/FileUploadBasic',
  component: FileUpload,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onFileChange: { control: 'function' },
    filesPreview: { control: 'array' },
    title: { control: 'text' },
    hint: { control: 'text' },
    maxSize: { control: 'number' },
  },
}

export const FileUploadTitle = args => <FileUpload {...args} />
FileUploadTitle.args = {
  title: 'Uplaod cv or project',
  filesPreview: [],
  onFileChange: (event, filesPreview) => {
    console.log(event, filesPreview)
  },
}

export const FileUploadHint = args => <FileUpload {...args} />
FileUploadHint.args = {
  hint: 'This is a hint text to help the user',
  filesPreview: [],
  onFileChange: (event, filesPreview) => {
    console.log(event, filesPreview)
  },
}

export const FileUploadBoth = args => <FileUpload {...args} />
FileUploadBoth.args = {
  title: 'Uplaod cv or project',
  filesPreview: [],
  hint: 'This is a hint text to help the user',
  onFileChange: (event, filesPreview) => {
    console.log(event, filesPreview)
  },
}

export const FileUploadInProgress = args => <FileUpload {...args} />
FileUploadInProgress.args = {
  inProcess: true,
  filesPreview: [],
  onFileChange: (event, filesPreview) => {
    console.log(event, filesPreview)
  },
}
