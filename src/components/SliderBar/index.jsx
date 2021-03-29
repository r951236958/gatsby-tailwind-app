import React, { useRef, useState } from 'react'

const SliderBar = (props) => {
  const { step, min, max, value, defaultLength, onChangeValue } = props

  const rangeRef = useRef()
  let [range, setRange] = useState()

  const activeRangeColor = '#4aa1f3'
  const rangeBackground = '#d7dcdf'

  const handleChange = (max) => (e) => {
    onChangeValue(e)
    const value = e.target.value
    setRange(value)
    const progress = (value / max) * 100 + '%'
    const newBackgroundStyle = `linear-gradient(90deg, ${activeRangeColor} 0% ${progress}, ${rangeBackground} ${progress} 100%)`
    rangeRef.current.style.background = newBackgroundStyle
  }

  if (range !== defaultLength || !range) {
    range = defaultLength
  }

  const progressValue = range
  const progress = (progressValue / max) * 100 + '%'
  const styleInput = {
    background: `linear-gradient(90deg, ${activeRangeColor} 0% ${progress}, ${rangeBackground} ${progress} 100%)`,
  }

  return (
    <div className="w-2/3 row">
      <label
        htmlFor="progress-value"
        className="inline-flex items-center w-full"
      >
        <input
          ref={rangeRef}
          id="progress-value"
          className="h-2 p-0 m-0 rounded-full outline-none appearance-none col-md-8"
          type="range"
          step={step}
          min={min}
          max={max}
          value={value}
          onChange={handleChange(max)}
          style={styleInput}
        />

        <span id="sliderbar-value">{progressValue}</span>
      </label>
    </div>
  )
}

export default SliderBar