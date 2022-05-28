import * as React from 'react'
import classNames from 'classnames'

import './Slider.css'

export interface SliderProps {
  min: number
  max: number
  step: number
  value: number
  height?: number
  onChange?: (value: number) => void
  className?: string
}

interface SliderRailProps {
  children?: React.ReactNode
  className?: string
}

interface SliderTrackProps {
  min: number
  max: number
  value: number
  className?: string
}

interface SliderHandleProps {
  min: number
  max: number
  value: number
  onChange?: (value: number) => void
  className?: string
  style?: React.CSSProperties
}

const SliderRail = ({ children, className }: SliderRailProps) => {
  return (
    <div className={className}>
      { children }
    </div>
  )
}

const SliderTrack = ({ min, max, value, className }: SliderTrackProps) => {
  return (
    <div
      className={className}
      style={{ width: `${(value - min) / (max - min) * 100}%` }}
    />
  )
}

const SliderHandle = ({ min, max, value, onChange, className, style }: SliderHandleProps) => {
  function handleMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    const slider = e.currentTarget.parentElement!
    const sliderWidth = slider.clientWidth
    const sliderLeft = slider.getBoundingClientRect().left
    const mouseX = e.clientX
    const handleLeft = e.currentTarget.getBoundingClientRect().left
    const handleWidth = e.currentTarget.clientWidth
    const handleCenter = handleLeft + handleWidth / 2
    const handleOffset = handleCenter - mouseX
    const handleMove = (e: MouseEvent) => {
      const newLeft = e.clientX + handleOffset
      const newValue = ((newLeft - sliderLeft) / sliderWidth * (max - min) + min)
      if (onChange) onChange(newValue)
    }
    const handleUp = () => {
      document.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseup', handleUp)
    }
    document.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseup', handleUp)
  }
  return (
    <div
      className={className}
      style={{
        ...style,
        left: `${(value - min) / (max - min) * 100}%`,
      }}
      onMouseDown={handleMouseDown}
    />
  )
}

const Slider = (props: SliderProps) => {
  const { min, max, step, value, onChange, className, height = 2 } = props

  const precisionValue = Math.round(value / step) * step

  return (
    <div className={classNames(
      'slider',
      'py-1 box-content',
      className,
    )} style={{ height: `${height}px` }}>
      <SliderRail className="slider-rail relative h-full bg-light hover:children:visible">
        <SliderTrack
          className="slider-track h-full bg-highlight"
          min={min}
          max={max}
          value={precisionValue}
        />
        <SliderHandle
          className={classNames(
            'slider-handle',
            'absolute left-0 transform -translate-x-1/2 -translate-y-1/2',
            'w-3 h-3 rounded-full bg-white shadow-inner shadow-xl cursor-pointer',
          )}
          style={{ marginTop: `-${height / 2}px` }} // margin-top: half of slider height
          min={min}
          max={max}
          value={precisionValue}
          onChange={onChange}
        />
      </SliderRail>
    </div>
  )
}

export default Slider
