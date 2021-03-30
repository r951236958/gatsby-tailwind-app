import React, { useEffect, useState, useRef } from 'react'

const Dropdown = ({ value, options, placeholder = 'Select', onChange }) => {
  const node = useRef()

  const [open, setOpen] = useState(false)

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return
    }
    // outside click
    setOpen(false)
  }

  const handleChange = (selectedValue) => {
    onChange(selectedValue)
    setOpen(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  return (
    <div ref={node} className="text-black bg-gray-200">
      <button className="px-3 py-2 mb-0" onClick={(e) => setOpen(!open)}>
        {value || placeholder}
      </button>
      {open && (
        <ul className="flex flex-col items-start w-full text-black bg-gray-200">
          {options.map((opt, i) => (
            <li
              key={i}
              className="px-2 border-gray-700 border-t-1 border-b-1"
              onClick={(e) => handleChange(opt)}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Dropdown
