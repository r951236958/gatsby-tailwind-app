import React from 'react'

import Button from './Button'

function SimpleCard({
  className = '',
  image = '',
  title = '',
  text = '',
  buttonText = null,
  buttonLink = '',
  html = null,
  ...newProps
}) {
  let finalClass = `${className} w-72 max-w-full border border-gray-300 rounded-sm bg-white`
  return (
    <div className={finalClass}>
      {image && (
        <div className="w-full h-48">
          <img src={image} className="object-cover w-full h-full" />
        </div>
      )}
      <div className="p-6">
        {title && <h5 className="text-lg font-medium">{title}</h5>}
        {text && <p className={`${title && 'mt-2'}`}>{text}</p>}
        {html}
        {buttonText && (
          <div className="flex mt-4">
            <Button text={buttonText} link={buttonLink} />
          </div>
        )}
      </div>
    </div>
  )
}

export default SimpleCard
