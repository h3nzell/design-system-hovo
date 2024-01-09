import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Button from '../../FormKit/Button'
import Typography from '../../Basic/Typography'
import ArrowIcons from '../../Basic/Icons/Arrow'
import EssentialsIcons from '../../Basic/Icons/Essentials'

const Header = ({ title, closable, onBackButtonHandler, onCancelHandler, disableDivider, titleClassName }) => {
  return (
    <div
      className={classNames('px-6 py-5 max-h-[88px] flex items-center', {
        ['justify-between']: onCancelHandler,
        ['justify-start']: !onCancelHandler,
        ['border-b-2 ']: !disableDivider,
      })}
    >
      {onBackButtonHandler ? (
        <div className="flex items-center gap-3">
          <Button variant="outlined" RightIcon={ArrowIcons.ArrowLeft2} onClick={onBackButtonHandler} size="large" />
          <Typography
            size="lg"
            weight="bold"
            text={title}
            className={classNames('whitespace-nowrap', { [titleClassName]: titleClassName })} />
        </div>
      ) : (
        <Typography
          size="lg"
          weight="bold"
          text={title}
          className={classNames('whitespace-nowrap', { [titleClassName]: titleClassName })} />
      )}
      {onCancelHandler && closable && <Button variant='outlined' RightIcon={EssentialsIcons.Close} onClick={onCancelHandler} size='large' />}
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  onCancelHandler: PropTypes.func,
  titleClassName: PropTypes.string,
  hideCancelButton: PropTypes.bool,
  onBackButtonHandler: PropTypes.bool,
  disableDivider: PropTypes.bool,
  closable: PropTypes.bool,
}

export default Header
