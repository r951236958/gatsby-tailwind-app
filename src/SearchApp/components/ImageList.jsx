import React from 'react'
import ImageCard from './ImageCard'

const ImageList = ({ photos }) => {
  return (
    <>
      <div id="search-photos" className="photos">
        {photos.map((image) => (
          <div key={image.id}>
            <ImageCard image={image} />
          </div>
        ))}
      </div>
    </>
  )
}

export default ImageList
