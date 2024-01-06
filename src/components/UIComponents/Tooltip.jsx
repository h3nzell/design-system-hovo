import React from 'react'
import PropTypes from 'prop-types'
import ArrowIcons from '../Basic/Icons/Arrow'

const Tooltip = ({ children, tooltip, tooltipDescription, color, position }) => {
  const configColor = {
    white: 'bg-white',
    dark: 'bg-gray800',
  }

  const configFontColor = {
    white: 'text-gray800',
    dark: 'text-white',
  }

  const configDescriptionColor = {
    white: 'text-gray500',
    dark: 'text-white',
  }

  const configTooltipPosition = {
    top: 'left-[50%] translate-x-[-50%]',
    left: 'right-[-10px] -rotate-90 translate-y-[-50%] top-[50%]',
    right: 'left-[-10px] rotate-90 translate-y-[-50%] top-[50%]',
    bottom_right: 'left-[10px] rotate-180 top-[-10px]',
    bottom_center: 'top-[-10px] left-[50%] rotate-180 translate-x-[-50%]',
    bottom_left: 'right-[10px] rotate-180 top-[-10px]',
  }

  const configPosition = {
    top: 'top-[-50%] translate-y-[-100%]',
    none: 'top-[-15px] translate-y-[-100%]',
    left: 'translate-x-[-100%] left-[-20px]',
    right: 'translate-x-[100%] right-[-20px]',
    bottom_right: 'bottom-[-50%] translate-y-[100%] left-0 translate-x-[-3%]',
    bottom_center: 'bottom-[-50%] translate-y-[100%]',
    bottom_left: 'bottom-[-50%] translate-y-[100%] right-0 translate-x-[3%]',
  }

  return (
    <div className='group relative cursor-pointer min-w-[32px] flex justify-center items-center'>
      {children}
      <div
        className={`m-2 absolute transition max-h-[98px] max-w-[320px] w-max delay-300 hidden group-hover:block rounded-[8px] px-[12px] py-[8px] ${configColor[color]} ${configPosition[position]}`}
      >
        <p className={`${configFontColor[color]} mb-1 font-medium text-xs`}>{tooltip}</p>

        {tooltipDescription && <p className={`${configDescriptionColor[color]} font-medium text-xs`}>{tooltipDescription}</p>}

        {position !== 'none' && (
          <ArrowIcons.TooltipIcon size='16px' color={color === 'white' ? '#ffffff' : '#1D2939'} className={`absolute   ${configTooltipPosition[position]}`} />
        )}
      </div>
    </div>
  )
}

Tooltip.propTypes = {
  children: PropTypes.element,
  tooltip: PropTypes.string,
  tooltipDescription: PropTypes.string,
  color: PropTypes.oneOf(['white', 'dark']),
  position: PropTypes.oneOf(['none', 'left', 'right', 'top', 'bottom_right', 'bottom_center', 'bottom_left']),
}

Tooltip.defaultProps = {
  color: 'dark',
  position: 'top_right',
}

export default Tooltip
