import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Button from '../../FormKit/Button'

const Footer = ({
  hideFooterCancelButton,
  onCancelHandler,
  onPrimaryActionHandler,
  onSecondaryActionHandler,
  primaryButtonContent,
  secondaryButtonContent,
  cancelButtonContent,
}) => (
  <div
    className={classNames('border-t-2 px-6 py-5 max-h-[88px] overflow-hidden flex items-center', {
      ['justify-end']: hideFooterCancelButton,
      ['justify-between']: !hideFooterCancelButton,
    })}
  >
    {!hideFooterCancelButton && (
      <Button size='large' onClick={onCancelHandler} variant='outlined'>
        {cancelButtonContent}
      </Button>
    )}
    {onSecondaryActionHandler ? (
      <div className='flex gap-4'>
        <Button size='large' className='whitespace-nowrap' variant='secondary' onClick={onSecondaryActionHandler}>
          {secondaryButtonContent}
        </Button>
        <Button size='large' className='whitespace-nowrap' onClick={onPrimaryActionHandler}>
          {primaryButtonContent}
        </Button>
      </div>
    ) : (
      <Button size='large' className='whitespace-nowrap' onClick={onPrimaryActionHandler}>
        {primaryButtonContent}
      </Button>
    )}
  </div>
)

Footer.propTypes = {
  onCancelHandler: PropTypes.func,
  hideFooterCancelButton: PropTypes.bool,
  onPrimaryActionHandler: PropTypes.func,
  onSecondaryActionHandler: PropTypes.func,
  primaryButtonContent: PropTypes.string,
  secondaryButtonContent: PropTypes.string,
  cancelButtonContent: PropTypes.string,
}

export default Footer
