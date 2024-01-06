import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import VdoAudioImgIcons from '../Basic/Icons/VdoAudioImg'

const Avatar = ({ onFileChange, size, status, firstName, lastName, img, className, onClickHandler }) => {
  const inputRef = useRef(null)
  const [imageURL, setImageURL] = useState(img)

  const handleFileClick = () => {
    onClickHandler?.()
    if (onFileChange) inputRef.current.click()
  }

  const onFileSelect = event => {
    const selectedImage = event.target.files[0]

    if (selectedImage) {
      const img = URL.createObjectURL(selectedImage)
      setImageURL(img)
      onFileChange?.(selectedImage)
    }
  }

  const configImageSize = {
    extra_large: 'w-[88px] h-[88px]',
    large: 'w-[54px] h-[54px]',
    medium: 'w-10 h-10',
    small: 'w-[30px] h-[30px]',
    extra_small: 'w-[26px] h-[26px]',
  }

  const configNoAvatarTextSize = {
    extra_large: 'text-3xl w-[42px] h-9',
    large: 'text-xl w-7 h-[25px]',
    medium: 'text-base w-6 h-6',
    small: 'text-sm w-5 h-5',
    extra_small: 'text-xs w-4 h-4',
  }

  const configStatus = {
    away: 'bg-warning400',
    inactive: 'bg-gray300',
    active: 'bg-success300',
    do_not_disturb: 'bg-error500',
  }

  const configCameraSize = {
    extra_large: '24px',
    large: '24px',
    medium: '18px',
    small: '0',
    extra_small: '0',
  }

  const configStatusSize = {
    extra_large: 'w-3 h-3',
    large: 'w-[10px] h-[10px]',
    medium: 'w-2 h-2',
    small: 'w-[6px] h-[6px]',
    extra_small: 'w-1 h-1',
  }

  return (
    <div role='button' onClick={handleFileClick} className={classNames('group w-[fit-content] relative', { ['cursor-pointer']: onFileChange, [className]: className })}>
      {status && (
        <div
          className={`absolute z-[2px] right-[6%] top-[5%] rounded-full shadow-[0.0px_0.0px_0.0px_2.0px_rgba(255,255,255,1.0)] ${configStatus[status]} ${configStatusSize[size]}`}
        />
      )}

      {onFileChange && (
        <>
          <label
            htmlFor='avatar'
            className='absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] cursor-pointer transition-all duration-300 opacity-0 group-hover:opacity-100'
          >
            <VdoAudioImgIcons.Camera color='#FFF' size={configCameraSize[size]} />
          </label>
          <input ref={inputRef} type='file' name='avatar' className='hidden' onChange={onFileSelect} onClick={e => e.stopPropagation()} />
        </>
      )}

      {img ? (
        <img className={`object-contain rounded-full ${configImageSize[size]}`} src={imageURL} alt='User' />
      ) : (
        <div className={`transition-all flex items-center justify-center rounded-full bg-gray700 ${configImageSize[size]}`}>
          <p className={`text-white font-primary font-semibold ${configNoAvatarTextSize[size]}`}>{(firstName ? firstName[0] : 'M') + (lastName ? lastName[0] : 'H')}</p>
        </div>
      )}
    </div>
  )
}

Avatar.propTypes = {
  img: PropTypes.string,
  onFileChange: PropTypes.func,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  className: PropTypes.string,
  onClickHandler: PropTypes.func,
  status: PropTypes.oneOf(['active', 'do_not_disturb', 'inactive', 'away']),
  size: PropTypes.oneOf(['extra_small', 'small', 'medium', 'large', 'extra_large']),
}

export default Avatar
