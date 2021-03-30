import React, { useState } from 'react'
import { acnh } from './acnh'
import ModalImage, { Lightbox } from 'react-modal-image'

const LightboxDemo = () => {
  const [isOpen, setIsOpen] = useState(true)

  const handleCloseLightbox = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      {acnh.map((items, i) => (
        <ModalImage
          key={i}
          small={items.small}
          large={items.large}
          alt={items.alt}
        />
      ))}
    </>
  )
}

export default LightboxDemo
