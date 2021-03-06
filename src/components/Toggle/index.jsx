import React, { useState } from 'react'

function Toggle({
  className = '',
  defaultChecked = false,
  name = '',
  onChange = () => {},
  icon,
  ...newProps
}) {
  const [checked, setChecked] = useState(false)
  let finalClass = `${className} relative w-14 h-8 flex items-center select-none cursor-pointer`
  let togglerClass =
    'h-6 w-6 left-0 mx-1 absolute z-10 rounded-full transition-transform duration-500 ease-in-out flex justify-center items-center'
  let backgroundClass =
    'absolute left-0 top-0 h-full w-full rounded-full shadow-inner border-2 border-gray-400'
  if (checked) {
    backgroundClass += ' bg-green-400'
    togglerClass += ' transform translate-x-full bg-gray-200 border-green-400'
  } else {
    backgroundClass += ' bg-white'
    togglerClass += ' bg-gray-200 border-gray-100'
  }
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        name={name}
        defaultChecked={defaultChecked}
        onChange={onChange}
        className="hidden"
      />
      <label
        className={finalClass}
        htmlFor={name}
        onClick={() => {
          setChecked(!checked)
        }}
        {...newProps}
      >
        <span className={backgroundClass} />
        <span className={togglerClass}>
          {checked ? icon && <span className="text-sm text-gray-800">{icon}</span> : null}
        </span>
      </label>
    </div>
  )
}

export default Toggle
