import React from "react"

const Toggle = ({ checked, onChange }) => (
  <span className="toggle-control">
    <input
      className="dark-mode-toggle"
      type="checkbox"
      checked={checked}
      onChange={onChange}
      id="darkToggle"
    />
    <label htmlFor="darkToggle" />
  </span>
)

export default Toggle
