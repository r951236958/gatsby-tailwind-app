import React from 'react'
import PropTypes from 'prop-types'

import './CheckBox.css'

const CheckBox = (props) => {
  const { label, value, checked, name, onChange, disabled } = props

  return (
    <>
      <div className="w-1/2 lg:w-full">
        <label
          htmlFor={name}
          className="inline-flex items-center justify-center space-x-2"
          id="pwd-options"
        >
          <input
            id={name}
            type="checkbox"
            name={name}
            checked={checked}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={`w-5 h-5 rounded text-cyan-500 bg-gray-700 bg-opacity-30 form-checkbox ${
              disabled ? 'opacity-70' : 'opacity-100'
            }`}
          />
          <span>{label}</span>
          <span
            className="hidden checkmark"
            style={{ opacity: disabled ? '0.7' : '' }}
          ></span>
        </label>
      </div>
    </>
  )
}

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  checked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default CheckBox
