import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Header from './Header'
import Footer from './Footer'
import useOutsideClick from '../../../hooks/useOutsideClick'
import Typography from './../../Basic/Typography'

const Sidesheet = ({ open, title, children,titleClassName, onCancelHandler, hideFooterCancelButton, onBackButtonHandler, onPrimaryActionHandler, onSecondaryActionHandler }) => {
  const ref = useRef(null)

  const [animationOpenEnd, setAnimationOpenEnd] = useState(open)

  useEffect(() => {
    if (open) setAnimationOpenEnd(true)
  }, [open])

  useOutsideClick(ref, onCancelHandler)

  return (
    <aside
      className={classNames('transition-all duration-700 inset-0 fixed bg-opacity-20', {
        ['bg-slate-900']: open,
        ['bg-transparent']: !open,
        ['-z-[500]']: !animationOpenEnd,
      })}
      onTransitionEnd={() => {
        if (!open) setAnimationOpenEnd(false)
      }}
    >
      <div className='transition-all h-[100vh] z-[10px] flex justify-end'>
        <div
          ref={ref}
          className={classNames('transition-all duration-1000 h-[100vh] w-[40%] bg-white rounded-[10px] flex flex-col justify-between', {
            ['fixed -right-[100%]']: !open,
            ['fixed right-0']: open,
          })}
        >
          <Header onBackButtonHandler={onBackButtonHandler} onCancelHandler={onCancelHandler} title={title} titleClassName={titleClassName} />
          {animationOpenEnd && (
            <div className='p-6 flex-grow-[3]'>
              {children ? (
                children
              ) : (
                <div className='h-full w-full flex justify-center items-center rounded-[10px] border-dashed border-2 bg-primary100 border-primary200'>
                  <Typography className='text-primary500' weight='bold' size='lg' text='Replace Me' />
                </div>
              )}
            </div>
          )}
          <Footer
            onCancelHandler={onCancelHandler}
            onPrimaryActionHandler={onPrimaryActionHandler}
            onSecondaryActionHandler={onSecondaryActionHandler}
            hideFooterCancelButton={hideFooterCancelButton}
          />
        </div>
      </div>
    </aside>
  )
}

Sidesheet.defaultProps = {
  title: 'Sidesheet Title'
}

Sidesheet.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.element,
  onCancelHandler: PropTypes.func,
  onPrimaryActionHandler: PropTypes.func,
  onSecondaryActionHandler: PropTypes.func,
  hideFooterCancelButton: PropTypes.bool,
  titleClassName: PropTypes.string,
  onBackButtonHandler: PropTypes.func,
}

export default Sidesheet
