import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Button from '../../FormKit/Button'
import Typography from '../../Basic/Typography'
import EssentialsIcons from '../../Basic/Icons/Essentials'
import ArrowIcons from '../../Basic/Icons/Arrow'

const Header = ({ title, onBackButtonHandler, onCancelHandler }) => (
  <div
    className={classNames('border-b-2 px-6 py-5 max-h-[88px] flex items-center', {
      ['justify-between']: onCancelHandler,
      ['justify-start']: !onCancelHandler,
    })}
  >
    {onBackButtonHandler ? (
      <div className='flex items-center gap-3'>
        <Button variant='outlined' RightIcon={ArrowIcons.ArrowLeft2} onClick={onBackButtonHandler} size='large' />
        <Typography text={title ?? 'Submit a Proposal'} weight='bold' size='lg' className='whitespace-nowrap' />
      </div>
    ) : (
      <Typography text={title ?? 'Submit a Proposal'} weight='bold' size='lg' className='whitespace-nowrap' />
    )}
    {onCancelHandler && <Button variant='outlined' RightIcon={EssentialsIcons.Close} onClick={onCancelHandler} size='large' />}
  </div>
)

Header.propTypes = {
  title: PropTypes.string,
  onCancelHandler: PropTypes.func,
  hideCancelButton: PropTypes.bool,
  onBackButtonHandler: PropTypes.bool,
}

export default Header
