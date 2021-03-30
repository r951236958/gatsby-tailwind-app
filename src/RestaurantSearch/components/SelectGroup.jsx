import React from "react"

function SelectGroup({
  className = "",
  name,
  options = [],
  onChange = () => {},
  error = false,
  errorText = "",
  description = "",
  placeholder = "",
  label = "",
  noBorder = false,
  ...newProps
}) {
  const hasError = error || errorText
  let finalClass = `${className} block appearance-none w-full bg-white rounded-sm pl-4 py-3 pr-8 cursor-pointer focus:outline-none`
  if (hasError) finalClass += " border-red-600"
  if (!noBorder) finalClass += " border border-gray-300 hover:border-gray-400"
  const Options = options.map(o => (
    <option key={`${o.value}-${name}`} selected={o.selected} value={o.value}>
      {o.label}
    </option>
  ))
  return (
    <div>
      {label && (
        <label
          className={`text-sm text-gray-600 inline-block ${
            hasError && "text-red-600"
          }`}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <div className="relative flex w-full">
        <select
          className={finalClass}
          onChange={e => onChange(e.currentTarget.value)}
          {...newProps}
        >
          {placeholder ? <option>{placeholder}</option> : null}
          {Options}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 text-blue-400 pointer-events-none">
          <svg
            className="w-6 h-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
      {description && (
        <span className="mt-2 text-xs text-gray-600">{description}</span>
      )}
      {errorText && (
        <div className="px-4 py-2 mt-2 text-xs text-red-600 bg-red-200 rounded-sm">
          {errorText}
        </div>
      )}
    </div>
  )
}

export default SelectGroup