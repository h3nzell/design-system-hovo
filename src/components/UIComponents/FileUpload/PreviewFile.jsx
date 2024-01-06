import React from 'react'
import classNames from 'classnames'
import Typography from '../../Basic/Typography'
import EssentialIcons from '../../Basic/Icons/Essentials'

const PreviewFile = ({ isFailed, onClick, onRevertClick, size, name, date }) => (
  <div
    onClick={onClick}
    className={classNames('mt-4 bg-white rounded-[10px] cursor-pointer flex items-center gap-3 p-5', {
      // ['cursor-wait']: inProcess,
      ['border-2 border-gray100']: !isFailed,
      ['relative !cursor-not-allowed !bg-error50 border-2 border-error500']: isFailed,
    })}
  >
    <EssentialIcons.Trash size={20} color='#F97066' onClick={onRevertClick} className='cursor-pointer' />
    <div className='flex flex-col gap-1'>
      <Typography weight='semibold' size='sm' text={name} className='text-gray900' />
      <Typography weight='noral' size='xs' text={`${size} - ${date}`} className='text-gray500' />
    </div>
    {isFailed && <Typography className={'text-error600 absolute right-5'} weight='semibold' size='xs' text='Try Again' />}
  </div>
)

export default PreviewFile
