import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './RangeSlider.css'
import classNames from 'classnames'

const RangeSlider = ({ min, max, onChange, minValue, maxValue, step, gapValue, tooltip, containerClassName }) => {
  const progressRef = useRef(null)
  const minTooltipRef = useRef(null)
  const maxTooltipRef = useRef(null)
  const [minimumValue, setMinimumValue] = useState(+minValue)
  const [maximumValue, setMaximumValue] = useState(+maxValue)

  useEffect(() => {
    if (progressRef.current) {
      const progressLeft = ((minimumValue - min) / (max - min)) * 100 + '%'
      const progressRight = ((max - maximumValue) / (max - min)) * 100 + '%'
      progressRef.current.style.left = progressLeft
      progressRef.current.style.right = progressRight

      if (tooltip) {
        minTooltipRef.current.style.left = `calc(${progressLeft} - ${minTooltipRef.current.offsetWidth / 2 - 12}px)`
        maxTooltipRef.current.style.right = `calc(${progressRight} - ${maxTooltipRef.current.offsetWidth / 2 - 12}px)`
      }

      if (parseInt(progressRight) > 25 && maxTooltipRef.current) {
        maxTooltipRef.current.style.right = `calc(${progressRight} - ${maxTooltipRef.current.offsetWidth / 2}px)`
      }

      if (parseInt(progressLeft) > 25 && minTooltipRef.current) {
        minTooltipRef.current.style.left = `calc(${progressLeft} - ${minTooltipRef.current.offsetWidth / 2}px)`
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minimumValue, maximumValue, min, max])

  const handleMinRangeChange = event => {
    const newMinValue = +event.target.value

    if (maximumValue - newMinValue < gapValue) {
      setMinimumValue(maximumValue - gapValue)
      onChange?.(event, maximumValue - gapValue, maximumValue)
    } else {
      setMinimumValue(newMinValue)
      onChange?.(event, newMinValue, maximumValue)
    }
  }

  const handleMaxRangeChange = event => {
    const newMaxValue = +event.target.value

    if (newMaxValue - minimumValue < gapValue) {
      setMaximumValue(minimumValue + +gapValue)
      onChange?.(event, minimumValue, minimumValue + +gapValue)
    } else {
      setMaximumValue(newMaxValue)
      onChange(event, minimumValue, newMaxValue)
    }
  }

  return (
    <div className={classNames({ [containerClassName]: containerClassName })}>
      <div className='h-2 max-w-[320px] w-full rounded bg-gray100 relative'>
        <div ref={progressRef} className='h-full max-w-[320px] rounded absolute bg-primary600 ' />
      </div>
      <div className={'relative max-w-[320px] w-full'}>
        <input
          min={min}
          max={max}
          step={step}
          type='range'
          value={minimumValue}
          onInput={handleMinRangeChange}
          style={{ WebkitAppearance: 'none', MozAppearance: 'none' }}
          className='bg-transparent outline-none absolute bottom-0 top-[-8px] h-2 w-full pointer-events-none'
        />
        {tooltip && (
          <p
            ref={minTooltipRef}
            className={`absolute top-[-70px] ${tooltip === 'top' ? 'top-[-70px]' : 'top-5'} bg-white rounded-lg py-2 px-3`}
            data-tooltip={tooltip === 'top' ? 'top_tooltip' : tooltip === 'bottom' ? 'bottom_tooltip' : null}
          >
            {minimumValue}%
          </p>
        )}

        <input
          min={min}
          max={max}
          step={step}
          type='range'
          value={maximumValue}
          onInput={handleMaxRangeChange}
          style={{ WebkitAppearance: 'none', MozAppearance: 'none' }}
          className='bg-transparent absolute outline-none top-[-8px] h-2 w-full pointer-events-none'
        />
        {tooltip && (
          <p
            ref={maxTooltipRef}
            className={`absolute ${tooltip === 'top' ? 'top-[-70px]' : 'top-5'} bg-white rounded-lg py-2 px-3`}
            data-tooltip={tooltip === 'top' ? 'top_tooltip' : tooltip === 'bottom' ? 'bottom_tooltip' : null}
          >
            {maximumValue}%
          </p>
        )}
      </div>
    </div>
  )
}

RangeSlider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  gapValue: PropTypes.number,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  onChange: PropTypes.func,
  containerClassName: PropTypes.string,
  tooltip: PropTypes.oneOf(['top', 'bottom']),
}

RangeSlider.defaultProps = {
  min: 0,
  max: 0,
  step: 10,
  minValue: 10,
  maxValue: 50,
  gapValue: 10,
}

export default RangeSlider
