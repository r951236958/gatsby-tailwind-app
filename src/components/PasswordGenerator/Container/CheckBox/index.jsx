import PropTypes from "prop-types"
import React from "react"
import "./CheckBox.css"

const CheckBox = props => {
  const { label, value, checked, name, onChange, disabled } = props

  return (
    <>
      <div className="w-1/2 px-3 my-3 overflow-hidden sm:my-2 sm:px-2 sm:w-full md:my-2 md:px-2 md:w-full lg:my-3 lg:px-3 lg:w-1/2 xl:my-2 xl:px-2 xl:w-1/2">
        <label className="flex justify-start space-x-4" htmlFor={name}>
          <input
            id={name}
            type="checkbox"
            name={name}
            checked={checked}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className="align-middle checkbox--input"
          />
          <span className="text-base font-semibold text-gray-500 uppercase dark:text-gray-200 ">
            {label}
          </span>
          <span
            className="check-mark"
            style={{ opacity: disabled ? "0.7" : "" }}
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
