import React, { useEffect, useRef, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import PreviewFile from './PreviewFile'
import Typography from '../../Basic/Typography'
import { formatDate } from '../../../utils/formatDate'
import ContentIcons from '../../Basic/Icons/Content'
import { acceptedFiles } from '../../../constant/acceptedFiles'
import useOutsideClick from '../../../hooks/useOutsideClick'

const FileUpload = ({ onFileChange, filesPreview, title, hint, maxSize = 100, ...props }) => {
  const [filesDetail, setFilesDetail] = useState([])
  const [isDragEnter, setIsDragEnter] = useState(false)
  const draggableContainer = useRef(null)

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: acceptedFiles => {
      const filesDetail = acceptedFiles.map(acceptedFile => {
        return { detail: fileConfigHandler(acceptedFile), file: acceptedFile }
      })

      onFileChange?.(undefined, acceptedFiles)

      setFilesDetail(prev => [...prev, ...filesDetail])
    },
  })

  useOutsideClick(draggableContainer, () => setIsDragEnter(false))

  const handleDrag = () => {
    setIsDragEnter(prev => !prev)
  }

  const onRevert = (event, eachFileDetail) => {
    event.stopPropagation()

    const filteredFileDetails = filesDetail.filter(fileDetail => {
      return fileDetail.detail.name !== eachFileDetail.name
    })

    const filteredFilePreviews = filesPreview.filter(preview => {
      return preview.name !== eachFileDetail.name
    })

    onFileChange?.(event, filteredFilePreviews)
    setFilesDetail(filteredFileDetails)
  }

  const onPreviewFile = fileDetail => {
    if (fileDetail.isFailed) return
    window.open(fileDetail?.file, '_blank')
  }

  const fileConfigHandler = file => {
    const newFile = URL.createObjectURL(file)

    let uploadDetails = {
      file: newFile,
      date: formatDate(new Date()),
      name: file.name,
      isFailed: false,
    }

    const checkMegabyte = Math.floor(file.size / (1000 * 1000)) // first  / 1000 -> kilobyte / 1000 -> megabyte
    const checkKilobyte = Math.floor(file.size / 1000)

    if (checkMegabyte >= 1) {
      uploadDetails['size'] = `${checkMegabyte} MB`
    }

    if (checkKilobyte >= 1) {
      uploadDetails['size'] = `${checkKilobyte} KB`
    }

    if (!acceptedFiles.includes(file.type) || checkMegabyte > maxSize) {
      uploadDetails['isFailed'] = true
    }

    return uploadDetails
  }

  const onFileChangeHandler = event => {
    const selectedFiles = Object.values(event.target.files)

    const newFilesDetail = selectedFiles.map(selectedFile => {
      return { detail: fileConfigHandler(selectedFile), file: selectedFile }
    })

    onFileChange?.(event, selectedFiles)

    setFilesDetail(prev => [...prev, ...newFilesDetail])
  }

  useEffect(() => {
    if (filesPreview) {
      const newFilesDetail = filesPreview.map(filePreview => {
        return { detail: fileConfigHandler(filePreview), file: filePreview }
      })

      onFileChange?.(undefined, filesPreview)

      setFilesDetail(prev => [...prev, ...newFilesDetail])
    }
  }, [])

  return (
    <>
      {title && <Typography weight='semibold' size='md' text={title} className='mb-3' />}
      <label
        {...getRootProps()}
        htmlFor='file-upload'
        ref={draggableContainer}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onClick={event => event.stopPropagation()}
        className={classNames(
          `custom-disable-pointer-events bg-white cursor-pointer border-dashed border-2 border-primary500 rounded-xl min-w-[400px] py-[21px] flex flex-col items-center gap-2`,
          { ['border-opacity-100 opacity-60']: isDragEnter }
        )}
      >
        <ContentIcons.DocumentUpload size={32} color='#667085' />
        <div className='flex gap-1'>
          <Typography weight='medium' size='sm' text='Drag or' className='text-gray600' />
          <Typography weight='medium' size='sm' text='upload' className='text-primary500' />
          <Typography weight='medium' size='sm' text='project files' className='text-gray600' />
        </div>
        <Typography weight='normal' size='sm' text={`SVG, PNG, JPG or GIF max ${maxSize} MB`} className='text-gray400' />
        <input type='file' id='file-upload' multiple='multiple' className='hidden' {...getInputProps()} onChange={onFileChangeHandler} {...props} />
      </label>
      {hint && <Typography weight='normal' size='xs' text={hint} className='mt-2 text-gray500' />}
      <>
        {filesDetail.map(eachFileDetail => {
          const fileDetail = eachFileDetail.detail

          return (
            <PreviewFile
              inProcess={false}
              size={fileDetail.size}
              date={fileDetail.date}
              name={fileDetail.name}
              isFailed={fileDetail.isFailed}
              onClick={() => onPreviewFile(fileDetail)}
              onRevertClick={event => onRevert(event, fileDetail)}
            />
          )
        })}
      </>
    </>
  )
}

FileUpload.propTypes = {
  onFileChange: PropTypes.func,
  filesPreview: PropTypes.arrayOf(PropTypes.shape(PropTypes.string)),
  maxSize: PropTypes.number,
  title: PropTypes.string,
  hint: PropTypes.string,
}

export default FileUpload
