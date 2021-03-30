import React from 'react'

function RadioGroup({
  className = '',
  label = '',
  name,
  radios = [],
  onChange = () => {},
  error = false,
  errorText = '',
  description = '',
  horizontal = false,
  ...newProps
}) {
  const hasError = error || errorText
  let finalClass = `${className}`
  if (hasError) finalClass += ' border-red-600'
  let radiosWrapperClass = ''
  let radioClass = 'flex items-center'
  if (horizontal) {
    radiosWrapperClass += 'flex flex-wrap'
    radioClass += ' mr-4'
  } else radioClass += ' mb-3 last:mb-0'
  const Radios = radios.map((r) => (
    <div key={`${r.value}-${name}`} className={radioClass}>
      <input
        name={name}
        value={r.value}
        type="radio"
        className="w-6 h-6 border border-gray-300 rounded-full outline-none appearance-none cursor-pointer checked:bg-blue-400"
        id={`${r.value}-${name}`}
        onChange={(e) => onChange(e.currentTarget.value)}
        defaultChecked={r.checked}
      />
      <label className="ml-2 text-sm" htmlFor={`${r.value}-${name}`}>
        {r.label}
      </label>
    </div>
  ))
  return (
    <div className={finalClass} {...newProps}>
      {label && (
        <label
          className={`mb-4 text-sm text-gray-600 inline-block ${
            hasError && 'text-red-600'
          }`}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <div className={radiosWrapperClass}>{Radios}</div>
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

export default RadioGroup
